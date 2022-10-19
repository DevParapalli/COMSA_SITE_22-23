<script>
    import EventCard from '$lib/components/EventCard.svelte';
    import { events } from '$lib/data/events';
</script>

<div class="mx-auto mt-10 w-5/6 flex flex-row flex-wrap justify-evenly align-middle gap-10">
			<h1 id="events" class="text-[6rem] mx-auto text-center text-base-content w-screen vimh mb-20">EVENTS</h1>
			<h1 id="events" class="text-4xl text-center text-base-content w-screen vimh">TECHNICAL</h1>
			{#each events as event}
			<EventCard name={event.name} desc={event.desc} id={event.id} image={event.image}/>
			{/each}
            <h1 id="events" class="text-4xl text-center text-base-content w-screen vimh mt-16">NON-TECHNICAL</h1>
			{#each events as event}
			<EventCard name={event.name} desc={event.desc} id={event.id} image={event.image}/>
			{/each}
            <h1 id="events" class="text-4xl text-center text-base-content w-screen vimh mt-16">SEMINARS</h1>
			{#each events as event}
			<EventCard name={event.name} desc={event.desc} id={event.id} image={event.image}/>
			{/each}
		
		</div>