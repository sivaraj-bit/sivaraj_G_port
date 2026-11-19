import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { socialLinks } from "../data/socials";

// Show only email, GitHub and LinkedIn here (the resume has its own button)
const contactLinks = socialLinks.filter((link) => link.name !== "Resume");
const emailAddress = socialLinks
  .find((link) => link.name === "Email")
  ?.href.replace("mailto:", "");

const MESSAGE_LIMIT = 3000;

function Contact() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is still visible and selectable on the page
      setStatus({
        type: "error",
        message: `Could not copy automatically. My email is ${emailAddress}`,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never see this field, bots usually fill it in
    if (formData.get("company")) {
      form.reset();
      setMessageLength(0);
      return;
    }

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS environment variables:", {
        serviceID: !!serviceID,
        templateID: !!templateID,
        publicKey: !!publicKey,
      });

      setStatus({
        type: "error",
        message:
          "The contact form is not available right now. Please email me directly.",
      });

      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent. I'll reply soon.",
      });

      form.reset();
      setMessageLength(0);
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Error status:", error.status);
      console.error("Error text:", error.text);

      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-line bg-page px-4 py-4 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

  return (
    <section
      id="contact"
      className="bg-page px-6 py-24 text-ink md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let&apos;s Work Together<span className="text-brand">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            I am looking for an entry-level full stack developer role. If you
            have an opening, a project idea or just a question, send me a
            message and I will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Contact information */}
          <div className="flex flex-col rounded-2xl border border-line bg-card p-7 md:p-9">
            <h3 className="mb-2 text-xl font-bold">Get in touch</h3>
            <p className="mb-8 text-sm leading-6 text-muted">
              The quickest way to reach me is by email. You can also find me on
              GitHub and LinkedIn.
            </p>

            <div className="space-y-3">
              {contactLinks.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 text-sm text-ink transition-colors duration-300 hover:border-brand"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-brand">
                    <Icon size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted">{name}</span>
                    <span className="block break-all font-medium">
                      {name === "Email"
                        ? emailAddress
                        : href.replace("https://", "").replace("www.", "")}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted transition-colors group-hover:text-brand"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy email"}
              </button>

              <a
                href="/Sivaraj_G_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                View My CV
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-line bg-card p-7 md:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field (hidden from real visitors) */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  maxLength={MESSAGE_LIMIT}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  className={`${inputClasses} resize-none`}
                />
                <p className="mt-2 text-right text-xs text-muted">
                  {messageLength} / {MESSAGE_LIMIT}
                </p>
              </div>

              {status.message && (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  className={`text-sm leading-6 ${
                    status.type === "success"
                      ? "text-brand"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-page transition-colors duration-300 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;