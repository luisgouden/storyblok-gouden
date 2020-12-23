<script>
export let segment;
console.log(segment);
</script>

<style>

	ul {
		display: flex;
	  justify-content: space-evenly;
		align-items: center;
		width: 100%;
		font-weight: 400
	}

	li {
	  padding: 0;
	  font-size: 120%
	}

@media (min-width:992px) {

	ul{
		flex-direction: row;
		align-items: flex-start
	}

	li {
			line-height: 2;
			font-size: 100%;
	}
}

@media (min-width:1200px) {}

</style>

<ul>
	{#if segment !== undefined }
	<li>
		<a href='about'> About </a>
	</li>
	<li>
		<a href='portfolio'> Portfolio </a>
	</li>
	{/if}
</ul>
