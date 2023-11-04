import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchIcon from "./icons/searchIcon";

const SearchBar = () => {
  return (
    <nav className="searchBar_container">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo Mercado Libre"
          width={200}
          height={50}
        />
      </Link>
      <form action="/items" className="searchBar_label">
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          name="q"
          id="search"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;
