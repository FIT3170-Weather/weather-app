<script>
    let location = "Kuala Lumpur, Malaysia"; // Default
    let temperature = "32"; // Default
    let feelTemperature = "40"; // Default
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
                    {temperature}<sup class="text-6xl">°C</sup>
                </span>
            </h1>
        </div>
        <!-- Descriptors -->
        <div class="flex flex-wrap justify-center space-x-1.5">
            <div class="badge badge-primary">Broken Clouds</div>
            <div class="badge badge-primary">Gentle Breeze</div>
        </div>
        <div class="flex justify-center">
            <p class="font-extralight text-sm">Feels like {feelTemperature}°C</p>
        </div>
    </div>
    
    <!-- Weather Statistics -->
    <div class="space-y-6" >
        <!-- First Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10">
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Humidity</div>
                  <div class="stat-value text-xl">81%</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
    
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Wind</div>
                  <div class="stat-value text-xl">5 km/h</div>
                  <div class="stat-desc">East</div>
                </div>
            </div>
            
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Pressure</div>
                  <div class="stat-value text-xl">996hPa</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
            
        </div>

        <!-- Second Stats Line -->
        <div class="flex flex-wrap justify-center space-x-10">
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Precipitation</div>
                  <div class="stat-value text-xl">5.92mm</div>
                  <div class="stat-desc"></div>
                </div>
            </div>
    
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">UV Index</div>
                  <div class="stat-value text-xl">4</div>
                  <div class="stat-desc">Moderate</div>
                </div>
            </div>
            
            <div class="stats shadow">
                <div class="stat">
                  <div class="stat-title text-sm">Sun</div>
                  <div class="stat-title">Rise <span class="stat-value text-xl">6.51 am</span></div>
                  <div class="stat-title">Set <span class="stat-value text-xl">7.01 am</span></div>
                </div>
            </div>
            
        </div>
    </div>
</div>

