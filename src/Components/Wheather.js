import React, { useState, useEffect ,useRef} from 'react'
import Main from './Main';
import Wheatherdata from './Wheatherdata';

function Wheather() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const city=useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`http://api.weatherapi.com/v1/current.json?key=cc648bc162764de9a7b124243211910&q=Delhi&aqi=no`)
                .then(res => res.json())
                .then(result => {
                    setData({name:result.location.name,temp:result.current.temp_c})
                });
        }
        fetchData();
    }, [lat, long])

    const addweather=async()=>{
        
        const cityname=city.current.value;
    if(cityname!=""){
        await fetch(`http://api.weatherapi.com/v1/current.json?key=cc648bc162764de9a7b124243211910&q=${cityname}&aqi=no
        `)
                .then(res => res.json())
                .then(result => {
                    setData({name:result.location.name,temp:result.current.temp_c})
                });
                
    }
}

    return (
        <div>
            <Main />
            <form className="form-inline m-4">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={city}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={addweather} >Search</button>
            </form>
            {

                <Wheatherdata weatherData={data} />
            
            }
        </div>
    )
}

export default Wheather
