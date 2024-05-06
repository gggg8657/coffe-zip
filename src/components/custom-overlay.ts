const CustomOverlay = (
    name: string,
    address: string,
    lat: number,
    lng: number
) => {
    let coContent =
        '<div style="position: relative; background-color: #ffffff; border-radius: 10px; border: 1px solid #023048; width: 200px; height: 105px; display: flex; flex-direction: column; gap: 4px; padding: 8px; color: #023048; font-size: 14px; font-weight: bold; box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4); ">' +
        `<div style="display: flex; justify-content: space-between;">` +
        `<div style="font-size: 18px; white-space: normal;">${name}</div>` +
        `<div class="close" style="cursor: pointer;"><img src="/svg/close.svg" width="20" height="20" alt="close-icon"/></div>` +
        `</div>` +
        `<div style="white-space: normal;">${address}</div>` +
        '<div style="position: absolute; bottom: 8px; right: 8px; display: flex; flex-direction: row; align-items: center; gap: 8px; font-size: 16px; font-weight: bold; color: #000000;">' +
        `<div class="copyBtn" style="cursor: pointer;">주소 복사</div>` +
        `<a style="text-decoration: none; color:inherit; background-color: #FAE100; padding: 4px 4px; display: flex; align-items: center; border-radius: 4px; gap: 2px;" href="https://map.kakao.com/link/to/${address},${lat},${lng}" target="_blank"><img src="/webp/kakaomap.webp" width="16" height="16" alt="kakao-map-logo"/>길찾기</a>` +
        "</div>" +
        "</div>";
    const coPosition = new window.kakao.maps.LatLng(lat, lng);
    const overlay = new window.kakao.maps.CustomOverlay({
        position: coPosition,
        content: coContent,
        clickable: true,
        yAnchor: 1.15,
        zIndex: 999,
    });

    const copyBtns = document.querySelectorAll(".copyBtn");
    copyBtns.forEach((btn) => {
        btn.addEventListener("click", async () => {
            await navigator.clipboard.writeText(address);
            alert("클립보드에 주소가 복사되었습니다.");
        });
    });
    const closeBtn = document.querySelectorAll(".close");
    closeBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            overlay.setMap(null);
        });
    });
    return overlay;
};

export default CustomOverlay;
