import Link from "next/link";

export default function DetalhesAnotacao({ titulo, conteudo, criadoEm }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-lg font-semibold text-zinc-800">{titulo}</h2>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Voltar
          </Link>
        </div>

        <p className="whitespace-pre-wrap border-b border-zinc-200 pb-4 text-sm text-zinc-700">
          {conteudo}
        </p>

        <p className="mt-4 text-xs text-zinc-400">Criado em: {criadoEm}</p>
      </div>
    </div>
  );
}
