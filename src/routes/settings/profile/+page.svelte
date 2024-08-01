<script>
    import SideNav from "../../components/SideNav.svelte";
    import {writable} from 'svelte/store';

    let editMode = writable(false);
    let userName = writable("John Doe");
    let homeLocation = writable("Petaling Jaya, Selangor");
    let email = writable("johndoe@gmail.com");
    let showPassword = false;

    const toggleEditMode = () => {
        editMode.update(value => !value);
        if(editMode) showPassword = false;
    }
    const saveChanges = () => {
        toggleEditMode();
        // Add logic here for what to do when saved

    }

</script>

<svelte:head>
	<title>CliMate - Settings</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="p-10">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Profile</div>

    <div class = "profile-container">
        <div class="avatar grid-item w-25 rounded-full" style="height: 150px;">
            <img src="../src/lib/images/avatar_default.png" alt="avatar"/>
        </div>
    </div>

    <div class="h-max text-2xl font-semibold py-5">User Information</div>
    <table class="table w-full">
        <tbody>
            <!-- row 1 -->
            <tr class="border-b border-primary-content">
                <td class="text-lg font-bold flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div class="flex items-center justify-between w-full sm:w-auto">
                        <span>Name</span>
                        <button class="btn btn-ghost btn-xs ml-2 sm:ml-2">
                            <img src="../../src/lib/images/edit_icon.png" alt="Edit" class="h-full w-full icon"/>
                        </button>
                    </div>
                    <div class="mt-2 sm:mt-0 sm:ml-4">
                        <input type="text" bind:value={$userName} class="input input-ghost w-full max-w-xs font-normal" disabled={!$editMode} />
                    </div>
                </td>
            </tr>
            <!-- row 2 -->
            <tr class="border-b border-primary-content">
                <td class="text-lg font-bold flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div class="flex items-center justify-between w-full sm:w-auto">
                        <span>Home Location</span>
                        <button class="btn btn-ghost btn-xs ml-2 sm:ml-2">
                            <img src="../../src/lib/images/edit_icon.png" alt="Edit" class="h-full w-full icon"/>
                        </button>
                    </div>
                    <div class="mt-2 sm:mt-0 sm:ml-4">
                        <input type="text" bind:value={$homeLocation} class="input input-ghost w-full max-w-xs font-normal" disabled={!$editMode} />
                    </div>
                </td>
            </tr>
            <!-- row 3 -->
            <tr class="border-b border-primary-content">
                <td class="text-lg font-bold flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span>Email</span>
                    <div class="mt-2 sm:mt-0 sm:ml-4">
                        <input type="text" bind:value={$email} class="input input-ghost w-full max-w-xs font-normal" disabled={true} />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    


</section>

<style>
    .profile-container {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;
        align-items: start;
    }
    .input[disabled] {
        background-color: transparent;
        color: white;
        border: none;
    }
    .input {
        background-color: transparent;
        border: black 1px solid;
    }
    .icon {
        width: 100%; /* Full width of the button */
        filter: brightness(0) invert(0.8);
    }
</style>