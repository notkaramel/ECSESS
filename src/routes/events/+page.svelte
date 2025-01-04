<script>
    import Section from "components/Section.svelte";
    import EventPost from "components/EventPost.svelte";

    import { exampleEvents } from "$lib";
    import Calendar from "components/Calendar.svelte";
</script>

<title> ECSESS Events </title>

<Section>
    {#each exampleEvents as event}
    <EventPost {event}/>
    {/each}
    <Calendar/>
</Section>
