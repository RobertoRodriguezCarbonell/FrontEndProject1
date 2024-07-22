import casa1 from "../assets/cardImages/casa1.jpg";
import wilsonnba from "../assets/cardImages/wilsonnba.png";
import laligabalon from "../assets/cardImages/laligabalon.png";
import bicicleta from "../assets/cardImages/bicicleta.png";
import zapatillasfutbol from "../assets/cardImages/zapatillasfutbol.png";
import casco from "../assets/cardImages/casco.png";
import auriculares from "../assets/cardImages/auriculares.png";
import gopro from "../assets/cardImages/gopro.png";

const products = [
  {
    id: 1,
    name: "Balón Wilson NBA",
    description:
      "Balón de baloncesto oficial de la NBA. Tamaño 7, 29.5 pulgadas.",
    image: wilsonnba,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "basketball", text: "Basketball" },
    ],
    precio: 50.99,
  },
  {
    id: 2,
    name: "Balón La Liga 23/24",
    description: "Balón de fútbol oficial de La Liga 2023/2024.",
    image: laligabalon,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "futbol", text: "Fútbol" },
    ],
    precio: 30.99,
  },
  {
    id: 3,
    name: "Bicicleta de carretera",
    description: "Bicicleta de carretera de carbono.",
    image: bicicleta,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "bicicleta", text: "Ciclismo" },
    ],
    precio: 1450,
  },
  {
    id: 4,
    name: "Zapatillas de fútbol 11",
    description: "Zapatillas de fútbol 11 con tacos para césped artificial.",
    image: zapatillasfutbol,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "futbol", text: "Fútbol" },
    ],
    precio: 80.45,
  },
  {
    id: 5,
    name: "Casco de ciclismo",
    description: "Casco de ciclismo de alta calidad con fibra de carbono.",
    image: casco,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "bicicleta", text: "Ciclismo" },
    ],
    precio: 120,
  },
  {
    id: 6,
    name: "Auriculares Sony deportivos",
    description: "Auriculares Sony deportivos con cancelación de ruido.",
    image: auriculares,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "gaming", text: "Auriculares" },
    ],
    precio: 150.49,
  },
  {
    id: 7,
    name: "Go Pro Hero 12",
    description: "Cámara Go Pro Hero 12 con grabación en 4K a 60 FPS.",
    image: gopro,
    categories: [
      { icon: "deporte", text: "Deporte" },
      { icon: "camera", text: "Cámaras" },
    ],
    precio: 350,
  },
];

export default products;
