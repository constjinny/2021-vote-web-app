# react-vote-web-app

## 🔗 실행 방법

### 개발 서버

```
`npm install` or `yarn`
```

[http://localhost:3000/] 접속

### Heroku

투표 목록 (/)

[https://constjinny.github.io/2021-vote-web-app/list]

투표 생성 (/create)

[https://constjinny.github.io/2021-vote-web-app/create]

투표 수정 (/modify/:vote_id)

[https://constjinny.github.io/2021-vote-web-app/modify/b830191fdi]

## 개발 환경

### 구조

```
/api
/assets
  - css
  - images
/components
  - button
  - input
  - profile
  - screenOut
  - tag
/core
/data
/feature
  - layout
  - voteList
  - voteWrite
/router
/utils
```

### 패키지

- react, reduxjs/toolkit
- typescript
- emotion.js
- lodash, dayjs
- jest
- prettier

## 구현 내용

- 투표 참여
- 투표 결과 확인
- 투표 생성/수정/삭제
- 임시 API 구성 (session storage 활용)

### 투표 목록

- 투표 목록 확인 (제목, 생성자, 기간, 진행 중 여부)
- 투표 클릭시 투표의 상세 내용 or 결과 노출
- 진행 중 투표 참여
- 투표 삭제

### 투표 작성 (신규 or 수정)

- 신규 투표 생성
- 기존 투표 수정
