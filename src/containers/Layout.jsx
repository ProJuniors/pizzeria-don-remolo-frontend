import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/style.css';

export default function Layout({ children }) {
  return (
    <div className="Layout max-w-[1440px] m-auto relative h-screen leading-normal tracking-normal bg-white z-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
