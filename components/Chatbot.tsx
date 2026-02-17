"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FaTimes, FaPaperPlane, FaComments, FaRobot } from "react-icons/fa";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  buttons?: Button[];
}

interface Button {
  title: string;
  payload: string;
}

interface BotResponse {
  text?: string;
  buttons?: Button[];
}

const API_URL = "https://chatbot.nipige.com/webhooks/rest/webhook";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatLoaded, setIsChatLoaded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate senderId once on mount
  const senderId = useRef(
    "671f66d3ca5fec457479955a" + Math.floor(Math.random() * 10000).toString()
  ).current;

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendPayload = useCallback(
    async (payload: {
      sender: string;
      metadata: Record<string, any>;
      message: string;
    }) => {
      setIsTyping(true);
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data: BotResponse[] = await response.json();
        data.forEach((response) => {
          if (response.text || response.buttons) {
            const newMessage: Message = {
              id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
              sender: "bot",
              text: response.text || "",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              buttons: response.buttons,
            };
            setMessages((prev) => [...prev, newMessage]);
          }
        });
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            sender: "bot",
            text: "Sorry, I encountered an error. Please try again.",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    []
  );

  // Send welcome message when chatbot opens for the first time
  useEffect(() => {
    if (isOpen && !isChatLoaded) {
      const payload = {
        sender: senderId,
        metadata: { type: "trigital_chat_option" },
        message: "welcome trigital chat",
      };
      sendPayload(payload);
      setIsChatLoaded(true);
    }
  }, [isOpen, isChatLoaded, senderId, sendPayload]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showContactForm) {
      setShowContactForm(false);
    }
  };

  const handleResponse = (data: BotResponse[]) => {
    data.forEach((response) => {
      if (response.text || response.buttons) {
        const newMessage: Message = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          sender: "bot",
          text: response.text || "",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          buttons: response.buttons,
        };
        setMessages((prev) => [...prev, newMessage]);
      }
    });
  };

  const appendMessage = (sender: "user" | "bot", text: string) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    // Payload #2: Normal user message
    const payload = {
      sender: senderId,
      metadata: { type: "trigital" },
      message: message,
    };

    appendMessage("user", message);
    setInputValue("");
    await sendPayload(payload);
  };

  const handleButtonClick = async (button: Button) => {
    if (button.title === "Contact Us") {
      setShowContactForm(true);
      appendMessage("user", button.title);
    } else {
      // Payload #3: Button click
      const payloadData = {
        sender: senderId,
        metadata: { type: "trigital_chat_option" },
        message: button.payload,
      };

      appendMessage("user", button.title);
      await sendPayload(payloadData);
    }
  };

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      topic: (form.elements.namedItem("topic") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Payload #4: Contact form submission
    const payload = {
      sender: senderId,
      metadata: {
        type: "trigital_chat_option",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
        topic: formData.topic,
      },
      message: "trigital_contact_us_submit",
    };

    await sendPayload(payload);
    
    // Reset form
    form.reset();
    setShowContactForm(false);
  };

  const parseMessage = (text: string) => {
    const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    const parts: (string | { text: string; url: string })[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push({ text: match[1], url: match[2] });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        id="chatbotButton"
        onClick={toggleChat}
        className="chatbot-button"
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
      >
        {isOpen ? (
          <FaTimes />
        ) : (
          <FaComments />
        )}
      </button>

      {/* Chat Container */}
      <div
        id="chatContainer"
        className={`chat-container ${isOpen ? "visible" : ""}`}
      >
        <div className="chat-header">
          <h3>Chat with us</h3>
          <button
            id="closeChat"
            onClick={toggleChat}
            className="close-chat-button"
            aria-label="Close Chat"
          >
            <FaTimes />
          </button>
        </div>

        <div id="chatBody" ref={chatBodyRef} className="chat-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={
                msg.sender === "bot"
                  ? "bot-message-container"
                  : "user-message-container"
              }
            >
              {msg.sender === "bot" && (
                <div className="bot-profile-icon">
                  <FaRobot />
                </div>
              )}
              {msg.text && (
                <div
                  className={
                    msg.sender === "bot" ? "bot-message" : "user-message"
                  }
                >
                  {msg.sender === "bot" ? (
                    <div>
                      {parseMessage(msg.text).map((part, idx) => {
                        if (typeof part === "string") {
                          return <span key={idx}>{part}</span>;
                        }
                        return (
                          <div key={idx} className="button-container">
                            <button
                              className="option-btn"
                              onClick={() => window.open(part.url, "_blank")}
                            >
                              {part.text}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <span>{msg.text}</span>
                  )}
                  <div className="timestamp">{msg.timestamp}</div>
                </div>
              )}
            </div>
          ))}

          {/* Render buttons only for the most recent bot response with buttons */}
          {(() => {
            // Find the last bot message that has buttons (going backwards from the end)
            for (let i = messages.length - 1; i >= 0; i--) {
              const msg = messages[i];
              // Stop if we hit a user message (buttons belong to the bot response before user's reply)
              if (msg.sender === "user") {
                break;
              }
              // If this bot message has buttons, show them
              if (msg.sender === "bot" && msg.buttons && msg.buttons.length > 0) {
                return (
                  <div key={`buttons-${msg.id}`} className="button-container">
                    {msg.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        className="option-btn"
                        onClick={() => handleButtonClick(button)}
                      >
                        {button.title}
                      </button>
                    ))}
                  </div>
                );
              }
            }
            return null;
          })()}

          {/* Contact Form */}
          {showContactForm && (
            <form
              id="contactForm"
              onSubmit={handleContactFormSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  placeholder="Topic"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </form>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bot-message-container">
              <div className="bot-message typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-container">
          <input
            id="chatInput"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button
            id="sendMessage"
            onClick={handleSendMessage}
            className="send-message-button"
            aria-label="Send Message"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
}

