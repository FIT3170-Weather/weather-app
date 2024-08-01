<script lang="ts">
    import { locations } from '../../locations.js';
    import { onDestroy } from 'svelte';

    let username = "John Doe";
    let homeLocation = "Petaling Jaya, Selangor";
    let email = "johndoe@gmail.com";

    let editNameModal: HTMLDialogElement;
    let editLocationModal: HTMLDialogElement;

    let newName = '';
    let isValid = false;

    let newLocation = "";
    let showDropdown = false;
    
    function openEditNameModal() {
        editNameModal.showModal();
    }

    const handleNameInputChange = (event : any) => {
        newName = event.target.value;
        isValid = newName.trim().length > 0; // Valid if not empty or only spaces
    };

    const handleNameChangeSubmit = (event : any) => {
        event.preventDefault(); 
        if (isValid) {
            username = newName;
            editNameModal.close();
        }
    };

    function openEditLocationModal() {
        editLocationModal.showModal();
    }

    const handleLocationInputChange = (event : any) => {
        newLocation = event.target.value;
        showDropdown = true;
    };

    const handleLocationChangeSubmit = (event : any) => {
        event.preventDefault(); 
        homeLocation = newLocation;
        editLocationModal.close();
    };

    const handleDropdownSelection = (location : string) : any => {
        newLocation = location;
        showDropdown = false;
    };

</script>

<svelte:head>
	<title>CliMate - Settings</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="p-10">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Profile</div>
    <div class="avatar grid-item w-25 rounded-full" style="height: 150px;">
        <img src="../src/lib/images/avatar_default.png" alt="avatar"/>
    </div>

    <div class="h-max text-2xl font-semibold py-5">User Information</div>
    <div class="grid grid-cols-2 justify-items-start items-center py-5">
        <div class="md:col-span-2 lg:col-span-1">
            <span class="text-lg font-bold">Name</span>
            <button class="btn btn-ghost btn-xs" on:click={openEditNameModal}>
                <img src="../../src/lib/images/edit_icon.png" alt="Edit" class="h-full w-full icon"/>
            </button>
        </div>
        <div class="sm:col-span-2 lg:col-span-1 text-lg">
            {username}
        </div>
    </div>
    <div class="border-b border-primary-content"></div>
    <div class="grid grid-cols-2 justify-items-start items-center py-5">
        <div class="md:col-span-2 lg:col-span-1">
            <span class="text-lg font-bold">Home Location</span>
            <button class="btn btn-ghost btn-xs" on:click={openEditLocationModal}>
                <img src="../../src/lib/images/edit_icon.png" alt="Edit" class="h-full w-full icon"/>
            </button>
        </div>
        <div class="md:col-span-2 lg:col-span-1 text-lg">
            {homeLocation}
        </div>
    </div>
    <div class="border-b border-primary-content"></div>
    <div class="grid grid-cols-2 justify-items-start items-center py-5">
        <div class="md:col-span-2 lg:col-span-1">
            <span class="text-lg font-bold">Email</span>
        </div>
        <div class="md:col-span-2 lg:col-span-1 text-lg">
            {email}
        </div>
    </div>
    <div class="border-b border-primary-content"></div>

    <!-- Modal for changing name-->
    <dialog bind:this={editNameModal} class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="text-2xl font-semibold">Edit Name</div>
            <div class="py-4">
                <input type="text" value={username} class="input input-bordered w-full" on:input={handleNameInputChange}/>
            </div>
            <div class="modal-action">
                <form method="dialog" on:submit={handleNameChangeSubmit}>
                    <button class="btn bg-primary text-primary-content" disabled={!isValid}>SAVE</button>   
                </form>
            </div>
        </div>
    </dialog>

    <!-- Modal for changing location-->
    <dialog bind:this={editLocationModal} class="modal" on:close={() => (showDropdown = false)}>
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="text-2xl font-semibold">Change Home Location</div>
            <div class="form-control grow py-4">
                <input type="text" placeholder="Search location" class="search-bar input input-bordered w-full bg-neutral" bind:value={newLocation} on:input={handleLocationInputChange}/>
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
            <form method="dialog" on:submit={handleLocationChangeSubmit}>
                <button class="btn bg-primary text-primary-content">SAVE</button>   
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