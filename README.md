# 3D Balloon - Next.js + Three.js Portfolio Project

3D 그래픽과 인터랙티브 요소를 활용한 포트폴리오 프로젝트입니다.

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Development**: ESLint, Prettier

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/             # React 컴포넌트
│   ├── ui/                # 재사용 가능한 UI 컴포넌트
│   │   └── Button.tsx     # 버튼 컴포넌트
│   └── three/             # Three.js 관련 컴포넌트
│       └── ThreeScene.tsx # 3D 씬 컴포넌트
├── hooks/                  # 커스텀 React 훅
│   └── useAnimation.ts    # 애니메이션 관련 훅
├── types/                  # TypeScript 타입 정의
│   └── index.ts           # 공통 타입들
├── utils/                  # 유틸리티 함수
│   └── index.ts           # 헬퍼 함수들
└── constants/              # 상수 정의
    └── index.ts           # 애플리케이션 상수들
```

## 🎯 주요 기능

- **3D Scene**: 회전하는 큐브와 그림자 효과
- **Interactive Controls**: 마우스로 3D 씬 조작 가능
- **Responsive Design**: 모든 디바이스에서 최적화된 경험
- **Type Safety**: TypeScript로 타입 안전성 보장

## 🛠️ 개발 환경 설정

### Prerequisites
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev

# 프로덕션 빌드
npm run build
# 또는
yarn build
```

## 🧪 테스팅

```bash
# 테스트 실행
npm test

# 테스트 커버리지
npm run test:coverage
```

## 📝 커밋 컨벤션

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가/수정
- `chore:` 빌드 프로세스 또는 보조 도구 변경

## 🚀 배포

이 프로젝트는 Vercel을 통해 배포됩니다.

## 📄 라이선스

MIT License

## 👨‍💻 개발자

OhJungJin - [GitHub](https://github.com/OhJungJin)

---

프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요!
