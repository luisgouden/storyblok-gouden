<script>
	import Brand from '../components/Brand.svelte';
	import Menu from '../components/Menu.svelte';

export let segment;

</script>

<style>

aside {
  height: max-content;
  position: sticky;
  display: flex;
	flex-direction:row;
	top: 0;
	align-items: center;
	width: 100%;
	justify-content: center;
	background-color:transparent;
}

nav{
  display: none;
	font-weight: 400;
}

@media (min-width:992px) {

	aside {
	  justify-content: space-between;
		background-color: var(--white);


	}

	nav {
	  display: flex;
	  align-items: center;
	  width: min-content;
	  flex-direction:row-reverse;
		width: 30%;
	}

}

@media (min-width:1200px) {

  aside {
  }

	nav{

	}

}

</style>

<aside>
	{#if segment !== undefined }
	<Brand/>
	{/if}
	<nav>
		<Menu {segment} />
	</nav>
</aside>
