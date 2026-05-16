import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';

const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const ProductFamily = lazy(() => import('@/pages/ProductFamily'));
const ProductModel = lazy(() => import('@/pages/ProductModel'));
const Brochures = lazy(() => import('@/pages/Brochures'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions'));
const AccountDeletion = lazy(() => import('@/pages/AccountDeletion'));
const DashboardSettings = lazy(() => import('@/pages/DashboardSettings'));

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <Layout>
      <Suspense fallback={<div className="section-shell py-12 text-sm font-semibold text-slate-600">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:familySlug/model/:modelSlug" element={<ProductModel />} />
          <Route path="/products/:familySlug" element={<ProductFamily />} />
          <Route path="/model/:modelSlug" element={<ProductModel />} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
