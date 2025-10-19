import Image from "next/image";

export default function Sobre() {
  return (
    <section className="bg-[#E6F2EF] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/about.jpg"
            alt="Equipe MapScale"
            width={500}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-emerald-600">MapScale</span>
          </h1>
          <p className="text-gray-700 mb-4">
            A MapScale nasceu para simplificar o desenvolvimento de sistemas e automações.
            Nosso foco é criar soluções digitais sob medida — desde plataformas completas até integrações de dados — 
            combinando engenharia, design e estratégia.
          </p>
          <p className="text-gray-700">
            Unimos <strong>tecnologia, automação e experiência de usuário</strong> para
            entregar resultados eficientes, escaláveis e personalizados para cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
