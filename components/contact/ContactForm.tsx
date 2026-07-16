"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

// No backend is wired up yet — submitting composes a pre-filled email via
// mailto: so nothing is collected or stored. EDIT: swap this handler for a
// real form endpoint (e.g. Formspree, a serverless function) if preferred.
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-surface rounded-2xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-surface rounded-2xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-surface rounded-2xl px-4 py-3 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 self-start px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm hover:bg-blue transition-colors"
      >
        Send Message
        <Send size={14} aria-hidden="true" />
      </button>
    </form>
  );
}
