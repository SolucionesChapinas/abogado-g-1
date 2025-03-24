"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react"
import { contactInfo } from "../data/contactData"


export default function ContactSection() {
  const socialIcons = {
    Facebook: <Facebook size={20} className="text-white" />,
    Twitter: <Twitter size={20} className="text-white" />,
    Instagram: <Instagram size={20} className="text-white" />,
    Linkedin: <Linkedin size={20} className="text-white" />,
  }
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    )
  
    window.location.href = `mailto:info@abogados.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Contáctenos</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Estamos aquí para ayudarle. Contáctenos para programar una consulta o para obtener más información sobre
            nuestros servicios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1a365d] p-3 rounded-full mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">Dirección</h4>
                    <a
                      href={contactInfo.address.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a365d] font-medium hover:underline hover:text-[#0f2745] transition-all duration-300 inline-block hover:-translate-y-0.5"
                    >
                       {contactInfo.address.display}
                       <ExternalLink size={16} className="ml-1 text-[#1a365d] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1a365d] p-3 rounded-full mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">Teléfono</h4>
                    <a href={`tel:${contactInfo.phone}`} 
                    className="text-[#1a365d] font-medium hover:underline hover:text-[#0f2745] transition-all duration-300 inline-block hover:-translate-y-0.5">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1a365d] p-3 rounded-full mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">Email</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1a365d] p-3 rounded-full mr-4">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">Horario</h4>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {contactInfo.social && (
                      <div className="mt-8">
                        <h4 className="font-semibold text-[#1a365d] mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                          {contactInfo.social.map((social) => (
                            <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1a365d] p-2 rounded-full hover:bg-[#0f2745] transition-transform duration-300 ease-in-out hover:-translate-y-1"
                            title={social.name}
                          >
                            {socialIcons[social.name]}
                          </a>
                          ))}
                        </div>
                      </div>
                    )}  
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d] min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a365d] hover:bg-[#15294a] text-white py-2 px-4 rounded-md font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

