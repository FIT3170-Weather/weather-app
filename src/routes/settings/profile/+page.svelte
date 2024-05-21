<script>
    import SideNav from "../../components/SideNav.svelte";
</script>

<svelte:head>
	<title>CliMate - Settings</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="content">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Profile</div>
    <div class="avatar grid-item w-24 rounded-full" style="height: 100px;">
        <img src="../src/lib/images/avatar_default.png" alt="avatar"/>
    </div>
    <div class="ghost-button" style="padding-top: 10px;">
        <button>Change Avatar</button>
    </div>
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px; padding-top: 30px">User Information</div>
    <div class="grid-container">
        <div class="grid-item">
            <div class="h-max text-2xl font-light">Name</div>
        </div>
        <div class="grid-item">
            <input type="text" placeholder="John Doe" class="input input-ghost w-full max-w-xs" />
        </div>
        <div class="grid-item">
            <div class="h-max text-2xl font-light">Home Location</div>
        </div>
        <div class="grid-item">
            <input type="text" placeholder="Petaling Jaya, Selangor" class="input input-ghost w-full max-w-xs" />
        </div>
        <div class="grid-item">
            <div class="h-max text-2xl font-light">Email</div>
        </div>
        <div class="grid-item">
            <input type="text" placeholder="johndoe@gmail.com" class="input input-ghost w-full max-w-xs disabled"/>
        </div>
</section>

<style>
	.content {
        margin-top: 60px;
        margin-left: 400px;
        margin-right: 10px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 20% 60%;
    }
    .grid-item {
        height: 60px;
        align-items: center;
        display: flex;
    }
    
</style>