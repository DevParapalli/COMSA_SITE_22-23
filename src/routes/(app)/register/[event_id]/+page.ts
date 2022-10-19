import type { PageLoad } from "./$types";
import { events } from "$lib/data/events";
import { error } from "@sveltejs/kit";
export const load: PageLoad = ({ params }) => {
  const data = events.find((event) => event.id === params.event_id);
  if (data) return data;
  else throw error(404, "Event ID not found");
};
