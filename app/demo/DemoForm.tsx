"use client";

import { useState } from "react";
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // when API is get ready
    // const formData = new FormData(e.currentTarget);
    // await fetch("/api/demo", { method: "POST", body: formData });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-lg shadow-xl border border-green-200 text-center">
        <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
          Thank you!
        </h3>
        <p className="text-slate-600">
          We’ve received your request. <br />
          Our team will connect with you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-xl border border-gray-200"
    >
      <input required placeholder="Name" className="input" />
      <input required type="email" placeholder="Email" className="input" />
      <input required placeholder="Phone" className="input" />
      <input required placeholder="Topic" className="input" />
      <textarea required placeholder="Message" className="input h-28" />

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        {loading ? "Submitting..." : "Submit"}
        <PaperAirplaneIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
