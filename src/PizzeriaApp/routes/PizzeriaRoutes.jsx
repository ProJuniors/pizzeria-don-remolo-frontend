import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../../ui/components/Footer';
import Navbar from '../../ui/components/Navbar';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';

export default function PizzeriaRoutes() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
