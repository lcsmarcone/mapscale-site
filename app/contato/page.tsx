"use client";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! 🚀 (a integração com EmailJS pode ser adicionada depois)");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section className="bg-[#E6F2EF] py-24 px-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Fale com a <span className="text-emerald-600">MapScale</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Envie sua mensagem e retornaremos o mais breve possível.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={5}
            placeholder="Escreva sua mensagem..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
