import { Dispatch, SetStateAction } from "react"

interface popupProps{
    setState : Dispatch<SetStateAction<boolean>>,
    keyValue:string,
    title:string
}