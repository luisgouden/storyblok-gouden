<script>
  import { editable } from '../directives'

  export let blok
</script>

<style>
a{
}
	img {
		width: 100%;
	}

</style>

<a href={blok.image.title} use:editable={blok}>
  	<img alt={blok.image.alt} src={blok.image.filename}>
</a>
