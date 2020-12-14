<script>
  import { editable } from '../directives'

  export let blok
</script>

<div use:editable={blok} class="link">
  {blok.link}

</div>
