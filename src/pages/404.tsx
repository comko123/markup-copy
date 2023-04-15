import { loginAtom } from "@/atoms/loginAtoms"
import LayOut from "@/components/LayOut"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useRecoilValue } from "recoil"

const ErrorPage:NextPage = () => {
    const {replace} = useRouter()
    const {login} = useRecoilValue(loginAtom)
    return(<LayOut login={login}>
<div className="w-full h-full flex">
<main className=" bg-blue-100 mx-auto border-2 border-blue-500 p-5 rounded-2xl h-full w-[80%] lg:w-[40%] my-10 flex flex-col">
            <div className="text-[2rem] text-red-600 font-bold text-center">&#8251;ERROR&#8251;</div>
            <div className="grid gap-16">
            <div className="grid grid-cols-1 gap-10">
            <div className="mt-5 font-bold">
          <div className="[&>*]:text-center [&>*]:text-sm">
          <div>죄송합니다.</div>
            <div>요쳥하신 페이지를 찾을수 없습니다.</div>
          </div>
            </div>
            <p className="text-center font-bold text-sm">관련 문의사항은 
            email@gmail.com , 010-0000-0000으로 문의 해주시면 관련사항 안내해드리겠습니다.</p>
            </div>
            <button onClick={()=>replace('/')}
            className="bg-blue-500 p-2 rounded-lg text-white font-bold hover:bg-blue-400">home</button>
            </div>
            </main>

</div>
    </LayOut>)
}
export default ErrorPage
