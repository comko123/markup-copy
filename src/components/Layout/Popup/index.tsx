import { ReactNode, Dispatch, SetStateAction } from "react"
import { motion } from "framer-motion"
import { popUpVariants } from "@/variants/popUpVariants"
import { useNotReload } from "@/hooks/useNotReload"
const Popuplayout = ({
  children,
  setPuState
}: {
  children: ReactNode
  setPuState: Dispatch<SetStateAction<boolean>>
}) => {
  useNotReload()
  return (
    <>
      <motion.div
        variants={popUpVariants}
        initial="start"
        animate="display"
        exit="end"
        className="z-20"
      >
        <motion.div
          onClick={() => setPuState(state => !state)}
          className="bg-gray-900 w-full h-full fixed top-0 left-0 opacity-50 font-bold"
        />
        <motion.div
          exit={{ y: [8, 5, 0, -10, -30], transition: { ease: "linear" } }}
          className="fixed top-[12%] left-[5%] xl:top-[8%] xl:left-[20%] md:left-[12%] w-[90%] md:w-[78%] xl:w-[60%] h-[75%] xl:h-[85%] bg-white rounded-xl pb-5 overflow-auto scrollbar-hide"
        >
          <header className="bg-gray-300  h-[4em] md:h-[5em] sticky top-0 rounded-t-xl flex justify-end px-3 pt-3 w-full z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-10 md:h-10 hover:text-red-500"
              onClick={() => setPuState(state => !state)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </header>
          {children}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Popuplayout
