import { create } from "zustand";

interface LocationType {
    selected: [string, string, number, number];
    location: [number, number];
    openList: boolean;
    setLocation: (newLocation: [number, number]) => void;
    setSelected: (newSelected: [string, string, number, number]) => void;
    setOpenList: () => void;
}

const MapStore = create<LocationType>((set) => ({
    //좌표 서울 시청 default 값 설정
    location: [37.570227990912244, 126.98315081716676],
    selected: ["", "", 0, 0],
    openList: true,
    setLocation: (newLocation: [number, number]) =>
        set((state) => ({ ...state, location: newLocation })),
    setSelected: (newSelected: [string, string, number, number]) =>
        set((state) => ({ ...state, selected: newSelected })),
    setOpenList: () =>
        set((state) => ({ ...state, openList: !state.openList })),
}));

export default MapStore;
