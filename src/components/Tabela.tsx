import React from "react";
import Cliente from "../core/Cliente";
import tableStyle from "../styles/tabela.module.css";
import { renderTable } from "../actions/table_actions/table";
import { IconeEdicao, IconeLIXO } from "./Icons";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: ( cliente : Cliente) => void;
  clienteExcluido?: ( cliente : Cliente) => void;
}

export default function TabelaClientes(props: TabelaProps) {
  function renderDate() {
    // "?" so vai chamar função map se o cliente estiver preenchido
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          className={`bg-purple-300 text-center text-white   ${tableStyle.textstyle}`}
          key={cliente.id}
        >
          <td className=" p-4">{cliente.id}</td>
          <td className=" p-4">{cliente.nome}</td>
          <td className=" p-4">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      );
    });
  }
  function renderizarAcoes(cliente: Cliente) {
    return (
      <td>
        {props.clienteSelecionado ? <button
        onClick={()=> props.clienteSelecionado?.(cliente)}
        >{IconeEdicao}</button> : false}
        {props.clienteExcluido ? <button
         onClick={()=> props.clienteExcluido?.(cliente)}
        >{IconeLIXO}</button> : false}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden ">
      <thead
        className={`
         bg-gradient-to-r from-purple-500 to-purple-500  text-white 
         
         ${tableStyle.textstyle}
        `}
      >
        {renderTable()}
      </thead>
      <tbody>{renderDate()}</tbody>
    </table>
  );
}
