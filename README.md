# Keauty React Native App

## 프로젝트 구조

```
keauty-app/
├── app/                # 모든 화면 및 레이아웃
│   └── home/
│       ├── index.tsx
│       └── styles.ts
├── components/         # 재사용 가능한 컴포넌트
│   └── button/
│       ├── index.tsx
│       ├── styles.ts
│       └── types.ts
├── services/           # API, 상수, 타입 등
│   ├── apis/
│   │   ├── axios-client.ts
│   │   └── index.ts
│   ├── constants/
│   │   └── index.ts
│   └── types/
│       ├── api-types.ts
│       └── form-types.ts
├── .eslintrc.js        # ESLint 설정
├── .prettierrc         # Prettier 설정
└── ...
```

## 주요 명령어

- 앱 실행: `yarn ios` 또는 `yarn android` 또는 `yarn web`
- 코드 린트: `yarn eslint .`
- 코드 포맷: `yarn prettier --write .`

## 개발 규칙
- 함수형 컴포넌트, 타입스크립트, 모듈화, 스타일 분리 등 [keauty 규칙](./)을 따릅니다. 