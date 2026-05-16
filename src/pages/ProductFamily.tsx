import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import ModelCard from '@/components/ModelCard';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { familyBySlug } from '@/data/siteData';

export default function ProductFamily() {
  const params = useParams();
  const family = params.familySlug ? familyBySlug.get(params.familySlug) : undefined;

  if (!family) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <SEO
        title={`${family.name} Products`}
        description={`${family.name} commercial vehicle options at Raj Motors Godhra. Compare variants, model details, and enquiry options.`}
        keywords={`Raj Motors ${family.name}, Tata ${family.name} Godhra, ${family.name} commercial vehicle, ${family.models.map((model) => model.name).join(', ')}`}
      />
      <section className="relative overflow-hidden bg-tata-navy text-white">
        <div className="absolute inset-0">
          <img
            src={`/slider/${family.slug}.png`}
            alt={`${family.name} vehicle`}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = `/products/${family.slug}/01.png`;
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,95,0.86),rgba(10,10,95,0.58),rgba(48,127,226,0.28))]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,127,226,0.42),transparent_38%)]" />
        </div>

        <div className="relative flex min-h-[calc(100vh-96px)] items-center justify-center px-4 py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">{family.name}</h1>
            <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-slate-100">{family.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="orange-button">
                Enquire now
              </Link>
              <a href="#models" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-display text-sm font-bold text-slate-950 transition hover:bg-brand-50">
                View models
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-shell py-24">
        <SectionHeading
          eyebrow="About this product"
          title={family.tagline}
          description={family.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {family.overviewBullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              className="panel rounded-[1.5rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <CheckCircle2 className="h-7 w-7 text-brand-700" />
              <p className="mt-5 font-body text-sm font-semibold leading-7 text-slate-700">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-50 py-24" id="models">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Models"
            title={`${family.name} model range`}
            description="Compare the available variants, then open the model page or download brochure when you need the original PDF."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {family.models.map((model, index) => (
              <motion.div
                key={model.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ModelCard familySlug={family.slug} model={model} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title={`Need help choosing a ${family.name}?`}
        description="Call Raj Motors or send an enquiry and the team will help you shortlist the right variant for your business."
      />
    </>
  );
}
