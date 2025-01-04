<script>
	import "../app.css";
	import "../global.postcss";
	import Navbar from "components/Navbar.svelte";
	import Footer from "components/Footer.svelte";
	let { children } = $props();
</script>
<div class="h-screen">
	<Navbar />
	{@render children()}
	<Footer />
</div>
