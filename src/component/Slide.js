import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; //modules를 붙여야 구현이 됨
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { IMAGE_BASE_URL } from "../api";
//swiper 기본 css -> 이게 있어야 움직이는거나.. 그런 것들이 구현됨
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slide.module.css"


function Slide({movies, group, name})
{
  return (
    <div className={styles.slide}>
      <div>
        <h3><Link to={`/page/${group}`}>{`${name}`}</Link></h3>
      </div>

      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={0}
			slidesPerView={4}
			navigation = {{ clickable: true }}
			pagination={{ clickable: true }}
			loop={true}
			autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
    >
      {movies && movies.slice(0, 10).map((movie) =>(
        <SwiperSlide key={movie.id}>
          <MovieCard 
            movieID={movie.id}
            title={movie.title}
            poster_path={`${IMAGE_BASE_URL}original${movie.poster_path}`}
            year={movie.release_date}
            vote_avg={movie.vote_average}
          />
        </SwiperSlide>
      )
      )}
      

    </Swiper>
    </div>
    
  );
}

export default Slide;