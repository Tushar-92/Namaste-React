import {LOGO_URL} from "../utils/constants";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () => {
  
  const [btnName , setBtnName] = useState("Login");

  console.log("Header Called"); //For Self Analysis

  useEffect(()=>{
    console.log("useEffect Called");
  },[]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName); //For Self Analysis
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
