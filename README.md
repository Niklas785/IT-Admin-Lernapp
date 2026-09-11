# IHK Prüfungstrainer

Ein kleines, werbefreies Übungs-Quiz für die IHK-Prüfung (Fachinformatik-Grundlagen).
Läuft komplett im Browser, keine Installation, kein Backend nötig.

**Themen aktuell:** IT-Sicherheit & Datenschutz, SQL-Grundlagen, IPv4-Adressen &
Subnetting, Netzwerkgrundlagen, IT-Grundlagen & Virtualisierung, Arbeitsgruppe/
Domäne & GPOs sowie Windows Server & AD-Verwaltung — insgesamt 430 Fragen,
gemischt aus Multiple-Choice, Freitext,
Lückentext und IPv4-Berechnungsaufgaben.

## Auf GitHub hochladen & mit dem Handy nutzen (GitHub Pages)

1. Erstelle auf github.com ein neues, öffentliches Repository (z. B. `ihk-quiz`).
2. Lade die vier Dateien aus diesem Ordner hoch:
   `index.html`, `style.css`, `app.js`, `questions.js`
   (auf github.com reicht "Add file → Upload files", geht auch direkt vom Handy).
3. Im Repository: **Settings → Pages**.
4. Bei "Build and deployment" → Source: **Deploy from a branch** wählen,
   Branch: `main`, Ordner: `/ (root)` → **Save**.
5. Nach ca. 1 Minute ist die App erreichbar unter:
   `https://DEIN-BENUTZERNAME.github.io/ihk-quiz/`
6. Diesen Link auf dem Handy öffnen und als Lesezeichen auf den Homescreen
   legen ("Zum Home-Bildschirm hinzufügen") — fühlt sich dann wie eine App an.

Änderungen an den Dateien (z. B. neue Fragen) werden nach jedem Upload
automatisch neu veröffentlicht, meist innerhalb einer Minute.

## Neue Themen/Fragen hinzufügen

Du musst dafür **nur `questions.js` bearbeiten** — die Logik in `app.js` und
das Layout in `style.css`/`index.html` bleiben unangetastet.

Am Anfang von `questions.js` steht eine ausführliche Anleitung mit allen sieben
Fragetypen und Beispielen:

- `mc` – Multiple Choice (4 Antworten, 1 richtig)
- `text` – Freitext / kurze Antwort (z. B. eine Zahl oder ein Begriff)
- `blank` – Lückentext mit einer oder mehreren Lücken (`___` im Fragetext)
- `ip` – IPv4-Berechnung mit mehreren Teilantworten (Netz, Broadcast, Hosts …)
- `multi` – Mehrfachauswahl (alle richtigen Antworten wählen)
- `order` – Begriffe oder Schritte mit Pfeilen in die richtige Reihenfolge bringen
- `match` – Begriffe und Erklärungen eindeutig einander zuordnen

Ein neues Thema fügst du als weiteres Objekt in das `QUIZ_DATA`-Array ein:

```js
{
  id: "neues-thema",
  title: "Anzeige-Name des Themas",
  questions: [ /* Fragen hier */ ]
}
```

Das Thema erscheint danach automatisch in der Themenauswahl der App — es ist
keine weitere Anpassung nötig.

## Funktionen der App

- Themenauswahl (auch mehrere Themen gleichzeitig kombinierbar)
- Anzahl der Fragen wählbar (10 / 20 / 30 / 40 / 50 / alle), mit möglichst
  gleichmäßiger Verteilung über mehrere ausgewählte Themen
- Schwierigkeitsfilter: Grundlagen, Prüfungsniveau, Vertiefung oder alle Niveaus
- Reihenfolge wählbar (gemischt oder wie einsortiert)
- Mehrfachauswahl bei gezielten Szenariofragen; eine Antwort ist nur richtig,
  wenn alle zutreffenden Optionen und keine falsche Option gewählt wurden
- Reihenfolgeaufgaben bei eindeutigen Abläufen, mit touch-freundlichen Pfeilen
- Zuordnungsaufgaben für eindeutig verknüpfbare Begriffe und Erklärungen
- Direktes Feedback nach jeder Frage inkl. Erklärung
- Fortschrittsanzeige (grün = richtig, rot = falsch beantwortet)
- Abschluss-Auswertung mit Gesamt- und Themenwerten sowie Wiederholung der
  falsch beantworteten Fragen samt Erklärung
- Merkt sich den besten Prozentwert je Thema lokal auf dem Gerät
  (kein Server, keine Anmeldung, keine Cloud-Synchronisierung)

## Dateiübersicht

| Datei          | Zweck                                                       |
|----------------|--------------------------------------------------------------|
| `index.html`   | Grundgerüst, bindet CSS/JS ein                               |
| `style.css`    | Gesamtes Design (mobil-optimiert)                             |
| `app.js`       | Quiz-Logik (Themenauswahl, Auswertung, Anzeige) – i. d. R. nicht bearbeiten |
| `questions.js` | **Fragen-Datenbank** – hier trägst du neue Themen/Fragen ein  |
