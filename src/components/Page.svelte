<script>
  import getComponent from './index'
  export let blok
</script>

<slot>
  {#each blok.body as blok}
    <svelte:component
      blok={blok}
      this={getComponent(blok.component)}
    />
  {/each}
</slot>
