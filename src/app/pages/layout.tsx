import SideBar from "@/components/sidebar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <div
                    className="h-40 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/74e3/23b0/e268379ed269108a27823cd3d17828df?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N649XcfnFReu4guEHj3wQWxo7qGAMWBe94it-E~QO7NOqucFNnwV~2jGR59QjobqBQ6fXFVSamAKA9oMHCCYL5-q1fyyh6MSgbT6SHzA6-Yv6~QtO8EyczCEeBUS5oRphXYX3D-c3RT48N~TQwY-uSyQ3xsUfhVOkfsqcuGrt~JZz4lBa5dJO2eCa2tnI3vRvDO0bVPc68hiWcbG0-WnVgSrGoUhUkKsVoeXNyPoG1BUn3801wuWNON4pTJL1UqEZAR-VhaBShtUH8KCyeA2AtRebW0WCKZ0v7QUMIEsVzlaRQ-LRuFNSss1KX-ttTlnAdrggG8IYT7-CzreF8sJKQ__')`,
                        zIndex: 0,
                    }}
                ></div>

                <div className="flex-1 flex justify-center items-center bg-gray-100 pt-10">
                    {children}
                </div>
            </div>
        </div>
    )
}