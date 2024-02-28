<script>
	import {Button} from '../../../ui-kit/Svelte/Button';
	const textTypeList = ['Header', 'Subtitle', 'Body', 'Caption'];
	let currentFontType = 'Header';

	function handleTypeClick() {
		console.log('!!!!!!!');
		// currentFontType = fontType;
	}
</script>

<div class="lib-font-block__font-tile">
	<div class="lib-font-block__font-example">Admiral Semi Bold</div>
	<div class="lib-font-block__font-buttons-container">
		{#each textTypeList as item}
			<Button on:click={()=>console.log('FFF')} variant={`${item === currentFontType ? 'primary' : 'inactive'}`} >{item}</Button>
		{/each}
	</div>
</div>

<style lang="css">
	@import 'font-block.css';
</style	>