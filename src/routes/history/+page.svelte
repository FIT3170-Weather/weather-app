<script lang="ts">
    let location = 'Kuala Lumpur, Malaysia';

    import HistoryStat from "../components/history/HistoryStat.svelte";
    import HistoryInfo from "../components/history/HistoryInfo.svelte";

    const historicalData = [
        { day: 'Mon', date: '10/5', temp: '22°C', message: 'Sunny', humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { day: 'Tue', date: '10/6', temp: '18°C', message: 'Rainy', humidity: 29, wind_speed: 10, wind_direction: "East", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 35},
        { day: 'Wed', date: '10/7', temp: '18°C', message: 'Rainy', humidity: 31, wind_speed: 7, wind_direction: "South", pressure: 997, precipitation: 6.00, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 25},
        { day: 'Thu', date: '10/8', temp: '20°C', message: 'Sunny', humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { day: 'Fri', date: '10/9', temp: '22°C', message: 'Sunny', humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { day: 'Sat', date: '10/10', temp: '22°C', message: 'Sunny', humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { day: 'Sun', date: '10/11', temp: '22°C', message: 'Sunny', humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
    ];

    let page_title = "Historical Data:";
    let page_title_description = "7-Day Review";

</script>

<svelte:head>
    <title>CliMate - Historical Data</title>
    <meta name="description" content="Climate web app" />
</svelte:head>

<section class="flex flex-col items-center w-full">
    <header class="flex justify-start items-center w-full p-5 text-white text-2xl">
        <h1>{location}</h1>
    </header>
    <div class="flex flex-col sm:flex-row justify-center gap-5 py-5 pb-8 w-full text-white text-3xl text-center">
        <h1>{page_title}</h1>
        <h1>{page_title_description}</h1>
    </div>
    {#each historicalData as history}
        <div class="m-2.5 p-4 border border-white bg-base-content bg-opacity-10 shadow-xl rounded-lg md:w-4/5">
            <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div class="md:col-span-2 col-span-1">
                    <HistoryInfo
                    day = {history.day}
                    date = {history.date}
                    message = {history.message}
                    temp = {history.temp}
                    />
                </div>
                <div class="md:col-span-4 col-span-1">
                    <HistoryStat
                        humidity_percentage={history.humidity}
                        wind_speed={history.wind_speed}
                        wind_direction={history.wind_direction}
                        pressure={history.pressure}
                        percipitation={history.precipitation}
                        uv_index={history.uv_index}
                        uv_intensity={history.uv_intensity}
                        cloud_cover_percentage={history.cloud_cover_percentage}
                    />
                </div>
            </div>
        </div>
    {/each}
</section>
