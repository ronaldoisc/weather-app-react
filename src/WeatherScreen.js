import React, { useState } from 'react'
import { AddPlace } from './Components/AddPlace';
import { WeatherInfo } from './Components/WeatherInfo';

export const WeatherScreen = () => {
    const [place, setplace] = useState();


    return (
        <div className="w-full ">
            <div className="bg-blue-600  h-screen flex flex-column items-center">
                <div className="container-fluid mx-auto ">
                    <AddPlace setplace={setplace} />
                    <WeatherInfo place={place} />

                </div>



            </div>
        </div>

    )
}
