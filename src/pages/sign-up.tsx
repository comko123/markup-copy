import LayOut from "@/components/LayOut";
import { NextPage } from "next";

const SignUp:NextPage = () => {
    return(<LayOut>
        <main className="flex flex-col justify-center items-center h-[80vh]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    strokeWidth={1.5} stroke="currentColor" 
    className="w-16 aspect-square mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
<div className="text-center font-bold text-2xl">Sign Up to Done List</div>
<form onSubmit={e=>e.preventDefault()}
className="bg-blue-100 p-3 mt-4 w-96 h-[22.5rem] border-4 font-bold border-blue-500 rounded-lg shadow-xl">
    {["name","e-mail","nickname","password"].map(item=>{return(
        <div key={item} className="my-2 ml-2">
        <div className="ml-1 mb-1">{item}</div>
        <input type="text" className="outline-none w-full rounded-lg h-8 p-3"/>
        </div>
    )})}
    <input type="submit" value="Sign Up" className="bg-blue-500 hover:text-white p-2 rounded-lg w-[95%] mt-2 ml-3"/>
</form>
    </main></LayOut>)
}
export default SignUp 