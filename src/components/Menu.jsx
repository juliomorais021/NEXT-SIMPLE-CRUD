import React from "react";
import styleMenu from "../styles/menu.module.css";
import Link from "next/link";
import { IconeBase1 } from "../components/Icons";

export default function Menu(props) {
  return (
    <nav className={styleMenu.nav}>
      <div className={styleMenu.logo}>
        <Link href="/">
          <div className={styleMenu.icone}>
            <a href="">Data logger</a>
            <div>{IconeBase1}</div>
          </div>
        </Link>
      </div>
      <div className={styleMenu.container}>
        <Link href="/dashboard">
          <a href="">Dashboard</a>
        </Link>      
        <Link href="/">
          <a href="">Contato</a>
        </Link>
        <Link href="/">
          <a href="">Login</a>
        </Link>
        <Link href="/">
          <a href="">Cadastro</a>
        </Link>       
      </div>
    </nav>
  );
}
