import tituloStyle from '../styles/titulo.module.css'

export default function Titulo(props){
    return(
       <div className={`flex flex-col justify-center ${tituloStyle.text} `}>
           <h1 className="px-7 py-2  text-2xl">
               {props.children}</h1>
           <hr className="border-1 border-purple-500" />
       </div>
    )
}