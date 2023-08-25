import {LOGO_URL} from "../utils/constants";
import {useState , useEffect} from "react"

const Header = () => {
  
  const [btnName , setBtnName] = useState("Login");

  console.log("Header Called");

  useEffect(()=>{
    console.log("useEffect Called");
  },[]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            (btnName==="Login") ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName); //For Self Analysis
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
