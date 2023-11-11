import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getNews } from "../api.js";

function PoliticsBusiness() {
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
      <div className="w-full flex-col gap-8 mt-48 mb-16">
        <div className="flex w-full justify-between">
          <div className="h-8 mb-12">
            <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
              Politic&apos;s
            </h2>
          </div>
          <div className="h-8 mb-12 mr-[30rem]">
            <h2 className="text-xl border-b border-b-slate-900 inline-block text-black">
              Business
            </h2>
          </div>
        </div>
        <div className="w-full grid grid-flow-col grid-cols-2 grid-rows-4 gap-8">
          {newsData.map((item, index) => (
            <Link key={index} to={item.url} target="_blank" rel="noopener noreferrer">
              <div  className=" flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-[162px] h-[178px]">
                    <a href={item.url}>
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 text-base h-auto">
                    <p className="text-base text-black">{item.name}</p>
                    <p className="mb-4">{truncateText(item.description, 150)}</p>
                    <div className="text-sm">
                      <span>{item.source}</span>
                      <p className="text-slider-jun flex items-center gap-1">
                        <span className="after:content-['•'] after:mr-1 after:ml-1">
                          Jun 14
                        </span>
                        3 min read <BiSolidStar className="w-2" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PoliticsBusiness;
