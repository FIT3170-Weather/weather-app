<script lang="ts">
    import { getWeatherConditionImage } from "../weatherConditions";
	import { WeatherConditions } from "../weatherConditions";

    import { onMount } from 'svelte';

    interface Location {
        title: string;
        image: string;
        number: string;
        dropdownVisible: boolean;
        position: number;
    }

    let locations: Location[] = [];

    onMount(async () => {
    const response = await fetch(`http://localhost:8000/all-locations-current`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the data to the console 
        if (data.success && data.location_code) { 
            locations = transformData(data);
        } else {
            console.error('Data format is incorrect or missing key properties:', data);
        }
    } else {
        console.error('Failed to fetch locations:', response.status);
    }
});

    // Function to transform the data from the API into the required format
    function transformData(apiData: any): Location[] {
        let locationsArray: Location[] = [];
        for (let i = 0; i < apiData.location_code.length; i++) {
            locationsArray.push({
                title: formatLocationName(apiData.location_code[i]), // format the location name
                image: selectImage(apiData.weather_desc[i]),
                number: `${apiData.temperature[i]}°`,
                dropdownVisible: false,
                position: i + 1
            });
        }
        return locationsArray;
    }

    // Function to format the location name
    function formatLocationName(locationName: string): string {
        return locationName.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    // Function to select the correct image based on the weather type
    function selectImage(weatherType: string):any {
        console.log(weatherType)
        switch (weatherType) {
            case "clear sky": return getWeatherConditionImage(WeatherConditions.CLEAR);
            case "few clouds":return getWeatherConditionImage(WeatherConditions.FEW_CLOUD);
            case "scattered clouds": return getWeatherConditionImage(WeatherConditions.SCATTERED_CLOULD);
            case "broken clouds":return getWeatherConditionImage(WeatherConditions.BROKEN_CLOUD);
            case "shower rain": return getWeatherConditionImage(WeatherConditions.LIGHT_RAIN);
            case "rain": return getWeatherConditionImage(WeatherConditions.MODERATE_RAIN);
            case "thunderstorm": return getWeatherConditionImage(WeatherConditions.THUNDER_STORM);
            default: return getWeatherConditionImage(WeatherConditions.CLEAR);
        }
    }
</script>




<div class= "flex flex-nowrap  justify-items-start w-full overflow-x-auto overflow-y-hidden px-3 custom-scrollbar">
    {#each locations as location} 
        <!-- <div class="rectangle"> -->
        <div class="space-y-4 text-center w-[126px] h-[160px] m-[10px] p-[10px] flex flex-col items-center justify-center flex-shrink-0 relative select-none rounded-xl shadow-sm rectangle">
            <div>
                <h3>{location.title}</h3>
            </div>
            <img class="h-[85px]" src={location.image} alt={location.title} />
            <p>{location.number}</p>
        </div>
    {/each}
</div>


