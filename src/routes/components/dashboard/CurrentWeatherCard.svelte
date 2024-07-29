<script>
    export let currentWeatherData

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

<div class="flex-col space-y-2.5">
    <div class="flex-col space-y-1.5">
        <!-- Location -->
        <div class="flex justify-center p-2">
            <h2>
                <span class="font-normal text-2xl">
                    {location}
                </span>
            </h2>
            <span>
        </div>
        <!-- Weather image -->
        <div class="flex justify-center">
            <img class="object-cover w-52" src="../../src/lib/images/weather-3d-icon.png" alt="logo">
        </div>
        <!-- Temperature -->
        <div class="flex justify-center">
            <h1>
                <span class="font-extrabold text-8xl">
                    {Math.round(currentWeatherData.main.temp)}<sup class="text-6xl">°C</sup>
                </span>
            </h1>
        </div>
        <!-- Descriptors -->
        <div class="flex flex-wrap justify-center space-x-1.5">
            <!-- {#each currentWeatherData.weather as weather}
                <div class="badge badge-primary">{capitalizeFirstLetter(weather.description)}</div>
            {/each} -->
            <div class="badge badge-primary">Gentle Breeze</div>
        </div>
        <div class="flex justify-center">
            <p class="font-extralight text-sm">Feels like {Math.round(currentWeatherData.main.feels_like)}°C</p>
        </div>
    </div>
    
    <!-- Weather Statistics -->
    <div class="space-y-6" >
        <!-- First Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10">
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Humidity</div>
                  <div class="stat-value text-xl">{currentWeatherData.main.humidity}%</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
    
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Wind</div>
                  <div class="stat-value text-xl">{currentWeatherData.wind.speed}m/s</div>
                  <!-- <div class="stat-desc">East</div> -->
                </div>
            </div>
            
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Pressure</div>
                  <div class="stat-value text-xl">{currentWeatherData.main.pressure}hPa</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
            
        </div>

        <!-- Second Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10">
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Visibility</div>
                  <div class="stat-value text-xl">{currentWeatherData.visibility}m</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
    
            <!-- <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Dew point</div>
                  <div class="stat-value text-xl">{currentWeatherData.main.wind.speed}</div>
                  <div class="stat-desc">Moderate</div>
                </div>
            </div> -->

            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Temperature</div>
                  <div class="stat-title">Max <span class="stat-value text-xl">{Math.round(currentWeatherData.main.temp_max)}°C</span></div>
                  <div class="stat-title">Min <span class="stat-value text-xl">{Math.round(currentWeatherData.main.temp_min)}°C</span></div>
                </div>
            </div>

            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Sun</div>
                  <div class="stat-title">Rise <span class="stat-value text-xl">{convertEpochToLocalTime(currentWeatherData.sys.sunrise)}</span></div>
                  <div class="stat-title">Set <span class="stat-value text-xl">{convertEpochToLocalTime(currentWeatherData.sys.sunset)}</span></div>
                </div>
            </div>
            
        </div>
    </div>
</div>

