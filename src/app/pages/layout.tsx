import SideBar from "@/components/sidebar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen">
            <div className="fixed h-screen z-10">
                <SideBar />
            </div>
            <div className="flex-1 flex flex-col">
                <div
                    className="h-40 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/ceu-azul.png)',
                        zIndex: 0,
                    }}
                ></div>

                <div className="flex-1 flex justify-center items-center bg-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}