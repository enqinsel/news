import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getNews } from "../api.js";

function EditorsPick() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setNewsData(data);
    };
    fetchData();
  }, []);


  return (
    <>
      <div className="w-full flex gap-8 mt-48 mb-16">
        <div className="w-[70%]">
          <div className="h-8 mb-12">
            <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
              Editor&apos;s Pick
            </h2>
          </div>
          <div className="flex gap-5 items-start">
            {newsData.slice(0, 1).map((item, index) => (
              <Link to={item.url} key={index} target="_blank" rel="noopener noreferrer">
                <div className="w-[21.875rem] flex-col flex gap-3">
                  <div className="w-[21.875rem] h-[13.125rem]">
                    <a href={item.url}>
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                  <a href={item.url}>
                    <div className=" text-base h-auto">
                      <p className="text-2xl text-black mb-2">{item.name}</p>
                      <p className="mb-4">{item.description}</p>
                      <div className="text-sm">
                        <span>{item.source}</span>
                        <p className="text-slider-jun flex items-center gap-1">
                          <span className="after:content-['•'] after:mr-1 after:ml-1">
                            Jun 14
                          </span>{" "}
                          3 min read <BiSolidStar className="w-2" />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
            ))}

            <div className=" flex flex-col gap-4">
               {
                newsData.slice(1,4).map((item,index)=>(
                <Link key={index} to={item.url} target="_blank" rel="noopener noreferrer">
                  <div  className={`flex items-center gap-4 ${index === 0 ? 'bg-slider-bg' : ''}`}>
                      <div className="w-[6.5625rem] h-[6.6875rem]">
                        <a href={item.url}>
                          <img
                            src={item.image}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="w-1/2 text-base h-auto">
                        <p className="text-sm text-black">{item.name}</p>
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
          </div>
        </div>
        <div className="w-[30%]">
          <div className="h-8 mb-12">
            <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
              Trending
            </h2>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center">
            {
                newsData.slice(4,8).map((item,index)=>(
                <Link key={index} to={item.url} target="_blank" rel="noopener noreferrer">
                  <div  className="flex items-start gap-5">
                    <div className="">
                      <span className="text-3xl text-slider-jun">0{item.key}</span>
                    </div>
                    <div className="text-base h-auto w-[18.75rem]">
                      <p className="text-base text-black">{item.name}</p>
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
          <p className="text-sm text-see-all-trends flex items-center gap-2 mt-6 hover:text-green-600"><a href="#">SEE ALL TRENDS</a> <AiOutlineArrowRight/> </p>
        </div>
      </div>
    </>
  );
}

export default EditorsPick;
