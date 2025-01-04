<script>
    import NavButton from "./NavButton.svelte";
</script>

<nav>
    <NavButton href="/">Home</NavButton>
    <NavButton href="/resources">Resources</NavButton>
    <NavButton href="/council">Meet the council</NavButton>
    <NavButton href="/events">Events</NavButton>
    <NavButton href="/admin">Login</NavButton>
</nav>

<style lang="postcss">
    nav {
        @apply flex items-center flex-wrap justify-center;
        @apply mx-auto pt-2 px-4 min-w-fit;
    }
</style>
