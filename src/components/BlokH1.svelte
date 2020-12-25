<script>
  import { editable } from '../directives'

  export let blok
</script>

<style>
  h1{

    text-align: center;
  }
</style>

<h1 use:editable={blok} class="teaser" style="color:{blok.color}">
  {blok.h1}
</h1>
