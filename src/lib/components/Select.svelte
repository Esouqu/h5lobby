<script lang="ts">
	import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

	interface SelectItemProps {
		value: string;
		label: string;
	}

	interface Props {
		items: SelectItemProps[];
		value?: string;
		class?: string;
		disabled?: boolean;
		onValueChange?: (value: string) => void;
	}

	let {
		items,
		value = $bindable(items[0].value),
		class: className,
		disabled,
		onValueChange
	}: Props = $props();

	const triggerContent = $derived(items.find((f) => f.value === value)?.label ?? 'Select a item');
</script>

<Select type="single" allowDeselect={false} bind:value {onValueChange} {disabled}>
	<SelectTrigger class={className}>{triggerContent}</SelectTrigger>
	<SelectContent>
		{#each items as { value, label }}
			<SelectItem {value} {label} />
		{/each}
	</SelectContent>
</Select>
