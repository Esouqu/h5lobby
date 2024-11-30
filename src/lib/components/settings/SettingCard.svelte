<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="flex flex-row items-center justify-between gap-2 rounded-lg border p-4">
	{@render children()}
</div>
