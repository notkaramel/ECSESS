<script>
    import { Calendar } from "bits-ui";

    /** @type {Calendar.Props["isDateUnavailable"]} */
    const isDateUnavailable = (date) => {
        return date.day === 17 || date.day === 18;
    };
</script>

<Calendar.Root
    class="rounded-lg border-none border-dark-10 bg-accent p-4"
    let:months
    let:weekdays
    {isDateUnavailable}
>
    <Calendar.Header class="flex items-center justify-between">
        <Calendar.PrevButton
            class="size-10 items-center justify-center rounded-lg hover:bg-primary transition-all"
        >
            {`<`}
        </Calendar.PrevButton>
        <Calendar.Heading class="text-base font-bold" />
        <Calendar.NextButton
            class="size-10 items-center justify-center rounded-lg hover:bg-primary transition-all"
        >
            {`>`}
        </Calendar.NextButton>
    </Calendar.Header>

    <div
        class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
        {#each months as month, i (i)}
            <Calendar.Grid class="w-full border-collapse select-none space-y-1">
                <Calendar.GridHead>
                    <Calendar.GridRow class="mb-1 flex w-full justify-between">
                        {#each weekdays as day}
                            <Calendar.HeadCell
                                class="w-10 rounded-md text-xs !font-normal text-primary"
                            >
                                <div>{day.slice(0, 2)}</div>
                            </Calendar.HeadCell>
                        {/each}
                    </Calendar.GridRow>
                </Calendar.GridHead>
                <Calendar.GridBody>
                    {#each month.weeks as weekDates}
                        <Calendar.GridRow class="flex w-full">
                            {#each weekDates as date}
                                <Calendar.Cell
                                    {date}
                                    class="relative size-10 !p-0 text-center text-sm"
                                >
                                    <Calendar.Day
                                        {date}
                                        month={month.value}
                                        class="group relative inline-flex size-10 items-center justify-center whitespace-nowrap rounded-9px border border-transparent bg-transparent p-0 text-sm font-normal text-foreground hover:border-foreground data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-foreground data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-background data-[unavailable]:text-muted-foreground data-[unavailable]:line-through"
                                    >
                                        <div
                                            class="absolute top-[5px] hidden size-1 rounded-full bg-foreground group-data-[today]:block group-data-[selected]:bg-background"
                                        ></div>
                                        {date.day}
                                    </Calendar.Day>
                                </Calendar.Cell>
                            {/each}
                        </Calendar.GridRow>
                    {/each}
                </Calendar.GridBody>
            </Calendar.Grid>
        {/each}
    </div>
</Calendar.Root>
