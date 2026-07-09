import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Les Récoltes Majeures La Rose",
};

export default function Page() {
  return <ProductPage title="Les Récoltes Majeures La Rose" />;
}
