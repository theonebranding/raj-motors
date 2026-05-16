import SectionHeading from '@/components/SectionHeading';
import BrochureCard from '@/components/BrochureCard';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { brochures } from '@/data/siteData';

export default function Brochures() {
  const grouped = brochures.reduce<Record<string, typeof brochures>>((accumulator, brochure) => {
    accumulator[brochure.family] ??= [];
    accumulator[brochure.family].push(brochure);
    return accumulator;
  }, {});

  return (
    <>
      <SEO
        title="Downloads"
        description="Download Tata commercial vehicle PDFs for Ace, Intra, Yodha, Magic, and EV Range from Raj Motors Godhra."
        keywords="Raj Motors downloads, Tata vehicle brochure, Tata Ace brochure, Tata Intra brochure, Tata Yodha brochure, commercial vehicle PDF"
      />
      <AnimatedSection className="section-shell py-16">
        <SectionHeading
          eyebrow="Downloads"
          title="All downloads in one place"
          description="Find the right model file by family and open the original PDF when you need more detail."
        />

        <div className="mt-10 space-y-12">
          {Object.entries(grouped).map(([family, familyBrochures]) => (
            <div key={family}>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-3xl font-extrabold text-slate-950">{family}</h2>
                <p className="font-body text-sm font-semibold text-slate-500">{familyBrochures.length} files</p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {familyBrochures.map((brochure) => (
                  <BrochureCard key={brochure.fileName} brochure={brochure} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
