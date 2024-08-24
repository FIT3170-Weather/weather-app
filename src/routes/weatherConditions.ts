export const WeatherConditions = {
    CLEAR : "clear",
    FEW_CLOUD: "few-cloud",
    SCATTERED_CLOULD:"scattered-cloud",
    BROKEN_CLOUD: "broken-cloud",
    LIGHT_RAIN : "light-rain",
    MODERATE_RAIN : "moderate-rain",
    THUNDER_STORM : "thunder-storm",
}

export function getWeatherConditionImage(condition: string) : string {
    switch (condition) {
        case WeatherConditions.CLEAR:
            return "../../src/lib/images/sun.png";
        case WeatherConditions.FEW_CLOUD:
            return "../../src/lib/images/weather-3d-icon.png";
        case WeatherConditions.LIGHT_RAIN:
            return "../../src/lib/images/rain.png";
        case WeatherConditions.MODERATE_RAIN:
            return "../../src/lib/images/storm.png";
        case WeatherConditions.THUNDER_STORM:
            return "../../src/lib/images/thunder.png";
        case WeatherConditions.BROKEN_CLOUD:
            return "../../src/lib/images/dark.png";
        case WeatherConditions.SCATTERED_CLOULD:
            return "../../src/lib/images/cloud.png";
        default:
            return "../../src/lib/images/weather-3d-icon.png";
    }
}