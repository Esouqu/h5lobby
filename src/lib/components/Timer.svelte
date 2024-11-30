<script lang="ts">
	import { onMount } from 'svelte';
	import Label from './ui/label/label.svelte';

	interface Props {
		onTick?: (seconds: number) => void;
	}

	const { onTick }: Props = $props();

	let seconds = $state(0);
	let formattedTime = $derived(formatTime());
	let timer: number;

	onMount(() => {
		startTimer();

		return () => stopTimer();
	});

	function formatTime() {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;

		return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
	}

	function startTimer() {
		timer = setInterval(() => {
			seconds++;

			onTick?.(seconds);
		}, 1000);
	}

	function stopTimer() {
		clearInterval(timer);
	}
</script>

<Label class="text-center tabular-nums">{formattedTime}</Label>
