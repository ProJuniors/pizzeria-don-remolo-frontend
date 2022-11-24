import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../../ui/components/Footer';
import Navbar from '../../ui/components/Navbar';
import CartPage from '../pages/CartPage';
import ContactanosPage from '../pages/ContantanosPage';
import SucursalesPage from '../pages/SucursalesPage';
import HomePage from '../pages/HomePage';
import { Toaster } from 'react-hot-toast';
import MenuButton from '../../ui/components/MenuButton';

export default function PizzeriaRoutes() {
  return (
    <div className="max-w-[2560px] m-auto">
      <Navbar />
      <Toaster
        position="top-top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'black',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#E91717',
              secondary: 'white',
            },
          },
        }}
      />

      <MenuButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactanos" element={<ContactanosPage />} />
        <Route path="/sucursales" element={<SucursalesPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
