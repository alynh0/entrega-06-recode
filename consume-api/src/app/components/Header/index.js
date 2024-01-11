import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header-content">
      <h1>GlobalTours</h1>
      <nav>
        <ul>
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/Destinations">Destinos</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
