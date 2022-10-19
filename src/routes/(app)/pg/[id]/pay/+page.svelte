<script lang="ts">
    import { dev } from "$app/environment";
  import { events } from "$lib/data/events";
  import type { db_registration } from "$lib/types";
  import { onMount } from "svelte";
import { PUBLIC_RZP_KEY } from "$env/static/public";


  export let data: { db: db_registration; pg: any };
  let _data = events.find((event) => event.id === data.db.event);
  onMount(() => {
    dev ? console.log(JSON.stringify(data)):'';
    const options = {
    "key": PUBLIC_RZP_KEY, // Enter the Key ID generated from the Dashboard
    "amount": data.db.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Synergy | GCOEN",
    "description": _data?.name,
    // "image": "https://example.com/your_logo",
    "order_id": data.pg.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": data.db.name,
        "email": data.db.email,
        "contact": data.db.phone
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
    // @ts-ignore
    const rzp = new Razorpay()
  });
</script>

<div
  class="container max-w-4xl flex flex-col items-stretch justify-center bg-base-200 mt-16 rounded-xl p-8"
>
  <div class="title text-center">
    <span class="text-4xl vimh">Registration Form</span>
  </div>
  <div
    class="event-details flex flex-col-reverse md:flex-row items-center justify-between border-b border-base-content mx-8 p-4"
  >
    <div class="text-content flex flex-col">
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Name: </span>{_data?.name}
      </div>
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Details:</span>{_data?.desc}
      </div>
      <div class="data-pair text-sm">
        <span class="text-lg text-bold mr-2">Event Fees:</span><iconify-icon
          icon="carbon:currency-rupee"
        />{data.db.amount / 100}
      </div>
    </div>
    <div class="event-icon">
      <iconify-icon icon={_data?.icon} class="text-6xl text-primary" />
    </div>
  </div>
  <div class="form-container form-control items-center justify-evenly min-h-[20rem]" />
</div>

<!-- {{
  session: null,
  db: {
    id: 1,
    created_at: "2022-10-17T09:02:18.946+00:00",
    name: "Rogue Catalyst",
    email: "parapallidev@gmail.com",
    education: "GCOEN",
    event: "events-4",
    amount: 10400,
    status: false,
    team: ["", "", "", ""],
    rzp_pid: null,
    rzp_oid: null,
    rzp_sig: null,
  },
  pg: {
    id: "order_KUnWt9OvUXuAMF",
    entity: "order",
    amount: 10400,
    amount_paid: 0,
    amount_due: 10400,
    currency: "INR",
    receipt: null,
    offer_id: null,
    status: "created",
    attempts: 0,
    notes: [],
    created_at: 1666000761,
  },
}} -->
