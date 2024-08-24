
<!-- creating both graph -->
<script lang="ts">
    // @ts-nocheck
    import {onMount} from 'svelte';
    import Chart from 'chart.js/auto';
    // @ts-ignore
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import { themeStore } from '../stroreTheme';
    $: updateChartColors(), $themeStore; // React to theme changes   
	export let datas;

    
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
    
    function getResponsiveFontSize() {
            const width = window.innerWidth;
            const vw = Math.max(document.documentElement.clientWidth || 0, width || 0);
            let selectedSize = vw * 0.01 // 2% of viewport width
            if (width < 1024) {
                selectedSize = 10;  // Font size for extra small devices
            }
            return selectedSize;
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
    let chartAvgTemperature;
    let chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let ctx;
    let myTempChart;
    // @ts-ignore
    let temperatureChart;
    // percipitation graph
    let chartAvgPercipitation;
    let ctxPercipitation;
    let myPerciChart;
    // @ts-ignore
    let percipitationChart;

    let graphData: any = null;
	let graphDataError = null;
    let location: any;

    onMount(async () => {

        location = datas.location;
        try {
            const urlGraphData = `http://localhost:8000/monthly?location_code=` + location;
            // Make the POST request using fetch
            const response = await fetch(urlGraphData, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            graphData = await response.json();
            console.log(graphData);

            chartAvgTemperature = graphData.temperature;
            chartAvgPercipitation = graphData.total_precipitation;


        } catch (err) {
            // @ts-ignore
            graphDataError = err.message;
            console.error('Error:', err);
        }
 
        // temperaure graph
        // @ts-ignore
            ctx = temperatureChart.getContext('2d');
            // @ts-ignore
            myTempChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                            labels: chartMonths,                  // x-axis data
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
                                    size: getResponsiveFontSize()
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
                                        size: getResponsiveFontSize()
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

            // percipitation graph
            // @ts-ignore
            ctxPercipitation = percipitationChart.getContext('2d');
            // @ts-ignore
                myPerciChart = new Chart(ctxPercipitation, {
                    type: 'bar',
                    data: {
                            labels: chartMonths,
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
                                    size: getResponsiveFontSize() // datalable
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
                                max: 1000,
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
                                        size: getResponsiveFontSize()
                                    },
    
                                }, 
                                grid: {
                                    display: false,
                                    
                                }
                            }
                        },
                    }
            });
            
            window.addEventListener('resize', resizeChart);
            function resizeChart() {
                myPerciChart.options.plugins.datalabels.font.size = getResponsiveFontSize();
                myPerciChart.options.scales.x.ticks.font.size = getResponsiveFontSize();
                myPerciChart.update();
                myTempChart.options.plugins.datalabels.font.size = getResponsiveFontSize();
                myTempChart.options.scales.x.ticks.font.size = getResponsiveFontSize();
                myTempChart.update();
            }
            updateChartColors()
        });        
        
    </script>
    

<!-- the purple container -->
<div class="card shadow-xl h-full w-full">
    <div class="flex flex-col space-y-4 items-center p-5 h-full w-full"> 
        
        <!-- the container for the temperatue graph -->
        <div class = " bg-neutral rounded-3xl px-5 py-2 flex items-center h-1/2 w-full">
            <div class= "flex-1 h-[21vh] w-[25vw]">
                
                <!-- title -->
                <div class=" text-start text-white">    
                    <h2 class=" flex items-center text-xl font-semibold space-x-2 max-sm:text-sm">Average Temperatures 
                        <span class=" text-xl font-extralight mx-1 max-sm:text-sm">(°C)</span>
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
        <div class =" bg-neutral rounded-3xl px-5 py-2 flex items-center h-1/2 w-full">
            <div class= "flex-1 h-[21vh] w-[25vw]">
                <!-- title -->
                <div class="text-start text-white">
                    <h2 class=" flex items-center text-xl font-semibold space-x-2 max-sm:text-sm">Average Rainfall
                        <span class=" text-xl font-extralight mx-1 max-sm:text-sm">(millimeters)</span>
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


