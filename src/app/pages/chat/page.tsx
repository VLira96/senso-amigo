import ChatSidebar from "@/components/chat-sidebar";

export default function Chat() {
    return (
        <div className="flex w-full h-screen bg-gray-100 ml-[100px]">
            <ChatSidebar />
            <div className="flex-1 p-4 flex flex-col bg-white">
                <div className="flex items-center mb-4 border-b pb-4">
                    <button className="mr-2 text-gray-500 hover:text-gray-700">&#8592;</button>
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <p className="ml-2 font-semibold text-gray-700">Lucas</p>
                    <span className="ml-2 text-green-500 text-xs">Escrevendo...</span>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-y-auto">
                    <div className="mb-2">
                        <p className="bg-gray-200 p-2 rounded-lg inline-block text-gray-700">
                            Oii amigo!
                        </p>
                    </div>
                    <div className="bg-gray-200 p-2 rounded-lg inline-block text-gray-700"> ... </div>
                </div>
                <div className="mt-4 flex items-center border-t border-gray-300 pt-4">
                    <input
                        type="text"
                        placeholder="Mensagem..."
                        className="w-full p-2 border border-gray-300 rounded-l focus:outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
}
