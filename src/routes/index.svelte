<script>
let pass='';
function saveData() {
	console.log(pass.value)

}
</script>
<style>
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<div>
<input type="text" blind:this="{pass}">
<button on:click="{saveData}">save</button>
</div>
