<script>

import { goto } from '@sapper/app';

function validation(event){
	const pass =  event.target.value;

	if(pass === 'popi'){
		goto('/portfolio');
	}

}

</script>
<style>
	h1{
		text-align: center;
		text-transform: uppercase;
	}

	input{
		padding:.5rem;
		max-width: 50%;
		min-width: 50%;
		margin: 2rem 0;
		align-self: center;
		border-radius:.5rem;
		border-style: solid;
		border-color: black;
	}

</style>

<svelte:head>
	<title>Pipe Prime</title>
</svelte:head>

<h1>Esto es un H1</h1>
<p>Esto es un parrafo donde pondremos cosas chulis y guays sobre Pipe, un señor muy formal.</p>

<input type="text" on:input={validation} placeholder="Entrar a la batcueva">
