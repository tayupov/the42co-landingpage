import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Eine sonniger Auszeit",
};

export default function Page() {
  return <ProductPage title="Eine sonniger Auszeit" />;
}
