import { create } from "zustand";

interface LocationType {
    location: [number, number];
    setLocation: (newLocation: [number, number]) => void;
}

const MapStore = create<LocationType>((set) => ({
    //37.570227990912244, 126.98315081716676
    location: [37.619379687777, 127.05812045104],
    setLocation: (newLocation: [number, number]) =>
        set((state) => ({ ...state, location: newLocation })),
}));

export default MapStore;
