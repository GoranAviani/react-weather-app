import React, { Component } from "react";

class Weather extends Component{
    render(){
        return(
            <div className ="weather_info">
                <h2 className="font-weight-light mb-0">
                    {this.props.weatherCity && this.props.weatherCountry && <p className="weather_text"> Location: {this.props.locationCity}, {this.props.locationRegionName}, {this.props.locationCountry}, {this.props.locationCountryCode}</p>}
                    {this.props.weatherTemperature && <p>Temperature: {this.props.weatherTemperature} C</p>}
                    {this.props.weatherHumidity && <p>Humidity: {this.props.weatherHumidity} %</p> }
                    {this.props.weatherDescription && <p>Description: {this.props.weatherDescription}</p>}
                </h2>
            </div>
                //If there is someting && this, then show it

        );


    }
}
export default Weather;