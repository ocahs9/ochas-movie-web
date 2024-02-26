import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { API_KEY } from '../api';
function Search()
{
  const { search } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movArr, setMovArr] = useState([]);

  
}

const getMovies = () => {
  for (let i = 1; i <= 100; i++) {
    setLoading(true);
    setMovies([]);
    fetch(`https://api.themoviedb.org/3/movie/changes?page=${i}&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
  }
  setLoading(false);
}