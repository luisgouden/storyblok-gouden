<script>
	import Menu from '../components/MenuFooter.svelte';
	export let segment;
</script>

<style>

footer {
  height: var(--heightMenu);
  left: 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  z-index: 1;
  background-color: var(--white);
	max-width:100vw;
}

nav {
	display: flex;
	width: 100%;
	box-shadow: 0 0 var(--heightMenu) 0 rgba(0, 0, 0, .2)
}

</style>

{#if segment !== undefined }

<div class="comodin mobile"></div>

<footer class="mobile">
	<nav>
		<Menu {segment} />
	</nav>
</footer>

{/if}
