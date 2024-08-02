<script lang="ts">
    import { writable } from 'svelte/store';
    import { onDestroy } from 'svelte';
    import { locations } from '../../locations.js';
 
    let observedLocations = writable([
        'Kuala Lumpur, Wilayah Persekutuan',
        'Petaling Jaya, Selangor',
        'Taiping, Perak'
    ]);

    let modal: HTMLDialogElement;
    let rain = false;
    let wind = false;
    let thunderstorm = false;
    let temperature = false;

    let newLocation = "";
    let showDropdown = false;

    function openModal() {
        modal.showModal();
    }

    function removeLocation(location : string) : any {
        observedLocations.update(locations => locations.filter(l => l !== location));
    }

    const handleInputChange = (event : any) => {
        newLocation = event.target.value;
        showDropdown = true;
    };

    const handleSubmit = (event : any) => {
        event.preventDefault(); 
        observedLocations.update(locations => [...locations, newLocation]);
        modal.close();
    };

    const handleDropdownSelection = (location : string) : any => {
        newLocation = location;
        showDropdown = false;
    };

    let locationCount = 0;

    // Subscribe to the store and update locationCount whenever observedLocations changes
    const unsubscribe = observedLocations.subscribe(locations => {
        locationCount = locations.length;
    });

    onDestroy(unsubscribe);

</script>

<svelte:head>
	<title>CliMate - Alerts</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="p-10">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Alerts</div>
    <div class="flex-grow border-t border-primary-content"></div> 
    <div class="h-max text-2xl font-semibold py-5">Observed Locations</div>
    <div class="card text-primary-content w-full outline">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table">
                    <tbody>
                        {#if locationCount > 0}
                            {#each $observedLocations as location}
                                <tr>
                                    <td class="text-lg">{location}</td>
                                    <th class="text-end">
                                        <button class="btn btn-ghost btn-xs" on:click={removeLocation(location)}>
                                            <img src="../../src/lib/images/delete_icon.png" alt="Delete" class="h-full w-full icon"/>
                                        </button>
                                    </th>
                                </tr>
                            {/each}
                        {:else}
                            <div class="h-max text-lg font-semibold">Add a new location to get notified...</div>
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="py-5 flex justify-end">
        <button class="btn bg-primary text-primary-content" on:click={openModal}>+ ADD</button>
    </div>
    <div class="flex-grow border-t border-primary-content"></div>

    <div class="h-max text-2xl font-semibold py-5">Notifications</div>
    <div class="card text-primary-content w-full outline">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table">
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <td class="text-lg">Rain</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle" bind:checked={rain}/>
                            </th>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                            <td class="text-lg">Wind</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle" bind:checked={wind}/>
                            </th>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <td class="text-lg">Thunderstorm</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle" bind:checked={thunderstorm}/>
                            </th>
                        </tr>
                        <!-- row 4 -->
                        <tr>
                            <td class="text-lg">Temperature</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle" bind:checked={temperature}/>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="py-10"></div>

    <!-- Modal -->
    <dialog bind:this={modal} class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="text-2xl font-semibold">Add New Location</div>
            <div class="form-control grow py-4">
                <input type="text" placeholder="Search location" class="search-bar input input-bordered w-full bg-neutral" bind:value={newLocation} on:input={handleInputChange}/>
                {#if showDropdown}
                    <ul class="menu dropdown-content bg-base-200 rounded-box z-[1] w-full p-2 shadow">
                        {#each $locations as location}
                            <li class="w-full" >
                                <button on:click={handleDropdownSelection(location)}>
                                    {location}
                                </button>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
            <div class="modal-action">  
                <form method="dialog" on:submit={handleSubmit}>
                    <button class="btn bg-primary text-primary-content">+ ADD</button>   
                </form>
            </div>
        </div>
    </dialog>
</section>



<style>
    .icon {
        width: 100%; /* Full width of the button */
        filter: brightness(0) invert(0.8);
    }
</style>