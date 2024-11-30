<script lang="ts">
	import Select from '$lib/components/Select.svelte';
	import { Button } from '$lib/components/ui/button';
	import { versionItems } from '$lib/data/other';
	import { Input } from '../ui/input';
	import { Label } from '../ui/label';
	import { Switch } from '../ui/switch';
	import SettingCard from './SettingCard.svelte';
	import FolderIcon from 'lucide-svelte/icons/folder-open';
</script>

<div class="flex flex-col gap-4">
	<SettingCard>
		<Label class="w-full">Версия игры</Label>
		<Select items={versionItems} />
	</SettingCard>
	<SettingCard>
		<Label class="w-full">Путь к папке с игрой</Label>
		<Input placeholder="Путь к папке" />
		<Button variant="outline" size="icon">
			<FolderIcon />
		</Button>
	</SettingCard>
	<SettingCard>
		<Label class="w-full">ATB шкала для широкоформантных мониторов</Label>
		<Switch />
	</SettingCard>
	<Button variant="outline">Открыть папку с игрой</Button>
	<Button variant="outline">Обновить файлы игры</Button>
	<Button>Запустить игру</Button>
</div>
