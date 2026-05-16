import { Link } from 'react-router-dom';
import { Clock, Mail, ShieldOff, UserX } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails } from '@/data/siteData';

const deletionSteps = [
  'Open the Raj Motors dashboard and go to Settings.',
  'Select the Security tab.',
  'Review what happens when your account is deactivated.',
  'Choose Deactivate Account.',
  'Type DEACTIVATE in the confirmation box and submit the request.',
];

const retentionNotes = [
  {
    icon: UserX,
    title: 'Account access is disabled',
    copy: 'Deactivation signs the account out and prevents future login until Raj Motors support reactivates it after identity verification.',
  },
  {
    icon: ShieldOff,
    title: 'No hard deletion is performed',
    copy: 'The account is marked inactive instead of being permanently deleted, so business records can be retained where required.',
  },
  {
    icon: Clock,
    title: 'Processing timeline',
    copy: 'Requests are normally reviewed within 7 working days. Support may contact you if more verification is needed.',
  },
  {
    icon: Mail,
    title: 'Need help',
    copy: `Email ${contactDetails.email} or call ${contactDetails.phone} if you cannot access your account settings.`,
  },
];

export default function AccountDeletion() {
  return (
    <>
      <SEO
        title="Account Deletion Instructions"
        description="Learn how to request Raj Motors account deactivation from dashboard security settings without permanent deletion of records."
        keywords="Raj Motors account deletion, Raj Motors deactivate account, account deactivation instructions"
      />

      <AnimatedSection className="bg-[#f5f9ff] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Account Support"
            title="Account Deletion Instructions"
            description="Raj Motors handles account removal requests by deactivating the account. This disables access while preserving records needed for enquiry history, support, and compliance."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-tata-navy p-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-10">
              <h2 className="font-display text-3xl font-extrabold">Request from settings</h2>
              <ol className="mt-7 space-y-4">
                {deletionSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 font-body text-sm leading-7 text-slate-200">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 font-display text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link to="/dashboard/settings?tab=security" className="orange-button mt-8 bg-white text-tata-navy hover:bg-brand-50">
                Open security settings
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {retentionNotes.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-extrabold text-slate-950">{item.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-slate-600">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
            <h2 className="font-display text-2xl font-extrabold text-slate-950">Manual request option</h2>
            <p className="mt-3 font-body text-sm leading-7 text-slate-600">
              If you cannot sign in, send a deactivation request from your registered email address to{' '}
              <a href={`mailto:${contactDetails.email}`} className="font-bold text-brand-700">
                {contactDetails.email}
              </a>
              . Include your name, mobile number, and reason for account deactivation.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
