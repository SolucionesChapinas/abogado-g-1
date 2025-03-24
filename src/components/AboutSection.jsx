import { aboutData } from "../data/aboutData" // Ajusta la ruta si es necesario
import { User, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"


export default function AboutSection() {
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
      const interval = setInterval(nextImage, 3000)
      return () => clearInterval(interval)
    }, [])

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % aboutData.images.length)
    }
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + aboutData.images.length) % aboutData.images.length)
    }
  
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">{aboutData.title}</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <div className="relative">
              {/* Carrusel de imágenes */}
              <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                    src={aboutData.images[currentImage].src}
                    alt={aboutData.images[currentImage].alt}
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover block"
                    />
              </div>

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="text-[#1a365d]" size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="text-[#1a365d]" size={24} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {aboutData.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full ${currentImage === index ? "bg-[#d4af37]" : "bg-white/60"}`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
            
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#1a365d]">{aboutData.subtitle}</h3>
            <p className="text-gray-700 mb-6">{aboutData.description}</p>

            <div className="space-y-4">
              {aboutData.items.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#1a365d] p-3 rounded-full mr-4">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a365d]">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
