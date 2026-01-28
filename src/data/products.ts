import ManiCenital from "../assets/productos/mani/mani-cenital-gemini.png";
import ManiEmpaque from "../assets/productos/mani/mani-empaque.jpg";
import ManiPartido from "../assets/productos/mani/mani-partido.jpg";
import ManiEntero from "../assets/productos/mani/mani-entero.jpg";
import ManiEnGranela from "../assets/productos/mani/mani-en-granela.jpg";
import ManiConCascara from "../assets/productos/mani/mani-con-cascara.jpg";
import NuezCajuCenital from "../assets/productos/nuez-caju/nuez-caju-cenital.png";
import NuezCajuEmpaque from "../assets/productos/nuez-caju/nuez-caju-empaque.jpg";
import NuezCaju from "../assets/productos/nuez-caju/nuez-caju.jpg";
import PistachoEntero from "../assets/productos/pistacho/pistacho-entero.jpg";
import PistachoCenital from "../assets/productos/pistacho/pistacho-cenital.png";
import PistachoEmpaque from "../assets/productos/pistacho/pistacho-empaque.jpg";
import GranolaCenital from "../assets/productos/granola/granola-cenital.png";
import GranolaEmpaque from "../assets/productos/granola/granola-empaque.jpg";
import GranolaEntero from "../assets/productos/granola/granola-entero.jpg";
import ArandanoCenital from "../assets/productos/arandano/arandano-cenital.png";
import ArandanoEmpaque from "../assets/productos/arandano/arandano-empaque.jpg";
import ArandanoEntero from "../assets/productos/arandano/arandano-entero.jpg";
import CalabazaCenital from "../assets/productos/calabaza/calabaza-cenital.png";
import CalabazaEmpaque from "../assets/productos/calabaza/calabaza-empaque.jpg";
import CalabazaEntero from "../assets/productos/calabaza/calabaza-entero.jpg";
import DamascoCenital from "../assets/productos/damasco/damasco-cenital.png";
import DamascoEmpaque from "../assets/productos/damasco/damasco-empaque.jpg";
import DamascoEntero from "../assets/productos/damasco/damasco-entero.jpg";
import PasasRubiasCenital from "../assets/productos/pasas-rubias/pasas-rubias-cenital.png";
import PasasRubiasEmpaque from "../assets/productos/pasas-rubias/pasas-rubias-empaque.jpg";
import PasasRubiasEntero from "../assets/productos/pasas-rubias/pasas-rubias-entero.jpg";
import AjonjoliCenital from "../assets/productos/ajonjoli/ajonjoli-cenital.png";
import NuezNogalCenital from "../assets/productos/nuez-nogal/nuez-nogal-cenital.png";
import NuezBrasilCenital from "../assets/productos/nuez-brasil/nuez-brasil-cenital.png";
import LinazaCenital from "../assets/productos/linaza/linaza-cenital.png";
import GuindonCenital from "../assets/productos/guindon/guindones-cenital.png";
import FrutaConfitadaCenital from "../assets/productos/fruta-confitada/fruta-confitada-cenital.png";
import ChiaCenital from "../assets/productos/chia/chia-cenital.png";
import AnisCenital from "../assets/productos/anis/anis-cenital.png";
import AlmendraCenital from "../assets/productos/almendra/almendras-cenital.png";
import AvellanasCenital from "../assets/productos/avellanas/avellanas-cenital.png";
import CanelaCenital from "../assets/productos/canela/canela-cenital.png";
import CocoCenital from "../assets/productos/coco/coco-cenital.png";
import HigosCenital from "../assets/productos/higos/higos-cenital.png";
import PasasCenital from "../assets/productos/pasas/pasas-cenital.png";

export const products = [
  {
    name: "Maní Tostado",
    slug: "mani",
    category: "tostados",
    description:
      "Contamos con maní de alta calidad, disponible en diversas presentaciones para satisfacer las necesidades de nuestros clientes.",
    images: [
      { id: "cenital", src: ManiCenital.src },
      { id: "empaque", src: ManiEmpaque.src },
      { id: "partido", src: ManiPartido.src },
      { id: "entero", src: ManiEntero.src },
      { id: "granela", src: ManiEnGranela.src },
      { id: "con-cascara", src: ManiConCascara.src },
    ],
    presentations: [
      { label: "Partido", id: "partido" },
      { label: "Entero", id: "entero" },
      { label: "En Granela", id: "granela" },
      { label: "Con Cáscara", id: "con-cascara" },
    ],
  },
  {
    name: "Pistachos",
    slug: "pistacho",
    category: "nueces",
    description:
      "Ofrecemos pistachos de primera calidad, ideales para quienes buscan un snack saludable y sabroso, así como para su uso en repostería y cocina gourmet.",
    images: [
      { id: "cenital", src: PistachoCenital.src },
      { id: "empaque", src: PistachoEmpaque.src },
      { id: "entero", src: PistachoEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Arándanos Deshidratados",
    slug: "arandanos-deshidratados",
    category: "deshidratados",
    description:
      "Nuestros arándanos son seleccionados por su sabor dulce y textura jugosa, ideales para consumir frescos o como ingrediente en una variedad de platillos.",
    images: [
      { id: "cenital", src: ArandanoCenital.src },
      { id: "empaque", src: ArandanoEmpaque.src },
      { id: "entero", src: ArandanoEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Semillas de Calabaza",
    slug: "semillas-de-calabaza",
    category: "semillas",
    description:
      "Nuestras semillas de calabaza son una fuente rica en nutrientes, perfectas para un snack saludable o como adición crujiente a ensaladas y otros platillos.",
    images: [
      { id: "cenital", src: CalabazaCenital.src },
      { id: "empaque", src: CalabazaEmpaque.src },
      { id: "entero", src: CalabazaEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Almendras",
    slug: "almendras",
    category: "nueces",
    description:
      "Nuestras almendras son una fuente rica en nutrientes, perfectas para un snack saludable o como adición crujiente a ensaladas y otros platillos.",
    images: [{ id: "cenital", src: AlmendraCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Damasco Deshidratado",
    slug: "damasco-deshidratado",
    category: "deshidratados",
    description:
      "Nuestro damasco deshidratado es dulce y lleno de sabor, ideal para consumir como snack o para incorporar en diversas recetas culinarias.",
    images: [
      { id: "cenital", src: DamascoCenital.src },
      { id: "empaque", src: DamascoEmpaque.src },
      { id: "entero", src: DamascoEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Nuez Brasilera",
    slug: "nuez-brasilera",
    category: "nueces",
    description:
      "Nuestra nuez brasilera es una fuente rica en nutrientes, perfecta para un snack saludable o como adición crujiente a ensaladas y otros platillos.",
    images: [{ id: "cenital", src: NuezBrasilCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Granola",
    slug: "granola",
    category: "tostados",
    description:
      "Nuestra granola está elaborada con ingredientes naturales y nutritivos, perfecta para un desayuno energético o como complemento en yogures y postres.",
    images: [
      { id: "cenital", src: GranolaCenital.src },
      { id: "empaque", src: GranolaEmpaque.src },
      { id: "entero", src: GranolaEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Nuez de Cajú",
    slug: "nuez-de-caju",
    category: "nueces",
    description:
      "Nuestra nuez de cajú es seleccionada cuidadosamente para ofrecer un producto fresco y delicioso, ideal para consumo directo o como ingrediente en diversas recetas.",
    images: [
      { id: "cenital", src: NuezCajuCenital.src },
      { id: "empaque", src: NuezCajuEmpaque.src },
      { id: "entero", src: NuezCaju.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Guindones",
    slug: "guindones",
    category: "deshidratados",
    description:
      "Nuestros guindones son dulces y jugosos, perfectos para disfrutar como snack saludable o para añadir un toque especial a tus recetas favoritas.",
    images: [{ id: "cenital", src: GuindonCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Linaza",
    slug: "linaza",
    category: "semillas",
    description:
      "Nuestra linaza es de alta calidad, ideal para realzar el sabor y la textura de una variedad de platillos en la cocina diaria.",
    images: [{ id: "cenital", src: LinazaCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Pasas Rubias",
    slug: "pasas-rubias",
    category: "deshidratados",
    description:
      "Nuestras pasas rubias son dulces y jugosas, perfectas para disfrutar como snack saludable o para añadir un toque especial a tus recetas favoritas.",
    images: [
      { id: "cenital", src: PasasRubiasCenital.src },
      { id: "empaque", src: PasasRubiasEmpaque.src },
      { id: "entero", src: PasasRubiasEntero.src },
    ],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Anís",
    slug: "anis",
    category: "semillas",
    description:
      "Nuestro anís es seleccionado cuidadosamente para ofrecer un  producto fresco y delicioso, ideal para consumo directo o como ingrediente en diversas recetas.",
    images: [{ id: "cenital", src: AnisCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Ajonjolí",
    slug: "ajonjoli",
    category: "semillas",
    description:
      "Nuestro ajonjolí es de alta calidad, ideal para realzar el sabor y la textura de una variedad de platillos en la cocina diaria.",
    images: [{ id: "cenital", src: AjonjoliCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Nuez de Nogal",
    slug: "nuez-de-nogal",
    category: "nueces",
    description:
      "Nuestra nuez de nogal es seleccionada cuidadosamente para ofrecer un producto fresco y delicioso, ideal para consumo directo o como ingrediente en diversas recetas.",
    images: [{ id: "cenital", src: NuezNogalCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Pasas",
    slug: "pasas",
    category: "deshidratados",
    description:
      "Nuestras pasas son dulces y jugosas, perfectas para disfrutar como snack saludable o para añadir un toque especial a tus recetas favoritas.",
    images: [{ id: "cenital", src: PasasCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Fruta Confitada",
    slug: "fruta-confitada",
    category: "confitado",
    description:
      "Nuestra fruta confitada es dulce y llena de sabor, ideal para consumir como snack o para incorporar en diversas recetas culinarias.",
    images: [{ id: "cenital", src: FrutaConfitadaCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Chía",
    slug: "chia",
    category: "semillas",
    description:
      "Nuestra chía es de alta calidad, ideal para realzar el sabor y la textura de una variedad de platillos en la cocina diaria.",
    images: [{ id: "cenital", src: ChiaCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Avellanas",
    slug: "avellanas",
    category: "nueces",
    description:
      "Nuestras avellanas son una fuente rica en nutrientes, perfectas para un snack saludable o como adición crujiente a ensaladas y otros platillos.",
    images: [{ id: "cenital", src: AvellanasCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Canela en Polvo",
    slug: "canela-en-polvo",
    category: "confitado",
    description:
      "Nuestra canela en polvo es seleccionada cuidadosamente para ofrecer un producto fresco y delicioso, ideal para consumo directo o como ingrediente en diversas recetas.",
    images: [{ id: "cenital", src: CanelaCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Coco Rallado",
    slug: "coco-rallado",
    category: "confitado",
    description:
      "Nuestro coco rallado es de alta calidad, ideal para realzar el sabor y la textura de una variedad de platillos en la cocina diaria.",
    images: [{ id: "cenital", src: CocoCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
  {
    name: "Higos",
    slug: "higos",
    category: "deshidratados",
    description:
      "Nuestros higos secos son dulces y jugosos, perfectos para disfrutar como snack saludable o para añadir un toque especial a tus recetas favoritas.",
    images: [{ id: "cenital", src: HigosCenital.src }],
    presentations: [{ label: "Entero", id: "entero" }],
  },
];
