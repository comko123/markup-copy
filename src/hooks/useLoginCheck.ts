import { useRouter } from "next/router"
import { useEffect } from "react"

export const useLoginCheck = (value:boolean) => {
    const {replace} = useRouter()
    useEffect(()=>{
        if(!value) replace('/')
    },[value])
}
