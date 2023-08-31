import { loginAtom } from "@/atoms/loginAtoms"
import Follower from "@/components/Follower"
import UserParts from "@/components/Follower/Userparts"
import Layout from "@/components/Layout/Page/Main"
import Button from "@/components/Profil/Button"
import { useLoginCheck } from "@/hooks/useLoginCheck"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { useId, useState } from "react"
import { useRecoilValue } from "recoil"

const Profil: NextPage = () => {
  const [state, setState] = useState({
    Follower: true,
    Request: false
  })
  const { login } = useRecoilValue(loginAtom)
  const id = useId()
  useLoginCheck(login)
  // 반응형 및 레이아웃 수정 필요
  // 프로필 수정상태일 때만 새로고침 문구 보여주기 구현
  // 팝업 해결하기
  return (
    <Layout login={login}>
      <main className="grid grid-cols-1 lg:grid-cols-remix mx-6 md:mx-10 my-10 w-[95%] h-max">
        <UserParts />

        <aside className=" pt-3 w-full h-max">
          <div className="flex font-bold justify-between px-8 text-lg lg:ml-9 border-b-2 border-gray-300 pb-3 w-[94%]">
            {[
              { click: "Follower", expert: "Request", state, setState },
              { click: "Request", expert: "Follower", state, setState }
            ].map(item => {
              return <Button key={item.click} {...item} />
            })}
          </div>
          <form onSubmit={e => e.preventDefault()} className="relative">
            <input
              type="text"
              className="w-full lg:w-[94%] shadow-lg p-2 relative font-bold bg-gray-100 mt-5 lg:ml-9 rounded-lg outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 absolute top-6 right-[3%] lg:right-[8%] mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </form>
          <AnimatePresence>
            {state.Follower ? (
              <motion.div layoutId={id} className="mt-5 [&>*:nth-child(even)]:my-5">
                {Array(5)
                  .fill({
                    avatar: "",
                    name: "follower",
                    timeLine: "Hi, i'm Devops engineer follower.",
                    follow: false
                  })
                  .map((item, index) => {
                    return <Follower {...item} key={index} />
                  })}
              </motion.div>
            ) : (
              <motion.div layoutId={id} className="mt-5 [&>*:nth-child(even)]:my-5">
                {Array(3)
                  .fill({
                    avatar: "",
                    name: "request",
                    timeLine: "Hi, i'm Devops engineer request.",
                    follow: true
                  })
                  .map((item, index) => {
                    return <Follower {...item} key={index} />
                  })}
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      </main>
    </Layout>
  )
}
export default Profil
