<script>
export let segment;
</script>

<style>

	ul {
		display: flex;
	  justify-content: space-evenly;
		align-items: center;
		width: 100%;
		font-weight: 400;

		@media (min-width:992px) {
			flex-direction: row;
			align-items: flex-start
		}

	}

	li {
	  padding: 0;
	  font-size: 120%;

		@media (min-width:992px) {
			line-height: 2;
			font-size: 100%;
		}

	}

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
