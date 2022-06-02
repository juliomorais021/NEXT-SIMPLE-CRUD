
import React from "react"
import { IconeLIXO, IconeEdicao } from "../../components/Icons";

/*import tableStyle from "../../styles/tabela.module.css";*/
/*ATENÇÃO ESTÁ PAGINA SE REFERE APENAS AS FUNÇOES USADAS NA TABELA EDITAR SELECIONAR E ETC */

 function clienteSelecionado() {
  return console.log("olá Selecionado");
}
 function clienteExcluido() {
  return console.log('olá Excluido');
}
export function renderTable() {
  return (
    <tr>
      <th>id</th>
      <th>nome</th>
      <th>idade</th>
      <th>ações</th>
    </tr>
  );
}
/* export function renderDate() {
    // "?" so vai chamar função map se o cliente estiver preenchido
    return props.clientes?.map((Cliente, i) => {
      return (
        <tr
          className={`bg-purple-300 text-center text-white   ${tableStyle.textstyle}`}
          key={Cliente.id}
        >
          <td className=" p-4">{Cliente.id}</td>
          <td className=" p-4">{Cliente.nome}</td>
          <td className=" p-4">{Cliente.idade}</td>
          {renderizarAcoes(Cliente)}
        </tr>
      );
    });
  } */
 
