<script>
    export let humidity_percentage = 30;
    export let wind_speed = 5;
    export let wind_direction = "North";
    export let pressure = 996;
    export let percipitation = 5.92;
    export let uv_index = 4;
    export let uv_intensity = "Moderate";
    export let cloud_cover_percentage = 29;
</script>

<div class="grid grid-row-2 grid-cols-3 gap-3 p-3">

    <!-- humidity stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">Humidity</div>
                <div class="stat-value text-xl text-white">{humidity_percentage}%</div>
                
            </div>
        </div>
    </div>

    <!-- wind stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">Wind</div>
                <div class="stat-value text-xl text-white">{wind_speed} km/h</div>
                <div class="stat-desc text-white">{wind_direction}</div>
            </div>
        </div>
    </div>

    <!-- pressure stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">Pressure</div>
                <div class="stat-value text-xl text-white">{pressure}hPa</div>
            </div>
        </div>
    </div>

    <!-- precipitation stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">Precipitation</div>
                <div class="stat-value text-xl text-white">{percipitation} mm</div>
            </div>
        </div>
    </div>

    <!-- uv index stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">UV Index</div>
                <div class="stat-value text-xl text-white">{uv_index}</div>
                <div class="stat-desc text-white">{uv_intensity}</div>
            </div>
        </div>  
    </div>

    <!-- cloud cover stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full bg-gradient-to-b from-indigo-900 to-indigo-500">
            <div class="stat ">
                <div class="stat-title text-sm text-white">Cloud Cover</div>
                <div class="stat-value text-xl text-white">{cloud_cover_percentage}%</div>
            </div>
        </div>
    </div>
</div>
