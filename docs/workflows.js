(() => {
  const e = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const number = (index) => String(index + 1).padStart(2, "0");

  const diagram = (item) => {
    if (item.kind === "parallel") return `
      <div class="workflow-diagram parallel-diagram" aria-label="사람이 별도 worktree에 작업을 나누고 결과를 검토하는 구조">
        <div class="diagram-label">작업 구조 · 원문 설명 재구성</div>
        <div class="owner-node" data-node="0">사람<span>작업 나누기</span></div>
        <div class="agent-lanes" data-node="1">${["기능 구현", "버그 재현", "테스트 작업"].map((label, index) => `<div><span>WORKTREE ${number(index)}</span><strong>${label}</strong><small>에이전트 → 코드 · 테스트 · PR</small></div>`).join("")}</div>
        <div class="review-node" data-node="2"><span>사람의 검토</span><strong>구조 확인 + 직접 테스트</strong></div>
        <div class="rule-node" data-node="3">반복되는 문제 → 규칙 · 테스트 하네스</div>
      </div>`;
    if (item.kind === "queue") return `
      <div class="workflow-diagram queue-diagram" aria-label="병렬 구현 뒤 한 사람에게 검토가 모이는 과정">
        <div class="diagram-label">개인 회고의 과정 재구성 · 시간축 비례 아님</div>
        <div class="queue-input" data-node="0"><span>Jira 티켓</span><strong>여러 worktree에서 구현</strong></div>
        <div class="queue-stack" data-node="1"><div>코드 · 테스트</div><div>코드 · 테스트</div><div>코드 · 테스트</div></div>
        <div class="queue-review" data-node="1"><span>한 사람이 다시 맥락을 파악</span><strong>5분 구현 → 검토까지 이틀</strong><small>다른 작업과 문맥 전환을 포함한 개인 사례</small></div>
        <div class="queue-feedback" data-node="2">동료: 이 테스트는 바뀐 시나리오를 검증하지 않는다.<small>원문 내용의 한국어 요약 · 해당 코드는 비공개</small></div>
        <div class="queue-reset" data-node="3">저자의 이후 선택: AI 중단 → TDD · 작은 PR</div>
      </div>`;
    if (item.kind === "rules") return `
      <div class="workflow-diagram rules-diagram">
        <div class="diagram-label">공식 글의 설명용 예시 · 실제 장애 diff가 아님</div>
        <div class="code-window" data-node="0"><div>app-server protocol <span>Rust · 이름 변경 예시</span></div><pre><code><span class="diff-remove">− RawResponseItemCompleted =&gt; "rawResponseItem/completed"</span>\n<span class="diff-add">+ RawResponseItemCompleted =&gt; "rawResponseItem/done"</span></code></pre></div>
        <div class="contract-chain"><span>app-server</span><i>→ 알림 이름 →</i><span>Codex Cloud</span></div>
        <div class="repository-rule" data-node="1"><span>AGENTS.md · 실제 규칙의 한국어 요약</span><strong>rawResponseItem/*</strong><p>experimental이어도 외부 연동 호환성을 검토한다.</p></div>
        <div class="finding-node" data-node="2"><span>규칙을 적용한 예상 코멘트 · 공식 글 요약</span><p>기존 알림 이름을 유지하거나 하위 호환 이벤트를 추가한다.</p></div>
      </div>`;
    return `
      <div class="workflow-diagram delta-diagram" aria-label="원래 대화와 worktree를 함께 넘겨 검토하고 수정하는 흐름">
        <div class="diagram-label">Delta의 리뷰 과정 · 공식 설명 재구성</div>
        <div class="delta-thread" data-node="0"><span>원래 THREAD</span><strong>작성자 ↔ 에이전트</strong><p>대화 + 코드 변경 + 작업 환경</p></div>
        <div class="thread-branch">↓ 맥락과 worktree 사본을 함께 전달</div>
        <div class="delta-subthread" data-node="1"><span>REVIEW SUBTHREAD</span><strong>동료 ↔ 에이전트</strong><p>독립 worktree에서 탐색 · 수정 실험</p></div>
        <div class="thread-merge" data-node="2">↑ 수정 요청 또는 수정안 반영</div>
        <div class="delta-land" data-node="3">원래 thread → land → Git 체크포인트</div>
      </div>`;
  };

  const artifact = (item) => {
    const a = item.artifact;
    if (!a) return "";
    if (a.type === "image") return `<figure class="workflow-artifact"><button class="artifact-zoom" type="button" data-zoom="${e(a.src)}" data-alt="${e(a.alt)}" aria-label="${e(a.alt)} 확대"><img src="${e(a.src)}" alt="${e(a.alt)}" loading="lazy"><span>화면 확대 ↗</span></button><figcaption>${e(a.caption)} · <a href="${e(a.link)}" target="_blank" rel="noreferrer">구현 커밋 ↗</a></figcaption></figure>`;
    return `<figure class="workflow-artifact video-artifact"><video controls playsinline preload="none" poster="${e(a.poster)}" aria-label="Zed 공식 Delta 리뷰 시연" aria-describedby="${e(item.id)}-video-caption"><source src="${e(a.src)}" type="video/mp4"></video><figcaption id="${e(item.id)}-video-caption">${e(a.caption)} · <a href="${e(a.src)}" target="_blank" rel="noreferrer">원본 영상 ↗</a></figcaption></figure>`;
  };

  window.renderWorkflowWeek = ({ week, app }) => {
    document.body.classList.add("workflow-page");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) app.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    });
    const sources = (item) => `<div class="workflow-sources">${item.sources.map(s => `<a href="${e(s.url)}" target="_blank" rel="noreferrer"><span>${e(s.publisher)} · ${e(s.date)}</span>${e(s.label)} ↗</a>`).join("")}</div>`;
    app.innerHTML = `
      <section class="workflow-intro workflow-shell" id="top">
        <p class="eyebrow">${e(week.ordinal)} · ${e(week.topic)}</p>
        <h1>${e(week.title)}</h1>
      </section>
      ${week.cases.map((item, index) => `
        <section class="workflow-case workflow-shell" id="${e(item.id)}" data-kind="${e(item.kind)}">
          <header class="workflow-heading"><p class="eyebrow">${number(index)} · ${e(item.eyebrow)}</p><h2>${e(item.title)}</h2><p class="workflow-context">${e(item.context)}</p></header>
          <div class="workflow-workspace">
            <div class="step-rail" role="tablist" aria-label="${e(item.shortTitle)} 작업 과정">${item.steps.map((step, i) => `<button type="button" role="tab" id="${e(item.id)}-tab-${i}" aria-selected="${i === 0}" aria-controls="${e(item.id)}-panel" tabindex="${i === 0 ? 0 : -1}" data-step="${i}"><span>${number(i)}</span><strong>${e(step.label)}</strong></button>`).join("")}</div>
            <div class="workflow-stage">${diagram(item)}<div class="step-explanation" role="tabpanel" id="${e(item.id)}-panel" aria-labelledby="${e(item.id)}-tab-0" tabindex="0"><div class="step-content"></div></div></div>
          </div>
          <div class="case-evidence">${artifact(item)}<div class="case-reading"><p class="evidence-label">${e(item.boundary)}</p>${item.detail ? `<div class="evidence-note"><h3>${e(item.detailTitle)}</h3><p>${e(item.detail)}</p></div>` : ""}<details class="full-process"><summary>전체 과정 한 번에 보기</summary><ol>${item.steps.map(step => `<li><strong>${e(step.title)}</strong><p>${e(step.text)}</p></li>`).join("")}</ol></details>${sources(item)}</div></div>
        </section>`).join("")}
      <dialog class="image-dialog"><button type="button" class="dialog-close" aria-label="확대 화면 닫기">닫기 ×</button><img alt=""></dialog>`;

    week.cases.forEach((item) => {
      const section = document.getElementById(item.id);
      const tabs = [...section.querySelectorAll('[role="tab"]')];
      let current = 0;
      const select = (index, focus = false) => {
        current = Math.max(0, Math.min(item.steps.length - 1, index));
        tabs.forEach((tab, i) => {
          tab.setAttribute("aria-selected", String(i === current));
          tab.tabIndex = i === current ? 0 : -1;
        });
        section.querySelectorAll("[data-node]").forEach(node => {
          node.classList.toggle("is-active", Number(node.dataset.node) === current);
          node.classList.toggle("is-past", Number(node.dataset.node) < current);
        });
        const step = item.steps[current];
        const content = section.querySelector(".step-content");
        content.innerHTML = `<span class="actor-label">${e(step.actor)}</span><h3>${e(step.title)}</h3><p>${e(step.text)}</p>`;
        if (content.animate && !reducedMotion.matches) content.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 150 });
        section.querySelector('[role="tabpanel"]').setAttribute("aria-labelledby", tabs[current].id);
        if (focus) tabs[current].focus();
      };
      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => select(index));
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          select(event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length, true);
        });
      });
      select(0);
    });

    const dialog = app.querySelector(".image-dialog");
    app.querySelectorAll("[data-zoom]").forEach(button => button.addEventListener("click", () => {
      const img = dialog.querySelector("img");
      img.src = button.dataset.zoom;
      img.alt = button.dataset.alt;
      dialog.showModal();
    }));
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    const themeButton = document.querySelector("#theme-toggle");
    if (localStorage.getItem("weekly-ai-theme") === "light") document.documentElement.dataset.theme = "light";
    themeButton.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("weekly-ai-theme", next);
    });
    document.querySelector("#updated-at").textContent = `${week.ordinal} · ${week.dateLabel} · 원문 확인 2026-11-17`;

  };
})();
