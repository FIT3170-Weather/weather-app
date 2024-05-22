<script>
    export let day = "10pm";
    export let date = "5/6";
    export let highTemp = "30°C";
    export let lowTemp = "29°C";
    export let message = "ReelFeal";
    export let temp = "29°C";
    export let description = "nice weatherjaspdjapsjdp adjpasjdadad  dakdnlasndknsa";
</script>
<div class=" text-black space-y-2 w-full h-full flex flex-col items-center">
    <div class= "flex flex-row justify-center">
        <div class= "flex flex-col mt-7">
            <div class="text-xl font-bold text-black">{day} </div>
            <div class="text-xl font-extralight text-black text-center">{date} </div>
        </div>
        <div class="flex flex-col items-center space-x-2">
            <img src= ../../src/lib/images/rain.png alt = "logo" class =" h-32"/>
            <div class= "flex flex-row">
                <div class="text-3xl font-bold text-black">{highTemp}</div>
                <div class="text-xl text-gray-300">/{lowTemp}°</div>
            </div>
            <div class="text-lg font-extralight text-black">{message} {temp}°</div>
        </div>
    </div>
    <div class="text-sm px-2 text-black text-center">{description}</div>
  </div>