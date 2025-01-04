<script>
    import Link from "./Link.svelte";
    import Section from "./Section.svelte";
    /** @type {import("$lib/types").EventPost} */
    export let event = {
        id: "placeholder-id",
        title: "Placeholder Event",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2021-10-01",
        time: "10:00",
        location: "Location 1",
        image: "https://picsum.photos/300",
        link: "https://www.google.com",
        category: "category 1",
        payment: "https://www.google.com",
    };
</script>

<Section>
    <div
        class="w-full lg:w-1/2 p-4 bg-neutral border-2 border-secondary rounded-lg shadow-lg"
    >
        <div class="w-dwh flex flex-col gap-4 items-center">
            <img src={event.image} alt="" class="w-48 rounded-md shadow-lg" />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>🗓️ Date: {event.date}</p>
            <p>⏰ Time: {event.time}</p>
            <p>📍 Location: {event.location}</p>

            {#if event.link}
                <Link href={event.link}>Event Link</Link>
            {/if}

            {#if event.payment}
                <Link href={event.payment}>Payment</Link>
            {/if}
        </div>
    </div>
</Section>
