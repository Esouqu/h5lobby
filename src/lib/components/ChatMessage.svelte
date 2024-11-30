<script lang="ts">
	import type { IMessage } from '$lib/interfaces';

	interface Props extends IMessage {
		isTimeVisible?: boolean;
	}

	const { username, text, timestamp, color, isTimeVisible }: Props = $props();

	function formatTimestampToTime(timestamp: number): string {
		const date = new Date(timestamp);
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}
</script>

<div class="rounded px-4 py-1 text-sm hover:bg-muted">
	<p>
		{#if isTimeVisible}
			<span class="mr-1 text-muted-foreground">
				{formatTimestampToTime(timestamp)}
			</span>
		{/if}
		<span class="font-medium {color}">{username}</span><span>: {text}</span>
	</p>
</div>
