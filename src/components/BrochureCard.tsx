import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { brochureUrl } from '@/lib/slug';
import type { Brochure } from '@/data/siteData';

export default function BrochureCard({ brochure }: { brochure: Brochure }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_70px_rgba(48,127,226,0.13)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-600" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{brochure.family}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-slate-950">{brochure.title}</h3>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-brand-700" />
        </div>
        <p className="mt-4 font-body text-sm leading-7 text-slate-600">{brochure.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {brochure.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-brand-50 px-3 py-1 font-body text-xs font-semibold text-brand-800">
              {highlight}
            </span>
          ))}
        </div>
        <a
          href={brochureUrl(brochure.fileName)}
          target="_blank"
          rel="noreferrer"
          className="orange-button mt-6"
        >
          <Download className="h-4 w-4" />
          Download brochure
        </a>
      </div>
    </div>
  );
}
