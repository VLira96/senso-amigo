import SideBar from "@/components/sidebar";
import Link from "next/link";

const Page = () => {
    return (
        <div id="container" className="flex flex-col items-center h-full w-full">
            <div className="flex flex-col items-center">
                <img
                    src="/junior-home.png"
                    alt="foto de perfil"
                    className="h-32 w-32 rounded-full"
                />
                <h1 className="text-4xl font-bold text-blue-600 mt-4">Olá, Junior!</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-3xl">
                <Link href={'/pages/avisos'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Avisos da escola
                    </button>
                </Link>

                <Link href={'/pages/jogos'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Jogos educativos
                    </button>
                </Link>

                <Link href={'/pages/videos'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Vídeos educativos
                    </button>
                </Link>

                <Link href={'/pages/cronograma'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Cronograma
                    </button>
                </Link>

                <Link href={'/pages/atividades'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Atividades do aluno
                    </button>
                </Link>

                <Link href={'/pages/amigobot'} passHref>
                    <button className="bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 w-[250px]">
                        Converse com o AmigoBot
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Page