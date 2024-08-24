<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { writable } from 'svelte/store';
  import { authHandlers } from "../../store/store";

  let modal: HTMLDialogElement;
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

  function openModal() {
    modal.showModal();
  }

  function closeModal(){
    modal.close();
    window.location.reload();
  }

  function signOut() {
    authHandlers.logout(); 
    user.set(null);
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('location');
    closeModal();
    window.location.href = "/" // Redirect to home page
  }
</script>

<!-- SideNav -->
<div class="hidden fixed top-0 left-0 bottom-0 w-16 bg-base-200 md:block z-50">
  <div class="flex flex-col items-center h-full gap-5 pt-24">
    
    <!-- Top buttons -->
    <div class="w-full flex justify-center" >
      <a href="/" class="icon-container w-12 h-12 rounded-2xl flex justify-center items-center">
        <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" width="30">
      </a>
    </div>

    <div class="w-full flex justify-center" >
      <a href="/forecast" class="icon-container w-12 h-12 rounded-2xl flex justify-center items-center">
        <img src="../../src/lib/images/forecast.png" alt="Forecast" class="icon" width="30">
      </a>
    </div>

    <div class="w-full flex justify-center" >
      <a href="/history" class="icon-container w-12 h-12 rounded-2xl flex justify-center items-center">
        <img src="../../src/lib/images/history.png" alt="History" class="icon" width="30">
      </a>
    </div>

    <!-- Spacer to push the last button to the bottom -->
    <div class="flex flex-grow"></div>
    
    {#if $user}
    <!-- Show profile and alerts icons if user is signed in -->
    <div class="w-full flex justify-center">
      <a href="/profile" class="icon-container w-12 h-12  rounded-2xl flex justify-center items-center">
        <img src="../../src/lib/images/profile_icon.png" alt="Profile" class="icon" width="30"/>
      </a>
    </div>
    <div class="w-full flex justify-center">
      <a href="/alerts" class="icon-container w-12 h-12  rounded-2xl flex justify-center items-center">
        <img src="../../src/lib/images/alerts_icon.png" alt="Alerts" class="icon" width="30"/>
      </a>
    </div>
    {/if}
    
    <!-- Login/Logout Button -->
    <div class="pb-5 w-full flex justify-center">
      <button class="icon-container w-12 h-12 rounded-2xl flex justify-center items-center" on:click={openModal}>
        <img src={$user ? "../../src/lib/images/log-out.png" : "../../src/lib/images/log-in.png"} 
          alt={$user ? "Logout" : "Login"} class="icon" width="30">
      </button>
    </div>

    <!-- Single Modal for both Login and Logout -->
    <dialog bind:this={modal} class="modal">
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
            <button class="w-[122px] h-[40px] m-[5px]" on:click={() => authHandlers.loginWithGoogle(closeModal)}>
              <img src="../../src/lib/images/google.png" alt="google"/>
            </button>
          </div>
          <p class="text-xs font-extralight">By signing in you agree to CliMate's terms of service and privacy policy</p>
        {/if}
      </div>
    </dialog>
  </div>
</div>
