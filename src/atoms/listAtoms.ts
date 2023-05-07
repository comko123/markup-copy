import { atom, selectorFamily } from "recoil"
import { v1 } from "uuid"
export const listAtom = atom<state>({
    key: `list_state${v1()}`,
    default: {
        "To Do": [
            { title: "SpringBoot 2강 듣기", category: { main: "공부", sub: "인강" }, date: "2022.12.01~2022.12.31", level: "High", cycle:"반복",range:"Public",reason:"게으름",id: v1() },
            { title: "헬스장 가기", category: { main: "운동", sub: "핼스" }, date: "2022.12.01~2022.12.31", level: "Medium",cycle:"반복 안함",range:"Private",reason:"우선순위 변화", id: v1() },
            { title: "쓰레기 버리기", category: { main: "일상", sub: "가사" }, date: "2022.12.01~2022.12.31", level: "Low",cycle:"반복",range:"Public",reason:"기타", id: v1() }],
        "In Progress": [
            { title: "React 5강 듣기", category: { main: "공부", sub: "인강" }, date: "2022.12.01~2022.12.31", level: "High",cycle:"반복 안함",range:"Private",reason:"우선순위 변화", id: v1() },
            { title: "다이어리 쓰기", category: { main: "일상", sub: "기타" }, date: "2022.12.01~2022.12.31", level: "Medium",cycle:"반복",range:"Public",reason:"기타", id: v1() }],
        "Done": [{ title: "React 5강 듣기", category: { main: "공부", sub: "인강" }, date: "2022.12.01~2022.12.31", level: "High",cycle:"반복 안함",range:"Public",reason:"특별한 일정", id: v1() }]
    }
})
export const popupList = selectorFamily({
    key: `popup_list_state${v1()}`,
    get: (key: { [key: string]: string}) => ({ get }) => {
        const getDate = new Date()
        const defaultDate = `${getDate.getFullYear()}.${getDate.getMonth() + 1}.${getDate.getDate()}`
        if (!key.title || !key.itemList) return {
            category: { main: '', sub: '' }, id: `${v1()}`,
            date: `${defaultDate}~${defaultDate}`, level: "", title: ""
        }
        else {
            const [data] = get(listAtom)[key.itemList].filter(item => item.title === key.title)
            return data
        }
    }
})
export type odd = ReturnType<typeof popupList>