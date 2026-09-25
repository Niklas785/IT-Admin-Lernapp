# IHK Prüfungstrainer

Ein kleines, werbefreies Übungs-Quiz für die IHK-Prüfung (Fachinformatik-Grundlagen).
Läuft komplett im Browser, keine Installation, kein Backend nötig.

**Themen aktuell:** IT-Sicherheit & Datenschutz, SQL-Grundlagen, IPv4-Adressen &
Subnetting, Netzwerkgrundlagen, IT-Grundlagen & Virtualisierung, Arbeitsgruppe/
Domäne & GPOs, Windows Server & AD-Verwaltung sowie PowerShell — insgesamt 596 Fragen in 8 Themen,
gemischt aus einfacher und mehrfacher Auswahl, Freitext, Lückentext,
Zuordnung, Reihenfolge und IPv4-Berechnungsaufgaben.

## Qualitätsdurchgang der 182 Prüfkandidaten (25.09.2026)

Nach Freigabe wurden 180 der 182 zusätzlichen Prüfkandidaten in `questions.js`
gezielt überarbeitet. Fachlich naheliegende Fehlvorstellungen ersetzen
offensichtlich themenfremde Ablenkantworten. Formulierungen sind vergleichbarer,
ohne Antworten künstlich auf dieselbe Länge zu bringen. Wo nötig wurden
Voraussetzungen in Aufgabe und Erklärung präzisiert, beispielsweise bei
Normalformen, Datenschutz-Folgenabschätzung, GPOs, FSRM und PowerShell-Remoting.

Zwei Fragen bleiben bewusst unverändert: `exam-net-02` (DHCP-Bindungen an
Netzwerkschnittstellen) und `base-036` (Verantwortung des SaaS-Kunden).
Ihre Optionen prüfen bereits sinnvolle fachliche Abgrenzungen auf Grundlagenniveau.
Die frühere Prüfliste in `output/Weitere_auffaellige_Auswahlfragen_2026-09-25.md`
ist damit abgearbeitet und als historischer Ausgangsstand gekennzeichnet.

Es bleiben 596 Fragen in acht Themen. Gegenüber dem Beginn dieses Durchgangs
sind 416 Fragen unverändert; IDs, richtige Antwortpositionen, Fragetypen,
Schwierigkeitszuordnungen und Themenverteilung wurden vollständig erhalten.
Grundlagen- und Wissensfragen wurden nicht durch zusätzliche Szenarien verdrängt.
Design, Navigation und Quizlogik (`index.html`, `style.css`, `app.js`) sind unverändert.
Das ZIP enthält den aktualisierten Stand der fünf App-Dateien.

Prüfungen: `tmp/test_quality_pass.js`, `tmp/test_quality_pass_browser.js`,
`tmp/validate_question_pool.js ps-` und `tmp/test_master_pool_browser.js ps-`.
Der Inhaltsvergleich kontrolliert sämtliche 180 Änderungen und die 416
unveränderten Fragen. Die Browsertests prüfen alle 720 Antwortvarianten der
überarbeiteten Fragen sowie den gesamten Pool mit 1.192 Richtig/Falsch-Bewertungen,
37 zusätzlichen Mehrfachauswahlfällen und 12.240 Auswahlkombinationen.
Alle 180 Fragen werden bei 320 und 375 Pixel Breite auf horizontalen Überlauf
geprüft; umfangreiche Beispiele aus jedem Thema werden zusätzlich visuell geprüft.
Keine Struktur- oder Browserfehler und keine automatischen Ähnlichkeitshinweise.
Die Ähnlichkeitsprüfung ist eine Textprüfung, kein Beweis für vollständige
inhaltliche Überschneidungsfreiheit. Die Überarbeitung ist eine redaktionelle
Qualitätsverbesserung, keine empirische Neukalibrierung des Schwierigkeitsgrads.

Referenzen für fachliche Präzisierungen:
[DSGVO, insbesondere Artikel 35](https://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX%3A02016R0679-20160504),
[FSRM-Dateigruppen](https://learn.microsoft.com/en-us/windows-server/storage/fsrm/define-file-groups-for-screening),
[DNS-Einstellungen für Domänencomputer](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/best-practices-for-dns-client-settings),
[DHCP-Failover und MCLT](https://learn.microsoft.com/en-us/powershell/module/dhcpserver/set-dhcpserverv4failover),
[PowerShell-Remoting über WS-Management](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7.5)
und [alternativer SSH-Transport](https://learn.microsoft.com/en-us/powershell/scripting/security/remoting/ssh-remoting-in-powershell?view=powershell-7.5).

## Vorheriger Durchgang: sieben gezielte Änderungen (25.09.2026)

Auf Grundlage der acht kommentierten Screenshots wurden genau sieben Fragen
überarbeitet; die übrigen 589 Fragen bleiben unverändert:

- Fünf Auswahlfragen zu Sicherheitsprinzipalen, Block Inheritance,
  Standardgateway/Router, Hyper-V-Prozessorkompatibilität und Checkpoint-Arten:
  vergleichbar formulierte, fachlich naheliegende Ablenkantworten statt
  offensichtlich themenfremder Optionen. Die richtige Antwort ist bei keiner
  dieser fünf Fragen mehr die eindeutig längste.
- SQL-Anführungszeichen: SQL Server mit QUOTED_IDENTIFIER ON als eindeutiger
  Kontext; zusätzlich Wortvarianten und zwei einfache Apostrophe als Zeichenpaar.
  Doppelte Anführungszeichen werden weiterhin nicht akzeptiert. Die Erklärung
  unterscheidet die Eingabe des Zeichenpaars vom leeren Textliteral im SQL-Code.
- GPO-Reihenfolge: die verräterische Merkhilfe LSDOU steht nur noch in der Erklärung.

Die SQL-Reihenfolgeaufgabe bleibt unverändert erhalten. Auch die zuvor ergänzte
Präfixantwort `30` neben `/30` bleibt erhalten und ist jetzt im ZIP enthalten.
Fragenzahl (596), IDs, Themen, Niveaus, Reihenfolge und Fragetypen sind unverändert.
Keine Änderungen an Design, Navigation oder Quizlogik.

Alle 336 Auswahlfragen mit eindeutig längster richtiger Antwort im Ausgangsstand
wurden zusätzlich auf schwache Ablenkantworten gesichtet. 182 weitere auffällige
Kandidaten wurden zunächst ausschließlich zur Information in
`output/Weitere_auffaellige_Auswahlfragen_2026-09-25.md` dokumentiert und damals
noch nicht verändert. Ihr anschließender Qualitätsdurchgang ist oben beschrieben.
Die Einordnung ist eine didaktische Einschätzung, kein objektiver Nachweis, dass
jede Frage ohne Vorwissen lösbar ist.

Prüfungen: `tmp/test_answer_review.js`, `tmp/test_answer_review_browser.js`,
`tmp/validate_question_pool.js ps-` und `tmp/test_master_pool_browser.js ps-`.
Genau sieben erlaubte Änderungen und die Unverändertheit aller anderen Fragen
wurden mit dem Ausgangsstand verglichen. 39 gezielte Antwortvarianten,
1.192 allgemeine Richtig/Falsch-Bewertungen, 37 zusätzliche Mehrfachauswahlfälle
und 12.240 Themen-/Niveau-/Rundenkombinationen erfolgreich geprüft.
Die sieben geänderten Fragen wurden bei 320 und 375 Pixel Breite auf horizontalen
Überlauf geprüft und bei 375 Pixel zusätzlich visuell kontrolliert.
Keine Struktur- oder Browserfehler im Test; keine automatischen Ähnlichkeitshinweise.

Fachliche Referenzen:
[Hyper-V-Prozessorkompatibilität](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/configure-processor-compatibility-mode),
[Checkpoints](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/checkpoints),
[GPO-Vererbung](https://learn.microsoft.com/en-us/powershell/module/grouppolicy/set-gpinheritance)
und [SQL-Textliterale](https://learn.microsoft.com/en-us/sql/t-sql/data-types/constants-transact-sql).

## PowerShell-Grundlagen (24.09.2026)

Aus `PowerShell_Grundlagen.docx` wurden 22 Fragen ergänzt, die jetzt im eigenen
Thema **PowerShell** stehen. Die IDs lauten `ps-001` bis `ps-022`;
die zugehörigen Abschnitte der Lernunterlage stehen an den Datenblöcken.
Die Word-Datei bleibt unverändert.

Das neue Thema bündelt zusätzlich sechs vorhandene Fragen zum Cmdlet-Namensschema,
zur objektbasierten Dienstfilterung, zu Get-Help und zu Remoting. Es enthält damit
28 Fragen; Windows Server & AD-Verwaltung enthält nun 125 und Arbeitsgruppe,
Domäne & GPOs 78 Fragen. Es wurde ausschließlich umgeordnet, nicht dupliziert.
AD-/GPO-/Serverrollen-spezifische Aufgaben bleiben in ihren Fachthemen.
Die bestehende Themenauswahl, ausgewogene Verteilung und Ergebnisauswertung
erkennen das neue Thema automatisch. Änderungen an der Quizlogik waren nicht nötig.
Vorhandene lokale Bestwerte bleiben als historische Ergebnisse erhalten;
PowerShell hat eine eigene, zunächst leere Bestwertung.

- Umgebung und Skriptstart: PowerShell/ISE und Aufruf aus dem aktuellen Ordner
- Grundlagen: Parameter/Argumente, Datentypen, Variablen und Anführungszeichen
- Kontrollstrukturen: Vergleiche, Bedingungen, Arrays, Schleifen, switch und Klammern
- Werkzeuge: Get-Command/Get-Member, Pipeline, Sortierung, Auswahl und Zählen
- Administration: Dateibefehle, Anhängen von Text, WhatIf/Confirm,
  gezieltes Prozessbeenden und Aufräumen der Konsolenanzeige

Die Ergänzung enthält 14 einfache Auswahlfragen, 6 Zuordnungen, eine Freitextfrage
und eine Mehrfachauswahl; 14 Grundlagen- und 8 Prüfungsniveau-Fragen.
Begriffsabfragen und kleine Codebeispiele ergänzen die vorhandenen Szenarien.
Get-Help, das Cmdlet-Namensschema und die einfache Dienstfilterung wurden nicht
nochmals als eigenständige Fragen aufgenommen. Alle bisherigen 574 Fragen bleiben
inhaltlich erhalten; abgesehen von der genannten Umordnung bleibt die Reihenfolge
der übrigen Fragen unverändert. Design, Navigation und Quizlogik sind
unverändert; die neuen Fragen verwenden die vorhandene Datenstruktur.

Aktuelle Typen: 472 einfache Auswahlfragen, 38 Mehrfachauswahlen (6,4 %),
34 Freitextfragen, 36 Zuordnungen, 8 Reihenfolgen, 5 Lückentexte und
3 mehrteilige IPv4-Berechnungen. Eine Zuordnungsaufgabe zählt als eine Frage.

Prüfungen: `tmp/validate_question_pool.js ps-`, `tmp/test_powershell_pool.js`,
`tmp/test_powershell_examples.ps1` und `tmp/test_master_pool_browser.js ps-`.
Keine Strukturfehler oder automatischen Ähnlichkeitshinweise; 15 ungefährliche
PowerShell-Beispiel- und Metadatenprüfungen erfolgreich. Im Browser wurden
1.192 Richtig/Falsch-Bewertungen, 37 zusätzliche Mehrfachauswahlfälle,
12.240 Auswahlkombinationen für acht Themen und 112 neue Antwortvarianten geprüft.
Zusätzlich wurden Auswahl, Start und Abbruch einer reinen PowerShell-Runde
mit allen 28 Fragen sowie die neue Themenzeile in der Handyansicht geprüft.
Alle 22 neuen Fragen wurden bei 375 Pixel Ansichtsbreite auf horizontalen
Überlauf geprüft; alle sechs neuen Zuordnungen und eine Codefrage zusätzlich
visuell kontrolliert. Keine Browserfehler im Test. Altbestand und unveränderte
App-Dateien wurden mit dem gesicherten Ausgangsstand verglichen.
Die Quizbeispiele werden ausschließlich angezeigt, nicht als PowerShell ausgeführt.

Fachliche Gegenprüfung unter anderem anhand der Microsoft-Dokumentation zu
[Anführungszeichen](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_quoting_rules),
[switch](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_switch)
und [automatischen Variablen](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables).
Das aktualisierte ZIP-Paket enthält die App einschließlich README, keine
Quelldokumente, Sicherungskopien oder Prüfskripte.

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

Typen nach dieser Ergänzung: 458 einfache Auswahlfragen, 37 Mehrfachauswahlen (6,4 %),
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
