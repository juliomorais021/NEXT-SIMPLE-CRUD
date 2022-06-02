import React from "react";

interface botaoProps {
  cor?: "bg-red-600bg-red-600" | " bg-gradient-to-r from-blue-400 to-blue-700" | "gray";
  children: any;
  icone?: any
  onClick?: () => void
  
}

export default function Botao(props: botaoProps) {
  return (
    <>
      <div className={`flex items-center `}>
        <button onClick={props.onClick}
          className={`hover:animate-bounce   bg-gradient-to-r from-blue-400 to-blue-700
       text-white px-4 py-2 rounded-md m-2
       
       `}
        >
          {props.children}
        </button>
        <div>{props.icone}</div>
      </div>
    </>
  );
}
