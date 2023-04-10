import { Dispatch, SetStateAction } from "react"

interface popupProps{
    setState : Dispatch<SetStateAction<boolean>>,
    refrence:toDoState
}
interface popupState {
    mainCtg:string,
    subCtg:string,
    titState:boolean
}