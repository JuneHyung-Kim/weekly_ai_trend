(() => {
  const data = window.MEETING_DATA;
  const app = document.querySelector("#topic-app");
  const topic = data.topics.find((item) => item.id === document.body.dataset.topicId);
  const subtopic = topic?.subtopics.find((item) => item.id === document.body.dataset.subtopicId);
  const weeks = (subtopic?.weeks || []).map((id) => data.weeks.find((week) => week.id === id)).filter(Boolean);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  if (!topic || !subtopic) {
    app.innerHTML = '<section class="archive-shell missing-page"><p>자료를 찾지 못했습니다.</p><a href="../../../">메인으로 돌아가기</a></section>';
    return;
  }

  app.innerHTML = `
    <section class="subtopic-hero archive-shell">
      <nav class="breadcrumb" aria-label="현재 위치"><a href="../../../">전체 주제</a><span>/</span><span>${escapeHtml(topic.title)}</span></nav>
      <p class="archive-kicker">${escapeHtml(topic.number)} · ${escapeHtml(topic.title)}</p>
      <h1>${escapeHtml(subtopic.title)}</h1>
      <p>${escapeHtml(subtopic.description)}</p>
    </section>
    <section class="week-section archive-shell" aria-labelledby="weeks-heading">
      <div class="section-label"><span>WEEKS</span><p id="weeks-heading">주차별 화면</p></div>
      <div class="week-grid">
        ${weeks.map((week) => `<a class="week-card" href="../../../weeks/${escapeHtml(week.id)}/">
          <div class="week-card-meta"><span>${escapeHtml(week.ordinal)}</span><span>${escapeHtml(week.dateLabel)}</span></div>
          <div class="week-card-visual" aria-hidden="true"><b>12×<i>+</i></b><div><span>+26%</span><span>−19%</span></div></div>
          <h2>${escapeHtml(week.title).replace("\n", "<br>")}</h2>
          <p>${week.cases.length}개의 사례 · 원문 링크 포함</p>
          <strong>화면 열기 ↗</strong>
        </a>`).join("")}
        <article class="week-card next-week-card">
          <div class="week-card-meta"><span>NEXT</span><span>OPEN</span></div>
          <div class="next-mark">＋</div>
          <h2>다음 장면은<br>아직 비어 있습니다.</h2>
          <p>새 사례가 쌓이면 같은 소주제 아래 Week 02로 이어집니다.</p>
        </article>
      </div>
    </section>`;

  const themeButton = document.querySelector("#theme-toggle");
  if (localStorage.getItem("weekly-ai-theme") === "light") document.documentElement.dataset.theme = "light";
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("weekly-ai-theme", next);
  });
})();
