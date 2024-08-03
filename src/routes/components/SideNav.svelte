<script lang="ts">
    let modal: HTMLDialogElement;
  
    function openModal() {
      modal.showModal();
    }

    function closeModal(){
        modal.close();
    }
</script>

<!-- SideNav -->
<div class="fixed top-0 left-0 bottom-0 w-16 bg-base-200">
  <div class="flex flex-col items-center h-full gap-5 pt-24">
    
    <!-- Top buttons -->
    <div class="w-full flex justify-center" >
      <a href="/" class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform">
        <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" width="30">
      </a>
    </div>

    <div class="w-full flex justify-center" >
      <a href="/forecast" class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform">
        <img src="../../src/lib/images/forecast.png" alt="Forecast" class="icon" width="30">
      </a>
    </div>

    <div class="w-full flex justify-center" >
      <a href="/history" class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform">
        <img src="../../src/lib/images/history.png" alt="History" class="icon" width="30">
      </a>
    </div>

    <!-- Spacer to push the last button to the bottom -->
    <div class="spacer"></div>
    
    <!-- Bottom button -->
    <div class="w-full flex justify-center">
      <a href="/settings/profile" class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform">
        <img src="../../src/lib/images/profile_icon.png" alt="Profile" class="icon" width="30"/>
      </a>
    </div>
    <div class="w-full flex justify-center">
      <a href="/settings/alerts" class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform">
        <img src="../../src/lib/images/alerts_icon.png" alt="Alerts" class="icon" width="30"/>
      </a>
    </div>
    <div class="pb-5 w-full flex justify-center">
      <button class="w-12 h-12 hover:bg-indigo-900 rounded-2xl flex justify-center items-center hover:scale-110 transition-transform" on:click={openModal}>
        <img src="../../src/lib/images/log-out.png" alt="Logout" class="icon" width="30">
      </button>
    </div>
    <dialog bind:this={modal} class="modal">
      <div class="modal-box modal-custom bg-base-100" >
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="sign-in">Sign In</h3>
        <button class="google-icon" on:click={closeModal}>
          <a href="/settings/Profile">
              <!--Will turn this button to refer to google email login page. (placeholder for now)-->
              <img src="../../src/lib/images/google.png" alt="google" class="google" />
          </a>
        </button>
        <p class="conditions">By signing in you agree to CliMate's terms of service and privacy policy</p>
      </div>
    </dialog>
  </div>
</div>
  

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');


  .icon {

      filter: brightness(0) invert(0.8);
  }

  .spacer {
      flex-grow: 1; 
  }

  .modal {
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
  }

  .modal-box {
      width: 355px;
      height: 200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 1rem;
  }

  .sign-in{
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
      color: white;
      margin: 0; 
      margin-top: 0.2rem;
  }

  .conditions{
      font-size: 14px;
      color: white;
      margin: 5px; 
      text-align: center;
      font-weight: 5;
      line-height: 16px;
  }

  .google-icon {
      width: 122px;
      height: 40px;
      margin: 5px;
  }

</style>