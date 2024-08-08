<script>
    import rain from '$lib/images/rain.png';
    import thunder from '$lib/images/thunder.png';
    import storm from '$lib/images/storm.png';

    import { onMount } from 'svelte';
    let locations = [
        { title: 'Selangor', image: rain, number: "34°", dropdownVisible: false, position: 1},
        { title: 'Petaling Jaya', image:  thunder, number: "28°", dropdownVisible: false, position: 2},
        { title: 'Melaka', image: storm, number: "31°", dropdownVisible: false, position: 3},
        { title: 'Selangor', image: rain, number: "34°", dropdownVisible: false, position: 1},
        { title: 'Petaling Jaya', image:  thunder, number: "28°", dropdownVisible: false, position: 2},
        { title: 'Melaka', image: storm, number: "31°", dropdownVisible: false, position: 3},
    ];
    var index = locations.length
    const locationNames = ['Subang Jaya', 'Putrajaya', 'Port Klang', 'Seremban', 'Kuantan'];
    const images = [rain, storm, thunder];

    /**
	 * @param {any[]} arr
	 */
    function getRandomItem(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function addRectangle() {
        index += 1
        const newRectangle = {
            title: locationNames.splice(0, 1)[0],
            image: getRandomItem(images),
            number: (Math.floor(Math.random() * (38-25) + 25)) +"°",
            dropdownVisible: false,
            position: locations.length +1
        };
        locations = [...locations, newRectangle];
    }

    let dropdownVisible = false;

    /**
	 * @param {number} position
	 */
    function toggleDropdown(position) {
        locations = locations.map((location, i) => {
            if (i === position) {
                return { ...location, dropdownVisible: !location.dropdownVisible };
            } else {
                return { ...location, dropdownVisible: false }; // Close other dropdowns
            }
        });
    }

    /**
	 * @param {number} option
	 * @param {{ title: any; image?: string; number?: string; dropdownVisible?: boolean; position?: number }} location
	 */
    function handleOptionClick(option, location) {
        alert(`Option ${option} clicked for ${location.title}`);
    }
</script>



<div class= "flex flex-nowrap justify-items-start w-full overflow-x-auto overflow-y-hidden px-3">
    {#each locations as location} 
        <!-- <div class="rectangle"> -->
        <div class=" text-center w-[126px] h-[145px] m-[10px] p-[10px] flex flex-col items-center justify-center flex-shrink-0 relative select-none rounded-xl shadow-sm rectangle">
            <div>
                <h3>{location.title}</h3>
            </div>
            <img class="h-[85px]" src={location.image} alt={location.title} />
            <p>{location.number}</p>
        </div>
    {/each}
</div>


