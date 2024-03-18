import youtube from "../API/youtube";
import Info from "./Info";
import Menu from "./Menu";
import Search from "./Search";

export default function Header() {


  const secrchHanlder = async (term) => {
    const response = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
  };


  return (
    <header className="px-7 py-4 flex items-center justify-between">
      {/* account notif .... */}
      <Info />

      {/* input form */}
      <Search sub={secrchHanlder}/>

      {/* menu */}
      <Menu />
    </header>
  );
}
