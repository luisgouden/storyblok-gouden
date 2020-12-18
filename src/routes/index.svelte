<script>
let val='';
let valido=false;
function saveData() {
	if(val === 'dragon'){
		console.log('a la 2343242342 va la vencida')
		valido = true;
	}else{
			console.log(val)
	}


}
</script>
<style>
	h1, figure{
		text-align: center;
		margin: 0 auto;
	}
	figure {
		margin: 0 0 1em 0;
	}
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



{#if valido}
<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>
{:else}
<div>
<input type="text" bind:value="{val}">
<button on:click="{saveData}">save</button>
</div>
{/if}
