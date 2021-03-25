import React from 'react';
import './Leftscreen.css';
const Leftscreen = (props) => {

return (

    <div className="Leftscreen">
       {props.status ? 
       
       <div className="wrapper">
         <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="weather image" />
         <h1>{Math.round(props.temp)} Celcius </h1>
         </div>
         :null
    
    }

    </div>
)}

export default Leftscreen;