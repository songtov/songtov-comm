# 배포

Vercel 프로젝트 `songtov-app/songtov-comm`이 GitHub 저장소와 연결되어 있어서, push만 하면 Vercel이 빌드하고 배포한다.

| 하는 일 | 결과 | 주소 |
| --- | --- | --- |
| 브랜치 push / PR | 미리보기(Preview) 배포 | PR에 Vercel 봇이 남긴 댓글의 Preview 링크 |
| `main`에 머지 | 프로덕션(Production) 배포 | https://songtov-comm.vercel.app |

## 흐름

1. 브랜치를 만들어 작업하고 push
2. PR 생성 → Vercel 미리보기 URL에서 확인
3. 머지 → 수십 초 뒤 프로덕션 반영

`main`에 직접 push하지 않는다.

## 확인 방법

```bash
vercel ls                # 최근 배포 목록과 상태
vercel inspect <URL>     # 배포 상세
vercel logs <URL>        # 런타임 로그 (Hobby는 1시간 보관)
```

대시보드: https://vercel.com/songtov-app/songtov-comm

## 알아둘 점

- 미리보기 배포는 Vercel Authentication으로 보호된다. Vercel에 로그인한 상태에서만 열린다. 로그인하지 않은 상태로 열면 Vercel 로그인 페이지로 리다이렉트된다(HTTP 302).
- `vercel link`로 프로젝트를 처음 만들 때 로컬 파일이 바로 프로덕션으로 배포되었다. 이후 배포는 모두 Git push로 한다.
- 비밀값은 Vercel 환경변수(`vercel env add`)에만 넣고, 로컬은 `vercel env pull`로 받은 `.env.local`을 쓴다.

## 롤백

대시보드의 Deployments에서 이전 프로덕션 배포를 골라 Promote하거나, `vercel rollback`을 쓴다.
