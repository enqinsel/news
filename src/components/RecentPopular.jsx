import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getNews } from "../api.js";

function RecentPopular() {

const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setNewsData(data);
    };
    fetchData();
  }, []);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.substring(0, maxLength);
      return truncatedText + '...';
    }
  }


  return (
    <>
    <div className="w-full flex gap-16 mt-48 mb-16">
      <div className="w-[75%]">
        <div className="h-8 mb-12">
          <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
            Recent News
          </h2>
        </div>
        <div className=" flex flex-col gap-8">
            {
            newsData.slice(1,4).map((item,index)=>(
            <Link key={index} to={item.url} target="_blank" rel="noopener noreferrer">
                <div  className="flex items-center justify-between gap-4">
                    <div className="w-2/3 text-base h-auto">
                        <p className="text-base text-black mb-3">{item.name}</p>
                        <p className="mb-4">{truncateText(item.description, 150)}</p>
                        <div className="text-sm">
                            <span>{item.source}</span>
                            <p className="text-slider-jun flex items-center gap-1"><span className="after:content-['•'] after:mr-1 after:ml-1">Jun 14</span>  3 min read <BiSolidStar className="w-2"/></p>
                        </div>
                    </div>
                    <div className="w-[15.4375rem] h-[9.625rem]">
                        <a href={item.url}>
                            <img
                            src={item.image}
                            className="w-full h-full object-cover"
                            />
                        </a>
                    </div>
                </div>
            </Link>
            ))
        }

        <ul className="flex gap-4 cursor-pointer w-fit">
            <li>1</li>
            <li className="text-black">2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        </div>
      </div>
      <div className="w-[25%]">
        <div className="h-8 mb-12">
          <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
            Popular Posts
          </h2>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          {
              newsData.slice(4,8).map((item,index)=>(
              <Link key={index} top={item.url} target="_blank" rel="noopener noreferrer">
                <div  className="flex items-start gap-5">
                    <div className="">
                      <span className="text-3xl text-slider-jun">0{item.key - 3}</span>
                    </div>
                    <div className="text-base h-auto w-[18.75rem]">
                      <p className="text-lg text-black">{item.name}</p>
                      <div className="text-sm">
                          <span>{item.source}</span>
                          <p className="text-slider-jun flex items-center gap-1"><span className="after:content-['•'] after:mr-1 after:ml-1">Jun 14</span>  3 min read <BiSolidStar className="w-2"/></p>
                      </div>
                    </div>
                </div>
              </Link>
              ))
          }
        </div>
        <p className="text-sm text-see-all-trends flex items-center gap-2 mt-6 hover:text-green-600"><a href="#">SEE ALL POPULAR</a> <AiOutlineArrowRight/> </p>
      </div>
    </div>
  </>
  )
}

export default RecentPopular