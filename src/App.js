import React from "react";
import ReactDOM  from "react-dom/client";

//Importing the components here
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);






