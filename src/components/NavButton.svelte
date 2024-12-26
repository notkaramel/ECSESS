<script>
    import { Button } from "bits-ui";
    export let href = "";
</script>

<a {href}>
    <Button.Root class="font-semibold text-white
            px-4 py-2 m-1 rounded-md border-none">
        <slot />
    </Button.Root>
</a>

<style lang="postcss">
</style>
