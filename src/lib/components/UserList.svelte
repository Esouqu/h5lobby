<script lang="ts">
	import type { IUser } from '$lib/interfaces';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
	import ProfileStatus from './ProfileStatus.svelte';

	interface Props {
		users: IUser[];
	}

	const { users }: Props = $props();

	const groupedUsers = $derived.by(groupByLocation);
	const sortedGroup = $derived(
		Object.entries(groupedUsers).sort(([a], [b]) => (a === 'lobby' ? 1 : b === 'lobby' ? -1 : 0))
	);

	function groupByLocation(): Record<string, IUser[]> {
		return users.reduce(
			(prev, current) => {
				const { location } = current;

				if (!prev[location]) {
					prev[location] = [];
				}

				prev[location].push(current);

				return prev;
			},
			{} as Record<string, IUser[]>
		);
	}
</script>

<Accordion value={Object.keys(groupedUsers)} type="multiple">
	{#each sortedGroup as [location, users]}
		<AccordionItem value={location}>
			<AccordionTrigger>
				<h2 class="text-sm uppercase">{location} ({users.length})</h2>
			</AccordionTrigger>
			<AccordionContent>
				<div>
					{#each users as user}
						<ProfileStatus {...user} />
					{/each}
				</div>
			</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
