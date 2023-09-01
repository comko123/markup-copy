import { atom } from "recoil"
import { v1 } from "uuid"

export const followerAtoms = atom({
  key: v1(),
  default: true
})
