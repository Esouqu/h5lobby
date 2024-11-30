<script lang="ts">
	import { Label } from '../ui/label';
	import { Switch } from '../ui/switch';
	import { Button } from '$lib/components/ui/button';
	import SettingCard from './SettingCard.svelte';
	import Select from '../Select.svelte';

	const languages = [
		{ value: 'ru', label: 'Русский' },
		{ value: 'en', label: 'English' }
	];
	const colorSchemes = [
		{ value: 'system', label: 'Системная' },
		{ value: 'light', label: 'Светлая' },
		{ value: 'dark', label: 'Темная' }
	];
</script>

<div class="flex flex-col gap-4">
	<SettingCard>
		<Label class="w-full">Язык интерфейса</Label>
		<Select items={languages} />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Цветовая схема</Label>
		<Select items={colorSchemes} />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Модуль подключения к серверу</Label>
		<Switch />
	</SettingCard>
	<Button variant="outline">Запустить настройку сетевого модуля</Button>
</div>
