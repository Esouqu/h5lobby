<script lang="ts">
	import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

	interface Props {
		rooms: string[];
	}

	const { rooms }: Props = $props();
</script>

<Tabs value={rooms[0]}>
	<TabsList class="w-full items-end rounded-none border-b bg-background pb-0">
		{#each rooms as room}
			<TabsTrigger
				class="w-full rounded-bl-none rounded-br-none rounded-tl rounded-tr pb-2 uppercase opacity-50 data-[state=active]:bg-muted data-[state=active]:opacity-100"
				value={room}>{room}</TabsTrigger
			>
		{/each}
	</TabsList>
</Tabs>
