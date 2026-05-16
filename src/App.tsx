import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductFamily from '@/pages/ProductFamily';
import ProductModel from '@/pages/ProductModel';
import Brochures from '@/pages/Brochures';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import AccountDeletion from '@/pages/AccountDeletion';
import DashboardSettings from '@/pages/DashboardSettings';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <Layout>
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
    </Layout>
  );
}
