/**
 * HTTP GET request to obtain daily forecasts (up to 7 days),
 * For all locations within Malaysia.
 * 
 * Uses Malaysian government's OpenAPI API.
 * 
 * OpenAPI documentation:
 * https://developer.data.gov.my/realtime-api/weather
 * 
 * @returns Daily forecasts in JSON representation.
 */
export const GET = async () => {

    const API_ENDPOINT = `https://api.data.gov.my/weather/forecast?`;
    const result = await fetch(API_ENDPOINT)
    const weatherData = await result.json() 

    return new Response(JSON.stringify(weatherData), {status: 200})
};