import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/style.css';

export default function Layout({ children }) {
  return (
    <div className="max-w-1440 m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
