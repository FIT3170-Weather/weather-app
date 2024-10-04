export const WeatherConditions = {
    CLEAR : "clear",
    FEW_CLOUD: "few-cloud",
    SCATTERED_CLOULD:"scattered-cloud",
    BROKEN_CLOUD: "broken-cloud",
    LIGHT_RAIN : "light-rain",
    MODERATE_RAIN : "moderate-rain",
    THUNDER_STORM : "thunder-storm",
    FOG: "fog"
}

export function getWeatherConditionImage(condition: string) : string {
    switch (condition) {
        case WeatherConditions.CLEAR:
            return "/images/sun.png";
        case WeatherConditions.FEW_CLOUD:
            return "/images/weather-3d-icon.png";
        case WeatherConditions.LIGHT_RAIN:
            return "/images/rain.png";
        case WeatherConditions.MODERATE_RAIN:
            return "/images/storm.png";
        case WeatherConditions.THUNDER_STORM:
            return "/images/thunder.png";
        case WeatherConditions.BROKEN_CLOUD:
            return "/images/dark.png";
        case WeatherConditions.SCATTERED_CLOULD:
            return "/images/cloud.png";
        case WeatherConditions.FOG:
            return "/images/foggy-day.png";
        default:
            return "/images/weather-3d-icon.png";
    }
}