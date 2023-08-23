import { loginAtom } from "@/atoms/loginAtoms"
import Follower from "@/components/Follower"
import Layout from "@/components/Layout/Main"
import Button from "@/components/Profil/Button"
import Introduction from "@/components/Profil/Introduction"
import Photo from "@/components/Profil/Photo"
import { useLoginCheck } from "@/hooks/useLoginCheck"
import { userPhoto } from "@/sample_data_case/svgIcons"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { useId, useState } from "react"
import { useRecoilValue } from "recoil"

const Profil: NextPage = () => {
  const [state, setState] = useState({
    Follower: true,
    Request: false
  })
  const [profilState, setProfilState] = useState(true)
  const { login } = useRecoilValue(loginAtom)
  const id = useId()
  useLoginCheck(login)
  return (
    <Layout login={login}>
      <main className="flex flex-col lg:flex-row mx-6 md:mx-10 my-10">
        <nav className="border-b-2 lg:border-r-2 lg:border-b-transparent border-gray-300 w-full lg:w-[32%] h-max lg:pr-5">
          <div
            className={`bg-gray-100 pt-7 lg:pt-0 w-full lg:w-[95%] ${
              profilState ? "h-52 lg:h-80 " : "pt-10 h-60 lg:h-[25rem]"
            } flex justify-center lg:flex-col rounded-xl px-2 relative shadow-xl`}
          >
            <div className="h-[35%] mt-4 lg:mt-0">
              {[
                { img: false, domain: userPhoto.default, position: "w-28 mx-auto p-1" },
                {
                  outside: userPhoto.setting.outside,
                  inside: userPhoto.setting.inside,
                  position:
                    "w-6 relative left-[5.5em] lg:left-[60%] -top-[2rem] border-2 border-black"
                },
                {
                  outside: userPhoto.fire.outside,
                  inside: userPhoto.fire.inside,
                  position:
                    "w-6 relative left-[0.1rem] lg:left-[30%] -top-[3.48rem] border-2 border-black"
                }
              ].map(item => {
                return <Photo key={item.position} {...item} />
              })}
            </div>

            <div className={`flex flex-col ${profilState ? null : "-mt-6 lg:-ml-7 xl:ml-0"}`}>
              {[
                { profilState, icons: "check", text: "Lee Jinlee" },
                { profilState, icons: "check", text: "Hi, i'm Devops engineer" },
                { profilState, icons: "hart", text: "Hanshin Univ" },
                { profilState, icons: "port", text: "leejinlee.kr@gmail.com" }
              ].map(item => {
                return <Introduction key={item.text} {...item} />
              })}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                onClick={() =>
                  setProfilState(state => {
                    return !state
                  })
                }
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 bg-white border-2 border-black rounded-full absolute ${
                  profilState ? "bottom-2" : "bottom-3"
                } right-5 cursor-pointer`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <div className="font-bold text-center w-full  my-7">
            <button className="shadow-lg border-2 border-blue-500 text-blue-500 p-2 rounded-xl hover:bg-blue-500 hover:text-white">
              회원 탈퇴
            </button>
          </div>
        </nav>

        <aside className=" pt-3 w-full">
          <div className="flex font-bold justify-between px-8 w-full text-lg lg:ml-9 border-b-2 border-gray-300 pb-3">
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
              className="w-full lg:w-[90%] shadow-lg p-2 font-bold bg-gray-100 mt-5 lg:ml-9 rounded-lg outline-none"
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
