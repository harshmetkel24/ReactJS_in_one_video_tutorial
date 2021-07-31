import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

const Temperature = () => {
    const [searchVal, setSearchVal] = useState('ahmedabad');
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&&appid=9958df4675be969228f8d5576dcb0a39`;
            const res = await fetch(url);
            const data = await res.json();

            const { temp, pressure, humidity } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { country, sunset, sunrise } = data.sys;
            const { name: city } = data;
            const { speed } = data.wind;

            const myWeatherInfo = {
                temp,
                pressure,
                humidity,
                weatherMood,
                country,
                city,
                sunrise,
                sunset,
                speed,
            };
            // here as we can see that the property-name and property-value both are same => so we can directly write their name to create their objects
            console.log(myWeatherInfo);
            setTempInfo(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    // with the useEffect will work only for one time and that for the first time only
    useEffect(() => getWeatherInfo(), []);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        name=""
                        autoFocus
                        id="search"
                        value={searchVal}
                        placeholder="Search here..."
                        className="searchTerm"
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                    <button
                        className="searchButton"
                        type="button"
                        onClick={() => getWeatherInfo()}
                    >
                        Search
                    </button>
                </div>
                {/* Main card */}
                <WeatherCard {...tempInfo} />
            </div>
        </>
    );
};

export default Temperature;
