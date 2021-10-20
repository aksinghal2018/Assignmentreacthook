import React from 'react';
import moment from 'moment';
import '../styles.css'
import Main from './Main';
const Wheatherdata = ({ weatherData }) => (
    <>
        <div className="main m-4">
            <p className="header">{weatherData.name}</p>
            <div>
                <p className="day">Day: {moment().format('dddd')}</p>
            </div>

            <div>
                <p className="temp">Temprature: {weatherData.temp} &deg;C</p>
            </div>

        </div>
    </>
)

export default Wheatherdata;