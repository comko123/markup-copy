import { listAtom } from "@/atoms/listAtoms"
import { mainInfoAtoms } from "@/atoms/modifyAtoms"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
const Listpopup = dynamic(() => import("@/components/Listpopup/Main"))
const KanbanBoard = () => {
  const dialog = useRecoilValue(listAtom)
  const [puState, setPuState] = useState(false)
  const setMainInfo = useSetRecoilState(mainInfoAtoms)
  return (
    <>
      <AnimatePresence>{puState ? <Listpopup setPuState={setPuState} /> : null}</AnimatePresence>

      <section
        className="flex mt-2 xl:mt-5 flex-col w-full xl:flex-row xl:[&>*:nth-child(even)]:mx-5 xl:[&>*:nth-child(even)]:my-0 [&>*:nth-child(even)]:my-5"
        id="list_prat"
      >
        {Object.keys(dialog).map(itemList => {
          return (
            <div
              key={itemList}
              className=" p-3 shadow-xl border-2 border-gray-300 rounded-lg w-full flex flex-col"
            >
              <div className="bg-blue-500 text-center py-2 text-white rounded-md">
                {itemList} ({dialog[itemList].length})
              </div>
              <div className="scrollbar-hide my-2 lg:my-0 overflow-auto h-[30vh] md:h-[45vh] max-h-[48vh]">
                {dialog[itemList].map(item => {
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 0.9, transition: { duration: 0.25, type: "keyframes" } }}
                      className="border-2 border-blue-500 my-2 p-2 rounded-md cursor-pointer bg-white"
                      onClick={() => {
                        setPuState(state => !state)
                        setMainInfo(() => {
                          return { itemList, title: item.title }
                        })
                      }}
                    >
                      <div className="ml-2 w-52 overflow-hidden text-ellipsis whitespace-nowrap mb-1">
                        {item.title}
                      </div>
                      <div className="text-xs lg:text-vxs 2xl:text-[0.1em] flex w-full [&>*]:w-max">
                        <div className="my-1 lg:m-1 bg-blue-500 text-white p-[0.2rem] rounded-lg ">
                          {item.category.main}
                        </div>
                        <div className="m-1 lg:m-2 flex items-center">{item.date}</div>
                        <div
                          className={`my-1 lg:m-1 ${
                            item.level === "High"
                              ? "bg-red-500"
                              : item.level === "Low"
                              ? "bg-yellow-400"
                              : "bg-green-500"
                          } flex items-center p-1 text-white rounded-md`}
                        >
                          {item.level}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <div
                className="bg-blue-500 cursor-pointer h-8 flex justify-center items-center w-full rounded-lg text-yellow-50 hover:opacity-80"
                onClick={() => {
                  setPuState(state => !state)
                  setMainInfo(() => {
                    return { itemList, title: "" }
                  })
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
export default KanbanBoard
