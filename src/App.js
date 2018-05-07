import React, {Component} from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const apiKey = "41e522d8a2bafc865eff766585c5ab5f"

class App extends Component{
    state ={
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
    }
    getWeather = async (e) => {
        e.preventDefault(); //prevent default behaviout of app component when the button is pressed
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
        const newData = await apiCall.json();
        console.log(newData)
        this.setState({
            temperature:newData.main.temp,
            city:newData.name,
            country:newData.sys.country,
            humidity:newData.main.humidity,
            description:newData.weather[0].description,
        })

    }

    render()
    {
        return(
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                />
            </div>
        );
    }
};

export default App;