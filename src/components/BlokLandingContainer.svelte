<script>
  import getComponent from './index'
  export let blok
</script>

<style>
section{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(450px,1fr));
  grid-gap: 5px;
  box-sizing: border-box;
  width: 100%;
}

</style>

<section>
  {#each blok.body as blok}
    <svelte:component
      blok={blok}
      this={getComponent(blok.component)}
    />
  {/each}
</section>
