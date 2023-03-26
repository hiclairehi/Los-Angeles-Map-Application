import React  from "react";
import { useNavigate } from 'react-router-dom';
import LAMap from "./LAMap"
import Title from "./Title"

function Layout() {
  let navigate = useNavigate();

  return (
    <div>
        <Title />
        <div style = {{textAlign: "center"}}>
          <button onClick={() => {navigate('/CIPData')}}>Capital Improvement Projects Data</button>
          <button onClick={() => {navigate('/EVData')}}>Electric Vehicle Chargers Data</button>
        </div>
        <LAMap />
    </div>
  );
}

export default Layout;
