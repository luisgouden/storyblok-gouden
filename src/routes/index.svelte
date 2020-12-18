<script>
import { goto } from '@sapper/app';

let val='';
let valido=false;
function saveData() {
	if(val === 'popi'){
		goto('/portfolio');
	}else{
			console.log(val)
	}


}
</script>
<style>

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



{#if valido}
hola
{:else}
<div>
<input type="text" bind:value="{val}">
<button on:click="{saveData}">save</button>
</div>
{/if}
