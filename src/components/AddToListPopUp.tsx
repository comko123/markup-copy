import { popupList } from "@/atoms/listAtoms"
import {motion} from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import { useRecoilValue } from "recoil"

interface popup_state {
    setState : Dispatch<SetStateAction<boolean>>,
    keyValue:string,
    title:string
}

const AddToListPopUp = ({setState, keyValue , title}:popup_state) => {
const searchList = useRecoilValue(popupList({keyValue,title}))
const [catg , setSatg] = useState<string[]>([])
const sample:{[key:string]:string[]} = {retry:["반복 안함","반복"],state:["상태"],secert:["공개","비공개"]}
console.log(searchList)
return(
<>
<motion.div className="bg-gray-900 w-full h-full fixed top-0 left-0 opacity-30 z-20 font-bold"/>
<motion.div className="fixed top-[5%] w-[82%] h-[90%] bg-white rounded-xl pb-11 z-20 overflow-auto scrollbar-hide">
<header className="w-full bg-gray-300 h-[5em] rounded-t-xl flex justify-end p-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
 className="w-10 h-10 hover:text-red-500" onClick = {()=>setState(state=>!state)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></header>

<main className="mt-5 ml-[10%]">
<form className="flex flex-col mr-[10%]">
  <div className="border-b-2 border-gray-300 pb-3 mb-3 w-full">
  <input type="text" defaultValue={searchList[0].title}
  className="outline-none rounded-lg bg-slate-200 p-3 w-full"/>
  </div>

 <div className="flex">
 <div className="grid grid-cols-5 gap-y-3 w-full">
    {["공부","운동","일상","취미","약속","학교","인강","스터티","영어","기타"].map(item=>{return(
    <input type="button" key={item} onClick={()=>setSatg(state=>{
      if(!catg.includes(item)){return[...state,item]}
      else {return state.filter(index=>index!==item)}
      })} 
    className={`text-white ${catg.includes(item)?"bg-blue-500":"bg-blue-200"} hover:bg-blue-500 cursor-pointer w-[80%] border-2 border-blue-500 p-2 rounded-xl`} value={item}/>)}
      )}
  </div>
  <div className="flex justify-center items-center">
    <input type="button" value="&#43;"
    className="text-2xl text-center w-14 rounded-xl box-border bg-blue-500 pb-1 text-white cursor-pointer hover:opacity-80"/>
  </div>
 </div>

<div className="flex mt-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 md:w-10 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div className="ml-2 md:ml-5 border-2 border-blue-500 flex items-center px-3 md:px-8 rounded-lg text-xs md:text-lg text-blue-500">1월 12일 (목요일)</div>
<span className="ml-3 text-md flex items-center">-</span>
<div className="ml-3 border-2 border-blue-500 flex items-center px-3 md:px-8 rounded-lg text-xs md:text-lg text-blue-500">1월 12일 (목요일)</div>
</div>

<div className="grid grid-cols-3 gap-x-5 mt-2">
  
  {Object.keys(sample).map(item=>{return(
    <select key={item} className="outline-none md:text-lg text-blue-500 border-2 border-blue-500 rounded-lg px-2 py-1">
    {sample[item].map(index=> <option key={index} className="text-center">{index}</option>)}
    </select>
  )})}
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 md:w-10 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<div className="flex justify-center w-full ml-2 border-2 border-blue-500 rounded-xl py-1 text-blue-500 md:text-lg">함께하는 사람 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 md:w-10 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<div className="flex justify-center w-full ml-2 border-2  border-blue-500 rounded-xl py-1 text-blue-500 md:text-lg">위치 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 md:w-10 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

<div className="flex justify-center items-center ml-2 w-full h-32 border-2 border-blue-500 rounded-xl py-1 text-blue-500 md:text-lg">설명 및 메모 추가</div>
</div>

</form>
</main>

</motion.div>
</>)


}
export default AddToListPopUp