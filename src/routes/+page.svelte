<script lang="ts">
	import { API } from '$lib/api/API';
	import ParentNode from '$lib/components/Nodes/ParentNode.svelte';
	import { createScene } from '$lib/scene';
	import { SvelteFlow, Background, Controls, Position } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { writable } from 'svelte/store';
	let el: HTMLCanvasElement;

	const nodeTypes = {
		parent: ParentNode
	};

	const parentNode = {
		id: '1',
		type: 'parent',
		position: { x: 100, y: 100 },
		data: { label: 'Shapes' }
	};

	let nodes = writable([parentNode]);
	let edges = writable([
		{ id: 'e1-2', source: '1', target: '2', type: 'bezier' },
		{ id: 'e1-3', source: '1', target: '3', type: 'bezier' },
		{ id: 'e1-4', source: '1', target: '4', type: 'bezier' },
		{ id: 'e1-5', source: '1', target: '5', type: 'bezier' }
	]);

	async function getNodes() {
		try {
			const api = new API();
			let resp = await api.getShapes();
			const n = resp.nodes.map((shape, i) => ({
				...shape,
				data: { label: shape.shape },
				sourcePosition: Position.Right,
				targetPosition: Position.Left
			}));

			nodes.update((existingNodes) => [...existingNodes, ...n]);
		} catch (error) {
			console.log(error);
		} finally {
		}
	}
	function handleNodeClick({ detail }) {
		const label = detail.node.data.label;
		console.log(label);

		switch (label) {
			case 'Shapes':
				if ($nodes.length === 1) getNodes();
				else $nodes = [parentNode];
				break;
			default:
				createScene(el, label);
		}
	}
</script>

<main class="flex flex-col">
	<div class="h-[50vh]">
		<canvas class="h-full w-full bg-black" bind:this={el}></canvas>
	</div>
	<div class="h-[50vh]">
		<SvelteFlow on:nodeclick={handleNodeClick} {nodes} {edges} {nodeTypes}>
			<Background />
			<Controls />
		</SvelteFlow>
	</div>
</main>

<style>
</style>
