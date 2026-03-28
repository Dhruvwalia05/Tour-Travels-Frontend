import ContactForm from '../components/ContactForm'
import Destinations from '../components/Destinations'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Location />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default Home
