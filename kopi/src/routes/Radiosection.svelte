<script lang="ts">
	import Radio from './Radio.svelte';
	import type { KopiEng } from './translator.svelte';

	export let title: string;
	export let radioGroup: KopiEng[];
	export let output: string;
	export let disabled: boolean = false;
	let selected: string;
	function roundType(idx: number) {
		// return ""
		if (idx == 0) {
			return ' rounded-t-lg ';
		} else if (idx == radioGroup.length - 1) {
			return ' rounded-b-lg ';
		} else {
			return '';
		}
	}
</script>

<div class="mb-5">
	<h2 class="text-center text-extrabold">{title}</h2>
	<div class="mt-3 flex flex-col justify-center w-auto">
		{#each radioGroup as { kp, en }, idx}
			<Radio {kp} bind:group={output} {en} {disabled} round={roundType(idx)} />
		{/each}
	</div>
</div>
