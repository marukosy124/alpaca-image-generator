// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	interface IAlpacaData {
		directory: string;
		selected: boolean;
		items: IItem[]
	}

	interface IItem {
		name: string;
		selected: boolean
	}

	interface ISelectedItem {
		directory: string;
		item: string
	}
}
