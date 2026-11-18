# AGENTS.md

songtov-comm: Google 로그인 + 커뮤니티 블로그(누구나 읽기, 로그인 사용자가 글·댓글 작성).
개인 학습 프로젝트. 운영 비용 0원이 최우선.

## Stack

- Vercel Hobby (개인·비상업 용도만)
- Next.js App Router, TypeScript
- Neon Postgres (Vercel Marketplace) + Drizzle ORM
- Google OAuth만 지원

## 문서는 어디에 두나

| 무엇 | 어디 |
| --- | --- |
| 기획, 결정 사항, 진행 계획(Phase), 검토 기록 | **Notion**: [songtov-comm: Vercel 커뮤니티 블로그 기획](https://app.notion.com/p/41c97c0bb4b9818fbbedf96f879480b3) |
| 실행 방법(셋업, DB, OAuth, 배포) | 이 레포의 `docs/` |
| 에이전트 작업 규칙 | 이 파일 (`AGENTS.md`) |

- 작업 전에 Notion 페이지의 **결정 사항**과 **진행 계획**을 먼저 읽는다.
- 새 결정이 생기면 Notion의 결정 사항과 남은 결정을 갱신한다.
- Phase를 끝내면 Notion의 해당 Phase 완료 기준에 체크하고, 실행 방법은 `docs/`에 적는다.
- Notion과 코드가 다르면 사용자에게 알리고, 어느 쪽을 맞출지 묻는다.

## 작업 규칙

- 비밀값(`DATABASE_URL`, OAuth client secret 등)은 절대 커밋하지 않는다. public 저장소다. Vercel 환경변수와 `.env.local`에만 둔다.
- `main`에 직접 push하지 않는다. 브랜치 → PR → Vercel 미리보기 확인 → 머지.
- 변경 후 lint, 타입체크, 테스트를 통과시킨 뒤에 완료라고 말한다.
