<script>
  import { editable } from '../directives'

  export let blok
</script>

<style>
	img {
		width: 100%;
		max-width: 400px;
	}

</style>

<a href={blok.image.filename} use:editable={blok}>
  	<img alt={blok.image.filename} src={blok.image.filename}>
</a>
