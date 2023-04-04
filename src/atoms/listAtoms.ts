import { atom, selectorFamily } from "recoil";
import {v1} from "uuid"
export const listAtom = atom<state>({
    key:`list_state${v1()}`,
    default:{"To Do":[
        {title:"SpringBoot 2강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High",id:v1()},
        {title:"헬스장 가기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium",id:v1()},
        {title:"쓰레기 버리기",category:"Study",date:"2022.12.01~2022.12.31",level:"Low",id:v1()}],
        "In Progress":[
        {title:"React 5강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High",id:v1()},
        {title:"다이어리 쓰기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium",id:v1()}],
        "Done":[{title:"React 5강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High",id:v1()}]}
})

export const popupList = selectorFamily({
    key:`popup_list_state${v1()}`,
    get:(key:{[key:string]:string})=>({get})=>get(listAtom)[key.keyValue].filter(item=>item.title===key.title)
})