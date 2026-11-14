(() => {
  const data = window.MEETING_DATA;
  const app = document.querySelector("#home-app");
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  const renderSessions = (topic) => {
    const sessions = topic.subtopics.flatMap((subtopic) =>
      subtopic.weeks.map((weekId, index) => ({
        subtopic,
        index: index + 1,
        week: data.weeks.find((item) => item.id === weekId)
      }))
    ).filter((item) => item.week);

    if (!sessions.length) return '<span class="catalog-empty">COMING LATER</span>';

    return sessions.map(({ subtopic, index, week }) => `
      <a class="catalog-link" href="weeks/${escapeHtml(week.id)}/">
        <span>${escapeHtml(subtopic.title)} ${String(index).padStart(2, "0")}</span>
        <small>${escapeHtml(week.ordinal)} · ${week.cases.length} CASES</small>
        <b aria-hidden="true">↗</b>
      </a>`).join("");
  };

  app.innerHTML = `
    <section class="masthead archive-shell">
      <div class="masthead-meta"><span>DEVELOPERS' SMALL TALK</span><span>VOL. 01 · 2026</span></div>
      <h1>WEEKLY <em>AI</em></h1>
      <p>개발자들이 함께 보는 AI 사례</p>
    </section>
    <section class="catalog archive-shell" aria-labelledby="catalog-heading">
      <div class="catalog-heading"><span>INDEX</span><h2 id="catalog-heading">TOPICS</h2></div>
      <div class="catalog-grid">
        ${data.topics.map((topic) => `
          <article class="catalog-card ${topic.subtopics.length ? "has-content" : ""}">
            <span class="catalog-number">${escapeHtml(topic.number)}</span>
            <h3>${escapeHtml(topic.shortTitle || topic.title)}</h3>
            <div class="catalog-sessions">${renderSessions(topic)}</div>
          </article>`).join("")}
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
