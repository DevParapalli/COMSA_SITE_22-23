<script lang="ts">
  let panel: HTMLDivElement;
  let accordion: HTMLButtonElement;
  let icon: HTMLSpanElement;
  let is_open = false;

  export let question =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, consequuntur, saepe voluptatibus tempore modi.";
  export let answer =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam magnam, quibusdam commodi veritatis corrupti ex.";
</script>

<div class="self-center">
  <button
    class="accordion {is_open ? 'active' : ''}"
    bind:this={accordion}
    on:click={(event) => {
      is_open = !is_open;
      panel.style.maxHeight = is_open ? panel.scrollHeight + "px" : "0px";
    }}
  >
    <span>
      {question}
    </span>
    <span class="accordion-icon {is_open ? 'active' : ''}" bind:this={icon}
      ><svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 330 330"
        style="enable-background:new 0 0 330 330;"
        xml:space="preserve"
      >
        <path
          id="XMLID_224_"
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
       l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
       C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        />
      </svg></span
    >
  </button>
  <div bind:this={panel} class="panel {is_open ? 'active' : ''}">
    <p>
      {answer}
    </p>
  </div>
</div>

<style lang="postcss">
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    /* max-width: 90vw; */
    border: none;
    text-align: justify;
    outline: none;
    transition: 0.4s;
    /* margin-left: 0.25rem; */
    margin-right: 0.25rem;
    border-radius: 0.25rem;
    margin-top: 0.125rem;
    margin-bottom: 0px;
    transition: border-radius 0.2s ease-in-out;
    display: inline-flex;
    gap: 2rem;
    justify-content: space-between;
    @apply container w-full xl:max-w-xl text-base p-5 lg:p-7;
  }

  .active {
    background-color: #ccc;
    border-radius: 5px 5px 0px 0px;
  }

  .accordion:hover {
    background-color: #ccc;
  }

  .accordion-icon {
    color: #777;
    font-weight: bold;
    min-width: 1rem;
    float: right;
    align-self: center;
    font-size: x-large;
    transform: rotate(180deg);
    transition: all 0.4s ease-in-out;
  }

  .accordion-icon.active {
    transform: rotate(0deg);
  }

  .panel {
    padding: 0px 0.75rem;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    text-align: justify;
    transition: all 0.2s ease-out;
    color: black;
    margin-top: 0;
    /* margin-left: 0.25rem; */
    margin-right: 0.25rem;
    border-radius: 0px 0px 0.25rem 0.25rem;
    @apply container w-full lg:w-[unset] xl:max-w-xl text-sm;
  }

  .panel.active {
    max-height: fit-content;
  }

  .panel > p {
    height: fit-content;
    padding: 1rem 0.75rem;
  }
</style>
