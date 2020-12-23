<script>
	export let segment;
	//export let stories = [];
</script>

<style>
	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	.batman{
		display: none;
	}
</style>

<nav>
<ul>
	<li>
		<a href='.' class="batman"> Index </a>
	</li>
	{#if segment !== undefined }
	<li>
		<a href='about'> About </a>
	</li>
	<li>
		<a href='portfolio'> Portfolio </a>
	</li>
	{/if}
</ul>
</nav>
