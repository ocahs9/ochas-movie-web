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
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  
  const getNowPlayingMovies = async() => {
    const json = await(
      await fetch(`${BASE_PATH}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`)
    ).json();
    setNowPlayingMovies(json.results);
    setLoading(false);
  }

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
    getNowPlayingMovies();
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
        <MainSlide className={styles.main_slide} movies = {popularMovies} group={"popular"} name={`Popular`}></MainSlide>
        <div><Slide movies = {nowPlayingMovies} group={"now_playing"} name={`Now-Playing`}/></div>
        <div><Slide movies={topRatedMovies} group={"top_rated"} name={`Top-Rated`}/></div>
        <div><Slide movies={upcomingMovies} group={"upcoming"} name={`Upcoming`}/></div>
      </div>
    )
    }
    
  </div>
  );
}

export default Home;