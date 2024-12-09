"use client";

import { useState } from "react";

const Configuracoes = () => {
  const [name, setName] = useState("João");
  const [email, setEmail] = useState("joao@exemplo.com");
  const [profileImage, setProfileImage] = useState("/default-profile.png");
  const [enableVoiceAssistance, setEnableVoiceAssistance] = useState(true);
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [chatNotifications, setChatNotifications] = useState(true);
  const [messagePreview, setMessagePreview] = useState(true);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para atualizar o tamanho da fonte
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(event.target.value));
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-semibold mb-8 text-center">Configurações</h1>

        {/* Foto de Perfil */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div className="flex items-center space-x-6">
            <img 
              src={profileImage} 
              alt="Foto de perfil" 
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-500" 
            />
            <div>
              <h2 className="text-xl font-semibold">Foto de Perfil</h2>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleProfileImageChange}
                className="mt-2 text-sm text-gray-600" 
              />
            </div>
          </div>
        </div>

        {/* Nome */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Nome</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 rounded-md w-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">E-mail</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 rounded-md w-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Assistência de Voz */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Assistência de Voz</h2>
            <p className="text-sm text-gray-500">Ativar a leitura de texto em voz alta para melhor compreensão.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>Desativado</span>
            <input
              type="checkbox"
              checked={enableVoiceAssistance}
              onChange={() => setEnableVoiceAssistance(!enableVoiceAssistance)}
              className="w-6 h-6"
            />
            <span>Ativado</span>
          </div>
        </div>

        {/* Animações */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Animações</h2>
            <p className="text-sm text-gray-500">Ativar animações para tornar a navegação mais divertida.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>Desativado</span>
            <input
              type="checkbox"
              checked={enableAnimations}
              onChange={() => setEnableAnimations(!enableAnimations)}
              className="w-6 h-6"
            />
            <span>Ativado</span>
          </div>
        </div>

        {/* Tamanho da Fonte */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Tamanho da Fonte</h2>
            <p className="text-sm text-gray-500">Ajuste o tamanho da fonte para facilitar a leitura.</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="12"
              max="30"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-32"
            />
            <span>{fontSize}px</span>
          </div>
        </div>

        {/* Notificações do Chat */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Notificações de Chat</h2>
            <p className="text-sm text-gray-500">Receber notificações de novas mensagens no chat.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>Desativado</span>
            <input
              type="checkbox"
              checked={chatNotifications}
              onChange={() => setChatNotifications(!chatNotifications)}
              className="w-6 h-6"
            />
            <span>Ativado</span>
          </div>
        </div>

        {/* Pré-visualização de Mensagens */}
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6">
          <div>
            <h2 className="text-xl font-semibold">Pré-visualização de Mensagens</h2>
            <p className="text-sm text-gray-500">Exibir uma pré-visualização das mensagens recebidas antes de abri-las.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>Desativado</span>
            <input
              type="checkbox"
              checked={messagePreview}
              onChange={() => setMessagePreview(!messagePreview)}
              className="w-6 h-6"
            />
            <span>Ativado</span>
          </div>
        </div>

        {/* Salvar Configurações */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Salvar Configurações
          </button>
        </div>
      </div>
    </main>
  );
}

export default Configuracoes;
