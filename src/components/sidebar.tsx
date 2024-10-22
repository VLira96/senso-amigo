/*import Link from "next/link";

export default function SideBar() {
    return (
     <aside className="bg-blue-600 text-white w-64 h-screen flex flex-col p-4">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white p-2 rounded-full">
              <p className="text-black font-bold text-lg">LOGO</p>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">App Name</h2>
        </div>
  
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
  
        <div className="mt-auto pt-6">
          <p className="text-sm text-center text-gray-400">© 2024 App Name</p>
        </div>
      </aside>
    );
  };
  
  export default SideBar;*/
  
        <>
            <div id="sidebar" className="bg-azul-principal text-white w-[150px] h-screen">
                <ul>
                    <li>
                        <Link href={'/'}>
                            <img src="/Firefly_gera_uma_logo_para_um_app_de_acessibilidade_para_autistas__logo_simples__sem_muitos_detalhes-removebg-preview.png" alt="Logo Senso Amigo" width="150px" />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <img src="/home-icon.png" alt="Início" />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/pages/chat'}>
                            <img src="/chat-icon.png" alt="Bate-papo" />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <img src="/settings-icon.png" alt="Configurações" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

// const SideBar = () => {
//     return (
//         <aside className="bg-azul-principal text-white w-[250px] h-full">
//             <div className="">
//                 <p>logo principal</p>
//             </div>
//             <div>
//                 <p>home</p>
//             </div>
//             <div>
//                 <p>chat</p>
//             </div>
//             <div>
//                 <p>configurações</p>
//             </div>
//         </aside>
//     );
// }

// export default SideBar;
