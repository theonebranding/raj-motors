import { Mail, MapPin, PhoneCall } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails } from '@/data/siteData';

export default function Contact() {
  return (
    <>
    <SEO
      title="Contact"
      description="Contact Raj Motors Godhra by phone, email, or showroom visit for Tata commercial vehicle enquiries."
      keywords="Raj Motors contact, Raj Motors Godhra phone, Tata commercial vehicle enquiry, Godhra showroom"
    />
    <AnimatedSection className="section-shell py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Talk to Raj Motors"
        description="Use this page to call, email, or plan a visit to the Godhra location."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="panel rounded-[1.5rem] p-6">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">Phone</p>
            <a href={`tel:${contactDetails.phone}`} className="mt-4 flex items-center gap-3 font-display text-2xl font-extrabold text-slate-950">
              <PhoneCall className="h-5 w-5 text-brand-700" />
              {contactDetails.phone}
            </a>
          </div>
          <div className="panel rounded-[1.5rem] p-6">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">Email</p>
            <a href={`mailto:${contactDetails.email}`} className="mt-4 flex items-center gap-3 break-all font-display text-lg font-extrabold text-slate-950 sm:text-xl">
              <Mail className="h-5 w-5 text-brand-700" />
              {contactDetails.email}
            </a>
          </div>
          <div className="panel rounded-[1.5rem] p-6">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">Address</p>
            <p className="mt-4 flex items-start gap-3 font-body text-sm leading-7 text-slate-600">
              <MapPin className="mt-0.5 h-5 w-5 text-brand-700" />
              {contactDetails.address}
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-brand-50 p-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">Quick help</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-slate-950">Need the right model fast?</h2>
          <p className="mt-4 font-body text-sm leading-7 text-slate-700">
            Tell the team which family you are interested in, and they can point you to the relevant PDF or suggest a
            direct comparison between models.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Ace', 'Intra', 'Yodha', 'Magic', 'EV Range', 'Fleet enquiries'].map((item) => (
              <div key={item} className="rounded-full bg-white px-4 py-3 font-body text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-100 bg-white">
            <iframe
              title="Raj Motors Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.344111157721!2d73.6012848!3d22.7526075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39609b4d5620d611%3A0x1f0f4b500ecf8c22!2sRaj%20Motors!5e0!3m2!1sen!2sin!4v1779102103499!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full md:h-[340px]"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
    <CTASection title="Prefer to speak directly?" description="Call Raj Motors now or use the contact details above to plan your showroom visit." />
    </>
  );
}
