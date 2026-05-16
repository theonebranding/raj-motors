import { CheckCircle2, MapPin, PhoneCall, Users, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import HeroImageSlider from '@/components/HeroImageSlider';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails } from '@/data/siteData';

const pillars = [
  {
    icon: Users,
    title: 'Customer-first guidance',
    copy: 'The site is organized so visitors can compare product families before they call or visit.',
  },
  {
    icon: Wrench,
    title: 'Model-level detail',
    copy: 'Each model page keeps a direct PDF download and a simple summary to support real purchase conversations.',
  },
  {
    icon: CheckCircle2,
    title: 'Simple contact path',
    copy: 'Phone, email, and location are always visible so the site can convert interest into a visit quickly.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Raj Motors Godhra, a Tata commercial vehicle showroom experience focused on product guidance and customer support."
        keywords="Raj Motors about, Raj Motors Godhra, Tata commercial vehicle showroom, commercial vehicle dealer Godhra"
      />
      <AnimatedSection className="bg-[#f5f9ff] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="About"
            title="A practical dealership experience"
            description="Raj Motors is presented around product clarity, showroom contact, and the next step a commercial vehicle buyer actually needs."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <HeroImageSlider
                alt="Raj Motors hero showcase"
                sources={['/slider/tata hero.png']}
                imageClassName="object-cover object-center"
                className="h-full min-h-[340px]"
              />
            </div>

            <div className="rounded-[2rem] bg-tata-navy p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-600">
                <MapPin className="h-7 w-7" />
              </div>
              <h2 className="mt-7 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Godhra showroom support for business buyers.</h2>
              <p className="mt-5 font-body text-base leading-8 text-slate-300">{contactDetails.address}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${contactDetails.phone}`} className="orange-button">
                  <PhoneCall className="h-4 w-4" />
                  Call {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-slate-950">{pillar.title}</h3>
                  <p className="mt-3 font-body text-sm leading-7 text-slate-600">{pillar.copy}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
              <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">Contact</p>
              <p className="mt-3 font-display text-3xl font-extrabold text-slate-950">{contactDetails.name}</p>
              <div className="mt-5 space-y-3 font-body text-sm text-slate-600">
                <p>{contactDetails.address}</p>
                <p>{contactDetails.phone}</p>
                <p>{contactDetails.email}</p>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
              <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">How it helps</p>
              <p className="mt-4 font-body text-sm leading-7 text-slate-700">
                The product library is organized into families and model pages so the site can scale as new PDFs are added.
                It keeps the layouts consistent and gives customers a clearer path from research to enquiry.
              </p>
              <div className="mt-6 grid gap-3">
                {['Clear family structure', 'Fast phone and visit path', 'Model-focused downloads'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f5f9ff] px-4 py-3 font-body text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-brand-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
