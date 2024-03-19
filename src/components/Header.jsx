import { useState } from "react";
import Info from "./Info";
import Menu from "./Menu";
import Search from "./Search";
import youtube from "../API/youtube";

export default function Header() {
  const [inpVal, setInpVal] = useState("");
  const [ytParagraph, setytParagraph] = useState();
  const searchHanlder = async (term) => {
    const response = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    setytParagraph(response.data.items);
  };

  function onChangeHandler(e) {
    setInpVal(e.target.value);
  }

  function onClickHandler(e) {
    e.preventDefault();
    searchHanlder(inpVal);
  }
  return (
    <>
      <header className="px-7 py-4 flex items-center justify-between">
        {/* account notif .... */}
        <Info />

        {/* input form */}
        <Search clickHandler={onClickHandler} changeHandler={onChangeHandler} />

        {/* menu */}
        <Menu />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">
        {ytParagraph === undefined
          ? ""
          : ytParagraph.map((item, i) => {
              const par = item.snippet.title;
              const mySrc = item.snippet.thumbnails.high.url;
              return (
                <div className="w-[400px]" key={i}>
                  <img
                    src={mySrc}
                    alt=""
                    className=" w-full h-60 rounded-2xl bg-black"
                  />
                  <div className="py-4">
                    <p className="text-end w-full mx-auto font-semibold">
                      {par}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
