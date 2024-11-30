<script lang="ts">
	import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import SettingsIcon from 'lucide-svelte/icons/settings';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
	import GeneralSettings from './GeneralSettings.svelte';
	import GameSettings from './GameSettings.svelte';
	import UpdateSettings from './UpdateSettings.svelte';
	import { Separator } from '../ui/separator';
	import { ScrollArea } from '../ui/scroll-area';
	import Rules from '../Rules.svelte';

	const tabsStyle = 'w-full justify-start data-[state=active]:bg-muted';
</script>

<Dialog>
	<DialogTrigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
		<SettingsIcon />
	</DialogTrigger>
	<DialogContent class="h-[35rem] w-[52rem] max-w-[52rem] px-12 py-6">
		<Tabs class="mx-auto flex h-full w-full gap-6 overflow-hidden">
			<TabsList class="flex h-auto w-min flex-col justify-between bg-transparent py-4">
				<div>
					<TabsTrigger class={tabsStyle} value="client">Клиент</TabsTrigger>
					<TabsTrigger class={tabsStyle} value="game">Игра</TabsTrigger>
					<TabsTrigger class={tabsStyle} value="updates">Обновления</TabsTrigger>
					<TabsTrigger class={tabsStyle} value="rules">Правила</TabsTrigger>
				</div>
				<Button variant="outline" size="lg">Выйти из аккаунта</Button>
			</TabsList>
			<Separator orientation="vertical" />
			<TabsContent value="client" class="m-0 w-full">
				<ScrollArea class="h-full pr-6">
					<GeneralSettings />
				</ScrollArea>
			</TabsContent>
			<TabsContent value="game" class="m-0 w-full">
				<ScrollArea class="h-full pr-6">
					<GameSettings />
				</ScrollArea>
			</TabsContent>
			<TabsContent value="updates" class="m-0 w-full">
				<ScrollArea class="h-full pr-6">
					<UpdateSettings />
				</ScrollArea>
			</TabsContent>
			<TabsContent value="rules" class="m-0 w-full">
				<ScrollArea class="h-full pr-6">
					<Rules />
				</ScrollArea>
			</TabsContent>
		</Tabs>
	</DialogContent>
</Dialog>
