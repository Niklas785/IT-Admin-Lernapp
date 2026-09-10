/* ============================================================
   QUIZ-ENGINE
   Diese Datei musst du normalerweise nicht anfassen.
   Neue Fragen/Themen kommen in questions.js.
   ============================================================ */

const STORAGE_KEY = "ihk_quiz_bestscores_v1";

const state = {
  screen: "setup", // "setup" | "quiz" | "result"
  selectedTopics: [],
  questions: [],       // die tatsächlich gestellten Fragen (gemischt)
  current: 0,
  answers: [],         // { correct: bool, given: ..., question }
  answeredCurrent: false,
  currentSelection: null // je nach Fragetyp: gewählter Index / eingegebener Text / Objekt
};

const app = document.getElementById("app");

/* ---------- Hilfsfunktionen ---------- */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.]+$/, "");
}

function loadBestScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveBestScore(topicKey, percent) {
  const scores = loadBestScores();
  if (!scores[topicKey] || percent > scores[topicKey]) {
    scores[topicKey] = percent;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---------- Setup-Screen ---------- */

function renderSetup() {
  const bestScores = loadBestScores();

  const topicRows = QUIZ_DATA.map((topic) => {
    const checked = state.selectedTopics.includes(topic.id) ? "checked" : "";
    const best = bestScores[topic.id];
    const bestHtml = best !== undefined ? `<div class="topic-best">Beste Runde: ${best}%</div>` : "";
    return `
      <label class="topic-row" data-topic="${topic.id}">
        <input type="checkbox" data-topic-checkbox="${topic.id}" ${checked} />
        <div class="topic-info">
          <div class="topic-name">${escapeHtml(topic.title)}</div>
          <div class="topic-count">${topic.questions.length} Fragen</div>
        </div>
        ${bestHtml}
      </label>
    `;
  }).join("");

  app.innerHTML = `
    <header class="app-header">
      <div>
        <h1>IHK Prüfungstrainer</h1>
        <div class="subtitle">Fachinformatik &middot; Grundlagen</div>
      </div>
      <div class="header-right">${QUIZ_DATA.reduce((s, t) => s + t.questions.length, 0)} Fragen<br/>${QUIZ_DATA.length} Themen</div>
    </header>

    <p class="intro-text">Wähle Themen und ein Niveau aus. Bei mehreren Themen verteilt die App die Fragen innerhalb der gewählten Stufe möglichst gleichmäßig. Nach jeder Antwort erhältst du direkt eine Erklärung.</p>

    <div class="topic-list">${topicRows}</div>

    <div class="setup-row">
      <div class="setup-block">
        <label for="question-count">Anzahl Fragen</label>
        <select id="question-count">
          <option value="10">10 Fragen</option>
          <option value="20">20 Fragen</option>
          <option value="30">30 Fragen</option>
          <option value="40">40 Fragen</option>
          <option value="50">50 Fragen</option>
          <option value="all">Alle verfügbaren</option>
        </select>
      </div>
      <div class="setup-block">
        <label for="question-order">Reihenfolge</label>
        <select id="question-order">
          <option value="shuffle">Gemischt</option>
          <option value="order">Wie in der Liste</option>
        </select>
      </div>
      <div class="setup-block">
        <label for="difficulty">Schwierigkeit</label>
        <select id="difficulty">
          <option value="all">Alle Niveaus</option>
          <option value="grundlagen">Grundlagen</option>
          <option value="fortgeschritten">Prüfungsniveau</option>
          <option value="anspruchsvoll">Vertiefung</option>
        </select>
      </div>
    </div>

    <button class="btn btn-primary" id="start-btn" disabled>Quiz starten</button>

    <footer class="app-footer">Themen werden in questions.js gepflegt &mdash; neue Themen erscheinen hier automatisch.</footer>
  `;

  document.querySelectorAll("[data-topic-checkbox]").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-topic-checkbox");
      if (e.target.checked) {
        if (!state.selectedTopics.includes(id)) state.selectedTopics.push(id);
      } else {
        state.selectedTopics = state.selectedTopics.filter((t) => t !== id);
      }
      document.getElementById("start-btn").disabled = state.selectedTopics.length === 0;
    });
  });

  document.getElementById("start-btn").disabled = state.selectedTopics.length === 0;
  document.getElementById("start-btn").addEventListener("click", startQuiz);
}

function startQuiz() {
  const countValue = document.getElementById("question-count").value;
  const orderValue = document.getElementById("question-order").value;
  const difficultyValue = document.getElementById("difficulty").value;

  const selectedTopics = QUIZ_DATA.filter((topic) => state.selectedTopics.includes(topic.id));
  const matchesDifficulty = (question) => {
    if (difficultyValue === "all") return true;
    if (difficultyValue === "grundlagen") return !question.difficulty;
    return question.difficulty === difficultyValue;
  };
  const allQuestions = selectedTopics.flatMap((topic) =>
    topic.questions
      .filter(matchesDifficulty)
      .map((q) => ({ ...q, topicId: topic.id, topicTitle: topic.title }))
  );

  if (allQuestions.length === 0) {
    window.alert("Für diese Auswahl sind noch keine Fragen vorhanden. Wähle ein anderes Niveau oder weitere Themen.");
    return;
  }

  let pool;
  if (countValue === "all") {
    pool = orderValue === "shuffle" ? shuffle(allQuestions) : allQuestions;
  } else {
    const targetCount = Math.min(parseInt(countValue, 10), allQuestions.length);
    const topicPools = selectedTopics.map((topic) => {
      const questions = topic.questions
        .filter(matchesDifficulty)
        .map((q) => ({ ...q, topicId: topic.id, topicTitle: topic.title }));
      return orderValue === "shuffle" ? shuffle(questions) : questions;
    });

    // Reihum je eine Frage vergeben: Die Themen bleiben dadurch möglichst gleich gewichtet,
    // auch wenn ein später hinzugefügtes Thema einmal weniger Fragen enthalten sollte.
    const quotas = topicPools.map(() => 0);
    const topicOrder = orderValue === "shuffle"
      ? shuffle(topicPools.map((_, index) => index))
      : topicPools.map((_, index) => index);
    let remaining = targetCount;
    while (remaining > 0) {
      let addedQuestion = false;
      topicOrder.forEach((index) => {
        if (remaining > 0 && quotas[index] < topicPools[index].length) {
          quotas[index] += 1;
          remaining -= 1;
          addedQuestion = true;
        }
      });
      if (!addedQuestion) break;
    }

    pool = topicPools.flatMap((questions, index) => questions.slice(0, quotas[index]));
    if (orderValue === "shuffle") pool = shuffle(pool);
  }

  state.questions = pool;
  state.current = 0;
  state.answers = [];
  state.screen = "quiz";
  state.answeredCurrent = false;
  state.currentSelection = null;

  render();
}

/* ---------- Quiz-Screen ---------- */

function renderQuiz() {
  const q = state.questions[state.current];
  const total = state.questions.length;

  const ticks = state.questions.map((_, i) => {
    let cls = "progress-tick";
    if (i < state.current) {
      cls += state.answers[i] && state.answers[i].correct ? " done-correct" : " done-wrong";
    } else if (i === state.current) {
      cls += " current";
    }
    return `<div class="${cls}"></div>`;
  }).join("");

  app.innerHTML = `
    <header class="app-header">
      <div>
        <h1>IHK Prüfungstrainer</h1>
      </div>
      <div class="header-right quiz-header-controls">
        <span>Frage ${state.current + 1} / ${total}</span>
        <button class="btn btn-ghost quiz-exit-btn" id="abort-quiz-btn" type="button">Quiz abbrechen</button>
      </div>
    </header>

    <div class="progress-track">${ticks}</div>

    <div class="question-card">
      <span class="topic-tag">${escapeHtml(q.topicTitle)}</span>
      <div id="question-body"></div>
      <div id="explanation-slot"></div>
      <div class="quiz-actions" id="quiz-actions"></div>
    </div>
  `;

  renderQuestionBody(q);
  renderActions();
  document.getElementById("abort-quiz-btn").addEventListener("click", abortQuiz);
}

function abortQuiz() {
  const confirmed = window.confirm("Quiz wirklich abbrechen? Nicht abgeschlossene Antworten werden nicht als Ergebnis gespeichert.");
  if (!confirmed) return;

  state.screen = "setup";
  state.questions = [];
  state.current = 0;
  state.answers = [];
  state.answeredCurrent = false;
  state.currentSelection = null;
  render();
}

function renderQuestionBody(q) {
  const slot = document.getElementById("question-body");

  if (q.type === "mc") {
    slot.innerHTML = `
      <p class="question-text">${escapeHtml(q.question)}</p>
      <div class="options-list" id="options-list"></div>
    `;
    const optionsList = document.getElementById("options-list");
    // Reihenfolge der Antworten mischen, richtige Antwort merken
    if (!q._shuffledOptions) {
      const idxArr = q.options.map((opt, i) => i);
      const shuffled = shuffle(idxArr);
      q._shuffledOptions = shuffled.map((origIdx) => ({ text: q.options[origIdx], origIdx }));
    }
    q._shuffledOptions.forEach((opt, displayIdx) => {
      const letter = String.fromCharCode(65 + displayIdx);
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `<span class="marker">${letter}</span><span>${escapeHtml(opt.text)}</span>`;
      div.addEventListener("click", () => selectMcOption(displayIdx));
      div.dataset.displayIdx = displayIdx;
      optionsList.appendChild(div);
    });
  } else if (q.type === "text") {
    slot.innerHTML = `
      <p class="question-text">${escapeHtml(q.question)}</p>
      <input type="text" class="text-input" id="text-answer" placeholder="Deine Antwort" autocomplete="off" autocapitalize="off" spellcheck="false" />
    `;
  } else if (q.type === "blank") {
    const parts = q.question.split("___");
    let html = `<p class="question-text">`;
    parts.forEach((part, i) => {
      html += escapeHtml(part);
      if (i < parts.length - 1) {
        html += `<span class="mono" style="border-bottom:2px dotted var(--ink-soft); padding:0 4px;">&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
      }
    });
    html += `</p><div id="blank-fields"></div>`;
    slot.innerHTML = html;
    const fieldWrap = document.getElementById("blank-fields");
    q.blanks.forEach((_, i) => {
      const div = document.createElement("div");
      div.className = "blank-line";
      div.innerHTML = `
        <div class="blank-context">Lücke ${i + 1}</div>
        <input type="text" class="fill-input" data-blank-idx="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" />
      `;
      fieldWrap.appendChild(div);
    });
  } else if (q.type === "ip") {
    slot.innerHTML = `<p class="question-text">${escapeHtml(q.question)}</p><div id="ip-fields"></div>`;
    const fieldWrap = document.getElementById("ip-fields");
    q.fields.forEach((f, i) => {
      const row = document.createElement("div");
      row.className = "ip-field-row field-wrap";
      row.dataset.rowIdx = i;
      row.innerHTML = `
        <label>${escapeHtml(f.label)}</label>
        <input type="text" class="ip-input" data-field-idx="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="z. B. 192.168.1.0" />
      `;
      fieldWrap.appendChild(row);
    });
  }
}

function selectMcOption(displayIdx) {
  if (state.answeredCurrent) return;
  document.querySelectorAll(".option").forEach((el) => el.classList.remove("selected"));
  const el = document.querySelector(`.option[data-display-idx="${displayIdx}"]`);
  if (el) el.classList.add("selected");
  state.currentSelection = displayIdx;
  updateSubmitState();
}

function updateSubmitState() {
  const btn = document.getElementById("submit-btn");
  if (!btn) return;
  const q = state.questions[state.current];
  let ready = false;
  if (q.type === "mc") {
    ready = state.currentSelection !== null && state.currentSelection !== undefined;
  } else {
    ready = true; // Text/Blank/IP: leere Felder werden als falsch gewertet, erlauben aber Abgabe
  }
  btn.disabled = !ready;
}

function renderActions() {
  const actions = document.getElementById("quiz-actions");
  if (!state.answeredCurrent) {
    actions.innerHTML = `<button class="btn btn-primary" id="submit-btn">Antwort prüfen</button>`;
    document.getElementById("submit-btn").addEventListener("click", submitAnswer);
    // Enter-Taste in Textfeldern erlauben
    setTimeout(() => {
      document.querySelectorAll(".text-input, .fill-input, .ip-input").forEach((inp) => {
        inp.addEventListener("keydown", (e) => {
          if (e.key === "Enter") submitAnswer();
        });
      });
    }, 0);
    updateSubmitState();
    if (document.getElementById("options-list")) {
      // mc: submit disabled bis Auswahl
      document.getElementById("submit-btn").disabled = true;
    }
  } else {
    const isLast = state.current === state.questions.length - 1;
    actions.innerHTML = `<button class="btn btn-primary" id="next-btn">${isLast ? "Ergebnis anzeigen" : "Nächste Frage"}</button>`;
    document.getElementById("next-btn").addEventListener("click", nextQuestion);
  }
}

function submitAnswer() {
  const q = state.questions[state.current];
  let correct = false;
  let givenSummary = "";

  if (q.type === "mc") {
    if (state.currentSelection === null || state.currentSelection === undefined) return;
    const chosen = q._shuffledOptions[state.currentSelection];
    correct = chosen.origIdx === q.correct;
    givenSummary = chosen.text;

    document.querySelectorAll(".option").forEach((el) => {
      el.classList.add("disabled");
      const di = parseInt(el.dataset.displayIdx, 10);
      const optObj = q._shuffledOptions[di];
      if (optObj.origIdx === q.correct) {
        el.classList.add("correct");
      } else if (di === state.currentSelection) {
        el.classList.add("wrong");
      }
    });
  } else if (q.type === "text") {
    const input = document.getElementById("text-answer");
    const val = input.value;
    givenSummary = val;
    correct = q.accepted.some((acc) => normalize(acc) === normalize(val));
    input.disabled = true;
    showFieldFeedback(input.parentElement, correct);
    markFieldStyle(input, correct);
  } else if (q.type === "blank") {
    let allCorrect = true;
    const givenParts = [];
    q.blanks.forEach((accArr, i) => {
      const input = document.querySelector(`[data-blank-idx="${i}"]`);
      const val = input.value;
      givenParts.push(val);
      const ok = accArr.some((acc) => normalize(acc) === normalize(val));
      if (!ok) allCorrect = false;
      markFieldStyle(input, ok);
      input.disabled = true;
    });
    correct = allCorrect;
    givenSummary = givenParts.join(" / ");
  } else if (q.type === "ip") {
    let allCorrect = true;
    const givenParts = [];
    q.fields.forEach((f, i) => {
      const input = document.querySelector(`.ip-input[data-field-idx="${i}"]`);
      const val = input.value;
      givenParts.push(`${f.label}: ${val || "(leer)"}`);
      const ok = normalize(f.answer) === normalize(val);
      if (!ok) allCorrect = false;
      markFieldStyle(input, ok);
      input.disabled = true;
    });
    correct = allCorrect;
    givenSummary = givenParts.join(", ");
  }

  state.answeredCurrent = true;
  state.answers[state.current] = { correct, given: givenSummary, question: q };

  showExplanation(q, correct);
  updateProgressTicks();
  renderActions();
}

function markFieldStyle(input, ok) {
  input.parentElement.classList.remove("ok", "bad");
  if (input.parentElement.classList.contains("field-wrap") || input.parentElement.classList.contains("blank-line")) {
    input.parentElement.classList.add(ok ? "ok" : "bad");
  }
}

function showFieldFeedback(container, correct) {
  const fb = document.createElement("div");
  fb.className = "input-feedback " + (correct ? "ok" : "bad");
  fb.textContent = correct ? "Richtig!" : "Nicht ganz richtig.";
  container.appendChild(fb);
}

function showExplanation(q, correct) {
  const slot = document.getElementById("explanation-slot");
  let correctAnswerLine = "";
  if (!correct) {
    if (q.type === "mc") {
      correctAnswerLine = `<div style="margin-bottom:6px; color: var(--good); font-size:0.85rem;">Richtige Antwort: ${escapeHtml(q.options[q.correct])}</div>`;
    } else if (q.type === "text") {
      correctAnswerLine = `<div style="margin-bottom:6px; color: var(--good); font-size:0.85rem;">Richtige Antwort: ${escapeHtml(q.accepted[0])}</div>`;
    } else if (q.type === "blank") {
      const answers = q.blanks.map((b) => b[0]).join(" / ");
      correctAnswerLine = `<div style="margin-bottom:6px; color: var(--good); font-size:0.85rem;">Richtige Antworten: ${escapeHtml(answers)}</div>`;
    } else if (q.type === "ip") {
      const answers = q.fields.map((f) => `${f.label}: ${f.answer}`).join(" &middot; ");
      correctAnswerLine = `<div style="margin-bottom:6px; color: var(--good); font-size:0.85rem;">${answers}</div>`;
    }
  }
  slot.innerHTML = `
    <div class="explanation-box">
      <strong>${correct ? "Richtig" : "Erklärung"}</strong>
      ${correctAnswerLine}
      ${escapeHtml(q.explanation)}
    </div>
  `;
}

function updateProgressTicks() {
  const ticks = document.querySelectorAll(".progress-tick");
  const t = ticks[state.current];
  if (t) {
    t.classList.remove("current");
    t.classList.add(state.answers[state.current].correct ? "done-correct" : "done-wrong");
  }
}

function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current += 1;
    state.answeredCurrent = false;
    state.currentSelection = null;
    render();
  } else {
    finishQuiz();
  }
}

/* ---------- Ergebnis-Screen ---------- */

function finishQuiz() {
  state.screen = "result";

  // Bestwerte pro betroffenem Thema speichern
  const byTopic = {};
  state.answers.forEach((a) => {
    const tid = a.question.topicId;
    if (!byTopic[tid]) byTopic[tid] = { correct: 0, total: 0 };
    byTopic[tid].total += 1;
    if (a.correct) byTopic[tid].correct += 1;
  });
  Object.keys(byTopic).forEach((tid) => {
    const pct = Math.round((byTopic[tid].correct / byTopic[tid].total) * 100);
    saveBestScore(tid, pct);
  });

  render();
}

function renderResult() {
  const total = state.answers.length;
  const correctCount = state.answers.filter((a) => a.correct).length;
  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const pass = percent >= 50;

  const topicResults = {};
  state.answers.forEach((a) => {
    const { topicId, topicTitle } = a.question;
    if (!topicResults[topicId]) topicResults[topicId] = { title: topicTitle, correct: 0, total: 0 };
    topicResults[topicId].total += 1;
    if (a.correct) topicResults[topicId].correct += 1;
  });

  const topicSummaryHtml = QUIZ_DATA
    .filter((topic) => topicResults[topic.id])
    .map((topic) => {
      const result = topicResults[topic.id];
      const topicPercent = Math.round((result.correct / result.total) * 100);
      return `
        <div class="topic-summary-item">
          <div class="topic-summary-head">
            <span>${escapeHtml(result.title)}</span>
            <strong>${result.correct}/${result.total}</strong>
          </div>
          <div class="topic-summary-track" role="progressbar" aria-label="${escapeHtml(result.title)}: ${topicPercent}% richtig" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${topicPercent}">
            <div class="topic-summary-fill ${topicPercent >= 50 ? "good" : "bad"}" style="width: ${topicPercent}%"></div>
          </div>
        </div>
      `;
    }).join("");

  const wrongAnswers = state.answers
    .map((a, i) => ({ ...a, index: i }))
    .filter((a) => !a.correct);

  const reviewHtml = wrongAnswers.length === 0
    ? `<p class="intro-text">Alle Fragen richtig beantwortet. Stark!</p>`
    : wrongAnswers.map((a) => {
        const q = a.question;
        let correctText = "";
        if (q.type === "mc") correctText = q.options[q.correct];
        else if (q.type === "text") correctText = q.accepted[0];
        else if (q.type === "blank") correctText = q.blanks.map((b) => b[0]).join(" / ");
        else if (q.type === "ip") correctText = q.fields.map((f) => `${f.label}: ${f.answer}`).join(" · ");

        return `
          <div class="review-item">
            <div class="review-q">${escapeHtml(q.question.replace(/___/g, "____"))}</div>
            <div class="review-your">Deine Antwort: ${escapeHtml(String(a.given || "(keine Angabe)"))}</div>
            <div class="review-correct">Richtig: ${escapeHtml(correctText)}</div>
            <div class="explanation-box">
              <strong>Erklärung</strong>
              ${escapeHtml(q.explanation)}
            </div>
          </div>
        `;
      }).join("");

  app.innerHTML = `
    <header class="app-header">
      <div><h1>Ergebnis</h1></div>
    </header>

    <div class="score-hero">
      <div class="score-big">${percent}%</div>
      <div class="score-sub">${correctCount} von ${total} Fragen richtig</div>
      <div class="score-verdict ${pass ? "pass" : "fail"}">${pass ? "Bestanden (≥ 50%)" : "Noch nicht bestanden"}</div>
    </div>

    <div class="result-actions">
      ${wrongAnswers.length > 0 ? `<button class="btn btn-primary" id="repeat-wrong-btn">${wrongAnswers.length} falsche Fragen wiederholen</button>` : ""}
      <button class="btn btn-secondary" id="restart-btn">Neue Runde starten</button>
    </div>

    <div class="section-label">Auswertung nach Thema</div>
    <div class="topic-summary">${topicSummaryHtml}</div>

    <div class="section-label">Falsch beantwortete Fragen (${wrongAnswers.length})</div>
    ${reviewHtml}
  `;

  document.getElementById("restart-btn").addEventListener("click", () => {
    state.screen = "setup";
    render();
  });

  const repeatWrongButton = document.getElementById("repeat-wrong-btn");
  if (repeatWrongButton) {
    repeatWrongButton.addEventListener("click", repeatWrongQuestions);
  }
}

function repeatWrongQuestions() {
  const wrongQuestions = state.answers
    .filter((a) => !a.correct)
    .map((a) => {
      const question = { ...a.question };
      delete question._shuffledOptions;
      return question;
    });

  state.questions = shuffle(wrongQuestions);
  state.current = 0;
  state.answers = [];
  state.screen = "quiz";
  state.answeredCurrent = false;
  state.currentSelection = null;
  render();
}

/* ---------- Router ---------- */

function render() {
  if (state.screen === "setup") renderSetup();
  else if (state.screen === "quiz") renderQuiz();
  else if (state.screen === "result") renderResult();
  window.scrollTo(0, 0);
}

render();
