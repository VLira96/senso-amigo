import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-r from-azul-claro to-azul-principal h-screen text-center">
      {/* Seção do topo: Imagem de fundo suave com logo e título */}
      <div className="flex flex-col items-center justify-center h-[50%] bg-gradient-to-r from-blue-300 to-blue-500 py-16">
        <img src="logo.png" alt="Logo" className="w-32 mb-6 rounded-lg shadow-lg" />
        <h1 className="text-white text-6xl font-bold mb-4">SensoAmigo</h1>
        <p className="text-white text-xl max-w-xl mx-auto font-medium mb-8">
          Ajudando alunos com autismo a se comunicarem de forma eficaz com professores e colegas, promovendo uma educação inclusiva e acessível.
        </p>
      </div>

      {/* Seção de Ação - Login e Cadastro */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 bg-white py-12 px-8 rounded-lg shadow-lg">
        <div className="w-[300px]">
          <Link href="/login">
            <button className="w-full bg-azul-secundario text-white text-2xl font-semibold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
        <div className="w-[300px]">
          <Link href="/cadastro">
            <button className="w-full bg-zinc-300 text-azul-secundario text-2xl font-semibold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div className="bg-azul-claro py-16 px-8">
        <h2 className="text-4xl font-bold text-white mb-12">Benefícios da Plataforma</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:bg-azul-secundario hover:text-white transition-all">
            <h3 className="text-2xl font-semibold mb-4">Inclusão Social</h3>
            <p className="text-lg">Ajudamos alunos a interagir com seus colegas e professores, promovendo um ambiente escolar inclusivo.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:bg-azul-secundario hover:text-white transition-all">
            <h3 className="text-2xl font-semibold mb-4">Comunicação Clara</h3>
            <p className="text-lg">Facilitamos a comunicação entre alunos com autismo e a comunidade escolar, garantindo mais clareza e entendimento.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:bg-azul-secundario hover:text-white transition-all">
            <h3 className="text-2xl font-semibold mb-4">Apoio Constante</h3>
            <p className="text-lg">Oferecemos suporte contínuo aos alunos e professores, garantindo acompanhamento e ajustes conforme necessário.</p>
          </div>
        </div>
      </div>

      {/* Seção de Informações adicionais */}
      <div className="flex flex-col items-center py-16 px-8">
        <h2 className="text-4xl font-bold text-azul-secundario mb-6">Por que o SensoAmigo é Especial?</h2>
        <p className="text-xl text-center max-w-2xl mx-auto font-medium">
          O SensoAmigo foi projetado para ser uma plataforma que não só auxilia alunos com autismo a se comunicarem de maneira eficaz, mas também promove o aprendizado de forma divertida e interativa. A nossa missão é tornar a educação acessível a todos.
        </p>
      </div>
    </main>
  );
}
