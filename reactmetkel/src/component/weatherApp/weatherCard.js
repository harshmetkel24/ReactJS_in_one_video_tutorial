import React, { useState, useEffect } from 'react';

const WeatherCard = ({
    temp,
    pressure,
    humidity,
    weatherMood,
    country,
    sunrise,
    sunset,
    city,
    speed,
}) => {
    // now here one thing to note is that weather may be changing, so in order to give the correct images we need one more state variable

    const [weatherState, setWeatherState] = useState(weatherMood);
    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case 'Clouds':
                    setWeatherState('wi-day-cloudy');
                    break;
                case 'Haze':
                    setWeatherState('wi-fog');
                    break;
                case 'Clear':
                    setWeatherState('wi-day-sunny');
                    break;
                case 'Mist':
                    setWeatherState('wi-cloudy-gusts');
                    break;
                default:
                    setWeatherState('wi-day-sunny');
                    break;
            }
        }
    }, [weatherMood]);
    let seconds = sunset;
    let date = new Date(seconds * 1000);
    let timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
        date.getHours() > 0 && date.getHours() < 12 ? 'am' : 'pm'
    }`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherMood}</div>
                        <div className="place">
                            {city}, {country}
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={`wi ${weatherState}`}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeString} <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-raindrop"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-wind-beaufort-0"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default WeatherCard;
