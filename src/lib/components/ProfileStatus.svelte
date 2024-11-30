<script lang="ts">
	import type { IUser } from '$lib/interfaces';
	import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

	interface Props extends IUser {
		color?: string;
	}

	const { name, status, portrait, color }: Props = $props();
</script>

<div
	class="user-status flex items-center space-x-3 px-4 py-2"
	style="--user-color: {color || 'transparent'};"
>
	<Avatar>
		<!-- <AvatarImage src={portrait} alt={name} /> -->
		<AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
	</Avatar>
	<div>
		<p class="text-sm font-medium leading-none">{name}</p>
		<p class="text-sm text-green-300">{status}</p>
	</div>
</div>

<style>
	.user-status {
		position: relative;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			translate: 0 -50%;
			height: calc(100% - 1rem);
			width: 5px;
			z-index: -1;
			background-color: var(--user-color);
		}
	}
</style>
