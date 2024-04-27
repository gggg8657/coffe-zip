// 카페 데이터 Props 전달 인터페이스
export interface ListProps {
    name: string;
    address: string;
    lat: number;
    lng: number;
    unmanned: boolean;
    closed: string;
    dist_meters: number;
}

// 하단 탭 바 Props 전달 인터페이스
export interface PageProps {
    handleChangePage: (page: number) => void;
    page: number;
    totalPage: number;
}
