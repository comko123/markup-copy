import { useEffect, useState } from "react"
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"
import DragList from "@/components/DragList"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { listAtom } from "@/atoms/listAtoms"
import { onDragEnd } from "@/utils/onDragEnd"
import { AnimatePresence } from "framer-motion"
import { loginAtom } from "@/atoms/loginAtoms"
import { useLoginCheck } from "@/hooks/useLoginCheck"
import { mainInfoAtoms } from "@/atoms/modifyAtoms"
import Listpopup from "@/components/Listpopup/Main"
import Layout from "@/components/Layout/Page/Main"

const Calender = () => {
  const [enabled, setEnabled] = useState(false)
  const [puState, setPuState] = useState(false)
  const [state, setState] = useRecoilState(listAtom)
  const setCalenderInfo = useSetRecoilState(mainInfoAtoms)
  const { login } = useRecoilValue(loginAtom)
  useLoginCheck(login)
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  return (
    <>
      {enabled ? (
        <Layout login={login}>
          <main className="mx-8 md:mx-16 lg:mx-24 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">
            <section className="flex -ml-1 md:ml-0" id="button_part">
              <div className="border-2 p-1 px-4 rounded-lg shadow-md border-gray-300 mx-1">
                2022.12.19~2022.12.25
              </div>
              <select
                name="week"
                className="border-2 bg-white rounded-lg shadow-md  border-gray-300 p-1 px-2 mx-1 outline-none"
              >
                <option value="1week">1week</option>
                <option value="2week">2week</option>
                <option value="3week">3week</option>
                <option value="4week">4week</option>
              </select>
              <select
                name="category"
                className="rounded-lg bg-white border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none"
              >
                <option value="c">카테고리</option>
              </select>
            </section>

            <section
              id="select date parts"
              className="border-2 w-full border-amber-700 p-2 rounded-lg mt-4 text-center shadow-lg"
            >
              2022.12.18 ~ 2022.12.24
            </section>

            <AnimatePresence>
              {puState ? <Listpopup setPuState={setPuState} /> : null}
            </AnimatePresence>

            <section
              className="flex mt-2 xl:mt-5 flex-col w-full xl:flex-row xl:[&>*:nth-child(even)]:mx-5 xl:[&>*:nth-child(even)]:my-0 [&>*:nth-child(even)]:my-5"
              id="list_prat"
            >
              <DragDropContext
                onDragEnd={({ destination, source }) =>
                  onDragEnd({ destination, source } as DropResult, setState)
                }
              >
                {Object.keys(state).map(itemList => {
                  return (
                    <div
                      key={itemList}
                      className="p-3 shadow-xl border-2 border-gray-300 rounded-lg w-full flex flex-col"
                    >
                      <div className="bg-blue-500 text-center py-2 text-white rounded-md">
                        {itemList} ({state[itemList].length})
                      </div>
                      <Droppable droppableId={itemList}>
                        {provider => (
                          <div
                            {...provider.droppableProps}
                            ref={provider.innerRef}
                            className="scrollbar-hide my-2 lg:my-0 overflow-auto h-[30vh] md:h-[45vh] max-h-[48vh]"
                          >
                            {state[itemList].map((item, index) => {
                              return <DragList item={item} index={index} key={item.id} />
                            })}
                            {provider.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <div
                        className="bg-blue-500 cursor-pointer h-8 flex justify-center items-center w-full rounded-lg text-yellow-50 hover:opacity-80"
                        onClick={() => {
                          setPuState(state => !state)
                          setCalenderInfo(() => {
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
              </DragDropContext>
            </section>
          </main>
        </Layout>
      ) : null}
    </>
  )
}
export default Calender
