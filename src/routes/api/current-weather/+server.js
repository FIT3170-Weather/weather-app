import { OPENWEATHERMAP_API_KEY } from '$env/static/private'; // Your key should be placed in .env file in root directory with the same variable name

/**
 * HTTP GET request to obtain current weather information
 *
 *
 * Uses OpenWeather's API.
 *
 * OpenWeather documentation:
 * https://openweathermap.org/current
 *
 * @returns Current weather in JSON representation.
 */
export const GET = async () => {
	// const API_ENDPOINT = `https://forecast-api.openweathermap.org/data/2.5/weather?lat=3.051487&lon=101.5823339&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
	const result = await fetch(API_ENDPOINT);
	const currentWeatherData = await result.json();

	return new Response(JSON.stringify(currentWeatherData), { status: 200 });
};
