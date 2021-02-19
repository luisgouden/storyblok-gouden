<script>
  import getComponent from "./index";
  export let blok;
</script>

<style>
  :root {
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 0.5rem;
    box-sizing: border-box;
    width: 100%;
  }
</style>

<section>
  {#each blok.body as blok}
    <svelte:component this={getComponent(blok.component)} {blok} />
  {/each}
</section>
