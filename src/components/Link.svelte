<script>
  import { editable } from '../directives'

  export let blok
</script>

<div use:editable={blok} class="teaser">
  {blok.link}
  console.log(blok.link)
</div>
