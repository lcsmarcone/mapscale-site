// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="MapScale logo" width={36} height={36} />
          <span className="font-bold text-lg text-emerald-800 tracking-wide">
            MapScale
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium">
          <Link href="/solucoes" className="hover:text-emerald-700">Soluções</Link>
          <Link href="/projetos" className="hover:text-emerald-700">Projetos</Link>
          <Link href="/sobre" className="hover:text-emerald-700">Sobre</Link>
          <Link href="/contato" className="hover:text-emerald-700">Contato</Link>
          <a
            href="/contato"
            className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Solicite um projeto
          </a>
        </div>
      </nav>
    </header>
  );
}
