import type { Metadata } from "next";
import ProductPage, { type ProductPageProps } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Earth",
};

const EARTH_DATA: ProductPageProps = {
  title: "Earth",
  brand: null,
  scentDirection: ["Fresh", "Woody", "Green", "Citrus"],
  scentPyramid: {
    topNotes: [
      { name: "Wacholder", nameEn: "Juniper", prominence: 5 },
      { name: "grüner Pfeffer", nameEn: "Green Pepper", prominence: 2 },
      { name: "Lavendel", nameEn: "Lavender", prominence: 2 },
      { name: "roter Pfeffer", nameEn: "Pink Pepper", prominence: 2 },
    ],
    heartNotes: [
      { name: "Vetiveryl", nameEn: "Vetiveryl", prominence: 4 },
      { name: "Zeder", nameEn: "Cedar", prominence: 4 },
      { name: "Basilikum", nameEn: "Basil", prominence: 2 },
      { name: "Estragon", nameEn: "Tarragon", prominence: 1 },
    ],
    baseNotes: [
      { name: "Sandelholz", nameEn: "Sandalwood", prominence: 3 },
      { name: "Vetiver", nameEn: "Vetiver", prominence: 3 },
      { name: "Moos", nameEn: "Moss", prominence: 2 },
      { name: "Patchouli", nameEn: "Patchouli", prominence: 2 },
      { name: "Tonkabohne", nameEn: "Tonka Bean", prominence: 1 },
    ],
  },
  ratings: {
    longevity: { value: 7.4, count: 608 },
    sillage: { value: 7.2, count: 602 },
  },
  heroImage: "/earth-bottle-straight.png",
  conceptImage: "/earth-concept.png",
};

export default function Page() {
  return <ProductPage {...EARTH_DATA} />;
}
