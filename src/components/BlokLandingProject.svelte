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

<a href={blok.image.title} use:editable={blok}>
  	<img alt={blok.image.alt} src={blok.image.filename}>
</a>
