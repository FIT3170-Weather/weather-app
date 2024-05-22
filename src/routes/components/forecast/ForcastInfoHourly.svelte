<script>
    export let time = "10pm";
    export let temp = "20°C";
    export let message = "RealFeel";
    export let condition = ["hi", "No"]
     
</script>

<div class= "p-4 space-y-3 w-full text-white">
    <div class= "flex flex-col justify-center items-center mb-2">
        <div class="text-2xl mb-2 font-bold">{time}</div>
        <div class="text-yellow-300 flex flex-col">
            <img src= ../../src/lib/images/rain.png alt = "logo" class =" h-20"/>
        </div>
        <div class="text-2xl font-bold">{temp}</div>
    </div>
    
    <div class="flex justify-center items-center align-center space-x-6 ">
        {#each condition as item}
        <div class = "bg-purple-700 w-32 h-auto rounded-lg" >
            <div class="text-center my-1 text-white ">{item}</div>
        </div>
        {/each}
    </div>
    <div class="text-center text-xl font-extralight">{message} {temp}</div>
</div>


