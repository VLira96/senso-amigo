import SideBar from "@/components/sidebar"

export default function AmigoBot() {
    return (
        <div id="container" className="flex flex-col items-center h-full w-full">
            <div className="flex flex-col items-center mt-8">
                <img
                    src="/amigobot.webp"
                    alt="logo AmigoBot"
                    className="h-32 w-32 rounded-full"
                />
                <h1 className="text-4xl font-bold text-blue-600 mt-4">AmigoBot</h1>
            </div>
            <div className="flex flex-col items-center mt-8 w-full max-w-md">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4 shadow-md w-3/4 text-center">
                    Olá, querido amigo, como posso ajudar?
                </div>
                <div className="flex w-full mt-4">
                    <input
                        type="text"
                        placeholder="Mensagem"
                        className="flex-1 border border-gray-300 p-2 rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}