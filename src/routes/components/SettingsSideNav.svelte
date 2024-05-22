<script>
</script>

<div class="navbar sidenav-custom bg-base-200">
  <div class="button-container" style="padding-top: 50px;">
    <div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Settings</div>
    <a href="/settings/profile">
      <button class="ghost-button">
        <img src="../src/lib/images/profile_icon.png" alt="Icon" class="icon">
        <div class="h-max text-3xl font-light">Profile</div>
      </button>
    </a>
    <a href="/settings/preferences">
      <button class="ghost-button">
        <img src="../src/lib/images/preferences_icon.png" alt="Icon" class="icon">
        <div class="h-max text-3xl font-light">Preferences</div>
      </button>
    </a>
    <a href="/settings/alerts">
      <button class="ghost-button">
        <img src="../src/lib/images/alerts_icon.png" alt="Icon" class="icon">
        <div class="h-max text-3xl font-light">Alerts</div>
      </button>
    </a>
  </div>
</div>

<style>
  .icon {
      width: 100%; /* Full width of the button */
      filter: brightness(0) invert(0.8);
  }

  .navbar {
      position: fixed;
      top: 64px;
      left: 70px;
      bottom: 0;
      width: 300px;
      background-color: #5C5B85;
  }

  .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      gap: 20px;
  }

  .ghost-button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 270px;
    border-radius: 20px;
    cursor: pointer;
  }

  .ghost-button:hover {
    background-color: grey;
  }

  .ghost-button .icon {
      margin-right: 10px;
      width: 36px;
      height: 36px;
  }

</style>
