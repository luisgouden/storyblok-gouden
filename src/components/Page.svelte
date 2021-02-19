<script>
  import getComponent from "./index";
  export let blok;
</script>

<slot>
  {#each blok.body as blok}
    <svelte:component this={getComponent(blok.component)} {blok} />
  {/each}
</slot>
