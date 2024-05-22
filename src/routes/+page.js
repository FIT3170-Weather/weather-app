/**
 * Invokes GET request in '/routes/api/current-weather/+server.js'
 * See /routes/api/current-weather/+server.js for more information.
 * 
 * @returns API response as array
 */
export const load = async ({ fetch }) => {
    const fetchCurrentWeather = async () => {
        const result = await fetch('/api/current-weather')
        const data = await result.json()
        return data
    }

    // Ensure Promise is returned as an array
    // So that the response can be treated as an iterable
    const currentWeatherData = await fetchCurrentWeather();

    return {
        currentWeather: currentWeatherData
    }
}