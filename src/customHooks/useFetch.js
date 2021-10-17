import { useEffect, useState } from 'react'

import {getWeather} from '../helpers/getWeather';



export const useFetch = (place) => {
    const [state, setstate] = useState({
        loading: true,
        data: {}
    })
    
   
    useEffect(() => {
        setstate({
            loading:true,
            data:{}
        })

        getWeather(place).then(weather => {
            setstate({
                loading: false,
                data: weather
            })
        });


    },[place])

    return state;
}
