import { loginAtom } from "@/atoms/loginAtoms"
import { useLoginCheck } from "@/hooks/useLoginCheck"
import dynamic from "next/dynamic"
import { useRecoilValue } from "recoil"
import { lineOptions } from "@/graph_options/lineOptions"
import { radialBarOptions } from "@/graph_options/radialBarOptions"
import { donutOptions } from "@/graph_options/donutOptions"
import { barOptions } from "@/graph_options/barOptions"
import { rangeBarOptions } from "@/graph_options/rangeBarOptions"
import { useRouter } from "next/router"
import Layout from "@/components/Layout/Page/Main"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Chart = () => {
  const total = { total_sucess: "90%", total_delay: "10%" }
  const { login } = useRecoilValue(loginAtom)
  const { push } = useRouter()
  useLoginCheck(login)
  return (
    <Layout login={login}>
      <main className="my-10 pt-2">
        <div className="border-2 text-center mx-auto border-amber-900 w-[80%] p-1 rounded-xl font-bold shadow-xl">
          <select className="outline-none bg-white text-sm lg:text-md">
            <option>2023년 10월</option>
            <option>2023년 11월</option>
            <option>2023년 12월</option>
          </select>
        </div>
        <div className="w-[80%] mx-auto border-2 border-gray-400 mt-5 rounded-xl shadow-xl">
          <ApexChart
            type="line"
            height={250}
            series={[
              { name: "월별 실패율", data: [10, 0, 5, 15, 40, 0, 0, 0, 5, 35, 0, 0] },
              { name: "월별 성공률", data: [40, 45, 20, 30, 18, 45, 45, 25, 35, 15, 45, 50] }
            ]}
            options={lineOptions}
          />
        </div>

        <div className="w-[80%] md:pr-7 xl:pr-0 mx-auto border-2 2xl:justify-center justify-between flex flex-col xl:flex-row border-gray-400 mt-5 rounded-xl shadow-xl">
          <div className="pr-6 lg:pr-0 text-xs lg:text-[1em] my-auto">
            <div className="flex justify-between border-b-2 border-gray-300 font-bold ml-6 [&>*]:my-2  [&>*]:w-max [&>*]:text-vsx [&>*]:md:text-sm">
              <div className="ml-2">10월 To Do List 요약</div>
              <div className="-mr-1">전체 성공률</div>
              <div className="mr-3">평균 지연률</div>
            </div>
            {[
              { title: "10월 1주", date: "10.01~10.07", succes: "90%", delay: "10%" },
              { title: "10월 2주", date: "10.08~10.15", succes: "90%", delay: "10%" },
              { title: "10월 3주", date: "10.16~10.22", succes: "90%", delay: "10%" },
              { title: "10월 4주", date: "10.23~10.30", succes: "90%", delay: "10%" }
            ].map(item => {
              return (
                <div key={item.title} className="grid grid-cols-2 font-bold ml-6 pb-2">
                  <div className="w-48 mt-2 mb-1 pl-2">
                    {item.title}({item.date})
                  </div>
                  <div className="flex justify-between mx-5">
                    <div className="w-12 mt-2">{item.succes}</div>
                    <div className="w-12 mt-2">{item.delay}</div>
                  </div>
                </div>
              )
            })}

            <div className="grid grid-cols-2 font-bold ml-6 pt-2 pb-1 lg:py-3 border-t-2 border-gray-300">
              <div className="w-36 lg:w-48 pl-2 text-center">총평균</div>
              <div className="flex justify-between mx-6">
                <div className="-ml-1">{total.total_sucess}</div>
                <div className="pr-5 lg:pr-[0.65rem]">{total.total_delay}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <ApexChart
              type="radialBar"
              height={220}
              series={[100, 80, 90]}
              options={{ labels: ["A", "B", "C"], ...radialBarOptions }}
            />
            <ApexChart
              type="radialBar"
              height={220}
              series={[100, 80, 90]}
              options={{ labels: ["A", "B", "C"], ...radialBarOptions }}
            />
          </div>
        </div>

        <div className="w-[80%] mx-auto border-2 font-bold flex flex-col border-gray-400 mt-5 rounded-xl p-5 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="mx-auto lg:ml-6 text-xs lg:text-lg">
              10월 To Do List 생성한 카테고리 비율
            </div>
            <div className="mt-2 lg:mt-0 mx-auto lg:mx-0">
              <select className="text-xs bg-white lg:text-md border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
                <option value="1week">1week</option>
                <option value="2week">2week</option>
                <option value="3week">3week</option>
                <option value="4week">4week</option>
              </select>
              <select className="text-xs bg-white lg:text-md border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
                <option>오름차순</option>
                <option>내림차순</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2">
              <ApexChart
                type="donut"
                height={230}
                series={[44, 55, 41, 17, 15]}
                options={{ labels: ["일상", "공부", "운동", "업무", "기타"], ...donutOptions }}
              />
              <ApexChart
                type="bar"
                height={200}
                series={[{ name: "A", data: [44, 55, 30, 20, 10] }]}
                options={barOptions}
              />
            </div>
            <button
              className="mb-4 p-2 w-48 mx-auto rounded-lg border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 text-xs lg:text-lg"
              onClick={() => push(`/chart/category`)}
            >
              전체보기
            </button>
          </div>
        </div>

        <div className="w-[80%] p-5 mx-auto border-2 flex flex-col border-gray-400 mt-5 rounded-xl shadow-2xl font-bold">
          <div className="flex flex-col lg:flex-row justify-between font-bold">
            <div className="ml-0 lg:ml-6 text-xs lg:text-lg text-center">
              10월 To Do List 실제 피드백
            </div>
            <div className="mt-3 lg:mt-0 mx-auto lg:mx-0">
              <select className="text-xs bg-white lg:text-md border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
                <option value="1week">1week</option>
                <option value="2week">2week</option>
                <option value="3week">3week</option>
                <option value="4week">4week</option>
              </select>
              <select className="text-xs bg-white lg:text-md border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
                <option>오름차순</option>
                <option>내림차순</option>
              </select>
            </div>
          </div>
          <div className="border-b-2 border-gray-500 flex flex-col">
            <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2">
              <ApexChart
                type="donut"
                height={230}
                series={[44, 55, 41, 17, 15]}
                options={{
                  labels: ["게으름", "일정 타이트", "특별한 일정", "우선순위 변화", "기타"],
                  ...donutOptions
                }}
              />
              <ApexChart
                type="bar"
                height={200}
                series={[{ name: "A", data: [44, 55, 30, 20, 10] }]}
                options={barOptions}
              />
            </div>
            <button
              className="mb-4 p-2 w-48 mx-auto rounded-lg border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 text-xs lg:text-lg"
              onClick={() => push(`/chart/feedback`)}
            >
              전체보기
            </button>
          </div>
          <div className="relative">
            <span className="absolute top-2 left-2 lg:left-6 text-xs lg:text-lg">
              일별 성공율(주간)
            </span>
            <div className="overflow-auto lg:overflow-hidden max-w-full">
              <div className="lg:w-full w-[150vw]">
                <ApexChart
                  type="bar"
                  height={300}
                  series={[
                    { name: "일별 실패율", data: [47, 55, 57, 56, 61, 58, 63] },
                    { name: "월별 성공률", data: [76, 85, 101, 98, 87, 105, 91] }
                  ]}
                  options={rangeBarOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default Chart
