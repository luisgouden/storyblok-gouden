<script>
	//export let segment;
	//export let stories = [];
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

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
	<li>
		<a href='about'> About </a>
	</li>
	<li>
		<a href='portfolio'> Portfolio </a>
	</li>
</ul>
</nav>
