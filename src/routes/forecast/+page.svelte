<script lang="ts">
    import { onMount } from 'svelte';
    import ForecastStat from "../components/forecast/ForecastStat.svelte";
    import ForcastInfoHourly from "../components/forecast/ForcastInfoHourly.svelte";
    import ForcastInfoDaily from "../components/forecast/ForcastInfoDaily.svelte";
    import type { LayoutData } from './$types';	
    export let data: LayoutData;

    const url = `http://localhost:8000/weather-forecast?location_code=${data.location}`;
    let selected = 'daily';
    let forecastData: any = null;
    let location: string = `${data.location}, Malaysia`;
    let error: string | null = null;

    onMount(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            forecastData = await response.json();
            if (!forecastData.hourly || !forecastData.daily) {
                throw new Error("Incomplete data received from the server");
            }
        } catch (err) {
            error = (err as Error).message;
            console.error('Error fetching forecast data:', error);
        }
    });
</script>

<svelte:head>
    <title>CliMate - Forecast</title>
    <meta name="description" content="Climate web app showing weather forecasts" />
</svelte:head>

<section class="flex flex-col items-center w-full">
    <header class="flex justify-start items-center w-full p-5 text-white text-2xl">
        <h1>{location}</h1>
    </header>

    <div class="flex justify-center gap-5 py-5 w-full text-white">
        <button class="py-2 px-4 text-lg" on:click={() => selected = 'hourly'} style="border-bottom: {selected === 'hourly' ? '2.5px solid' : 'none'}">
            Hourly
        </button>
        <button class="py-2 px-4 text-lg" on:click={() => selected = 'daily'} style="border-bottom: {selected === 'daily' ? '2.5px solid' : 'none'}">
            Daily
        </button>
    </div>

    <div class="flex flex-col w-full items-center px-5 md:px-0">
        {#if forecastData?.hourly && selected === 'hourly'}
            {#each forecastData.hourly.temperature as temp, index}
                <div class="m-2.5 p-4 border border-error-content bg-base-content bg-opacity-10 shadow-xl rounded-lg w-full md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div class="md:col-span-2 col-span-1 text-black">
                            <ForcastInfoHourly
                                time={forecastData.hourly.time ? forecastData.hourly.time[index] : "N/A"}
                                temp={`${forecastData.hourly.temperature ? forecastData.hourly.temperature[index] + "°C" : "N/A"}`}
                                condition={forecastData.hourly.condition ? forecastData.hourly.condition[index] : "N/A"}
                                real_feel_temp={`${forecastData.hourly.real_feel ? forecastData.hourly.real_feel[index] + "°C" : "N/A"}`}
                            />
                        </div>
                        <div class="md:col-span-3 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecastData.hourly.humidity ? forecastData.hourly.humidity[index] : "N/A"}
                                wind_speed={forecastData.hourly.wind_speed ? forecastData.hourly.wind_speed[index] : "N/A"} 
                                wind_direction={forecastData.hourly.wind_direction ? forecastData.hourly.wind_direction[index] : "N/A"}
                                pressure={forecastData.hourly.pressure ? forecastData.hourly.pressure[index] : "N/A"} 
                                percipitation={forecastData.hourly.precipitation ? forecastData.hourly.precipitation[index] : "N/A"}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        {:else if forecastData?.daily && selected === 'daily'}
            {#each forecastData.daily.max_temperature as maxTemp, index}
                <div class="m-2.5 p-4 border border-error-content bg-base-content bg-opacity-10 shadow-xl rounded-lg w-full md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div class="md:col-span-2 col-span-1">
                            <ForcastInfoDaily
                                day={forecastData.daily.day ? forecastData.daily.day[index] : "N/A"} 
                                date={forecastData.daily.time ? forecastData.daily.time[index] : "N/A"}
                                highTemp={`${forecastData.daily.max_temperature ? forecastData.daily.max_temperature[index] + "°C" : "N/A"}`} 
                                lowTemp={`${forecastData.daily.min_temperature ? forecastData.daily.min_temperature[index] + "°C" : "N/A"}`}
                                temp={`${forecastData.daily.real_feel ? forecastData.daily.real_feel[index] + "°C" : "N/A"}`}
                                description={forecastData.daily.description ? forecastData.daily.description[index] : "N/A"}
                            />
                        </div>
                        <div class="md:col-span-3 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecastData.daily.humidity ? forecastData.daily.humidity[index] : "N/A"}
                                wind_speed={forecastData.daily.wind_speed ? forecastData.daily.wind_speed[index] : "N/A"} 
                                wind_direction={forecastData.daily.wind_direction ? forecastData.daily.wind_direction[index] : "N/A"}
                                pressure={forecastData.daily.pressure ? forecastData.daily.pressure[index] : "N/A"} 
                                percipitation={forecastData.daily.precipitation ? forecastData.daily.precipitation[index] : "N/A"}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        {:else if error}
            <div>
                <p>Error fetching forecast data: {error}</p>
            </div>
        {/if}
    </div>
</section>
