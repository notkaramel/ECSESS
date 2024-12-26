<script>
    import NavButton from "./NavButton.svelte";
</script>

<nav>
    <p class="text-white">
        ECSESS LOGO PLACEHOLDER
    </p>
    <NavButton href="/">
        Home
    </NavButton>
    <NavButton href="/resources">
        Resources
    </NavButton>
    <NavButton href="/council">
        Meet the council
    </NavButton>
    <NavButton href="/events">
        Events
    </NavButton>
    <NavButton href="/admin">
        Login
    </NavButton>
</nav>

<style lang="postcss">
    nav {
        @apply flex justify-between items-center;
        @apply bg-emerald-800 text-white;
    }
</style>