import LayOut from "@/components/LayOut"
import dynamic from "next/dynamic"
import { useState } from "react"
import { NextPage } from "next"
import { useRecoilState, useRecoilValue } from "recoil"
import { listAtom } from "@/atoms/listAtoms"
import { logAtom } from "@/atoms/logAtoms"
import { heatmapData } from "@/sample_data_case/heatmapSample"
import { logSample } from "@/sample_data_case/logSample"
const ApexChart = dynamic(() => import("react-apexcharts"),{ssr:false})

const Home:NextPage = () => {
  const [login,_] = useState(true)
  const dialog = useRecoilValue(listAtom) 
  const[state,setState] = useRecoilState(logAtom)
  return (
     <LayOut login={login}>
      {login?
       <main className="mx-16 lg:mx-28 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">

       <section className="flex" id="button_part">
       <div className="border-2 p-1 px-4 rounded-lg shadow-md border-gray-300 mx-1">2022.12.19~2022.12.25</div>
         <select name ="week" className="border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
           <option value="1week">1week</option>
           <option value="2week">2week</option>
           <option value="3week">3week</option>
           <option value="4week">4week</option>
         </select>
         <select name ="category" className="rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none">
           <option value="c">카테고리</option>
         </select>
       </section>
   
       <section className="flex mt-2 lg:mt-5 flex-col md:flex-row md:[&>*:nth-child(even)]:mx-5" id="list_prat">
         {Object.keys(dialog).map((item,index)=>{return(
<div  key={index}
   className=" p-3 shadow-xl border-2 border-gray-300 rounded-lg w-full flex flex-col ">
<div className="bg-blue-500 text-center py-2 text-white rounded-md">{item} ({dialog[item].length})</div>
         <div className="scrollbar-hide my-2 lg:my-0 overflow-auto h-[30vh] md:h-[45vh] max-h-[48vh]">
         {dialog[item].map((item,index)=>{
           return(<div key={index} className="border-2 border-blue-500 my-2 p-2 rounded-md cursor-pointer">
             <div className="ml-2 w-52 overflow-hidden text-ellipsis whitespace-nowrap mb-1">{item.title}</div>
             <div className=" text-[0.1em] flex font-semibold">
               <div className="my-1 lg:m-1 bg-blue-500 text-white p-[0.2rem] rounded-lg">{item.category}</div>
               <div className="m-1 lg:m-2">{item.date}</div>
               <div className={`my-1 lg:m-1 ${item.level==="High"?"bg-red-500":item.level==="Low"?"bg-yellow-400":"bg-green-500"} flex items-center p-1 text-white rounded-md`}>{item.level}</div>
                </div></div>)})}</div></div>)})}
       </section>

   <section className="border-2 border-gray-300 my-5 rounded-lg shadow-xl w-full" id="graph_part">
   <div className="mx-8 border-b-2 py-3 flex flex-col  md:flex-row justify-between">
   <div className="text-md lg:text-lg flex items-center mx-auto md:mx-0">480 done in the year</div>
   <div className="flex mx-auto md:mx-0 mt-2 md:mt-0">
   <select className="rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 lg:text-md outline-none">
     <option>노휘래</option>
     <option>이진이</option>
     <option>최충실</option>
     <option>김민석</option>
   </select>
   <select name ="category" className="rounded-lg border-gray-300 shadow-md p-1 overflow-hidden px-2 mx-1 border-2 lg:text-md outline-none">
           <option value="c">카테고리</option>
         </select>
   </div>
   </div>
   <div className="overflow-auto max-w-full">
     <div className="lg:w-full w-[150vw]">
     <ApexChart type='heatmap' height={150}
   series={heatmapData} 
   options={{
      chart:{toolbar:{show:false},type:'heatmap'},legend:{show:false},
      xaxis:{labels:{show:false},tooltip:{enabled:false},axisTicks:{show:false}},
      yaxis:{labels:{show:false}},
      tooltip:{x:{show:false},y:{title:{formatter:(tr)=>{return `${tr}`}}}},
      dataLabels:{enabled:false},
      plotOptions:{heatmap:{enableShades:false,radius:5,
       colorScale:{
   ranges:[
   {from:0,to:0,color:"rgb(235, 235, 235)"},
   {from:1,to:2,color:"rgb(163, 254, 153)"},
   {from:3,to:4,color:"rgb(130, 225, 119)"},
   {from:5,to:6,color:"rgb(41, 179, 82)"},
   {from:7,to:8,color:"rgb(33, 132, 62)"},
   {from:9,to:100000000,color:"rgb(21, 83, 40)"}   
   ]
      }}}
   }}/>
     </div>
   </div>
   </section>
   <section id="log and button" className="flex flex-col">
   {state.map(item=>{return<div key={item.id} className=" w-full border-2 border-gray-300 rounded-lg shadow-xl my-3 p-4">
   <div className="text-lg mb-2">{item.title}</div>
   {item?.contentList?<div className="border-l-2 border-gray-300 pl-2">{
   Object.keys(item.contentList).map(cl=>{
     return<div key={cl} className="my-1">{item.contentList&&item.contentList[cl]}</div>})}
   </div>:null}
   {item?.content?<div className="flex">
     {item.avatar?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
     <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
   </svg>
   :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
   className="w-10 h-10">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>} 
   <div className="mx-5 ml-2 w-full ">
   <span className="ml-3">{item.content.main}</span>
   <span className="text-gray-400">&nbsp;{item.content.date}</span>
   <div className="border-2 border-gray-300 rounded-lg p-1 mt-3 ml-4 w-full">{
   Object.keys(item.friendContent as dragListProps["item"]).map(fcl=>{
     return(<div key={fcl} className="my-2">
   {item.friendContent&&item.friendContent[fcl]}
   </div>)})}</div>
   </div>
   </div>:null}
   </div>})}
   <button className="bg-blue-500 rounded-lg p-1 mt-2 text-white hover:bg-blue-400 text-lg"
   onClick ={()=>{
     setState(state=>[...state,...logSample])}}>more &#8744;</button>
   </section>
   
         </main>
      :
      
      <main className="mx-16 lg:mx-28 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">

      <section className="flex" id="button_part">
      <div className="border-2 p-1 rounded-lg shadow-md border-gray-300 mx-1">
        <div className="bg-gray-300 w-36 h-5 rounded-lg animate-pulse"/>
      </div>
      <div className="border-2 rounded-lg shadow-md border-gray-300 p-1 mx-1">
      <div className="bg-gray-300 w-16 h-5 rounded-lg animate-pulse"/>
      </div>
        <div className="rounded-lg border-gray-300 shadow-md p-1  mx-1 border-2">
        <div className="bg-gray-300 w-16 h-5 rounded-lg animate-pulse"/>
        </div>
      </section>
  
      <section className="flex mt-2 md:mt-5 flex-col md:flex-row md:[&>*:nth-child(even)]:mx-5" id="list_prat">
        {["To Do","In Progress","Done"].map((item,index)=>{return(<div key={index} 
  className="scrollbar-hide p-3 shadow-xl border-2 border-gray-300 w-full my-2 lg:my-0 h-[30vh] md:h-[48vh] max-h-[48vh] rounded-lg overflow-auto">
        <div className="bg-blue-500 text-center py-2 text-white rounded-md">{item}</div>
        {[1,2].map(item=><div key={item} 
        className="mt-2  w-full animate-pulse p-2 space-x-2 rounded-xl border-2 border-blue-500">
        <div className="h-6 w-11/12 mx-auto rounded-md bg-gray-300"/>
     <div className="flex mt-3">
     <div className="h-6 w-12 rounded-md bg-gray-300 ml-5 lg:ml-0"/>
        <div className="h-6 w-36 rounded-md bg-gray-300 ml-3"/>
        <div className="h-6 w-12 rounded-md bg-gray-300 ml-3"/>
     </div>
        </div>)}
        </div>)})}
      </section>
  
  <section className="border-2 border-gray-300 my-5 rounded-lg w-full shadow-xl" id="graph_part">
  <div className="mx-8 border-b-2 py-3 flex flex-col lg:flex-row justify-between">
  <div className="text-md lg:text-lg flex items-center animate-pulse px-1 p-2 rounded-lg">
  <div className="bg-gray-300 lg:w-56 h-6 rounded-lg w-full"/>
  </div>
  <div className="flex">
  {[1,2].map(item=><div key={item} className="animate-pulse rounded-lg p-1 px-2 mx-1 lg:text-md ">
    <div className="bg-gray-300 w-14 h-6 rounded-lg"/>  
  </div>)} 
  </div>
  </div>
  <div className="overflow-auto max-w-full m-3 py-3 px-5 animate-pulse grid grid-cols-3 gap-x-12">
    {[1,2,3].map(item=><div key={item} className="w-full h-24 lg:h-48 bg-gray-300 rounded-xl"/>)}
  </div>
  </section>


  <section id="log and button" className="grid grid-cols-1 gap-y-4 w-full">
  <div className="text-lg mb-2 border-2 border-gray-300 h-48 rounded-xl pl-5 lg:pl-14 shadow-lg">
          <div className="bg-gray-300 w-80 lg:w-72 h-6 lg:h-7 rounded-lg animate-pulse mt-5"/>
          <div className="border-l-4 border-gray-400 px-3 pr-5">
          {[1,2,3].map(item=> <div key={item} 
          className="bg-gray-300 w-full h-5 rounded-lg animate-pulse mt-5"/>)}</div>
  </div>
  
  <div className="text-lg mb-2 border-2 border-gray-300 h-56 rounded-xl pl-5 lg:pl-14 shadow-lg">
  <div className="bg-gray-300 w-72 h-6 lg:h-7 rounded-lg animate-pulse mt-5"/>
  <div className="flex">
  <div className="bg-gray-300 w-16 h-16 animate-pulse my-auto rounded-full"/>
  <div className="flex flex-col mx-6 w-full">
  <div className="bg-gray-300 w-full h-6 rounded-lg animate-pulse my-5"/>
  <div className="border-2 border-gray-300 rounded-xl px-3">
{[1,2].map(item=><div key={item} className="bg-gray-300 w-full h-6 rounded-lg animate-pulse my-3"/>)}
  </div>
  </div>
  </div>
  
  </div>
  </section>
  
        </main>}
     </LayOut>
      )}
export default Home