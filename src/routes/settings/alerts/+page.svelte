<script lang="ts">
    let modal: HTMLDialogElement;
  
    function openModal() {
        modal.showModal();
    }

</script>

<svelte:head>
	<title>CliMate - Alerts</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="content">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Alerts</div>
    <div class="flex-grow border-t border-primary-content"></div> 
    <div class="h-max text-2xl font-semibold py-5">Observed Locations</div>
    <div class="card text-primary-content w-full outline">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table">
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <td class="text-lg">Kuala Lumpur, Wilayah Persekutuan</td>
                            <th class="text-end">
                                <button class="btn btn-ghost btn-xs">
                                    <img src="../../src/lib/images/delete_icon.png" alt="Delete" class="h-full w-full icon"/>
                                </button>
                            </th>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                            <td class="text-lg">Petailing Jaya, Selangor</td>
                            <th class="text-end">
                                <button class="btn btn-ghost btn-xs">
                                    <img src="../../src/lib/images/delete_icon.png" alt="Delete" class="h-full w-full icon"/>
                                </button>
                            </th>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <td class="text-lg">Taiping, Perak</td>
                            <th class="text-end">
                                <button class="btn btn-ghost btn-xs">
                                    <img src="../../src/lib/images/delete_icon.png" alt="Delete" class="h-full w-full icon"/>
                                </button>
                            </th>
                        </tr>
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
                                <input type="checkbox" class="toggle"/>
                            </th>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                            <td class="text-lg">Wind</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle"/>
                            </th>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <td class="text-lg">Thunderstorm</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle"/>
                            </th>
                        </tr>
                        <!-- row 4 -->
                        <tr>
                            <td class="text-lg">Temperature</td>
                            <th class="text-end">
                                <input type="checkbox" class="toggle"/>
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
        <div class="modal-box max-w-5xl">
            <div class="text-2xl font-semibold p-7">Add New Location</div>
            <div class="modal-action">
            <form method="dialog">
                <button class="btn bg-primary text-primary-content">+ ADD</button>   
            </form>
            </div>
        </div>
    </dialog>
</section>



<style>
	.content {
        margin-top: 60px;
        margin-left: 400px;
        margin-right: 10px;
    }

    .icon {
        width: 100%; /* Full width of the button */
        filter: brightness(0) invert(0.8);
    }
</style>