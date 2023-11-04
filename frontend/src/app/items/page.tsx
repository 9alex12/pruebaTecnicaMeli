import React from "react";
import ItemCard from "../../components/ItemCard";

import { getProducts } from "@/api/getProducts";


export default async function Items({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const {items=[]} = await getProducts(searchParams.q);
  return (
    <main>
      <ul>
        {items.length?items.map((item: any) => {
          return <ItemCard key={item.id} item={item} />;
        }) : <p>No se encontraron resultados.</p>}
      </ul>
    </main>
  );
}
