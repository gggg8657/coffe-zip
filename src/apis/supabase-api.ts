import { supabase } from "../supabase/supabase";

export const getAlldayList = async () => {
    const { data: list } = await supabase
        .from("coffee_zip")
        .select("*")
        .is("time", null);
    if (!list) {
        return [];
    }
    return list;
};

export const getCafeList = async (lat: number, lng: number) => {
    const { data: list } = await supabase.rpc("get_nearby_cafes", {
        latt: lat,
        long: lng,
    });
    if (!list) {
        return [];
    }
    return list;
};
