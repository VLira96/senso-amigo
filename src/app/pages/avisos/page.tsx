import SideBar from "@/components/sidebar";

const Avisos = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow p-4">
        <h1 className="text-xl font-semibold">Avisos</h1>
        {/* Aqui vai o conteúdo da página de avisos */}
      </main>
    </div>
  );
};

export default Avisos;
