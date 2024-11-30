<script lang="ts">
	import heroImg from '$lib/assets/hero.webp';
	import SwordsIcon from 'lucide-svelte/icons/swords';
	import { Button } from './ui/button';

	interface Props {
		heroPool: string[];
	}

	const { heroPool }: Props = $props();
</script>

{#snippet heroImage()}
	<div class="w-12 overflow-hidden rounded bg-muted">
		<img class="aspect-square w-full object-contain" src={heroImg} alt="" />
	</div>
{/snippet}

{#snippet row()}
	<div
		class="flex h-auto w-full items-center justify-between gap-4 rounded bg-transparent bg-gradient-to-r from-red-600 via-background to-blue-600 px-4 py-2 text-lg transition hover:from-red-500 hover:via-background hover:to-blue-500"
	>
		<!-- <div class="flex items-center gap-4"> -->
		1
		{@render heroImage()}
		<!-- </div> -->
		<SwordsIcon class="size-6" />
		<!-- <div class="flex items-center gap-4"> -->
		{@render heroImage()}
		2
		<!-- </div> -->
	</div>
{/snippet}

<div class="flex gap-4">
	<div class="flex flex-col gap-4">
		{@render row()}
		{@render row()}
		{@render row()}
		{@render row()}
	</div>
	<div class="grid grid-cols-3 content-between">
		{#each heroPool as hero}
			<Button variant="ghost" size="icon">
				{@render heroImage()}
			</Button>
		{/each}
	</div>
</div>
