import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "../components/Entrada";
import { IconeAdd,EditIcon,CancelarIcon } from "../components/Icons";
import Botao from "./botao";
interface FormularioProps {
  cliente: Cliente;
  onClick?: () => void
  clienteMudou?: (cliente:Cliente)=> void
}
export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? '');
  return (
    <>
      <div>
        {id ? <Entrada valor={id} texto="Codigo"></Entrada> : false}
        <Entrada valorMudando={setNome} holder="Digite o nome" tipo="text" texto="Nome" valor={nome}></Entrada>
        <Entrada valorMudando={setIdade} holder="Digite idade" tipo="number" texto="Idade" valor={idade}></Entrada>
        <div className={`flex  justify-end gap-4 mt-3  `}>
         <Botao onClick={()=> props.clienteMudou?.( new Cliente(nome, +idade, id))}  icone={EditIcon}>
          {id ? 'Alterar' : 'Salvar'}
         </Botao>
         <Botao onClick={props.onClick} icone={CancelarIcon}>
             Cancelar
         </Botao>
        </div>
      </div>
    </>
  );
}
