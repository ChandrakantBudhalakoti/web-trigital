"use client";

import dynamic from "next/dynamic";

// Load Chatbot only after hydration; avoids main-thread work and large payload on initial load
const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  ssr: false,
  loading: () => null,
});

export default function ChatbotLazy() {
  return <Chatbot />;
}
