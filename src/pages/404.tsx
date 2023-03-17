import { useRouter } from "next/router"

const ErrorPage = () => {
    const {replace} = useRouter()
    return(<main className="flex flex-col items-center justify-center h-[85vh]">
        <div className=" bg-blue-100 border-2 border-blue-500 p-5 rounded-2xl h-[65vh] xl:w-[30vw] lg:w-[50vw] w-[70vw]">
            <div className="text-[2rem] text-red-600 font-bold text-center">&#8251;ERROR&#8251;</div>
            <div className="grid gap-16">
            <div className="grid grid-cols-1 gap-10">
            <div className="mt-5 font-bold">
            <div className="text-center">죄송합니다.</div>
            <div className="text-center">요쳥하신 페이지를 찾을수 없습니다.</div>
            </div>
            <p className="text-center font-bold text-lg">관련 문의사항은 
            email@gmail.com , 010-0000-0000으로 문의 해주시면 관련사항 안내드리 겠습니다.</p>
            </div>
            <button onClick={()=>replace('/')}
            className="bg-blue-500 p-2 rounded-lg text-white font-bold hover:bg-blue-400">home</button>
            </div>
            </div>
    </main>)
}
export default ErrorPage
