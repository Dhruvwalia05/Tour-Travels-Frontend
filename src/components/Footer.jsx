import { FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const phone = '8565041190'
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ganpati Tour & Travels</h3>
            <p className="text-gray-400">
              Your trusted partner for car rentals, bike rentals, wedding vehicles, and private tours.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                <a href={`tel:${phone}`} className="hover:text-green-400 transition">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Gorakhnath, Gorakhpur, India</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition">Destinations</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ganpati Tour & Travels. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
