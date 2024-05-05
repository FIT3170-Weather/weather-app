<script>
    var currentDateTime = new Date();

    var displayCurrentDay = currentDateTime.toLocaleString('default', { weekday:'long' });

    var currentDay = currentDateTime.toLocaleString('default', { day:'2-digit' });
    var currentMonth = currentDateTime.toLocaleString('default', { month: 'long' });
    var currentYear = currentDateTime.toLocaleString('default', { year: 'numeric' });
    var displayCurrentDateTime = currentDay + " " + currentMonth + ", " + currentYear;

    var currentHour = currentDateTime.toLocaleString('default', { hour: '2-digit' });
    var currentMinute = currentDateTime.toLocaleString('default', { minute: '2-digit' });
    var displayCurrentTime = currentHour + ":" + currentMinute;
</script>

<div class="navbar bg-base-200 flex-row">
    <div class="">
      <a class="btn btn-ghost text-xl"><img src="../../src/lib/images/climate_text_logo.png" alt="logo" width="100"></a>
    </div>
    <div class="grow flex-row w-max space-x-5 self-start px-5">
        <div class="grow-0 h-fit flex flex-row space-x-3 items-center">
            <div class="flex flex-col">
                <div class="h-1/2 text-base font-semibold">{displayCurrentDay}</div>
                <div class="h-1/2 text-sm"> {displayCurrentDateTime}</div>
            </div>
            <div class="h-max text-2xl font-light border-l px-3">{displayCurrentTime}</div>
        </div>
        <div class="form-control grow">
          <input type="text" placeholder="&#xf002; Search location, city, postal code, or place" class="search-bar input input-bordered w-full bg-base-100" />
        </div>
    </div>
  </div>