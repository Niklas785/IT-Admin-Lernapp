# IHK Prüfungstrainer

Ein kleines, werbefreies Übungs-Quiz für die IHK-Prüfung (Fachinformatik-Grundlagen).
Läuft komplett im Browser, keine Installation, kein Backend nötig.

**Themen aktuell:** IT-Sicherheit & Datenschutz, SQL-Grundlagen, IPv4-Adressen &
Subnetting, Netzwerkgrundlagen, IT-Grundlagen & Virtualisierung, Arbeitsgruppe/
Domäne & GPOs sowie Windows Server & AD-Verwaltung — insgesamt 574 Fragen,
gemischt aus einfacher und mehrfacher Auswahl, Freitext, Lückentext,
Zuordnung, Reihenfolge und IPv4-Berechnungsaufgaben.

## Ergänzung aus den Aufgabendateien (23.09.2026)

Aus `Sammelmappe Server.pdf` und den Aufgabenbildern in `WLAntworten.docx`
wurden 15 eigenständige Lernziele ergänzt. Blau in Word und Grün/Rot in der PDF
wurden als Lösungsschlüssel gelesen, aber nicht ohne fachliche Prüfung übernommen.
Die Originaldateien bleiben unverändert. Die neuen IDs beginnen mit `exam-`;
PDF-Seiten und zugehörige Word-Aufgabennummern stehen direkt bei den Fragen.

- Netzwerkgrundlagen: 4 Fragen zu DHCP-Bereichsgruppierung, DHCP-Bindungen,
  DNS-Stammzone und hosts-Datei
- Domäne & GPOs: 4 Fragen zu PowerShell-Skripten, MSI-Softwarezuweisung,
  ADDSDeployment und Offline-Kompaktierung der AD-Datenbank
- Windows Server & AD-Verwaltung: 7 Fragen zu NTFS Lesen/Ausführen,
  PowerShell-Hilfe und Remoting, Volume-Einhängepunkten, privaten Hyper-V-Switches
  und PXE bei Generation-1-VMs

Die Ergänzung enthält 11 einfache Auswahlfragen, 3 Freitextfragen und eine
Zuordnung; 5 Grundlagen-, 8 Prüfungsniveau- und 2 Vertiefungsfragen.
Alle bisherigen 559 Fragen bleiben einschließlich ihrer Reihenfolge innerhalb
des jeweiligen Themenbereichs erhalten. Design, Navigation und Quizlogik wurden
nicht geändert. Neue Fragen werden an die passenden Themen angehängt.

Vorhandene Lernziele wie DORA, OSI, FSMO und APIPA wurden nicht erneut importiert.
Die PDF-Aufgaben 39, 41 und 42 bleiben wegen fehlender Case-Study-Abbildungen aus.
Problematische Vorlagen zu ReFS-Dateinamen, Aktivierung und pauschalen
Administratorrechten wurden nicht übernommen; widersprüchliche Angaben in
übernommenen Szenarien wurden präzisiert. Historische IPv4-Klassen wurden nicht
zusätzlich aufgenommen. Der Einzelabgleich liegt unter
`tmp/exam_sources_review/Pruefung-Aufgabendateien.md`.

Fachliche Gegenprüfung anhand von Microsoft-Dokumentation, unter anderem:
[DHCP-Bereiche](https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-scopes),
[DHCP-Bindungen](https://learn.microsoft.com/en-us/powershell/module/dhcpserver/set-dhcpserverv4binding),
[Softwareinstallation per GPO](https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software),
[ADDSDeployment](https://learn.microsoft.com/en-us/powershell/module/addsdeployment/install-addsdomaincontroller),
[AD-Datenbankwartung](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/ad-database-offline-defragmentation),
[Volume-Einhängepunkte](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/assign-a-mount-point-folder-path-to-a-drive)
und [Windows-Namensauflösung](https://learn.microsoft.com/en-us/windows-server/networking/dns/queries-lookups).

Aktuelle Typen: 458 einfache Auswahlfragen, 37 Mehrfachauswahlen (6,4 %),
33 Freitextfragen, 30 Zuordnungen, 8 Reihenfolgen, 5 Lückentexte und
3 mehrteilige IPv4-Berechnungen. Eine Zuordnungsaufgabe zählt als eine Frage.

Prüfung dieser Ergänzung: `tmp/validate_question_pool.js exam-`,
`tmp/test_master_pool_browser.js exam-` und `tmp/test_exam_pool.js`.
Ergebnis: keine Strukturfehler oder automatischen Ähnlichkeitshinweise;
1.148 Richtig/Falsch-Bewertungen, 6.096 Auswahlkombinationen und 86 zusätzliche
Antwortvarianten erfolgreich geprüft. Alle 15 neuen Fragen wurden bei 375 Pixel
Ansichtsbreite auf horizontalen Überlauf geprüft; die neue Zuordnung zusätzlich
visuell kontrolliert. Der Altbestand sowie die unveränderten App-Dateien wurden
mit dem gesicherten Ausgangsstand verglichen.
Das ZIP-Paket enthält die aktualisierte App, keine Quelldokumente oder Prüfskripte.

## Fragenpool-Abgleich mit der Masterdatei (22.09.2026)

Fachliche Grundlage der Ergänzungen: `Master_Lernskript_IT_Administration.pdf`,
Stand 21.09.2026. Die PDF wurde nicht verändert. Die 70 neuen Fragen tragen
IDs mit `master-`; Kapitel und Seiten stehen an den Datenblöcken in `questions.js`.

- DHCP-/DNS-Administration, Dienstports, Verkabelung und Funktechniken: 17 neue Fragen
- Hardware, Einheiten und Cloud-/Hybridverwaltung: 10 neue Fragen
- Schadsoftware, Täuschungsangriffe, mobile Geräte und Passwortspeicherung: 8 neue Fragen
- SQL-Datentypen, logische Verarbeitung und Ergebnisinterpretation: 6 neue Fragen
- IPv4-Sonderpräfixe und PAT: 2 neue Fragen
- AD-Identitäten, Gruppen, Profile und GPO-Vertiefung: 11 neue Fragen
- Speicher, Berechtigungen, Diagnose, UAC und VM-Ressourcen: 16 neue Fragen

Die Ergänzung enthält 31 Grundlagen-, 30 Prüfungsniveau- und 9 Vertiefungsfragen.
Begriffsabfragen ergänzen die bestehenden Szenarien. Zwölf Altfragen wurden
präzisiert oder inhaltlich neu ausgerichtet, unter anderem zu LTSC,
Dreiwegspiegelung, Normalisierung, Passwort-Kostenfaktor und GPO-Geltungsbereich.
Die bisherigen sieben Themen und alle bestehenden Frage-IDs bleiben erhalten.

Typen nach dem damaligen Masterdatei-Abgleich: 447 einfache Auswahlfragen, 37 Mehrfachauswahlen (6,6 %),
30 Freitextfragen, 29 Zuordnungen, 8 Reihenfolgen, 5 Lückentexte und
3 mehrteilige IPv4-Berechnungen. Eine Zuordnungsaufgabe zählt als eine Frage.

Geprüft wurden Datenstruktur, IDs, identische Fragetexte und Ähnlichkeitshinweise.
Der Browsertest bewertet jede Frage einmal richtig und einmal falsch, prüft
zusätzliche falsche Mehrfachantworten, alle Themen-/Niveau-/Rundenkombinationen,
Ergebnisse, Wiederholung und Abbruch. Die neuen Aufgaben wurden außerdem auf
horizontalen Überlauf bei 375 Pixel Ansichtsbreite geprüft.
Tests: `tmp/validate_question_pool.js` (Node.js) und
`tmp/test_master_pool_browser.js` (Node.js, Playwright und Microsoft Edge).

Der Ausbau schließt zentrale Lücken der Masterdatei, ist aber keine Zusage,
dass jedes Detail oder der gesamte mögliche IHK-Prüfungsstoff abgefragt wird.

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
