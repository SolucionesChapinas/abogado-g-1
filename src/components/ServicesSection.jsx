import { Scale, Home, Briefcase, Users, FileText, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Scale className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho Civil",
      description: "Asesoramiento en contratos, obligaciones, responsabilidad civil y derecho de familia.",
    },
    {
      icon: <Home className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho Inmobiliario",
      description: "Compraventa de propiedades, arrendamientos, hipotecas y litigios inmobiliarios.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho Laboral",
      description: "Representación en conflictos laborales, contratos de trabajo y despidos.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho de Familia",
      description: "Divorcios, custodia de hijos, pensiones alimenticias y adopciones.",
    },
    {
      icon: <FileText className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho Mercantil",
      description: "Constitución de sociedades, contratos mercantiles y asesoría empresarial.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#d4af37]" />,
      title: "Derecho Penal",
      description: "Defensa en procesos penales, asesoramiento y representación legal.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ofrecemos una amplia gama de servicios legales para satisfacer las necesidades de nuestros clientes, tanto
            particulares como empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-none rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl text-[#1a365d] font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

