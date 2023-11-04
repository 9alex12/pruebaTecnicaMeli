import { getProductById } from "@/api/getProductById";
import ProductDetail from "../../../components/ProductDetail";
import { notFound } from "next/navigation";

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProductById(id);
  return <ProductDetail product={product} />;
}
