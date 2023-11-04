
import { Item } from "@/api/getProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ item:{id,picture,title,price:{amount},city} }:{item:Item}) => {

  return (
    <li className="itemCard_container">
      <Link className="itemCard_linkProduct" href={`/items/${id}`}>
        <Image src={picture} alt={`imagen - ${title}`} width={200} height={200}/>
        <section className="itemCard_productInfo">
          <span>$ {amount}</span>
          <p>{title}</p>
        </section>
        <span className="itemCard_productLocation">{city}</span>
      </Link>
    </li>
  );
};

export default ItemCard;
