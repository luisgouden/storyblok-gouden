<script>
	import Brand from './Brand.svelte';
	import Menu from './Menu.svelte';

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

	@media (min-width:992px) {
	  justify-content: space-between;
		background-color: var(--white);
	}

}

nav{
  display: none;
	font-weight: 400;

	@media (min-width:992px) {
	  display: flex;
	  align-items: center;
	  width: min-content;
	  flex-direction:row-reverse;
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
