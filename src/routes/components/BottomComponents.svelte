<script lang="ts">
    import rain from '$lib/images/rain.png';
    import thunder from '$lib/images/thunder.png';
    import storm from '$lib/images/storm.png';

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
        // Retrieve the userId from session storage
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            console.error('User ID is not available');
            return;
        }

        const response = await fetch(`http://localhost:8000/profiles/${userId}/preferences/forecast`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Log the data to the console for debugging
            locations = transformData(data.data);
        } else {
            console.error('Failed to fetch locations:', response.status);
        }
    });

    function transformData(apiData: { [key: string]: any }): Location[] {
        return Object.entries(apiData).map(([key, value], index) => ({
            title: value.name,
            image: selectImage(value.weather[0].main),
            number: `${value.main.temp.toFixed(1)}°`,
            dropdownVisible: false,
            position: index + 1
        }));
    }

    function selectImage(weatherType: string): string {
        switch (weatherType) {
            case 'Thunderstorm': return thunder;
            case 'Rain': return rain;
            case 'Clouds': return storm;
            default: return rain;
        }
    }
</script>




<div class= "flex flex-nowrap justify-items-start w-full overflow-x-auto overflow-y-hidden px-3 custom-scrollbar">
    {#each locations as location} 
        <!-- <div class="rectangle"> -->
        <div class=" text-center w-[126px] h-[160px] m-[10px] p-[10px] flex flex-col items-center justify-center flex-shrink-0 relative select-none rounded-xl shadow-sm rectangle">
            <div>
                <h3>{location.title}</h3>
            </div>
            <img class="h-[85px]" src={location.image} alt={location.title} />
            <p>{location.number}</p>
        </div>
    {/each}
</div>


