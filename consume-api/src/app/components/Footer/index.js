import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Global Tours.</p>
        <ul className="footer-links">
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/Destinations">Destinos</Link>
          </li>
          <li>
            <Link href="/Contact">Contato</Link>
          </li>
          <li>
            <Link href="/Register">Registrar</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
