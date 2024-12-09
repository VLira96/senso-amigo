"use client";

import SideBar from "@/components/sidebar";

const Videos = () => {
  const videoList = [
    {
      title: "Brincando com Formas e Cores",
      description: "Vídeo educativo para aprender sobre formas e cores de maneira interativa.",
      url: "https://www.youtube.com/embed/FebCdDTlk7k", // Link fornecido
    },
    {
      title: "História Educativa: Meu Amigo Autista",
      description: "Ajuda a ensinar sobre inclusão e convivência com crianças autistas.",
      url: "https://www.youtube.com/embed/DTJWarlyBVc", // Link fornecido
    },
    {
      title: "Alfabeto com Sons e Imagens",
      description: "Vídeo lúdico para ensinar o alfabeto com sons e imagens coloridas.",
      url: "https://www.youtube.com/embed/H33UFg94PEI", // Link fornecido
    },
    {
      title: "Como Expressar Emoções com Empatia",
      description: "Ajuda a identificar e expressar emoções de forma saudável.",
      url: "https://www.youtube.com/embed/h4TKJ8AemB8", // Link fornecido
    },
  ];

  return (
    <main className="flex-grow relative bg-gray-100 h-full">
      <div className="p-4 flex flex-col items-center">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-azul-secundario mb-16">Vídeos Educativos</h1>

        {/* Seção de Vídeos */}
        <div className="flex flex-wrap justify-center gap-8">
          {videoList.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 w-80 flex flex-col items-center"
            >
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-44 rounded-lg mb-4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-lg font-bold text-azul-secundario mb-2">{video.title}</h2>
              <p className="text-sm text-gray-600 text-center">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Videos;
