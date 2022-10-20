import { events } from "$lib/data/events";
import { supabaseClient } from "$lib/db";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
    const {data} = await supabaseClient.from('registrations').select('*').eq("id", params.regis_id).limit(1).single();
    if (!data) throw error(404, "Registration ID not found");
    return {db: data, event: events.find(e => e.id === data.event)};
}