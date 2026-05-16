import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertTriangle, CheckCircle2, LockKeyhole, ShieldCheck, UserX, X } from 'lucide-react';
import SEO from '@/components/SEO';

const securitySteps = [
  {
    title: 'Review account impact',
    copy: 'Deactivation disables sign-in, profile access, and dashboard actions. Existing enquiry and support records stay preserved.',
  },
  {
    title: 'Confirm your registered details',
    copy: 'Make sure your phone and email are current before requesting deactivation so support can verify the request if needed.',
  },
  {
    title: 'Submit deactivation request',
    copy: 'Use the confirmation modal below. Type DEACTIVATE to confirm that the request is intentional.',
  },
  {
    title: 'Wait for processing',
    copy: 'The account is marked inactive after review. Raj Motors may contact you before completing the request.',
  },
];

export default function DashboardSettings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') === 'security' ? 'security' : 'profile';
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmation, setConfirmation] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canDeactivate = useMemo(() => confirmation.trim().toUpperCase() === 'DEACTIVATE', [confirmation]);

  const selectTab = (tab: 'profile' | 'security') => {
    setSearchParams(tab === 'security' ? { tab: 'security' } : {});
  };

  const submitDeactivation = () => {
    if (!canDeactivate) {
      return;
    }

    setSubmitted(true);
    setModalOpen(false);
    setConfirmation('');
    setReason('');
  };

  return (
    <>
      <SEO
        title="Dashboard Settings"
        description="Manage Raj Motors dashboard security settings and request account deactivation."
        keywords="Raj Motors dashboard settings, security settings, deactivate account"
      />

      <section className="bg-[#f5f9ff] py-10 sm:py-14">
        <div className="section-shell">
          <div className="rounded-[2rem] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Dashboard</p>
                <h1 className="mt-2 font-display text-3xl font-extrabold text-slate-950 sm:text-4xl">Settings</h1>
                <p className="mt-3 max-w-2xl font-body text-sm leading-7 text-slate-600">
                  Manage account details, security preferences, and account deactivation requests.
                </p>
              </div>
              <div className="inline-flex rounded-full border border-brand-100 bg-brand-50 p-1">
                <button
                  type="button"
                  onClick={() => selectTab('profile')}
                  className={`rounded-full px-5 py-2 font-display text-sm font-bold transition ${
                    activeTab === 'profile' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-brand-700'
                  }`}
                >
                  Profile
                </button>
                <button
                  type="button"
                  onClick={() => selectTab('security')}
                  className={`rounded-full px-5 py-2 font-display text-sm font-bold transition ${
                    activeTab === 'security' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-brand-700'
                  }`}
                >
                  Security
                </button>
              </div>
            </div>

            {activeTab === 'security' ? (
              <div className="grid gap-8 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
                <aside className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-700">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-extrabold text-slate-950">Account deactivation</h2>
                  <p className="mt-3 font-body text-sm leading-7 text-slate-600">
                    This action does not permanently delete account records. It deactivates access and flags the account as inactive for support review.
                  </p>
                  {submitted ? (
                    <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                        <p className="font-body text-sm leading-6">Deactivation request recorded. The account should now be treated as inactive pending support review.</p>
                      </div>
                    </div>
                  ) : null}
                </aside>

                <div>
                  <h2 className="font-display text-2xl font-extrabold text-slate-950">Step-by-step guide</h2>
                  <div className="mt-5 grid gap-4">
                    {securitySteps.map((step, index) => (
                      <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-[#f8fbff] p-5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-sm font-extrabold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-extrabold text-slate-950">{step.title}</h3>
                          <p className="mt-2 font-body text-sm leading-7 text-slate-600">{step.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                      <div>
                        <h3 className="font-display text-lg font-extrabold text-red-950">Before you continue</h3>
                        <p className="mt-2 font-body text-sm leading-7 text-red-800">
                          Deactivation blocks dashboard access. It is reversible only through Raj Motors support after account verification.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button type="button" onClick={() => setModalOpen(true)} className="orange-button mt-6 bg-red-600 hover:bg-red-700">
                    <UserX className="h-4 w-4" />
                    Deactivate account
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-8">
                <div className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-6 w-6 text-brand-700" />
                    <div>
                      <h2 className="font-display text-2xl font-extrabold text-slate-950">Profile settings</h2>
                      <p className="mt-3 font-body text-sm leading-7 text-slate-600">
                        Profile management can be added here. Use the Security tab for account deactivation instructions and confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {modalOpen ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 px-4 py-6">
          <div role="dialog" aria-modal="true" aria-labelledby="deactivate-title" className="w-full max-w-lg rounded-[1.5rem] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="deactivate-title" className="font-display text-2xl font-extrabold text-slate-950">
                  Confirm deactivation
                </h2>
                <p className="mt-2 font-body text-sm leading-7 text-slate-600">
                  This will deactivate the account instead of deleting it permanently.
                </p>
              </div>
              <button type="button" onClick={() => setModalOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-slate-950" aria-label="Close deactivation modal">
                <X className="h-5 w-5" />
              </button>
            </div>

            <label className="mt-6 block font-display text-sm font-bold text-slate-950" htmlFor="deactivation-reason">
              Reason for deactivation
            </label>
            <textarea
              id="deactivation-reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-body text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              placeholder="Optional note for support"
            />

            <label className="mt-5 block font-display text-sm font-bold text-slate-950" htmlFor="deactivation-confirmation">
              Type DEACTIVATE to confirm
            </label>
            <input
              id="deactivation-confirmation"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-body text-sm font-bold uppercase tracking-[0.08em] text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              placeholder="DEACTIVATE"
            />

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setModalOpen(false)} className="outline-button">
                Cancel
              </button>
              <button
                type="button"
                onClick={submitDeactivation}
                disabled={!canDeactivate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Deactivate account
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
