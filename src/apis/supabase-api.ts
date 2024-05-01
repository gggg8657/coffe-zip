import { supabase } from "../supabase/supabase";

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
