import { Image } from 'lucide-react';

export default function ImagePlaceholder({ label = 'Vehicle image' }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[260px] w-full items-center justify-center rounded-[1.75rem] border border-dashed border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 text-center">
      <div>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
          <Image className="h-6 w-6" />
        </div>
        <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-700">{label}</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">Add the final image in public/hero.</p>
      </div>
    </div>
  );
}
