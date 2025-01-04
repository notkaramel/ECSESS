<script>
    import { Avatar } from "bits-ui";
    export let src = undefined;
</script>

<Avatar.Root class="h-12 w-12 rounded-full border">
    <div
        class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
    >
        <Avatar.Image {src} alt="@huntabyte" />
        <Avatar.Fallback class="border border-muted">HB</Avatar.Fallback>
    </div>
</Avatar.Root>
