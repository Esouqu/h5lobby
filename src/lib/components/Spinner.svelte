<script lang="ts">
	import LoaderIcon from 'lucide-svelte/icons/loader-circle';

	interface Props {
		size?: string;
	}

	const { size = '1.25rem' }: Props = $props();
</script>

<LoaderIcon class="animate-spin" {size} />
