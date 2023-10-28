import Header from "../Components/Static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Static/Footer";

const Main = () => {
  return (
    <div className="main">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
