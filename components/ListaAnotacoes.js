import CartaoAnotacao from "./CartaoAnotacao";

export default function ListaAnotacoes({ anotacoes, aoSelecionar, aoExcluir }) {
  if (anotacoes.length === 0) {
    return (
      <p className="rounded-lg bg-white p-6 text-center text-sm text-zinc-500 shadow-sm">
        Nenhuma anotacao encontrada.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {anotacoes.map((anotacao) => (
        <CartaoAnotacao
          key={anotacao.id}
          anotacao={anotacao}
          aoSelecionar={aoSelecionar}
          aoExcluir={aoExcluir}
        />
      ))}
    </ul>
  );
}
