<script>
    // Hardcoded location value
    let location = 'Kuala Lumpur, Malaysia';
    let selected = 'daily';

    // Hardcoded forecast data
    const hourlyForecasts = [
        { time: '00:00', temp: '20°C', description: 'Clear sky' },
        { time: '01:00', temp: '19°C', description: 'Partly cloudy' },
        
    ];

    const dailyForecasts = [
        { day: 'Monday', temp: '22°C', description: 'Sunny' },
        { day: 'Tuesday', temp: '18°C', description: 'Rainy' },
        { day: 'Wednesday', temp: '18°C', description: 'Rainy' },
        
    ];
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
                    <h4>{forecast.time}</h4>
                    <p>{forecast.temp} - {forecast.description}</p>
                </div>
            {/each}
        {:else}
            {#each dailyForecasts as forecast}
                <div class="card">
                    <h4>{forecast.day}</h4>
                    <p>{forecast.temp} - {forecast.description}</p>
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

