import SideBar from "@/components/sidebar";

export default function Page() {
    return (
        <div>
            <SideBar />
            <h1>Jogos</h1>
            <ul>
                <li>
                    <img src="" alt="Imagem de Jogo da Velha" />
                    Jogo da Velha
                </li>
                <li>
                    <img src="" alt="Imagem de Palavra Cruzada" />
                    Palavra Cruzada
                </li>
                <li>
                    <img src="" alt="Imagem de Xadrez" />
                    Xadrez
                </li>
            </ul>
        </div>
    )
}