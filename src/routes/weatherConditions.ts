export const WeatherConditions = {
    CLEAR : "clear",
    LIGHT_RAIN :  "light-rain",
    MODERATE_RAIN : "moderate-rain",
    HEAVY_RAIN : "heavy-rain",
}

export function getWeatherConditionImage(condition: string) : string {
    switch (condition) {
        case WeatherConditions.CLEAR:
            return "../../src/lib/images/weather-3d-icon.png";
        case WeatherConditions.LIGHT_RAIN:
            return "../../src/lib/images/rain.png";
        case WeatherConditions.MODERATE_RAIN:
            return "../../src/lib/images/storm.png";
        case WeatherConditions.HEAVY_RAIN:
            return "../../src/lib/images/thunder.png";
        default:
            return "../../src/lib/images/weather-3d-icon.png";
    }
}