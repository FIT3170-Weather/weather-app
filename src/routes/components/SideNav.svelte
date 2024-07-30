<script lang="ts">
    let modal: HTMLDialogElement;
  
    function openModal() {
      modal.showModal();
    }

    function closeModal(){
        modal.close();
    }
    
  </script>
  
  <div class="navbar sidenav-custom bg-base-200 z-20">
    <div class="button-container" style="padding-top: 50px;">
      <!-- Top buttons -->
      <button class="btn-icon">
        <a href="/">
          <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" />
        </a>
      </button>
      <button class="btn-icon">
        <a href="/forecast">
          <img src="../../src/lib/images/forecast.png" alt="Forecast" class="icon" />
        </a>
      </button>
      <button class="btn-icon">
        <a href="/">
          <img src="../../src/lib/images/history.png" alt="History" class="icon" />
        </a>
      </button>
      <button class="btn-icon">
        <a href="/">
          <img src="../../src/lib/images/search.png" alt="Search" class="icon" />
        </a>
      </button>
      <!-- Spacer to push the last button to the bottom -->
      <div class="spacer"></div>
      <!-- Bottom button -->
      <button class="btn-icon" on:click={openModal}>
        <a href="/">
          <img src="../../src/lib/images/log-out.png" alt="Logout" class="icon" />
        </a>
      </button>
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

    .btn-icon {
        width: 48px; /* Adjust button size */
        height: 48px; /* Adjust button size */
        padding: 10px; /* Button padding */
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .btn-icon:hover {
        background-color: grey;
        border-radius: 50%;
    }

    .icon {
        width: 100%; /* Full width of the button */
        filter: brightness(0) invert(0.8);
    }

    .navbar {
        position: fixed;
        top: 60px;
        left: 0;
        bottom: 0;
        width: 70px;
    }


    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: 20px;
    }

    .spacer {
        flex-grow: 1; /* Takes up all available space */
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