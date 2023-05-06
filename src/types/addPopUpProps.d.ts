import { Dispatch, SetStateAction } from "react"

interface popupProps{
    setState : Dispatch<SetStateAction<boolean>>,
    refrence:Record<keyof toDoState,string>
}
interface popupState {
    mainCtg:string,
    subCtg:string,
    titState:boolean
}