import Link from "next/link";

export default function Jogos() {
    return (
        <div>
            <h1 className="font-bold text-4xl text-center text-blue-600 mb-20">Jogos</h1>
            <ul className="flex gap-16">
                <Link href={"https://papergames.io/pt-br/jogo-da-velha"}>
                    <li className="bg-azul-principal p-4 rounded-2xl text-center font-bold">
                        <img className="mb-4" src="/jogo-da-velha.png" alt="Imagem de Jogo da Velha" />
                        Jogo da Velha
                    </li>
                </Link>

                <Link href={"https://rachacuca.com.br/palavras/palavras-cruzadas/"}>
                    <li className="bg-azul-principal p-4 rounded-2xl text-center font-bold">
                        <img className="mb-4" src="/palavra-cruzada.png" alt="Imagem de Palavra Cruzada" />
                        Palavra Cruzada
                    </li>
                </Link>

                <Link href={"https://www.chess.com/"}>
                    <li className="bg-azul-principal p-4 rounded-2xl text-center font-bold">
                        <img className="mb-4" src="/xadrez.png" alt="Imagem de Xadrez" />
                        Xadrez
                    </li>
                </Link>
            </ul>
        </div>
    )
}