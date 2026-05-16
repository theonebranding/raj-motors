import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductImageSlider from '@/components/ProductImageSlider';
import type { ProductFamily } from '@/data/siteData';

export default function FamilyCard({ family }: { family: ProductFamily }) {
  const Icon = family.icon;
  const featuredModels = family.models.slice(0, 3);

  return (
    <Link
      to={`/products/${family.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_56px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_28px_78px_rgba(48,127,226,0.17)]"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${family.accent}`} />
      <div className="relative h-68 overflow-hidden bg-brand-50">
        <ProductImageSlider
          folder={`/products/${family.slug}`}
          count={family.imageCount}
          alt={`${family.name} product`}
          label={`${family.name} image`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tata-navy/78 via-tata-navy/22 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_46%)]" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/95 text-brand-700 shadow-[0_14px_35px_rgba(15,23,42,0.22)] backdrop-blur">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-white/25 bg-white/95 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-tata-navy shadow-[0_14px_35px_rgba(15,23,42,0.18)] backdrop-blur">
            {family.models.length} {family.models.length === 1 ? 'model' : 'models'}
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950">{family.name}</h3>
            <p className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{family.tagline}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-100 bg-brand-50 text-brand-700 transition group-hover:translate-x-0.5 group-hover:bg-brand-600 group-hover:text-white">
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
        <p className="mt-4 flex-1 font-body text-sm leading-7 text-slate-600">{family.description}</p>
        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-slate-100/90 pt-4">
          {featuredModels.map((model) => (
            <span
              key={model.slug}
              className="rounded-full border border-brand-100 bg-brand-50/80 px-3 py-1 font-body text-xs font-semibold text-brand-800 transition group-hover:border-brand-200 group-hover:bg-brand-50"
            >
              {model.shortName}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
