import { useEffect, useState } from "react";
import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";
import MapStore from "../stores/map-store";
import SearchBox from "./search-box";

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

const Map: React.FC<{ list: ListProps[] }> = ({ list }) => {
    const { location, selected } = MapStore();
    const [myMap, setMyMap] = useState<kakao.maps.Map | null>(null);
    const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);

    useEffect(() => {
        const kakao = window.kakao;
        markers.forEach((marker) => marker.setMap(null));

        // 리스트에 있는 카페 좌표를 마커로 나타내는 함수
        const createMarkers = (items: ListProps[]) => {
            return items.map((item) => {
                let markerUrl;
                if (item.unmanned === true) {
                    // 무인
                    markerUrl = "/svg/pin.svg";
                } else {
                    // 24시간
                    if (item.closed === null) {
                        markerUrl = "/svg/pin.svg";
                    } else {
                        // 24시간 X
                        markerUrl = "/svg/pin.svg";
                    }
                }
                const markerSize = new kakao.maps.Size(28, 36);
                const markerImage = new kakao.maps.MarkerImage(
                    markerUrl,
                    markerSize
                );
                const markerPosition = new kakao.maps.LatLng(
                    item.lat,
                    item.lng
                );

                return new kakao.maps.Marker({
                    position: markerPosition,
                    title: item.name,
                    image: markerImage,
                    clickable: true,
                });
            });
        };

        kakao.maps.load(() => {
            const container = document.getElementById("map");
            if (container) {
                const options = {
                    center: new kakao.maps.LatLng(location[0], location[1]),
                    level: 4,
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

                if (list) {
                    const CafeMarkers = createMarkers(list);
                    setMarkers(CafeMarkers);
                    CafeMarkers.forEach((marker) => marker.setMap(initialMap));
                }

                if (initialMap && selected[0] !== "") {
                    var iwContent =
                        '<div style="position: relative; background-color: #ffffff; border-radius: 10px; border: 1px solid #023048; width: 180px; height: 85px; display: flex; flex-direction: column; gap: 4px; padding: 8px; color: #023048; font-size: 14px; font-weight: bold;">' +
                        `<div>${selected[0]}</div>` +
                        `<div>${selected[1]}</div>` +
                        '<div style="position: absolute; bottom: 8px; right: 8px; display: flex; gap: 8px; font-size: 16px; font-weight: bold; color: #000000;">' +
                        "<div>주소 공유</div>" +
                        "<div>주소 복사</div>" +
                        "</div>" +
                        "</div>";
                    var iwPosition = new kakao.maps.LatLng(
                        selected[2],
                        selected[3]
                    );
                    var infowindow = new kakao.maps.InfoWindow({
                        map: initialMap,
                        position: iwPosition,
                        content: iwContent,
                        zIndex: 999,
                    });
                    initialMap.setCenter(iwPosition);
                    // 클로저를 사용하여 클릭 이벤트 처리
                    kakao.maps.event.addListener(initialMap, "click", () =>
                        infowindow.close()
                    );
                }
            }
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

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

export default Map;
