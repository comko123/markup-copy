import { atom } from "recoil"
import { v1 } from "uuid"

export const modifyAtoms = atom<any>({
    key:`modifyAtoms${v1()}`,
    default:null
})

export const mainInfoAtoms = atom<Record<keyof toDoState,string>>({
    key:`mainInfo${v1()}`,
    default:{itemList:"",title:""}
})

export const openPopUpAtoms = atom<boolean>({
    key:`openPopUpAtoms${v1()}`,
    default:false
}) 