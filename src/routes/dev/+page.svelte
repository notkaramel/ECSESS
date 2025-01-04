<script>
    import Button from "components/Button.svelte";
    import { Button as BitsButton } from "bits-ui";
</script>

<title> Dev environment </title>

<div class="flex flex-col items-center justify-center h-fit gap-4">
    <div class="flex flex-col items-center justify-center gap-4">
        <h1>ECSESS Colors</h1>
        <div class="flex flex-row gap-1 flex-wrap">
            {#each ["primary", "secondary", "accent", "neutral", "content"] as color}
                <BitsButton.Root
                    class="bg-{color} w-36 h-12 rounded-lg border-none"
                >
                    {color}
                </BitsButton.Root>
            {/each}
        </div>
    </div>
    <div>
        <h2>Components</h2>
        <h3>Button</h3>
        <Button>Welcome to ECSESS</Button>
    </div>
</div>
