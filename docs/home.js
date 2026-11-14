(() => {
  const data = window.MEETING_DATA;
  const app = document.querySelector("#home-app");
  const current = data.weeks.find((week) => week.id === data.currentWeek) || data.weeks[0];
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  app.innerHTML = `
    <section class="home-hero archive-shell">
      <p class="archive-kicker">A SMALL WEEKLY MEETING FOR DEVELOPERS</p>
      <h1>AI를 같이 보고,<br><span>각자의 일을 이야기합니다.</span></h1>
      <p class="home-intro">최신 AI 사례와 숫자, 화면을 가볍게 펼쳐 놓습니다. 정답을 배우기보다 각자 겪은 일을 꺼내기 위한 모임입니다.</p>
    </section>
    <section class="current-section archive-shell" aria-labelledby="current-heading">
      <div class="section-label"><span>NOW</span><p id="current-heading">이번에 같이 볼 자료</p></div>
      <a class="current-feature" href="weeks/${escapeHtml(current.id)}/">
        <div class="current-copy">
          <div class="current-meta"><span>${escapeHtml(current.ordinal)}</span><span>${escapeHtml(current.subtopic)}</span><span>${escapeHtml(current.dateLabel)}</span></div>
          <h2>${escapeHtml(current.title).replace("\n", "<br>")}</h2>
          <p>${escapeHtml(current.intro)}</p>
          <strong class="enter-link">화면 열기 <i>↗</i></strong>
        </div>
        <div class="current-preview" aria-hidden="true">
          <div class="preview-window-bar"><i></i><i></i><i></i><span>CODE REVIEW / W01</span></div>
          <div class="preview-metric preview-metric-large"><small>MERGED CHANGES / DAY</small><strong>12×<b>+</b></strong></div>
          <div class="preview-metric-row"><div><small>FIELD</small><strong>+26%</strong></div><div><small>OSS</small><strong>−19%</strong></div></div>
          <div class="preview-flow"><span>AI</span><i>→</i><span>AI TEAM</span><i>→</i><span>HUMAN</span></div>
        </div>
      </a>
    </section>
    <section class="topic-section archive-shell" aria-labelledby="topics-heading">
      <div class="section-label"><span>INDEX</span><p id="topics-heading">대주제와 소주제</p></div>
      <div class="topic-list">
        ${data.topics.map((topic) => `<article class="topic-row">
          <span class="topic-number">${escapeHtml(topic.number)}</span>
          <div class="topic-main"><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.description)}</p></div>
          <div class="subtopic-list">${topic.subtopics.length ? topic.subtopics.map((subtopic) => `<a href="topics/${escapeHtml(topic.id)}/${escapeHtml(subtopic.id)}/"><span>${escapeHtml(subtopic.title)}</span><small>${subtopic.weeks.length} WEEK</small><b>↗</b></a>`).join("") : '<p class="topic-empty">소주제를 함께 채워갈 예정</p>'}</div>
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
