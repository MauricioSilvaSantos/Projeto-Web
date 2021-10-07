import Navbar from './Navbar';
import Body from './Body';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Main() {

  return (
    <>
      <header className="header-area">
        <Navbar />
        <Header />
      </header>
      <div className="c-body">
        <Body/>
      </div>
      <footer className="footer-area pt-120">
        <Footer />
      </footer>
    </>
  )
}
