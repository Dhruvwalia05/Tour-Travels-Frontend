import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  const phone = '8565041190'
  const whatsappUrl = `https://wa.me/${phone}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default FloatingWhatsApp
