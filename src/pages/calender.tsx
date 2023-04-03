import LayOut from "@/components/LayOut"
import {  useEffect, useState } from "react"
import { DragDropContext, Droppable, DropResult} from "@hello-pangea/dnd"
import DragList from "@/components/DragList"
import { useRecoilState } from "recoil"
import { listAtom } from "@/atoms/listAtoms"
import { onDragEnd } from "@/utils/onDragEnd"

const Calender = () => {
  const [enabled, setEnabled] = useState(false)
  const  [state,setState] = useRecoilState(listAtom)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)}
  }, [])

return(<>{enabled?
  <LayOut login>
    <main className="mx-16 lg:mx-28 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">
    <section className="flex" id="button_part">
       <div className="border-2 p-1 px-4 rounded-lg shadow-md border-gray-300 mx-1">2022.12.19~2022.12.25</div>
         <select name ="week" className="border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
           <option value="1week">1week</option>
           <option value="2week">2week</option>
           <option value="3week">3week</option>
           <option value="4week">4week</option>
         </select>
         <select name ="category" className="rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none">
           <option value="c">카테고리</option>
         </select>
       </section>

        <section id="select date parts" className="border-2 w-full border-amber-700 p-2 rounded-lg mt-4 text-center shadow-lg">
            2022.12.18 ~ 2022.12.24
        </section>

        <section className="flex mt-2 lg:mt-5 flex-col md:flex-row md:[&>*:nth-child(even)]:mx-5" id="list_prat">
         <DragDropContext onDragEnd={
          ({ destination, source })=>onDragEnd({ destination, source } as DropResult ,setState)
          }>         
          {Object.keys(state).map(item=>{return(
<div  key={item}
   className="p-3 shadow-xl border-2 border-gray-300 rounded-lg w-full flex flex-col">
    {/* @ts-ignore */}
<div className="bg-blue-500 text-center py-2 text-white rounded-md">{item} ({state[item].length})</div>
      <Droppable droppableId={item}>
        {(provider)=><div {...provider.droppableProps} ref={provider.innerRef} 
        className="scrollbar-hide my-2 lg:my-0 overflow-auto h-[30vh] md:h-[45vh] max-h-[48vh]">
         {/* @ts-ignore */}
         {state[item].map((item,index)=>{
           return(<DragList item ={item} index={index} key={item.id}/>)})}
           {provider.placeholder}
           </div>
           }
        </Droppable></div>)})}
                </DragDropContext>
       </section>

    </main>
</LayOut>
  :null}</>)
}
export default Calender