<script>
    import rain from '$lib/images/rain.png';
    import { onMount } from 'svelte';
    let locations = [
        { title: 'Rectangle 1', image: rain, number: 1 },
        { title: 'Rectangle 2', image:  rain, number: 2 },
        { title: 'Rectangle 3', image: rain, number: 3 },
    ];

    function addRectangle() {
        const newRectangle = {
            title: 'New Rectangle',
            image: rain,
            number: locations.length + 1
        };
        locations = [...locations, newRectangle];
    }

    let dropdownVisible = false;

    function toggleDropdown() {
        dropdownVisible = !dropdownVisible;
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
        height: 140px;
        margin: 10px;
        padding: 10px;
        border: 3px solid #050505;
        background-color: rgb(3, 61, 112);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        user-select: none;
    }

    .rectangle h3 {
        margin: 0; /* Remove default margin */
        font-size: 14px; /* Adjust font size */
        white-space: nowrap; /* Prevent wrapping */
        align-self: flex-start;
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
    }

    .dropdown {
        position: absolute;
        top: 100%;
        right: 0; /* Modified */
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 1; /* Added */
    }

    .dropdown.active {
        display: block;
    }
</style>

<div class="container">
    {#each locations as location}
        <div class="rectangle">
            <h3>{location.title}</h3>
            <div class="toolbar">⋮
                <button on:click={toggleDropdown}></button>
            </div>
            <img src={location.image} alt={location.title} />
            <p>{location.number}</p>
            <div class="dropdown {dropdownVisible && 'active'}">
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
            </div>
        </div>
    {/each}
</div>
<button on:click={addRectangle}>Add Rectangle</button>

