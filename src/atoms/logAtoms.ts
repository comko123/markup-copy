import { atom } from "recoil";
import { v1} from "uuid";

export const logAtom = atom<log[]>({
    key:"log_state",
    default:[{
    title:"Contribution Activity",
    id:v1(),
    contentList:{
        content1:"2022-12-22 : 책읽기",
        content2:"2022-12-22 : 3시 프로젝트 회의",
        content3:"2022-12-22 : 20시 운동가기",
        content4:"2022-12-22 : 22시 아르바이트"}},
      {
    title:"Following",avatar:null,id:v1(),
    content:{
    main:"minseok made 2 in proggress public",
    date:"on Jan 02,2023"
    },
      friendContent:{
        content1:"책읽기",
        content2:"10시 네트워크 수업",
        content3:"15시 아르바이트"}}]
})