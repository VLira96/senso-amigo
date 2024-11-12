export default function ChatSidebar() {
    const users = [
      { name: "Antonio", status: "Online há 10 minutos" },
      { name: "Maria", status: "Online há 10 minutos" },
      { name: "Ana", status: "Online há 10 minutos" },
      { name: "Roberto", status: "Online há 10 minutos" },
      { name: "Jorge", status: "Online há 10 minutos" },
      { name: "Luis", status: "Online há 10 minutos" },
    ];
  
    return (
      <div className="bg-gray-200 h-screen p-4 border-r border-gray-300">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
        />
        <ul>
          {users.map((user, index) => (
            <li key={index} className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-400 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-gray-700">{user.name}</p>
                <p className="text-sm text-gray-500">{user.status}</p>
              </div>
              <button className="ml-auto bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  