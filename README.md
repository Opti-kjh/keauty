# Keauty

## 소개

Keauty는 K-뷰티 랭킹, 조합 추천, 프로모션 등 다양한 기능을 제공하는 React Native 기반의 모바일 앱입니다. Expo를 사용하여 iOS, Android, Web에서 모두 실행할 수 있습니다.

---

## 폴더 구조

```
keauty-app/
├── App.tsx                # 메인 앱 엔트리
├── i18n.ts                # i18n 다국어 설정
├── index.ts               # 앱 진입점
├── app.json               # Expo 설정
├── package.json           # 의존성 및 스크립트
├── tsconfig.json          # 타입스크립트 설정
├── locales/               # 다국어 리소스 (ko.json, en.json, fr.json 등)
├── app/                   # 주요 화면/기능 (home, search, promotion, message, my 등)
├── components/            # 재사용 컴포넌트
├── services/              # 서비스/비즈니스 로직
├── assets/                # 정적 리소스(이미지, 폰트 등)
└── ...
```

---

## 설치 및 실행 방법

### 1. 의존성 설치

```sh
yarn install
```

### 2. 앱 실행

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

### 3. 커밋 메시지 작성(Commitizen)

```sh
yarn cz
```

---

## 주요 기능 및 기술 스택

- **React Native 0.79.x**: 크로스플랫폼 모바일 앱 개발
- **Expo 53.x**: 빠른 개발 및 배포 지원
- **i18next, react-i18next**: 다국어(i18n) 지원
- **@react-navigation/native**: 화면 간 네비게이션
- **formik, yup**: 폼 관리 및 유효성 검사
- **axios**: API 통신
- **기타**: 자세한 내용은 `keauty-app/package.json` 참고

---

## 다국어(i18n) 시스템

- 모든 UI 텍스트는 `keauty-app/locales/ko.json`, `en.json`, `fr.json` 등에서 관리합니다.
- 언어 전환은 실시간으로 가능합니다.
- 새로운 언어 추가 시 `locales/xx.json` 파일만 추가하면 됩니다.

---

## 자주 묻는 질문(FAQ)

- **iOS/Android 실행이 안 돼요!**
  - 에뮬레이터가 켜져 있는지 확인하세요.
  - Expo Go 앱을 사용해 QR코드로도 테스트할 수 있습니다.
- **다국어가 적용되지 않아요!**
  - 앱을 재시작하거나, 언어 리소스 파일이 올바른지 확인하세요.
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

## 참고 문서

- [Expo 공식 문서](https://docs.expo.dev/)
- [React Native 공식 문서](https://reactnative.dev/)
- [i18next 공식 문서](https://react.i18next.com/)