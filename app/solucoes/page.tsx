export default function Solucoes() {
    const solutions = [
      {
        icon: "🧭",
        title: "Automação de Dados",
        desc: "Criação de scripts, ETLs e pipelines inteligentes em Python e PostgreSQL para automatizar fluxos de informação.",
      },
      {
        icon: "🛍️",
        title: "Plataformas de Gestão",
        desc: "Desenvolvimento de sistemas e sites completos — como plataformas de agendamento, e-commerce e dashboards corporativos.",
      },
      {
        icon: "🧩",
        title: "Integração de APIs",
        desc: "Conecte bancos de dados, CRMs e sistemas externos com automações seguras e escaláveis.",
      },
      {
        icon: "📊",
        title: "Dashboards e Relatórios",
        desc: "Visualize métricas e indicadores em tempo real com Power BI, MapDash ou soluções personalizadas.",
      },
    ];
  
    return (
      <section className="bg-[#E6F2EF] min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Soluções <span className="text-emerald-600">MapScale</span>
          </h1>
          <p className="text-center text-gray-600 mt-4 mb-12">
            Desenvolvimento, automação e integração de sistemas sob medida.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
              >
                <div className="text-4xl">{s.icon}</div>
                <h2 className="text-lg font-semibold text-emerald-700 mt-4">
                  {s.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  