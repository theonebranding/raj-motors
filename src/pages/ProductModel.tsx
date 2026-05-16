import { ArrowLeft, CheckCircle2, Download, ExternalLink, FileText, MapPin, PhoneCall } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';
import ProductImageSlider from '@/components/ProductImageSlider';
import SEO from '@/components/SEO';
import { contactDetails, familyBySlug, modelBySlug } from '@/data/siteData';
import { brochureUrl } from '@/lib/slug';

export default function ProductModel() {
  const params = useParams();
  const model = params.modelSlug ? modelBySlug.get(params.modelSlug) : undefined;

  if (!model) {
    return <Navigate to="/products" replace />;
  }

  const family = familyBySlug.get(model.familySlug);

  if (!family) {
    return <Navigate to="/products" replace />;
  }

  if (params.familySlug && params.familySlug !== family.slug) {
    return <Navigate to={`/products/${family.slug}/model/${model.slug}`} replace />;
  }

  if (!params.familySlug) {
    return <Navigate to={`/products/${family.slug}/model/${model.slug}`} replace />;
  }

  const pdfUrl = brochureUrl(model.brochureFile);

  return (
    <>
      <SEO
        title={model.name}
        description={`${model.name} details, highlights, PDF download, and Raj Motors Godhra contact options.`}
        keywords={`Raj Motors ${model.name}, Tata ${model.name}, ${family.name} model, commercial vehicle Godhra, download brochure`}
      />

      <AnimatedSection className="bg-brand-50 py-14 md:py-20">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden bg-tata-navy px-6 py-10 text-white md:px-10 lg:px-12">
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${model.accent}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,127,226,0.38),transparent_34%)]" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_0.36fr] lg:items-end">
                <div>
                  <Link
                    to={`/products/${family.slug}`}
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-200 transition hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to {family.name}
                  </Link>
                  <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">{family.name}</p>
                  <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{model.name}</h1>
                  <p className="mt-5 max-w-3xl font-body text-base leading-8 text-slate-200">{model.summary}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {model.highlights.map((highlight) => (
                      <span key={highlight} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-body text-sm font-semibold text-white">
                        <CheckCircle2 className="h-4 w-4 text-brand-200" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
               </div>
            </div>

            <div className="grid gap-6 p-5 md:p-8 lg:grid-cols-[1fr_0.32fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-inner">
                <div className="flex min-h-[320px] flex-col items-center justify-center bg-white p-6 text-center md:hidden">
                  <FileText className="h-12 w-12 text-brand-700" />
                  <p className="mt-4 font-display text-2xl font-bold text-slate-950">Open brochure PDF</p>
                  <p className="mt-3 max-w-md font-body text-sm leading-7 text-slate-600">
                    Mobile browsers often open PDFs better in a new tab. Use the buttons below.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a href={pdfUrl} target="_blank" rel="noreferrer" className="orange-button">
                      <ExternalLink className="h-4 w-4" />
                      Open PDF
                    </a>
                    <a href={pdfUrl} download className="outline-button">
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
                <object
                  title={`${model.name} original PDF`}
                  data={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  type="application/pdf"
                  className="hidden h-[72vh] min-h-[640px] w-full bg-white md:block"
                >
                  <div className="flex h-[640px] flex-col items-center justify-center bg-white p-8 text-center">
                    <FileText className="h-12 w-12 text-brand-700" />
                    <p className="mt-4 font-display text-2xl font-bold text-slate-950">Open the original PDF</p>
                    <p className="mt-3 max-w-md font-body text-sm leading-7 text-slate-600">
                      Your browser cannot display the PDF inline here. Open the original file or download it.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <a href={pdfUrl} target="_blank" rel="noreferrer" className="orange-button">
                        <ExternalLink className="h-4 w-4" />
                        Open PDF
                      </a>
                      <a href={pdfUrl} download className="outline-button">
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </object>
              </div>

              <aside className="space-y-5">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-700">Model notes</p>
                  <ul className="mt-5 space-y-4 font-body text-sm leading-7 text-slate-700">
                    {model.specNotes.map((note) => (
                      <li key={note} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] bg-brand-50 p-6">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-700">Need help?</p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950">Talk to Raj Motors</p>
                  <a href={`tel:${contactDetails.phone}`} className="orange-button mt-5">
                    <PhoneCall className="h-4 w-4" />
                    {contactDetails.phone}
                  </a>
                  <p className="mt-5 flex gap-3 font-body text-sm leading-7 text-slate-600">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-700" />
                    {contactDetails.address}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title={`Interested in ${model.name}?`}
        description="Call Raj Motors for availability, variant guidance, and the next step for your business."
      />
    </>
  );
}
