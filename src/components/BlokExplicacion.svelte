<script>
  import { editable } from "../directives";
  export let blok;
</script>

<style>
  div {
    display: flex;
    margin: 2em 0;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    width: minmax(min-content, 25%);
    margin-right: 2rem;
  }
</style>

<div use:editable={blok} class="">
  <h1>
    {blok.titulo}
  </h1>
  <p>
    {blok.texto}
  </p>
</div>
