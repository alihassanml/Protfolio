"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

type Web3FormsResponse = { success: boolean; message: string };

const projectTypes = [
  "Computer vision",
  "LLM or agents",
  "RAG or document AI",
  "MLOps or deployment",
  "AI product build",
  "Something else",
];

/** Shared field shell. No borders; bg-paper wells sit inside the bg-oat panel. */
const fieldClass =
  "w-full rounded-xl bg-paper px-4 py-3.5 text-ink placeholder:text-ink-mute outline-none transition-shadow focus:ring-2 focus:ring-pine/40";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const values = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ access_key: site.formKey, ...values }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (result.success) {
        setStatus("success");
        return;
      }

      setError(
        `The form service rejected the message: ${result.message} Email ${site.email} directly and it reaches the same inbox.`,
      );
      setStatus("error");
    } catch {
      setError(
        `The message never reached the server. The request failed before it was sent. Check your connection and try again, or email ${site.email} directly.`,
      );
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <div>
      {status !== "success" && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot: visible only to bots. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <input
            type="hidden"
            name="subject"
            value={`New project enquiry via ${site.url}`}
            readOnly
          />

          <div>
            <label htmlFor="contact-name" className="label">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={`mt-2.5 ${fieldClass}`}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="label">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={`mt-2.5 ${fieldClass}`}
            />
          </div>

          <div>
            <label htmlFor="contact-project-type" className="label">
              Project type
            </label>
            <div className="relative mt-2.5">
              <select
                id="contact-project-type"
                name="project_type"
                defaultValue={projectTypes[0]}
                className={`appearance-none pr-11 ${fieldClass}`}
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                strokeWidth={1.75}
                aria-hidden
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="What are you building, what data do you have, and when does it need to ship?"
              className={`mt-2.5 resize-y ${fieldClass}`}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-ink px-7 py-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine disabled:cursor-not-allowed disabled:bg-ink-mute disabled:hover:bg-ink-mute"
          >
            {submitting ? "Sending" : "Send message"}
          </button>
        </form>
      )}

      <div role="status" aria-live="polite">
        {status === "success" && (
          <div>
            <p className="label text-pine">Sent</p>
            <p className="d-3 mt-4 font-display font-bold tracking-tight text-ink">
              Message received.
            </p>
            <p className="mt-4 text-ink-soft">
              It is in {site.name}&rsquo;s inbox and you will have a reply within
              a day, usually the same one.
            </p>
          </div>
        )}

        {status === "error" && (
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink">{error}</p>
        )}
      </div>
    </div>
  );
}
