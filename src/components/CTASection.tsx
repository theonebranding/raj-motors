import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { contactDetails } from '@/data/siteData';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Ready to discuss the right vehicle?',
  description = 'Speak with Raj Motors for model availability, suitable variants, and the next step for your business.',
}: CTASectionProps) {
  return (
    <AnimatedSection className="section-shell py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-tata-navy px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)] sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,127,226,0.42),transparent_34%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-8 text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${contactDetails.phone}`} className="orange-button">
              <PhoneCall className="h-4 w-4" />
              Call {contactDetails.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-display text-sm font-bold text-tata-navy transition hover:bg-brand-50"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
