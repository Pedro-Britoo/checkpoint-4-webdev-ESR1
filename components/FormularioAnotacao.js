"use client";

import { useState } from "react";

export default function FormularioAnotacao({ aoCriar }) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  function handleEnviar(evento) {
    evento.preventDefault();

    if (!titulo.trim() || !conteudo.trim()) {
      return;
    }

    aoCriar({ titulo: titulo.trim(), conteudo: conteudo.trim() });
    setTitulo("");
    setConteudo("");
  }

  return (
    <form
      onSubmit={handleEnviar}
      className="rounded-lg bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 font-semibold text-zinc-800">Nova Anotacao</h2>

      <label className="mb-1 block text-sm font-medium text-zinc-700" htmlFor="titulo">
        Titulo
      </label>
      <input
        id="titulo"
        type="text"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
        placeholder="Digite o titulo..."
        className="mb-4 w-full rounded-md border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
      />

      <label className="mb-1 block text-sm font-medium text-zinc-700" htmlFor="conteudo">
        Conteudo
      </label>
      <textarea
        id="conteudo"
        value={conteudo}
        onChange={(evento) => setConteudo(evento.target.value)}
        placeholder="Digite o conteudo..."
        rows={4}
        className="mb-4 w-full resize-y rounded-md border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Criar Anotacao
      </button>
    </form>
  );
}
