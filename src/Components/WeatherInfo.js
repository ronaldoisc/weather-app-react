import React from 'react'
import { useFetch } from '../customHooks/useFetch';
// import loadingImage from '../assets/loading.gif';

export const WeatherInfo = ({ place }) => {

    const { data, loading } = useFetch(place);

    return (
        <div>

            {/* {loading && <img className="img-fluid mx-auto" src={loadingImage} alt="" />} */}
            {loading && <p>Cargando..</p>}


            <div className="py-5 text-center text-white">
                <h1 className="text-6xl">{data.location}</h1>
                <div className="flex flex-row justify-center items-center">
                    <h1 className="text-7xl my-5 mx-4">{data.temperature != null ? `${data.temperature}°` : ''}</h1>
                    <img src={data.image} alt="" />

                </div>
                <p className="text-2xl text-gray-200">{data.description}</p>

            </div>
        </div>





    )
}
