import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col-reverse bg-azul-principal h-screen">
      <div className="flex gap-80 bg-white h-[50%] rounded-tr-full">
        <p className="m-20 w-[638px] text-4xl">A plataforma que auxiliará alunos com autismo a melhorar a comunicação com professores e colegas.</p>
        <div className="mt-16 flex flex-col gap-8 text-7xl pr-32">
          <Link href={'/pages/home'}>
            <button className="bg-azul-secundario text-white rounded-xl px-8 py-3 shadow w-[400px]">Login</button>
          </Link>
          <Link href={'/pages/home'}>
            <button className="bg-zinc-300 text-azul-secundario rounded-xl px-8 py-3 shadow-sm w-[400px]">Cadastrar</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-12 justify-center items-center h-auto">
        <img src="logo.png" alt="logo" width={350} />
        <h1 className="text-white text-7xl font-semibold">SensoAmigo</h1>
      </div>
    </main>
  );
}