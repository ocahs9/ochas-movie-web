import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
function Navbar()
{
  return (
    <div className={styles.container}>
      <Link className={styles.page_name} to={"/"}>Ochas Movie</Link>
      <div className={styles.group_name}>
        <Link className={styles.group_link} to={`/page/popular`}>Popular</Link>
        <Link className={styles.group_link} to={`/page/now_playing`}>Now-Playing</Link>
        <Link className={styles.group_link} to={`/page/top_rated`}>Top-Rated</Link>
        <Link className={styles.group_link} to={`/page/up_comming`}>Upcoming</Link>
      </div>
    </div>
  );
}

export default Navbar;