import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails } from '@/data/siteData';

const termsPoints = [
  {
    title: 'Use of Website Content',
    copy:
      'Raj Motors provides this website for informational use related to Tata commercial vehicle families, models, brochures, and dealership contact. Content is intended to support buyer research before direct showroom confirmation.',
  },
  {
    title: 'Product and Pricing Disclaimer',
    copy:
      'Model features, colors, specifications, brochure content, finance options, pricing, and availability can change without notice. Final details are confirmed only through direct discussion with Raj Motors.',
  },
  {
    title: 'Enquiry Responsibility',
    copy:
      'When sharing contact details or requirements, you confirm that the provided information is accurate and belongs to you or is shared with proper authorization.',
  },
  {
    title: 'Third-Party Links and Files',
    copy:
      'Brochure files and references may include third-party branding or manufacturer materials. Raj Motors is not responsible for external websites or sources linked from this site.',
  },
  {
    title: 'Intellectual Property',
    copy:
      'Website layout, copy, and presentation are managed for Raj Motors business use. Unauthorized reproduction, redistribution, or commercial reuse without permission is restricted.',
  },
  {
    title: 'Limitation of Liability',
    copy:
      'Raj Motors is not liable for any direct or indirect loss arising from reliance on website content without independent showroom verification, including decisions based on outdated brochure or specification information.',
  },
  {
    title: 'Updates to Terms',
    copy:
      'These terms may be updated as product lines, policies, or legal requirements evolve. Continued use of the website indicates acceptance of the latest version.',
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read Raj Motors terms and conditions covering website use, product disclaimers, brochure information, and enquiry responsibilities."
        keywords="Raj Motors terms and conditions, Raj Motors legal terms, Godhra showroom website terms"
      />

      <AnimatedSection className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Legal"
            title="Terms and Conditions"
            description="These terms govern the use of the Raj Motors website and its product information sections."
          />

          <div className="mt-10 rounded-[2rem] border border-slate-100 bg-[#f5f9ff] p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="font-body text-sm leading-7 text-slate-600">
              Last updated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>

            <div className="mt-8 grid gap-6">
              {termsPoints.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                  <h2 className="font-display text-2xl font-extrabold text-slate-950">{item.title}</h2>
                  <p className="mt-3 font-body text-sm leading-7 text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h3 className="font-display text-2xl font-extrabold text-slate-950">Official contact</h3>
              <p className="mt-3 font-body text-sm leading-7 text-slate-700">{contactDetails.name}</p>
              <p className="mt-2 font-body text-sm leading-7 text-slate-700">Phone: {contactDetails.phone}</p>
              <p className="font-body text-sm leading-7 text-slate-700">Email: {contactDetails.email}</p>
              <p className="font-body text-sm leading-7 text-slate-700">Address: {contactDetails.address}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
