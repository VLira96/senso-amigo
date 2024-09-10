export default function Page() {
    return (
        <div id="container">
            <div id="sidebar">
                <ul>
                    <li>
                        <img src="/Firefly_gera_uma_logo_para_um_app_de_acessibilidade_para_autistas__logo_simples__sem_muitos_detalhes-removebg-preview.png" alt="" />
                    </li>
                    <li>Home</li>
                    <li>Chat</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div id="amigobot-chat">
                <img 
                    src="/amigobot.webp" 
                    alt="logo AmigoBot" 
                    width="250px"
                    height="250px"
                />
                <h1>AmigoBot</h1>
                <input 
                    type="text" 
                    placeholder="Mensagem"
                    style={{
                        outline: '2px solid #000', /* Contorno de 2 pixels, preto */
                        outlineOffset: '2px', /* Distância entre o contorno e o conteúdo */
                        padding: '5px', /* Adiciona um pouco de preenchimento */
                        border: 'none' /* Remove a borda padrão para exibir apenas o contorno */
                    }} 
                />
            </div>
        </div>
    )
}