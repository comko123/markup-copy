import { loginAtom } from "@/atoms/loginAtoms"
import LayOut from "@/components/LayOut"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useSetRecoilState } from "recoil"

const Login:NextPage = () => {
  const setLoginState = useSetRecoilState(loginAtom)
  const {replace} = useRouter()
return(<LayOut>
  <main className="flex flex-col justify-center items-center h-[80vh]">
<div className="flex flex-col">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className="w-20 aspect-square mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>
<div className="text-center font-bold text-3xl">Sign in to DoneList</div>
</div>

<form onSubmit={e=>{
  e.preventDefault()
  setLoginState(state=>({login:!state.login}))
  replace('/')
}} 
className="grid grid-cols-1 bg-blue-100 p-3 mt-4 w-96 h-64 border-4 border-blue-500 rounded-lg shadow-xl">
        {["email","password"].map(item=>{
            return( <div className="font-bold flex flex-col" key={item}>
            <span className="ml-1 mb-1">{item}</span>
            <input type={item!=="password"?"email":"password"} className="border-2 border-blue-500 rounded-lg h-10 outline-none p-3 text-sm"/>
            </div>)
        })}
    <input type="submit" value="Log In"className="bg-blue-500 p-2 my-auto rounded-lg font-bold text-lg hover:text-white"/>
</form>
</main>
</LayOut>)
}
export default Login