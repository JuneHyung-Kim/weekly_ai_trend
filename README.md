# Weekly AI Trend Meeting

개발자들이 최신 AI 사례를 함께 보며 자유롭게 이야기하기 위한 주간 자료 사이트입니다.

## 로컬에서 보기

```bash
python3 -m http.server 4173 --directory docs
```

브라우저에서 `http://localhost:4173`을 엽니다. 빌드 과정은 없습니다.

## 자료 구조

- `docs/`: GitHub Pages에 공개되는 사이트
- `docs/index.html`: 대주제와 소주제를 보여주는 메인 화면
- `docs/weeks/`: 메인에서 바로 열리는 회차별 발표 화면
- `docs/data.js`: 화면 전체가 공유하는 주제, 주차, 출처 데이터
- `planning/`: 주제, 일정, 사용 이력 등 공개하지 않을 운영 자료
- `automation/weekly-task.md`: Codex 예약 작업에 사용할 지침

## GitHub Pages 배포

저장소의 `main` 브랜치에 push하면 `.github/workflows/pages.yml`이 `docs/`를 GitHub Pages로 배포합니다. 처음 한 번 GitHub 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 지정해야 합니다.

현재 공개 경로는 다음 구조를 사용합니다.

- `/weekly_ai_trend/`: 전체 목차
- `/weekly_ai_trend/weeks/ai-code-review-01/`: 코드 리뷰 Week 01 화면
