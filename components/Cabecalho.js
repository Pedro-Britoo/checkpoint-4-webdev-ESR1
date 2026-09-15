import Link from "next/link";

export default function Cabecalho({ titulo = "App de Anotacoes" }) {
  return (
    <header className="bg-blue-600 text-white shadow-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold">📝 {titulo}</span>
        <Link href="/" className="text-sm text-white/90 hover:underline">
          Inicio
        </Link>
      </div>
    </header>
  );
}
