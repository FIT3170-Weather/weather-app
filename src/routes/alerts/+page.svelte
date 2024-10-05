<script lang="ts">
	import { writable, get } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { onMount } from 'svelte';

	// get locations obtained in layout.js
	import type { PageData } from './$types';
	export let data: PageData;

	let locations: string[] = [];
	let observedLocations = writable<string[]>([]);

	// convert json to array of locaitons
	onMount(() => {
		for (var i in data.locations) {
			locations.push(
				i.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ', ' + 'Malaysia'
			);
		}

		for (var j in data.preferences.data) {
			observedLocations.update((locations) => [...locations, data.preferences.data[j]]);
		}
	});

	let modal: HTMLDialogElement;
	let alert = false;

	let newLocation = '';
	let showDropdown = false;

	let filteredLocations: string[] = [];

	function convertTextToUserView(text: string): string {
		return text.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ', ' + 'Malaysia';
	}

	function convertToDatabaseFormat(text: string): string {
		return text.split(',')[0].toLowerCase().replace(/ /g, '-');
	}

	function getStringsWithPrefix(list: string[], prefix: string): string[] {
		if (prefix.length > 0) {
			// match options with entered prefix
			return list.filter((str) => str.toLowerCase().startsWith(prefix.toLowerCase()));
		}
		return [];
	}

	function openModal() {
		newLocation = '';
		modal.showModal();
	}

	async function updateDatabase(newLocationsList: string[]) {
		try {
			const response = await fetch('/api/update_location/' + sessionStorage.getItem('userId'), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ locations: newLocationsList })
			});

			if (!response.ok) {
				// Handle non-2xx status codes
				console.error('Failed to update locations');
			} else {
				// Optionally handle the success response
				console.log('Successfully updated locations');
			}
		} catch (error) {
			// Handle any errors that occur during the fetch
			console.error('Error updating locations:', error);
		}
	}

	// alert
	let alertData: any = null;
	let errorAlert = null;

	// Use the fetch API to make the POST request
	onMount(async () => {
		const urlAlert = `/api/profiles/` + sessionStorage.getItem('userId');
		try {
			// Make the POST request using fetch
			const responseAlert = await fetch(urlAlert, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			// Check if the response is successful
			if (!responseAlert.ok) {
				throw new Error(`HTTP error! status: ${responseAlert.status}`);
			}

			// Parse the JSON response
			alertData = await responseAlert.json();
			alert = alertData.data.profile_data.alerts;
		} catch (err) {
			// @ts-ignore
			errorAlert = err.message;
			console.error('Error:', err);
		}
	});

	const updateAlerts = async (state: any): Promise<any> => {
		let errorUpdateAlert = null;
		const urlUpdateAlert = `/api/update_alert/` + sessionStorage.getItem('userId');
		// Create the request body
		const updateBody = {
			alerts: state
		};
		try {
			// Make the PUT request using fetch
			const responseAlert = await fetch(urlUpdateAlert, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updateBody)
			});

			// Check if the response is successful
			if (!responseAlert.ok) {
				throw new Error(`HTTP error! status: ${responseAlert.status}`);
			}
		} catch (err) {
			// @ts-ignore
			errorUpdateAlert = err.message;
			console.error('Error:', err);
		}
		return state;
	};

	function removeLocation(location: string): any {
		observedLocations.update((locations) => locations.filter((l) => l !== location));
		updateDatabase(get(observedLocations));
	}

	function addLocation(location: string): any {
		observedLocations.update((locations) => [...locations, convertToDatabaseFormat(location)]);
		updateDatabase(get(observedLocations));
	}

	const handleInputChange = (event: any) => {
		filteredLocations = getStringsWithPrefix(locations, newLocation); // get locations with matching prefix
		showDropdown = true;
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		addLocation(newLocation);
		modal.close();
	};

	const handleDropdownSelection = (location: string): any => {
		newLocation = location;
		showDropdown = false;
	};

	let locationCount = 0;

	// Subscribe to the store and update locationCount whenever observedLocations changes
	const unsubscribe = observedLocations.subscribe((locations) => {
		locationCount = locations.length;
	});

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>CliMate - Alerts</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

{#if alertData}
	<div class="p-5 md:p-10">
		<div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Alerts</div>
		<div class="flex-grow border-t-2 border-error-content"></div>
		<div class="h-max text-2xl font-medium py-5">Observed Locations</div>
		<div class="overflow-x-auto">
			<table class="table">
				<tbody>
					{#if locationCount > 0}
						{#each $observedLocations as location}
							<tr class="border-error-content">
								<td class="text-lg">{convertTextToUserView(location)}</td>
								<th class="text-end">
									<button class="btn btn-ghost btn-xs" on:click={removeLocation(location)}>
										<img src="/images/delete_icon.png" alt="Delete" class="h-full w-full icon" />
									</button>
								</th>
							</tr>
						{/each}
					{:else}
						<tr class="border-error-content">
							<th class="h-max text-lg font-light">Add a new location to get notified...</th>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
		<div class="py-5 flex justify-end">
			<button class="custom-btn btn" on:click={openModal} disabled={locationCount >= 3}
				>+ ADD</button
			>
		</div>
		<div class="flex-grow border-t-2 border-error-content"></div>

		<div class="h-max text-2xl font-medium py-5">Notifications</div>
		<div class="overflow-x-auto">
			<table class="table">
				<tbody>
					<!-- row 1 -->
					<tr class="border-error-content">
						<td class="text-lg">Alert</td>
						<th class="text-end">
							<input
								type="checkbox"
								class="custom-toggle toggle"
								bind:checked={alert}
								on:change={updateAlerts(alert)}
							/>
						</th>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Modal -->
		<dialog bind:this={modal} class="modal">
			<div class="modal-box">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<div class="text-2xl font-semibold">Add New Location</div>
				<div class="form-control grow py-4">
					<input
						type="text"
						placeholder="Search location"
						class="search-bar input input-bordered w-full bg-neutral"
						bind:value={newLocation}
						on:input={handleInputChange}
					/>
					{#if showDropdown && filteredLocations.length > 0}
						<ul class="menu dropdown-content bg-base-200 rounded-box z-[1] w-full p-2 shadow">
							{#each filteredLocations as location}
								<li class="w-full">
									<button on:click={handleDropdownSelection(location)}>
										{location}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<div class="modal-action">
					<form method="dialog" on:submit={handleSubmit}>
						<button
							class="custom-btn btn"
							disabled={get(observedLocations).includes(convertToDatabaseFormat(newLocation))}
							>+ ADD</button
						>
					</form>
				</div>
			</div>
		</dialog>
	</div>
{/if}
