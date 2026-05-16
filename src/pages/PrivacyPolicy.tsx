import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails } from '@/data/siteData';

const policyPoints = [
  {
    title: 'Information We Collect',
    copy:
      'When you contact Raj Motors through phone, email, or enquiry forms, we may collect your name, mobile number, email address, location details, and vehicle interest so our team can respond with relevant product guidance.',
  },
  {
    title: 'How We Use Information',
    copy:
      'The information is used only for enquiry follow-up, brochure sharing, vehicle comparison support, showroom coordination, and service communication related to your request.',
  },
  {
    title: 'Brochure and Product Data',
    copy:
      'This website presents commercial vehicle families, model summaries, and brochure files for guidance. Product details, features, pricing, availability, finance, and specifications can change and should be confirmed directly with the Raj Motors showroom.',
  },
  {
    title: 'Data Sharing',
    copy:
      'Raj Motors does not sell your personal data. Your information may be shared only with relevant internal dealership staff to process enquiries and provide support.',
  },
  {
    title: 'Data Security and Retention',
    copy:
      'Reasonable safeguards are used to protect contact information. Enquiry details may be retained for business communication records, support continuity, and compliance needs.',
  },
  {
    title: 'Your Choices',
    copy:
      'You may request updates or removal of your enquiry information by contacting Raj Motors through the details on this page. We will process reasonable requests in line with applicable requirements.',
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Raj Motors privacy policy for enquiry data usage, communication, brochure information handling, and contact preferences."
        keywords="Raj Motors privacy policy, Raj Motors data policy, Godhra commercial vehicle enquiry privacy"
      />

      <AnimatedSection className="bg-[#f5f9ff] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description="This policy explains how Raj Motors handles enquiry and contact information submitted through this website."
          />

          <div className="mt-10 rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="font-body text-sm leading-7 text-slate-600">
              Effective date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
            <div className="mt-8 grid gap-6">
              {policyPoints.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-5">
                  <h2 className="font-display text-2xl font-extrabold text-slate-950">{item.title}</h2>
                  <p className="mt-3 font-body text-sm leading-7 text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-tata-navy p-6 text-white">
              <h3 className="font-display text-2xl font-extrabold">Contact for privacy requests</h3>
              <p className="mt-3 font-body text-sm leading-7 text-slate-300">{contactDetails.name}</p>
              <p className="mt-2 font-body text-sm leading-7 text-slate-300">Phone: {contactDetails.phone}</p>
              <p className="font-body text-sm leading-7 text-slate-300">Email: {contactDetails.email}</p>
              <p className="font-body text-sm leading-7 text-slate-300">Address: {contactDetails.address}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
