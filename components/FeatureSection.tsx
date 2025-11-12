// mapscale/components/FeatureSection.tsx
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="md:w-1/2">
          <Image
            src="/feature.png"
            alt="Automação WebGIS MapScale"
            width={500}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Soluções digitais inteligentes<br />
            <span className="text-emerald-600">para negócios modernos</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
          Da criação de sites e plataformas completas ao desenvolvimento 
          de dashboards e automações de dados — a MapScale une tecnologia e estratégia para acelerar operações e decisões.
          </p>
          <a
            href="/solucoes"
            className="inline-block mt-8 px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Conhecer Soluções
          </a>
        </div>
      </div>
    </section>
  );
}
