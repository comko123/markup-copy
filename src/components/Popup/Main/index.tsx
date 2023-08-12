/*eslint-disable*/
import { popupList } from "@/atoms/listAtoms"
import { rangeCycle } from "@/sample_data_case/popUpLog"
import { popUpVariants } from "@/variants/popUpVariants"
import { AnimatePresence, motion } from "framer-motion"
import { useRecoilState, useRecoilValue } from "recoil"
import { mainInfoAtoms, modifyAtoms } from "@/atoms/modifyAtoms"
import { Dispatch, SetStateAction, useEffect, useId, useState } from "react"
import Category from "../Category"
import Setting from "../Setting"
import { useNotReload } from "@/hooks/useNotReload"

const Popup = ({ setPuState }: { setPuState: Dispatch<SetStateAction<boolean>> }) => {
  const { itemList, title } = useRecoilValue(mainInfoAtoms)
  const searchList = useRecoilValue(popupList({ itemList, title }))
  const [popupModify, setPopupModify] = useRecoilState(modifyAtoms)
  const [startDate, fineDate] = searchList.date.split("~")
  const [ctgModify, setCtgModify] = useState(false)
  const ctgId = useId()
  useEffect(() => {
    setPopupModify({ ...searchList })
    return () => {
      setPopupModify(null)
    }
  }, [])

  useNotReload()
  return (
    <motion.div
      variants={popUpVariants}
      initial="start"
      animate="display"
      exit="end"
      className="z-20"
    >
      <motion.div
        onClick={() => setPuState(state => !state)}
        className="bg-gray-900 w-full h-full fixed top-0 left-0 opacity-50 font-bold"
      />
      <motion.div
        exit={{ y: [8, 5, 0, -10, -30], transition: { ease: "linear" } }}
        className=" fixed top-[12%] left-[5%] xl:top-[8%] xl:left-[20%] md:left-[12%] w-[90%] md:w-[78%] xl:w-[60%] h-[75%] xl:h-[85%] bg-white rounded-xl pb-5 overflow-auto scrollbar-hide"
      >
        <header className="bg-gray-300  h-[4em] md:h-[5em] rounded-t-xl flex justify-end px-3 pt-3 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-10 md:h-10 hover:text-red-500"
            onClick={() => setPuState(state => !state)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </header>

        <AnimatePresence>
          {ctgModify ? (
            <motion.main layoutId={ctgId} onClick={() => setCtgModify(state => !state)}>
              <div className="bg-orange-500 my-1 h-12">click</div>
            </motion.main>
          ) : (
            <motion.main layoutId={ctgId} className="mt-5 ml-[7%] 2xl:w-[55vw]">
              <div className="flex flex-col mr-[7%]" onSubmit={e => e.preventDefault()}>
                <div className="border-b-2 border-gray-300 pb-4 mb-2 w-full">
                  <input
                    type="text"
                    defaultValue={searchList.title}
                    className="outline-none rounded-lg bg-slate-200 p-3 w-full shadow-md"
                  />
                </div>

                {popupModify ? <Category setCtgModify={setCtgModify} /> : null}

                <div className="flex mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="ml-2 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-xl text-blue-500 min-w-max">
                    {startDate}
                  </div>
                  <span className="ml-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 md:w-7 aspect-square"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </span>
                  <div className="ml-2 md:ml-5 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-xl text-blue-500 min-w-max">
                    {fineDate}
                  </div>
                </div>

                <div className="flex mt-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>

                  <div className="flex w-full [&>*]:w-[50%] [&>*]:mx-auto [&>*]:ml-2">
                    {Object.keys(
                      rangeCycle({
                        range: searchList.range,
                        cycle: searchList.cycle
                      } satisfies Record<string, string | undefined>)
                    ).map(item => {
                      return (
                        <select
                          key={item}
                          className="outline-none shadow-md text-vxs sm:text-xs text-blue-500 border-2 border-blue-500 rounded-xl px-2 py-1"
                        >
                          {rangeCycle({ range: searchList.range, cycle: searchList.cycle })[
                            item
                          ].map((index: any) => (
                            <option key={index} className="text-center font-bold">
                              {index}
                            </option>
                          ))}
                        </select>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <div className="flex justify-center items-center w-full ml-2 border-2 border-blue-500 shadow-md rounded-xl py-1 text-blue-500 md">
                    함께하는 사람 추가
                  </div>
                </div>

                <div className="mt-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <div className="flex justify-center items-center w-full ml-2 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">
                    위치 추가
                  </div>
                </div>

                <div className="mt-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <div className="flex justify-center items-center ml-2 w-full h-32 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">
                    설명 및 메모 추가
                  </div>
                </div>

                <Setting />

                <div className="border-2 border-blue-500 rounded-lg p-2 text-center text-blue-500 shadow-md mt-3">
                  피드백 추가
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
export default Popup
