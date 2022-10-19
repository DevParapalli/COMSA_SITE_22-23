<script lang="ts">
  import "../../app.postcss";
  import "iconify-icon";

  import {afterNavigate} from '$app/navigation';

  afterNavigate(() => {
    contentElem.scrollTo(0,0);
  })

  import { Modals, closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";

  import { supabaseClient } from "$lib/db";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  let contentElem: HTMLElement;
  let contentElemScrollTop = 0;
  let is_transparent = true;

  $: is_transparent = contentElemScrollTop < 128;

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    contentElem.addEventListener(
      "scroll",
      ({ target }) => (contentElemScrollTop = target?.scrollTop),
    );

    return () => {
      subscription.unsubscribe();
      if (browser)
        contentElem.removeEventListener(
          "scroll",
          ({ target }) => (contentElemScrollTop = target?.scrollTop),
        );
    };
  });

  import type { LayoutLoad } from "./$types";
  import { getSupabase } from "@supabase/auth-helpers-sveltekit";
  import { browser } from "$app/environment";

  export const load: LayoutLoad = async (event) => {
    const { session } = await getSupabase(event);
    return { session };
  };
</script>

<Modals>
  <div slot="backdrop" class="backdrop z-[100]" transition:fade on:click={closeModal} />
</Modals>

<div class="drawer">
  <input id="side-drawer" type="checkbox" class="drawer-toggle" />
  <div
    bind:this={contentElem}
    class="drawer-content scroll-smooth snap-y snap-mandatory snap-always scroll-m-16 flex flex-col"
  >
    <!-- Navbar -->
    <div
      class="w-full navbar fixed top-0 left-0 {is_transparent
        ? 'bg-transparent'
        : 'bg-base-300'} transition-colors duration-200 z-50 px-6"
    >
      <div class="flex-none lg:hidden">
        <label for="side-drawer" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2 {is_transparent ? 'invisible' : 'visible'}">
        Insert Icon Here
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a href="/">Home</a></li>
          <li><a href="/#about-us">About</a></li>
          <li><a href="/events/">Events</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </div>
    </div>
    <slot />
    <footer class="footer p-10 bg-base-200 text-base-content mt-10 opacity-100 hover:opacity-100 lg:opacity-50 transition-opacity duration-200">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current hidden"
          ><path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          /></svg
        >
        <p><span class="vimh">SYNERGY</span><br />by Computer Science Students Association of GCOEN</p>
      </div>
      <div class="lg:ml-auto pr-10">
        <span class="footer-title">Legal</span>
        <a href="/legal/tos" class="link link-hover">Terms of Service</a>
        <a href="/legal/pp" class="link link-hover">Privacy policy</a>
        <a href="/legal/cp" class="link link-hover">Cookie policy</a>
      </div>
    </footer>
    <footer class="footer-center bg-black text-white text-opacity-50 py-2">
      &copy; 2022 COMSA, GCOEN
    </footer>
  </div>
  <div class="drawer-side">
    <label for="side-drawer" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li class="flex flex-row-reverse align-middle items-end">
        <label for="side-drawer" class="btn btn-ghost btn-xl flex-shrink"
          ><iconify-icon class="text-4xl" icon="carbon:close" /></label
        >
      </li>
      <li><a href="/">Home</a></li>
      <li><a href="/#about-us">About</a></li>
      <li><a href="/events/">Events</a></li>
      <li><a href="/gallery">Gallery</a></li>
    </ul>
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
