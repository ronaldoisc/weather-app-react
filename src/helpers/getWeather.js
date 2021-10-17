
export const getWeather =async (placeText) => {
   
     
        const response = await fetch(`http://api.weatherstack.com/current?access_key=757b249e342efe42f0446d92194588fe&query=${placeText || 'Mexico'}`);
        const weatherJson = await response.json();
        const { location, current } = weatherJson;

        return {
            location: location.name,
            temperature: current.temperature,
            image: current.weather_icons[0],
            description: current.weather_descriptions[0]

        }
}
