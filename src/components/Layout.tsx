import { useState } from 'react';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { contactDetails } from '@/data/siteData';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/brochures', label: 'Brochures' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const activeClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-bold transition',
    isActive ? 'bg-brand-600 text-white shadow-glow' : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700',
  ].join(' ');

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur-xl">
        <div className="hidden border-b border-brand-100 bg-brand-50/80 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-semibold text-slate-600 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-600" />
              {contactDetails.address}
            </span>
            <div className="inline-flex items-center gap-4">
              <a href={`tel:${contactDetails.phone}`} className="hover:text-brand-700">
                {contactDetails.phone}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="hover:text-brand-700">
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo raaj-03.png" alt="Raj Motors" className="h-14 w-auto" loading="lazy" />
            {/* <div>
              <p className="font-display text-2xl font-extrabold leading-none text-slate-950">Raj Motors</p>
              <p className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Tata commercial vehicles</p>
            </div> */}
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={activeClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${contactDetails.phone}`}
              className="orange-button px-4 py-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-slate-900 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-brand-100 bg-white px-4 py-4 shadow-lg lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={activeClass} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <a
                href={`tel:${contactDetails.phone}`}
                className="orange-button mt-2"
              >
                <Phone className="h-4 w-4" />
                Call {contactDetails.phone}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-brand-100 bg-tata-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.85fr_0.85fr_0.9fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo raaj-01.png" alt="Raj Motors" className="h-14 w-auto" loading="lazy" />
            </div>
            <p className="mt-5 max-w-xl font-body text-sm leading-7 text-slate-300">
              Commercial vehicle guidance, model downloads, and showroom support for buyers in and around Godhra.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Explore</p>
            <div className="mt-4 grid gap-3 font-body text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Legal</p>
            <div className="mt-4 grid gap-3 font-body text-sm text-slate-300">
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms and Conditions
              </Link>
              <Link to="/account-deletion" className="hover:text-white">
                Account Deletion
              </Link>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Contact</p>
            <div className="mt-4 space-y-3 font-body text-sm text-slate-300">
              <p>
                <a href={`tel:${contactDetails.phone}`} className="hover:text-white">
                  {contactDetails.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactDetails.email}`} className="break-all hover:text-white">
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Visit</p>
            <p className="mt-4 font-body text-sm leading-7 text-slate-300">{contactDetails.address}</p>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center font-body text-sm font-medium text-slate-400">
          © {new Date().getFullYear()} Raj Motors. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
