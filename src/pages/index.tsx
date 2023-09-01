import dynamic from "next/dynamic"
import { NextPage } from "next"
import { useRecoilState, useRecoilValue } from "recoil"
import { logAtom } from "@/atoms/logAtoms"
import { heatmapData } from "@/sample_data_case/heatmapSample"
import { logSample } from "@/sample_data_case/logSample"
import { loginAtom } from "@/atoms/loginAtoms"
import { heatmapOption } from "@/graph_options/heatmapOptions"
import UnLoginMain from "@/components/UnLoginMain"
import Layout from "@/components/Layout/Page/Main"
import KanbanBoard from "@/components/Board/Nomal/index"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Home: NextPage = () => {
  const { login } = useRecoilValue(loginAtom)
  const [state, setState] = useRecoilState(logAtom)
  return (
    <Layout login={login}>
      {login ? (
        <main className="mx-8 md:mx-16 lg:mx-24 mt-8 mb-20 lg:my-8 text-xs lg:text-xs font-bold grid grid-cols-1">
          <section className="flex mb-2 md:mb-0 -ml-1 md:ml-0" id="button_part">
            <div className="border-2 p-1 px-4 rounded-lg shadow-md border-gray-300 mr-1">
              2022.12.19~2022.12.25
            </div>
            <select
              name="week"
              className="[&>*]:font-bold border-2 rounded-lg shadow-md bg-white border-gray-300 p-1 px-2 mx-1 outline-none"
            >
              <option value="1week">1week</option>
              <option value="2week">2week</option>
              <option value="3week">3week</option>
              <option value="4week">4week</option>
            </select>
            <select
              name="category"
              className="rounded-lg border-gray-300 bg-white shadow-md p-1 px-2 mx-1 border-2 outline-none"
            >
              <option value="c" className="font-bold">
                카테고리
              </option>
            </select>
          </section>

          <KanbanBoard />

          <section
            className="border-2 border-gray-300 my-5 rounded-lg shadow-xl w-full"
            id="graph_part"
          >
            <div className="mx-8 border-b-2 py-3 flex flex-col  md:flex-row justify-between">
              <div className="text-md lg:text-lg flex items-center mx-auto md:mx-0">
                480 done in the year
              </div>
              <div className="flex mx-auto md:mx-0 mt-2 md:mt-0">
                <select className="rounded-lg border-gray-300 bg-white shadow-md p-1 px-2 mx-1 border-2 lg:text-md outline-none">
                  <option>노휘래</option>
                  <option>이진이</option>
                  <option>최충실</option>
                  <option>김민석</option>
                </select>
                <select
                  name="category"
                  className="rounded-lg border-gray-300 bg-white shadow-md p-1 overflow-hidden px-2 mx-1 border-2 lg:text-md outline-none"
                >
                  <option value="c">카테고리</option>
                </select>
              </div>
            </div>
            <div className="overflow-auto max-w-full">
              <div className="lg:w-full w-[150vw]">
                <ApexChart
                  type="heatmap"
                  height={150}
                  series={heatmapData}
                  options={heatmapOption}
                />
              </div>
            </div>
          </section>
          <section id="log and button" className="flex flex-col">
            {state.map(item => {
              return (
                <div
                  key={item.id}
                  className=" w-full border-2 border-gray-300 rounded-lg shadow-xl my-3 p-4"
                >
                  <div className="text-lg mb-2">{item.title}</div>
                  {item?.contentList ? (
                    <div className="border-l-2 border-gray-300 pl-2">
                      {Object.keys(item.contentList).map(cl => {
                        return (
                          <div key={cl} className="my-1">
                            {item.contentList && item.contentList[cl]}
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                  {item?.content ? (
                    <div className="flex">
                      {item.avatar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      <div className="mx-5 ml-2 w-full ">
                        <div className="ml-3">{item.content.main}</div>
                        <div className="text-gray-400 ml-3">{item.content.date}</div>
                        <div className="border-2 border-gray-300 rounded-lg p-1 mt-3 ml-4 w-full">
                          {Object.keys(item.friendContent as dragListProps["item"]["category"]).map(
                            fcl => {
                              return (
                                <div key={fcl} className="my-2">
                                  {item.friendContent && item.friendContent[fcl]}
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
            <button
              className="bg-blue-500 rounded-lg p-1 mt-2 text-white hover:bg-blue-400 text-lg"
              onClick={() => {
                setState(state => [...state, ...logSample])
              }}
            >
              more &#8744;
            </button>
          </section>
        </main>
      ) : (
        <UnLoginMain />
      )}
    </Layout>
  )
}
export default Home
