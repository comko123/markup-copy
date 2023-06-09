import { ctgAtom } from "@/atoms/ctgAtoms"
import { modifyAtoms } from "@/atoms/modifyAtoms"
import { memo, useState } from "react"
import { useRecoilValue } from "recoil"
const Category = () => {
    const ctgList = useRecoilValue(ctgAtom)
    const defaultCtg = useRecoilValue(modifyAtoms)
    const [popupCtgState,setPopupCtgState] = useState<Record<string,string>>(
        {mainCtg:defaultCtg.category.main,
         subCtg:defaultCtg.category.sub})
    return(<>
    <div className="flex">
<div className="flex flex-col w-full">
  <div className="flex empty:h-14 justify-center items-center">
  {Object.keys(ctgList).map(mainC=><input type="button" key={mainC} onClick={()=>setPopupCtgState(state=>{
      if(state.mainCtg!==mainC){return {...state,mainCtg:mainC,subCtg:""}}else {return {...state,mainCtg:""}}})} 
    className={`text-white ${popupCtgState.mainCtg === mainC?"bg-blue-500":"bg-blue-300"} 
    shadow-md text-vxs sm:text-xs hover:ring hover:ring-blue-500 hover:ring-offset-4 
    cursor-pointer w-[20%] border-2 border-blue-500 py-1 md:p-2 rounded-xl m-2`} value={mainC}/>)}
  </div>

  <div className="flex empty:h-14 justify-center items-center">
  {ctgList[popupCtgState.mainCtg]?.map(subC=><input type="button" key={subC} onClick={()=>setPopupCtgState(state=>{
      if(state.subCtg!==subC){return {...state,subCtg:subC}}else {return {...state,subCtg:""}}})} 
    className={`text-white ${popupCtgState.subCtg === subC?"bg-blue-500":"bg-blue-300"} 
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
    </>)
}
export default memo(Category)