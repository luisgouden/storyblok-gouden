<script>
  import { editable } from "../directives";

  export let blok;
</script>

<style>
  figure {
    text-align: center;
    margin: 0 auto;
  }
  figure {
    margin: 0 0 1em 0;
  }
  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }
</style>

<div use:editable={blok}>
  <figure>
    <img alt="Borat" src={blok.image.filename} />
    <figcaption>{blok.image.title}</figcaption>
  </figure>
</div>
