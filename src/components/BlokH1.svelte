<script>
  import { editable } from '../directives'

  export let blok
</script>

<style>
  h1{
    width:minmax(min-content, 25%);
    margin-right:2rem;
  }
</style>

<div use:editable={blok} class="teaser">
<h1 style="color:{blok.color}">
  {blok.h1}
</h1>
</div>
