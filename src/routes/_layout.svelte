<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'

	export async function preload(page, session) {
    const response = await client.getAll('cdn/stories', reqConfig)

		return { stories: response || [] }
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

	export let stories = []
	export let segment;
</script>

<style>
</style>

<Nav {segment} {stories} />

<main>
	<slot></slot>
</main>

<Footer {segment} />
