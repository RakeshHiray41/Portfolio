import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT } from "../data/profile";

const INFO_ITEMS = [
  { icon: Mail, value: CONTACT.email, href: `mailto:${CONTACT.email}`, bg: "bg-blueprint" },
  { icon: Phone, value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, bg: "bg-signal" },
  { icon: MapPin, value: CONTACT.location, href: null, bg: "bg-sage" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="animate-rise-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* left: info */}
      <div>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-5">Contact Us</h1>
        <p className="text-muted leading-relaxed max-w-[46ch] mb-10">
         Have a project or opportunity in mind? Let’s connect. Send me a message and I’ll get back to you.
        </p>

        <div className="flex flex-col gap-6">
          {INFO_ITEMS.map((item) => {
            const Icon = item.icon;
            const row = (
              <div className="flex items-center gap-4">
                <span className={`flex items-center justify-center w-11 h-11 rounded-full ${item.bg} text-paper shrink-0`}>
                  <Icon size={18} />
                </span>
                <p className="text-sm">{item.value}</p>
              </div>
            );
            return item.href ? (
              <a key={item.value} href={item.href} className="hover:opacity-80 transition-opacity">
                {row}
              </a>
            ) : (
              <div key={item.value}>{row}</div>
            );
          })}
        </div>
      </div>

      {/* right: form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-card border border-line rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blueprint transition-colors"
        />
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-card border border-line rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blueprint transition-colors"
        />
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full bg-card border border-line rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-blueprint transition-colors resize-none"
        />
        <button
          type="submit"
          className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899)" }}
        >
          Submit <Send size={15} />
        </button>
        <p className="font-mono text-xs text-muted mt-1">
          This opens your email client with the message ready to send — nothing is stored here.
        </p>
      </form>
    </div>
  );
}
