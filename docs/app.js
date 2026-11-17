(() => {
  const data = window.MEETING_DATA;
  const requestedWeek = document.body.dataset.weekId || data.currentWeek;
  const week = data.weeks.find((item) => item.id === requestedWeek) || data.weeks[0];
  const app = document.querySelector("#app");
  const nav = document.querySelector("#case-nav");

  if (week.presentation === "workflows") {
    window.renderWorkflowWeek({ week, app, nav });
    return;
  }

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const renderVisual = (visual) => {
    if (visual.type === "source-image") {
      return `
        <figure class="source-image">
          <img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt)}">
          <figcaption>${escapeHtml(visual.caption)}</figcaption>
        </figure>`;
    }

    if (visual.type === "policy-split") {
      const renderPolicy = (item, tone) => `
        <div class="policy-side ${tone}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <small>${escapeHtml(item.unit)}</small>
          <ul>${item.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
        </div>`;
      return `<div class="policy-split" role="img" aria-label="OpenAI 내부 실험과 pytest, Linux의 사람 책임 정책 비교">${renderPolicy(visual.left, "open")}${renderPolicy(visual.right, "strict")}</div>`;
    }

    if (visual.type === "review-roles") {
      const renderRole = (item, tone) => `
        <div class="review-role ${tone}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <small>${escapeHtml(item.note)}</small>
          <div>${item.words.map((word) => `<b>${escapeHtml(word)}</b>`).join("")}</div>
        </div>`;
      return `<div class="review-roles" role="img" aria-label="AI 리뷰와 사람 리뷰의 수정안 채택률과 주로 다룬 내용 비교">${renderRole(visual.left, "agent")}${renderRole(visual.right, "human")}</div>`;
    }

    if (visual.type === "rewrite") {
      return `
        <div class="rewrite-visual" role="img" aria-label="AI가 만든 약 4천 줄을 사람이 작성한 수백 줄로 교체">
          <div class="rewrite-before"><span>${escapeHtml(visual.before.label)}</span><strong>${escapeHtml(visual.before.value)}</strong><small>${escapeHtml(visual.before.unit)}</small></div>
          <i>→</i>
          <div class="rewrite-after"><span>${escapeHtml(visual.after.label)}</span><strong>${escapeHtml(visual.after.value)}</strong><small>${escapeHtml(visual.after.unit)}</small></div>
        </div>`;
    }

    if (visual.type === "growth") {
      return `
        <div class="growth-chart" role="img" aria-label="하루 병합 변경이 2,500건에서 30,000건 이상으로 증가">
          <div class="growth-number start"><span>${escapeHtml(visual.startLabel)}</span><strong>${escapeHtml(visual.startValue)}</strong></div>
          <div class="growth-track"><i></i><b>${escapeHtml(visual.ratio)}</b></div>
          <div class="growth-number end"><span>${escapeHtml(visual.endLabel)}</span><strong>${escapeHtml(visual.endValue)}</strong></div>
          <small>${escapeHtml(visual.caption)}</small>
        </div>`;
    }

    if (visual.type === "split") {
      return `
        <div class="split-chart" role="img" aria-label="서로 다른 두 AI 생산성 연구 결과 비교">
          ${[visual.left, visual.right]
            .map(
              (item) => `<div class="split-item ${escapeHtml(item.tone)}">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
                <small>${escapeHtml(item.note)}</small>
              </div>`
            )
            .join("")}
          <div class="versus">VS</div>
        </div>`;
    }

    if (visual.type === "flow") {
      return `
        <div class="review-visual">
          <div class="flow" role="img" aria-label="AI 코드 생성, AI 병렬 검토, 사람 승인 판단 흐름">
            ${visual.steps
              .map(
                (step, index) => `<div class="flow-wrap">
                  <div class="flow-step ${step.accent ? "accent" : ""}"><strong>${escapeHtml(step.label)}</strong><span>${escapeHtml(step.detail)}</span></div>
                  ${index < visual.steps.length - 1 ? '<span class="arrow">→</span>' : ""}
                </div>`
              )
              .join("")}
          </div>
          <div class="review-stat"><span>${escapeHtml(visual.stat.before)}</span><i>→</i><strong>${escapeHtml(visual.stat.after)}</strong><small>${escapeHtml(visual.stat.label)}</small></div>
        </div>`;
    }

    return "";
  };

  const renderSources = (sources) => `
    <div class="sources">
      <span class="source-label">SOURCES</span>
      ${sources
        .map(
          (source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
            <span>${escapeHtml(source.publisher)} · ${escapeHtml(source.date)}</span>
            <strong>${escapeHtml(source.label)}</strong>
            <b aria-hidden="true">↗</b>
          </a>`
        )
        .join("")}
    </div>`;

  nav.innerHTML = week.cases
    .map((item, index) => `<a href="#${escapeHtml(item.id)}" aria-label="${escapeHtml(item.title)}">${String(index + 1).padStart(2, "0")}</a>`)
    .join("");

  app.innerHTML = `
    <section id="top" class="hero section-shell">
      <div class="hero-meta"><span>${escapeHtml(week.dateLabel)}</span><span>${escapeHtml(week.topic)}</span><span>${escapeHtml(week.subtopic)}</span></div>
      <h1>${escapeHtml(week.title).replace("\n", "<br>")}</h1>
      <p>${escapeHtml(week.intro)}</p>
      <a class="scroll-cue" href="#${escapeHtml(week.cases[0].id)}">사례 보기 <span>↓</span></a>
    </section>
    ${week.cases
      .map(
        (item, index) => item.type === "placeholder" ? `<section id="${escapeHtml(item.id)}" class="case section-shell" data-index="${index + 1}">
          <div class="case-heading">
            <p class="eyebrow">${escapeHtml(item.eyebrow)}</p>
            <h2>${escapeHtml(item.title)}</h2>
          </div>
          <div class="visual-panel"><p class="summary">${escapeHtml(item.summary)}</p></div>
        </section>` : `<section id="${escapeHtml(item.id)}" class="case section-shell" data-index="${index + 1}">
          <div class="case-heading">
            <p class="eyebrow">${escapeHtml(item.eyebrow)}</p>
            <h2>${escapeHtml(item.title)}</h2>
          </div>
          <div class="visual-panel">${renderVisual(item.visual)}</div>
          <div class="case-copy">
            ${item.facts ? `<ul class="fact-list">${item.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>` : `<p class="summary">${escapeHtml(item.summary)}</p>`}
            <p class="caveat"><span>맥락</span>${escapeHtml(item.caveat)}</p>
          </div>
          ${renderSources(item.sources)}
        </section>`
      )
      .join("")}`;

  document.querySelector("#updated-at").textContent = `Current: ${week.dateLabel} · ${week.subtopic}`;

  const themeButton = document.querySelector("#theme-toggle");
  const savedTheme = localStorage.getItem("weekly-ai-theme");
  if (savedTheme === "light") document.documentElement.dataset.theme = "light";
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("weekly-ai-theme", next);
  });

  const sections = [...document.querySelectorAll(".case")];
  const navLinks = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
    },
    { threshold: 0.45 }
  );
  sections.forEach((section) => observer.observe(section));

  document.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;
    const all = [document.querySelector("#top"), ...sections];
    const current = all.reduce((best, item, index) => (Math.abs(item.getBoundingClientRect().top) < Math.abs(all[best].getBoundingClientRect().top) ? index : best), 0);
    const delta = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = Math.max(0, Math.min(all.length - 1, current + delta));
    if (next !== current) {
      event.preventDefault();
      all[next].scrollIntoView({ behavior: "smooth" });
    }
  });
})();
