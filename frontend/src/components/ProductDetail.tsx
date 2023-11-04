import React from "react";
import Image from "next/image";

import { Product } from "@/api/getProductById";

const ProductDetail = ({
  product: {
    item: {
      title,
      price: { currency, amount },
    },
    picture,
    description,
    condition,
    sold_quantity,
  },
}: {
  product: Product;
}) => {
  return (
    <div className="productDetail_container">
      <section className="productDetail_info">
        <Image
          src={picture}
          alt={`imagen - ${title}`}
          width={600}
          height={600}
        />
        <article className="productDetail_description">
          <span>Descripción del producto</span>
          <p>{description}</p>
        </article>
      </section>
      <section className="productDetail_market">
        <p>{`${condition === "new" ? "Nuevo" : "Usado"} `} {sold_quantity && `- ${sold_quantity} ${
          sold_quantity != 1 ? "vendidos" : "vendido"
        }`}</p>
        <span>{title}</span>
        <strong>
          {currency}$ {amount}
        </strong>
        <button>Comprar</button>
      </section>
    </div>
  );
};

export default ProductDetail;
