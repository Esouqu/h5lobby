<script lang="ts">
	import { Label } from '../ui/label';
	import { Switch } from '../ui/switch';
	import SettingCard from './SettingCard.svelte';
</script>

<div class="flex flex-col gap-4">
	<SettingCard>
		<Label class="w-full">Universe</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Random Tactical Arena</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Half Random Tactical Arean</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">X Random Tactical Arena</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Random Wars</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Full Random Final Battle</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">TE</Label>
		<Switch />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Ashan Arena II</Label>
		<Switch />
	</SettingCard>
</div>
