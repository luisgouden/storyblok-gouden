<script>
  import { editable } from '../directives'

  export let blok
</script>

<div use:editable={blok} class="teaser">
  {blok.h1}
</div>
