import { ctgAtom } from "@/atoms/ctgAtoms"
import { popupList } from "@/atoms/listAtoms"
import { popupIssueLog ,popUpSetting} from "@/sample_data_case/popUpLog"
import { popupProps, popupState } from "@/types/addPopUpProps"
import { popUpVariants } from "@/variants/popUpVariants"
import { motion } from "framer-motion"
import { NextPage } from "next"
import { useState } from "react"
import { useRecoilValue } from "recoil"

const AddToListPopUp:NextPage<popupProps> = ({setState, refrence:{itemList,title}}) => {
  const searchList = useRecoilValue(popupList({itemList,title}))[0]
const ctgList = useRecoilValue(ctgAtom)
const [startDate,fineDate] = searchList.date.split("~")
const [popupState,setPopupState] = useState<popupState>(
  {mainCtg:searchList.category.main,
   subCtg:searchList.category.sub,
   titState:false})
return(
<motion.div variants={popUpVariants} initial="start" animate="display" exit="end" className="z-20">
<motion.div onClick={()=>setState(state=>!state)}
className="bg-gray-900 w-full h-full fixed top-0 left-0 opacity-50 font-bold"/>
<motion.div
className="fixed top-[12%] left-[5%] md:left-[12%] w-[90%] md:w-[78%] h-[75%] bg-white rounded-xl pb-5 overflow-auto scrollbar-hide">
<header className="bg-gray-300  h-[4em] md:h-[5em] rounded-t-xl flex justify-end px-3 pt-3 w-full">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
 className="w-6 h-6 md:w-10 md:h-10 hover:text-red-500" onClick = {()=>setState(state=>!state)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></header>

<main className="mt-5 ml-[7%]">
<form className="flex flex-col mr-[7%]" onSubmit={e=>e.preventDefault()}>
  <div className="border-b-2 border-gray-300 pb-4 mb-2 w-full">
  <input type="text" defaultValue={searchList.title}
  className="outline-none rounded-lg bg-slate-200 p-3 w-full shadow-md"/>
  </div>

<div className="flex">
<div className="flex flex-col w-full">
  <div className="flex empty:h-14 justify-center items-center">
  {Object.keys(ctgList).map(mainC=><input type="button" key={mainC} onClick={()=>setPopupState(state=>{
      if(state.mainCtg!==mainC){return {...state,mainCtg:mainC,subCtg:""}}else {return {...state,mainCtg:""}}})} 
    className={`text-white ${popupState.mainCtg === mainC?"bg-blue-500":"bg-blue-300"} 
    shadow-md text-vxs sm:text-xs hover:ring hover:ring-blue-500 hover:ring-offset-4 
    cursor-pointer w-[20%] border-2 border-blue-500 py-1 md:p-2 rounded-xl m-2`} value={mainC}/>)}
  </div>

  <div className="flex empty:h-14 justify-center items-center">
  {ctgList[popupState.mainCtg]?.map(subC=><input type="button" key={subC} onClick={()=>setPopupState(state=>{
      if(state.subCtg!==subC){return  {...state,subCtg:subC}}else {return {...state,subCtg:""}}})} 
    className={`text-white ${popupState.subCtg === subC?"bg-blue-500":"bg-blue-300"} 
    shadow-md text-vxs sm:text-xs hover:ring hover:ring-blue-500 
    hover:ring-offset-4 cursor-pointer w-[20%] 
    border-2 border-blue-500 py-1 md:p-2 rounded-xl m-2`} value={subC}/>)}
  </div>

 </div> 
 <div className="my-auto">
 <input type="button" value="&#43;"
    className="text-lg md:text-2xl text-center w-7 md:w-14 rounded-xl box-border shadow-md bg-blue-500 pb-1 text-white cursor-pointer hover:opacity-80"/>
 </div>
</div>

<div className="flex mt-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div className="ml-2 md:ml-5 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-lg text-blue-500 min-w-max">{startDate}</div>
<span className="ml-3 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-3 md:w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>
</span>
<div className="ml-2 md:ml-5 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-lg text-blue-500 min-w-max">{fineDate}</div>
</div>

<div className="grid grid-cols-3 gap-x-5 mt-2">
  
  {Object.keys(popupIssueLog).map(item=>{return(
    <select key={item} className="outline-none shadow-md text-vxs sm:text-xs text-blue-500 border-2 border-blue-500 rounded-lg px-2 py-1">
    {popupIssueLog[item].map(index=> <option key={index} className="text-center font-bold">{index}</option>)}
    </select>
  )})}
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<div className="flex justify-center items-center w-full ml-2 border-2 border-blue-500 shadow-md rounded-xl py-1 text-blue-500 md">함께하는 사람 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<div className="flex justify-center items-center w-full ml-2 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">위치 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

<div className="flex justify-center items-center ml-2 w-full h-32 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">설명 및 메모 추가</div>
</div>

<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
<div className="grid grid-cols-3 gap-x-2 md:gap-x-5 mt-3 ml-2">
{Object.keys(popUpSetting({selsect:searchList.level,itemList})).map(item=>{return(
    <select key={item} className="outline-none text-blue-500 text-vxs sm:text-xs shadow-md border-2 border-blue-500 rounded-lg md:px-2 md:py-1">
    {popUpSetting({selsect:searchList.level,itemList})[item].map(index=> <option key={index} className="text-center font-bold">{index}</option>)}
    </select>
  )})}
</div>
<div className="grid grid-cols-2 place-content-center mt-3 ml-2 md:ml-4">
<input type="checkbox" className="w-4 md:w-5 shadow-md aspect-square" 
onClick={()=>setPopupState(state=>{return{...state,titState:!state.titState}})}/> 
<span className={`${popupState.titState?"text-blue-500":"text-black"} mt-[0.1rem]`}>매일</span></div>
</div>

<div className="border-2 border-blue-500 rounded-lg p-2 text-center text-blue-500 shadow-md mt-3">피드백 추가</div>
</form>
</main>
</motion.div>
</motion.div>)
}
export default AddToListPopUp