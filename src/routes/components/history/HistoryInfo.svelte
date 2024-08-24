<script lang="ts">
    export let day = "10pm";
    export let date = "5/6";
    export let message = "Real Feel";
    export let temp = "29°C";
    import { getWeatherConditionImage } from "../../weatherConditions";
	import { WeatherConditions } from "../../weatherConditions";
    
    
    let clear_sky_description = ["Partly clouds","Mostly clear"];
    let few_cloud_description = ["Partly clouds","Mostly clear"];
    let scattered_cloud_description = ["Overcast"];
    let broken_cloud_description = ["Broken clouds"];
    let light_rain_description = ["Slight rain shower","Light drizzle","Slight rain","Slight rain","Light freezing drizzle","Light freezing rain"];
    let moderate_rain_description = ["Moderate rain shower","Moderate drizzle","Moderate rain","Dense freezing drizzle","Heavy freezing rain"];
    let thunder_storm_description = ["Thunderstorm","Dense drizzle","Heavy rain","Violent rain shower"];
    let fog_description = ["Fog"];

    function getWeatherConditionImages (weather_description: string): any {
        if (clear_sky_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.CLEAR);
        }
        else if (few_cloud_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.FEW_CLOUD);
        }
        else if (scattered_cloud_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.SCATTERED_CLOULD);
        }
        else if (broken_cloud_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.BROKEN_CLOUD);
        }
        else if (light_rain_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.LIGHT_RAIN);
        } 
        else if (moderate_rain_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.MODERATE_RAIN);
        }  
        else if (thunder_storm_description.includes(weather_description)) {
            return getWeatherConditionImage(WeatherConditions.THUNDER_STORM);
        }
        else if (fog_description.includes(weather_description)){
            return getWeatherConditionImage(WeatherConditions.FOG);
        } 
        else {
            return getWeatherConditionImage(WeatherConditions.CLEAR);
        }      
    }
</script>

<div class=" text-white space-y-2 w-full h-full flex flex-col justify-center items-center">
    <div class= "grid grid-cols-2 items-center justify-center">
        <div class= "col-span-1 ">
            <div class="text-4xl font-bold text-center">{day} </div>
            <div class="text-4xl font-extralight text-center">{date} </div>
        </div>
        <div class="col-span-1 ">
            <img src={getWeatherConditionImages(message)} alt ="logo" class="object-contain h-40"/>
        </div>
        <div class="col-span-2">
            <div class="text-2xl font-extralight text-center">{message} {temp}</div>
        </div>
    </div>
</div>