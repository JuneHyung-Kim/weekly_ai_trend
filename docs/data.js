window.MEETING_DATA = {
  currentWeek: "ai-code-review-01",
  topics: [
    {
      id: "ai-development-methodology",
      number: "01",
      title: "AI 시대의 개발 방법론",
      shortTitle: "개발 방법론",
      description: "코드가 만들어지는 방식이 달라질 때 팀의 작업 방식과 책임은 어떻게 달라지는지 살펴봅니다.",
      subtopics: [
        {
          id: "code-review",
          title: "코드 리뷰",
          description: "AI가 코드 생산 속도를 높인 뒤 리뷰, 검증, 유지보수에서 벌어지는 변화를 봅니다.",
          weeks: ["ai-code-review-01"]
        }
      ]
    },
    {
      id: "ai-security",
      number: "02",
      title: "AI 시대의 보안",
      shortTitle: "보안",
      description: "AI가 만든 새로운 공격과 방어 사례, 개발 현장의 보안 판단을 다룹니다.",
      subtopics: []
    },
    {
      id: "model-trends",
      number: "03",
      title: "AI 최신 모델 트렌드",
      shortTitle: "모델 트렌드",
      description: "새 모델의 숫자 경쟁보다 실제로 달라진 능력과 사용 경험을 비교합니다.",
      subtopics: []
    },
    {
      id: "agent-adoption",
      number: "04",
      title: "최신 AI Agent 활용 동향",
      shortTitle: "AI Agent 활용",
      description: "개인 도구부터 조직의 업무 흐름까지, 에이전트가 실제로 쓰이는 장면을 봅니다.",
      subtopics: []
    }
  ],
  weeks: [
    {
      id: "ai-code-review-01",
      ordinal: "W01",
      topicId: "ai-development-methodology",
      subtopicId: "code-review",
      dateLabel: "2026 · 11",
      topic: "AI 시대의 개발 방법론",
      subtopic: "코드 리뷰",
      title: "After the\nPull Request",
      intro:
        "PR을 끈 팀. 사람 리뷰를 생략한 팀. 사람의 책임을 강제한 프로젝트.",
      cases: [
        {
          id: "no-prs",
          eyebrow: "ZED · DELTA",
          title: "Pull Requests: OFF",
          facts: [
            "Zed는 Delta 저장소의 Pull Request 기능을 껐다.",
            "리뷰어는 diff와 함께 원래 에이전트 대화와 worktree를 넘겨받는다.",
            "33명이 이 방식으로 main에 570개 변경을 반영했다."
          ],
          caveat: "제품 발표 · 자사 저장소 사용 사례",
          visual: {
            type: "source-image",
            src: "../../assets/zed-no-prs.webp",
            alt: "Zed Delta 저장소에서 Pull Request 기능을 끈 화면",
            caption: "ZED INDUSTRIES · DELTA REPOSITORY"
          },
          sources: [
            {
              label: "Replace PRs with Delta — Now in Public Beta",
              publisher: "Zed Industries",
              date: "2026-09-16",
              url: "https://zed.dev/blog/delta-public-beta"
            }
          ]
        },
        {
          id: "two-policies",
          eyebrow: "OPENAI / PYTEST / LINUX",
          title: "사람 리뷰: 선택 / 필수",
          facts: [
            "OpenAI의 내부 실험은 사람이 직접 작성한 코드 0줄로 제품을 만들었다.",
            "pytest는 사람이 이해하지 못한 순수 에이전트 PR을 받지 않는다.",
            "Linux의 Signed-off-by는 사람만 추가할 수 있다."
          ],
          caveat: "내부 제품 실험과 공개 오픈소스 정책의 대비",
          visual: {
            type: "policy-split",
            left: {
              label: "OPENAI",
              value: "0",
              unit: "handwritten lines",
              lines: ["agent self-review", "human review may be omitted"]
            },
            right: {
              label: "PYTEST / LINUX",
              value: "HUMAN",
              unit: "must understand & own",
              lines: ["purely agentic PRs closed", "Signed-off-by: humans only"]
            }
          },
          sources: [
            {
              label: "Harness engineering: leveraging Codex in an agent-first world",
              publisher: "OpenAI",
              date: "2026-02-11",
              url: "https://openai.com/index/harness-engineering/"
            },
            {
              label: "AI/LLM-Assisted Contributions Policy",
              publisher: "pytest",
              date: "2026",
              url: "https://github.com/pytest-dev/pytest/blob/main/CONTRIBUTING.rst"
            },
            {
              label: "AI Coding Assistants",
              publisher: "Linux kernel",
              date: "2026",
              url: "https://www.kernel.org/dochtml/latest/process/coding-assistants.html"
            }
          ]
        },
        {
          id: "different-reviews",
          eyebrow: "278,790 REVIEW CONVERSATIONS",
          title: "AI는 수정했고, 사람은 물었다",
          facts: [
            "AI 리뷰의 95% 이상은 코드 개선과 결함 탐지에 집중했다.",
            "사람은 구현 의도, 테스트, 저장소 관례를 더 자주 다뤘다.",
            "AI가 시작한 리뷰의 85% 이상은 첫 코멘트 뒤 대화가 없었다."
          ],
          caveat: "300개 공개 프로젝트 · 관찰 연구 · arXiv preprint",
          visual: {
            type: "review-roles",
            left: {
              label: "AI REVIEW",
              value: "16.6%",
              note: "suggestions adopted",
              words: ["DEFECT", "IMPROVEMENT", "PATCH"]
            },
            right: {
              label: "HUMAN REVIEW",
              value: "56.5%",
              note: "suggestions adopted",
              words: ["WHY?", "TEST?", "CONTEXT?"]
            }
          },
          sources: [
            {
              label: "Human-AI Synergy in Agentic Code Review",
              publisher: "Zhong et al.",
              date: "2026-10-30",
              url: "https://arxiv.org/abs/2603.15911"
            }
          ]
        },
        {
          id: "rewrite",
          eyebrow: "ONE ENGINEER · 5–6 AGENTS",
          title: "4,000줄을 수백 줄로",
          facts: [
            "Ben Stolovitz는 평소 5~6개의 코딩 에이전트를 병렬로 사용한다.",
            "에이전트는 코드, 테스트, PR 작성과 리뷰까지 수행한다.",
            "그가 올해 가장 성공적이었다고 꼽은 작업은 AI 코드 약 4,000줄을 사람이 쓴 수백 줄로 교체한 일이었다."
          ],
          caveat: "Salesforce AI Research 엔지니어의 개인 작업 기록",
          visual: {
            type: "rewrite",
            before: { label: "VIBE CODE", value: "~4,000", unit: "lines" },
            after: { label: "HANDWRITTEN", value: "100s", unit: "lines" }
          },
          sources: [
            {
              label: "How I use AI (Oct 2026)",
              publisher: "Ben Stolovitz",
              date: "2026-10",
              url: "https://ben.stolovitz.com/posts/how-use-ai-oct-2026/"
            }
          ]
        }
      ]
    }
  ]
};
