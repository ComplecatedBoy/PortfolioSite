import { IoMdClose } from "react-icons/io";

function Model({ isSideBar, setIsSideBar }) {
  let style =
    "transition-all ease fixed max-w-[350px] h-screen w-screen top-0 ";
  if (isSideBar) {
    style += " right-0";
  } else {
    style += " right-[-350px]";
  }
  return (
    <>
      <div style={{ zIndex: "2" }} className={style}>
        <div className="relative bg-stone-100 w-full w-full h-full m-auto text-xl flex flex-col pt-12">
          <hr className="shadow shadow-grey mt-3 " />
          <div className="shadow p-6" onClick={() => setIsSideBar(false)}>
            <a href="#home">Home</a>
          </div>
          <div className="shadow p-6" onClick={() => setIsSideBar(false)}>
            <a href="#project">Projects</a>
          </div>
          <div className="shadow p-6" onClick={() => setIsSideBar(false)}>
            <a href="#about">About</a>
          </div>
          <div className="shadow p-6" onClick={() => setIsSideBar(false)}>
            <a href="#contact">Contact</a>
          </div>
          <div
            className=" shadow shadow-white/20 absolute right-8 top-3 rounded-sm bg-black/10"
            onClick={() => setIsSideBar(false)}
          >
            <IoMdClose size={40} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
