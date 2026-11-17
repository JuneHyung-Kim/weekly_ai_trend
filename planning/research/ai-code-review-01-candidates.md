# AI Code Review 01 — candidate scenes

조사일: 2026-11-15
상태: 초기 조사·편집 이력. 현재 회차 구성은 `code-review-01-workflows.md`를 따른다.

## 2026-11-15 편집 결과

**메인 장면으로 남김**

1. Zed가 자기 저장소에서 Pull Request를 끈 사례
2. OpenAI의 사람 작성 코드 0줄 실험과 pytest/Linux의 인간 책임 정책
3. AI와 사람이 실제 리뷰에서 다룬 내용의 차이
4. 에이전트 5~6개를 쓰는 개발자가 AI 코드 4,000줄을 수백 줄로 다시 쓴 사례

**메인 흐름에서 제외**

- 코드 생산량 증가, 리뷰 병목, 커밋과 릴리스 증가율 차이: 이미 알려진 배경. 필요하면 한 문장으로만 사용.
- AI 리뷰 사용량과 일반 생산성 비교: 숫자는 크지만 이번 흐름에서 새로운 장면을 만들지 못함.
- No AI Slop 선언문: 최근성은 높지만 화면 전체의 결론처럼 보일 수 있어 링크 후보로만 유지.
- 소스 관리 인프라, 리뷰 benchmark, 숙련도 실험: 각각 별도 주차로 확장할 수 있어 보류.

## 편집 기준

- 결론이나 교훈보다 실제로 벌어진 장면을 둔다.
- 헤딩만 읽어도 장면 사이의 긴장이 보이게 한다.
- 한 화면에는 사실 2~4개와 시각 자료 하나만 둔다.
- GeekNews는 발견 경로로 사용하고, 공개 화면의 출처는 원문을 우선한다.
- 공급업체 발표, 독립 연구, 개인 경험, 커뮤니티 정책을 구분한다.

## 우선순위가 높은 장면

### 1. 5분 만에 만든 코드, 리뷰에는 이틀

**헤딩 후보**
`5분 만에 만든 코드, 리뷰에는 이틀`

**화면**

```text
직접 작업       20분 ────────────────┐
AI 생성          5분 ─┐              │
사람의 검토           └──────── 2일 ─┘
```

**사실**

- 한 개발자가 여러 에이전트를 Git worktree에서 병렬 실행했다.
- 직접 20분이면 가능했던 작업을 에이전트가 약 5분에 만들었지만, 밀린 작업과 문맥 전환으로 검토에 이틀이 걸린 사례를 기록했다.
- 사용을 중단하게 된 계기는 동료가 발견한 테스트의 허점이었다. 테스트는 그럴듯했지만 실제 변경 동작을 검증하지 않았다.
- 한 달 동안 AI 사용을 중단한 개인 경험이며 조직 전체를 대표하는 측정은 아니다.

**시각 자료 후보**

- 생성과 검토의 시간축을 한 줄로 비교한 자체 그래픽
- 원문의 짧은 문장과 게시일이 보이는 페이지 캡처

**성격**: 개인 경험
**원문**: [One month without AI](https://blog.bustikiller.com/2026/09/25/one-month-without-ai.html), 2026-09-25
**발견**: [GeekNews 요약](https://news.hada.io/topic?id=34323)

---

### 2. 에이전트 6개, 그리고 4,000줄을 버린 작업

**헤딩 후보**
`에이전트 6개를 쓰면서, 가장 잘한 일은 4,000줄을 버린 것이었다`

**화면**

```text
AI code    ████████████████████  ~4,000 lines
rewrite    ██                    a few hundred
```

**사실**

- Salesforce AI Research의 연구 엔지니어 Ben Stolovitz는 평소 5~6개의 코딩 에이전트를 병렬로 사용한다고 썼다.
- 에이전트는 기능 구현, 테스트, PR 작성과 리뷰까지 수행한다.
- 그가 2026년에 가장 성공적이었다고 평가한 작업은 AI가 만든 약 4,000줄을 사람이 작성한 수백 줄로 교체한 일이었다.
- 에이전트가 만든 PR은 줄 단위보다 아키텍처와 큰 패턴을 중심으로 검토한다고 설명한다.

**시각 자료 후보**

- 원문에 포함된 다중 에이전트 작업 화면
- `~4,000 → a few hundred` 면적 비교 그래픽

**성격**: 숙련 개발자의 개인 작업 기록
**원문**: [How I use AI (Oct 2026)](https://ben.stolovitz.com/posts/how-use-ai-oct-2026/), 2026-10
**발견**: [GeekNews 요약](https://news.hada.io/topic?id=36586)

---

### 3. 커밋 +240%, 릴리스 +30%

**헤딩 후보**
`커밋은 240% 늘었고, 릴리스는 30% 늘었다`

**화면**

```text
COMMITS     +240%  ████████████████████████
PROJECTS     +80%  ████████
RELEASES     +30%  ███
TOTAL USAGE     0  ·
```

**사실**

- 50만 명 이상의 GitHub 개발자와 AI 사용 텔레메트리를 결합한 matched event study다.
- 자율 코딩 에이전트의 누적 효과는 커밋 +240%, 프로젝트 수 +80%, 릴리스 +30%로 추정됐다.
- 네 개 소프트웨어 마켓에서 새 앱은 늘었지만 전체 사용량 증가는 관찰되지 않았다.
- 관찰 연구인 NBER working paper다. 저자 두 명은 Microsoft의 유급 연구 컨설턴트임을 공개했다.

**시각 자료 후보**

- 네 단계가 급격히 작아지는 자체 막대 그래프
- 논문의 production hierarchy figure를 원문 링크와 함께 보조 자료로 사용

**성격**: 독립 학술 연구, 관찰 연구
**원문**: [Writing Code vs. Shipping Code](https://www.nber.org/papers/w35275), 2026-05, revised 2026-09

---

### 4. 사람은 의도를 묻고, AI는 수정안을 쓴다

**헤딩 후보**
`사람은 “왜?”를 물었고, AI는 수정안을 썼다`

**화면**

```text
AI REVIEW                         HUMAN REVIEW
defect / improvement  95%+        intent
suggestion adopted    16.6%       testing
                                      context
human suggestion adopted             56.5%
```

**사실**

- 300개 오픈소스 프로젝트의 코드 리뷰 대화 278,790건을 분석했다.
- AI 리뷰는 주로 결함과 코드 개선에 집중했다. 사람은 구현 의도, 테스트, 저장소 관례, 과거 결정을 더 자주 다뤘다.
- AI 수정안 채택률은 16.6%, 사람 수정안은 56.5%였다.
- AI가 시작한 리뷰 대화 중 85% 이상은 첫 코멘트 뒤 추가 응답 없이 끝났다.
- arXiv preprint이며 공개 프로젝트와 식별 가능한 봇 계정에 한정된다.

**시각 자료 후보**

- 인간과 AI의 리뷰 단어·행동을 양쪽에 배치한 자체 그래픽
- 논문 Figure/Table 중 conversation과 adoption 결과

**성격**: 독립 학술 연구, 관찰 연구, preprint
**원문**: [Human-AI Synergy in Agentic Code Review](https://arxiv.org/abs/2603.15911), 2026-03, revised 2026-10
**발견**: [GeekNews 요약](https://news.hada.io/topic?id=32449)

---

### 5. 더 빨리 끝난 리뷰, 더 좋아지지는 않은 리뷰

**헤딩 후보**
`더 빨리 끝난 리뷰, 더 좋아지지는 않은 리뷰`

**화면**

```text
HUMAN → LLM → AGENT
          review decision  faster in some groups
          review smells    did not improve
```

**사실**

- 207개 GitHub 프로젝트의 리뷰 완료 PR 102만 건을 분석했다.
- 에이전트가 먼저 보거나 여러 에이전트가 참여한 흐름은 일부 도입 유형에서 더 빠른 결정과 연관됐다.
- 리뷰 품질 대리 지표는 함께 개선되지 않았다.
- 사람만 참여한 리뷰보다 AI가 참여한 리뷰에서 같은 리뷰어 반복 배정과 큰 변경 세트가 더 자주 나타났다.
- 실제 장애나 결함률이 아니라 review smell을 품질 대리 지표로 사용한 관찰 연구다.

**시각 자료 후보**

- `Human → LLM → Agent` 세 시대 타임라인
- 논문의 AI adoption practice figure

**성격**: 독립 학술 연구, 관찰 연구, preprint
**원문**: [From Human-Centric to Agentic Code Review](https://arxiv.org/abs/2607.13196), 2026-07
**발견**: [GeekNews 요약](https://news.hada.io/topic?id=32454)

---

### 6. Pull Request를 끈 팀

**헤딩 후보**
`Zed는 자기 저장소에서 Pull Request를 껐다`

**화면**

- Zed가 공개한 “Pull Requests are seriously turned off” 실제 화면
- 기존 흐름과 Delta 흐름을 두 줄로 비교

```text
issue → agent conversation → diff → PR → reviewer reconstructs context

idea → agent thread ↔ teammate review → land
```

**사실**

- Zed는 Delta 자체 저장소에서 PR을 비활성화하고 Delta thread 안에서 개발과 리뷰를 진행한다고 밝혔다.
- 리뷰어는 원래 에이전트 대화와 worktree를 함께 보고 별도 review subthread에서 수정해볼 수 있다.
- 커밋은 빌드와 push/pull의 체크포인트로 남지만, 커밋 사이의 편집과 대화는 DeltaDB가 기록한다.
- 공개 베타 당시 33명이 PR 없이 main에 570개 변경을 반영했다고 발표했다.

**성격**: 공급업체 제품 발표, 자사 사용 사례
**원문**: [Replace PRs with Delta](https://zed.dev/blog/delta-public-beta), 2026-09-16

---

### 7. 같은 `git push`, 완전히 다른 Git

**헤딩 후보**
`같은 git push 뒤에서 Git을 다시 만들고 있다`

**화면**

```text
                 client      protocol      server      review
OpenAI Pando       same         same         new          same
Anthropic Scion     new          new          new          new
```

**사실**

- Anthropic은 일일 병합량이 약 2,500건에서 30,000건 이상으로 늘고 CI checkout이 하루 약 2,500만 회에 도달했다고 밝혔다.
- Anthropic은 클라이언트와 프로토콜, 서버, 코드 리뷰까지 자체 시스템으로 교체했다.
- OpenAI의 Pando는 기존 Git 클라이언트와 프로토콜을 유지하면서 저장소 서버를 다시 설계했다.
- 두 사례 모두 AI 에이전트의 병렬 작업이 직접적인 배경이지만, 일반적인 조직보다 훨씬 큰 부하를 다룬 공급업체 내부 사례다.

**시각 자료 후보**

- OpenAI Pando의 interactive architecture diagram
- Anthropic의 merged changes 그래프
- 교체한 층을 표시한 자체 비교표

**성격**: 공급업체 기술 발표
**원문**: [Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control), 2026-10-13
**원문**: [Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/), 2026-11-02
**발견/연결**: [GeekNews: AI 시대, git push 앞뒤에서 바뀌는 것들](https://news.hada.io/article/git-push-in-the-agent-era), 2026-11-12

---

### 8. 한 팀은 사람 리뷰를 생략하고, 다른 팀은 사람을 요구한다

**헤딩 후보**
`사람이 모든 코드를 읽지 않는 팀 / 사람이 설명할 수 없는 코드를 받지 않는 팀`

**화면**

```text
OPENAI INTERNAL EXPERIMENT          PYTEST / LINUX
0 manually written code            human must understand
agent self-review                   human must take responsibility
human review may be omitted         unattended PR may be closed
```

**사실**

- OpenAI는 사람이 직접 작성한 코드가 0줄인 내부 제품 실험을 공개했다. 코드, 테스트, CI, 문서와 관측 도구를 Codex가 작성했다고 한다.
- 이 방식에서는 에이전트 자체 검토와 자동 검증을 사용하며 모든 PR에 사람 리뷰를 요구하지 않는다.
- pytest는 사람이 이해하지 못한 순수 에이전트 기여를 받지 않으며, 무인 대량 제출을 제한된 리뷰 자원에 대한 부담으로 규정한다.
- Linux 커널에서는 AI가 `Signed-off-by`를 추가할 수 없고, 사람이 전체 변경을 검토하고 DCO와 기여 책임을 진다.

**시각 자료 후보**

- OpenAI harness의 agent-first development diagram
- pytest 정책과 Linux `Signed-off-by` 규칙의 원문 캡처를 좌우 배치

**성격**: 공급업체 내부 실험 + 공개 오픈소스 정책
**원문**: [OpenAI Harness engineering](https://openai.com/index/harness-engineering/), 2026-02-11
**원문**: [pytest AI/LLM-Assisted Contributions Policy](https://github.com/pytest-dev/pytest/blob/main/CONTRIBUTING.rst)
**원문**: [Linux AI Coding Assistants](https://www.kernel.org/dochtml/latest/process/coding-assistants.html)

---

### 9. 만드는 비용과 읽는 비용

**헤딩 후보**
`1,000줄을 만드는 비용은 0에 가까워지고, 읽는 비용은 그대로다`

**화면**

- No AI Slop 선언문의 다섯 문장을 포스터처럼 사용

```text
OUTCOMES       > OUTPUT
UNDERSTANDING  > SPEED
OWN THINKING   > FIRST DRAFT
BETTER WORK    > EASIER WORK
SYSTEM FIX     > OUTPUT PATCH
```

**사실**

- AIE Code Summit 2026 발표자와 참가자들이 2026년 11월 공개한 선언문이다.
- Slop을 “만드는 사람이 들인 노력보다 받는 사람이 이해하는 데 더 많은 노력을 요구하는 결과물”로 정의한다.
- AI 출력 자체보다 생성과 검토 비용의 비대칭, 책임 없이 넘겨지는 결과, 다음 에이전트가 다시 복제하는 누적을 문제로 둔다.
- 연구나 측정 자료가 아니라 개발자 커뮤니티의 선언문이다.

**시각 자료 후보**

- 원문 첫 화면 자체가 강한 포스터 형태
- 다섯 문장만 사용하는 자체 타이포그래피

**성격**: 최신 커뮤니티 선언
**원문**: [No AI Slop: A Manifesto](https://www.slopmanifesto.com/), 2026-11
**발견**: [GeekNews 토론](https://news.hada.io/topic?id=37128), 2026-11-14

---

### 10. 코드 리뷰 다섯 건 중 한 건에 Copilot

**헤딩 후보**
`GitHub 코드 리뷰 5건 중 1건에 Copilot이 들어왔다`

**화면**

```text
● AI review   > 1 / 5

71%  actionable feedback
29%  no comment
```

**사실**

- GitHub는 Copilot code review 사용량이 출시 후 약 10배 증가했고, GitHub 코드 리뷰 다섯 건 중 한 건 이상을 차지한다고 발표했다.
- 71%의 리뷰에는 actionable feedback을 남기고, 29%에는 아무 코멘트도 남기지 않는다고 밝혔다.
- 더 강한 reasoning model을 사용했을 때 긍정 피드백은 6% 늘고 latency는 16% 증가했다.
- GitHub가 정의하고 측정한 자사 서비스의 production signal이다.

**시각 자료 후보**

- GitHub가 공개한 실제 Copilot review comment
- `1/5`, `71/29`를 크게 둔 원형 그래픽

**성격**: 공급업체 운영 데이터
**원문**: [60 million Copilot code reviews and counting](https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/), 2026-03-05

---

### 11. 리뷰어에게 팀의 기억을 파일로 준다

**헤딩 후보**
`리뷰어의 기억이 AGENTS.md로 들어간다`

**화면**

- OpenAI 글의 실제 `rawResponseItem/completed` rename diff
- 규칙 없음/규칙 있음 결과 막대

```text
default review       58.3%
repository rules     98.0%
```

**사실**

- OpenAI는 호환성, 데이터 경계 등 저장소 고유의 리뷰 규칙을 `AGENTS.md`에 둘 수 있게 했다.
- 내부 eval에서 필요한 custom finding을 찾은 비율은 baseline 58.3%, rule-guided variant 98%였다.
- 테스트와 린터는 결정론적 검사를 맡고, 규칙 파일은 경험 많은 리뷰어가 반복해서 설명하던 저장소 맥락을 담는다.
- 공급업체가 자체 제품에 대해 수행한 평가이며 세부 eval corpus 전체가 독립 검증된 것은 아니다.

**시각 자료 후보**

- 원문의 한 줄 diff와 규칙 블록을 그대로 보여주는 코드 카드
- `58.3 → 98` 막대

**성격**: 공급업체 제품 발표와 내부 평가
**원문**: [Custom Code Review rules for Codex](https://developers.openai.com/blog/custom-code-review-rules-for-codex), 2026-07-20

---

### 12. 리뷰 품질을 재는 데 1억 개 PR이 필요했다

**헤딩 후보**
`AI 리뷰를 평가하려고 1억 개 PR의 분포부터 다시 봤다`

**화면**

```text
103.9M real PRs → 219 benchmark PRs / 19 languages
                   ↓
       human + frontier LLM + static analysis
                   ↓
 precision / recall / severity / category
```

**사실**

- GitHub는 AI 코드 리뷰 benchmark를 만들기 위해 1억 390만 개 PR의 언어, 저장소 크기, 변경 형태 분포를 분석했다.
- 실제 benchmark corpus는 공개 PR 219개, 19개 언어로 구성됐다.
- 정답 집합은 사람 리뷰어, frontier LLM, 정적 분석 결과를 결합해 만들고 severity와 category를 별도로 매겼다.
- 리뷰어가 많이 지적하는 것과 중요한 문제를 정확히 찾는 것을 분리하기 위해 precision과 recall을 함께 측정한다.
- GitHub가 자사 리뷰 에이전트 개발에 사용하는 benchmark다.

**시각 자료 후보**

- 원문에 있는 ReviewBench at a glance 카드
- `103.9M → 219` 축소 그래픽

**성격**: 공급업체 공개 benchmark
**원문**: [ReviewBench](https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/), 2026-10-05

---

### 13. 리뷰할 사람의 실력은 어디에서 만들어지는가

**헤딩 후보**
`AI로 끝낸 개발자는, 방금 만든 코드를 덜 이해했다`

**화면**

```text
same unfamiliar library task

AI assistance    mastery score  −17%
manual coding    baseline
```

**사실**

- 낯선 Python 라이브러리를 사용하는 개발자 52명을 대상으로 한 randomized controlled trial이다.
- AI 사용 그룹의 직후 퀴즈 점수는 직접 코딩한 그룹보다 17% 낮았다.
- 가장 큰 격차는 디버깅 문항에서 나타났다.
- AI를 사용한 모든 참가자가 낮은 점수를 받은 것은 아니며, 설명과 개념 질문을 활용한 참가자는 이해를 더 유지했다.
- 대부분 주니어이고 단기 이해도를 측정한 소규모 연구이며 Anthropic 연구다.

**시각 자료 후보**

- 실험의 quiz score 그래프
- `생성 → 리뷰 → 디버깅`으로 되돌아오는 고리

**성격**: 공급업체 연구, 소규모 RCT
**원문**: [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills), 2026-01-29

## 후보 조합

### 조합 A — 생성과 검토의 비대칭

1. `5분 만에 만든 코드, 리뷰에는 이틀`
2. `커밋은 240% 늘었고, 릴리스는 30% 늘었다`
3. `사람은 “왜?”를 물었고, AI는 수정안을 썼다`
4. `만드는 비용과 읽는 비용`

개인의 하루 → 산업 규모 데이터 → 리뷰 대화 → 최신 커뮤니티 반응 순서다.

### 조합 B — 리뷰 방식이 갈라지고 있다

1. `Zed는 자기 저장소에서 Pull Request를 껐다`
2. `한 팀은 사람 리뷰를 생략하고, 다른 팀은 사람을 요구한다`
3. `리뷰어의 기억이 AGENTS.md로 들어간다`
4. `리뷰 품질을 재는 데 1억 개 PR이 필요했다`

제품과 정책이 서로 다른 방향으로 움직이는 장면을 연속해서 둔다.

### 조합 C — 개발자의 실제 체감

1. `에이전트 6개, 그리고 4,000줄을 버린 작업`
2. `5분 만에 만든 코드, 리뷰에는 이틀`
3. `코드 리뷰 다섯 건 중 한 건에 Copilot`
4. `리뷰할 사람의 실력은 어디에서 만들어지는가`

개인 작업 방식과 플랫폼 규모의 변화를 함께 둔다.

## 1차 편집 판단

- 첫 화면 후보는 **1번**이 가장 강하다. 수치가 작고 구체적이며 개발자가 바로 자기 경험과 비교할 수 있다.
- 중심 데이터는 **3번**이 좋다. 생산량과 실제 출시 사이의 간격을 한 장에서 보여준다.
- 가장 대화가 많이 생길 대비는 **8번**이다. 서로 다른 조건에서 정반대의 운영 방식을 실제로 사용하고 있다.
- 이번 주에 나온 **9번**은 시의성이 좋고 포스터 자체가 시각 자료가 된다. 다만 선언문이 화면 전체의 결론처럼 보이지 않도록 마지막의 별도 장면으로 두는 편이 낫다.
- **10~13번**은 Code Review 02로 넘겨도 충분하다. AI 리뷰어의 성능, 저장소 규칙, 평가, 사람의 숙련을 한 주로 묶을 수 있다.
