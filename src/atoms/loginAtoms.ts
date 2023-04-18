import { atom } from "recoil"
import { v1 } from "uuid"

export const loginAtom = atom({
    key:`user_login_status${v1()}`,
    default:{login:true}
}) 