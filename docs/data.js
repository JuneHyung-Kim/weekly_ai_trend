window.MEETING_DATA = {
  currentWeek: "workflow-automation-01",
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
      title: "AI Agent 및 활용",
      shortTitle: "AI Agent 및 활용",
      description: "AI Agent의 활용 사례와 업무 자동화를 다룹니다.",
      subtopics: [
        {
          id: "workflow-automation",
          title: "업무 자동화",
          description: "실제 업무에 필요한 도구를 만들고 반복 작업을 자동화한 사례를 봅니다.",
          weeks: ["workflow-automation-01"]
        }
      ]
    }
  ],
  weeks: [
    {
      id: "workflow-automation-01",
      ordinal: "W02",
      topicId: "agent-adoption",
      subtopicId: "workflow-automation",
      dateLabel: "2026 · 11",
      topic: "AI Agent 및 활용",
      subtopic: "업무 자동화",
      title: "업무 자동화",
      intro: "광고 시안 제작과 피드백 분류를 자동화한 두 팀의 사례.",
      cases: [
        {
          id: "ad-creative",
          eyebrow: "ANTHROPIC · GROWTH MARKETING",
          title: "광고 시안 제작 자동화",
          facts: [
            "마케터가 Claude Code로 Figma 플러그인을 만들어 문안별 광고 시안을 한 번에 생성한다.",
            "Google Ads 문안은 브랜드·제품·광고 규칙을 담은 Skills를 참고해 만들고 CSV로 내보낸다.",
            "광고 문안은 사람이 검토한 뒤 업로드한다."
          ],
          caveat: "2026-01-26 · Anthropic의 자사 업무 소개 · Figma 도구 제작과 AI 문안 생성 사례",
          visual: {
            type: "source-image",
            src: "../../assets/anthropic-marketing-figma.png",
            alt: "공식 사례의 Figma 광고 시안 생성 플러그인과 Google Sheets 문안 목록",
            caption: "ANTHROPIC · FIGMA PLUGIN · 2026-01-26"
          },
          sources: [
            {
              label: "How Anthropic uses Claude in marketing",
              publisher: "Anthropic",
              date: "2026-01-26",
              url: "https://claude.com/resources/articles/how-anthropic-uses-claude-marketing"
            },
            {
              label: "업무 흐름 시연 영상 · 공식 글에서 연결",
              publisher: "Anthropic",
              date: "2026-01-26 · 소개 글 기준",
              url: "https://www.youtube.com/watch?v=Jp83_JMK74o"
            }
          ]
        },
        {
          id: "feedback-router",
          eyebrow: "NOTION · PRODUCT OPERATIONS",
          title: "Slack 피드백을 담당 팀의 할 일로",
          facts: [
            "Feedback Router가 Slack의 #all-feedback 채널을 모니터링한다.",
            "피드백의 제품 영역을 분류하고 해당 팀의 할 일을 생성한다.",
            "관련 Slack 채널에도 전달한다. 웹팀은 이 흐름을 자체 업무 분류 에이전트로 확장했다."
          ],
          caveat: "2026-02-24 · Notion의 자사 업무 소개 · 공개 화면은 Feedback Router의 동작 예시",
          visual: {
            type: "source-image",
            src: "../../assets/notion-feedback-router.webp",
            alt: "Notion이 공개한 Feedback Router의 Slack 응답 예시: 할 일 생성과 담당 팀 채널 전달",
            caption: "NOTION · FEEDBACK ROUTER · 2026-02-24"
          },
          sources: [
            {
              label: "How Notion uses Custom Agents",
              publisher: "Notion",
              date: "2026-02-24",
              url: "https://www.notion.com/blog/how-notion-uses-custom-agents"
            },
            {
              label: "Feedback router · 공개 에이전트 템플릿",
              publisher: "Notion Marketplace",
              date: "2026-02-24 · 소개 글 기준",
              url: "https://www.notion.so/marketplace/custom-agents/feedback-router"
            }
          ]
        },
        {
          id: "project-intro",
          type: "placeholder",
          eyebrow: "03",
          title: "프로젝트 소개",
          summary: "별도 자료"
        }
      ]
    },
    {
      id: "ai-code-review-01",
      ordinal: "W01",
      topicId: "ai-development-methodology",
      subtopicId: "code-review",
      dateLabel: "2026 · 11",
      topic: "AI 시대의 개발 방법론",
      subtopic: "코드 리뷰",
      title: "AI 코딩과 코드 리뷰",
      presentation: "workflows",
      cases: [
        {
          id: "parallel-agents",
          eyebrow: "Ben Stolovitz · 2026-10",
          title: "Ben Stolovitz의 병렬 작업",
          shortTitle: "병렬 작업과 검토",
          kind: "parallel",
          context: "Ben Stolovitz는 기능 구현과 버그 재현을 에이전트에 나눠 맡긴다. 각 작업은 별도 Git worktree에서 진행하고, 사람이 draft PR을 검토하고 직접 테스트한다.",
          boundary: "개인 작업 기록 · 저자가 설명한 작업 방식을 재구성",
          steps: [
            {
              label: "작업 분리",
              title: "에이전트마다 별도 worktree",
              text: "동시에 5~6개 에이전트를 사용한다. 기능이나 버그 재현처럼 작업 단위를 나누고, 각 에이전트에 독립된 코드 사본을 준다.",
              actor: "사람 → 에이전트"
            },
            {
              label: "구현",
              title: "코드·테스트·PR까지 맡긴다",
              text: "공개 화면에서는 Mumble 클라이언트의 오디오 파이프라인에 RNNoise를 연결하도록 요청한다. 원문은 이 작업의 커밋도 연결한다.",
              actor: "에이전트"
            },
            {
              label: "사람 검토",
              title: "직접 테스트하고 구조를 본다",
              text: "저자는 코드를 검토하고 수동으로 테스트한다고 쓴다. 줄 단위 검토보다 아키텍처와 큰 패턴에 집중한다.",
              actor: "사람"
            },
            {
              label: "규칙 반영",
              title: "반복되는 문제를 리뷰 규칙으로",
              text: "생성 코드에서 같은 문제가 반복되면 AI 리뷰어용 규칙을 만든다. CLAUDE.md 지침과 테스트 하네스도 검토 대상으로 삼는다.",
              actor: "사람 → 다음 작업"
            }
          ],
          artifact: {
            type: "image",
            src: "../../assets/ben-agent-worktree.webp",
            alt: "Ben이 공개한 RNNoise 구현 요청과 별도 작업 목록이 보이는 Claude Code 화면",
            caption: "원문 공개 화면 · RNNoise 작업 요청 · 2026-10",
            link: "https://github.com/citelao/mumbo/commit/a92fd3117bde8cf0fa8e323aaa64093eb4466396"
          },
          detailTitle: "AI 리뷰가 실제로 지적한 내용",
          detail: "저자가 연결한 별도의 Mumble PR #7136에서 CodeRabbit은 Windows 알림이 앱 내부 음소거 상태 검증보다 먼저 실행될 수 있다고 지적했다. 제안은 검증과 상태 변경이 성공한 뒤 알림을 보내도록 순서를 바꾸는 것이다. 이 지적을 소개하는 것이며, 최종 수정 결과를 단정하지 않는다.",
          sources: [
            {
              label: "개발자의 작업 기록",
              publisher: "Ben Stolovitz",
              date: "2026-10",
              url: "https://ben.stolovitz.com/posts/how-use-ai-oct-2026/"
            },
            {
              label: "실제 AI 리뷰 · Mumble PR #7136",
              publisher: "mumble-voip/mumble",
              date: "2026-03-22 · 리뷰",
              url: "https://github.com/mumble-voip/mumble/pull/7136"
            }
          ]
        },
        {
          id: "review-queue",
          eyebrow: "bustikiller · 2026-09-25",
          title: "병렬 구현 뒤 밀린 코드 리뷰",
          shortTitle: "검토가 밀린 경험",
          kind: "queue",
          context: "다른 개발자는 Jira 티켓을 CLI로 연결하고, 여러 worktree에서 에이전트를 병렬 실행했다. 익숙하지 않은 코드베이스에서 구현 속도와 자신의 이해 속도가 벌어졌다고 기록했다.",
          boundary: "한 개발자의 회고 · 시간은 개인 사례이며 일반적인 생산성 측정이 아님",
          steps: [
            {
              label: "티켓 위임",
              title: "Jira 티켓을 별도 worktree에",
              text: "ACLI로 Jira를 연결하고 티켓 구현을 에이전트에 맡겼다. 큰 작업의 분해도 AI에 맡기면서 여러 작업을 동시에 진행했다.",
              actor: "사람 → 여러 에이전트"
            },
            {
              label: "검토 대기",
              title: "구현이 끝나도 검토는 남는다",
              text: "직접 하면 20분일 작업을 AI가 5분에 만들었지만, 다른 작업과 문맥 전환 때문에 검토까지 이틀이 걸린 경우가 있었다. 이틀은 순수 리뷰 시간이 아니다.",
              actor: "사람에게 대기"
            },
            {
              label: "동료 리뷰",
              title: "테스트가 바뀐 동작을 검사하지 않았다",
              text: "동료는 PR의 테스트가 실제 변경 시나리오를 검증하지 않는다고 지적했다. 저자는 다시 확인한 뒤 그 지적이 맞았다고 인정했다. 원문에는 해당 diff가 공개돼 있지 않다.",
              actor: "동료 → 작성자"
            },
            {
              label: "이후 방식",
              title: "AI를 중단하고 작은 PR로 돌아갔다",
              text: "저자는 AI 사용을 중단하고 TDD, 파일 다섯 개 정도의 작은 PR, 짧은 설명과 동료 리뷰로 돌아갔다고 썼다. 이 선택은 저자 개인의 대응이다.",
              actor: "사람"
            }
          ],
          detailTitle: "같은 병렬 작업, 서로 다른 대응",
          detail: "Ben은 에이전트를 계속 사용하며 검토와 규칙을 조정했다. 이 개발자는 작업량과 문맥 전환이 자신의 검토 능력을 넘어섰다고 보고 사용을 중단했다. 두 기록은 서로 다른 환경의 개인 경험이다.",
          sources: [
            {
              label: "One month without AI",
              publisher: "bustikiller",
              date: "2026-09-25",
              url: "https://blog.bustikiller.com/2026/09/25/one-month-without-ai.html"
            }
          ]
        },
        {
          id: "review-rules",
          eyebrow: "OpenAI · 2026-07-20",
          title: "Codex 팀의 호환성 리뷰 규칙",
          shortTitle: "팀의 리뷰 규칙",
          kind: "rules",
          context: "Codex app-server의 알림은 experimental이어도 Codex Cloud가 사용한다. 팀은 이 연동 경계를 보호하기 위해 AGENTS.md에 리뷰 규칙을 추가했다.",
          boundary: "공개 PR은 실제 규칙 추가 · 아래 이름 변경과 예상 코멘트는 공식 글의 설명용 예시",
          steps: [
            {
              label: "변경 보기",
              title: "알림 이름을 정리한다면",
              text: "rawResponseItem/completed를 rawResponseItem/done으로 바꾸는 예시다. 컴파일되더라도 기존 이름을 듣는 소비자는 알림을 받지 못할 수 있다.",
              actor: "예시 diff"
            },
            {
              label: "규칙 보기",
              title: "experimental이어도 연동 경계를 보존",
              text: "팀의 AGENTS.md는 rawResponseItem/* 이벤트를 호환성에 민감한 대상으로 다룬다. 이를 남긴 PR #29086은 2026-06-19에 병합됐다.",
              actor: "실제 팀 규칙"
            },
            {
              label: "검토 연결",
              title: "지켜야 할 계약을 찾아 지적한다",
              text: "공식 글의 예상 코멘트는 기존 알림을 유지하거나 하위 호환 이벤트를 추가하라고 설명한다. 실제로 발생한 회귀나 리뷰 결과를 재현한 것은 아니다.",
              actor: "공식 설명용 예시"
            }
          ],
          sources: [
            {
              label: "Custom Code Review rules for Codex",
              publisher: "OpenAI",
              date: "2026-07-20",
              url: "https://developers.openai.com/blog/custom-code-review-rules-for-codex"
            },
            {
              label: "규칙을 추가한 실제 PR #29086",
              publisher: "openai/codex",
              date: "2026-06-19",
              url: "https://github.com/openai/codex/pull/29086"
            }
          ]
        },
        {
          id: "delta-review",
          eyebrow: "Zed · 2026-09-16",
          title: "Delta의 대화 기반 코드 리뷰",
          shortTitle: "동료에게 맥락 넘기기",
          kind: "delta",
          context: "Zed는 Delta 자체 저장소의 PR을 끄고, 에이전트 대화가 있는 thread 안에서 구현·리뷰·반영을 진행한다고 발표했다. Zed 편집기 저장소 전체가 PR을 없앴다는 뜻은 아니다.",
          boundary: "제품 발표와 자사 사용 사례 · 아래 과정은 공식 설명을 도식화",
          steps: [
            {
              label: "작성",
              title: "에이전트와 작업한 thread",
              text: "코드 변경과 에이전트 대화가 함께 남는다. 기존 diff만으로는 다시 파악해야 했던 의사결정 맥락을 이 thread에서 볼 수 있다.",
              actor: "작성자 + 에이전트"
            },
            {
              label: "검토 초대",
              title: "review subthread와 독립 worktree",
              text: "동료는 원래 에이전트 맥락과 변경을 함께 받는다. 별도 worktree 사본에서 코드를 탐색하고 수정안을 시험해볼 수 있다.",
              actor: "동료 + 에이전트"
            },
            {
              label: "수정",
              title: "요청하거나 직접 고친다",
              text: "리뷰어가 문제를 찾으면 수정을 요청하거나 에이전트와 직접 고칠 수 있다. 검토 중 수정은 원래 thread에 반영할 수 있다.",
              actor: "작성자 ↔ 동료"
            },
            {
              label: "반영",
              title: "thread에서 변경을 반영한다",
              text: "수정 반영 후 에이전트에 land를 요청한다. Git 커밋은 push·pull·build의 체크포인트로 남는다.",
              actor: "에이전트"
            }
          ],
          artifact: {
            type: "video",
            poster: "../../assets/delta-review-poster.webp",
            src: "https://images.zed.dev/blog/delta-public-beta/review-quick.mp4",
            caption: "Zed 공식 리뷰 시연 · 2026-09-16 · 원문 영상, 영어 UI"
          },
          sources: [
            {
              label: "Replace PRs with Delta — Now in Public Beta",
              publisher: "Zed Industries",
              date: "2026-09-16",
              url: "https://zed.dev/blog/delta-public-beta"
            }
          ]
        }
      ]
    }
  ]
};
