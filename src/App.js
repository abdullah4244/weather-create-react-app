import React from 'react';
import './App.css';
import Rightscreen from './components/Rightscreen';
import Leftscreen from './components/Leftscreen';
import axios from 'axios';
import API_KEY from './apis/weatherapi';

class App extends React.Component {

  state = {
    location:"",
    temp : undefined,
    description:"",
    icon:"",
    status:false

  }

  onSearchSubmit= async (city,country)  => {
    const URL = (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    let response = await axios.get(URL);
    
        if(city && country) {
          this.setState({
            location: response.data.name,
            temp: response.data.main.temp-273.4,
            description: response.data.weather[0].description,
            icon:response.data.weather[0].icon,
             status:true
          })
        }
        console.log(this.state);
        }

  render() {



    return (

      <div className='App'>
    <h1 className='heading-primary'>Weather App</h1>
    <h2 className='heading-secondary'>By Abdullah Islam</h2>
    <div className='container'>
      <Leftscreen status ={this.state.status} icon={this.state.icon} temp={this.state.temp} />
      <Rightscreen onSearchSubmit = {this.onSearchSubmit}  />
    </div>
      </div>
    )}
}
export default App;
