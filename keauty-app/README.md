# Keauty App

## 소개

Keauty App은 K-뷰티 랭킹, 조합 추천, 프로모션 등 다양한 기능을 제공하는 React Native 기반의 모바일 앱입니다. Expo를 사용하여 iOS, Android, Web에서 모두 실행할 수 있습니다.

---

## 폴더 구조 (2024년 기준)

```
keauty-app/
├── App.tsx                # 메인 앱 엔트리
├── i18n.ts                # i18n 다국어 설정
├── i18n.js                # (예비) i18n 관련 파일
├── index.ts               # 앱 진입점
├── app.json               # Expo 설정
├── package.json           # 의존성 및 스크립트
├── yarn.lock              # 의존성 lock 파일
├── tsconfig.json          # 타입스크립트 설정
├── README.md              # 프로젝트 설명서
├── .gitignore             # Git 무시 파일
├── commitlint.config.js   # 커밋 메시지 린트 설정
├── common.js              # 공통 스타일
├── styles.js              # 전역 스타일
│
├── locales/               # 다국어 리소스
│   ├── ko.json            # 한국어 리소스
│   └── en.json            # 영어 리소스
│
├── styles/                # 스타일 파일
│   ├── app.js             # 앱 스타일
│   └── common.js          # 공통 스타일
│
├── components/            # 재사용 컴포넌트
│   └── button/            # (예시) 버튼 컴포넌트
│
├── app/                   # 앱 주요 화면/기능
│   └── home/              # 홈 화면 관련
│
├── services/              # 서비스/비즈니스 로직
│   ├── apis/              # API 관련
│   ├── constants/         # 상수
│   └── types/             # 타입 정의
│
├── assets/                # 정적 리소스(이미지, 폰트 등)
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
├── node_modules/          # 의존성 모듈(자동 생성)
└── .expo/                 # Expo 관련 설정(자동 생성)
```

---

## 주요 명령어 및 실행 방법

### 1. 앱 실행

- **iOS 시뮬레이터에서 실행**
  ```sh
  yarn ios
  ```
- **Android 에뮬레이터에서 실행**
  ```sh
  yarn android
  ```
- **웹에서 실행**
  ```sh
  yarn web
  ```
- **Expo 개발 서버 실행(모든 플랫폼 공통)**
  ```sh
  yarn start
  ```

### 2. 커밋 메시지 작성(Commitizen)

- **커밋 메시지 템플릿 도우미 실행**
  ```sh
  yarn cz
  ```

### 3. 의존성 설치

- **필요 패키지 설치**
  ```sh
  yarn install
  ```

### 4. 빌드(프로덕션)

- **iOS 빌드**
  ```sh
  expo build:ios
  ```
- **Android 빌드**
  ```sh
  expo build:android
  ```

---

## 환경설정 및 요구사항

- Node.js 18 이상 권장
- Yarn 1.x 이상 권장
- Expo CLI (`npm install -g expo-cli`)
- iOS: Xcode, Android: Android Studio 필요

---

## 다국어(i18n) 시스템

- `locales/ko.json`, `locales/en.json` 등에서 모든 UI 텍스트를 관리합니다.
- 언어 토글 버튼으로 실시간 전환 가능
- 새로운 언어 추가 시 `locales/xx.json` 파일만 추가하면 됩니다.

---

## 주요 의존성

- react: 19.x
- react-native: 0.79.x
- expo: 53.x
- i18next, react-i18next: 다국어 지원
- formik, yup: 폼 및 유효성 검사
- @react-navigation/native: 네비게이션
- 기타: 자세한 내용은 package.json 참고

---

## 자주 묻는 질문(FAQ)

- **iOS/Android 실행이 안 돼요!**
  - 에뮬레이터가 켜져 있는지 확인하세요.
  - Expo Go 앱을 사용해 QR코드로도 테스트할 수 있습니다.
- **다국어가 적용되지 않아요!**
  - App을 재시작하거나, 언어 리소스 파일이 올바른지 확인하세요.
- **의존성 오류/빌드 오류가 발생해요!**
  - 아래 명령어로 캐시와 node_modules를 정리 후 재설치하세요.
    ```sh
    rm -rf node_modules yarn.lock
    yarn install
    npx expo start -c
    ```
- **Invalid hook call 에러**
  - useTranslation 등 훅은 반드시 함수형 컴포넌트 내부에서만 사용해야 합니다.
  - react가 중복 설치되지 않았는지 `yarn list react`로 확인하세요.

---

## 기여 방법

1. 이슈/기능 제안은 GitHub Issue로 등록
2. PR 전 반드시 `yarn lint`로 코드 스타일 체크
3. 커밋 메시지는 `yarn cz`로 작성
4. 리뷰 후 머지

---

## 기타 참고 사항

- Expo 관련 공식 문서: https://docs.expo.dev/
- React Native 공식 문서: https://reactnative.dev/
- 다국어(i18n) 공식 문서: https://react.i18next.com/

---