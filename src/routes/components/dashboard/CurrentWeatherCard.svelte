<script>
    export let currentWeatherData;

    let location = `Subang Jaya, ${currentWeatherData.sys.country}`; // Default
    // let temperature = "32"; // Default
    // let feelTemperature = "40"; // Default

    function convertEpochToLocalTime(epochTime) {
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

    function capitalizeFirstLetter(string) {
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
            <!-- {#each currentWeatherData.weather as weather}
                <div class="badge badge-primary">{capitalizeFirstLetter(weather.description)}</div>
            {/each} -->

            <!-- dummy data -->
            <div class="badge badge-primary text-lg">Gentle Breeze</div>
        </div>
        
        <div class="flex justify-center">
            <p class="font-extralight text-lg">Feels like {Math.round(currentWeatherData.main.feels_like)}°C</p>
        </div>
    </div>
    
    <!-- Weather Statistics -->
    <div class="space-y-5 max-sm:flex-row max-sm:flex max-sm:space-x-5">
        <!-- First Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10 max-sm:space-x-0 max-sm:flex-col max-sm:ml-4">
            <div class="stats shadow max-sm:mt-5">
                <div class="stat w-40 h-28 text-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Humidity</div>
                  <div class="stat-value text-xl max-sm:text-[13px]">{currentWeatherData.main.humidity}%</div>
                  <!-- <div class="stat-desc"></div> -->
                </div>
            </div>
    
            <div class="stats shadow max-sm:mt-2">
                <div class="stat w-40 h-28 text-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Wind</div>
                  <div class="stat-value text-xl max-sm:text-[13px]">{currentWeatherData.wind.speed}m/s</div>
                  <!-- <div class="stat-desc">East</div> -->
                </div>
            </div>


            <div class="stats shadow max-sm:mt-2">
                <div class="stat w-40 h-28 text-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Pressure</div>
                  <div class="stat-value text-xl max-sm:text-[13px]">{currentWeatherData.main.pressure}hPa</div>
                  <!-- <div class="stat-desc"></div> -->
                </div>
            </div>
            
        </div>

        <!-- Second Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10 max-sm:space-x-0 max-sm:flex-col">
            <div class="stats shadow">
                <div class="stat w-40 h-28 text-center items-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Visibility</div>
                  <div class="stat-value text-xl max-sm:text-[13px]">{currentWeatherData.visibility}m</div>
                  <!-- <div class="stat-desc"></div> -->
                </div>
            </div>
    
            <!-- <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Dew point</div>
                  <div class="stat-value text-xl">{currentWeatherData.main.wind.speed}</div>
                  <div class="stat-desc">Moderate</div>
                </div>
            </div> -->

            <div class="stats shadow max-sm:mt-2">
                <div class="stat w-40 h-28 text-center items-center justify-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Temperature</div>
                  <div class="stat-title text-error-content max-sm:text-[8px]">Max <span class="stat-value text-xl max-sm:text-[11px]">{Math.round(currentWeatherData.main.temp_max)}°C</span></div>
                  <div class="stat-title text-error-content max-sm:text-[8px]">Min <span class="stat-value text-xl max-sm:text-[11px]">{Math.round(currentWeatherData.main.temp_min)}°C</span></div>
                </div>
            </div>

            <div class="stats shadow max-sm:mt-2">
                <div class="stat w-40 h-28 text-center items-center justify-center max-sm:w-[80px] max-sm:h-[80px]">
                  <div class="stat-title text-error-content opacity-60 text-lg max-sm:text-[10px]">Sun</div>
                  <div class="stat-title text-error-content max-sm:text-[8px]">Rise: <span class="stat-value text-xl max-sm:text-[11px]">{convertEpochToLocalTime(currentWeatherData.sys.sunrise)}</span></div>
                  <div class="stat-title text-error-content max-sm:text-[8px]">Set: <span class="stat-value text-xl max-sm:text-[11px]">{convertEpochToLocalTime(currentWeatherData.sys.sunset)}</span></div>
                </div>
            </div>
            
        </div>
    </div>
</div>

