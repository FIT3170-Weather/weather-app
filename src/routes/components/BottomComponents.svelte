<script>
    import rain from '$lib/images/rain.png';
    import thunder from '$lib/images/thunder.png';
    import storm from '$lib/images/storm.png';

    import { onMount } from 'svelte';
    let locations = [
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

<style>
    .container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .rectangle {
        width: 126px;
        height: 164px;
        margin: 10px;
        padding: 10px;
        /* background-image: linear-gradient(to bottom, #6354BD, #2C124D); */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        user-select: none;
        border-radius: 14px;
        background-color: #e0e0e0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    }

    .rectangle h3 {
        margin: 0; /* Remove default margin */
        font-size: 14px; /* Adjust font size */
        white-space: nowrap; /* Prevent wrapping */
        align-self: flex-start;
        position: absolute;
        top: 1.5px;
    }
    .rectangle img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }

    .toolbar {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        align-self: flex-end; /* Modified */
        position: absolute; /* Added */
        top: 1.5px; /* Adjust as needed */
        right: 5px; /* Adjust as needed */
        z-index: 2;
    }

    .dropdown {
        position: absolute;
        top: 20px;
        right: 0; /* Modified */
        background-color: #fff;
        border: 1px solid #000000;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 1;
    }

    .dropdown.active {
        display: block;
    }

    .dropdown p {
        color: black;
        margin: 0;
        padding: 5px 0;
        font-size: small;
    }

    .add-rectangle { /* Updated to match size of .rectangle */
        width: 126px;
        height: 164px;
        margin: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        user-select: none;
        border-radius: 14px;
        background-color: #858282;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 45px;
    }

    .add-rectangle:hover { /* Added hover effect for add rectangle button */
        background-color: #575656;
        
    }
</style>

<div class="container">
    {#each locations as location, index} 
        <div class="rectangle">
            <h3>{location.title}</h3>
            <div class="toolbar" on:click={() => toggleDropdown(index)}>⋮</div> 
            <img src={location.image} alt={location.title} />
            <p>{location.number}</p>
            <div class="dropdown {location.dropdownVisible ? 'active' : ''}"> 
                <p on:click={() => handleOptionClick(1, location)}>Option 1</p>
                <p on:click={() => handleOptionClick(2, location)}>Option 2</p>
                <p on:click={() => handleOptionClick(3, location)}>Option 3</p>
            </div>
        </div>
    {/each}
    <div class="add-rectangle" on:click={addRectangle}>+</div>
</div>


