import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { URL_API_MELI } from "../../constants";
import { ProductInfo, ProductDescription } from "./getProductById.d";

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const URL_PRODUCT = `${URL_API_MELI}/items/${id}`;
  const endpoints = [URL_PRODUCT, `${URL_PRODUCT}/description`];
  try {
    const [
      {
        data: {
          id,
          title,
          price,
          currency_id,
          pictures: [{secure_url}],
          condition,
          shipping: { free_shipping },
          sold_quantity,
        },
      },
      {
        data: { plain_text },
      },
    ] = await axios.all([axios.get(URL_PRODUCT),axios.get(`${URL_PRODUCT}/description`)]);

    // [AxiosResponse<ProductInfo>, AxiosResponse<ProductDescription>]

    const product = {
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
        },
      },

      picture:secure_url,
      condition,
      free_shipping,
      sold_quantity,
      description:plain_text
    };

    res.json(product);
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("El personaje no existe");
    } else {
      res.status(500).send("Ocurrió un error al consultar la API");
    }
  }
};

export default getProductById;
