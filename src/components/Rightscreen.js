import React from 'react';
import './Rightscreen.css'
class Rightscreen extends React.Component {
state = {
    city : "",
    country: ""
}
Citychangehandler = (event) => {
    this.setState({
        city :event.target.value
    })
  
}
Countrychangehandler = (event) => {
    this.setState({
        country :event.target.value
    })
   
}
onFormSubmit = (event) => {
event.preventDefault();
this.props.onSearchSubmit(this.state.city,this.state.country);
}
    render() {

        return(
            <div className="Rightscreen">
              
              <form onSubmit = {this.onFormSubmit}>
                  <input type="text" value={this.state.city} onChange={this.Citychangehandler} placeholder="Enter City"></input>
                  <input type="text" value={this.state.country} onChange={this.Countrychangehandler} placeholder="Enter Country"></input>
                  <button type="submit" className='btn'>Click</button>
                  
              </form>
            </div>
        )
    }
}

export default Rightscreen;