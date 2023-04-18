import { profilIcons } from "@/sample_data_case/svgIcons"

const ProfilIntroduction = ({profilState,icons,text}:profilIntroductionProps) => {
return (<>
            {profilState ?
              <div className="flex mt-3 font-semibold ml-8 text-sm max-w-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                  stroke="currentColor" className="w-5 aspect-square mt-[0.2rem]">
                  <path strokeLinecap="round" strokeLinejoin="round" d={profilIcons[icons]} />
                </svg>
                <span className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">{text}</span>
              </div>
              : <input defaultValue={text}
                className="ml-3 mt-3 w-52 xl:w-56  rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none " />}
</>)
}

export default ProfilIntroduction