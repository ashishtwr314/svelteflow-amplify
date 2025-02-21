<script>
	import { API } from '$lib/api/API';
	import ParentNode from '$lib/components/Nodes/ParentNode.svelte';
	import { SvelteFlow, Background, Controls, Position } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

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

		switch (label) {
			case 'Shapes':
				if ($nodes.length === 1) getNodes();
				else $nodes = [parentNode];
				break;
		}
	}
</script>

<main class="border">
	<SvelteFlow on:nodeclick={handleNodeClick} {nodes} {edges} {nodeTypes}>
		<Background />
		<Controls />
	</SvelteFlow>
</main>

<style>
	main {
		height: 100vh;
	}
</style>
