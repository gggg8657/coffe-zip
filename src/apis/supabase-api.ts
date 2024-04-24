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

export const getPartTimeList = async () => {
    const { data: list } = await supabase
        .from("coffee_zip")
        .select("*")
        .not("time", "is", null);
    if (!list) {
        return [];
    }
    return list;
};

export const getCafeList = async () => {
    const { data: list } = await supabase.from("coffee_zip").select("*");
    if (!list) return [];
    return list;
};
