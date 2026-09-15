import "./globals.css";
import Cabecalho from "@/components/Cabecalho";

export const metadata = {
  title: "App de Anotacoes",
  description: "Checkpoint 4 - App de anotações com Next.js",
};

export default function LayoutRaiz({ children }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50">
        <Cabecalho />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
