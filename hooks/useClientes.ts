import Cliente from "../src/core/Cliente";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../src/core/ClienteRepositorio";
import { useEffect, useState } from "react";


export default function useClientes() {
    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela"); // dois possiveis estados ou seja dois valores "tabela" e "form". estado incial tabela
    const repo: ClienteRepositorio = new ColecaoCliente();
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);
    useEffect(obterTodos, [])
    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    function voltarLista() {
        setCliente(Cliente.vazio());
        setVisivel('tabela');
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        setVisivel('form');
    }
    async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()

    }
    return {
        salvarCliente,
        voltarLista,
        clienteSelecionado,
        clienteExcluido,
        cliente,
        visivel,
        clientes,
        setVisivel,
        setCliente,
    }

}