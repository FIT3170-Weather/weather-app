
<!-- the purple container -->
<div class="border border-white card bg-base-content bg-opacity-10 shadow-xl">
    <div class="items-center space-y-8 p-5"> 
        <!-- the container for the temperatue graph -->
        <div class = " bg-neutral rounded-3xl px-5 py-2 flex items-center">
            <div class= "flex-1 h-[21vh] w-[25vw]">
                <!-- title -->
                <div class=" text-start text-white">    
                    <h2 class=" flex items-center text-xl font-semibold space-x-2">Average Temperatures 
                        <span class=" text-xl font-extralight mx-1">(°C)</span>
                        <!-- Icon next to the title -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                        
                    </h2>
                    <!-- Line below title -->
                    <div class=" bg-error-content h-0.5 mx-auto"></div> 
                </div>
                <!-- The temperature graph -->
                <div class= "h-[90%] w-full py-5">
                    <canvas bind:this={temperatureChart} id="myTemperatureChart" ></canvas>
                </div>
            </div>
        </div>
        <!-- the container for the rainfall graph -->
        <div class =" bg-neutral rounded-3xl px-5 py-2 flex items-center">
            <div class= "flex-1 h-[21vh] w-[25vw]">
                <!-- title -->
                <div class="text-start text-white">
                    <h2 class=" flex items-center text-xl font-semibold space-x-2">Average Rainfall
                        <span class=" text-xl font-extralight mx-1">(millimeters)</span>
                        <!-- Icon next to the title -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="blue" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                        
                    </h2>
                    <!-- Line below title -->
                    <div class=" bg-error-content h-0.5 mx-auto"></div> 
                </div>
                <!-- The rainfall graph -->
                <div class= "h-[90%] w-full py-5">
                    <canvas bind:this={percipitationChart} id="myPercipitationChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- creating both graph -->
<script>
// @ts-nocheck


import {onMount} from 'svelte';
import Chart from 'chart.js/auto';
// @ts-ignore
import ChartDataLabels from 'chartjs-plugin-datalabels';


import { themeStore } from '../stroreTheme';
$: updateChartColors(), $themeStore; // React to theme changes

// @ts-ignore
function updateChartColors() {
    const themeColors = {
        climate_light: {
            yAxisLine: '#1717174c', // Light theme y-axis line color
            textColor: '#171717', // Light theme text colour in the graph
        },
        climate_dark: {
            yAxisLine: '#E5E5E54C', // Dark theme y-axis line color
            textColor: '#f1f5f9', // Dark theme text colour in the graph
        }
    };
    // @ts-ignore
    if (myTempChart) {
        myTempChart.options.plugins.datalabels.color = themeColors[$themeStore].textColor;
        myTempChart.options.scales.x.ticks.color = themeColors[$themeStore].textColor;
        myTempChart.options.scales.y.grid.color = themeColors[$themeStore].yAxisLine;
        myTempChart.update();
    }
    if (myPerciChart) {
        myPerciChart.options.plugins.datalabels.color = themeColors[$themeStore].textColor;
        myPerciChart.options.scales.x.ticks.color = themeColors[$themeStore].textColor;
        myPerciChart.options.scales.y.grid.color = themeColors[$themeStore].yAxisLine;
        myPerciChart.update();
    }
}



Chart.register(ChartDataLabels);
// setting the colour of the graph
let xTickColour = '#E5E5E54C'       // NEED TO CHANGE based on the theme
// @ts-ignore
let redGradient = function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;

        if (!chartArea) {
            return;
        }
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, '#FF776F'); // Start color with some transparency
        gradient.addColorStop(1, '#994842'); // End color with some transparency

        return gradient;
    }

// @ts-ignore
let blueGradient = function(context) {
    const chart = context.chart;
    const {ctx, chartArea} = chart;

    if (!chartArea) {
        return;
    }
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, '#2AA1FA'); // Start color with some transparency
    gradient.addColorStop(1, '#195F94'); // End color with some transparency

    return gradient;
}


// creating temperature graph
let chartAvgTemperature = [24,25,28,30,30,29,28,31,27,29,30,28];
let chartDays = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let ctx;
/**
 * @type {Chart<"bar", number[], string>}
 */
let myTempChart;
// @ts-ignore
let temperatureChart;

onMount(async () => {
        // @ts-ignore
        ctx = temperatureChart.getContext('2d');
        // @ts-ignore
        myTempChart = new Chart(ctx, {
                type: 'bar',
                data: {
                        labels: chartDays,                  // x-axis data
                        datasets: [{
                            backgroundColor: redGradient,   // bar colour
                            data: chartAvgTemperature,      // y-axis data
                            barPercentage: 0.9,             // set the distance between each bar
                        }]      
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        // @ts-ignore
                        // use to display the data value on top of each bar.
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            font: {
                                weight: 'bold',
                                size: 10
                            },
                            // @ts-ignore
                            formatter: function (value, context) {
                                return value;
                            }
                        },
                        tooltip: {
                            callbacks: {
                                // @ts-ignore
                                //  use to display the value of the data when hover the bar.
                                title: function(tooltipItems) {
                                    return ''; // Return empty string to not show the title
                                },
                                // @ts-ignore
                                label: function(tooltipItem) {
                                    // Only return the Y value
                                    return tooltipItem.parsed.y + "°C";
                                }
                            },
                            displayColors: false        // This hides the color box in the tooltip
                        },
                        title: {
                            display: false              
                        },
                        legend: {
                            display:false,              
                        },
                    },
                    scales: {
                        y: {
                            max: 60,                     
                            border: {
                                display: false,         
                            },
                            ticks: {
                                display: false,          
                            },
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: xTickColour   
                            }
                        },
                        x: {
                            border: {
                                display: true,
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 10
                                },
                            }, 
                            grid: {
                                display: false,
                            }
                        }
                    }, 
                }
        });
        updateChartColors();
    });

// percipitation graph
let chartAvgPercipitation = [10, 50, 30, 20, 20, 30,25,30,40,50,40,30];
let ctxPercipitation;
/**
 * @type {Chart<"bar", number[], string>}
 */
let myPerciChart;
// @ts-ignore
let percipitationChart;

onMount(async () => {
        // @ts-ignore
        ctxPercipitation = percipitationChart.getContext('2d');
        // @ts-ignore
            myPerciChart = new Chart(ctxPercipitation, {
                type: 'bar',
                data: {
                        labels: chartDays,
                        datasets: [{
                            backgroundColor: blueGradient,
                            data: chartAvgPercipitation,
                            barPercentage: 0.9,
                        }]      
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        // @ts-ignore
                        //  use to display the value of the data when hover the bar.
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            font: {
                                weight: 'bold',
                                size: 10
                            },
                            // @ts-ignore
        
                            formatter: function (value, context) {
                                return value;
                            }
                        },
                        tooltip: {
                            callbacks: {
                                // @ts-ignore
                                //  use to display the value of the data when hover the bar.
                                title: function(tooltipItems) {
                                    return ''; // Return empty string to not show the title
                                },
                                // @ts-ignore
                                label: function(tooltipItem) {
                                    // Only return the Y value
                                    return tooltipItem.parsed.y + "mm";
                                }
                            },
                            displayColors: false // This hides the color box in the tooltip
                        },
                        title: {
                            display: false
                        },
                        legend: {
                            display:false,
                        },
                    },
                    scales: {
                        y: {
                            max: 80,
                            border: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: xTickColour   
                            }
                        },
                        x: {
                            border: {
                                display: true,
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 10
                                },

                            }, 
                            grid: {
                                display: false,
                                
                            }
                        }
                    },
                }
        });
        updateChartColors()
    });
</script>
