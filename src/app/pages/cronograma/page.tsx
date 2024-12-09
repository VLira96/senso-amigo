import SideBar from "@/components/sidebar";

const Cronograma = () => {
  return (
    <main className="flex-grow relative bg-gray-100 h-full">
      <div className="p-4 flex flex-col items-center">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-azul-secundario mb-16">Cronograma</h1>

        {/* Seção: Cronograma Escolar */}
        <div className="mb-16 w-full">
          <h2 className="text-3xl font-semibold text-azul-secundario mb-8 text-center">
            Cronograma Escolar
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-azul-claro text-black p-4 rounded-lg w-64 text-center shadow-md">
              Segunda-feira (08/12) - Atividade de desenho com lápis de cor
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Terça-feira (09/12) - Aula de música: Conhecendo os instrumentos
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Quarta-feira (10/12) - Oficina de leitura: Contação de histórias
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Quinta-feira (11/12) - Atividade de artesanato: Montagem de origamis
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Sexta-feira (12/12) - Aula de educação física: Jogos cooperativos
            </div>
          </div>
        </div>

        {/* Seção: Cronograma de Atividades para Casa */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-azul-secundario mb-8 text-center">
            Cronograma de Atividades para Casa
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-azul-claro text-black p-4 rounded-lg w-64 text-center shadow-md">
              Segunda-feira (08/12) - Revisar tabuada de multiplicação
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Terça-feira (09/12) - Resolver exercícios de divisão no caderno
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Quarta-feira (10/12) - Estudar para a prova de matemática (capítulos 3 e 4)
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Quinta-feira (11/12) - Ler o capítulo 2 do livro de ciências
            </div>
            <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
              Sexta-feira (12/12) - Preparar um resumo para a redação
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cronograma;
