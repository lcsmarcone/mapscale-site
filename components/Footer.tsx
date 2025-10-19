// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200 mt-12">
        © {new Date().getFullYear()} MapScale. Todos os direitos reservados.
      </footer>
    );
  }
  