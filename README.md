# 🗺️ 서울 내에 있는 24시간/무인 카페 찾기 서비스 / 커피24

## ⚙️ 요구 사항(Requirements)

-   Node.js 20.11.1
-   yarn 1.22.21
-   vite 5.2.0

## 💡 실행 방법(Installation)

```bash
$ cd coffe-zip
$ yarn
$ yan dev
```

## 🖥️ 서비스 소개(Introduction)


## 🗓️ 개발 기간(Development Period)

-   **전체 개발 기간 : 2024.04.24 ~ 2024.05.XX**
-   **기획 및 디자인 : 2024.04.23 ~ 2024.04.29**
-   **UI 및 기능 구현 : 2024.04.24 ~ 2024.05.03**
-   **DB 구현 및 데이터 수집 : 2024.04.26 ~ 2024.05.XX**

## 🙋‍♂️ 멤버 구성(Member)

**PM 1명, 개발자 1명**

## 개인(본인) 기여도

- **1인 개발**
- **디자인 참여**

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config
<div>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>


### 🛠️ 개발 기술(Development)

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-696969?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
</div>

### 🪄 디자인(Design)

<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

### 🗺️ 외부 API

<div>
  <img src="https://img.shields.io/badge/kakaomapapi-FFCD00?style=for-the-badge&logo=kakao&logoColor=white">
</div>

---

## 📂 디렉토리 구조

```bash

```

## 🌟 주요 기능(Specification)

#### ☕ 주변 카페 데이터 조회(Data Fetching)

-   현재 사용자의 GPS 값을 기반으로 2km 이내에 있는 24시간/무인 카페 리스트를 조회 후 지도에 핀 보여주기
-   한 페이지 내에서 최대 카페 데이터 5개 및 지도 최대 핀 5개 제한, 그 외 모두 페이지네이션 활용
-   React-Query를 사용한 데이터 캐싱 지원

#### 🔍 장소/주소 검색 기능(Search)

-   카카오 지도 API의 검색 기능을 활용해 장소/주소 검색 시 자동완성 기능 지원
-   검색 시 지도의 중심을 해당 좌표로 이동과 동시에 근방 2km 이내에 있는 카페 데이터 재 패치

#### 📬 주소 복사/공유 기능(Copy & Share)

-   핀/리스트에서 클릭 시 카페 이름과 주소를 확인할 수 있는 상세보기 창 기능
-   상세보기 창에서 주소 복사 기능으로 클립보드에 카페 주소 복사 기능 구현
-   상세보기 창에서 주소 공유 기능으로 현재 카페 정보를 다른 사람에게 공유할 수 있는 기능 구현
