<script lang="ts">
	export let kp: string;
	export let group: string;
	export let en: string;
	export let disabled: boolean;
	export let round: string;
	$: color =
		kp == group
			? 'from-blue-500 via-blue-600 to-blue-700'
			: 'from-cyan-400 via-cyan-500 to-cyan-600';
</script>

<!-- <div> -->
<button
	type="button"
	on:click={function () {
		group = kp;
	}}
	{disabled}
	class={round + color + ' text-white enabled:bg-gradient-to-r h-7 pr-2 pl-2 button disabled:bg-slate-200 disabled:text-slate-400 '}
>
	{en}
</button>

<!-- <input type="radio" class="hidden" id="{prefix}_{kp}_{idx}" value={kp} bind:group {disabled} />
	<label class={"bg-slate-400 px-5 py-2.5 roundded-full " + round} for="{prefix}_{kp}_{idx}">{en}</label> -->
<!-- </div> -->
