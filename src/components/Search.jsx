import { IconContext } from "react-icons";
import { HiMicrophone, HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function Search(props) {
  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-5 ">
        {/* icon */}
        <div className=" rounded-full bg-gray-100 hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "20px" }}>
            <HiMicrophone />
          </IconContext.Provider>
        </div>

        {/* form */}
        <form
          action=""
          className="flex justify-center items-center rounded-full border border-gray-300"
        >
          <button
            className=" rounded-l-full bg-gray-100 py-2 px-5 hover:bg-gray-200 transition-all border-r border-gray-300"
            onClick={(e) => {
              props.clickHandler(e);
            }}
          >
            <IconContext.Provider value={{ size: "26px" }}>
              <HiOutlineMagnifyingGlass />
            </IconContext.Provider>
          </button>
          <input
            type="text"
            className=" focus-visible:outline-none rounded-r-full p-2 w-52 lg:w-96"
            onChange={(e) => props.changeHandler(e)}
          />
        </form>
      </div>
      {/* <div className="">{searchHanlder}</div> */}
    </>
  );
}
