import Link from "next/link";

export default function SideBar() {
  return (
    <aside id="sidebar" className="bg-azul-principal text-white w-[100px] h-full flex flex-col items-center py-6 space-y-8">
      <div>
        <Link href={'/pages/home'}>
          <img src="/logo.png" alt="Logo Senso Amigo" className="w-15 h-15" />
        </Link>
      </div>

      <ul className="flex flex-col gap-20 pt-20">
        <li>
          <Link href={'/pages/home'}>
            <img src="/home-icon.png" alt="Início" className="w-10 h-10" />
          </Link>
        </li>
        <li>
          <Link href={'/pages/chat'}>
            <img src="/chat-icon.png" alt="Bate-papo" className="w-10 h-10" />
          </Link>
        </li>
        <li>
          {/* Corrigido: Sem a pasta 'pages' na URL */}
          <Link href={'/pages/configuracoes'}>
            <img src="/settings-icon.png" alt="Configurações" className="w-10 h-10" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}
