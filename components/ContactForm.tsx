"use client";

interface ContactFormProps {
  action?: string;
}

export default function ContactForm({
  action = "/api/contact",
}: ContactFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    if (!form.fullName.value.trim()) {
      e.preventDefault();
      alert("Full Name is required");
      return;
    }

    if (!form.email.value.trim() || !/\S+@\S+\.\S+/.test(form.email.value)) {
      e.preventDefault();
      alert("Enter a valid email address");
      return;
    }

    if (!form.message.value.trim()) {
      e.preventDefault();
      alert("Message is required");
      return;
    }
  }

  return (
    <form
      className="space-y-6"
      method="POST"
      action={action}
      onSubmit={handleSubmit}
    >
      {/* Full Name */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
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

      {/* Company */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-300 font-medium">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Your company name"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 
      placeholder-gray-500 border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
          className="
  w-full py-3 rounded-lg bg-blue-600 font-semibold text-white text-lg
  hover:bg-blue-700
  transition-transform duration-150 hover:-translate-y-0.5 shadow-md
  cursor-pointer
"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
