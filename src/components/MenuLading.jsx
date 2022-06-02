import React from "react";
import Link from "next/link";
import menuLadingStyle from '../styles/menulading.module.css'

export default function MenuLading(props) {
  return (
    <>
      <div className={`${menuLadingStyle.logo}`}>
        <a href="/">CS:GO BANK</a>
      </div>

      <nav className={`${menuLadingStyle.cabecalhomenu}`}>
        <a>Comunidade </a>
        <a>how to use </a>
        <a>open Source </a>
        <a>Comandos </a>
      </nav>
    </>
  );
}
