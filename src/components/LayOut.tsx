import { ctgAtom } from "@/atoms/ctgAtoms"
import { loginAtom } from "@/atoms/loginAtoms"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { motion ,AnimatePresence} from "framer-motion"
import { modalVariants } from "@/variants/modalVariants"
const LayOut = ({children , login}:layout) => {
  const {push , replace , pathname} = useRouter()
  const  setLoginState = useSetRecoilState(loginAtom)
  const [modalState,setModalState] = useState({
    alertState:{alertShowing:false},
    addToDoModalState:{modalShowing:false,selectMainCtg:"",selectSubCtg:""}})
 const [alertSample,setAlertSample] = useState([
  {content:"CCSirius started following to you.",avatar:"1",date:"36 minutes ago"},
  {content:"HwiRae has finished all the work.",avatar:"3",date:"1 hours ago"},
  {content:"jinlee started following to hwirae.",avatar:"",date:"1 hours ago"},
  {content:"jinlee has finished all the work.",avatar:"",date:"2 hours ago"},
  {content:"jinlee started following to you.",avatar:"",date:"6 hours ago"}
])
    const {alertState,addToDoModalState} = modalState
 const {modalShowing,selectSubCtg,selectMainCtg} = addToDoModalState
 const {alertShowing} = alertState

 const ctg = useRecoilValue(ctgAtom)
    return(<>  
<header className="bg-blue-500 flex justify-between p-2 md:p-5 px-6 lg:px-24 font-bold fixed top-0 w-full z-10">
  <h3 className={`text-md lg:text-2xl hover:text-white ${pathname==='/'?"text-white":null}`} onClick={()=>push('/')}>DoneList</h3>
  <div className="flex items-center">
 {login?<>
    {["Calender","Chart","Follower","Log-Out"].map((item,index)=>{
    return(
    <span key={index} 
    className={`${pathname===`/${item.toLowerCase()}`?"text-white" :null} text-xs cursor-pointer lg:text-lg mx-1 lg:mx-3 hover:text-white`}
    onClick={()=>{if(item ==="Log-Out"){setLoginState(state=>({login:!state.login})); replace('/')}
      else push(`/${item.toLowerCase()}`)}}>{item}</span>)})}

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
  onClick={()=>setModalState(()=>{return{alertState:{alertShowing:false},addToDoModalState:{selectMainCtg:"",selectSubCtg:"",modalShowing:!modalShowing}}})}
  className={`w-4 aspect-square lg:w-6 z-20 mx-1 lg:mx-3 ${modalShowing?"text-white":"text-black"} hover:text-white cursor-pointer`}>
  <path strokeLinecap="round" strokeLinejoin="round" 
   d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
   />
</svg>

 <AnimatePresence>
 {modalShowing?
  <motion.div variants={modalVariants} transition={modalVariants.transition} initial="start" animate="display" exit="end" 
  className="fixed right-[2%] md:right-[1%] lg:right-[2%] top-[2.2em] md:top-[3.7em] xl:top-[3.8em] origin-top w-[13rem] md:w-[16rem] aspect-square my-2 bg-pink-100 rounded-xl">
  {/* <div className="border-[20px] w-5 border-t-transparent border-x-transparent absolute border-b-pink-100 -top-[12.5%] right-[0.2rem] md:right-[0.3rem] lg:right-[4.7rem]  2xl:right-[4.2rem]"/> */}
<form onSubmit={e=>e.preventDefault()} className="p-2">
  <input type="text" placeholder="write to title" className="outline-none p-2 w-full rounded-lg my-2 text-vxs md:text-sm"/>

<div className="flex flex-col mb-2"> 
  <div className="flex justify-center">
  {Object.keys(ctg).map(item=><div key={item} onClick={()=>setModalState(state=>{
    if(item === selectMainCtg)return{...state,addToDoModalState:{...addToDoModalState,selectMainCtg:""}}
    else return{...state,addToDoModalState:{...addToDoModalState,selectMainCtg:item,selectSubCtg:""}}
  })} 
  className={`${selectMainCtg ===item?"bg-blue-500":"bg-blue-300" } hover:ring hover:ring-blue-500 hover:ring-offset-2 text-vxs md:text-sm m-1 p-1 text-white rounded-md`}>{item}</div>)}
  </div>
<div className="flex justify-center empty:h-[1.8rem]">
{selectMainCtg && ctg[selectMainCtg].map(item=><div key={item} 
onClick ={()=>setModalState(state=>{
  const setting = (params:string) => {return{...state,addToDoModalState:{...addToDoModalState,selectSubCtg:params}}}
  if(item === selectSubCtg)return setting("");else return setting(item)})}
className={`${selectSubCtg === item ?"bg-blue-500":"bg-blue-300"} hover:ring hover:ring-blue-500 hover:ring-offset-2 text-vxs md:text-sm m-1 p-1 text-white rounded-md`}>{item}</div>)}
</div>
  </div>

  <div className="mb-2 text-vxs md:text-sm"><span className="ml-1">level : </span>
<select className="p-1 rounded-lg outline-none text-vxs md:text-sm">
  {["High","Medium","Low"].map(item=><option key={item} className="font-bold">{item}</option>)}
  </select>
  </div> 
<div className="mb-2 text-vxs md:text-sm ml-1"> <span>start date : </span><input type="date" className="text-vxs md:text-sm p-1 rounded-lg outline-none"/></div>  
<div className="mb-3 text-vxs md:text-sm ml-1"> <span>finish date : </span><input type="date" className="text-vxs md:text-sm p-1 rounded-lg outline-none"/></div> 
<input type="submit" value="+"
className="mb-1 rounded-lg text-2xl bg-blue-300 hover:bg-blue-500 outline-none w-full pb-1 flex flex-grow items-center justify-center text-white" 
onClick={()=>setModalState(state=>{
  return{...state,addToDoModalState:{selectMainCtg:"",selectSubCtg:"",modalShowing:false}}})}
/>
</form>
</motion.div>
  :null}
 </AnimatePresence>
 </>:<>
 {["Log-In","Sign-Up"].map(item=><div key={item}>
  <div onClick={()=>replace(`/${item.toLowerCase()}`)} className={`${pathname===`/${item.toLowerCase()}`?"text-white" :null} 
  text-xs lg:text-lg mx-1 lg:mx-3 hover:text-white cursor-pointer`}>{item}</div> 
 </div>)}
 </>
 }
</div></header>

<main className="mt-14 md:mt-24">{children}</main>

{login?<footer className="relative">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
onClick={()=>setModalState(()=>{return{addToDoModalState:{...addToDoModalState,modalShowing:false},alertState:{alertShowing:!alertShowing}}})}
className={`w-[3rem] aspect-square lg:w-[4%] ${alertShowing?"text-white":"text-black"} fixed bottom-[9%] right-[6%] hover:text-white cursor-pointer bg-blue-500 p-1 rounded-full shadow-md shadow-slate-400`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

<AnimatePresence>
 {alertShowing?
  <motion.div variants={modalVariants} transition={modalVariants.transition} initial="start" animate="display" exit="end"
  className="fixed right-[1.5%]  bottom-[8em] xl:bottom-[19vh] p-2 origin-bottom w-[13rem] md:w-[16rem] aspect-square my-2 bg-pink-100 rounded-xl">
{alertSample.length?<>
  <div className="text-slate-600 flex text-vxs font-bold w-full justify-end border-b-2 pb-1 border-sky-500"
><span onClick={()=>setAlertSample([])} className="hover:text-amber-600">모두 읽기</span></div>
<div className="max-h-full overflow-auto scrollbar-hide">
{alertSample.map(item=><div key={item.content} className="flex w-full justify-between border-2 bg-white rounded-lg border-sky-500 my-2 p-2">
<div>{item.avatar?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
}</div>
 <div className="flex flex-col text-vxs max-w-[60%] md:max-w-full">
 <div className="mx-1 overflow-hidden text-ellipsis whitespace-nowrap">{item.content}</div>
  <div className="mx-1 text-slate-500">{item.date}</div>
 </div>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
 className="w-6 h-6 hover:text-amber-600"
 onClick={()=>setAlertSample(state=>state.filter(select => select.content !== item.content))}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</div>)}
</div>
</>:<div className="flex items-center justify-center w-full h-full text-vxs md:text-sm">The notification is empty...</div>}
{/* <div className="border-[20px] w-5 border-b-transparent border-x-transparent absolute border-t-pink-100 rounded-lg right-[2rem] md:right-[3rem] lg:right-[3.3rem] xl:right-[4.5rem] 2xl:right-[5.5rem] bottom-[-2.2rem]"/> */}
</motion.div>
  :null}
 </AnimatePresence>
</footer>:null}

</>)}
export default LayOut