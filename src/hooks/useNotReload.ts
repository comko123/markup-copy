import { useEffect } from "react"

export const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault()
  e.returnValue = ""
  // chrome에서는 설정이 필요해서 넣은 코드
}
export const useNotReload = () => {
  useEffect(() => {
    void (() => window.addEventListener("beforeunload", preventClose))()
    return () => window.addEventListener("beforeunload", preventClose)
  }, [])
}
