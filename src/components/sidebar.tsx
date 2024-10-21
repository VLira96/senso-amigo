const SideBar = () => {
    return (
      <aside className="bg-blue-600 text-white w-64 h-screen flex flex-col p-4">
        {/* Logo ou título no topo */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white p-2 rounded-full">
              <p className="text-black font-bold text-lg">LOGO</p>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">App Name</h2>
        </div>
  
        {/* Links de navegação */}
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className="p-2 hover:bg-blue-700 rounded-lg transition"
          >
            Home
          </a>
          <a
            href="#"
            className="p-2 hover:bg-blue-700 rounded-lg transition"
          >
            Chat
          </a>
          <a
            href="#"
            className="p-2 hover:bg-blue-700 rounded-lg transition"
          >
            Configurações
          </a>
        </nav>
  
        {/* Rodapé */}
        <div className="mt-auto pt-6">
          <p className="text-sm text-center text-gray-400">© 2024 App Name</p>
        </div>
      </aside>
    );
  };
  
  export default SideBar;
  