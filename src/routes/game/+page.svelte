<script lang="ts">
	import { goto } from '$app/navigation';
	import Chat from '$lib/components/Chat.svelte';
	import ChatInput from '$lib/components/ChatInput.svelte';
	import InGameUsers from '$lib/components/InGameUsers.svelte';
	import { Button } from '$lib/components/ui/button';
	import messages from '$lib/data/messages';
	import type { IUser } from '$lib/interfaces';
	import CheckIcon from 'lucide-svelte/icons/check';
	import HeroDraft from '$lib/components/HeroDraft.svelte';
	import { onMount } from 'svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	const users: (IUser & { color?: string })[] = [
		{
			id: 1,
			name: 'John Doe',
			status: 'online',
			location: 'lobby',
			portrait: 'https://via.placeholder.com/150',
			color: 'crimson'
		},
		{
			id: 2,
			name: 'Jane Doe',
			status: 'ingame',
			location: 'universe',
			portrait: 'https://via.placeholder.com/150',
			color: 'royalblue'
		},
		{
			id: 3,
			name: 'Bob Smith',
			status: 'ingame',
			location: 'universe',
			portrait: 'https://via.placeholder.com/150',
			color: 'springgreen'
		}
	];

	let isConnected = $state(false);
	let isGameRunning = $state(false);

	onMount(() => {
		setTimeout(() => (isConnected = true), 3000);
	});
</script>

<div class="bg-container-lowest flex w-full">
	<div class=" flex h-full w-[20rem] flex-col justify-between">
		<InGameUsers {users} />
	</div>
	<div class=" flex flex-1 flex-col items-center justify-between border-x bg-[#0f0f0f] px-8 py-4">
		<div class="flex flex-col gap-2 border-b pb-4">
			<h2 class="text-center text-2xl font-medium uppercase">Драфт Героев</h2>
			<div class="flex w-full justify-center gap-4">
				<div class="flex text-sm">
					<div class="font-medium">Версия Игры</div>
					<div>: Universe v1.2.1</div>
				</div>
				<div class="flex text-sm">
					<div class="font-medium">Шаблон</div>
					<div>: Galaxy (1 vs 1)</div>
				</div>
				<div class="flex gap-1 text-sm">
					<div class="font-medium">Соединение</div>
					{#if isConnected}
						<CheckIcon color="springgreen" size="1.25rem" />
					{:else}
						<Spinner />
					{/if}
				</div>
			</div>
		</div>

		{#if isGameRunning}
			<div class="flex max-w-[34rem] flex-col gap-2 rounded border p-4">
				<h2 class="text-center text-2xl font-medium uppercase">Игра в процессе</h2>
				<p class="text-sm">
					Запустите игру. Вам или вашему оппоненту необходимо создать комнату в выбранном режиме
					игры. Зайдите в созданную комнату и начните игру.
				</p>
			</div>
		{:else}
			<HeroDraft heroPool={Array.from({ length: 12 }, () => '')} />
		{/if}

		<div class="flex flex-col gap-1">
			<Button
				class="w-full text-lg uppercase"
				size="lg"
				onclick={() => (isGameRunning = true)}
				disabled={isGameRunning}
			>
				Запустить игру
			</Button>
			<Button size="sm" variant="ghost" onclick={() => goto('/')}>Отменить партию</Button>
		</div>
	</div>
	<div class=" flex w-[20rem] flex-col justify-between pb-1 pt-4">
		<div class="relative flex h-full flex-col overflow-hidden">
			<Chat messages={$messages} isTimeVisible={false} />
			<ChatInput />
		</div>
	</div>
</div>
