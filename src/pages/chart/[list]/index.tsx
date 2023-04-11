import { loginAtom } from "@/atoms/loginAtoms"
import LayOut from "@/components/LayOut"
import { useRecoilValue } from "recoil"

const ChartList = () => {
    const {login} =  useRecoilValue(loginAtom)
    return<LayOut login={login}>123</LayOut>
}
export default ChartList