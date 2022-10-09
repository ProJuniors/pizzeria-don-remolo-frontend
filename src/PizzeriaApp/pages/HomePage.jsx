import React from 'react';
import Promotions from '../components/Promotion';
import Banner from '../components/Banner';
import Category from '../components/Categories';

export default function HomePage() {
  return (
    <div className="w-[1440px]">
      <Banner />
      <Promotions />
      <Category />
    </div>
  );
}
