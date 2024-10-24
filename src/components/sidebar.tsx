import Link from "next/link";

export default function SideBar() {
    return (
        <>
            <div id="sidebar" className="bg-azul-principal text-white w-[150px] h-screen">
                <ul className="flex flex-col gap-10">
                    <li>
                        <Link href={'/'}>
                            <img src="/logo.png" alt="Logo Senso Amigo" width="150px" />
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
