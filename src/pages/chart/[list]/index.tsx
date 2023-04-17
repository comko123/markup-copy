import { loginAtom } from "@/atoms/loginAtoms"
import LayOut from "@/components/LayOut"
import { useRecoilValue } from "recoil"
import { motion } from "framer-motion"
import { chartAtom } from "@/atoms/ctgAtoms"

const ChartList = () => {
    const {login} =  useRecoilValue(loginAtom)
    const value = useRecoilValue(chartAtom)

return<LayOut login={login}>
        <main className="mx-16 lg:mx-28 mt-8 mb-20 lg:my-8 text-xs lg:text-xs font-bold grid grid-cols-1">
        <section className="flex mb-2 md:mb-0" id="button_part">
        <select name ="week" className="[&>*]:font-bold border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
           <option value="1week">2023</option>
           <option value="2week">2022</option>
           <option value="3week">2021</option>
           <option value="4week">2020</option>
         </select>

         <select name ="week" className="border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(item=><option value="1week" key={item+""} className="font-bold">{item}</option>)}
            </select>

         <select name ="category" className="[&>*]:font-bold rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none">
           <option value="c" >all</option>
           <option value="c" >main</option>
           <option value="c" >sub</option>
         </select>

         
         <select name ="category" className="[&>*]:font-bold rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none">
           <option value="c">총횟수순</option>
           <option value="c">오름차순</option>
           <option value="c">내림차순</option>
         </select>

       </section>

        <section className="mt-7 shadow-lg">
            <div className="bg-indigo-300 p-1 text-sm rounded-t-lg h-8 pl-6">list</div>
            <div className="w-full flex justify-between rounded-b-lg p-1 bg-indigo-100 h-8 px-6">
            <div>category</div>
            <div className="flex justify-evenly w-[60%] md:w-[40%]">
                <span>총횟수</span>
                <span>성공률</span>
                <span>실패률</span>
            </div>
            </div>
        </section>

        <section>

        {Object.keys(value).map(item => {return(
          <motion.details key={item} initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:0.5}}
       className="bg-blue-100 w-full my-6 py-3 px-5 open:bg-red-100 outline-none rounded-xl shadow-lg ease-in-out">
            <summary className="p-3 flex justify-between outline-none">
          <div>{item}</div>
          <div className="flex justify-evenly w-[60%] md:w-[40%]">
            <span>30회</span>
            <span>30회</span>
            <span>30회</span>
          </div>
              </summary>
              <div 
              className="grid grid-cols-4 bg-red-300 [&>*]:py-3 [&>*]:text-center rounded-t-lg [&>*]:text-vxs [&>*]:md:text-xs">
                <div>content</div>
                <div>level</div>
                <div>date</div>
                <div>progress</div>
              </div>
             <div className="-mt-[0.1rem]">
             {value[item].map(content=>{return(
            <div key={content.id} className="[&>*:nth-child(odd)]:overflow-hidden [&>*:nth-child(odd)]:text-ellipsis [&>*:nth-child(odd)]:whitespace-nowrap -mt-[0.05rem] grid grid-cols-4 [&>*]:px-1 [&>*]:bg-white [&>*]:text-center [&>*]:py-2 [&>*]:text-vxs [&>*]:md:text-xs">
              <div>{content.title}</div>
              <div><span className={`${content.level==="High"?"bg-red-500":content.level==="Low"?"bg-yellow-400":"bg-green-500"} text-white p-1 rounded-lg`}>{content.level}</span></div>
              <div>{content.date}</div>
              <div>{content.progress}</div>
            </div>
           )})}</div>
        </motion.details>

        )})}  

        </section>

        </main>
        
    </LayOut>
}
export default ChartList