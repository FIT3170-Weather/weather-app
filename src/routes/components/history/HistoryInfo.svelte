<script lang="ts">
    export let day = "10pm";
    export let date = "5/6";
    export let message = "Real Feel";
    export let temp = "29°C";
    import { getWeatherConditionImage } from "../../weatherConditions";
	import { WeatherConditions } from "../../weatherConditions"; 

    function getWeatherConditionImages (weather_description: string): any {
        switch (weather_description) {
            case "Clear sky": return getWeatherConditionImage(WeatherConditions.CLEAR);
            case "Partly clouds":return getWeatherConditionImage(WeatherConditions.FEW_CLOUD);
            case "Overcast": return getWeatherConditionImage(WeatherConditions.SCATTERED_CLOULD);
            case "Broken clouds":return getWeatherConditionImage(WeatherConditions.BROKEN_CLOUD);
            case "Slight rain shower": return getWeatherConditionImage(WeatherConditions.LIGHT_RAIN);
            case "Moderate rain shower": return getWeatherConditionImage(WeatherConditions.MODERATE_RAIN);
            case "Thunderstorm": return getWeatherConditionImage(WeatherConditions.THUNDER_STORM);
            case "Fog": return getWeatherConditionImage(WeatherConditions.FOG);
            default: return getWeatherConditionImage(WeatherConditions.CLEAR);
        }
    }
</script>
<div class=" text-white space-y-2 w-full h-full flex flex-col justify-center items-center">
    <div class= "grid grid-cols-8 items-center justify-center">
        <div class= "col-span-2 ">
            <div class="text-4xl font-bold text-center">{day} </div>
            <div class="text-4xl font-extralight text-center">{date} </div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-3 ">
            <img src={getWeatherConditionImages(message)} alt ="logo" class="  h-40 mx-4"/>
            <div class="text-2xl font-extralight text-center">{message} {temp}</div>

        </div>
    </div>
  </div>