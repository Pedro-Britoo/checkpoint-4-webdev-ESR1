export default function BarraBusca({ valor, aoAlterar }) {
  return (
    <input
      type="text"
      value={valor}
      onChange={(evento) => aoAlterar(evento.target.value)}
      placeholder="Buscar anotacoes..."
      className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
    />
  );
}
