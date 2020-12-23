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
  justify-content: space-between;
	flex-direction:row;
	top: 0;
	width: 75%;
	align-items: center
}

nav{
  display: none;
	font-weight: 400;
}

@media (min-width:992px) {

	nav {
	  display: flex;
	  align-items: center;
	  width: min-content;
	  flex-direction:row-reverse;
	}

}

@media (min-width:1200px) {

  aside {
    width: 100%
  }

	nav{
		width: 30%;
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
