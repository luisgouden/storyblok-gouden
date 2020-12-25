<script>
  import { editable } from '../directives'

  export let blok
</script>

<style>
	div {
		width: 100%;
		display: flex;
	}
  img{
    max-height: calc(var(--unit)/2);
  }
  .skill{
    display: grid;
    justify-content: center;
    align-items: center;
  }
  p{

  }

</style>

<div use:editable={blok}>
  	<img alt={blok.image.alt} src={blok.image.filename}>
    <div class="skill">
    <p>{blok.skill}</p>
    </div>
</div>
