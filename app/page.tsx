import Image from 'next/image';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import About from './components/About';
import TwoCard from './components/TwoCard';
import Events from './components/Events';
import Footer from './components/Footer';
import Team from './components/Team';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <About />
      <Events />
      <TwoCard />
      <Team />
      <Footer />
    </main>
  );
}
