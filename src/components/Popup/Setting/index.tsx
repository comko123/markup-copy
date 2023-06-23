/*eslint-disable*/
import { listAtom, popupList } from "@/atoms/listAtoms"
import { mainInfoAtoms, modifyAtoms } from "@/atoms/modifyAtoms"
import { popUpSetting } from "@/sample_data_case/popUpLog"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

const Setting = () => {
    const [{itemList,title},setMainInfo] = useRecoilState(mainInfoAtoms)
    const searchList = useRecoilValue(popupList({itemList,title} ))
    const popUpValue = popUpSetting({select:searchList.level,itemList,reason:searchList.reason})
    const [popUpModify,setPopUpModify] = useRecoilState(modifyAtoms)
    const [process,setProcess] = useState("")
    const setRecoilState = useSetRecoilState(listAtom)
    useEffect(()=>{
        if(popUpModify && process){
         if(process!==itemList){
           setRecoilState(state=>{
             const index = state[itemList].findIndex(item=>item===searchList)
             const del = [...state[itemList]],add=[...state[process]]
             del.splice(index,1)
             add.splice(0,0,popUpModify)
             return {...state,[itemList]:del,[process]:add}
           })
           setMainInfo(state=>{return{...state,itemList:process}})
         }
        }
       },[process])
       
       useEffect(()=>{
       if(popUpModify && searchList.title){
         setRecoilState(state=>{
           const index = state[itemList].findIndex(item=>item===searchList)
           const copy = [...state[itemList]]
           copy.splice(index,1)
           copy.splice(index,0,popUpModify)
           return {...state,[itemList]:copy}
         })
       }
       },[popUpModify])
       

    return(<div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
    className="w-6 lg:w-7 aspect-square mt-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
    <div className="grid grid-cols-3 gap-x-2 md:gap-x-5 mt-3 ml-2">
    {Object.keys(popUpValue).map(item=>{return(
        <select key={item} onChange={e=>{
          if(item==="progress") {setProcess(e.target.value)}
          else if(item==="level"){ setPopUpModify((state:any)=>{return{...state,level:e.target.value}})}
          else {setPopUpModify((state:any)=>{return{...state,reason:e.target.value}})}}}
         className="outline-none text-blue-500 text-vxs sm:text-xs shadow-md border-2 border-blue-500 rounded-lg md:px-2 md:py-1">
        {popUpValue[item].map(index=><option key={index} className="text-center font-bold">{index}</option>)}
        </select>
      )})}
    </div>
    </div>)
}
export default Setting