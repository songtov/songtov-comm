# 데이터베이스

- Neon Postgres (무료 플랜), 리소스 이름 `songtov-comm-db`, 리전 `iad1`
- Vercel Marketplace로 설치. 연결 정보는 Vercel 환경변수에 자동으로 들어감
- ORM: Drizzle (`drizzle-orm`, `drizzle-kit`)

## 파일

| 파일 | 역할 |
| --- | --- |
| `src/db/schema.ts` | 테이블 정의 |
| `src/db/index.ts` | `getDb()`: 앱에서 쓰는 DB 클라이언트 (`DATABASE_URL`, 풀링 연결) |
| `drizzle.config.ts` | drizzle-kit 설정 (`DATABASE_URL_UNPOOLED`, 직접 연결) |
| `drizzle/` | 생성된 마이그레이션 SQL. 커밋한다 |

## 스키마를 바꿀 때

```bash
# 1. src/db/schema.ts 수정
# 2. 마이그레이션 SQL 생성 → drizzle/ 에 파일이 생김. 내용 확인 후 커밋
npm run db:generate
# 3. DB에 적용 (.env.local의 연결 정보 사용)
npm run db:migrate
```

`drizzle-kit`은 `.env.local`을 자동으로 읽지 않는다. 그래서 `db:migrate`는 `dotenv -e .env.local`로 감싸 두었다.
연결 정보가 없으면 먼저 `vercel env pull`.

## 주의: DB가 하나뿐이다

지금은 Production, Preview, Development가 **같은 DB**를 쓴다.

- 로컬에서 `db:migrate`를 실행하면 프로덕션 DB에 바로 적용된다.
- 미리보기 배포에서 글을 쓰면 프로덕션 데이터에 섞인다.
- 그래서 마이그레이션은 기존 코드가 깨지지 않는 방향(컬럼·테이블 추가)으로만 한다. 삭제나 이름 변경이 필요하면 단계를 나눈다.
- 나중에 개선할 점: Neon 브랜치로 미리보기 전용 DB를 분리하기.

## 연결 확인

```bash
curl http://localhost:3000/api/health   # {"db":"ok","users":0}
```
