<script lang="ts">
	import ProfileStatus from '$lib/components/ProfileStatus.svelte';
	import UserList from '$lib/components/UserList.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Button } from '$lib/components/ui/button';
	import Chat from '$lib/components/Chat.svelte';
	import Rooms from '$lib/components/Rooms.svelte';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Contacts from '$lib/components/Contacts.svelte';
	import messages from '$lib/data/messages';
	import Select from '$lib/components/Select.svelte';
	import users from '$lib/data/users';
	import {
		draftTypeItems,
		myUser,
		rooms,
		roomTypeItems,
		SearchState,
		versionItems
	} from '$lib/data/other';
	import Timer from '$lib/components/Timer.svelte';
	import { goto } from '$app/navigation';
	import ChatInput from '$lib/components/ChatInput.svelte';
	import Settings from '$lib/components/settings/Settings.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let searchState = $state(SearchState.Idle);

	function onTick(seconds: number) {
		if (seconds === 3) {
			goto('./game');
		}
	}

	function stopSearch() {
		searchState = SearchState.Idle;
	}

	function startSearch() {
		searchState = SearchState.Searching;
	}
</script>

<div class="flex w-full">
	<div class=" flex h-full w-[20rem] min-w-[20rem] flex-col justify-between">
		<ScrollArea>
			<div class="p-4">
				<p class="text-sm font-medium uppercase">Игроков онлайн: {users.length}</p>
				<UserList {users} />
			</div>
		</ScrollArea>
		<div class="bg flex items-center justify-between border-t px-4 py-2">
			<ProfileStatus {...myUser} />
			<Settings />
		</div>
	</div>
	<div class=" flex flex-1 border-x bg-[#0f0f0f]">
		<div class="mx-auto my-0 flex w-[38.75rem] flex-col">
			<Rooms {rooms} />
			<div class="relative flex h-full flex-col overflow-hidden">
				<Chat messages={$messages} />
				<ChatInput />
			</div>
			<Contacts />
		</div>
	</div>
	<div class=" flex w-[20rem] min-w-[20rem] flex-col justify-between gap-4 px-8 py-4">
		<div class="flex flex-col gap-4">
			<div class="w-full">
				<Label>Версия игры</Label>
				<Select items={versionItems} disabled={searchState === SearchState.Searching} />
			</div>
			<div class="w-full">
				<Label>Тип комнаты</Label>
				<Select items={roomTypeItems} disabled={searchState === SearchState.Searching} />
			</div>
			<div class="w-full">
				<Label>Тип драфта</Label>
				<Select items={draftTypeItems} disabled={searchState === SearchState.Searching} />
			</div>
			<div class="w-full">
				<Label>Тег для поиска</Label>
				<Input placeholder="ExampleTag" disabled={searchState === SearchState.Searching} />
			</div>
		</div>

		{#if searchState === SearchState.Idle}
			<Button class="w-full text-lg uppercase" size="lg" onclick={startSearch}>Начать Поиск</Button>
		{:else if searchState === SearchState.Searching}
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-center gap-1">
					<Timer {onTick} />
					<Spinner />
				</div>
				<div class="flex flex-col gap-1">
					<Button class="w-full text-lg uppercase" size="lg" disabled>Поиск...</Button>
					<Button size="sm" variant="ghost" onclick={stopSearch}>Отменить</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
