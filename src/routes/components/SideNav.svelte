<script>
    export let isOpen = true; // Initially open
  </script>
   <div class="sidenav" class:open={isOpen}>
    <div class="button-container">
        <!-- Add buttons here -->
    </div>
  </div>
   <style>
    .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    }
   
    .sidenav {
      position: fixed;
      top: 60px;
      left: 0;
      bottom: 0%;
      width: 70px;
      background-color: #13122F;
      padding: 10px;
      transition: transform 0.3s ease;
      transform: translateX(-100%);
    }
     .sidenav.open {
      transform: translateX(0);
    }
     button {
      display: block;
      margin-bottom: 10px;
      background: none;
      border: none;
      cursor: pointer;
    }
     img {
      width: 100%;
    }
  </style>
 