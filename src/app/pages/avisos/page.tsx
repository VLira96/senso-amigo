import SideBar from "@/components/sidebar";

const Avisos = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow relative">
        {}
        <div
          className="absolute top-0 left-0 right-0 h-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/74e3/23b0/e268379ed269108a27823cd3d17828df?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N649XcfnFReu4guEHj3wQWxo7qGAMWBe94it-E~QO7NOqucFNnwV~2jGR59QjobqBQ6fXFVSamAKA9oMHCCYL5-q1fyyh6MSgbT6SHzA6-Yv6~QtO8EyczCEeBUS5oRphXYX3D-c3RT48N~TQwY-uSyQ3xsUfhVOkfsqcuGrt~JZz4lBa5dJO2eCa2tnI3vRvDO0bVPc68hiWcbG0-WnVgSrGoUhUkKsVoeXNyPoG1BUn3801wuWNON4pTJL1UqEZAR-VhaBShtUH8KCyeA2AtRebW0WCKZ0v7QUMIEsVzlaRQ-LRuFNSss1KX-ttTlnAdrggG8IYT7-CzreF8sJKQ__')`,
            height: '160px'
          }}
        ></div>

        {}
        <div className="pt-40 p-4">
          <h1 className="text-6xl font-semibold text-azul-secundario">Avisos</h1>
        </div>
      </main>
    </div>
  );
};

export default Avisos;
