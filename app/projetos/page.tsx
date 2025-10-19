import Image from "next/image";

export default function Projetos() {
  const projects = [
    {
      img: "/proj-spa.png",
      title: "Plataforma de Agendamento Spa",
      desc: "Sistema completo com login, agenda, controle de serviços e integração com pagamentos — backend em Django + Flutter App.",
    },
    {
      img: "/proj-dashboard.png",
      title: "Dashboard de Indicadores",
      desc: "Painel dinâmico de acompanhamento de KPIs, conectado a bancos SQL e APIs externas.",
    },
    {
      img: "/proj-automacao.png",
      title: "Automação de Dados",
      desc: "Pipeline Python + PostgreSQL para atualização diária de indicadores e relatórios automáticos.",
    },
  ];

  return (
    <section className="bg-[#E6F2EF] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Projetos e <span className="text-emerald-600">Cases</span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Alguns exemplos de soluções desenvolvidas pela MapScale.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-emerald-700 mb-2">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
