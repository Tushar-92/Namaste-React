import {LOGO_URL} from "../utils/constants";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  
  const [btnName , setBtnName] = useState("Login");
  
  const onlineStatus = useOnlineStatus();

  console.log("Header Called"); //For Self Analysis

  useEffect(()=>{
    console.log("useEffect Called");
  },[]);

  return (
    <div className="flex justify-between shadow-lg bg-pink-50 m-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus === true ? "☑️" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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
