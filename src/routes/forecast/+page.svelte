<script lang="ts">
    import { onMount } from 'svelte';
    import ForecastStat from "../components/forecast/ForecastStat.svelte";
    import ForcastInfoHourly from "../components/forecast/ForcastInfoHourly.svelte";
    import ForcastInfoDaily from "../components/forecast/ForcastInfoDaily.svelte";
    import type { LayoutData } from './$types';	
    export let data: LayoutData;

    // URL for the current data
	const url = 'http://localhost:8000/forecast';

    // Hardcoded location value
    // let location = 'Kuala Lumpur, Malaysia';
    let selected = 'daily';

    let button1 = 'HOURLY';
    let button2 = 'DAILY';
    
    // Create the request body
    const requestBody = {
        location: data.location,
        forecastType: selected,
        variables: [
            "temperature",
            "precipitation",
            "humidity"
            ]
    };

    // Create the forecast data variable
    let forecastData: any = null;
    let location: string | null = null;

    // Create the error variable
    let error: string | null = null;

    // Use the fetch API to make the POST request
	onMount(async () => {
        try {
            // Make the POST request using fetch
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            forecastData = await response.json();
            location = forecastData.location ? `${forecastData.location}, Malaysia` : `${data.location}, Malaysia`; // Set the location

            console.log("Fetched Forecast Data:", forecastData); // Log the fetched data

        } catch (err) {
            error = (err as Error).message;
            console.error('Error:', err);
        }
    });
</script>


<svelte:head>
    <title>CliMate - Forecast</title>
    <meta name="description" content="Climate web app" />
</svelte:head>

<section class="flex flex-col items-center w-full ">
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
    <div class="flex flex-col w-full items-center px-5 md:px-0">
        {#if forecastData && selected === 'hourly'}
            {#each forecastData.temperature as temperature, index}
                <div class="m-2.5 p-4 border border-error-content bg-base-content bg-opacity-10 shadow-xl rounded-lg w-full md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div class="md:col-span-2 col-span-1 text-black">
                            <ForcastInfoHourly
                            time={`${forecastData.time ? forecastData.time[index] : "N/A"}`} 
                            temp={`${temperature ? temperature + "°C" : "N/A"}`}
                            message={forecastData.message ? forecastData.message[index] : "N/A"}
                            condition={forecastData.condition ? forecastData.condition[index] : "N/A"} 
                            />
                        </div>
                        <div class="md:col-span-4 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecastData.humidity ? forecastData.humidity[index] : "N/A"}
                                wind_speed={forecastData.wind_speed ? forecastData.wind_speed[index] : "N/A"} 
                                wind_direction={forecastData.wind_direction ? forecastData.wind_direction[index] : "N/A"}
                                pressure={forecastData.pressure ? forecastData.pressure[index] : "N/A"} 
                                percipitation={forecastData.precipitation ? forecastData.precipitation[index] : "N/A"}
                                visibility={forecastData.visibility ? forecastData.visibility[index] : "N/A"}
                                cloud_cover_percentage={forecastData.cloud_cover_percentage ? forecastData.cloud_cover_percentage[index] : "N/A"}
                            />
                        </div>
                    </div>
                </div>
            {/each}
        {:else if forecastData && selected === 'daily'}
            {#each forecastData.temperature as temp, index}
                <div class="m-2.5 p-4 border border-error-content bg-base-content bg-opacity-10 shadow-xl rounded-lg w-full md:w-4/5">
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div class="md:col-span-2 col-span-1">
                            <ForcastInfoDaily
                                day={forecastData.day ? forecastData.day[index] : "N/A"} 
                                date={forecastData.date ? forecastData.date[index] : "N/A"} 
                                highTemp={forecastData.highTemp ? forecastData.highTemp[index] : "N/A"} 
                                lowTemp={forecastData.lowTemp ? forecastData.lowTemp[index] : "N/A"} 
                                message={forecastData.message ? forecastData.message[index] : "N/A"}
                                description={forecastData.description ? forecastData.description[index] : "N/A"}
                            />
                        </div>
                        <div class="md:col-span-4 col-span-1">
                            <ForecastStat 
                                humidity_percentage={forecastData.humidity ? forecastData.humidity[index] : "N/A"}
                                wind_speed={forecastData.wind_speed ? forecastData.wind_speed[index] : "N/A"} 
                                wind_direction={forecastData.wind_direction ? forecastData.wind_direction[index] : "N/A"}
                                pressure={forecastData.pressure ? forecastData.pressure[index] : "N/A"} 
                                percipitation={forecastData.precipitation ? forecastData.precipitation[index] : "N/A"}
                                visibility={forecastData.visibility ? forecastData.visibility[index] : "N/A"}
                                cloud_cover_percentage={forecastData.cloud_cover_percentage ? forecastData.cloud_cover_percentage[index] : "N/A"}
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


<style>
</style>
