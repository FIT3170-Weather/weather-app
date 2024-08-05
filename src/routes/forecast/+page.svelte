<script>
    // Hardcoded location value
    let location = 'Kuala Lumpur, Malaysia';
    let selected = 'daily';

    let button1 = 'HOURLY';
    let button2 = 'DAILY';

    // Hardcoded forecast data
    const hourlyForecasts = [
        { time: '10 am', temp: '20°C', weather:"rain" , condition: ['Clear sky', 'Gentle Breeze'], message:"RealFeel", humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { time: '9 pm', temp: '19°C',  weather:"rain" , condition: ['Partly cloudy', 'Drizzling'], message:"Petaling Jaya", humidity: 29, wind_speed: 10, wind_direction: "East", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 35},
        
    ];

    const dailyForecasts = [
        { day: 'Mon', date: '10/5', highTemp: "25°C", lowTemp: "21°C", temp: '22°C', message: 'Sunny', description: "hot weather for outdoor activities please drink lots of water" ,humidity: 30, wind_speed: 5, wind_direction: "North", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 29},
        { day: 'Tue', date: '10/6', highTemp: "20°C", lowTemp: "16°C", temp: '18°C', message: 'Rainy', description: "heavy rain please prepare an umbrella", humidity: 29, wind_speed: 10, wind_direction: "East", pressure: 996, precipitation: 5.92, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 35},
        { day: 'Wed', date: '10/7', highTemp: "21°C", lowTemp: "17°C", temp: '18°C', message: 'Rainy', description: "heavy storm incomming please prepare stay at home", humidity: 31, wind_speed: 7, wind_direction: "South", pressure: 997, precipitation: 6.00, uv_index: 4, uv_intensity: "Moderate", cloud_cover_percentage: 25},
        
    ];

    import ForecastStat from "../components/forecast/ForecastStat.svelte";
    import ForcastInfoHourly from "../components/forecast/ForcastInfoHourly.svelte";
    import ForcastInfoDaily from "../components/forecast/ForcastInfoDaily.svelte";
</script>


<svelte:head>
    <title>CliMate - Forecast</title>
    <meta name="description" content="Climate web app" />
</svelte:head>

<section class="flex flex-col items-center w-full pl-[70px]">
    <header class="flex justify-start items-center w-full p-5 text-white text-2xl">
        <h1>{location}</h1>
    </header>
    <div class="flex justify-center gap-5 py-5 w-full text-white">
        <button class="py-2 px-4 text-lg" 
                on:click={() => selected = 'hourly'}
                style:border-bottom={selected === 'hourly' ? '2.5px solid' : 'none'}>
            {button1}
        </button>
        <button class="py-2 px-4 text-lg" 
                on:click={() => selected = 'daily'}
                style:border-bottom={selected === 'daily' ? '2.5px solid' : 'none'}>
            {button2}
        </button>
    </div>
    <div class="flex flex-col w-full items-center">
        {#if selected === 'hourly'}
            {#each hourlyForecasts as forecast}
                <div class="m-2.5 p-4 border border-white bg-base-content bg-opacity-10 shadow-xl rounded-lg md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div class="md:col-span-2 col-span-1 text-black">
                            <ForcastInfoHourly
                            time = {forecast.time}
                            temp = {forecast.temp}
                            message = {forecast.message}
                            condition = {forecast.condition}
                            />
                        </div>
                        <div class="md:col-span-4 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecast.humidity}
                                wind_speed={forecast.wind_speed}
                                wind_direction={forecast.wind_direction}
                                pressure={forecast.pressure}
                                percipitation={forecast.precipitation}
                                uv_index={forecast.uv_index}
                                uv_intensity={forecast.uv_intensity}
                                cloud_cover_percentage={forecast.cloud_cover_percentage}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            {#each dailyForecasts as forecast}
                <div class="m-2.5 p-4 border border-white bg-base-content bg-opacity-10 shadow-xl rounded-lg md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div class="md:col-span-2 col-span-1">
                            <ForcastInfoDaily
                            day = {forecast.day}
                            date = {forecast.date}
                            highTemp = {forecast.highTemp}
                            lowTemp = {forecast.lowTemp}
                            message = {forecast.message}
                            temp = {forecast.temp}
                            description = {forecast.description}
                            />
                        </div>
                        <div class="md:col-span-4 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecast.humidity}
                                wind_speed={forecast.wind_speed}
                                wind_direction={forecast.wind_direction}
                                pressure={forecast.pressure}
                                percipitation={forecast.precipitation}
                                uv_index={forecast.uv_index}
                                uv_intensity={forecast.uv_intensity}
                                cloud_cover_percentage={forecast.cloud_cover_percentage}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</section>


<style>
</style>

