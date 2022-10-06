import Banner from '../components/Banner';
import Category from '../components/Category';
import Catalog from '../components/Catalog';
import Promotions from '../components/Promotions';

export default function Home() {
  return (
    <>
      <Banner />
      <Promotions />
      <Category />

      {/* <Catalog /> */}
    </>
  );
}
