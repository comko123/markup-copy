const UnLoginMain = () => {
return(<main className="mx-8 md:mx-16 lg:mx-24 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">

<section className="flex mb-2 md:mb-0 -ml-1 md:ml-0" id="button_part">
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
  {["To Do","In Progress","Done"].map(item=>{return(<div key={item} 
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

  </main>)
}
export default UnLoginMain