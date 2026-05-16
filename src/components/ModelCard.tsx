import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductImageSlider from '@/components/ProductImageSlider';
import type { ProductModel } from '@/data/siteData';
import { brochureUrl } from '@/lib/slug';

export default function ModelCard({ familySlug, model }: { familySlug: string; model: ProductModel }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_56px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_72px_rgba(48,127,226,0.15)]">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${model.accent}`} />
      <div className="grid h-full md:grid-cols-[0.42fr_0.58fr]">
        <div className="relative min-h-52 overflow-hidden bg-brand-50 md:min-h-full">
          <ProductImageSlider
            folder={`/products/models/${model.slug}`}
            count={model.imageCount}
            alt={`${model.name} product`}
            label={`${model.name} image`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tata-navy/55 via-transparent to-transparent md:bg-gradient-to-r" />
          <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/95 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-tata-navy shadow-[0_12px_30px_rgba(15,23,42,0.18)]">
            {model.shortName}
          </div>
        </div>

        <div className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{familySlug}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950">{model.name}</h3>
            </div>
            <Link
              to={`/products/${familySlug}/model/${model.slug}`}
              aria-label={`View ${model.name}`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-100 bg-brand-50 text-brand-700 transition hover:bg-brand-600 hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-4 flex-1 font-body text-sm leading-7 text-slate-600">{model.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {model.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full bg-brand-50 px-3 py-1 font-body text-xs font-semibold text-brand-800">
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
            <Link
              to={`/products/${familySlug}/model/${model.slug}`}
              className="orange-button px-4 py-2"
            >
              View page
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={brochureUrl(model.brochureFile)}
              target="_blank"
              rel="noreferrer"
              className="outline-button px-4 py-2"
            >
              <Download className="h-4 w-4" />
              Download brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
