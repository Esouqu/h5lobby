<script lang="ts">
	import { Button, buttonVariants } from './ui/button';
	import EmojiIcon from 'lucide-svelte/icons/smile';
	import AngryIcon from 'lucide-svelte/icons/angry';
	import AnnoyedIcon from 'lucide-svelte/icons/annoyed';
	import LaughIcon from 'lucide-svelte/icons/laugh';
	import MehIcon from 'lucide-svelte/icons/meh';
	import { Input } from './ui/input';
	import messages from '$lib/data/messages';
	import { getRandomTwColor } from '$lib/utils';
	import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

	let messageInput = $state('');

	function sendMessage() {
		if (!messageInput) return;

		messages.addMessage({
			text: messageInput,
			timestamp: Date.now(),
			username: 'Esouqu',
			color: getRandomTwColor()
		});

		messageInput = '';
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			sendMessage();
		}
	}
</script>

<div class="relative px-3 py-3">
	<Input
		id="chat-message"
		class="py-6"
		placeholder="Введите ваше сообщение..."
		{onkeydown}
		bind:value={messageInput}
	/>
	<Popover>
		<PopoverTrigger
			class="absolute right-6 top-[50%] translate-y-[-50%] p-2 {buttonVariants({
				variant: 'ghost',
				size: 'icon'
			})}}"
		>
			<!-- <Button variant="ghost" size="icon"> -->
			<EmojiIcon />
			<!-- </Button> -->
		</PopoverTrigger>
		<PopoverContent class="flex gap-2" side="top">
			<AngryIcon />
			<MehIcon />
			<AnnoyedIcon />
			<LaughIcon />
		</PopoverContent>
	</Popover>
</div>
