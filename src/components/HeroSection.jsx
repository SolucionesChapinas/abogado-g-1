"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Para un color fijo <section className="relative bg-[#1a365d] text-white">
    <section className="relative  text-white">
       {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/2/26/La_Corte_Suprema_de_Justicia%2C_Guatemala_%28HDR%29_%285984725549%29.jpg')" }} // Cambia por tu imagen real
      />

  {/* Capa oscura en degradado */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10" />

  {/* Contenido principal */}
  <div className="relative z-20">
    {/* Todo lo que ya tenías (nav + texto + botones + etc.) */}
     {/* Navigation */}
     <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">ABOGADOS & ASOCIADOS</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-[#d4af37]">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="hover:text-[#d4af37]">
              Sobre Nosotros
            </a>
            <a href="#servicios" className="hover:text-[#d4af37]">
              Servicios
            </a>
            <a href="#testimonios" className="hover:text-[#d4af37]">
              Testimonios
            </a>
            <a href="#contacto" className="hover:text-[#d4af37]">
              Contacto
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <a href="#inicio" className="hover:text-[#d4af37]">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="hover:text-[#d4af37]">
              Sobre Nosotros
            </a>
            <a href="#servicios" className="hover:text-[#d4af37]">
              Servicios
            </a>
            <a href="#testimonios" className="hover:text-[#d4af37]">
              Testimonios
            </a>
            <a href="#contacto" className="hover:text-[#d4af37]">
              Contacto
            </a>
          </div>
        )}
      </nav>
       {/* Hero content */}
       <div className="container mx-auto px-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones Legales Efectivas Para Sus Necesidades</h1>
          <p className="text-xl mb-8">
            Ofrecemos asesoría legal profesional y personalizada para proteger sus derechos e intereses.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
            onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}
              className="bg-[#d4af37] hover:bg-[#c4a030] text-black px-6 py-2 rounded-md font-medium">
              Consulta Gratuita
            </button>
            
            <button
              onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
              className="border border-white text-white hover:bg-white hover:text-[#1a365d] px-6 py-2 rounded-md font-medium"
            >
              Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
  </div>
     

     

      
    </section>
  )
}

