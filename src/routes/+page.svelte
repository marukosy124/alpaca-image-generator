<script lang="ts">
	import { alpacaData } from '$lib/alpacaData';
	import Alpaca from '../components/Alpaca.svelte';
	import RadioButton from '../components/RadioButton.svelte';
	import { EType } from '../constants';
	import { toPng } from 'html-to-image';

	let directories = alpacaData;
	let error = '';

	const handleRadioOnChange = (event: Event, type: EType) => {
		switch (type) {
			case EType.DIRECTORY:
				directories = [...directories].map((dir) => ({
					...dir,
					selected: dir.directory === (event.target as HTMLInputElement).value ?? false
				}));
				break;
			case EType.ITEM:
				directories = [...directories].map((dir) => ({
					...dir,
					items: dir.selected
						? dir.items.map((item) => ({
								...item,
								selected: item.name === (event.target as HTMLInputElement).value ?? false
						  }))
						: dir.items
				}));
				break;
			default:
				break;
		}
	};

	const getRandomItem = (items: App.IItem[]) => {
		const randomIndex = Math.floor(Math.random() * items.length);
		const item = items[randomIndex];
		return item;
	};

	const handleRandomStyle = () => {
		directories = [...directories].map((dir) => {
			const randomItem = getRandomItem(dir.items);
			return {
				...dir,
				items: dir.items.map((item) => ({
					...item,
					selected: item.name === randomItem.name
				}))
			};
		});
	};

	const downloadURI = (uri: string, name: string) => {
		const link = document.createElement('a');
		link.download = name;
		link.href = uri;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDownload = () => {
		error = '';
		const alpaca = document.getElementById('alpaca');
		if (alpaca) {
			toPng(alpaca)
				.then(function (dataUrl) {
					downloadURI(dataUrl, 'alpaca.png');
				})
				.catch(function (err) {
					error = err;
				});
		}
	};
</script>

<svelte:head>
	<title>ALPACA GENERATOR</title>
	<meta name="description" content="ALPACA GENERATOR" />
</svelte:head>

<section>
	<h1>ALPACA GENERATOR</h1>
	<div class="container">
		<div>
			<Alpaca
				selectedItems={[...directories].map((dir) => ({
					directory: dir.directory,
					item: dir.items.find((item) => item.selected)?.name ?? ''
				}))}
			/>
			<div class="actions">
				<button on:click={handleRandomStyle}><span class="text">Random</span></button>
				<button on:click={handleDownload}><span class="text">Download</span></button>
			</div>
			<p class="error">{error}</p>
		</div>
		<div>
			<h3>ACCESSORIZE THE ALPACA'S</h3>
			<fieldset id="directories">
				{#each directories as dir}
					<RadioButton
						title={dir.directory}
						checked={dir.selected}
						on:change={(e) => handleRadioOnChange(e, EType.DIRECTORY)}
					/>
				{/each}
			</fieldset>
			<fieldset id="items">
				<h3>STYLE</h3>
				{#each directories.find((dir) => dir.selected)?.items ?? [] as item}
					<RadioButton
						title={item.name}
						checked={item.selected}
						on:change={(e) => handleRadioOnChange(e, EType.ITEM)}
					/>
				{/each}
			</fieldset>
		</div>
	</div>
</section>

<style>
	section {
		margin: 2rem 3rem;
	}

	h1 {
		width: 100%;
		text-align: left;
	}

	.container {
		display: flex;
		gap: 2rem;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.actions button {
		align-items: center;
		background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		border: 0;
		border-radius: 8px;
		box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-size: 16px;
		justify-content: center;
		padding: 3px;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		cursor: pointer;
		width: 100%;
	}

	.actions button:active,
	.actions button:hover {
		outline: 0;
	}

	.actions button span {
		background-color: rgb(5, 6, 45);
		padding: 10px 20px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}

	.actions button:hover span {
		background: none;
	}

	fieldset {
		border: none;
		padding: 0;
	}

	.error {
		color: red;
		text-align: center;
	}
</style>
