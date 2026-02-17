"use client";
import { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const FORM_SUBMIT_TIMEOUT_MS = 25_000;

interface ContactFormProps {
  isDemo?: boolean;
}

export default function ContactForm({ isDemo = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  useEffect(() => {
    if (isDemo) {
      setSubject("Demo Request: ");
    }
  }, [isDemo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittedOnce || loading) return;
    setLoading(true);
    setError(null);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),
      phone: (
        form.elements.namedItem("phone") as HTMLInputElement
      ).value.trim(),
      companyName: (
        form.elements.namedItem("companyName") as HTMLInputElement
      ).value.trim(),
      jobTitle: (
        form.elements.namedItem("jobTitle") as HTMLInputElement
      ).value.trim(),
      subject: (
        form.elements.namedItem("subject") as HTMLInputElement
      ).value.trim(),
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim(),
    };

    // Validation
    if (!formData.name) {
      setError("Full Name is required");
      setLoading(false);
      return;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!formData.message) {
      setError("Message is required");
      setLoading(false);
      return;
    }

    if (!formData.subject) {
      setError("Subject is required");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        source: "CONTACT_FORM",
        tenant: "6953cd86745c6d41b94fc7ff",
        personal: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
        },
        company: {
          name: formData.companyName || "",
          title: formData.jobTitle || "",
        },
        ownerId: "6953cd86745c6d41b94fc7ff",
        subject: formData.subject,
        message: formData.message,
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FORM_SUBMIT_TIMEOUT_MS);

      const response = await fetch(
        "https://dev.app.nipige.com/crm/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        const msg = `Failed to submit: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ""}`;
        console.error("[ContactForm] submission error:", msg);
        throw new Error(msg);
      }

      await response.json();
      setSubmitted(true);
      setSubmittedOnce(true);
      form.reset();
      if (isDemo) {
        setSubject("Demo Request: ");
      } else {
        setSubject("");
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.name === "AbortError"
            ? "Request timed out. Please check your connection and try again."
            : err.message
          : "Failed to submit the form. Please try again.";
      setError(message);
      if (err instanceof Error && err.name !== "AbortError") {
        console.error("[ContactForm] submission error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Thank you!
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          We've received your message. <br />
          Our team will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <ExclamationCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 text-sm font-medium">Error</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Your company name"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Job Title */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Your job title"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Subject / Topic */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Subject / Topic</label>
        <input
          type="text"
          name="subject"
          placeholder="What is this regarding?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Tell us about your project or inquiry"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[130px]"
          required
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 font-semibold text-white text-lg
  hover:bg-blue-700
  transition-transform duration-150 hover:-translate-y-0.5 shadow-md
  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
  flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
