import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { contactInfo } from "../data/contactData"

export default function Footer() {
  const socialIcons = {
    Facebook: <Facebook size={20} className="text-white" />,
    Twitter: <Twitter size={20} className="text-white" />,
    Instagram: <Instagram size={20} className="text-white" />,
    Linkedin: <Linkedin size={20} className="text-white" />,
  }
  return (
    <footer className="bg-[#0f1e36] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">ABOGADOS & ASOCIADOS</h3>
            <p className="text-gray-400 mb-4">
              Ofrecemos servicios legales de alta calidad con un enfoque personalizado para cada cliente.
            </p>
            <div className="flex space-x-4">
              {contactInfo.social && (
                      <div className="mt-1">
                        <h4 className="font-semibold text-white mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                          {contactInfo.social.map((social) => (
                            <a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#1a365d] p-2 rounded-full hover:bg-[#0f2745]"
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

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-[#d4af37]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-gray-400 hover:text-[#d4af37]">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-[#d4af37]">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-[#d4af37]">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#d4af37]">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

         
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SolucionesChapinas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

