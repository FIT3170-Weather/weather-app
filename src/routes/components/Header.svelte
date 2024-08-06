<script lang="ts">

    import { time } from '../clock.js'
    import { onMount, onDestroy } from 'svelte';

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

    // search bar (dummy data)
    let search_data = ["Selangor", "Johor", "Penang", "Subang"]
    let searchString = ""
    let filteredItems:any = [];
    let userClosed = true // user click outside the search box it will close the search

    // function to search the info inside the search bar
    const handleInput = () => {
        userClosed = false;
		return filteredItems = search_data.filter(item => item.toLowerCase().match(searchString.toLowerCase()));	
	}

    // function that allow user to click on the screen to remove the search widget.
    function onBodyClick() {
        userClosed = true
    }
    onMount(() => {
    document.body.addEventListener('click', onBodyClick);
    // Cleanup the event listener on destroy
    onDestroy(() => {
      document.body.removeEventListener('click', onBodyClick);
    });
  });
    
</script>

<!-- Header -->
<div class="navbar bg-base-200 flex-row max-h-[48px] z-50 justify-between">
    <!-- Logo -->
    <div class="pr-10 justify-self-start">
      <a class="btn btn-ghost text-xl" href="/"><img src="../../src/lib/images/climate_text_logo.png" alt="logo" width="100"></a>
    </div>
    <!-- Everything after logo in Header -->
    <!-- <div class="grow flex-row w-max space-x-5 self-start px-5 items-center"> -->
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
    <div class="form-control flex-grow pl-16 hidden md:flex">
        <input type="text" placeholder="Search location, city, postal code or place" bind:value="{searchString}" on:input="{handleInput}" class="search-bar input input-bordered w-full bg-neutral font-extralight"  />
    </div> 
    
    
    <div class="flex items-center px-5">

        <div class="flex md:hidden">
            <button class="btn btn-ghost btn-circle">
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
    <!-- </div> -->
</div>