import { profilButtonProps } from "@/types/profilButtonProps"
import {memo} from "react"
const ProfilButton = (props:profilButtonProps) => {
    return(<div className={`mx-auto  ${props.state[props.click] ? "ring-4 ring-blue-500 ring-offset-3" : null} text-lg p-2 rounded-lg`}
    onClick={() => props.setState(state => { return { ...state, [props.expert]: false, [props.click]: true } })}
  >{props.click}
  </div>)
}
export default memo(ProfilButton)