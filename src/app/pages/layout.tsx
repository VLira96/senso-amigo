import SideBar from "@/components/sidebar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className="flex ">
                <SideBar />
                {children}
            </body>
        </html>
    )
}