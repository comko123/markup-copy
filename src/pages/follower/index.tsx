import { loginAtom } from "@/atoms/loginAtoms"
import Follower from "@/components/Follower"
import LayOut from "@/components/LayOut"
import { useLoginCheck } from "@/hooks/useLoginCheck"
import { NextPage } from "next"
import { useState } from "react"
import { useRecoilValue } from "recoil"

const Profil: NextPage = () => {
  const [state, setState] = useState({
    profilState: true,
    follower: true,
    request: false
  })
  const { login } = useRecoilValue(loginAtom)
  useLoginCheck(login)
  return (<LayOut login={login}>
    <main className="flex flex-col lg:flex-row mx-6 md:mx-10 my-10">
      <nav className="border-b-2 lg:border-r-2 lg:border-b-transparent border-gray-300 w-full lg:w-[32%] h-max lg:pr-5">
        <div className={`bg-gray-100 pt-7 lg:pt-0 w-full lg:w-[95%] ${state.profilState ? "h-52 lg:h-80 " : "pt-10 h-60 lg:h-[25rem]"} flex justify-center lg:flex-col rounded-xl px-2 relative shadow-xl`}>
          <div className="h-[35%] mt-4 lg:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="w-28 aspect-square bg-white rounded-full mx-auto p-1">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 aspect-square bg-white relative left-[5.5em] lg:left-[60%] -top-[2rem] rounded-full border-2 border-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6 bg-white relative left-[0.1rem] lg:left-[30%] -top-[3.48rem] rounded-full border-2 border-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
          </div>

          <div className={`flex flex-col ${state.profilState ? null : "-mt-6 lg:-ml-7 xl:ml-0"}`}>
            {state.profilState ?
              <div className="flex mt-3 font-semibold ml-8 text-sm max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                  stroke="currentColor" className="w-5 aspect-square mt-[0.2rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">Lee Jinlee</span>
              </div>
              : <input defaultValue="Lee Jinlee"
                className="ml-3 mt-3 w-52 xl:w-56  rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none " />}

            {state.profilState ?
              <div className="flex mt-3 font-semibold ml-8 text-sm max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                  stroke="currentColor" className="w-5 aspect-square mt-[0.2rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">Hi, i&apos;m Devops engineer</div>
              </div> : <input defaultValue="Hi, i'm Devops engineer"
                className="ml-3 mt-3 w-52 xl:w-56  rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none " />}

            {state.profilState ?
              <div className="flex mt-3 font-semibold ml-8 text-md max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={3} stroke="currentColor" className="w-5 aspect-square mt-[0.2rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">Hanshin Univ</span>
              </div> : <input defaultValue="Hanshin Univ"
                className="ml-3 mt-3 w-52 xl:w-56  rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none " />}

            {state.profilState ?
              <div className="flex mt-3 font-semibold ml-8 text-sm max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={3} stroke="currentColor" className="w-5 aspect-square mt-[0.2rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <span className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">leejinlee.kr@gmail.com</span>
              </div> : <input defaultValue="leejinlee.kr@gmail.com"
                className="ml-3 mt-3 w-52 xl:w-56  rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none " />}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => setState(state => { return { ...state, profilState: !state.profilState } })}
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className={`w-6 h-6 bg-white border-2 border-black rounded-full absolute ${state.profilState ? "bottom-2" : "bottom-3"} right-5 cursor-pointer`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>
        </div>

        <div className="font-bold text-center w-full  my-7">
          <button className="shadow-lg border-2 border-blue-500 text-blue-500 p-2 rounded-xl hover:bg-blue-500 hover:text-white">회원 탈퇴</button></div>
      </nav>

      <aside className=" pt-3 w-full">
        <div className="flex font-bold justify-between px-8 w-full text-lg lg:ml-9 border-b-2 border-gray-300 pb-3">
          <div className={`mx-auto ${state.follower ? "ring-4 ring-blue-500 ring-offset-3" : null} text-lg p-2 rounded-lg`}
            onClick={() => setState(state => { return { ...state, follower: true, request: false } })}
          >Follower</div>
          <div className={`mx-auto p-2 rounded-lg relative ${state.request ? "ring-4 ring-blue-500 ring-offset-3" : null} text-lg`}
            onClick={() => setState(state => { return { ...state, follower: false, request: true } })}
          >Request
          </div>
        </div>
        <form onSubmit={e => e.preventDefault()} className="relative">
          <input type="text" className="w-full lg:w-[90%] shadow-lg p-2 font-bold bg-gray-100 mt-5 lg:ml-9 rounded-lg outline-none" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
            stroke="currentColor" className="w-6 h-6 absolute top-6 right-[3%] lg:right-[8%] mt-1">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </form>

        {
          state.follower ?
            <div className="mt-5 [&>*:nth-child(even)]:my-5">
              {Array(5).fill({avatar: "", name: "follower",
                timeLine: "Hi, i'm Devops engineer follower.", follow: false}).map(
                  (item, index) => {return (<Follower {...item} key={index}/>)})}
            </div>
            :
            <div className="mt-5 [&>*:nth-child(even)]:my-5">
              {Array(3).fill({
                avatar: "", name: "request",
                timeLine: "Hi, i'm Devops engineer request.", follow: true
              }).map((item, index) => {
                return (<Follower {...item} key={index}/>)
              })}
            </div>


        }
      </aside>
    </main>
  </LayOut>)
}
export default Profil