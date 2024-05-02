import { useEffect, useState } from "react";
import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";
import MapStore from "../stores/map-store";
import SearchBox from "./search-box";
import CustomOverlay from "./custom-overlay";

const Wrapper = styled.div`
    position: relative;
`;

const Kakao = styled.div`
    width: 100%;
    height: 65vh;
    @media (min-width: 1025px) {
        height: 100vh;
    }
`;

const Search = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1025px) {
        display: none;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 998;
    &:hover {
        opacity: 0.8;
    }
    @media (max-width: 1024px) {
        bottom: 10%;
        left: 12px;
    }
    @media (min-width: 1025px) {
        bottom: 5%;
        right: 2%;
    }
`;

const KakaoMap: React.FC<{ list: ListProps[] }> = ({ list }) => {
    const { location, selected } = MapStore();
    const [myMap, setMyMap] = useState<kakao.maps.Map | null>(null);
    const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
    const [ctOverlay, setCtOverlay] = useState<kakao.maps.CustomOverlay | null>(
        null
    );
    const kakao = window.kakao;

    // 최초 로딩 시 지도 생성
    useEffect(() => {
        kakao.maps.load(() => {
            const container = document.getElementById("map");
            if (container && !myMap) {
                const options = {
                    center: new kakao.maps.LatLng(
                        37.570227990912244,
                        126.98315081716676
                    ),
                    level: 6,
                };
                const initialMap = new kakao.maps.Map(container, options);
                setMyMap(initialMap);
                // 현재 사용자 위치 구하고 마커로 나타내는 함수
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    const current = new kakao.maps.LatLng(latitude, longitude);
                    const myMarkerUrl = "/svg/current.svg";
                    const myMarkerSize = new kakao.maps.Size(40, 40);
                    const myMarkerImage = new kakao.maps.MarkerImage(
                        myMarkerUrl,
                        myMarkerSize
                    );
                    const currentMarker = new kakao.maps.Marker({
                        position: current,
                        image: myMarkerImage,
                    });
                    currentMarker.setMap(initialMap);
                });
            }
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 새로운 카페 리스트를 받아올 때의 지도 작업
    useEffect(() => {
        markers.forEach((marker) => marker.setMap(null));
        if (ctOverlay) ctOverlay.setMap(null);

        // 리스트에 있는 카페 좌표를 마커로 나타내는 함수(클릭 이벤트 발생 이전 커스텀 오버레이 삭제해야 함)
        const createMarkers = (items: ListProps[], map: kakao.maps.Map) => {
            return items.map((item) => {
                let markerUrl;
                if (item.unmanned === true) {
                    // 무인
                    markerUrl = "/svg/allday.svg";
                } else {
                    // 24시간
                    if (item.closed === null) {
                        markerUrl = "/svg/pin.svg";
                    } else {
                        // 24시간 X
                        markerUrl = "/svg/parttime.svg";
                    }
                }
                const markerSize = new kakao.maps.Size(50, 64);
                const markerImage = new kakao.maps.MarkerImage(
                    markerUrl,
                    markerSize
                );
                const markerPosition = new kakao.maps.LatLng(
                    item.lat,
                    item.lng
                );
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                    title: item.name,
                    clickable: true,
                });
                const overlay = CustomOverlay(
                    item.name,
                    item.address,
                    item.lat,
                    item.lng,
                    true
                );
                kakao.maps.event.addListener(marker, "mouseover", () => {
                    overlay.setMap(map);
                });
                kakao.maps.event.addListener(marker, "mouseout", () =>
                    overlay.setMap(null)
                );

                return marker;
            });
        };

        if (myMap) {
            if (list) {
                const CafeMarkers = createMarkers(list, myMap);
                setMarkers(CafeMarkers);
                CafeMarkers.forEach((marker) => marker.setMap(myMap));
            }
            if (selected[0] !== "") {
                const copyAddress = async () => {
                    await navigator.clipboard.writeText(selected[1]);
                    alert("클립보드에 주소가 복사되었습니다.");
                };
                const overlay = CustomOverlay(
                    selected[0],
                    selected[1],
                    selected[2],
                    selected[3],
                    false
                );
                overlay.setMap(myMap);
                myMap.setCenter(overlay.getPosition());
                setCtOverlay(overlay);
                kakao.maps.event.addListener(myMap, "click", () =>
                    overlay.setMap(null)
                );
                const copyBtns = document.querySelectorAll(".copyBtn");
                if (copyBtns) {
                    copyBtns.forEach((btn) => {
                        btn.addEventListener("click", () => {
                            copyAddress();
                        });
                    });
                }
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    // 최초 지도가 생성된 이후에 중심 좌표 현재 사용자 위치로 이동
    useEffect(() => {
        if (location[0] && location[1] && myMap) {
            const newCenter = new kakao.maps.LatLng(location[0], location[1]);
            myMap.setCenter(newCenter);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myMap, location]);

    // 현재 사용자 위치로 이동하는 함수
    const onClickLocate = () => {
        if (myMap) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const current = new kakao.maps.LatLng(latitude, longitude);
                myMap.setCenter(current);
            });
        }
    };

    return (
        <Wrapper>
            <Kakao id="map" />
            <Search>
                <SearchBox />
            </Search>
            <IconWrapper onClick={onClickLocate}>
                <img
                    alt="location-icon"
                    src="/svg/location.svg"
                    height="20"
                    width="20"
                />
            </IconWrapper>
        </Wrapper>
    );
};

export default KakaoMap;
