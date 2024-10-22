import SideBar from "@/components/sidebar"

export default function AmigoBot() {
    return (
        <div id="container" className="flex">
            <SideBar />
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
                    className="outline outline-2 outline-black outline-offset-2 border-none p-1"
                />
            </div>
        </div>
    )
}