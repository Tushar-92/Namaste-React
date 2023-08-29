// ! Q). Where will you use this custom hook? 
/** Ans):-- 
 * We will use this custom hook in our Body.js component. 
 * So if the the onlineStatus is true then it will show the available restaurants otherwise, 
 * Body will display nothing i.e only shimmer effect will be there or, 
 * we can also show message to the user that you are offline.
 * 
 * Also isko hum log use karenge in Header. Waha ek green/red light use karenge connection status ko dikhane k lie
 * 
 * ! Aur han confuse mat hona , isko bus ek bar apne Body component me ya har us component me ek bar bus call kar dena hai isko
 * i.e activate kar dena hai. 
 * Uske bad to ye khud apne aap track karta rahega.
*/


import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus; //This will return Boolean Value
};

export default useOnlineStatus;
