"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "El equipo de abogados resolvió mi caso con profesionalismo y eficacia. Estoy muy satisfecho con los resultados obtenidos.",
      author: "Carlos Rodríguez",
      position: "Cliente de Derecho Laboral",
    },
    {
      quote:
        "Gracias a su asesoramiento, pudimos resolver un complejo litigio inmobiliario. Su conocimiento y dedicación fueron fundamentales.",
      author: "María González",
      position: "Cliente de Derecho Inmobiliario",
    },
    {
      quote:
        "Excelente atención y asesoramiento en todo el proceso de divorcio. Me sentí apoyada y bien representada en todo momento.",
      author: "Laura Martínez",
      position: "Cliente de Derecho de Familia",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-20 bg-[#1a365d] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Lo que nuestros clientes dicen sobre nuestros servicios legales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-gray-800 shadow-xl rounded-lg p-8">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-[#d4af37]" />
            </div>

            <blockquote className="text-xl text-center mb-6">{testimonials[currentIndex].quote}</blockquote>

            <div className="text-center">
              <p className="font-semibold text-[#1a365d]">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#d4af37] text-[#1a365d] hover:bg-[#c4a030] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#d4af37] text-[#1a365d] hover:bg-[#c4a030] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

