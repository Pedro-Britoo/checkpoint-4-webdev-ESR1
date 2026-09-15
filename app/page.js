"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormularioAnotacao from "@/components/FormularioAnotacao";
import ListaAnotacoes from "@/components/ListaAnotacoes";
import BarraBusca from "@/components/BarraBusca";

const anotacoesIniciais = [
  {
    id: "1",
    titulo: "Primeira Anotacao",
    conteudo: "Esta e uma anotacao de exemplo para demonstrar o funcionamento do app.",
    criadoEm: "26/08/2024, 10:00:00",
  },
  {
    id: "2",
    titulo: "Lista de Tarefas",
    conteudo: "1. Estudar React\n2. Fazer exercicios\n3. Revisar codigo",
    criadoEm: "26/08/2024, 10:15:00",
  },
];

export default function PaginaInicial() {
  const [anotacoes, setAnotacoes] = useState(anotacoesIniciais);
  const [termoBusca, setTermoBusca] = useState("");
  const router = useRouter();

  function handleCriarAnotacao({ titulo, conteudo }) {
    const novaAnotacao = {
      id: Date.now().toString(),
      titulo,
      conteudo,
      criadoEm: new Date().toLocaleString("pt-BR"),
    };

    setAnotacoes((atuais) => [novaAnotacao, ...atuais]);
  }

  function handleSelecionarAnotacao(id) {
    const anotacao = anotacoes.find((item) => item.id === id);
    if (!anotacao) return;

    const query = new URLSearchParams({
      titulo: anotacao.titulo,
      conteudo: anotacao.conteudo,
      criadoEm: anotacao.criadoEm,
    }).toString();

    router.push(`/notes/${id}?${query}`);
  }

  function handleExcluirAnotacao(id) {
    setAnotacoes((atuais) => atuais.filter((anotacao) => anotacao.id !== id));
  }

  const anotacoesFiltradas = anotacoes.filter((anotacao) => {
    const termo = termoBusca.trim().toLowerCase();
    if (!termo) return true;
    return (
      anotacao.titulo.toLowerCase().includes(termo) ||
      anotacao.conteudo.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8">
      <FormularioAnotacao aoCriar={handleCriarAnotacao} />
      <BarraBusca valor={termoBusca} aoAlterar={setTermoBusca} />
      <ListaAnotacoes
        anotacoes={anotacoesFiltradas}
        aoSelecionar={handleSelecionarAnotacao}
        aoExcluir={handleExcluirAnotacao}
      />
    </div>
  );
}
