<script>
    import SideNav from "../../components/SideNav.svelte";
    import {writable} from 'svelte/store';

    let editMode = writable(false);
    let userName = writable("John Doe");
    let homeLocation = writable("Petaling Jaya, Selangor");
    let email = writable("johndoe@gmail.com");
    let password = writable("johndoeno1")
    let showPassword = false;

    const toggleEditMode = () => {
        editMode.update(value => !value);
        if(editMode) showPassword = false;
    }
    const saveChanges = () => {
        toggleEditMode();
        // Add logic here for what to do when saved

    }

    const togglePasswordVisibility = () => {
        showPassword = !showPassword;
    }

</script>

<svelte:head>
	<title>CliMate - Settings</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="p-10">
    <div class = "header">
        <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Profile</div>
        <button class="edit-button" on:click={toggleEditMode}>
            <strong>{$editMode ? 'Save' : 'Edit'}</strong>
        </button>
    </div>

    <div class = "profile-container">
        <div class="avatar grid-item w-25 rounded-full" style="height: 150px;">
            <img src="../src/lib/images/avatar_default.png" alt="avatar"/>
        </div>
    </div>

    <div class = "user-info">
        <div class="user-info-item">
            <!-- <div class="h-max text-2xl font-light">Name</div> -->
            <input type="text" bind:value={$userName} class="input input-ghost w-full max-w-xs" disabled={!$editMode} />
        </div>
        <div class="user-info-item">
            <!-- <div class="h-max text-2xl font-light">Home Location</div> -->
            <input type="text" bind:value={$homeLocation} class="input input-ghost w-full max-w-xs" disabled={!$editMode} />
        </div>
        <div class="user-info-item">
            <!-- <div class="h-max text-2xl font-light">Email</div> -->
            <input type="text" bind:value={$email} class="input input-ghost w-full max-w-xs" disabled={!$editMode} />
        </div>
    </div>


</section>

<style>
    .profile-container {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;
        align-items: start;
    }
    .user-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .user-info-item {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .edit-button {
        background-color: #D9D9D9;
        color: rgb(0, 0, 0);
        border: none;
        padding: 5px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        font-weight: bold;
    }
    .edit-button strong {
        color: black;
        font-weight: bold;
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
</style>