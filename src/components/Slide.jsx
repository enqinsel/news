import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Content from "./Content";

import { getNews } from "../api.js";
import { useEffect, useState } from "react";


function Slide() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };


      const [newsData, setNewsData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          const data = await getNews();
          setNewsData(data);
        };
        fetchData();
      }, []);
    
  return (
    <Slider {...settings}>
      {newsData.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
          <Content
          imgUrl={item.image}
          name={item.name}
          description={item.description}
          source={item.source}
        ></Content>
        </a>
      ))}
    </Slider>
  );
}

export default Slide