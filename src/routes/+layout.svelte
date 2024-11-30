<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<div class="m-auto flex h-[675px] w-[1260px] border">
	{@render children()}
</div>
