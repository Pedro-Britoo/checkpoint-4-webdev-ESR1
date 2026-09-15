export default function CartaoAnotacao({ anotacao, aoSelecionar, aoExcluir }) {
  return (
    <li className="rounded-lg border-l-4 border-blue-600 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-zinc-800">{anotacao.titulo}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
            {anotacao.conteudo}
          </p>
          <p className="mt-2 text-xs text-zinc-400">
            Criado em: {anotacao.criadoEm}
          </p>
        </div>

        <div className="flex shrink-0 gap-3 text-sm">
          <button
            type="button"
            onClick={() => aoSelecionar(anotacao.id)}
            className="text-blue-600 hover:underline"
          >
            Ver detalhes
          </button>
          <button
            type="button"
            onClick={() => aoExcluir(anotacao.id)}
            className="text-red-600 hover:underline"
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
}
