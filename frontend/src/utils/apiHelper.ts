import { notFound } from "next/navigation";
import { API_URL } from "./constans";

export const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(`${API_URL}${url}`);
    if (!res.ok) {
      return notFound()
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};
