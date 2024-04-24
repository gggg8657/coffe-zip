export interface ListProps {
    name: string;
    address: string;
    lat: number;
    lng: number;
    unmanned: boolean;
    time: string;
}

export interface PageProps {
    handleChangePage: (page: number) => void;
    page: number;
    totalPage: number;
}
