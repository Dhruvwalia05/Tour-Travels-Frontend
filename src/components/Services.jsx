import { motion } from 'framer-motion'
import { FaCar, FaHeart, FaMapMarkedAlt, FaMotorcycle } from 'react-icons/fa'

const services = [
  {
    icon: FaCar,
    title: 'Car Rentals',
    description: 'Comfortable and reliable cars for your travel needs.',
  },
  {
    icon: FaMotorcycle,
    title: 'Bike Rentals',
    description: 'Explore the streets with our well-maintained bikes.',
  },
  {
    icon: FaHeart,
    title: 'Wedding Vehicles',
    description: 'Elegant Dulha Car and Shaadi Special packages.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Private Tours',
    description: 'Customized tours to your favorite destinations.',
  },
]

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <service.icon className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
