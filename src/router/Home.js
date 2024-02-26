import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_PATH } from "../api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import MainSlide from "../component/MainSlide";
import Slide from "../component/Slide"
import Navbar from "../component/Navbar";

import styles from "./Home.module.css";


function Home(){
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  
  

  const getPopularMovies = async() => {
    const json = await(
      await fetch(`${BASE_PATH}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
    ).json();
    setPopularMovies(json.results);
    setLoading(false);
  }

  const getTopRatedMovies = async() => {
    const json = await(
      await fetch(`${BASE_PATH}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
    ).json();
    setTopRatedMovies(json.results);
    setLoading(false);
  }

  const getUpcomingMovies = async() => {
    const json = await(
      await fetch(`${BASE_PATH}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
    ).json();
    setUpcomingMovies(json.results);
    setLoading(false);
  }

  useEffect(()=> {
    setLoading(true);
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  console.log(popularMovies, topRatedMovies, upcomingMovies);
  
  return (
  <div>
    {loading ? (<span className={styles.loadIcon}><FontAwesomeIcon icon={faSpinner} spin size="5x"/></span> )
    : (
      <div>
        <span className={styles.main_slide}><MainSlide movies = {popularMovies} group={"popular"} name={`Popular`}></MainSlide></span>
        
        <Slide movies = {popularMovies} group={"now_playing"} name={`Now-Playing`}/>
        <Slide movies={topRatedMovies} group={"top_rated"} name={`Top-Rated`}/>
        <Slide movies={upcomingMovies} group={"upcoming"} name={`Upcoming`}/>
      </div>
    )
    }
    
  </div>
  );
}

export default Home;