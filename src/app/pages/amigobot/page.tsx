import SideBar from "@/components/sidebar"

export default function AmigoBot() {
    return (
        <div id="container" className="flex">
            <SideBar />
            <div id="amigobot-chat" className="flex">
                <img
                    src="/amigobot.webp"
                    alt="logo AmigoBot"
                    className="h-1/4 rounded-full"
                    // width="250px"
                    // height="250px"
                />
                <h1 className="text-8xl font-bold">AmigoBot</h1>
                {/* <input
                    type="text"
                    placeholder="Mensagem"
                    className="outline outline-2 outline-black outline-offset-2 border-none p-1"
                /> */}
            </div>
        </div>
    )
}