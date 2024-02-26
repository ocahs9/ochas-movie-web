import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; //modules를 붙여야 구현이 됨
import { IMAGE_BASE_URL } from "../api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./MainSlide.module.css"
function MainSlide({movies, group, name})
{
  return (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
		spaceBetween={0}
		slidesPerView={1}
		navigation = {{ clickable: true }}
		pagination={{ clickable: true }}
		loop={true}
		autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
  >
    {movies && movies.slice(0,7).map((movie)=> (
      <div className={styles.main_slide}>
        <SwiperSlide key={movie.id}>
        <div className={styles.slide_card}>
          <Link to={`/movie/${movie.id}`}>
            <img className = {styles.slide_img}src={`${IMAGE_BASE_URL}original${movie.backdrop_path}`}/>
          </Link>
        </div>
        <div className={styles.slide_text}>
          <Link to ={`/page/${group}`}>
            <h1 className={styles.group_name}>{`${name}`}</h1>
          </Link>
          <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
          <p className={styles.endl}>{movie.overview.length > 60 ? `${movie.overview.slice(0,60)} ...` : movie.overview}</p>
        </div>
      </SwiperSlide>
      </div>
      
    ))}    
  </Swiper>
  );
}

export default MainSlide;