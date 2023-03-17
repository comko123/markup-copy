import { useState } from "react"

const Profil = () => {
  const [profilState,setProfilState] = useState(true)
    return(<div className="flex mx-6 md:mx-10 lg:mx-14 my-10">
       <nav className="border-r-2 border-gray-300 w-60 lg:w-80 h-[75vh]  md:pr-5">
       <div className={`bg-gray-100 w-48 lg:w-72 ${profilState?"h-[18rem] lg:h-80":"h-[21rem] lg:h-96"} rounded-xl pt-2 relative shadow-xl`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" 
        className="w-14 lg:w-28 aspect-square bg-white rounded-full mt-8 mx-auto p-1">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className="w-6 aspect-square bg-white absolute right-16 lg:right-[6rem] rounded-full border-2 border-black top-[4.7rem] lg:top-[7.8rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className="w-6 h-6 bg-white absolute  left-[4rem] lg:left-[6rem] rounded-full border-2 border-black top-[4.7rem] lg:top-[7.8rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>

{profilState?
    <div className="flex mt-4 lg:mt-3 font-semibold ml-3 lg:ml-8 text-sm lg:text-md max-w-xs lg:max-w-xl"> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} 
stroke="currentColor" className="w-3 lg:w-5 aspect-square mt-[0.2rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
</svg>
<span className="ml-1 w-28 lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">Lee Jinlee</span>
</div>
:<input defaultValue="Lee Jinlee"
className="ml-2 lg:ml-8 mt-5 lg:mt-3 w-44 lg:w-56 rounded-lg p-1 font-bold border-2 text-xs lg:text-md border-blue-500 outline-none "/>}

{profilState?
    <div className="flex mt-2 lg:mt-3 font-semibold ml-3 lg:ml-8 text-sm lg:text-md max-w-xs lg:max-w-xl"> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} 
stroke="currentColor" className="w-3 lg:w-5 aspect-square mt-[0.2rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
</svg>
<div className="ml-1 w-28 lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">Hi, i'm Devops engineer</div>
</div>:<input defaultValue="Hi, i'm Devops engineer"
className="ml-2 lg:ml-8 mt-5 lg:mt-3 w-44 lg:w-56 rounded-lg p-1 font-bold border-2 text-xs lg:text-md border-blue-500 outline-none "/>}

{profilState?
    <div className="flex mt-2 lg:mt-3 font-semibold ml-3 lg:ml-8 text-sm lg:text-md max-w-xs lg:max-w-xl">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    strokeWidth={3} stroke="currentColor" className="w-3 lg:w-5 aspect-square mt-[0.2rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<span className="ml-1 w-28 lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">Hanshin Univ</span>
</div>:<input defaultValue="Hanshin Univ"
className="ml-2 lg:ml-8 mt-5 lg:mt-3 w-44 lg:w-56 rounded-lg p-1 font-bold border-2 text-xs lg:text-md border-blue-500 outline-none "/>}

{profilState?
    <div className="flex mt-2 lg:mt-3 font-semibold ml-3 lg:ml-8 text-sm lg:text-md max-w-xs lg:max-w-xl"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    strokeWidth={3} stroke="currentColor" className="w-3 lg:w-5 aspect-square mt-[0.2rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
<span className="ml-1 w-28 lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">leejinlee.kr@gmail.com</span>
</div>:<input defaultValue="leejinlee.kr@gmail.com" 
className="ml-2 lg:ml-8 mt-5 lg:mt-3 w-44 lg:w-56 rounded-lg p-1 font-bold border-2 text-xs lg:text-md border-blue-500 outline-none "/>}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setProfilState(state=>!state)} 
viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className={`w-6 h-6 bg-white border-2 border-black rounded-full absolute ${profilState?"bottom-7":"bottom-3"} right-5 cursor-pointer`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</div> 
 <div className="font-bold text-center w-44 lg:w-72 mt-7">
  <button className="shadow-lg border-2 border-blue-500 text-blue-500 p-2 rounded-xl hover:bg-blue-500 hover:text-white">회원 탈퇴</button></div>
       </nav>
<aside className="overflow-x-hidden pt-3">
    <div className="flex font-bold justify-between px-8 w-[38vh] md:w-[55vw] text-xs md:text-lg ml-2 lg:ml-9 border-b-2 border-gray-300 pb-3">
        <div className="mx-auto ring-4 ring-blue-500 p-2 rounded-lg">Follower</div>
        <div className="mx-auto p-2 rounded-lg relative">Request 
        <div className="absolute bottom-[1.4rem] -right-1 rounded-full bg-red-500 text-white px-[0.3rem] py-[0.1rem] text-xs">3</div></div>
        </div>
    <form onSubmit={e=>e.preventDefault()} className="relative">
        <input type="text" className="w-[90%] shadow-lg p-2 font-bold bg-gray-100 mt-5 ml-4 md:ml-9 rounded-lg outline-none"/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} 
        stroke="currentColor" className="w-6 h-6 absolute top-6 right-3 md:right-7 lg:right-12 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
    </form>
   <div className="max-h-[60vh] overflow-auto mt-5 scrollbar-hide">
   {Array(5).fill({avatar:"",name:"Name",
    timeLine:"Hi, i'm Devops engineer",follow:true}).map((item,index)=>{return(
    <div key={index} className="my-5 ml-4 md:ml-9 bg-gray-100 rounded-xl flex h-20 lg:h-32 w-[90%] md:w-[93%] p-1 lg:p-4 shadow-lg">
        {item.avatar?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
        className="w-20 aspect-square p-1 bg-white rounded-full my-auto mr-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>:
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
      className="w-20 aspect-square p-1 bg-white rounded-full my-auto mr-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
}
<div className="md:border-l-4 md:border-gray-400 pl-5 flex w-full justify-between relative">
<div className="hidden md:block lg:pt-3 text-xs md:text-lg max-w-xs">
<div className="font-bold w-24 md:w-full overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</div>
<div className="pt-2 lg:pt-4 font-bold w-20 md:w-full overflow-hidden text-ellipsis whitespace-nowrap">{item.timeLine}</div>
</div>
<input type="button" value={item.follow?"follow":"unfollow"} 
className={`border-2 rounded-lg h-6 text-sm md:text-md md:h-12 px-2 font-bold relative top-8 md:top-3 lg:top-5 right-2 md:right-4 bg-white cursor-pointer 
${item.follow?"border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white":"border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}`}/>
<span className="text-sm font-bold absolute md:hidden">{item.name}</span>
</div>
    </div>)})}
   </div>

</aside>
    </div>)
}
export default Profil