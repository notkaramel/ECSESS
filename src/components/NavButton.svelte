<script>
    import { Button } from "bits-ui";
    export let href = "";
</script>

<a {href}>
    <Button.Root class="font-semibold text-content
            px-6 py-1 border-b-2 border-secondary hover:border-primary active:border-accent hover:rounded-sm transition-all">
        <slot />
    </Button.Root>
</a>

<style lang="postcss">
</style>
