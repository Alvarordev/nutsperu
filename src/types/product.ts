export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: { id: string; src: string }[];
  presentations: { label: string; id: string }[];
}

export type Category = "semillas" | "nueces" | "tostados" | "deshidratados" | "confitado";

export const categoryLabels: Record<Category, string> = {
  semillas: "Semillas",
  nueces: "Nueces",
  tostados: "Tostados",
  deshidratados: "Deshidratados",
  confitado: "Confitado",
};
