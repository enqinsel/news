import {
    RiSendPlaneFill,
  } from "react-icons/ri";
import {
    AiFillHeart,
  } from "react-icons/ai";



function Footer() {
  return (
    <>
        <div className="py-28 px-0 bg-slider-bg">
            <div className="container mx-auto w-full flex items-center">
                <div className="mr-auto w-[41%] flex flex-col gap-5">
                    <p className="text-lg text-black">Newsletter Subcribe</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                </div>
                <form action="#" className="inline-block ml-auto w-1/2">
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Search..."
                            className="mr-2 h-12 pl-5 pr-5 rounded-[30px] border-none bg-white borderBottom outline-none text-base py-[0.375rem] px-[0.75rem] text-input-color w-[29.4375rem]"
                        />
                        <button
                            type="submit"
                            className="bg-black hover:bg-green-hover text-white rounded-3xl pl-5 pr-5 w-[58px] h-[50px]"
                        >
                            <RiSendPlaneFill className="text-xl" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="py-8 px-0 w-full flex items-center">
            <p className="container mx-auto flex gap-1 items-center w-fit">Copyright ©2023 All rights reserved | This work is made with <AiFillHeart/> by <a href="https://github.com/enqinsel" target="_blank" rel="noopener noreferrer">Engin İnsel</a></p>
        </div>
    </>
  )
}

export default Footer