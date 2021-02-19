<script>
  import { editable } from "../directives";

  export let blok;
</script>

<style>
  a {
  }

  img {
    width: 100%;
  }
  a:last-of-type {
    margin-bottom: var(--heightMenu);
  }

  @media (min-width: 992px) {
    a:last-of-type {
      margin-bottom: 0;
    }
  }
</style>

<a href={blok.image.title} use:editable={blok}>
  <img alt={blok.image.alt} src={blok.image.filename} />
</a>
