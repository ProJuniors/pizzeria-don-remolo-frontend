import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/style.css';

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
