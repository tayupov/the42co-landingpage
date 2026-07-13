import type { Metadata } from "next";
import ProductPage, { type ProductPageProps } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Passionfruit",
};

const PASSIONFRUIT_DATA: ProductPageProps = {
  title: "Passionfruit",
  brand: "Loewe",
  scentDirection: ["Fruity", "Sweet", "Fresh", "Woody"],
  scentPyramid: {
    topNotes: [
      { name: "Passionsfrucht", nameEn: "Passion Fruit", prominence: 5 },
      { name: "Drachenfrucht", nameEn: "Dragon Fruit", prominence: 3 },
    ],
    heartNotes: [
      { name: "Zuckerwatte", nameEn: "Cotton Candy", prominence: 2 },
      { name: "Pfingstrose", nameEn: "Pink Peony", prominence: 1 },
    ],
    baseNotes: [
      { name: "Amber", nameEn: "Amber", prominence: 1 },
      { name: "Vanille", nameEn: "Vanilla", prominence: 2 },
      { name: "Sandelholz", nameEn: "Sandalwood", prominence: 3 },
      { name: "Praline", nameEn: "Praline", prominence: 2 },
    ],
  },
  ratings: {
    longevity: { value: 7.5, count: 64 },
    sillage: { value: 7.3, count: 64 },
  },
  conceptImage: "/passionfruit-concept.png",
};

export default function Page() {
  return <ProductPage {...PASSIONFRUIT_DATA} />;
}
