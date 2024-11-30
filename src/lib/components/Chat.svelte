<script lang="ts">
	import type { IMessage } from '$lib/interfaces';
	import ChatMessage from './ChatMessage.svelte';
	import { Button } from './ui/button';
	import { ScrollArea } from './ui/scroll-area';

	interface Props {
		messages: IMessage[];
		isTimeVisible?: boolean;
	}

	const { messages, isTimeVisible = true }: Props = $props();

	let scrollArea: HTMLElement | null = $state(null);
	let isAutoscrolling = $state(true);

	$effect(() => {
		if (messages && scrollArea && isAutoscrolling) {
			scrollToBottom();
		}
	});

	function scrollToBottom() {
		if (!scrollArea) return;

		scrollArea.scrollTop = scrollArea.scrollHeight;
	}

	function resetScrollArea() {
		if (!scrollArea) return;

		isAutoscrolling = true;
		scrollToBottom();
	}

	function onwheel(e: WheelEvent) {
		if (!scrollArea) return;

		const isScrollingUp = e.deltaY < 0;

		if (isScrollingUp) {
			isAutoscrolling = false;
		}

		if (
			!isScrollingUp &&
			scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight
		) {
			isAutoscrolling = true;
		}
	}
</script>

<ScrollArea class="flex h-full" bind:ref={scrollArea} {onwheel}>
	<div class="flex h-full flex-col justify-end">
		{#each messages as message}
			<ChatMessage {...message} {isTimeVisible} />
		{/each}
	</div>
	{#if !isAutoscrolling}
		<Button
			class="absolute bottom-2 left-[50%] translate-x-[-50%]"
			variant="outline"
			onclick={resetScrollArea}
		>
			Чат приостановлен из-за прокрутки
		</Button>
	{/if}
</ScrollArea>
