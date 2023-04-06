import { atom } from "recoil";
import { v1 } from "uuid";

export const ctgAtom = atom<{[key:string]:string[]}>({
    key:`ctg_values${v1()}`,
    default:{공부:["학교","스터디","인강","영어","기타"],
    운동:["헬스","체육관","유산소","근력","기타"],
    일상:["산책","공부","육아","가사","기타"],
    취미:["게임","여행","쇼핑","영화","기타"],
    약속:["식사","게임","카페","산책","기타"]}
})