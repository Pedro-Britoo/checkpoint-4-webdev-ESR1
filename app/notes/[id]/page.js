"use client";

import { Suspense, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import DetalhesAnotacao from "@/components/DetalhesAnotacao";

function ConteudoDetalhesAnotacao() {
  const parametrosRota = useParams();
  const parametrosBusca = useSearchParams();

  const titulo = parametrosBusca.get("titulo") || `Anotacao ${parametrosRota.id} nao encontrada`;
  const conteudo = parametrosBusca.get("conteudo") || "";
  const criadoEm = parametrosBusca.get("criadoEm") || "";

  useEffect(() => {
    if (titulo) {
      document.title = titulo;
    }

    return () => {
      document.title = "App de Anotacoes";
    };
  }, [titulo]);

  return (
    <DetalhesAnotacao titulo={titulo} conteudo={conteudo} criadoEm={criadoEm} />
  );
}

export default function PaginaDetalhesAnotacao() {
  return (
    <Suspense fallback={<p className="px-6 py-8 text-sm text-zinc-500">Carregando...</p>}>
      <ConteudoDetalhesAnotacao />
    </Suspense>
  );
}
