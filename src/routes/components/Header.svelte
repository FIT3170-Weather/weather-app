<script lang="ts">
	import { writable } from 'svelte/store';
	import { authHandlers } from '../../store/store.js';

    export let searchData;

    import { time } from '../clock.js';
    let loginModal: HTMLDialogElement;
    export let user = writable<string | null>(null); 

    onMount(async () => {
        const userId = sessionStorage.getItem('userId');
        user.set(userId);
        console.log(userId);
    });

    const unsubscribe = user.subscribe(value => {
        if (value) {
        console.log('User is signed in:', value);
        } else {
        console.log('User is signed out');
        }
    });

    onDestroy(() => {
        unsubscribe();
    });
    
    function openLoginModal() {
        loginModal.showModal();
    }

    function closeLoginModal(){
        loginModal.close();
        window.location.reload()
    }
    // formatter to format day
    const dayFormatter = new Intl.DateTimeFormat('en', {
        weekday: 'long',
    });
    
    // formatter to format date
    const dateFormatter = new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // formatter to format time
	const timeFormatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
		}
	);

    import { themeStore } from '../stroreTheme';

    // Function to toggle the theme value
    function toggleThemeValue() {
        themeStore.update(current => {
            const newTheme = current === 'climate_light' ? 'climate_dark' : 'climate_light';
            document.documentElement.setAttribute('data-theme', newTheme);
            return newTheme;
    });
    }

    import { onDestroy, onMount } from 'svelte';

    let search_data:string[] = []
    // convert json to array of locaitons
    onMount(() => {
        for (var i in searchData.locations) {
            search_data.push(i.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ', ' + 'Malaysia')
        }
    })


    let searchString = ""
    let filteredItems: string[] = [];
    let findItemItems: string[] = [];
    let userClosed = true
    let showDropdown = false;
    let modal: HTMLDialogElement;
    let mobileViewItem: string;

    function openModal() {
        modal.showModal();
        searchString = "" // clear input field
    }

    // function to search the info inside the search bar
    const handleInput = () => {
        userClosed = true
        showDropdown = true
        filteredItems = []
        findItemItems = []
        console.log(searchString);
        if (searchString.length > 0) {
            userClosed = false;
            findItemItems = search_data.filter((item: string) => item.toLowerCase().startsWith(searchString.toLowerCase()));
            if (findItemItems.length !== 0){
                filteredItems = findItemItems
            }
            else{
                userClosed = true
            }
        }
        return filteredItems
	}

    // function to clear search if the x button is pressed
    function clearSearch() {
        searchString = "";
        userClosed = true;
    }


    // function that allows the info will be updated based on the location selected.
    function changeLocationNormalView(items : string) {
        return () => {
        userClosed = true;
        searchString = "";
        showDropdown = false;
        updateLocation(items);
        };
    }

    function changeLocationMobileView(items : string) {
        return () => {
        userClosed = true;
        searchString = items;
        showDropdown = false;
        mobileViewItem = items;
        };
    }

    function updateLocation(items: string){
        // change value back to lowercase and convert space to dash
        let str = items.split(",")[0].toLowerCase().replace(/ /g, '-')
        sessionStorage.setItem("location", str) // set user selected location to session storage 
        window.location.reload() // reload the page the user is currently on
    }

    // add logic and close modal
    const handleLocationChangeSubmit = (event : any) => {
            event.preventDefault();
            modal.close();
            searchString = "";
            updateLocation(mobileViewItem);
    };

    function signOut() {
        authHandlers.logout(); 
        user.set(null);
        sessionStorage.removeItem('userId');
        closeLoginModal();
        window.location.href = "/" // Redirect to home page
    }
    
</script>

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Headers -->
    <div class="drawer-content fixed navbar bg-base-200 flex-row max-h-[48px] z-50 justify-between">
        <div class="pr-10 justify-self-start">
            <label for="my-drawer" class="btn btn-ghost px-1 md:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            </label>
            <!-- Logo -->
            <a class="btn btn-ghost text-xl px-1" href="/"><img src="../../src/lib/images/climate_text_logo.png" alt="logo" width="100"></a>
        </div>
    
        <!-- DateTime -->
        <div class="flex-row items-center space-x-3 hidden md:flex"> 
            <!-- Date -->
            <div class="flex flex-col">
                <div class="h-1/2 text-base">{dayFormatter.format($time)}</div>
                <div class="h-1/2 text-sm font-extralight"> {dateFormatter.format($time)}</div>
            </div>
            <!-- Time -->
            <div class="text-2xl font-extralight">{timeFormatter.format($time)}</div>
        </div>

        <!-- Search Bar -->
        <div class="self-start relative form-control flex-grow pl-16 hidden md:flex">
            <input type="text" placeholder="Search location, city, postal code, or place" bind:value="{searchString}" on:input="{handleInput}" class="search-bar input input-bordered w-full bg-neutral"  />
          
          <!-- search bar algoriithm -->
          {#if !userClosed} 
          <!-- <button on:click={clearSearch} class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">✕</button> -->
          <button on:click={clearSearch} class="absolute pt-12 self-end pr-4 transform -translate-y-1/2 text-gray-500">✕</button>
              {#if filteredItems.length > 0 }
                  <div class="bg-white flex flex-col rounded overflow-hidden z-50 w-full pl-3 pr-10">
                      {#each filteredItems as items}
                          <button on:click={() => changeLocationNormalView(items)()} class="block z-20 cursor-pointer text-black my-2 text-left">{items}</button>    
                      {/each}
                  </div>
              {:else}
                  <div class="bg-white flex flex-col rounded overflow-hidden z-50 w-full pl-3 pr-10">
                      {#each search_data as items}
                          <button on:click={() => changeLocationNormalView(items)()} class="block z-20 cursor-pointer text-black my-2 text-left">{items}</button>    
                      {/each}
                  </div>
              {/if}
          {/if}
      </div> 
      
      <div class="flex items-center px-5">
          <!-- search button for mobile view -->
          <div class="flex md:hidden">
              <button class="btn btn-ghost btn-circle" on:click={openModal}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              </div>

        
            <!-- Light-dark mode toggle -->
            <label class="swap swap-rotate">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" class="theme-controller" value={themeStore} on:change={toggleThemeValue} />

                <!-- sun icon -->
                <svg class="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                <!-- moon icon -->
                <svg class="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
        </div>
    </div>
    <div class="drawer-side z-50">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 min-h-full w-6/7">
            <!-- Sidebar content here -->
            <li>
                <div class="flex flex-row justify-between">
                    <a class="btn btn-ghost pl-0" href="/"><img src="../../src/lib/images/climate_text_logo.png" alt="logo" width="100"></a>
                    <!-- Date -->
                    <div class="flex flex-col">
                        <div class="h-1/2 text-base">{dayFormatter.format($time)}</div>
                        <div class="h-1/2 text-sm font-extralight"> {dateFormatter.format($time)}</div>
                    </div>
                </div>
            </li>
            <div class="divider my-0 py-1"></div>
            <li>      
                <a href="/" class="w-fufull h-12 rounded-2xl items-center">
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" width="30">
                        <div class="font-medium">Dashboard</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="/forecast" class="w-full h-12 rounded-2xl items-center">
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/forecast.png" alt="Forecast" class="icon" width="30">
                        <div class="font-medium">Forecast</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="/history" class="w-full h-12 rounded-2xl items-center">
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/history.png" alt="History" class="icon" width="30">
                        <div class="font-medium">History</div>
                    </div>
                </a>
            </li>
            <div class="flex flex-grow"></div>
           
            {#if user} 
            <li>
                <a href="/profile" class="w-full h-12 rounded-2xl items-center">
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/profile_icon.png" alt="Profile" class="icon" width="30"/>
                        <div class="font-medium">Profile</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="/alerts" class="w-full h-12 rounded-2xl items-center">
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/alerts_icon.png" alt="Alerts" class="icon" width="30"/>
                        <div class="font-medium">Alerts</div>
                    </div>
                </a>
            </li>
            {/if} 
            <li>
                <button class="w-full h-12 rounded-2xl items-center" on:click={openLoginModal}>
                    <div class="flex flex-row items-center space-x-5">
                        <img src="../../src/lib/images/log-out.png" alt="Logout" class="icon" width="30">
                        {#if $user}
                            <div class="font-medium">Logout</div>
                        {:else}
                            <div class="font-medium">Login</div>
                        {/if}
                    </div>
                </button>
            </li>
        </ul>
    </div>

</div>

<!-- Modal for changing location-->
<dialog bind:this={modal} class="modal" on:close={() => (showDropdown = false)}>
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div class="text-2xl font-semibold">Search location</div>
        <div class="form-control grow py-4">
            <input type="text" placeholder="Search location" class="search-bar input input-bordered w-full bg-neutral" bind:value={searchString} on:input={handleInput}/>
            
            
            {#if showDropdown && filteredItems.length > 0}
                <ul class="menu dropdown-content bg-base-200 rounded-box z-[1] w-full p-2 shadow">
                    {#each filteredItems as items}
                        <li class="w-full" >
                            <button on:click={() => changeLocationMobileView(items)()}>
                                {items}
                            </button>
                        </li>
                    {/each}
                </ul>
            
            {/if}
        </div>
        <div class="modal-action">
        <form method="dialog" on:submit={handleLocationChangeSubmit}>
            <button class="custom-btn btn" disabled={!(filteredItems.includes(searchString))}>SEARCH</button>   
        </form>
        </div>
    </div>
</dialog>

<!-- Single Modal for both Login and Logout -->
<dialog bind:this={loginModal} class="modal">
    <div class="modal-box bg-base-100">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {#if $user}
            <!-- Sign Out Modal Content -->
            <h3 class="text-2xl font-semibold ">Sign Out</h3>
            <p class=" text-lg mt-4 text-center">Are you sure you want to sign out?</p>
            <div class="text-center mt-4">
                <button class="w-[122px] h-[40px] m-[5px] rounded btn" on:click={signOut}>
                Sign Out
                </button>
            </div>
        {:else}
        <!-- Sign In Modal Content -->
                <h3 class="text-2xl font-semibold">Sign In</h3>
            <div class="text-center">
                <button class="w-[122px] h-[40px] m-[5px]" on:click={() => authHandlers.loginWithGoogle(closeLoginModal)}>
                <img src="../../src/lib/images/google.png" alt="google"/>
                </button>
            </div>
            <p class="text-xs font-extralight">By signing in you agree to CliMate's terms of service and privacy policy</p>
        {/if}
    </div>
    </dialog>