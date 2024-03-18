import { IconContext } from "react-icons";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";

export default function Menu() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center px-2 gap-0.5">
          <IconContext.Provider value={{ size: "30px", color: "red" }}>
            <FaYoutube />
          </IconContext.Provider>
          <p className=" font-bold text-lg tracking-tighter">YouTube</p>
        </div>

        <div className=" p-2 hover:bg-gray-200 rounded-full">
          <IconContext.Provider value={{ size: "26px" }}>
            <HiOutlineBars3 />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
