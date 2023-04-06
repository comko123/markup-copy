import { useRouter } from "next/router"
const LayOut = ({login,children}:layout) => {
  const {push , replace , pathname} = useRouter()
    return(<>
<header className="bg-blue-500 flex justify-between p-2 lg:p-5 lg:px-24 font-bold fixed top-0 w-full z-10">
  <h3 className={`text-md lg:text-2xl hover:text-white ${pathname==='/'?"text-white":null}`} onClick={()=>push('/')}>DoneList</h3>
  <div className="flex items-center">
 {login?<>
    {["Calender","Chart","Follower","Setting","Log-Out"].map((item,index)=>{
    return(
    <span key={index} 
    className={`${pathname===`/${item.toLowerCase()}`?"text-white" :null} text-xs cursor-pointer lg:text-lg mx-1 lg:mx-3 hover:text-white`}
    onClick={e=>{
      if(item ==="Log-Out"){console.log("Log-Out")}
      else push(`/${item.toLowerCase()}`)
  }}
    >{item}</span>)
  })}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
  className="w-4 aspect-square lg:w-6 mx-1 lg:mx-3 hover:text-white cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-4 aspect-square lg:w-6 hover:text-white cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg>
 </>:<>
 {["Log-In","Sign-Up"].map(item=><div key={item}>
  <div onClick={()=>replace(`/${item.toLowerCase()}`)} className={`${pathname===`/${item.toLowerCase()}`?"text-white" :null} 
  text-xs lg:text-lg mx-1 lg:mx-3 hover:text-white cursor-pointer`}>{item}</div> 
 </div>)}
 </>
 }
</div></header>
<main className="mt-14 md:mt-24">{children}</main>
</>)}
export default LayOut