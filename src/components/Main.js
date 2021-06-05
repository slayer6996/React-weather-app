import React, { useEffect, useState } from 'react'
import './css/style.css'

function Main(){
    
    const [city,setCity]=useState(null)
    const [search,setSearch]=useState('Delhi')

    useEffect( () => {
        const fetchApi = async () => {
            const url='http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=metric&appid=' + apiKey
            const response=await fetch(url)
            const resJson= await response.json()
            setCity(resJson.main)
        }

        fetchApi()
    }, [search])

    return(
        <>
            <div className="box">

                <div className="inputData">
                    <input 
                    className="inputField"
                    type="search" 
                    value={search}
                    onChange={ (event) => {
                        setSearch(event.target.value)
                    } } />
                </div>

                {!city ?(
                    <p className="errorMsg">Invalid location</p>
                ): (
                    <div>
                        <div className="info">
                            <h2 className="location">{search}</h2>
                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            <h3 className="tempmin_max">
                                Feels like {city.feels_like}°C
                            </h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                ) }

                
            </div>

            
        </>
    )
}

export default Main