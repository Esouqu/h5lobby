<script lang="ts">
	import type { IUser } from '$lib/interfaces';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
	import ProfileStatus from './ProfileStatus.svelte';

	interface Props {
		users: (IUser & { color?: string })[];
	}

	const { users }: Props = $props();
</script>

<Accordion value={'inGame'} type="single" class="p-4">
	<AccordionItem value="inGame">
		<AccordionTrigger>
			<h2 class="text-sm uppercase">Игроки ({users.length})</h2>
		</AccordionTrigger>
		<AccordionContent>
			{#each users as user}
				<ProfileStatus {...user} />
			{/each}
		</AccordionContent>
	</AccordionItem>
</Accordion>
