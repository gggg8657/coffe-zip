const CustomOverlay = (
    name: string,
    address: string,
    lat: number,
    lng: number
) => {
    const coContent =
        '<div style="position: relative; background-color: #ffffff; border-radius: 10px; border: 1px solid #023048; width: 200px; height: 105px; display: flex; flex-direction: column; gap: 4px; padding: 8px; color: #023048; font-size: 14px; font-weight: bold; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4); ">' +
        `<div>${name}</div>` +
        `<div style="white-space: normal;">${address}</div>` +
        '<div style="position: absolute; bottom: 8px; right: 8px; display: flex; gap: 8px; font-size: 16px; font-weight: bold; color: #000000;">' +
        "<div>주소 공유</div>" +
        `<div class="copyBtn" style="cursor: pointer;" onclick="copyAddress">주소 복사</div>` +
        "</div>" +
        "</div>";
    const coPosition = new kakao.maps.LatLng(lat, lng);
    const overlay = new kakao.maps.CustomOverlay({
        position: coPosition,
        content: coContent,
        clickable: true,
        yAnchor: 1.15,
        zIndex: 999,
    });
    return overlay;
};

export default CustomOverlay;
