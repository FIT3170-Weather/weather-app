<script>
  export let isOpen = true; // Sidebar initially open
</script>

<div class="sidenav bg-base-200" class:open={isOpen}>
  <div class="button-container">
      <!-- Top buttons -->
      <button class="btn-icon">
          <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" />
      </button>
      <button class="btn-icon">
          <img src="../../src/lib/images/forecast.png" alt="Forecast" class="icon" />
      </button>
      <button class="btn-icon">
          <img src="../../src/lib/images/history.png" alt="History" class="icon" />
      </button>
      <button class="btn-icon">
          <img src="../../src/lib/images/search.png" alt="Search" class="icon" />
      </button>
      <!-- Spacer to push the last button to the bottom -->
      <div class="spacer"></div>
      <!-- Bottom button -->
      <button class="btn-icon">
          <img src="../../src/lib/images/log-out.png" alt="Logout" class="icon" />
      </button>
  </div>
</div>

<style>
  .btn-icon {
      width: 48px; /* Adjust button size */
      height: 48px; /* Adjust button size */
      padding: 10px; /* Button padding */
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s, transform 0.3s;
  }
  .btn-icon:hover {
      background-color: grey;
  }

  .icon {
      width: 100%; /* Full width of the button */
      filter: brightness(0) invert(0.8);
  }

  .sidenav {
      position: fixed;
      top: 60px;
      left: 0;
      bottom: 0;
      width: 70px;
      transition: transform 0.3s ease;
      transform: translateX(-100%);
  }

  .sidenav.open {
      transform: translateX(0);
  }

  .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
  }

  .spacer {
      flex-grow: 1; /* Takes up all available space */
  }
</style>
