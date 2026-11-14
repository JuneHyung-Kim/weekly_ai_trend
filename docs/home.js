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

    if (!sessions.length) return '<p class="directory-empty">아직 정하지 않았습니다.</p>';

    return sessions.map(({ subtopic, index, week }) => `
      <a class="session-link" href="weeks/${escapeHtml(week.id)}/">
        <span class="session-name">${escapeHtml(subtopic.title)} ${String(index).padStart(2, "0")}</span>
        <strong>${escapeHtml(week.title).replace("\n", " ")}</strong>
        <small>${escapeHtml(week.ordinal)} · 사례 ${week.cases.length}개</small>
        <b aria-hidden="true">↗</b>
      </a>`).join("");
  };

  app.innerHTML = `
    <section class="simple-hero archive-shell">
      <p class="archive-kicker">WEEKLY AI · DEVELOPERS' SMALL TALK</p>
      <h1>AI를 함께 보고<br>이야기합니다.</h1>
      <p>최신 사례와 화면을 펼쳐 놓고, 각자 겪은 일을 가볍게 나누는 주간 모임입니다.</p>
    </section>
    <section class="directory archive-shell" aria-labelledby="directory-heading">
      <div class="directory-heading">
        <span>INDEX</span>
        <h2 id="directory-heading">주제와 자료</h2>
      </div>
      <div class="directory-list">
        ${data.topics.map((topic) => `
          <article class="directory-topic">
            <div class="directory-topic-title">
              <span>${escapeHtml(topic.number)}</span>
              <div><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.description)}</p></div>
            </div>
            <div class="session-list">${renderSessions(topic)}</div>
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
