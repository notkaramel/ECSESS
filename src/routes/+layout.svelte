<script>
	import "../app.css";
	import "../global.postcss";
	import Navbar from "components/Navbar.svelte";
	import Footer from "components/Footer.svelte";
	import Section from "components/Section.svelte";
	let { children } = $props();
</script>

<div class="h-dvh">
	<Navbar />
	<Section>
		<div>
			{@render children()}
		</div>
	</Section>
	<Footer />
</div>
