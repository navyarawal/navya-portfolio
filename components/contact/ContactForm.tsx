"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

// Submissions relay through FormSubmit (formsubmit.co) — no backend or
// account needed. The FIRST submission emails an activation link to
// site.email; after that one-time confirmation, every message lands in
// the inbox directly. If the relay is unreachable, the error state falls
// back to a pre-filled mailto: link so no message is ever lost.
// Optional: after activation, FormSubmit issues a random alias endpoint
// (Settings → your form) — swap it in below to keep the address out of
// the request URL.
const ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent("navyarawal@g.ucla.edu")}`;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 max-w-md bg-surface rounded-3xl p-6">
        <CheckCircle2 size={28} className="text-green" aria-hidden="true" />
        <p className="font-semibold">Message sent — thank you!</p>
        <p className="text-sm text-ink-soft">
          I&apos;ll get back to you at the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold underline decoration-2 underline-offset-4 decoration-amber hover:decoration-coral"
        >
          Send another message
        </button>
      </div>
    );
  }

  const mailtoFallback = `mailto:${site.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "a visitor"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`;

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
          autoComplete="name"
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
          autoComplete="email"
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
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 self-start px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm hover:bg-blue transition-colors disabled:opacity-60 disabled:hover:bg-ink"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        <Send size={14} aria-hidden="true" />
      </button>
      {status === "error" ? (
        <p role="alert" className="text-sm text-ink-soft">
          Hmm, that didn&apos;t go through.{" "}
          <a
            href={mailtoFallback}
            className="font-semibold underline decoration-2 underline-offset-4 decoration-coral"
          >
            Email me directly instead
          </a>
          — your message is preserved in the draft.
        </p>
      ) : null}
    </form>
  );
}
