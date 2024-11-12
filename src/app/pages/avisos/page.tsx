import SideBar from "@/components/sidebar";

const Avisos = () => {
  return (
    <main className="flex-grow relative bg-gray-100 h-full">
      <div className="pt-40 p-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-azul-secundario mb-6">Avisos</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-azul-claro text-black p-4 rounded-lg w-64 text-center shadow-md">
            Não haverá aula nesse sábado (07/09) devido ao feriado da Independência do Brasil
          </div>
          <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
            Não haverá aula nessa sexta-feira (15/11) devido ao feriado da Proclamação da Republica
          </div>
          <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
            Aluno deve levar seus pais na reunião nessa quinta-feira (14/11)
          </div>
          <div className="bg-azul-secundario text-white p-4 rounded-lg w-64 text-center shadow-md">
            Aluno deve levar lanche nessa segunda-feira(18/11) para lanche compartilhado
          </div>
        </div>
      </div>
    </main>
  );
};

export default Avisos;
