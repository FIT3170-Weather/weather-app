# CliMate Weather App

## Table of Contents

1. [Project Overview](#project-overview)
2. [Software Requirements](#software-requirements)
3. [Hardware Requirements](#hardware-requirements)
4. [Setup and Installation Instructions](#setup-and-installation-instructions)
5. [How to Run the Project](#how-to-run-the-project)
6. [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
7. [Additional Notes](#additional-notes)
8. [Contact Information](#contact-information)

## Project Overview

CliMate is a weather application that provides weather information, within Malaysia for a 14 day window, 7 days in the past and 7 days in the future.

The application is a web app that is built using NodeJS, SvelteKit, TailwindCSS, etc.

There is a machine learning component to this web app, which predicts the weather for the next 7 days. This component is hosted in another repository.

## Software Requirements

- Node.js
- Svelte
- SvelteKit
- Tailwind-CSS
- DaisyUI
- Chart.js
- Firebase
- tested on Windows 11 and MacOS

## Hardware Requirements

- Requires a device which is able to connect to the internet and is able to run two separate repos simultaneously.

## Setup and Installation Instructions

Provide step-by-step instructions on how to set up the development environment and install the necessary dependencies.
Front-end

1. Install the all the relavant dependency that is located in the software requirement.
2. Clone the weather-app respository on to your device.
3. Open the develop branch in the weather-app respository in your prefered IDE.
4. Run "npm install" in the new terminal to download any other dependency.

Back-end 
1. Run "npm install firebase". 
2. Ensure `.env` file is created seperately with appropriate contents.

## How to Run the Project

Explain how to run the application or scripts, including any commands or parameters.
Front-end

1. Open the develop branch in the weather-app respository in your prefered IDE.
2. Run "npm run dev" in a new terminal and click the "http://127.0.0.1:5173/" link to open the application.

## Common Issues and Troubleshooting

### Issue 1: Firebase Error (auth/invalid-api-key).

1. Ensure that there is a `.env` file in the root directory of the project.
2. Ensure that the content of the `.env` file is correct.

## Putting Everything Together

### To run everything together...

1. Ensure `weather-forecasting` and `forecast-api` repositories are place in the same directory.
2. run the `weather-app` repository using "npm run dev" in the terminal, refer to [How to Run the Project](#how-to-run-the-project) for more info.
3. run the `forecast-api` repository by running the `main.py` at the root directory of that repository, refer to [`forecast-api`](https://github.com/FIT3170-Weather/forecast-api) for more info.

## Additional Notes

Provide any extra information that doesn’t fit in the other sections

## Contact Information

| Name                       | Email                       | Student ID |
| -------------------------- | --------------------------- | ---------- |
| Suman Datta                | sdat0004@student.monash.edu | 30668786   |
| Daryl Lim                  | dlim0036@student.monash.edu | 33560757   |
| Ryan Choo Yan Jhie         | rcho0046@student.monash.edu | 33455775   |
| Nicholas Yew               | nyew0001@student.monash.edu | 33642478   |
| Lim Zhi Cheng              | zlim0052@student.monash.edu | 33204128   |
| Mohamed Ammar Ahamed Siraj | amoh0157@student.monash.edu | 33187762   |
| Nicholas Lee               | nlee0060@student.monash.edu | 32840594   |
| Shyam Borkar               | sbor0018@student.monash.edu | 32801459   |
| Lai Carson                 | lcar0029@student.monash.edu | 32238436   |
| Hanideepu Kodi             | hkod0003@student.monash.edu | 33560625   |
