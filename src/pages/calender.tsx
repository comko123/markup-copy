import LayOut from "@/components/LayOut"
import { useEffect, useState } from "react"
import { DragDropContext, Droppable, DropResult} from "@hello-pangea/dnd"
import DragList from "@/components/DragList"
type  state = {[key:string]:{[key:string]:string}[]} 
const Calender = () => {

  const [enabled, setEnabled] = useState(false)
  const  [state,setState] = useState<state>({"To Do":[
    {title:"SpringBoot 2강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"},
    {title:"헬스장 가기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium"},
    {title:"쓰레기 버리기",category:"Study",date:"2022.12.01~2022.12.31",level:"Low"}],
    "In Progress":[
    {title:"React 6강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"},
    {title:"다이어리 쓰기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium"}],
    "Done":[{title:"React 5강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"}]})
const onDragEnd = ({ destination, source }: DropResult) => {
  if (!destination) return;
  if(destination.droppableId === source.droppableId){
    setState(state=>{
      const copy = [...state[source.droppableId]]
      const copyState = copy[source.index]
      copy.splice(source.index, 1)
      copy.splice(destination?.index, 0, copyState)
      return {...state as state,[source.droppableId]:copy}
    })
  }
  if (destination.droppableId !== source.droppableId) {
          setState((allBoards) => {
            const sourceBoard = [...allBoards[source.droppableId]]
            const destinationBoard = [...allBoards[destination.droppableId]]
            const copyState = sourceBoard[source.index]
            sourceBoard.splice(source.index, 1);
            destinationBoard.splice(destination?.index, 0, copyState);
            return {...allBoards as state,[source.droppableId]: sourceBoard,
              [destination.droppableId]: destinationBoard}
          })
        }
  }

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
         <DragDropContext onDragEnd={onDragEnd}>         
          {Object.keys(state).map((item,index)=>{return(
<div  key={index}
   className="p-3 shadow-xl border-2 border-gray-300 rounded-lg w-full flex flex-col">
    {/* @ts-ignore */}
<div className="bg-blue-500 text-center py-2 text-white rounded-md">{item} ({state[item].length})</div>
      <Droppable droppableId={item}>
        {(provider)=><div {...provider.droppableProps} ref={provider.innerRef} 
        className="scrollbar-hide my-2 lg:my-0 overflow-auto h-[30vh] md:h-[45vh] max-h-[48vh]">
         {/* @ts-ignore */}
         {state[item].map((item,index)=>{
           return(<DragList item ={item} index={index} key={Math.random()*100/Math.random()}/>)})}
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