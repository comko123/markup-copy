import { DropResult } from "@hello-pangea/dnd"

export const onDragEnd = ({ destination, source }: DropResult ,
    setState:(valOrUpdater: state | ((currVal: state) => state)) => void) => {
    if (!destination) return
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
            setState(state => {
              const originState = [...state[source.droppableId]]
              const movementState = [...state[destination.droppableId]]
              const copyState = originState[source.index]
              originState.splice(source.index, 1);
              movementState.splice(destination?.index, 0, copyState);
              return {...state as state,[source.droppableId]: originState,
                [destination.droppableId]: movementState}
            })
          }
    }