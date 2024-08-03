<script>
    export let day = "10pm";
    export let date = "5/6";
    export let message = "ReelFeal";
    export let temp = "29°C";
</script>
<div class=" text-white space-y-2 w-full h-full flex flex-col items-center justify-center">
    <div class= "flex flex-row justify-center space-x-12">
        <div class= "flex flex-col justify-center">
            <div class="text-4xl font-bold ">{day} </div>
            <div class="text-4xl font-extralight  text-center">{date} </div>
        </div>
        <div class="flex flex-col items-center">
            <img src= ../../src/lib/images/rain.png alt = "logo" class =" h-40"/>
            <div class=" text-2xl font-extralight ">{message} {temp}</div>
        </div>
    </div>
  </div>