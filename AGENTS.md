<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# songtov-comm

Google 로그인 + 커뮤니티 블로그(누구나 읽기, 로그인 사용자가 글·댓글 작성).
개인 학습 프로젝트. 운영 비용 0원이 최우선.

## Stack

- Vercel Hobby (개인·비상업 용도만)
- Next.js App Router, TypeScript
- Neon Postgres (Vercel Marketplace) + Drizzle ORM
- Google OAuth만 지원

## 문서는 어디에 두나

| 무엇 | 어디 |
| --- | --- |
| 기획, 결정 사항, 진행 계획(Phase) | 저장소 밖 개인 문서 (위치는 `CLAUDE.local.md`, gitignore됨) |
| 실행 방법(셋업, DB, OAuth, 배포) | 이 레포의 `docs/` |
| 에이전트 작업 규칙 | 이 파일 (`AGENTS.md`) |

## 작업 규칙

- 비밀값(`DATABASE_URL`, OAuth client secret 등)은 절대 커밋하지 않는다. public 저장소다. Vercel 환경변수와 `.env.local`에만 둔다.
- `main`에 직접 push하지 않는다. 브랜치 → PR → Vercel 미리보기 확인 → 머지.
- 변경 후 `npm run lint`와 `npm run build`를 통과시킨 뒤에 완료라고 말한다.
