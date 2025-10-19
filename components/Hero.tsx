// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#E6F2EF] pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Automação e Tecnologia sob medida<br />
            <span className="text-emerald-600">para impulsionar o seu negócio</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
          A MapScale desenvolve sistemas, plataformas e integrações que transformam processos em resultados.
        Conectamos dados, automação e design para gerar eficiência e crescimento.
          </p>
          <a
            href="/contato"
            className="inline-block mt-8 px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Fale com a MapScale
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero.png"
            alt="Ilustração geoespacial"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
