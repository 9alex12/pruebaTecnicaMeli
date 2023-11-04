import {Product} from './getProductById.d'
import { fetchApi } from '@/utils/apiHelper';

export const getProductById: (id: string) => Promise<Product> = async (
  id
) => fetchApi(`/items/${id}`);