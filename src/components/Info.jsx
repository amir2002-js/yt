import {
  HiOutlineBell,
  HiOutlineVideoCamera,
  HiMicrophone,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { IconContext } from "react-icons";

export default function Info() {
  return (
    <>
      <div className="flex md:gap-2 items-center justify-center flex-none">
        {/* account */}
        <div className="w-8 h-8 rounded-full mr-5 bg-orange-500"></div>

        {/* notification */}
        <div className="rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "25px" }}>
            <HiOutlineBell />
          </IconContext.Provider>
        </div>

        {/* camera */}
        <div className="rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "25px" }}>
            <HiOutlineVideoCamera />
          </IconContext.Provider>
        </div>

        {/* icon */}
        <div className="md:hidden rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "20px" }}>
            <HiMicrophone />
          </IconContext.Provider>
        </div>

        <div className="md:hidden rounded-full p-3 hover:bg-gray-200 transition-all">
          <IconContext.Provider value={{ size: "24px" }}>
            <HiOutlineMagnifyingGlass />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
