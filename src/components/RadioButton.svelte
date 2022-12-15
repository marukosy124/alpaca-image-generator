<script lang="ts">
	export let title: string;
	export let checked: boolean;
</script>

<input type="radio" id={title} value={title} {checked} on:change />
<label for={title}>{title}</label>

<style>
	input[type='radio'] {
		display: none;
	}

	input[type='radio']:checked + label {
		color: white;
		background-image: linear-gradient(to right, var(--color-theme-1) 0%, #00f2fe 100%);
	}

	input[type='radio']:hover + label {
		box-shadow: var(--color-theme-1) 0px 2px 8px 0px;
	}

	label {
		display: inline-block;
		text-transform: capitalize;
		transition: all 300ms, color 1ms;
		margin-right: 5px;
		margin-bottom: 15px;
		padding: 10px 20px;
		border-radius: 100px;
		box-shadow: none;
		cursor: pointer;
		background-color: white;
		background-image: none;
		color: rgba(0, 0, 0, 0.7);
	}
</style>
