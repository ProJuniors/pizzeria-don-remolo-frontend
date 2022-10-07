import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../ui/components/Footer';
import Navbar from '../../ui/components/Navbar';
import HomePage from '../pages/HomePage';

export default function PizzeriaRoutes() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}
