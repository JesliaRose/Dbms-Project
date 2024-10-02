import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Your Home Away from Home, Just a Click Away!
          </h1>
          <p>
            Welcome to Hostel & PG Finder - your ultimate destination for
            finding the perfect PG or hostel! Whether you're a student, working
            professional, or traveler, we make it easy to discover affordable
            and comfortable stays tailored to your needs. Your hassle-free
            living experience starts here!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <img src="/globe-earth.png" alt="" width={30} />
              <br />
              <span>Explore Options Across</span>
              <br />
              <span>Multiple Cities</span>
            </div>
            <div className="box">
            <img src="/telephone.png" alt="" width={30} />
              <br />
              <span>24/7 Support for a</span>
              <br />
              <span>Hassle-Free Experience</span>
            </div>
            <div className="box">
            <img src="/discount.png" alt="" width={30} />
              <br />
              <span>Unlock the Best</span>
              <br />
              <span>Accommodation Deals</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg1.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
