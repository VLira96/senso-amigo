import SideBar from "@/components/sidebar";

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
            <div className="flex items-center mt-8 w-full max-w-md">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4 shadow-md w-3/4 text-center">
                    Avisos da escola
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4 shadow-md w-3/4 text-center">
                    Jogos educativos
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4 shadow-md w-3/4 text-center">
                    Videos educativos
                </div>
            </div>
        </div>
    );
}

export default Page