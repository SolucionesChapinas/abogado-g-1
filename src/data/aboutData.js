import { User, Award, BookOpen } from "lucide-react"

export const aboutData = {
  title: "Sobre Nosotros",
  subtitle: "Comprometidos con la Excelencia Legal",
  description:
    "Con más de 15 años de experiencia, nuestro bufete de abogados se ha destacado por ofrecer servicios legales de alta calidad. Nos especializamos en diversas áreas del derecho, brindando soluciones efectivas y personalizadas para cada cliente.",
    images: [
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Rf0_XVqfb36S35qTgWSZsMwaPMMRTmjA9w&s", alt: "Equipo de abogados" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA1lOC4pNeduSL2HkLYD0ouybGSTyPoWv8A&s", alt: "Nuestras oficinas" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iIg4h3b09MXarDLYLU5trCRHm4lu5G2Ksg&s", alt: "Trabajando en casos" },
    ],
  items: [
    {
      icon: User,
      title: "Equipo Profesional",
      text: "Contamos con abogados especializados en diferentes áreas del derecho.",
    },
    {
      icon: Award,
      title: "Reconocimiento",
      text: "Reconocidos por nuestra excelencia y compromiso con los clientes.",
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      text: "Constante actualización en leyes y procedimientos legales.",
    },
  ],
}
