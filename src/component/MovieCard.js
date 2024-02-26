import {Link} from "react-router-dom";
import styles from "./MovieCard.module.css"

function MovieCard({movieID, title, poster_path, year, vote_avg})
{
  return (
    <Link to ={`/movie/${movieID}`}>
      <img className = {styles.img_style} src={`${poster_path}`}/>
      <div>
        <p>{title.length > 20 ? `${title.slice(0,20)}...` : title}</p>
        <h5>{year ? year : "Unknown"}</h5>
        <h5>{`Rating: ${vote_avg}`}</h5>
      </div>
    </Link>
  )
}

export default MovieCard;