# 로컬 개발 환경

## 준비물

- Node.js 20 이상
- Vercel CLI: `npm i -g vercel@latest`, 로그인은 `vercel login`
- GitHub CLI(선택): `gh auth login`

## 처음 받았을 때

```bash
git clone git@github.com:songtov/songtov-comm.git
cd songtov-comm
npm install
vercel link          # Vercel 프로젝트 songtov-app/songtov-comm 선택
vercel env pull      # 환경변수를 .env.local로 받음 (커밋 금지)
```

## 실행

```bash
npm run dev          # http://localhost:3000
```

## 완료 전 확인

```bash
npm run lint
npm run build
```
