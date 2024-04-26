export interface ListProps {
    name: string;
    address: string;
    lat: number;
    lng: number;
    unmanned: boolean;
    closed: string;
    dist_meters: number;
}

export interface PageProps {
    handleChangePage: (page: number) => void;
    page: number;
    totalPage: number;
}
