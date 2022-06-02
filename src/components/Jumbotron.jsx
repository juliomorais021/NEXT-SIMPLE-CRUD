import React from "react";
import Image from "next/image";
import bonecs from '../img/csgo.png'
import LadingPage from "../styles/ladingpage.module.css";

export default function Jumbotron(props) {
  return (
    <main className={`${LadingPage.conteudo}`}>
      <section className={LadingPage.conteudoPrincipal}>
        <div className={LadingPage.conteudoPrincipalEscrito}>
          <h1 className={LadingPage.conteudoTitulo}>CS:GO BANK</h1>
          <h2 className={LadingPage.conteudotitulosecundario}>venda suas skins de forma rapida !</h2>
          <button className={LadingPage.btn}>Vender</button>
        </div>
        <dir className={LadingPage.case}>
        <Image src={bonecs} width={250} height={250} />
        </dir>
        
       
      </section>
    </main>
  );
}
