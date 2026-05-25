import { CheckCircle2, MapPin, PhoneCall, Send, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/CTASection';
import FamilyCard from '@/components/FamilyCard';
import HeroImageSlider from '@/components/HeroImageSlider';
import ModelCard from '@/components/ModelCard';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import { contactDetails, families, flatModels } from '@/data/siteData';

const productReasons = [
  {
    icon: Truck,
    title: 'Right vehicle for your route',
    copy: 'Compare compact cargo, pickup, passenger, and EV options around real business requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear model guidance',
    copy: 'Shortlisted families and models help buyers move from interest to showroom discussion faster.',
  },
  {
    icon: Wrench,
    title: 'Local showroom support',
    copy: 'Call or visit Raj Motors in Godhra for model availability, finance discussion, and next steps.',
  },
];

const aboutPoints = ['Commercial vehicle guidance', 'Godhra showroom contact', 'Fast product discovery'];

export default function Home() {
  const featuredModels = flatModels.slice(0, 4);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const heroTypingConfig = {
    headingMsPerChar: 56,
    subtitleMsPerChar: 28,
    subtitleStartPauseMs: 180,
    postTypingBufferMs: 1200,
  };
  const heroSlides = [
    {
      heading: 'Tata Motors Light Commercial Vehicle Dealer in Godhra | Panchmahal, Dahod, Mahisagar',
      subtitle: 'Compare Ace, Intra, Yodha, Magic, and EV options with Raj Motors.',
    },
    {
      heading: 'Authorized Tata Motors LCV Dealer & Service Center in Godhra, Gujarat',
      subtitle: 'Explore practical commercial vehicles with strong mileage, payload options, and trusted local support.',
    },
  ] as const;
  const heroIntervalMs =
    Math.max(
      ...heroSlides.map(
        (slide) =>
          slide.heading.length * heroTypingConfig.headingMsPerChar +
          heroTypingConfig.subtitleStartPauseMs +
          slide.subtitle.length * heroTypingConfig.subtitleMsPerChar,
      ),
    ) + heroTypingConfig.postTypingBufferMs;
  const heroHeading =
    heroSlides[activeHeroSlide]?.heading ?? heroSlides[0].heading;
  const heroSubtitle =
    heroSlides[activeHeroSlide]?.subtitle ?? heroSlides[0].subtitle;

  return (
    <>
      <SEO
        title="Raj Motors"
        description="Raj Motors in Godhra helps buyers explore Tata commercial vehicles, compare models, download brochures, and contact the showroom."
        keywords="Tata Motors LCV dealer Godhra, Tata commercial vehicle dealer Godhra, Tata LCV authorized dealer Panchmahal, Tata Motors service center Godhra, Tata LCV dealer Dahod, Tata LCV dealer Mahisagar, Tata Motors dealer Panchmahal district, Light commercial vehicle dealer Gujarat, Tata truck dealer Godhra, Tata Ace dealer Godhra, Tata Intra dealer Panchmahal, Tata Motors authorized service center Gujarat, Tata Motors LCV authorized dealer and service center in Godhra, Best Tata commercial vehicle dealer in Panchmahal, Tata LCV genuine spare parts Godhra, Tata Motors light commercial vehicle price Godhra Gujarat, Tata small commercial vehicle dealer near Dahod, Tata Motors service center near Mahisagar, Vehicle dealer Godhra Gujarat, Commercial vehicle Panchmahal, Tata gaadi dealer Godhra, LCV service center Dahod road, ટાટા મોટર્સ ડીલર ગોધરા, ટાટા LCV ડીલર પંચમહાલ, ટાટા એસ ગોધરા, ટાટા ઇન્ટ્રા ડાહોદ, ટાટા કોમર્શિયલ વ્હીકલ ગુજરાત, ટાટા સર્વિસ સેન્ટર ગોધરા, ટાટા ટ્રક ડીલર મહીસાગર, સસ્તી કિંમત ટાટા ગાડી ગોધરા"
      />
      <section className="relative min-h-[calc(100vh-96px)] overflow-x-hidden overflow-y-visible bg-tata-navy text-white">
        <div className="absolute inset-0">
          <HeroImageSlider
            alt="Tata commercial vehicle lineup"
            sources={['/slider/tata hero.png', '/slider/tata hero (2).png']}
            intervalMs={heroIntervalMs}
            onSlideChange={setActiveHeroSlide}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.5),rgba(15,23,42,0.08)_42%,rgba(15,23,42,0.1))]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,23,42,0.45),transparent_44%,rgba(15,23,42,0.12))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <motion.div
            key={activeHeroSlide}
            className={`max-w-md pt-8 sm:pt-12 lg:pt-16 ${
              activeHeroSlide === 0 ? 'self-start' : 'self-start mt-8 text-left sm:mt-12 lg:mt-16'
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-3xl font-extrabold leading-tight transition-opacity duration-300 sm:text-4xl lg:text-5xl">
              {heroHeading}
            </h1>
            <p
              className={`mt-3 font-body text-sm leading-6 text-slate-100 sm:text-base ${
                activeHeroSlide === 0 ? 'max-w-sm' : 'max-w-md'
              }`}
            >
              {heroSubtitle}
            </p>
          </motion.div>

        </div>
      </section>

      <div className="relative z-20 -mt-8 mb-[-2rem] md:-mt-10 md:mb-[-2.5rem]">
        <div className="section-shell">
          <motion.form
            className="grid gap-3 rounded-2xl border-3 border-black bg-white/95 p-3 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.3)] ring-1 ring-slate-950 backdrop-blur md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <label className="grid gap-1 font-body text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 font-body text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <label className="grid gap-1 font-body text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 font-body text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <label className="grid gap-1 font-body text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Vehicle
              <select
                name="vehicle"
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 font-body text-sm font-medium text-slate-950 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              >
                <option>Ace</option>
                <option>Intra</option>
                <option>Yodha</option>
                <option>Magic</option>
                <option>EV Range</option>
                <option>Fleet enquiry</option>
              </select>
            </label>
            <button type="button" className="orange-button h-11 min-h-0 w-full rounded-xl px-5 py-0 md:w-auto">
              Submit
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <AnimatedSection className="bg-white pt-32 pb-24">
        <div className="section-shell">
        <SectionHeading
          eyebrow="Products with us"
          title="Built for business buyers"
          description="A focused product experience for small businesses, fleet owners, transport operators, and entrepreneurs choosing their next commercial vehicle."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-tata-navy p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,127,226,0.46),transparent_38%)]" />
            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-600">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="mt-8 font-display text-3xl font-extrabold leading-tight sm:text-4xl">One place for every business vehicle conversation.</h3>
              <p className="mt-5 font-body text-base leading-8 text-slate-300">
                The experience is arranged around how customers actually choose vehicles: route, load, usage, model fit, and direct showroom support.
              </p>
              <div className="mt-8 grid gap-3 font-body text-sm font-semibold text-slate-200">
                {['Cargo and pickup options', 'EV and fuel choices', 'Showroom-led guidance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {productReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="group grid gap-5 rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition hover:border-brand-200 hover:shadow-[0_24px_70px_rgba(48,127,226,0.13)] sm:grid-cols-[auto_1fr]"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-slate-950">{reason.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-slate-600">{reason.copy}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f5f9ff] py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="About us"
            title="Raj Motors, Godhra"
            description="A local commercial vehicle destination focused on clear product guidance, direct contact, and practical support after the first enquiry."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <HeroImageSlider
                alt="Raj Motors hero showcase"
                sources={['/slider/tata hero.png']}
                imageClassName="object-cover object-center"
                className="h-full min-h-[340px]"
              />
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700">
                <MapPin className="h-7 w-7" />
              </div>
              <p className="mt-6 font-display text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl">
                Local advice, practical product support, and a direct route to the showroom.
              </p>
              <p className="mt-5 font-body text-base leading-8 text-slate-600">{contactDetails.address}</p>
              <div className="mt-8 grid gap-4">
                {aboutPoints.map((point) => (
                  <div key={point} className="flex items-center justify-between gap-4 rounded-2xl bg-[#f5f9ff] px-5 py-4">
                    <span className="font-body text-sm font-semibold text-slate-700">{point}</span>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-50 py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Product families"
            title="Choose by vehicle category"
            description="Start with the family that fits your use case, then compare the models that match your payload, route, and operating cost goals."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {families.map((family, index) => (
              <motion.div
                key={family.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <FamilyCard family={family} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-tata-navy py-24 text-white">
        <div className="section-shell">
          <div className="section-copy">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Featured models</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">Models worth comparing first</h2>
            <p className="mt-4 font-body text-base leading-8 text-slate-300">
              A quick route into popular commercial vehicle options before you call, visit, or download brochure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {featuredModels.map((model, index) => (
              <motion.div
                key={model.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
              >
                <ModelCard familySlug={model.familySlug} model={model} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f5f9ff] py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Send a quick enquiry"
            description="Share your contact details and the vehicle family you want to discuss. The showroom team can follow up with the right next step."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] bg-tata-navy p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <PhoneCall className="h-8 w-8 text-brand-300" />
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight sm:text-3xl">Prefer direct help?</h3>
              <p className="mt-4 font-body text-base leading-8 text-slate-300">
                Call Raj Motors if you already know the family or model you want to compare.
              </p>
              <a href={`tel:${contactDetails.phone}`} className="orange-button mt-7">
                <PhoneCall className="h-4 w-4" />
                {contactDetails.phone}
              </a>
              <div className="mt-8 rounded-2xl bg-white/8 p-5">
                <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Showroom</p>
                <p className="mt-3 font-body text-sm leading-7 text-slate-300">{contactDetails.address}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
