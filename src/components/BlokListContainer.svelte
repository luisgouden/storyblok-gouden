<script>
  import getComponent from './index'
  export let blok
</script>

<style>
section{
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
