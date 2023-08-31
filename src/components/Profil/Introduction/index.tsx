import { profilIcons } from "@/sample_data_case/svgIcons"
import { AnimatePresence, motion } from "framer-motion"
import { useId } from "react"

const Introduction = ({ profilState, icons, text }: profilIntroductionProps) => {
  const id = useId()
  return (
    <>
      <AnimatePresence>
        {profilState ? (
          <motion.div
            layoutId={id}
            className="flex mt-3 font-semibold ml-8 lg:ml-[15%] text-sm max-w-xl "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 aspect-square mt-[0.2rem]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={profilIcons[icons]} />
            </svg>
            <span className="ml-1 w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {text}
            </span>
          </motion.div>
        ) : (
          <motion.input
            layoutId={id}
            defaultValue={text}
            className="ml-3 mt-3 w-52 xl:w-56 lg:ml-[13%] rounded-lg p-1 font-bold border-2 text-sm border-blue-500 outline-none "
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Introduction
