<script lang="ts">
	import DiscordIcon from './DiscordIcon.svelte';
	import { Button } from './ui/button';
	import DonationIcon from 'lucide-svelte/icons/hand-heart';
	import WheelIcon from 'lucide-svelte/icons/loader-pinwheel';
</script>

<div class="flex items-center justify-center px-2 pb-2 pt-0">
	<Button class="text-foreground" variant="link" size="sm">
		<DiscordIcon />
		Discord
	</Button>
	<Button class="text-foreground" variant="link" size="sm">
		<DonationIcon />
		Поддержать
	</Button>
	<Button class="text-foreground" variant="link" size="sm">
		<WheelIcon />
		Колесо Умений
	</Button>
</div>
