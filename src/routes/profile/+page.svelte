<script lang="ts">
	import { onMount } from 'svelte';

	// get locations obtained in layout.js
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let locations: string[] = [];
	// convert json to array of locaitons
	onMount(() => {
		for (var i in data.locations) {
			locations.push(
				i.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ', ' + 'Malaysia'
			);
		}
	});

	let username = '';
	let profileHomeLocation = '';
	let email = '';

	let editNameModal: HTMLDialogElement;
	let editLocationModal: HTMLDialogElement;

	let newName = '';
	let isValidName = false;

	let newLocation = '';
	let showDropdown = false;
	let filteredLocations: string[] = [];
	let profileData: any = null;
	let profileDataError = null;

	// Use the fetch API to make the POST request
	onMount(async () => {
		try {
			const urlProfileData = `/forecast-api/profiles/` + sessionStorage.getItem('userId');
			// Make the POST request using fetch
			const response = await fetch(urlProfileData, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			// Check if the response is successful
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Parse the JSON response
			profileData = await response.json();
			username = profileData.data.profile_data.username;
			profileHomeLocation = profileData.data.profile_data.home_location;
			updateLocation(profileHomeLocation);
			email = profileData.data.profile_data.email;
			profileHomeLocation = changeLocationStringUppercase(profileHomeLocation);
		} catch (err) {
			// @ts-ignore
			profileDataError = err.message;
			console.error('Error:', err);
		}
	});

	function getStringsWithPrefix(list: string[], prefix: string): string[] {
		if (prefix.length > 0) {
			// match options with entered prefix
			return list.filter((str) => str.toLowerCase().startsWith(prefix.toLowerCase()));
		}
		return [];
	}

	function updateLocation(items: string) {
		// change value back to lowercase and convert space to dash
		let str = changeLocationStringLowercase(items);
		sessionStorage.setItem('location', str); // set user selected location to session storage
	}

	function changeLocationStringUppercase(items: string): string {
		// change value to uppercase and convert space to dash
		let str = items.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ', ' + 'Malaysia';
		return str;
	}

	function changeLocationStringLowercase(items: string): string {
		// change value to uppercase and convert space to dash
		let str = items.split(',')[0].toLowerCase().replace(/ /g, '-');
		return str;
	}

	function openEditNameModal() {
		editNameModal.showModal();
	}

	const handleNameInputChange = (event: any) => {
		newName = event.target.value;
		isValidName = newName.trim().length > 0; // Valid if not empty or only spaces
	};

	const handleNameChangeSubmit = async (event: any) => {
		event.preventDefault();
		if (isValidName) {
			username = newName;
			let errorUpdateUsername = null;
			const urlUpdateUsername =
				`/forecast-api/update_profile_data/` + sessionStorage.getItem('userId');
			// Create the request body
			const updateBody = {
				username: newName
			};
			try {
				// Make the PUT request using fetch
				const responseAlert = await fetch(urlUpdateUsername, {
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
				errorUpdateUsername = err.message;
				console.error('Error:', err);
			}
			editNameModal.close();
		}
	};

	function reloadPage(): any {
		window.location.reload();
		return null;
	}

	function openEditLocationModal() {
		editLocationModal.showModal();
	}

	// show dropdown when user types in search bar
	const handleLocationInputChange = (event: any) => {
		filteredLocations = getStringsWithPrefix(locations, newLocation); // get locations with matching prefix
		showDropdown = true;
	};

	// set new location and close modal
	const handleLocationChangeSubmit = async (event: any) => {
		event.preventDefault();
		newLocation = changeLocationStringLowercase(newLocation);
		updateLocation(newLocation);

		console.log(newLocation);

		let errorUpdateHomeLocation = null;
		const urlUpdateHomeLocation =
			`/forecast-api/update_profile_data/` + sessionStorage.getItem('userId');
		// Create the request body
		const updateBody = {
			home_location: newLocation
		};
		try {
			// Make the PUT request using fetch
			const responseAlert = await fetch(urlUpdateHomeLocation, {
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
			errorUpdateHomeLocation = err.message;
			console.error('Error:', err);
		}
		editLocationModal.close();
		reloadPage();
	};

	// set new location when user selects from dropdown and stop showing dropdown
	const handleDropdownSelection = (location: string): any => {
		newLocation = location;
		showDropdown = false;
	};
</script>

<svelte:head>
	<title>CliMate - Settings</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

{#if profileData}
	<div class="p-10">
		<div class="h-max text-4xl font-semibold" style="padding-bottom: 30px;">Profile</div>
		<div class="avatar grid-item w-25 rounded-full" style="height: 150px;">
			<img src="/images/avatar_default.png" alt="avatar" />
		</div>

		<div class="h-max text-2xl font-semibold py-5">User Information</div>
		<div class="grid grid-cols-2 justify-items-start items-center py-5">
			<div class="col-span-2 lg:col-span-1">
				<span class="text-lg font-bold">Name</span>
				<button class="btn btn-ghost btn-xs" on:click={openEditNameModal}>
					<img src="/images/edit_icon.png" alt="Edit" class="h-full w-full icon" />
				</button>
			</div>
			<div class="col-span-2 lg:col-span-1 text-lg">
				{username}
			</div>
		</div>
		<div class="border-b border-error-content"></div>
		<div class="grid grid-cols-2 justify-items-start items-center py-5">
			<div class="col-span-2 lg:col-span-1">
				<span class="text-lg font-bold">Home Location</span>
				<button class="btn btn-ghost btn-xs" on:click={openEditLocationModal}>
					<img src="/images/edit_icon.png" alt="Edit" class="h-full w-full icon" />
				</button>
			</div>
			<div class="col-span-2 lg:col-span-1 text-lg">
				<!-- home location is not completed -->
				{profileHomeLocation}
			</div>
		</div>
		<div class="border-b border-error-content"></div>
		<div class="grid grid-cols-2 justify-items-start items-center py-5">
			<div class="col-span-2 lg:col-span-1">
				<span class="text-lg font-bold">Email</span>
			</div>
			<div class="col-span-2 lg:col-span-1 text-lg">
				{email}
			</div>
		</div>
		<div class="border-b border-error-content"></div>

		<!-- Modal for changing name-->
		<dialog bind:this={editNameModal} class="modal">
			<div class="modal-box">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<div class="text-2xl font-semibold">Edit Name</div>
				<div class="py-4">
					<input
						type="text"
						value={username}
						class="input input-bordered w-full bg-neutral"
						on:input={handleNameInputChange}
					/>
				</div>
				<div class="modal-action">
					<form method="dialog" on:submit={handleNameChangeSubmit}>
						<button class="custom-btn btn" disabled={!isValidName}>SAVE</button>
					</form>
				</div>
			</div>
		</dialog>

		<!-- Modal for changing location-->
		<dialog bind:this={editLocationModal} class="modal" on:close={() => (showDropdown = false)}>
			<div class="modal-box">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<div class="text-2xl font-semibold">Change Home Location</div>
				<div class="form-control grow py-4">
					<input
						type="text"
						placeholder="Search location"
						class="search-bar input input-bordered w-full bg-neutral"
						bind:value={newLocation}
						on:input={handleLocationInputChange}
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
					<form method="dialog" on:submit={handleLocationChangeSubmit}>
						<button class="custom-btn btn" disabled={!locations.includes(newLocation)}>SAVE</button>
					</form>
				</div>
			</div>
		</dialog>
	</div>
{/if}
