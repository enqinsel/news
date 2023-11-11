import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiSearch,
} from "react-icons/bi";
import Menu from "./Menu";

function Navbar() {
  return (
    <div className="pb-2 border-b mb-20">
      <div className="container mx-auto w-full flex justify-center items-center pt-[30px] pb-[30px]">
        <div className="w-1/2">
          <a href="#" className="text-[2rem] text-black">
            Meranda
          </a>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <div className="flex">
            <a href="#" className="text-black p-4">
              <BiLogoFacebook />
            </a>
            <a href="#" className="text-black p-4">
              <BiLogoTwitter />
            </a>
            <a href="#" className="text-black p-4">
              <BiLogoInstagram />
            </a>
          </div>
          <form className=" inline-block">
            <div className="flex">
              <input
                type="email"
                placeholder="Search..."
                className="mr-2 h-12 pl-5 pr-5 rounded-[30px] border-none bg-white borderBottom outline-none text-base py-[0.375rem] px-[0.75rem] text-input-color"
              />
              <button
                type="submit"
                className="bg-black hover:bg-green-hover text-white rounded-3xl pl-5 pr-5 w-[58px] h-[50px]"
              >
                <BiSearch className="text-xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
}

export default Navbar;
