<script lang="ts" context="module">
	export interface KopiEng {
		kp: string;
		en: string;
	}
	interface BevCounter {
		drink: string;
		num: number;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { debounce } from 'lodash';
	import Radiosection from './Radiosection.svelte';
	import Minus from '../../lib/icons/Minus.svelte';

	let beverages: KopiEng[] = [
		{ kp: 'Kopi', en: 'Coffee' },
		{ kp: 'Teh', en: 'Tea' },
		{ kp: 'Cham', en: 'Tea + Coffee' }
	];

	let strengths: KopiEng[] = [
		{ kp: 'poh', en: 'Light' },
		{ kp: '', en: 'Normal' },
		{ kp: 'kao', en: 'Strong' },
		{ kp: 'di loh', en: 'Very strong' }
	];

	let temperatures: KopiEng[] = [
		{ kp: '', en: 'Hot' },
		{ kp: 'pua sio', en: 'Warm' },
		{ kp: 'peng', en: 'Iced' }
	];

	let milks: KopiEng[] = [
		{ kp: 'o', en: 'No milk' },
		{ kp: '', en: 'Condensed milk' },
		{ kp: 'C', en: 'Evaporated milk' }
	];

	let milkLevels: KopiEng[] = [
		{ kp: 'siew dai', en: 'Less milk' },
		{ kp: '', en: 'Normal' },
		{ kp: 'ga dai', en: 'More milk' }
	];

	let sugars: KopiEng[] = [
		{ kp: 'kosong', en: 'No' },
		{ kp: '', en: 'Yes' }
	];

	let beverage = 'Kopi';
	let strength = '';
	let sugar = 'kosong';
	let temp = '';
	let milk = 'o';
	let milkLevel = '';
	let allDrinks: BevCounter[] = [];
	let currentBev: string;
	$: currentBev = `${beverage} ${milk} ${milkLevel} ${sugar} ${strength} ${temp}`;
	$: allDrinks;
	$: milkLevel = milk === "o"? "": milkLevel

	function countBeverages() {
		let drink: string = `${beverage} ${milk} ${milkLevel} ${sugar} ${strength} ${temp}`;
		currentBev = drink;
		let countedIx: number = allDrinks.findIndex((i) => i.drink === drink);
		if (countedIx >= 0) {
			allDrinks[countedIx].num += 1;
		} else {
			allDrinks.push({ drink: drink, num: 1 });
		}
		allDrinks = allDrinks;
	}

	function remove1(ix: number) {
		allDrinks[ix].num -= 1;
		if (allDrinks[ix].num == 0) {
			allDrinks.splice(ix, 1);
		}
	}
</script>

<div class="ml-2 mr-2 pt-4 pl-4 pr-4">
	<div class="grid grid-cols-2 gap-2 landscape:hidden lg:landscape:grid">
		<h2 class="col-span-2 text-center">Order your coffee</h2>
		<Radiosection title={'Type'} radioGroup={beverages} bind:output={beverage} />
		<Radiosection title={'Strength'} radioGroup={strengths} bind:output={strength} />
		<Radiosection title={'Milk'} radioGroup={milks} bind:output={milk} />
		<Radiosection
			title="Milk Level"
			radioGroup={milkLevels}
			bind:output={milkLevel}
			disabled={!(['C', ''].indexOf(milk) > -1)}
		/>
		<Radiosection title={'Sugar?'} radioGroup={sugars} bind:output={sugar} />
		<Radiosection title={'Temperature'} radioGroup={temperatures} bind:output={temp} />
		<p class="col-span-2">Current selection: {currentBev}</p>

		<div class="text-center col-span-2">
			<button
				type="button"
				on:click={debounce(countBeverages, 300)}
				class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>Add to order</button
			>
		</div>
	</div>
	<div>
		{#if allDrinks.length > 0}
			<h1>Your order</h1>
		{/if}
		<div class="ml-3">
			<ul class="list-disc list-inside">
				{#each allDrinks as bev, ix}
					<li class=" mb-2 landscape:text-5xl lg:landscape:text-sm">
						{bev.num}
						{bev.drink}
						<button
							on:click={() => remove1(ix)}
							class="outline-none mobile-menu-button landscape:hidden lg:landscape:block text-red-500"
						>
							<Minus moreClasses={'inline cursor-pointer'} />
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
