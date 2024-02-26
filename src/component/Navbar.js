import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
function Navbar()
{
  return (
    <div className={styles.container}>
      <div className={styles.page_name}>
        <Link to={"/"}>Ochas Movie</Link>
      </div>
      <div className={styles.group_name}>
        <span className={styles.group_link}><Link to={`/page/popular`}>Popular</Link></span>
        <span className={styles.group_link}><Link to={`/page/now_playing`}>Now-Playing</Link></span>
        <span className={styles.group_link}><Link to={`/page/top_rated`}>Top-Rated</Link></span>
        <span className={styles.group_link}><Link to={`/page/up_comming`}>Upcoming</Link></span>
      </div>
    </div>
  );
}

export default Navbar;