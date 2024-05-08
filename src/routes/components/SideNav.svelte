<script>
</script>

<div class="navbar sidenav-custom bg-base-200" >
    <div class="button-container" style = "padding-top: 50px;">
        <!-- Top buttons -->
        <button class="btn-icon">
            <a href="/">
                <img src="../../src/lib/images/dashboard.png" alt="Dashboard" class="icon" />
            </a>
        </button>
        <button class="btn-icon">
            <a href="/">
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
        <button class="btn-icon">
            <a href="/">
                <img src="../../src/lib/images/log-out.png" alt="Logout" class="icon" />
            </a>
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
</style>
