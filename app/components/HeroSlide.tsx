import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Article } from "~/types";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HeroSlide =({projects})=>{
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {projects.map((article) => (
        <SwiperSlide key={article.id}>
          <div className="slide-content">
            <h2>{article.title}</h2>
            {"image" in article ? (
              <div className="w-full max-h-[500px] flex items-center justify-center overflow-hidden">
                <img className="h-full w-auto object-cover" src={article.image} alt={article.title} />


              </div>
              
            ) : null}
            <p>{article.description}</p>
          </div>
        </SwiperSlide>
      ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
/* ---- ΠΑΡΑΤΗΡΗΣΗ ----
    Το slider θα εμφανιση όλα τα object που εχει το fetch αν θελουμε να το περιορισουμε 
    βαζουμε ενα απο τα παρακατω

    Μόνο τα πρώτα 3 άρθρα:
{projects.slice(0, 3).map((article) => ( ... ))}


Μόνο άρθρα κατηγορίας "technology":
{projects.filter(a => a.category === "technology").map((article) => ( ... ))}


Τυχαία 5 άρθρα:
{projects
  .sort(() => 0.5 - Math.random())
  .slice(0, 5)
  .map((article) => ( ... ))}


*/
export default HeroSlide