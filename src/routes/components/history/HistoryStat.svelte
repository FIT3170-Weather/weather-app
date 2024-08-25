<script>
    export let humidity_percentage = 30;
    export let wind_speed = 5;
    // export let wind_direction = "North";
    export let pressure = 996;
    export let percipitation = 5.92;
    // export let uv_index = 4;
    // export let uv_intensity = "Moderate";
    export let visibility = 10000;
    export let cloud_cover_percentage = 29;
</script>

<div class="grid grid-row-2 grid-cols-3 gap-3 p-3">

    <!-- humidity stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Humidity</div>
                <div class="stat-value sm:text-xl text-base">{humidity_percentage}%</div>
                
            </div>
        </div>
    </div>

    <!-- wind stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Wind</div>
                <div class="stat-value sm:text-xl text-base">{wind_speed} km/h</div>
            </div>
        </div>
    </div>

    <!-- pressure stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Pressure</div>
                <div class="stat-value sm:text-xl text-base ">{pressure} hPa</div>
            </div>
        </div>
    </div>

    <!-- precipitation stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Precipitation</div>
                <div class="stat-value sm:text-xl text-base ">{percipitation} mm</div>
            </div>
        </div>
    </div>

    <!-- uv index stat
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">UV Index</div>
                <div class="stat-value sm:text-xl text-base ">{uv_index}</div>
                <div class="stat-desc sm:text-sm text-xs text-error-content opacity-60">{uv_intensity}</div>
            </div>
        </div>  
    </div> -->
    <!-- visibility -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Visibility</div>
                <div class="stat-value sm:text-xl text-base ">{Math.round(visibility)} m</div>
            </div>
        </div>
    </div>
    

    <!-- cloud cover stat -->
    <div class="row-span-1 col-span-1 h-full w-full">
        <div class="stats shadow h-full w-full stats-bg">
            <div class="stat sm:p-6 p-3">
                <div class="stat-title sm:text-base text-xs text-error-content opacity-60">Cloud Cover</div>
                <div class="stat-value sm:text-xl text-base ">{cloud_cover_percentage} %</div>
            </div>
        </div>
    </div>
</div>