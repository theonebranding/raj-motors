import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 font-body text-sm font-semibold text-slate-700">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-black bg-white px-4 py-3 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-2 font-body text-sm font-semibold text-slate-700">
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="rounded-2xl border border-black bg-white px-4 py-3 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          />
        </label>
      </div>
      <label className="grid gap-2 font-body text-sm font-semibold text-slate-700">
        Interested vehicle
        <select
          name="vehicle"
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-body text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        >
          <option>Ace</option>
          <option>Intra</option>
          <option>Yodha</option>
          <option>Magic</option>
          <option>EV Range</option>
          <option>Fleet enquiry</option>
        </select>
      </label>
      <label className="grid gap-2 font-body text-sm font-semibold text-slate-700">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us what you want to compare or buy"
          className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        />
      </label>
      <button type="button" className="orange-button mt-2 w-full sm:w-auto">
        Send enquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
