<script lang="ts">
  import Faq from "$lib/components/FAQPageMobile.svelte";
  import MobileHero from "$lib/assets/mobile-hero.jpg";
  import { page_1, page_1_title } from "$lib/data/FAQs";
  import { onMount, SvelteComponent } from "svelte";
  import EventCard from "$lib/components/EventCard.svelte";
  import { goto } from "$app/navigation";
  import { events } from "$lib/data/events";
  import AboutUs from "$lib/components/AboutUs.svelte";
  import Loader from "$lib/components/Loader.svelte";
  // Should have been SvelteComponent
  let Cube: any;
  let innerWidth: number;
  let innerHeight: number;
  let loadPromiseResolve: any;
  let loadPromise = new Promise((resolve) => {
    loadPromiseResolve = resolve;
  });
  onMount(async () => {
    if (innerWidth > 1024) await goto("/");
    const mod = await import("$lib/components/HeroCubeMobile.svelte");
    Cube = mod.default;
    setTimeout(loadPromiseResolve, 150);
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#await loadPromise}
  <Loader />
{:then value}
  <div
    style="--bg-url: url({MobileHero});"
    class="hero-bg min-h-screen flex flex-col lg:flex-row bg-base-100 overflow-x-hidden scroll-mt-16"
    id="hero"
  >
    <div id="hero-half" class="mt-10 flex flex-col">
      <span
        class="mt-auto lg:-mb-10 lg:ml-32 mx-auto lg:text-[10rem] text-[5rem] lg:[line-height=9.5rem] text-base-content vimh"
        >SYNERGY</span
      ><span class="mt-2 mx-auto lg:ml-32 lg:mb-36 text-base-content text-4xl"
        >Nexus of Innovation</span
      >
    </div>
    <div id="hero-cube" class="flex-grow flex justify-center items-center">
      <svelte:component this={Cube} />
    </div>
  </div>
  <div class="mt-16" id="about">
    <AboutUs />
  </div>
  <div class="flex flex-col justify-center gap-4 items-center content-gradient mt-10" id="faq">
    <Faq data_list={page_1} title={page_1_title} />
  </div>

  <div class="" id="contact-us" />
{/await}

<style>
  .hero-bg {
    background: var(--bg-url) no-repeat top;
    background-size: cover;
  }

  .content-gradient {
    /* --tw-gradient-stops: #0000004D, theme('colors.sky.400'), theme('colors.rose.400'), theme('colors.lime.400'); */
    background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39));
  }
</style>
