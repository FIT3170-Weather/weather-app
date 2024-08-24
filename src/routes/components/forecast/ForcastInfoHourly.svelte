<script>
	import { getWeatherConditionImage } from "../../weatherConditions";
	import { WeatherConditions } from "../../weatherConditions";


    export let time = "10pm";
    export let temp = "20°C";
    export let message = "Real Feel";
    export let real_feel_temp = "20°C";
    export let condition = ["hi", "No"]
    export let weather_condition = WeatherConditions.CLEAR
     
</script>

<div class= "p-4 space-y-3 w-full text-white">
    <div class= "flex flex-col justify-center items-center mb-2">
        <div class="text-2xl mb-2 font-bold">{time}</div>
        <img src={getWeatherConditionImage(weather_condition)} alt = "logo" class =" h-20"/>
        <div class="text-2xl font-bold">{temp}</div>
    </div>
    
    <div class="flex justify-center items-center align-center space-x-6 ">
        {#each condition as item}
        <div class = "custom-container w-32 h-auto rounded-lg" >
            <div class="text-center my-1 ">{item}</div>
        </div>
        {/each}
    </div>
    <div class="text-center text-xl font-extralight">{message} {real_feel_temp}</div>
</div>


