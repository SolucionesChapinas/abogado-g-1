import './App.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
function App() {
  return (
  <main className='min-h-screen bg-gray-100'>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <TestimonialsSection></TestimonialsSection>
    <ContactSection></ContactSection>
    <Footer></Footer>

  </main>
  );
}

export default App;
``
