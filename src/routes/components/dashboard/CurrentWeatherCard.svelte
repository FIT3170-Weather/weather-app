<script lang="ts">
    export let currentWeatherData;
    // console.log(currentWeatherData)

    let location = `${currentWeatherData.name}, Malaysia`; // Default
    // let temperature = "32"; // Default
    // let feelTemperature = "40"; // Default

    function convertEpochToLocalTime(epochTime : any) {
        // Convert epoch time to milliseconds
        var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
        date.setUTCSeconds(epochTime);

        // Get hours and minutes separately
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // Convert hours to 12-hour format
        let meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)

        // Add leading zero to minutes if needed
        let minutesString = minutes < 10 ? '0' + minutes.toString() : minutes;

        // Construct the formatted time string
        let localTime = `${hours}:${minutesString} ${meridiem}`;

        return localTime;
    }

    function capitalizeFirstLetter(string : any) {
        if (string.length === 0) {
            return string; // Handle empty string case
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

</script>

<div class="flex-col space-y-5 m-5">
    <div class="flex-col space-y-1.5">
        <!-- Location -->
        <div class="flex justify-center max-sm:text-center p-2">
            <h2>
                <span class="font-normal text-2xl ">
                    {location}
                </span>
            </h2>
            <span>
        </div>
        <!-- Weather image -->
        <div class="flex justify-center">
            <img class="object-cover w-40 max-sm:w-32" src="../../src/lib/images/weather-3d-icon.png" alt="logo">
        </div>
        <!-- Temperature -->
        <div class="flex justify-center">
            <h1>
                <span class="font-extrabold text-6xl max-sm:text-[50px]">
                    {Math.round(currentWeatherData.main.temp)}<sup class="text-4xl max-sm:text-[30px]">°C</sup>
                </span>
            </h1>
        </div>
        <!-- Descriptors -->
        <div class="flex flex-wrap justify-center space-x-1.5">
           
           <!-- api data -->
            {#each currentWeatherData.weather as weather}
                <div class="badge badge-primary">{capitalizeFirstLetter(weather.description)}</div>
            {/each}

            <!-- dummy data
            <div class="badge border-none custom-container text-error-content text-lg p-4">Gentle Breeze</div> -->
        </div>
        
        <div class="flex justify-center">
            <p class="font-extralight text-lg">Feels like {Math.round(currentWeatherData.main.feels_like)}°C</p>
        </div>
    </div>
    
    <!-- Weather Statistics -->
    <div class="flex flex-col justify-center gap-3 max-sm:flex-row">
        <!-- humidity, wind, pressure -->
        <div class="flex items-center gap-y-3 sm:space-x-5 max-sm:flex-col">
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 gap-2 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px]">Humidity</div>
                    <div class="stat-value place-self-center text-xl max-sm:text-[13px]">{currentWeatherData.main.humidity}%</div>
                </div>
            </div>
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 gap-2 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px]">Wind</div>
                    <div class="stat-value place-self-center text-xl max-sm:text-[13px]">{currentWeatherData.wind.speed}m/s</div>
                </div>
            </div>
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 gap-2 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px]">Pressure</div>
                    <div class="stat-value place-self-center text-xl max-sm:text-[13px]">{currentWeatherData.main.pressure}hPa</div>
                </div>
            </div>
        </div>
        <!-- visibility, temperature, sun -->
        <div class="flex items-center gap-y-3 sm:space-x-5 max-sm:flex-col">
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 gap-2 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px]">Visibility</div>
                    <div class="stat-value place-self-center text-xl max-sm:text-[13px]">{currentWeatherData.visibility}m</div>
                </div>
            </div>
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px] max-sm:h-5">Temperature</div>
                    <div class="stat-title text-error-content place-self-center text-xl max-sm:text-[11px] max-sm:h-5">Max <span class="stat-value text-xl text-error-content max-sm:text-[11px]">{Math.round(currentWeatherData.main.temp_max)}°C</span></div>
                    <div class="stat-title text-error-content place-self-center text-xl max-sm:text-[11px] max-sm:h-5">Min <span class="stat-value text-xl text-error-content max-sm:text-[11px]">{Math.round(currentWeatherData.main.temp_min)}°C</span></div>
                </div>
            </div>
            <div class="stats stats-bg shadow w-40 h-28 max-sm:w-20 max-sm:h-20">
                <div class="stat flex flex-col p-0 justify-center">
                    <div class="stat-title text-error-content place-self-center opacity-80 text-lg max-sm:text-[10px] max-sm:h-5">Sun</div>
                    <div class="stat-title text-error-content place-self-center text-xl max-sm:text-[8px] max-sm:h-5">Rise: <span class="stat-value text-xl text-error-content max-sm:text-[11px]">{convertEpochToLocalTime(currentWeatherData.sys.sunrise)}</span></div>
                    <div class="stat-title text-error-content place-self-center text-xl max-sm:text-[8px] max-sm:h-5">Set: <span class="stat-value text-xl text-error-content max-sm:text-[11px]">{convertEpochToLocalTime(currentWeatherData.sys.sunset)}</span></div>
                </div>
            </div>
        </div>
    </div>
</div>