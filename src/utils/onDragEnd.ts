import { DropResult } from "@hello-pangea/dnd";

export const onDragEnd = ({ destination, source }: DropResult ,
    setState:(valOrUpdater: state | ((currVal: state) => state)) => void) => {
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
            setState((state) => {
              const sourceBoard = [...state[source.droppableId]]
              const destinationBoard = [...state[destination.droppableId]]
              const copyState = sourceBoard[source.index]
              sourceBoard.splice(source.index, 1);
              destinationBoard.splice(destination?.index, 0, copyState);
              return {...state as state,[source.droppableId]: sourceBoard,
                [destination.droppableId]: destinationBoard}
            })
          }
    }