import { profilIcons } from "@/sample_data_case/svgIcons"
import { followerVariants } from "@/variants/followerVariants"
import { motion } from "framer-motion"

const Introduction = ({ profilState, icons, text }: profilIntroductionProps) => {
  return (
    <>
      {profilState ? (
        <motion.input
          defaultValue={text}
          variants={followerVariants}
          initial="start"
          animate="sending"
          transition={followerVariants.transition}
          className="ml-3 w-52 mt-1 h-8 xl:w-56 lg:ml-[13%] rounded-lg p-1 origin-right font-bold border-2 text-sm border-blue-500 outline-none"
        />
      ) : (
        <motion.div
          variants={followerVariants}
          initial="start"
          animate="sending"
          transition={followerVariants.transition}
          className="flex h-8 mt-1 font-semibold ml-8 origin-left lg:ml-[15%] text-sm max-w-xl "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 aspect-square"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={profilIcons[icons]} />
          </svg>
          <span className="ml-1 w-full mt-[0.4rem] overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </span>
        </motion.div>
      )}
    </>
  )
}

export default Introduction
