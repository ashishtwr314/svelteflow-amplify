<script>
	import { Handle, Position } from '@xyflow/svelte';

	export let data;
</script>

<div class="flex flex-col items-center bg-white border rounded-xl p-2">
	<button on:click={() => (data.collapsed = !data.collapsed)}>
		<div class="flex justify-between items-center">
			<div class="flex items-center">
				<span class="mr-2">{data.label}</span>
				<span class="cursor-pointer bg-transparent border-none outline-none text-xl">
					{#if data.collapsed}
						&#x25B6;
					{:else}
						&#x25BE;
					{/if}
				</span>
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	</button>
	{#if !data.collapsed}
		<slot />
	{/if}
</div>
