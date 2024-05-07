const CustomOverlay = (
    name: string,
    address: string,
    lat: number,
    lng: number
) => {
    const coPosition = new window.kakao.maps.LatLng(lat, lng);
    const overlay = new window.kakao.maps.CustomOverlay({
        position: coPosition,
        clickable: true,
        yAnchor: 1.15,
        zIndex: 999,
    });

    // content div 생성
    const content = document.createElement("div");
    content.style.position = "relative";
    content.style.backgroundColor = "#ffffff";
    content.style.borderRadius = "10px";
    content.style.border = "1px solid #023048";
    content.style.width = "200px";
    content.style.height = "105px";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "4px";
    content.style.padding = "8px";
    content.style.color = "#023048";
    content.style.fontSize = "14px";
    content.style.fontWeight = "bold";
    content.style.boxShadow = "2px 2px 2px 0px rgba(0, 0, 0, 0.4)";

    // 첫 번째 내부 div 생성
    const innerDiv1 = document.createElement("div");
    innerDiv1.style.display = "flex";
    innerDiv1.style.justifyContent = "space-between";
    innerDiv1.style.fontSize = "18px";
    innerDiv1.style.whiteSpace = "normal";
    innerDiv1.innerText = name;

    // 두 번째 내부 div 생성
    const innerDiv2 = document.createElement("div");
    innerDiv2.style.whiteSpace = "normal";
    innerDiv2.innerText = address;

    // 세 번째 내부 div 생성
    const innerDiv3 = document.createElement("div");
    innerDiv3.style.position = "absolute";
    innerDiv3.style.bottom = "8px";
    innerDiv3.style.right = "8px";
    innerDiv3.style.display = "flex";
    innerDiv3.style.flexDirection = "row";
    innerDiv3.style.alignItems = "center";
    innerDiv3.style.gap = "8px";
    innerDiv3.style.fontSize = "16px";
    innerDiv3.style.fontWeight = "bold";
    innerDiv3.style.color = "#000000";

    // close div 생성
    const closeDiv = document.createElement("div");
    closeDiv.style.cursor = "pointer";
    closeDiv.onclick = () => overlay.setMap(null);

    // close div 내부에 이미지 요소 생성
    const closeImg = document.createElement("img");
    closeImg.src = "/svg/close.svg";
    closeImg.width = 20;
    closeImg.height = 20;
    closeImg.alt = "close-icon";

    // copyBtn div 생성
    const copyBtn = document.createElement("div");
    copyBtn.style.cursor = "pointer";
    copyBtn.innerText = "주소 복사";
    copyBtn.onclick = async () => {
        await navigator.clipboard.writeText(address);
        const toastMessage = document.createElement("div");
        toastMessage.innerText = "클립보드에 주소가 복사되었습니다.";
        toastMessage.style.position = "fixed";
        toastMessage.style.bottom = "110px";
        toastMessage.style.width = "260px";
        toastMessage.style.left = "50%";
        toastMessage.style.transform = "translateX(-50%)";
        toastMessage.style.display = "flex";
        toastMessage.style.justifyContent = "center";
        toastMessage.style.alignItems = "center";
        toastMessage.style.backgroundColor = "#333";
        toastMessage.style.opacity = "0.8";
        toastMessage.style.color = "#fff";
        toastMessage.style.padding = "10px 20px";
        toastMessage.style.borderRadius = "5px";
        toastMessage.style.zIndex = "9999";
        document.body.appendChild(toastMessage);
        setTimeout(() => {
            toastMessage.remove();
        }, 2000);
    };

    // link div 생성
    const link = document.createElement("a");
    link.href = `https://map.kakao.com/link/to/${address},${lat},${lng}`;
    link.target = "_blank";
    link.style.textDecoration = "none";
    link.style.color = "inherit";
    link.style.backgroundColor = "#FAE100";
    link.style.padding = "4px 4px";
    link.style.display = "flex";
    link.style.alignItems = "center";
    link.style.borderRadius = "4px";
    link.style.gap = "2px";

    // kakao map logo 이미지 생성
    const kakaoMapLogo = document.createElement("img");
    kakaoMapLogo.src = "/webp/kakaomap.webp";
    kakaoMapLogo.width = 16;
    kakaoMapLogo.height = 16;
    kakaoMapLogo.alt = "kakao-map-logo";

    // 길찾기 텍스트 생성
    const guideText = document.createTextNode("길찾기");

    // closeImg를 closeDiv에 추가
    closeDiv.appendChild(closeImg);
    innerDiv1.appendChild(closeDiv);

    // link에 kakao map logo 이미지와 길찾기 텍스트 추가
    link.appendChild(kakaoMapLogo);
    link.appendChild(guideText);

    // innerDiv3에 copyBtn과 link 추가
    innerDiv3.appendChild(copyBtn);
    innerDiv3.appendChild(link);

    // content div에 내부 요소들 추가
    content.appendChild(innerDiv1);
    content.appendChild(innerDiv2);
    content.appendChild(innerDiv3);

    // overlay에 content div 설정
    overlay.setContent(content);

    return overlay;
};

export default CustomOverlay;
