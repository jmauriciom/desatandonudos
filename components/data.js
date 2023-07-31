import { GoPeople } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";
import { BsLaptop, BsFillCartDashFill, BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { AiOutlineAntDesign } from "react-icons/ai";

export const stats = [
  { id: "01", value: 100, title: "Clientes", start: 2400, suffix: "+" },
  { id: "02", value: 12, title: "Proyectos", start: 0, suffix: "+" },
  { id: "03", value: 200, title: "Equipos de trabajo", start: 0, suffix: "+" },
];

export const aboutData = [
  {
    id: "01",
    title: "Operaciones inteligentes y fluidas",
    text: "Identifico fortalezas y áreas de mejora, diseñando planes de acción para el crecimiento en el entorno laboral..",
    icon: <GoPeople />,
  },
  {
    id: "02",
    title: "Seguimiento y crecimiento",
    text: "Guío a individuos en el desarrollo de habilidades y liderazgo, ayudándoles a alcanzar sus metas profesionales. ",
    icon: <FaUserCheck />,
  },
  {
    id: "03",
    title: "Seguridad y privacidad",
    text: "Ayudo a encontrar soluciones saludables para superar obstáculos y lograr el bienestar emocional.",
    icon: <GoPasskeyFill />,
  },
];

export const services = [
  {
    id: "01",
    title: "Coaching Laboral Individual",
    text: "Juntos impulsaremos tu carrera y desarrollo profesional, para luego  poder planificar una estrategia a medio largo plazo para alcanzar tus objetivos.",
    icon: (
      <BsLaptop className='text-4xl text-white p-2 bg-[#c0054da7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "02",
    title: "Coaching de equipos",
    text: "Acompañamiento a equipos en la consecución de sus objetivos a través de la cooperación entre sus miembros, ayudándoles a revisar y mejorar sus relaciones, procesos de trabajo y valores.",
    icon: (
      <BsPhone className='text-4xl text-white p-2 bg-[#0b05c0a7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "03",
    title: "Capacitaciones",
    text: "Diversos tipos de capacitaciones para colaboradores, líderes y ejecutivos en lo referente a Liderazgo, Comunicación y Comportamiento Organizacional. ",
    icon: (
      <CgWebsite className='text-4xl text-white p-2 bg-[#8205c0a7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "04",
    title: "Actividades",
    text: "Diversas actividades de Team Building orientadas a las necesidades de tu organización, tanto in-company como outdoors.",
    icon: (
      <BsFillCartDashFill className='text-4xl text-white p-2 bg-[#0566c0a7] rounded-full' />
    ),
  },
  {
    id: "05",
    title: "Counseling Personal",
    text: "Mejora de la autoestima y la confianza: Trabajar en el fortalecimiento de la autoestima y la confianza personal para una mayor satisfacción y bienestar.",
    icon: (
      <AiOutlineAntDesign className='text-4xl text-white p-2 bg-[#c00505a7] rounded-full' />
    ),
  },
  {
    id: "06",
    title: "Otros servicios",
    text: "Cualquier inquietud que tengas, ¡te invito a que la trabajemos juntos!.",
    icon: (
      <GoPasskeyFill className='text-4xl text-white p-2 bg-[#c0b005] rounded-full' />
    ),
  },
];


export const reviews = [
  {
    id: 1,
    name: "Matias Gonzales",
    rating: 5,
    image: "/hombre1.jpg",
    review:
      "Trabajar con Fer me cambio la forma de pensar y ver las cosas, enfocarme mas en mi como persona que en lo que quieren los demas, asi aumentando mi forma de trabajar.",
  },
  {
    id: 2,
    name: "Emilia Monteverde",
    rating: 4.5,
    image: "/mujer1.jpg",
    review:
      "Excelente persona!!, jamas pense que podia alcanzar mis metas tan rapido de una forma que no conocia. Sali de mi zona de confort y lo logre! Gracias Fer!.",
  },
  {
    id: 3,
    name: "David Trizeal",
    rating: 5,
    image: "/hombre2.jpg",
    review:
      "Me ayudo a trabajar mejor en mi entorno laboral. A no ver lo que me pedian como ordenes si no un voto de confianza en algo que se que puedo hacer.",
  },
  {
    id: 4,
    name: "Sara Ocarleone",
    rating: 5,
    image: "/mujer2.jpeg",
    review:
      "Me encanto trabajar con el, mi equipo de trabajo ahora es otro. Somos mas eficientes a la hora de llegar a una meta o resolver problemas cotidianos.",
  },
  {
    id: 5,
    name: "Alexis Leoni",
    rating: 4.5,
    image: "/hombre3.jpg",
    review:
      "Me sentia muy perdido, no sabia que hacer, que estudiar o que trabajar. La verdad que fue muy buen guia y me acompaño en todo el proceso de cambio",
  },
  {
    id: 6,
    name: "Julian Sanchez",
    rating: 4.5,
    image: "/hombre4.jpeg",
    review:
      "Increible las nuevas formas de ver las cosas que me dio, me abrio los ojos a un nuevo yo!.",
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Consultora",
    links: ["Inicio", "Sobre Mi", "Servicios"],
  },
  // {
  //   id: "02",
  //   title: "Policy",
  //   links: ["Policies", "Contact", "FAQ"],
  // },
  {
    id: "03",
    title: "Soporte",
    links: ["Support Center", "Feedback", "Accessibility"],
  },
];
