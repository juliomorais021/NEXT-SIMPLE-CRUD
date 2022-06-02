interface EntradaProps {
  texto: string;
  tipo?: "text" | "number";
  valor: any
  holder?: string
  valorMudando? : (valor:any) => void
  
}
export default function Entrada(props: EntradaProps) {
  return (
    <>
      <div className={`text-xl flex flex-col   `}>
        <label className={`mb-2 mt-2`} >{props.texto}</label>
        <input className={`border placeholder:italic border-purple-500 rounded-lg focus: outline-none px-4 py-2`} onChange={ e => props.valorMudando?.(e.target.value)}  value={props.valor} placeholder={props.holder}  type={props.tipo} />
      </div>
    </>
  );
}
