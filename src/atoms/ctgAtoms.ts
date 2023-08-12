import { atom, selector } from "recoil"
import { v1 } from "uuid"

export const ctgAtom = atom<{ [key: string]: string[] }>({
  key: `ctg_values${v1()}`,
  default: {
    공부: ["학교", "스터디", "인강", "영어", "기타"],
    운동: ["헬스", "체육관", "학원", "기타"],
    일상: ["산책", "육아", "가사", "기타"],
    취미: ["게임", "여행", "쇼핑", "영화", "기타"],
    약속: ["식사", "게임", "카페", "산책", "기타"]
  }
})

export const chartAtom = atom<{ [key: string]: { [key: string]: string }[] }>({
  key: `chart_values${v1()}`,
  default: {
    산책: [
      {
        title: "산책 8시",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "산책 강아지",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      },
      {
        title: "가족 산책",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "오전 산책",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      }
    ],
    쇼핑: [
      {
        title: "백화점 쇼핑",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      },
      {
        title: "신발 쇼핑",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "온라인 쇼핑",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      },
      {
        title: "가구 쇼핑",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      }
    ],
    독서: [
      {
        title: "3권 반납",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "독후감 작성",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      },
      {
        title: "도서관 가기",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      },
      {
        title: "만화방 가기",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      }
    ],
    기타: [
      {
        title: "게임",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      },
      {
        title: "pc방",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "운동",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      },
      {
        title: "시험 공부",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "Done",
        id: v1()
      },
      {
        title: "공부",
        level: "Low",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      },
      {
        title: "저녁약속",
        level: "Medium",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      },
      {
        title: "카페",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "To Do",
        id: v1()
      },
      {
        title: "핼스",
        level: "High",
        date: "2022.10.01~2022.10.01",
        progress: "In Progress",
        id: v1()
      }
    ]
  }
})
