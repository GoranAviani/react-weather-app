import React, {Component} from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const apiKeyWeather = "3bc16a7ffe748312a4469d64e749de4a"

class App extends Component{
    state ={
        weatherTemperature:undefined,
        weatherCity:undefined,
        weatherCountry:undefined,
        weatherHumidity:undefined,
        weatherDescription:undefined,
        locationRegionName:undefined,
        locationCountryCode:undefined,
    }
    getWeather = async (varLocCity, varLocCountry) => {
        //console.log(varLocCity)
        const apiWeatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${varLocCity},${varLocCountry}&appid=${apiKeyWeather}&units=metric`);
        const weatherData = await apiWeatherCall.json();
        //console.log(weatherData)
        this.setState({
            weatherTemperature:weatherData.main.temp,
            weatherCity:weatherData.name,
            weatherCountry:weatherData.sys.country,
            weatherHumidity:weatherData.main.humidity,
            weatherDescription:weatherData.weather[0].description,
        })
    }

    getLocation = async (e) =>{
        e.preventDefault(); //prevent default behaviout of app component when the button is pressed
        const apiLocationCall = await fetch (`http://ip-api.com/json`);
        const locationData = await apiLocationCall.json();
        //console.log(locationData)

        this.setState({
            locationRegionName:locationData.regionName,
            locationCountryCode:locationData.countryCode,
            locationCountry:locationData.country,
            locationCity:locationData.city,
        })

        //These two are needen for getting weather
        const varLocCity = locationData.regionName;
        const varLocCountry = locationData.countryCode; 

        this.getWeather(varLocCity, varLocCountry);
    }
    
    render()
    {
        return(
            <div className="col-md-4 offset-md-4">
                <Titles/>
                <Form getLocation={this.getLocation}/>
                <Weather 
                weatherTemperature={this.state.weatherTemperature}
                weatherCity={this.state.weatherCity}
                weatherCountry={this.state.weatherCountry}
                weatherHumidity={this.state.weatherHumidity}
                weatherDescription={this.state.weatherDescription}

                locationRegionName={this.state.locationRegionName}
                locationCity={this.state.locationCity}
                locationCountryCode={this.state.locationCountryCode}
                locationCountry={this.state.locationCountry}
                />
            </div>
        );
    }
};

export default App;