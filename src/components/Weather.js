import React, { Component } from "react";

class Weather extends Component{
    render(){
        return(
            <div>
                {this.props.weatherCity && this.props.weatherCountry && <p>Location: {this.props.locationCity}, {this.props.locationRegionName}, {this.props.locationCountry}, {this.props.locationCountryCode}</p>}    
                {this.props.weatherTemperature && <p>Temperature: {this.props.weatherTemperature} C</p>}
                {this.props.weatherHumidity && <p>Humidity: {this.props.weatherHumidity} %</p> }
                {this.props.weatherDescription && <p>Description: {this.props.weatherDescription}</p>} 
            </div>


        );


    }
}
export default Weather;