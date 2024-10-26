import Link from "next/link";

export default function SideBar() {
    return (
        <div id="sidebar" className="bg-azul-principal text-white w-[100px] h-screen flex flex-col items-center py-6 space-y-8">
            <div>
                <Link href={'/'}>
                    <img src="/logo.png" alt="Logo Senso Amigo" className="w-15 h-15" />
                </Link>
            </div>

            <ul className="flex flex-col gap-10">
                <li>
                    <Link href={'/'}>
                        <img src="/home-icon.png" alt="Início" className="w-10 h-10" />
                    </Link>
                </li>
                <li>
                    <Link href={'/pages/chat'}>
                        <img src="/chat-icon.png" alt="Bate-papo" className="w-10 h-10" />
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <img src="/settings-icon.png" alt="Configurações" className="w-10 h-10" />
                    </Link>
                </li>
            </ul>
        </div>
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
