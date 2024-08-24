<script>
    export let day = "10pm";
    export let date = "5/6";
    export let message = "Real Feel";
    export let temp = "29°C";
</script>
<div class=" text-white space-y-2 w-full h-full flex flex-col items-center justify-center">
    <div class= "grid grid-cols-8 justify-center items-center">
        <div class= "col-span-2">
            <div class="text-4xl font-bold text-center">{day} </div>
            <div class="text-4xl font-extralight  text-center">{date} </div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-4 items-center justify-center">
                <img src= ../../src/lib/images/rain.png alt = "logo" class =" h-35"/>
            <div class=" text-2xl font-extralight text-center">{message} {temp}</div>
        </div>
    </div>
  </div>