import SideBar from "@/components/sidebar";

export default function Page() {
    return (
        <div>
            <SideBar />
            <h1>Jogos</h1>
            <ul>
                <li>Jogo da Velha</li>
                <li>Palavra Cruzada</li>
                <li>Xadrez</li>
            </ul>
        </div>
    )
}