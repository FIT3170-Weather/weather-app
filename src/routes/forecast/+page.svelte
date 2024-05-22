<script>
    // Hardcoded location value
    let location = 'Kuala Lumpur, Malaysia';
    let selected = 'daily';

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

<section class="content">
    <header class="header">
        <h1 class="location-display">{location}</h1>
    </header>
    <div class="button-container">
        <button on:click={() => selected = 'hourly'} class:selected={selected === 'hourly'}>
            Hourly
        </button>
        <button on:click={() => selected = 'daily'} class:selected={selected === 'daily'}>
            Daily
        </button>
    </div>
    <div class="cards">
        {#if selected === 'hourly'}
            {#each hourlyForecasts as forecast}
                <div class="card">
                    <div class="grid grid-cols-6">
                        <div class="col-span-2 text-black">
                            <ForcastInfoHourly
                            time = {forecast.time}
                            temp = {forecast.temp}
                            message = {forecast.message}
                            condition = {forecast.condition}
                            />
                        </div>
                        <div class="col-span-4">
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
                <div class="card">
                    <div class="grid grid-cols-6">
                        <div class="col-span-2">
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
                        <div class="col-span-4">
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
    .header {
        display: flex;
        justify-content: flex-start; /* Aligns content to the left */
        align-items: center;
        padding: 20px;
        color: white;
        width: 100%; /* Ensures the header extends across the top of the page */
    }
    .location-display {
        font-size: 20px;
    }
    .content {
        margin-left: 70px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - var(--nav-height));
    }
    .button-container {
        text-align: center;
        padding: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background: none;
        border: 2px solid transparent;
        color: white;
        transition: border-color 0.3s;
    }
    button:hover {
        border-color: white;
    }
    button.selected {
        border-bottom: 2px solid white;
    }
    .cards {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .card {
        margin: 10px;
        padding: 15px;
        background-color: #f3f4f6;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        width: 80%;
    }
</style>

