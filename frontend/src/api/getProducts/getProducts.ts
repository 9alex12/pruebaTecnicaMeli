import { Products } from "./getProducts.d";
import { fetchApi } from "@/utils/apiHelper";

export const getProducts: (query: string) => Promise<Products> = async (
  query
) => fetchApi(`/items?limit=4&q=${query}`);
