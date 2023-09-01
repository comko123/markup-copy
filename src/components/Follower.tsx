const Follower = (item: sampleCase["issuLog"]) => {
  return (
    <div className=" lg:my-5 lg:ml-9 bg-gray-100 rounded-xl flex h-32 w-[99%] lg:w-[94%] p-4 shadow-lg ">
      <div className="flex items-center justify-center">
        {item?.avatar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-16 lg:w-20 aspect-square p-1 bg-white rounded-full mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-16 lg:w-20 aspect-square p-1 bg-white rounded-full mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )}
      </div>
      <div className="border-l-4 border-gray-400 pl-5 w-full justify-between overflow-x-hidden md:overflow-x-visible">
        <div className=" pt-3 w-[70%] md:w-full grid grid-cols-betch md:flex justify-between">
          <div className="w-[40vw] lg:w-[30vw]">
            <div className="font-bold w-max lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item?.name}
            </div>
            <div className="pt-4 font-bold w-[90%] lg:w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item?.timeLine}
            </div>
          </div>
          <input
            type="button"
            value={item?.follow ? "follow" : "unfollow"}
            className={`border-2 rounded-lg text-xs lg:text-sm h-12 px-2 font-bold bg-white cursor-pointer my-auto
${
  item?.follow
    ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
    : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
}`}
          />
        </div>
      </div>
    </div>
  )
}
export default Follower
