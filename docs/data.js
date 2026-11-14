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
      title: "코드를 만드는 속도가\n이해하는 속도를 앞설 때",
      intro:
        "AI는 더 많은 코드를 더 빠르게 만든다. 실제 팀에서는 코드 작성뿐 아니라 리뷰, CI, 소스 관리까지 다시 설계하기 시작했다. 서로 다른 세 장면을 한 화면씩 본다.",
      cases: [
        {
          id: "volume",
          eyebrow: "CASE 01 · 생성량",
          title: "하루 2,500개에서 30,000개로",
          summary:
            "Anthropic은 2026년 5월 하루 약 2,500건이던 병합 변경이 9월 30,000건 이상으로 늘었다고 공개했다. 코딩보다 기존 Git, 빌드, CI가 먼저 병목이 되었고 결국 사내 버전 관리 시스템까지 새로 만들었다.",
          caveat: "Anthropic의 자체 사례이며 일반적인 개발 조직보다 AI 사용량이 매우 높다.",
          visual: {
            type: "growth",
            startLabel: "MAY",
            startValue: "2,500",
            endLabel: "SEP",
            endValue: "30,000+",
            ratio: "12×+",
            caption: "merged changes / day"
          },
          sources: [
            {
              label: "Redesigning source control at Anthropic",
              publisher: "Anthropic Engineering",
              date: "2026-10-13",
              url: "https://www.anthropic.com/research/redesigning-source-control"
            }
          ]
        },
        {
          id: "productivity",
          eyebrow: "CASE 02 · 생산성",
          title: "AI를 쓰면 정말 더 빨라질까",
          summary:
            "기업 개발자 4,867명을 다룬 실험은 완료 작업 수가 약 26% 증가한 것으로 추정했다. 반면 익숙한 대형 오픈소스에서 일한 숙련 개발자 16명의 2025년 실험에서는 작업 시간이 19% 늘었다. 도구의 효과는 작업과 환경에 따라 크게 달라진다.",
          caveat:
            "서로 다른 연구 설계와 시기의 결과다. METR은 2026년 후속 실험에서 최근 도구의 향상 가능성을 봤지만 선택 편향 때문에 정확한 효과를 추정하지 못했다고 밝혔다.",
          visual: {
            type: "split",
            left: { label: "기업 현장 실험", value: "+26%", note: "완료 작업 수", tone: "positive" },
            right: { label: "숙련 OSS 실험", value: "−19%", note: "작업 속도", tone: "negative" }
          },
          sources: [
            {
              label: "The Effects of Generative AI on High-Skilled Work",
              publisher: "Cui et al.",
              date: "2025-06",
              url: "https://www.mertdemirer.com/Papers/Demirer_AI_productivity.pdf"
            },
            {
              label: "Early-2025 AI and experienced OSS developers",
              publisher: "METR",
              date: "2025-07-10",
              url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
            },
            {
              label: "Productivity experiment design update",
              publisher: "METR",
              date: "2026-02-24",
              url: "https://metr.org/blog/2026-02-24-uplift-update/"
            }
          ]
        },
        {
          id: "review",
          eyebrow: "CASE 03 · 검증",
          title: "AI가 만들고, AI가 리뷰하고, 사람이 승인한다",
          summary:
            "Anthropic은 코드 생산량 증가로 리뷰가 병목이 되자 거의 모든 PR에 다중 에이전트 리뷰를 적용했다. 실질적인 리뷰 코멘트가 달린 PR 비율은 16%에서 54%로 늘었다고 한다. 그래도 최종 승인은 사람의 결정으로 남겨두었다.",
          caveat:
            "리뷰 성능 수치는 제품 공급업체의 내부 측정이다. 독립적인 Meta 연구에서는 AI 코드가 포함된 변경의 리뷰 시간이 짧았지만, AI가 덜 핵심적인 코드에 쓰이는 경향 때문에 단순 인과로 볼 수 없다고 지적했다.",
          visual: {
            type: "flow",
            steps: [
              { label: "AI", detail: "코드 생성", accent: true },
              { label: "AI 팀", detail: "병렬 검토" },
              { label: "사람", detail: "승인 판단", accent: true }
            ],
            stat: { before: "16%", after: "54%", label: "substantive review comments" }
          },
          sources: [
            {
              label: "Bringing Code Review to Claude Code",
              publisher: "Anthropic",
              date: "2026-03-09",
              url: "https://claude.com/resources/articles/code-review"
            },
            {
              label: "AI-assisted code quality and review time at scale",
              publisher: "ESEM 2026",
              date: "2026-10-05",
              url: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.93"
            }
          ]
        }
      ]
    }
  ]
};
