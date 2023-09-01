import { useEffect } from "react"

export const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault()
  e.returnValue = ""
  // chrome에서는 설정이 필요해서 넣은 코드
}
export const useNotReload = () => {
  const warring = window.addEventListener("beforeunload", preventClose)
  useEffect(() => {
    void (() => warring)()
    return () => warring
  }, [warring])
}
