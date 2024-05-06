# 🦉 카페 찾는 부엉이 - 서울에 있는 24시간/무인 카페 찾기 웹/앱 서비스

## 🖥️ 서비스 소개(Introduction)

-   서울 내 야간 영업 정보를 제공하는 웹/앱 서비스입니다.
-   야간 운영은 자정 이후 또는 24시간 영업하는 카페를 의미합니다.
-   사용자에 GPS 좌표를 기준으로 반경 2km 내에 있는 카페들의 정보를 제공합니다.

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

## 🔗 웹 바로가기(Deployment)

https://coffeezip.vercel.app

## 📲 PWA를 활용한 앱(Application)

#### 🍎 iOS & Safari

-   Safari 환경에서 https://coffeezip.vercel.app에 접속
-   공유 버튼 클릭 후 아래 홈 화면에 추가
-   바탕화면 또는 홈 화면에 추가된 앱으로 실행

#### 🖥️ Web & Chrome

-   Chrome 환경에서 https://coffeezip.vercel.app에 접속
-   검색창 우측의 위치한 북마크 추가 버튼 좌측 클릭 후 앱 설치
-   바탕화면 또는 홈 화면에 추가된 앱으로 실행

## 🗓️ 개발 기간(Development Period)

-   **전체 개발 기간 : 2024.04.24 ~ 2024.05.XX**
-   **기획 및 디자인 : 2024.04.23 ~ 2024.04.29**
-   **UI 및 기능 구현 : 2024.04.24 ~ 2024.05.03**
-   **DB 구현 및 데이터 수집 : 2024.04.26 ~ 2024.05.XX**

## 🙋‍♂️ 멤버 구성(Member)

**PM 1명, 개발자 1명**

## 개인(본인) 기여도

-   **1인 개발(프론트 & DB)**
-   **디자인 참여**

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
24hour-cafe
├─ .eslintrc.cjs
├─ .github
│  └─ workflows
│     └─ test.yml
├─ .gitignore
├─ index.html
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ favicon.ico
│  │  ├─ logo-128X128.png
│  │  ├─ logo-144X144.png
│  │  ├─ logo-192X192.png
│  │  ├─ logo-256X256.png
│  │  ├─ logo-32X32.png
│  │  ├─ logo-48X48.png
│  │  ├─ logo-512X512.png
│  │  └─ logo-72X72.png
│  ├─ manifest.json
│  ├─ svg
│  │  ├─ allday.svg
│  │  ├─ arrow.svg
│  │  ├─ cafe.svg
│  │  ├─ cancle.svg
│  │  ├─ current.svg
│  │  ├─ location.svg
│  │  ├─ muin.svg
│  │  ├─ parttime.svg
│  │  ├─ search.svg
│  │  └─ unman.svg
│  └─ webp
│     ├─ logo.webp
│     └─ wrapper.webp
├─ README.md
├─ robots.txt
├─ src
│  ├─ apis
│  │  └─ supabase-api.ts
│  ├─ App.tsx
│  ├─ components
│  │  ├─ custom-overlay.ts
│  │  ├─ kakao-map.tsx
│  │  ├─ list.tsx
│  │  ├─ loading.tsx
│  │  ├─ search-box.tsx
│  │  ├─ skeleton-ui.tsx
│  │  └─ tab-bar.tsx
│  ├─ interfacce
│  │  └─ list-interface.ts
│  ├─ main.tsx
│  ├─ pages
│  │  └─ Home.tsx
│  ├─ stores
│  │  └─ map-store.ts
│  ├─ supabase
│  │  └─ supabase.ts
│  └─ vite-env.d.ts
├─ sw.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock
```

## 🌟 주요 기능(Specification)

#### ☕ 주변 카페 데이터 조회(Data Fetching)

-   현재 사용자의 GPS 값을 기반으로 2km 이내에 있는 24시간/무인 카페 리스트를 조회 후 지도에 마커 보여주기
-   한 페이지 내에서 최대 카페 데이터 5개 및 지도 최대 마커 5개 제한, 그 외 모두 페이지네이션 활용
-   React-Query를 사용한 데이터 캐싱 지원

#### 🔍 장소/주소 검색 기능(Search)

-   카카오 지도 API의 검색 기능을 활용해 장소/주소 검색 시 자동완성 기능 지원
-   검색 시 지도의 중심을 해당 좌표로 이동과 동시에 근방 2km 이내에 있는 카페 데이터 재요청

#### 📬 주소 복사/공유 기능(Copy & Share)

-   마커/리스트 클릭 시 카페 이름과 주소를 확인할 수 있는 상세보기 창 기능
-   상세보기 창에서 주소 복사 기능으로 클립보드에 카페 주소 복사 기능 구현
-   상세보기 창에서 주소 공유 기능으로 현재 카페 정보를 다른 사람에게 공유할 수 있는 기능 구현

## 🔥 트러블 슈팅(Trouble Shooting)

-   React Hook 중 useEffect를 사용해 지도를 화면에 띄우는 과정에서 의존성 배열에 지도에 표시할 카페 리스트를 넣다 보니 지도가 계속 재생성 되는 것을 확인하였다.(지도 줌 인, 줌 아웃 중 지속해서 이전에 생성된 지도가 나타나는 오류 발생)

-   결국 의존성 배열을 제거하고 최초 마운트 시 한 개의 지도만 생성하고 이를 React Hook 중 useState로 관리하여 한 개의 지도만 조작할 수 있게 하였다. 또한, React에서 제공하는 StrictMode로 useEffect가 마운트 시 두 번 발생하는 것을 Strict 모드를 제거하여 오직 마운트 시 한 번만 작동하게 하였다.

-   현재 프로젝트 구조를 살펴보면 단일 페이지 Home에서 다른 컴포넌트를 import 하여 사용하고 있다. 이때 Home 컴포넌트 내에서 KakaoMap 컴포넌트와 List 컴포넌트가 존재하는데 List 컴포넌트에서 이벤트의 대한 작동을 KakaoMap 컴포넌트에서 하려다 보니 List->Home->KakaoMap 컴포넌트 순으로 Callback 함수와 props 전달이 계속 일어난다.

-   결국 zustand를 사용해서 List 컴포넌트에서 이벤트를 발생했을 때 데이터를 담아주고 이를 KakaoMap 컴포넌트에서 중앙 저장소에 접근하여 이를 활용하게 바꿨다.
