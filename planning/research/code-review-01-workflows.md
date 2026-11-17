# 코드 리뷰 01 재구성

원문 재확인: 2026-11-17

## 방향

개발자들이 AI 시대의 코드 작업 방식을 고민하며 다른 사람의 실제 과정을 살펴본다. 정답·교훈·토론 질문을 강제하지 않는다. 제목은 `AI 코딩과 코드 리뷰`, 목차와 기존 URL은 `코드 리뷰 01`로 유지한다.

기존 숫자·정책 대비 중심 구성은 교체했다. 개인 작업 → 다른 개인의 경험 → 팀의 리뷰 규칙 → 동료 간 맥락 전달 순서로, 각 사례의 배경과 과정을 읽을 수 있게 한다.

## 사례와 근거

1. **Ben Stolovitz** — https://ben.stolovitz.com/posts/how-use-ai-oct-2026/ (2026-10)
   - Coding 절의 병렬 worktree, draft PR, 직접 테스트, 아키텍처 중심 검토와 반복 문제의 규칙화를 사용한다.
   - 실제 RNNoise 작업 화면과 연결 커밋: https://github.com/citelao/mumbo/commit/a92fd3117bde8cf0fa8e323aaa64093eb4466396
   - 별도로 연결된 AI 리뷰: https://github.com/mumble-voip/mumble/pull/7136 (리뷰 2026-03-22). Windows 음소거 알림과 상태 검증 순서 지적을 요약한다. RNNoise 작업과 같은 PR인 것처럼 섞지 않는다. 최종 해결 여부를 주장하지 않는다.
   - 원문 공개 화면은 개인의 작업 자료다. 도식은 원문 설명의 재구성이며 실행 중인 에이전트나 측정 대시보드가 아니다.
2. **bustikiller** — https://blog.bustikiller.com/2026/09/25/one-month-without-ai.html (2026-09-25)
   - Losing control / Regaining control 절. Jira·ACLI·worktree 병렬 구현과 문맥 전환, 동료의 테스트 지적, 이후 사용 중단을 요약한다.
   - `5분 → 이틀`은 구현과 검토 착수·완료까지의 개인 경험이다. 순수 검토 시간이나 일반적 생산성 수치로 쓰지 않는다.
   - 관련 코드와 diff는 원문에 없으므로 만들어 넣지 않는다. AI에 대한 저자의 일반화·추측은 소개하지 않는다.
3. **OpenAI Codex 팀** — https://developers.openai.com/blog/custom-code-review-rules-for-codex (2026-07-20)
   - 실제 규칙 추가: https://github.com/openai/codex/pull/29086 (2026-06-19 병합).
   - 글의 `completed → done`은 설명용 가상 변경이다. 예상 리뷰 코멘트도 실제 실행 결과가 아니다. 두 요소에 모두 설명용임을 명시한다.
   - AGENTS.md 규칙은 한국어 요약으로 표시한다. 자체 평가 수치는 이번 화면에 넣지 않는다.
4. **Zed Delta** — https://zed.dev/blog/delta-public-beta (2026-09-16)
   - 원래 대화·worktree, review subthread의 별도 사본, 검토자의 수정과 원래 thread 반영, land 과정을 사용한다.
   - PR 중단 대상은 Delta 자체 저장소다. Zed 편집기 저장소 전체로 확대하지 않는다.
   - 원문 HTML에서 직접 확인한 시연: https://images.zed.dev/blog/delta-public-beta/review-quick.mp4
   - 영상은 원본을 사용자 재생으로 불러오며 자동 재생하지 않는다. 연결 실패 시 원문과 원본 영상 링크로 접근할 수 있다.

## 화면

- 기존 목차·색상 모드·회차 URL을 유지한다. `app.js`에서 이 회차의 확장 렌더러 `workflows.js`로 분기한다.
- 배경 설명은 항상 보인다. 단계 버튼으로 도식 강조와 상세 설명을 함께 바꾼다.
- 원문 공개 화면 확대, 실제 공식 시연 재생, 전체 과정 펼치기, 단계별 키보드 탐색을 제공한다.
- 자동 진행·스크롤 가로채기·강제 결론은 없다. 동작 줄이기 설정에서는 전환 애니메이션을 끈다.
- 2주차 업무 자동화의 기존 렌더러와 placeholder는 유지한다.

## 이전 자료

기존 `AI 리뷰 채택률`, `사람 리뷰 선택/필수`, `4,000줄 → 수백 줄` 화면은 이번 회차에서 제외했다. 사용 이력은 material-log에 남겨 중복 조사와 재사용 판단에 참고한다.

## 검증

- Chrome 실제 브라우저에서 1440px 데스크톱과 390px 모바일 화면을 확인했다. 밝은 테마도 캡처로 확인하고 코드 색 대비를 보완했다.
- 네 사례의 모든 단계, 이전·다음 버튼, 키보드 방향키·Home, 전체 과정 펼치기, 이미지 확대와 Escape 닫기, 테마 저장, 동작 줄이기를 확인했다.
- 모바일 문서 가로 넘침과 하단 내비게이션 위치를 확인했다. 코드 diff는 자체 영역에서 가로 스크롤한다.
- 목차, 기존 URL 리다이렉트, 2주차 세 섹션과 placeholder를 회귀 확인했다. 페이지 스크립트 오류와 로컬 파일 404가 없었다.
- HTML 상대 경로, 공개 자료의 내부 정보 경계, `git diff --check`를 확인했다. 공식 영상은 원문 연결과 원본 경로를 확인했으며 영상 전체 재생 검증은 하지 않았다.
