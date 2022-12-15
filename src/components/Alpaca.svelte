<script lang="ts">
	export let selectedItems: App.ISelectedItem[];
</script>

<div id="alpaca">
	{#each selectedItems as sItem}
		<img
			src={`/images/alpaca/${sItem.directory}/${sItem.item}.png`}
			alt={sItem.item}
			width="400"
			class={`alpaca-${sItem.directory}`}
		/>
	{/each}
</div>

<style>
	div {
		position: relative;
		width: 400px;
		height: 400px;
	}

	img {
		position: absolute;
		left: 0;
		top: 0;
	}

	.alpaca-accessories {
		z-index: 10;
	}

	.alpaca-backgrounds {
		z-index: -1;
	}

	.alpaca-ears {
		z-index: 1;
	}

	.alpaca-eyes {
		z-index: 10;
	}

	.alpaca-hair {
		z-index: 1;
	}

	.alpaca-leg {
		z-index: 1;
	}

	.alpaca-mouth {
		z-index: 2;
	}

	.alpaca-neck {
		z-index: 1;
	}

	.alpaca-nose {
		z-index: 1;
	}
</style>
