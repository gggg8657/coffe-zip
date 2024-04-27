import { supabase } from "../supabase/supabase";

// 24시간 카페 데이터 조회 함수
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

// 전체 카페 데이터 조회 함수
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
