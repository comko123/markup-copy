import { Draggable } from "@hello-pangea/dnd"
import { memo } from "react"

const DragList = ({item,index}:dragListProps) => {
  console.log({index})

return(<Draggable draggableId={item.title} index={index}>
{(provied)=><div ref={provied.innerRef} {...provied.dragHandleProps} {...provied.draggableProps}
className="border-2 border-blue-500 my-2 p-2 rounded-md bg-white"> 
 <div className="ml-2 w-52 overflow-hidden text-ellipsis whitespace-nowrap mb-1">{item.title}</div>
 <div className=" text-[0.1em] flex font-semibold">
   <div className="my-1 lg:m-1 bg-blue-500 text-white p-[0.2rem] rounded-lg">{item.category}</div>
   <div className="m-1 lg:m-2">{item.date}</div>
   <div className={`my-1 lg:m-1 ${item.level==="High"?
   "bg-red-500":item.level==="Low"?
   "bg-yellow-400":"bg-green-500"} flex items-center p-1 text-white rounded-md`}>{item.level}</div>
    </div></div>}
</Draggable>)
    
}
export default memo(DragList)