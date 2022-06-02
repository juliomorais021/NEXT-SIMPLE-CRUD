import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu.jsx";
import Tabela from "../components/Tabela";
import Botao from "../components/botao";
import { IconeAdd } from "../components/Icons";
import Formulario from "../components/formulario";
import useClientes from "../../hooks/useClientes";

export default function Cadastro() {
  const { 
    clienteSelecionado, 
    clienteExcluido, 
    cliente, 
    salvarCliente,
    visivel,
    setVisivel,
    clientes,
    setCliente,
    voltarLista,
   } = useClientes();

  /*  const repo: ClienteRepositorio = new ColecaoCliente();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  useEffect(obterTodos,[])
  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }
   async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("tabela");
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }
  async function clienteExcluido(cliente: Cliente) {
   await repo.excluir(cliente)
    obterTodos()

  }
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela"); */ // dois possiveis estados ou seja dois valores "tabela" e "form". estado incial tabela
  return (
    <>
      <Menu />
      <div
        className={`
     flex h-screen justify-center items-center
     bg-gradient-to-r from-blue-500 to-purple-500

    `}
      >
        <Layout titulo="Cadastro simples">
          <div className={`flex justify-end`}>
            <Botao onClick={() => setVisivel("form")} icone={IconeAdd}>
              Novo Cliente
            </Botao>
          </div>
          {visivel === "tabela" ? (
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          ) : (
            <Formulario
              clienteMudou={salvarCliente}
              onClick={() =>  voltarLista()}
              cliente={cliente}
            />
          )}
        </Layout>
      </div>
    </>
  );
}
