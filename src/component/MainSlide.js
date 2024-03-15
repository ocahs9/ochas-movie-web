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
    className={styles.swiper}
    modules={[Navigation, Pagination, Autoplay]}
		spaceBetween={0}
		slidesPerView={1}
		navigation = {{ clickable: true }}
		pagination={{ clickable: true }}
		loop={true}
		autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
  >

    {/*className 적재적소에 잘 넣어주기. 글자 바꾸고 싶으면 해당 부분에 딱 클래스 이름을
    넣어주어야지 그냥 Link에 모든 className을 넣어둔다고 해서 전부 제대로 적용되는 게 아님*/}
    {movies && movies.slice(0,7).map((movie)=> (
        <SwiperSlide key={movie.id}>
          <div className={styles.slide_card}>
            <Link className={styles.link} to={`/movie/${movie.id}`}>
              <img className = {styles.slide_img} src={`${IMAGE_BASE_URL}original${movie.backdrop_path}`}/>
            </Link>
          </div>
          <div className={styles.slide_text}>
            <Link className={styles.link} to ={`/page/${group}`}>
              <h1 className={`${styles.group_name}`}>{`${name}`}</h1>
            </Link>
            <Link className={`${styles.link}`} to={`/movie/${movie.id}`}>
              <h2 className={styles.movie_name_link}>{movie.title}</h2>
            </Link>
            <p className={styles.endl}>{movie.overview}</p>
            {/* JS로 자를 수 있지만 나는 CSS를 활용함. movie.overview.length > 60 ? `${movie.overview.slice(0,60)} ...` : */}
          </div>
        </SwiperSlide>
    ))}    
  </Swiper>
  );
}

export default MainSlide;