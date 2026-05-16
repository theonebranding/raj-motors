import FamilyCard from '@/components/FamilyCard';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { families } from '@/data/siteData';

export default function Products() {
  return (
    <>
      <SEO
        title="Products"
        description="Browse Raj Motors product families including Ace, Intra, Yodha, Magic, and EV Range commercial vehicles."
        keywords="Raj Motors products, Tata Ace Godhra, Tata Intra Godhra, Tata Yodha, Tata Magic, Tata EV commercial vehicles"
      />
      <AnimatedSection className="bg-brand-50 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Products"
            title="All product families"
            description="Use this page to route customers into the right product family before they compare specific models."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {families.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
