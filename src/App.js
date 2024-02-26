import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./router/Home";
import Detail from "./router/Detail";
import Search from "./router/Search";
import Group from "./router/Group";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/movie/:id"} element={<Detail/>}/>
        <Route path={"/search/:search"} element={<Search/>}/>
        <Route path={"/page/:group/:page"} element={<Group/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
