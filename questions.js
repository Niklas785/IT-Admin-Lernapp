/*
  ============================================================
  FRAGEN-DATENBANK
  ============================================================
  Hier fügst du später neue Themen und Fragen hinzu.
  Du musst dafür NUR diese Datei bearbeiten, nicht app.js oder index.html.

  Ein neues Thema sieht so aus:

  {
    id: "mein-thema",              // eindeutiger Kurzname, keine Leerzeichen
    title: "Mein Thema",           // wird in der App angezeigt
    questions: [ ... ]             // Liste von Fragen, siehe Typen unten
  }

  ------------------------------------------------------------
  FRAGE-TYPEN
  ------------------------------------------------------------

  1) Multiple Choice (type: "mc")
  {
    type: "mc",
    question: "Frage hier?",
    options: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
    correct: 0,                     // Index der richtigen Antwort (0 = erste)
    explanation: "Kurze Erklärung, warum das richtig ist."
  }

  2) Freitext / kurze Antwort (type: "text")
  {
    type: "text",
    question: "Frage hier?",
    accepted: ["antwort1", "alternative schreibweise"], // klein geschrieben, ohne Sonderzeichen-Zwang
    explanation: "Erklärung."
  }
  Hinweis: Beim Prüfen wird Groß-/Kleinschreibung ignoriert und Leerzeichen am
  Rand entfernt. Zahlen bitte als Ziffern in "accepted" angeben (z.B. "24").

  3) Lückentext mit mehreren Lücken (type: "blank")
  {
    type: "blank",
    question: "Ein Text mit ___ und noch ___ Lücken.", // ___ markiert jede Lücke
    blanks: [["antwort1"], ["antwort2", "alternative2"]], // pro Lücke eine Liste möglicher Antworten
    explanation: "Erklärung."
  }

  4) IPv4-Berechnung mit mehreren Teilantworten (type: "ip")
  {
    type: "ip",
    question: "Gegeben: 192.168.10.70/26. Berechne:",
    fields: [
      { label: "Netzwerkadresse", answer: "192.168.10.64" },
      { label: "Broadcastadresse", answer: "192.168.10.127" },
      { label: "Erster nutzbarer Host", answer: "192.168.10.65" },
      { label: "Letzter nutzbarer Host", answer: "192.168.10.126" },
      { label: "Anzahl nutzbarer Hosts", answer: "62" }
    ],
    explanation: "Erklärung des Rechenwegs."
  }

  5) Mehrfachauswahl (type: "multi")
  {
    type: "multi",
    question: "Welche Aussagen treffen zu?",
    options: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
    correct: [0, 2],                // alle richtigen Indizes
    explanation: "Kurze Erklärung, warum diese Antworten richtig sind."
  }
  ============================================================
*/

const QUIZ_DATA = [
  // ============================================================
  // THEMA 1: IT-SICHERHEIT & DATENSCHUTZ
  // ============================================================
  {
    id: "it-sicherheit",
    title: "IT-Sicherheit & Datenschutz",
    questions: [
      {
        type: "mc",
        question: "Ein Unternehmen sucht eine deutsche Bundesbehörde für Empfehlungen, Standards und Warnungen zur IT-Sicherheit. Welche Stelle ist dafür zuständig?",
        options: [
          "Bundesamt für Sicherheit in der Informationstechnik",
          "Behörde für Standards und Internet",
          "Bundesinstitut für Software und Informatik",
          "Bund-Sicherheits-Initiative"
        ],
        correct: 0,
        explanation: "Das BSI ist die zentrale deutsche Behörde für IT- und Cybersicherheit. Die Aufgabe ist wichtiger als das bloße Auswendiglernen der Abkürzung."
      },
      {
        type: "mc",
        question: "Welche Aufgabe gehört NICHT zum BSI?",
        options: [
          "Veröffentlichung von Sicherheitsstandards und Empfehlungen",
          "Vergabe von Internet-Domains (.de)",
          "Maßnahmen zum Schutz vor Cyberangriffen entwickeln",
          "Richtlinien für IT-Sicherheit herausgeben"
        ],
        correct: 1,
        explanation: "Die Vergabe von .de-Domains übernimmt die DENIC, nicht das BSI."
      },
      {
        type: "blank",
        question:
          "Die drei Schutzziele der Informationssicherheit sind ___, ___ und ___.",
        blanks: [
          ["vertraulichkeit"],
          ["integrität", "integritaet"],
          ["verfügbarkeit", "verfuegbarkeit"]
        ],
        explanation:
          "Vertraulichkeit (nur Berechtigte dürfen zugreifen), Integrität (Daten dürfen nicht unbefugt verändert werden), Verfügbarkeit (Systeme müssen bei Bedarf erreichbar sein)."
      },
      {
        type: "mc",
        question:
          "Nur die Personalabteilung darf Gehaltsdaten einsehen. Welches Schutzziel beschreibt das?",
        options: ["Verfügbarkeit", "Integrität", "Vertraulichkeit", "Authentizität"],
        correct: 2,
        explanation: "Zugriff nur für berechtigte Personen = Vertraulichkeit."
      },
      {
        type: "mc",
        question:
          "Ein Mitarbeiter darf seine eigenen Gehaltsdaten nicht selbst verändern können. Welches Schutzziel ist das?",
        options: ["Integrität", "Verfügbarkeit", "Vertraulichkeit", "Verbindlichkeit"],
        correct: 0,
        explanation:
          "Integrität bedeutet: Informationen dürfen nicht unbefugt verändert oder manipuliert werden."
      },
      {
        type: "text",
        question:
          "Ein nichtöffentliches Unternehmen in Deutschland beschäftigt in der Regel Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten. Ab welcher Anzahl greift hierfür grundsätzlich die Benennungspflicht nach § 38 BDSG? (nur Zahl)",
        accepted: ["20"],
        explanation: "§ 38 BDSG nennt für diesen Fall mindestens 20 Personen. Unabhängig davon können weitere gesetzliche Fälle eine Benennung erfordern."
      },
      {
        type: "mc",
        question:
          "Welche Position führt typischerweise zu einem Interessenkonflikt mit dem Amt des Datenschutzbeauftragten, weil sie über Zwecke und Mittel der Verarbeitung entscheidet?",
        options: [
          "Auszubildender im Vertrieb",
          "Geschäftsführer",
          "Empfangsmitarbeiter",
          "Werkstudent im Marketing"
        ],
        correct: 1,
        explanation:
          "Die Geschäftsführung entscheidet typischerweise über Zwecke und Mittel der Verarbeitung. Das kollidiert mit der unabhängigen Kontrollfunktion des Datenschutzbeauftragten."
      },
      {
        type: "blank",
        question:
          "Bei einer Auftragsverarbeitung beauftragt ein Unternehmen einen ___ Dienstleister damit, personenbezogene Daten im ___ und nach ___ des Unternehmens zu verarbeiten.",
        blanks: [["externen"], ["auftrag"], ["weisung"]],
        explanation:
          "Der Dienstleister entscheidet dabei nicht selbst über den Zweck der Datenverarbeitung."
      },
      {
        type: "mc",
        question:
          "Ein Unternehmen speichert Kundendaten bei einem Cloud-Anbieter. Wie werden die beiden Rollen laut DSGVO bezeichnet?",
        options: [
          "Unternehmen = Auftragsverarbeiter, Cloud-Anbieter = Verantwortlicher",
          "Unternehmen = Verantwortlicher, Cloud-Anbieter = Auftragsverarbeiter",
          "Beide sind gemeinsam Verantwortliche ohne Unterschied",
          "Unternehmen = Betroffener, Cloud-Anbieter = Verantwortlicher"
        ],
        correct: 1,
        explanation:
          "Das Unternehmen entscheidet über den Zweck (Verantwortlicher), der Cloud-Anbieter verarbeitet nur im Auftrag (Auftragsverarbeiter)."
      },
      {
        type: "mc",
        question:
          "Bei welchem Dienstleister liegt normalerweise KEINE Auftragsverarbeitung vor?",
        options: [
          "Externer IT-Dienstleister mit Zugriff auf Kundendaten",
          "Newsletter-Versanddienstleister",
          "Steuerberater",
          "Cloud-Speicher mit Kundendaten"
        ],
        correct: 2,
        explanation:
          "Steuerberater und Rechtsanwälte handeln in der Regel nicht nach Weisung, sondern eigenverantwortlich – daher liegt keine klassische AV vor."
      },
      {
        type: "mc",
        question: "Was ist Malware?",
        options: [
          "Ein Programm zur Datensicherung",
          "Schädliche Software, die Systeme stört oder Daten stiehlt",
          "Ein Verschlüsselungsverfahren",
          "Ein Netzwerkprotokoll"
        ],
        correct: 1,
        explanation:
          "Malware bezeichnet schädliche Software, die Computersysteme stören, Informationen stehlen oder unbefugten Zugriff ermöglichen soll."
      },
      {
        type: "mc",
        question:
          "Max verschlüsselt eine Nachricht an dich. Mit welchem Schlüssel muss er das tun?",
        options: [
          "Mit seinem eigenen privaten Schlüssel",
          "Mit deinem öffentlichen Schlüssel",
          "Mit deinem privaten Schlüssel",
          "Mit einem gemeinsamen Passwort"
        ],
        correct: 1,
        explanation:
          "Verschlüsselt wird mit dem öffentlichen Schlüssel des Empfängers; entschlüsseln kann nur der Empfänger mit seinem privaten Schlüssel."
      }
    ]
  },

  // ============================================================
  // THEMA 2: SQL-GRUNDLAGEN
  // ============================================================
  {
    id: "sql",
    title: "SQL-Grundlagen",
    questions: [
      {
        type: "mc",
        question: "Welcher Befehl liest bzw. ruft Daten aus einer Tabelle ab, ohne sie zu verändern?",
        options: ["UPDATE", "SELECT", "INSERT INTO", "DELETE"],
        correct: 1,
        explanation: "SELECT dient nur dem Auslesen von Daten und verändert nichts."
      },
      {
        type: "mc",
        question: "Welcher Befehl fügt neue Datensätze in eine Tabelle ein?",
        options: ["INSERT INTO", "CREATE", "UPDATE", "ALTER"],
        correct: 0,
        explanation: "INSERT INTO fügt neue Zeilen (Datensätze) hinzu."
      },
      {
        type: "mc",
        question: "Was passiert, wenn man ein UPDATE ohne WHERE-Klausel ausführt?",
        options: [
          "Es passiert nichts, SQL verlangt eine WHERE-Klausel",
          "Nur der erste Datensatz wird geändert",
          "Alle Datensätze der Tabelle werden geändert",
          "Die Tabelle wird gelöscht"
        ],
        correct: 2,
        explanation: "Ohne WHERE bezieht sich UPDATE auf alle Zeilen der Tabelle – das ist ein häufiger Fehler."
      },
      {
        type: "mc",
        question: "Was passiert, wenn man DELETE FROM Tabelle ohne WHERE ausführt?",
        options: [
          "Alle Datensätze werden gelöscht, die Tabelle selbst bleibt bestehen",
          "Die gesamte Tabelle inkl. Struktur wird gelöscht",
          "Es wird nur der erste Datensatz gelöscht",
          "Der Befehl wird ohne Effekt ignoriert"
        ],
        correct: 0,
        explanation: "DELETE ohne WHERE löscht alle Zeilen, die Tabellenstruktur bleibt aber erhalten (anders als DROP TABLE)."
      },
      {
        type: "mc",
        question: "Was ist der Unterschied zwischen WHERE und HAVING?",
        options: [
          "Es gibt keinen Unterschied",
          "WHERE filtert einzelne Zeilen vor der Gruppierung, HAVING filtert Gruppen nach GROUP BY",
          "HAVING filtert Zeilen, WHERE filtert Gruppen",
          "WHERE funktioniert nur mit Zahlen, HAVING nur mit Text"
        ],
        correct: 1,
        explanation: "Merksatz: WHERE filtert Rohdaten, HAVING filtert das Ergebnis der Gruppierung."
      },
      {
        type: "mc",
        question: "Wofür wird GROUP BY verwendet?",
        options: [
          "Zum Sortieren der Ergebnisse",
          "Zum Verbinden zweier Tabellen",
          "Um Datensätze mit gleichen Werten zu Gruppen zusammenzufassen",
          "Um Duplikate zu entfernen"
        ],
        correct: 2,
        explanation: "GROUP BY fasst z. B. alle Kunden je Land zu einer Gruppe zusammen."
      },
      {
        type: "blank",
        question:
          "In welcher Schreibreihenfolge werden die fehlenden Teile einer SELECT-Abfrage ergänzt? SELECT, ___, JOIN, WHERE, ___, HAVING, ___.",
        blanks: [["from"], ["group by"], ["order by"]],
        explanation:
          "Das ist die übliche Schreibreihenfolge. Die logische Verarbeitung einer Abfrage beginnt dagegen bei den Datenquellen aus FROM und JOIN."
      },
      {
        type: "mc",
        question: "Was ist der Unterschied zwischen COUNT(*) und COUNT(Spalte)?",
        options: [
          "Kein Unterschied",
          "COUNT(*) zählt alle Zeilen, COUNT(Spalte) zählt nur Werte, die in dieser Spalte nicht NULL sind",
          "COUNT(*) funktioniert nur mit Zahlen",
          "COUNT(Spalte) zählt immer alle Zeilen der Tabelle"
        ],
        correct: 1,
        explanation: "COUNT(Spalte) ignoriert NULL-Werte in dieser Spalte, COUNT(*) zählt jede Zeile."
      },
      {
        type: "mc",
        question: "Wofür steht COUNT(DISTINCT Land)?",
        options: [
          "Zählt alle Länder mehrfach",
          "Zählt, wie viele unterschiedliche Länder vorkommen",
          "Löscht doppelte Länder aus der Tabelle",
          "Sortiert die Länder alphabetisch"
        ],
        correct: 1,
        explanation: "DISTINCT sorgt dafür, dass nur unterschiedliche (verschiedene) Werte gezählt werden."
      },
      {
        type: "mc",
        question: "Welche Zeilen liefert ein INNER JOIN zwischen Kunden und Bestellungen?",
        options: [
          "Alle Kunden, auch ohne Bestellung",
          "Nur Kunden, die auch mindestens eine Bestellung haben",
          "Alle Bestellungen, auch ohne zugehörigen Kunden",
          "Jede Kombination aus jedem Kunden mit jeder Bestellung"
        ],
        correct: 1,
        explanation: "INNER JOIN zeigt nur Datensätze, bei denen die Verknüpfung in beiden Tabellen einen Treffer hat."
      },
      {
        type: "mc",
        question: "Was passiert bei einem LEFT JOIN, wenn ein Kunde keine Bestellung hat?",
        options: [
          "Der Kunde wird komplett ausgeblendet",
          "Der Kunde erscheint trotzdem, die Bestellspalten sind NULL",
          "Es kommt zu einem Fehler",
          "Der Kunde wird automatisch gelöscht"
        ],
        correct: 1,
        explanation: "LEFT JOIN zeigt alle Zeilen der linken Tabelle, auch ohne Treffer in der rechten Tabelle."
      },
      {
        type: "text",
        question:
          "Bei einem CROSS JOIN werden 10 Kunden mit 20 Produkten kombiniert. Wie viele Kombinationen entstehen? (nur Zahl)",
        accepted: ["200"],
        explanation: "CROSS JOIN kombiniert jede Zeile mit jeder: 10 × 20 = 200."
      },
      {
        type: "mc",
        question: "Was ist der Unterschied zwischen UNION und UNION ALL?",
        options: [
          "UNION entfernt Duplikate, UNION ALL behält sie",
          "UNION ALL entfernt Duplikate, UNION behält sie",
          "Kein Unterschied, nur Schreibweise",
          "UNION funktioniert nur mit einer Tabelle"
        ],
        correct: 0,
        explanation: "UNION prüft auf Duplikate und entfernt sie, UNION ALL ist meist schneller, da keine Prüfung stattfindet."
      },
      {
        type: "mc",
        question: "Was bedeutet die 1. Normalform (1NF)?",
        options: [
          "Jede Zelle enthält genau einen (atomaren) Wert",
          "Es darf keine Primärschlüssel geben",
          "Alle Spalten müssen Zahlen enthalten",
          "Jede Tabelle darf nur eine Spalte haben"
        ],
        correct: 0,
        explanation: "1NF: 1 Zelle = 1 Wert, keine Mehrfachwerte oder Listen in einer Zelle."
      },
      {
        type: "mc",
        question: "Was fordert die 2. Normalform (2NF) bei zusammengesetzten Primärschlüsseln?",
        options: [
          "Alle Nicht-Schlüsselattribute müssen vom gesamten Primärschlüssel abhängen",
          "Es darf nur einen Primärschlüssel pro Datenbank geben",
          "Jede Spalte muss eindeutig sein",
          "Fremdschlüssel sind verboten"
        ],
        correct: 0,
        explanation: "2NF vermeidet Abhängigkeiten von nur einem Teil eines zusammengesetzten Schlüssels."
      },
      {
        type: "mc",
        question: "Worum geht es bei der 3. Normalform (3NF)?",
        options: [
          "Nicht-Schlüsselattribute sollen nicht von anderen Nicht-Schlüsselattributen abhängen",
          "Tabellen dürfen keine Fremdschlüssel enthalten",
          "Jede Tabelle braucht mindestens zwei Primärschlüssel",
          "Text darf nicht länger als 50 Zeichen sein"
        ],
        correct: 0,
        explanation: "3NF vermeidet transitive Abhängigkeiten wie KundenID → PLZ → Ort."
      },
      {
        type: "mc",
        question: "Wie müssen Spaltennamen mit Leerzeichen in SQL Server geschrieben werden?",
        options: [
          "In runden Klammern ()",
          "In eckigen Klammern []",
          "In geschweiften Klammern {}",
          "Mit Unterstrich statt Leerzeichen, keine Klammern nötig"
        ],
        correct: 1,
        explanation: "Beispiel: SELECT [meine Spalte] FROM Kunden; — ohne eckige Klammern wird es als zwei Bestandteile interpretiert."
      },
      {
        type: "mc",
        question: "Was findet die Bedingung WHERE Position LIKE '%vertrieb%'?",
        options: [
          "Nur Werte, die exakt 'vertrieb' heißen",
          "Werte, die irgendwo im Text die Zeichenfolge 'vertrieb' enthalten",
          "Nur Werte, die mit 'vertrieb' beginnen",
          "Nur Werte, die mit 'vertrieb' enden"
        ],
        correct: 1,
        explanation: "% vor und nach dem Begriff bedeutet: die Zeichenfolge darf irgendwo im Text vorkommen."
      },
      {
        type: "mc",
        question: "Was bedeutet NULL in einer Datenbankspalte?",
        options: [
          "Der Wert ist 0",
          "Der Wert ist ein leerer Text ''",
          "Es ist kein Wert vorhanden / unbekannt",
          "Die Spalte existiert nicht"
        ],
        correct: 2,
        explanation: "NULL ist nicht dasselbe wie 0 oder ein leerer String – es bedeutet 'kein Wert vorhanden'."
      },
      {
        type: "text",
        question:
          "Wie werden Textwerte bei INSERT INTO in SQL geschrieben – mit welchem Zeichen umschlossen? (z. B. 'Max')",
        accepted: ["einfache anführungszeichen", "apostroph", "'", "hochkomma"],
        explanation: "Textwerte stehen in einfachen Anführungszeichen ('...'), Zahlen dagegen ohne Anführungszeichen."
      }
    ]
  },

  // ============================================================
  // THEMA 3: IPv4-ADRESSEN & SUBNETTING
  // ============================================================
  {
    id: "ipv4",
    title: "IPv4-Adressen & Subnetting",
    questions: [
      {
        type: "text",
        question: "Aus wie vielen Bits besteht eine IPv4-Adresse insgesamt? (nur Zahl)",
        accepted: ["32"],
        explanation: "Eine IPv4-Adresse besteht aus 4 Blöcken zu je 8 Bit = 32 Bit."
      },
      {
        type: "mc",
        question: "Wofür steht eine '1' in der Subnetzmaske (binär)?",
        options: ["Hostanteil", "Netzwerkanteil", "Broadcastanteil", "Sie ist ungültig"],
        correct: 1,
        explanation: "1 = Netzwerkanteil, 0 = Hostanteil. Merksatz: 'Alle 1en zuerst, alle 0en danach.'"
      },
      {
        type: "text",
        question: "Welche Subnetzmaske entspricht /24? (Format x.x.x.x)",
        accepted: ["255.255.255.0"],
        explanation: "/24 bedeutet 24 Einsen + 8 Nullen = 255.255.255.0."
      },
      {
        type: "text",
        question: "Welche Blockgröße hat ein /26-Subnetz im letzten Oktett? (nur Zahl)",
        accepted: ["64"],
        explanation: "Die /26-Maske endet auf 192. Die Blockgröße ergibt sich aus 256 − 192 = 64; Netze beginnen daher bei 0, 64, 128 und 192."
      },
      {
        type: "text",
        question: "Wie viele IPv4-Adressen umfasst ein /28-Subnetz insgesamt, einschließlich Netzwerk- und Broadcastadresse? (nur Zahl)",
        accepted: ["16"],
        explanation: "Ein /28 hat vier Host-Bits und damit 2^4 = 16 Adressen insgesamt; klassisch sind davon 14 als Hostadressen nutzbar."
      },
      {
        type: "text",
        question: "Wie lautet die Formel für die Anzahl nutzbarer Hosts in einem Subnetz? (Format: 2^n-2)",
        accepted: ["2^n-2", "2^n - 2", "2n-2"],
        explanation: "n = Anzahl der Host-Bits. Zwei Adressen (Netzwerk- und Broadcastadresse) sind nicht nutzbar."
      },
      {
        type: "text",
        question: "Wie viele Host-Bits hat ein /24-Netz? (nur Zahl)",
        accepted: ["8"],
        explanation: "32 − 24 = 8 Host-Bits."
      },
      {
        type: "text",
        question: "Wie viele nutzbare Hosts hat ein /27-Netz? (nur Zahl)",
        accepted: ["30"],
        explanation: "32 − 27 = 5 Host-Bits → 2⁵ − 2 = 30 nutzbare Hosts."
      },
      {
        type: "text",
        question: "Eine klassische Punkt-zu-Punkt-Verbindung benötigt genau zwei nutzbare IPv4-Hostadressen. Welches Präfix wird dafür traditionell verwendet?",
        accepted: ["/30"],
        explanation: "Ein /30 hat vier Adressen: Netzwerkadresse, zwei nutzbare Hostadressen und Broadcastadresse."
      },
      {
        type: "blank",
        question:
          "Bei einem /23-Netz bleiben ___ Host-Bits übrig, das ergibt ___ nutzbare Host-Adressen.",
        blanks: [["9"], ["510"]],
        explanation: "32 − 23 = 9 Bit → 2⁹ = 512 Kombinationen, minus 2 (Netz + Broadcast) = 510 nutzbare Hosts."
      },
      {
        type: "text",
        question:
          "Wie viele verschiedene IPv4-Adressen gibt es insgesamt (2^32)? (nur Ziffern, ohne Punkte)",
        accepted: ["4294967296"],
        explanation: "2³² = 4.294.967.296 mögliche Kombinationen."
      },
      {
        type: "text",
        question: "Wandle die Binärzahl 10111010 in eine Dezimalzahl um. (nur Zahl)",
        accepted: ["186"],
        explanation: "128+32+16+8+2 = 186 (Stellenwerte: 128,64,32,16,8,4,2,1)."
      },
      {
        type: "text",
        question:
          "Bei einer Subnetzmaske endet ein Oktett auf 192 (z. B. 255.255.255.192). Wie groß ist die Blockgröße der Subnetze (in 64er-Schritten o. Ä.)? Rechnung: 256 − 192 = ? (nur Zahl)",
        accepted: ["64"],
        explanation: "256 − 192 = 64. Die Subnetze beginnen dadurch immer in 64er-Schritten (0, 64, 128, 192)."
      },
      {
        type: "ip",
        question: "Ein Drucker hat die Adresse 192.168.10.50/24. Bestimme die wesentlichen Grenzen seines Subnetzes:",
        fields: [
          { label: "Netzwerkadresse", answer: "192.168.10.0" },
          { label: "Broadcastadresse", answer: "192.168.10.255" },
          { label: "Anzahl nutzbarer Hosts", answer: "254" }
        ],
        explanation:
          "/24 lässt die ersten drei Blöcke unverändert. Der letzte Block wird für das Netz auf 0 und für den Broadcast auf 255 gesetzt; daraus folgen 254 nutzbare Hosts."
      },
      {
        type: "ip",
        question: "Gegeben: IP-Adresse 192.168.10.70 mit Subnetzmaske /26. Berechne:",
        fields: [
          { label: "Netzwerkadresse", answer: "192.168.10.64" },
          { label: "Broadcastadresse", answer: "192.168.10.127" },
          { label: "Erster nutzbarer Host", answer: "192.168.10.65" },
          { label: "Letzter nutzbarer Host", answer: "192.168.10.126" },
          { label: "Anzahl nutzbarer Hosts", answer: "62" }
        ],
        explanation:
          "Blockgröße 256−192=64. Die Subnetze beginnen bei 0/64/128/192. 70 liegt zwischen 64 und 127 → Netzwerk 192.168.10.64, Broadcast .127, Hosts .65–.126, macht 62 nutzbare Hosts (2⁶−2)."
      },
      {
        type: "ip",
        question: "Für den Host 10.20.30.40/28 prüfst du den Subnetzzuschnitt. Berechne:",
        fields: [
          { label: "Blockgröße im letzten Oktett", answer: "16" },
          { label: "Netzwerkadresse", answer: "10.20.30.32" },
          { label: "Broadcastadresse", answer: "10.20.30.47" },
          { label: "Nächstes Subnetz", answer: "10.20.30.48" }
        ],
        explanation:
          "Bei /28 beträgt die Blockgröße 256−240 = 16. Die Subnetze beginnen bei 0, 16, 32 und 48. Die .40 liegt im Bereich .32 bis .47; das nächste Subnetz beginnt bei .48."
      },
      {
        type: "mc",
        question: "Was gilt in einem klassischen IPv4-Subnetz mit nutzbaren Hostadressen für Netzwerk- und Broadcastadresse?",
        options: [
          "Sie können ganz normal an Hosts vergeben werden",
          "Sie stehen nicht als Host-Adressen zur Verfügung",
          "Sie werden für DNS-Server reserviert",
          "Sie existieren nur bei /24-Netzen"
        ],
        correct: 1,
        explanation: "Deshalb wird im klassischen Fall bei der Host-Formel 2 abgezogen: 2ⁿ − 2. Sonderfälle wie /31 sind hier nicht gemeint."
      }
    ]
  },

  // ============================================================
  // THEMA 4: NETZWERKGRUNDLAGEN (Topologien, Komponenten, Protokolle)
  // ============================================================
  {
    id: "netzwerke",
    title: "Netzwerkgrundlagen",
    questions: [
      {
        type: "mc",
        question: "Bei welcher Topologie sind keine aktiven Netzwerkkomponenten notwendig?",
        options: ["Stern-Topologie", "Bus-Topologie", "Hierarchische Topologie", "Ring-Topologie mit Switch"],
        correct: 1,
        explanation: "Bei der Bus-Topologie werden die Computer direkt verbunden, ohne Hub/Switch/Router."
      },
      {
        type: "mc",
        question: "Was ist ein großer Nachteil der Bus-Topologie?",
        options: [
          "Sehr hohe Kosten durch viele Kabel",
          "Ein einziger Kabeldefekt legt die gesamte Verbindung lahm",
          "Es können keine neuen Geräte hinzugefügt werden",
          "Sie funktioniert nur mit Glasfaser"
        ],
        correct: 1,
        explanation: "Bei der Bus-Topologie führt ein Kabeldefekt zum Ausfall des gesamten Netzes; außerdem lassen sich Pakete leicht abhören."
      },
      {
        type: "mc",
        question: "Was passiert bei der Stern-Topologie, wenn ein einzelner Client ausfällt?",
        options: [
          "Das gesamte Netzwerk fällt aus",
          "Das Netzwerk funktioniert für die übrigen Clients weiter",
          "Der zentrale Verteiler muss neu gestartet werden",
          "Alle anderen Clients verlieren ihre IP-Adresse"
        ],
        correct: 1,
        explanation: "Nur bei Ausfall der aktiven Netzwerkkomponente (z. B. Switch) ist der dahinterliegende Teil betroffen, nicht bei Ausfall eines einzelnen Clients."
      },
      {
        type: "mc",
        question: "Was ist eine hierarchische (erweiterte Stern-)Topologie?",
        options: [
          "Ein einzelner Ring ohne Verzweigung",
          "Mehrere Stern-Segmente, deren Zentralknoten an einem übergeordneten Zentralknoten hängen",
          "Ein Netzwerk komplett ohne Verkabelung",
          "Ein Netzwerk mit nur zwei Geräten"
        ],
        correct: 1,
        explanation: "Mehrere kleine Sterne werden zu einem größeren Stern verbunden; fällt der zentrale Knoten aus, bleiben die einzelnen Segmente arbeitsfähig."
      },
      {
        type: "mc",
        question: "Was ist der zentrale Unterschied zwischen Hub und Switch?",
        options: [
          "Ein Hub sendet Daten gezielt nur an den richtigen Port, ein Switch an alle Ports",
          "Ein Switch trifft die Weiterleitung anhand gelernter MAC-Adressen, ein Hub sendet an alle Ports",
          "Es gibt keinen technischen Unterschied",
          "Ein Hub arbeitet auf OSI-Schicht 3, ein Switch auf Schicht 1"
        ],
        correct: 1,
        explanation: "Ein Switch merkt sich MAC-Adressen in der Source Address Table (SAT) und leitet gezielt weiter; ein Hub sendet an alle Ports (logisch wie ein Bus)."
      },
      {
        type: "mc",
        question: "Auf welcher OSI-Schicht arbeitet ein einfacher (Layer-2-)Switch hauptsächlich?",
        options: ["Schicht 1 – Physical Layer", "Schicht 2 – Sicherungsschicht", "Schicht 3 – Vermittlungsschicht", "Schicht 7 – Anwendungsschicht"],
        correct: 1,
        explanation: "Layer-2-Switches verarbeiten die 48-Bit-MAC-Adresse auf der Sicherungsschicht (Data Link Layer)."
      },
      {
        type: "mc",
        question: "Anhand welcher Information trifft ein Router seine Weiterleitungsentscheidung?",
        options: [
          "Anhand der MAC-Adresse (Schicht 2)",
          "Anhand des Netzwerkanteils der IP-Adresse (Schicht 3)",
          "Anhand des Anwendungsprotokolls (Schicht 7)",
          "Anhand der Bildschirmauflösung des Clients"
        ],
        correct: 1,
        explanation: "Router arbeiten auf der Vermittlungsschicht (Layer 3) und nutzen den Netzwerkanteil der IP-Adresse für das Routing."
      },
      {
        type: "mc",
        question: "Was macht ein Access Point (AP)?",
        options: [
          "Er übersetzt private in öffentliche IP-Adressen",
          "Er bildet eine Brücke zwischen kabelgebundenem und drahtlosem Netzwerk",
          "Er speichert MAC-Adressen dauerhaft",
          "Er ersetzt einen DNS-Server"
        ],
        correct: 1,
        explanation: "Ein AP wandelt eine kabelgebundene Verbindung (meist Ethernet zum Router) in ein WLAN-Signal um."
      },
      {
        type: "mc",
        question: "Welche Aussage beschreibt die Beziehung zwischen Standardgateway und Router fachlich korrekt?",
        options: [
          "Das Standardgateway eines Clients ist üblicherweise ein Router als nächster Hop; der Begriff Gateway kann allgemeiner auch eine Protokollvermittlung bezeichnen.",
          "Ein Router funktioniert nur in WLANs, ein Gateway nur in LANs",
          "Es sind exakte Synonyme ohne jeden Unterschied",
          "Ein Gateway arbeitet nur mit MAC-Adressen"
        ],
        correct: 0,
        explanation: "In typischen IP-Netzen ist das konfigurierte Standardgateway die Routeradresse im eigenen Subnetz. Der Begriff Gateway ist weiter gefasst."
      },
      {
        type: "mc",
        question: "Was ist die Hauptaufgabe einer Firewall?",
        options: [
          "IP-Adressen automatisch vergeben",
          "Domainnamen in IP-Adressen auflösen",
          "Ein- und ausgehenden Datenverkehr überwachen und nach Regeln durchlassen oder blockieren",
          "Kabeldefekte automatisch reparieren"
        ],
        correct: 2,
        explanation: "Eine Firewall überwacht den Datenverkehr und entscheidet anhand von Sicherheitsregeln, ob Pakete durchgelassen werden."
      },
      {
        type: "blank",
        question:
          "DHCP funktioniert nach dem sogenannten ___-Prozess: Discover, ___, Request und ___.",
        blanks: [["dora"], ["offer"], ["acknowledge"]],
        explanation:
          "DORA = Discover (Client sucht Server), Offer (Server bietet IP an), Request (Client fordert sie an), Acknowledge (Server bestätigt)."
      },
      {
        type: "mc",
        question: "Was sendet ein Client als Erstes, wenn er eine IP-Adresse per DHCP beziehen möchte?",
        options: ["DHCP Acknowledge", "DHCP Discover", "DHCP Offer", "DHCP Request"],
        correct: 1,
        explanation: "Der Client sendet zuerst einen Broadcast namens DHCP Discover, um einen DHCP-Server zu finden."
      },
      {
        type: "mc",
        question: "Wofür wird DNS am ehesten verglichen?",
        options: [
          "Ein Wörterbuch für Programmiersprachen",
          "Ein Telefonbuch, das Domainnamen in IP-Adressen übersetzt",
          "Ein Sicherheitssystem gegen Cyberangriffe",
          "Ein Protokoll zur Verschlüsselung von E-Mails"
        ],
        correct: 1,
        explanation: "DNS wandelt menschenlesbare Domainnamen in die zugehörigen IP-Adressen um."
      },
      {
        type: "mc",
        question: "Was ist die Aufgabe von NAT (Network Address Translation)?",
        options: [
          "Automatische Vergabe von IP-Adressen an Clients",
          "Übersetzung privater IP-Adressen in eine öffentliche IP-Adresse und umgekehrt",
          "Verschlüsselung des gesamten Netzwerkverkehrs",
          "Auflösung von Domainnamen in IP-Adressen"
        ],
        correct: 1,
        explanation: "NAT ermöglicht es mehreren Geräten mit privaten IPs, sich eine einzige öffentliche IP-Adresse zum Internetzugriff zu teilen."
      },
      {
        type: "mc",
        question: "Welche OSI-Schicht ist für die reine Übertragung von Rohdatenbits über Kabel/Funk zuständig?",
        options: ["Bitübertragungsschicht (Physical Layer)", "Transportschicht", "Anwendungsschicht", "Sitzungsschicht"],
        correct: 0,
        explanation: "Schicht 1, die Bitübertragungsschicht, überträgt die reinen Rohdatenbits über das physische Medium."
      },
      {
        type: "mc",
        question: "Welche OSI-Schicht ist für die Wegfindung (Routing) der Datenpakete zuständig?",
        options: ["Sicherungsschicht", "Vermittlungsschicht (Network Layer)", "Darstellungsschicht", "Sitzungsschicht"],
        correct: 1,
        explanation: "Die Vermittlungsschicht (Schicht 3) entscheidet, welchen Weg die Daten vom Sender zum Empfänger nehmen."
      },
      {
        type: "mc",
        question: "Welche OSI-Schicht sorgt für zuverlässige Ende-zu-Ende-Übertragung und segmentiert Daten?",
        options: ["Transportschicht", "Bitübertragungsschicht", "Darstellungsschicht", "Sicherungsschicht"],
        correct: 0,
        explanation: "Die Transportschicht (Schicht 4) sorgt für zuverlässige Übertragung, Segmentierung und korrekte Reihenfolge."
      },
      {
        type: "mc",
        question: "Welche Schicht des OSI-Modells ist für Datenkompression und Verschlüsselung zuständig?",
        options: ["Darstellungsschicht (Presentation Layer)", "Anwendungsschicht", "Transportschicht", "Bitübertragungsschicht"],
        correct: 0,
        explanation: "Die Darstellungsschicht übersetzt Datenformate, z. B. durch Kompression oder Verschlüsselung."
      }
    ]
  },

  // ============================================================
  // THEMA 5: IT-GRUNDLAGEN (Hardware, Betriebssysteme, Speicher, Virtualisierung)
  // ============================================================
  {
    id: "it-grundlagen",
    title: "IT-Grundlagen & Virtualisierung",
    questions: [
      {
        type: "mc",
        question: "Was ist ein 'Core' bei einer CPU?",
        options: [
          "Der externe Grafikspeicher",
          "Der zentrale, rechnende Teil eines Prozessors – moderne CPUs haben oft mehrere davon",
          "Ein anderer Name für den CPU-Sockel",
          "Ein Kühlkörper für den Prozessor"
        ],
        correct: 1,
        explanation: "Ein Core führt die eigentlichen Berechnungen aus; mehrere Cores erhöhen die Gesamtleistung (Mehrkernprozessor)."
      },
      {
        type: "mc",
        question: "Welche Aussage zum Unterschied HDD vs. SSD stimmt?",
        options: [
          "SSDs sind mechanisch und günstiger als HDDs",
          "HDDs haben keine beweglichen Teile",
          "SSDs haben keine beweglichen Teile und sind meist schneller als HDDs",
          "Es gibt keinen technischen Unterschied"
        ],
        correct: 2,
        explanation: "SSDs (Solid-State-Drives) arbeiten ohne bewegliche Teile und sind dadurch schneller und zuverlässiger als klassische HDDs."
      },
      {
        type: "text",
        question: "Ein kleines Team benötigt einen zentralen Dateispeicher, auf den Mitarbeitende über das Netzwerk mit normalen Dateifreigaben zugreifen. Welche Speicherart passt am besten?",
        accepted: ["nas", "network attached storage"],
        explanation: "Ein NAS stellt üblicherweise dateibasierten Speicher über das Netzwerk bereit und eignet sich für zentrale Freigaben."
      },
      {
        type: "mc",
        question: "Mehrere Datenbankserver benötigen gemeinsam nutzbaren, blockbasierten Speicher mit geringer Latenz. Welche Speicherarchitektur ist dafür typischerweise passend?",
        options: [
          "Ein SAN ist ein dediziertes Speichernetz, das blockbasierten Speicher flexibel mehreren Servern zur Verfügung stellt",
          "Ein SAN kann nur von einem einzigen Client genutzt werden",
          "SAN und NAS sind exakt dasselbe Konzept",
          "Ein SAN speichert ausschließlich Backups auf Bändern"
        ],
        correct: 0,
        explanation: "Ein SAN stellt Servern typischerweise blockbasierten Speicher über ein eigenes Speichernetz bereit. NAS stellt dagegen meist dateibasierte Freigaben bereit."
      },
      {
        type: "mc",
        question: "Welches Merkmal gehört NICHT zu verteilten Systemen?",
        options: ["Skalierbarkeit", "Fehlertoleranz", "Zentrale Einzelabhängigkeit von genau einem Gerät", "Parallelität"],
        correct: 2,
        explanation: "Verteilte Systeme zeichnen sich gerade dadurch aus, dass Aufgaben auf mehrere Geräte verteilt werden – das reduziert die Abhängigkeit von einem einzelnen Gerät."
      },
      {
        type: "mc",
        question: "Was ist ein Hochverfügbarkeits-Cluster?",
        options: [
          "Ein Cluster, das ausschließlich Rechenleistung bündelt",
          "Ein Cluster, das dafür sorgt, dass Dienste auch bei Ausfall einzelner Knoten weiter verfügbar bleiben",
          "Ein einzelner besonders schneller Server",
          "Ein Cluster nur für Backup-Speicherung"
        ],
        correct: 1,
        explanation: "Hochverfügbarkeits-Cluster sichern die Verfügbarkeit von Diensten ab, selbst wenn einzelne Knoten ausfallen."
      },
      {
        type: "blank",
        question:
          "Reihenfolge der Speichergrößen: Bit → Byte → ___ → Megabyte → ___ → Terabyte → Petabyte → Exabyte.",
        blanks: [["kilobyte"], ["gigabyte"]],
        explanation: "Die Reihenfolge lautet: Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte, Exabyte."
      },
      {
        type: "mc",
        question: "Beim Public-/Private-Key-Verfahren: Wer darf den öffentlichen Schlüssel (Public Key) kennen?",
        options: ["Nur der Besitzer selbst", "Jeder", "Nur der Systemadministrator", "Niemand, er bleibt geheim"],
        correct: 1,
        explanation: "Der öffentliche Schlüssel darf jeder kennen – nur der private Schlüssel bleibt geheim und gehört nur dem Besitzer."
      },
      {
        type: "mc",
        question: "Was ist Server-Virtualisierung?",
        options: [
          "Das physische Duplizieren eines Servers als Ersatzgerät",
          "Mehrere virtuelle Server laufen auf einem physischen Server, um Effizienz und Auslastung zu erhöhen",
          "Die Umwandlung eines Servers in einen Client",
          "Eine Methode zur Verschlüsselung von Serverdaten"
        ],
        correct: 1,
        explanation: "Server-Virtualisierung erhöht die Auslastung der Hardware, indem mehrere virtuelle Server auf einer physischen Maschine laufen."
      },
      {
        type: "mc",
        question: "Welche der folgenden Virtualisierungsplattformen ist Open-Source?",
        options: ["Hyper-V", "VMware ESXi", "Proxmox VE", "Microsoft Azure"],
        correct: 2,
        explanation: "Proxmox VE ist Open-Source (AGPL v3), Hyper-V und VMware ESXi sind proprietär."
      },
      {
        type: "mc",
        question: "Von welchem Unternehmen wird Hyper-V entwickelt?",
        options: ["VMware", "Microsoft", "Proxmox Server Solutions GmbH", "Google"],
        correct: 1,
        explanation: "Hyper-V ist Microsofts Virtualisierungsplattform mit enger Integration in Windows Server und Azure."
      },
      {
        type: "text",
        question: "Ein Unternehmen verbindet Standorte in Berlin, München und Hamburg über Providerleitungen oder VPNs. Welcher Netztyp beschreibt diese standortübergreifende Verbindung?",
        accepted: ["wan", "wide area network"],
        explanation: "Ein WAN verbindet Netze über größere geografische Entfernungen, anders als ein lokales LAN innerhalb eines Standorts."
      },
      {
        type: "mc",
        question: "Was ermöglicht Cloud-Computing im Kern?",
        options: [
          "Nur die lokale Speicherung von Daten ohne Internetzugriff",
          "Die Bereitstellung von IT-Ressourcen (z. B. Speicher, Rechenleistung) über das Internet",
          "Ausschließlich die Verwaltung von Netzwerkkabeln",
          "Die physische Verkabelung eines Rechenzentrums"
        ],
        correct: 1,
        explanation: "Cloud-Computing stellt Anwendungen, Speicher und weitere Dienste über das Internet bereit, statt lokal auf eigener Hardware."
      }
    ]
  },

  // ============================================================
  // THEMA 6: WINDOWS-NETZWERKE (Arbeitsgruppe, Domäne, Gruppenrichtlinien)
  // ============================================================
  {
    id: "windows-netzwerke",
    title: "Arbeitsgruppe, Domäne & GPOs",
    questions: [
      {
        type: "mc",
        question: "Was ist charakteristisch für eine Arbeitsgruppe (Windows)?",
        options: [
          "Alle Computer sind gleichberechtigt, es gibt keinen zentralen Server",
          "Ein Domänencontroller verwaltet alle Benutzerkonten zentral",
          "Benutzer melden sich einmalig für das gesamte Netzwerk an",
          "Änderungen werden automatisch auf alle Rechner verteilt"
        ],
        correct: 0,
        explanation: "In einer Arbeitsgruppe verwaltet jeder Computer seine eigenen Benutzerkonten – es gibt keine zentrale Verwaltung."
      },
      {
        type: "text",
        question: "Wie heißt der zentrale Server, der in einer Domäne Benutzerkonten und Sicherheitsrichtlinien verwaltet?",
        accepted: ["domänencontroller", "domaenencontroller", "domain controller"],
        explanation: "Der Domänencontroller ist der zentrale Server einer Domäne."
      },
      {
        type: "mc",
        question: "Was ist ein Vorteil einer Domäne gegenüber einer Arbeitsgruppe bei der Anmeldung?",
        options: [
          "Benutzer müssen sich auf jedem PC separat anmelden",
          "Benutzer können sich mit einem einzigen Satz Anmeldeinformationen an jedem Domänen-PC anmelden",
          "Es ist grundsätzlich keine Anmeldung nötig",
          "Anmeldedaten werden nie zentral gespeichert"
        ],
        correct: 1,
        explanation: "Die zentrale Authentifizierung über den Domänencontroller ermöglicht Anmeldung mit denselben Zugangsdaten an jedem PC der Domäne."
      },
      {
        type: "text",
        question: "Wie heißt das zentrale Active-Directory-Objekt, über das etwa Kennwortrichtlinien oder Desktop-Einstellungen an Benutzer und Computer verteilt werden?",
        accepted: ["gpo", "gruppenrichtlinienobjekt", "group policy object"],
        explanation: "Ein Gruppenrichtlinienobjekt (GPO) bündelt Einstellungen und wird an Site, Domäne oder OU verknüpft."
      },
      {
        type: "mc",
        question: "Auf welchen Ebenen können Gruppenrichtlinien angewendet werden?",
        options: [
          "Nur auf einzelne Dateien",
          "Standorte, Domänen oder Organisationseinheiten",
          "Nur auf einzelne Netzwerkkabel",
          "Ausschließlich auf Druckerwarteschlangen"
        ],
        correct: 1,
        explanation: "GPOs lassen sich auf Standorte, Domänen oder Organisationseinheiten (OUs) anwenden."
      },
      {
        type: "mc",
        question: "Wann werden Gruppenrichtlinien angewendet?",
        options: [
          "Nur einmalig bei der Windows-Installation",
          "Beim Start des Computers bzw. der Anmeldung sowie regelmäßig im Hintergrund",
          "Nur wenn der Administrator sie manuell startet",
          "Nur beim Herunterfahren des Computers"
        ],
        correct: 1,
        explanation: "GPOs werden beim Systemstart/Anmeldung angewendet und aktualisieren sich regelmäßig im Hintergrund."
      },
      {
        type: "blank",
        question: "In der Domain shop.example.de ist 'shop' die ___, 'example.de' die ___ und '.de' die ___.",
        blanks: [["subdomain"], ["domain"], ["top-level-domain", "tld"]],
        explanation: "Von rechts nach links gelesen: .de = Top-Level-Domain, example.de = Domain, shop.example.de = Subdomain."
      },
      {
        type: "mc",
        question: "Was bilden mehrere miteinander verbundene Domänen in Active Directory?",
        options: ["Ein Forest ohne weitere Struktur", "Einen Tree", "Ein einzelnes flaches Netzwerk", "Eine Arbeitsgruppe"],
        correct: 1,
        explanation: "Mehrere Domänen bilden gemeinsam einen sogenannten Tree in der Active-Directory-Struktur."
      }
    ]
  },

  // ============================================================
  // THEMA 7: WINDOWS SERVER & ACTIVE DIRECTORY VERWALTUNG
  // ============================================================
  {
    id: "windows-server-admin",
    title: "Windows Server & AD-Verwaltung",
    questions: [
      {
        type: "mc",
        question: "Warum muss ein IT-Team für Windows-Clients die Supportdaten der jeweils eingesetzten Version und Edition regelmäßig prüfen?",
        options: ["Weil Supportzeiträume je nach Version und Edition variieren können und nach ihrem Ende keine regulären Sicherheitsupdates mehr bereitstehen.", "Weil Windows nach Ablauf automatisch alle Benutzerdaten löscht.", "Weil dann keine Netzwerkverbindung mehr möglich ist.", "Weil jede Windows-Version unbegrenzt Sicherheitsupdates erhält."],
        correct: 0,
        explanation: "Windows-Versionen und Editionen haben unterschiedliche Lebenszyklen. Ein verbindlicher Updateplan muss sich an den konkreten, aktuellen Supportdaten orientieren."
      },
      {
        type: "mc",
        question: "Ein PC soll regulär und unterstützt auf Windows 11 aktualisiert werden. Welche Hardwareanforderung gehört zu den offiziellen Mindestanforderungen?",
        options: ["TPM 2.0", "Ein Diskettenlaufwerk", "Ein analoges Modem", "Ein 32-Bit-Prozessor"],
        correct: 0,
        explanation: "Für regulär unterstützte Windows-11-Installationen gehört TPM 2.0 zu den Mindestanforderungen. Die gesamte Kompatibilität muss zusätzlich geprüft werden."
      },
      {
        type: "text",
        question: "Warum ist die Umgehung offizieller Hardware- und Sicherheitsanforderungen bei einer Unternehmensbereitstellung fachlich problematisch?",
        accepted: ["fehlender support", "kein support", "nicht unterstützt", "unsupported"],
        explanation: "Nicht unterstützte Installationen können Support-, Update-, Sicherheits- und Compliance-Risiken erzeugen. Für produktive Systeme ist die offizielle Kompatibilität maßgeblich."
      },
      {
        type: "mc",
        question: "Welche Windows-Edition ist für Kassensysteme, Geldautomaten oder Fabriksteuerungen gedacht, bietet bis zu 10 Jahre nur Sicherheitsupdates und keine neuen Funktionen?",
        options: ["Windows 11 Pro", "LTSC (Long-Term Servicing Channel)", "Server Datacenter", "Windows 11 Home"],
        correct: 1,
        explanation: "LTSC verzichtet auf Store und vorinstallierte Apps und ist auf maximale Stabilität statt neue Funktionen ausgelegt; für Privatnutzer nicht lizenziert."
      },
      {
        type: "mc",
        question: "Was ist der Hauptvorteil von Windows Server Core gegenüber einer Installation mit Desktop Experience?",
        options: [
          "Bessere grafische Verwaltung",
          "Geringere Angriffsfläche und weniger Ressourcenverbrauch, da keine grafische Oberfläche läuft",
          "Automatische Lizenzierung ohne Produktschlüssel",
          "Volle Kompatibilität mit alter Desktop-Software"
        ],
        correct: 1,
        explanation: "Server Core läuft ohne GUI (nur CLI/PowerShell/SConfig) und reduziert dadurch Angriffsfläche und Ressourcenbedarf."
      },
      {
        type: "mc",
        question: "Welche Aussage trennt die Aufgaben von Secure Boot und TPM fachlich korrekt?",
        options: [
          "TPM prüft Signaturen, Secure Boot speichert Schlüssel",
          "Secure Boot prüft Signaturen in der Bootkette; ein TPM kann kryptografische Schlüssel und Messwerte hardwaregestützt schützen.",
          "Beide Funktionen sind identisch und ersetzen sich gegenseitig",
          "TPM verschlüsselt nur Netzwerkverkehr"
        ],
        correct: 1,
        explanation: "Secure Boot und TPM ergänzen sich, sind aber unterschiedliche Technologien: Secure Boot prüft die Bootkette, ein TPM schützt Schlüssel und Messwerte."
      },
      {
        type: "mc",
        question: "Wovor schützt Credential Guard in erster Linie?",
        options: [
          "Vor physischem Diebstahl der Festplatte",
          "Vor Pass-the-Hash-Angriffen, bei denen gestohlene Anmeldedaten zur Ausbreitung im Netzwerk genutzt werden",
          "Vor veralteten Treibern",
          "Vor Stromausfällen während der Anmeldung"
        ],
        correct: 1,
        explanation: "Credential Guard isoliert Anmeldedaten in einem virtualisierten Speicherbereich und erschwert dadurch besonders Pass-the-Hash-Angriffe im Firmennetz."
      },
      {
        type: "mc",
        question: "Wo liegt der BitLocker-Verschlüsselungsschlüssel normalerweise sicher gespeichert?",
        options: ["In einer Textdatei auf dem Desktop", "Im TPM-Chip", "In der Windows-Registry unverschlüsselt", "Ausschließlich auf einem USB-Stick"],
        correct: 1,
        explanation: "Der Schlüssel liegt sicher im TPM und entsperrt das Laufwerk beim normalen Hochfahren automatisch – der Wiederherstellungsschlüssel sollte zusätzlich separat gesichert werden."
      },
      {
        type: "mc",
        question: "Ein Unternehmen möchte, dass mehrere Windows-Server-Laufwerke ohne dedizierten Hardware-RAID-Controller gespiegelt werden. Welcher Begriff beschreibt diese Windows-eigene Lösung?",
        options: ["Gespiegelter dynamischer Datenträger (bzw. Storage Spaces)", "NAT", "Server Core", "AppLocker"],
        correct: 0,
        explanation: "Windows bietet mit dynamischen Datenträgern bzw. moderner mit Storage Spaces eine softwarebasierte Spiegelung ohne dedizierten RAID-Controller."
      },
      {
        type: "text",
        question: "Drei Laufwerke à 4 TB werden per 3-Wege-Spiegelung genutzt. Wie viel TB nutzbare Kapazität stehen ungefähr zur Verfügung? (nur Zahl)",
        accepted: ["4"],
        explanation: "Bei einer 3-Wege-Spiegelung wird derselbe Datenbestand auf alle drei Platten gespiegelt – nutzbar ist ungefähr die Kapazität einer einzelnen Platte (hier 4 TB)."
      },
      {
        type: "text",
        question: "Zwei 2-TB-Platten werden per RAID 0 (Striping) zusammengeschaltet. Wie viel TB stehen insgesamt zur Verfügung? (nur Zahl)",
        accepted: ["4"],
        explanation: "RAID 0 nutzt die volle Rohkapazität aller Platten, hier also 2+2 = 4 TB – dafür gibt es keinerlei Ausfallsicherheit."
      },
      {
        type: "mc",
        question: "Was ist der entscheidende Nachteil von RAID 0?",
        options: [
          "Es ist deutlich langsamer als eine Einzelplatte",
          "Es steht nur die Hälfte der Rohkapazität zur Verfügung",
          "Keine Ausfallsicherheit – fällt eine Platte aus, sind alle Daten des Verbunds verloren",
          "Es unterstützt keine SSDs"
        ],
        correct: 2,
        explanation: "Da die Daten über alle Platten verteilt werden, führt der Ausfall einer einzigen Platte zum Totalverlust aller Daten im RAID-0-Verbund."
      },
      {
        type: "mc",
        question: "Welches Microsoft-Dateisystem ist für robuste Server- und Speicherumgebungen konzipiert und unterstützt Integritätsprüfungen?",
        options: ["FAT32", "exFAT", "ReFS", "NTFS"],
        correct: 2,
        explanation: "ReFS (Resilient File System) ist für robuste Server- und Speicherumgebungen konzipiert. Ob Fehler automatisch repariert werden können, hängt auch von der zugrunde liegenden Speicher- und Redundanzkonfiguration ab."
      },
      {
        type: "mc",
        question: "Welcher VHD-Typ belegt sofort den vollen angegebenen Speicherplatz auf der echten Festplatte, bietet dafür aber bessere Leistung?",
        options: ["Dynamisch wachsend", "Differenzierend (Differencing)", "Feste Größe (Fixed)", "Übergreifend (Spanned)"],
        correct: 2,
        explanation: "Feste Größe reserviert den kompletten Platz sofort, was Fragmentierung vermeidet und die Leistung verbessert."
      },
      {
        type: "mc",
        question: "Welcher VHD-Typ baut auf einer 'Eltern'-Datei auf und speichert nur die Änderungen dazu?",
        options: ["Feste Größe", "Differenzierend (Differencing)", "Dynamisch wachsend", "Basis-VHD"],
        correct: 1,
        explanation: "Differenzierende VHDs sparen Platz bei mehreren ähnlichen VMs, machen die Kind-VHD aber von der Eltern-Datei abhängig."
      },
      {
        type: "mc",
        question: "Was bekommt man bei einem SAN im Unterschied zu einem NAS?",
        options: [
          "Einen einfachen freigegebenen Ordner im Netzwerk",
          "Eine 'rohe', blockbasierte Festplatte für einen Server über ein dediziertes Speichernetz",
          "Nur Cloud-Speicher ohne lokale Hardware",
          "Ausschließlich Bandsicherung"
        ],
        correct: 1,
        explanation: "Ein SAN stellt Servern block-basierten Speicherplatz über ein eigenes, schnelles Speichernetz bereit – anders als das dateibasierte NAS."
      },
      {
        type: "mc",
        question: "In einer Umgebung mit mehreren Domain Controllern fällt einer aus. Was passiert?",
        options: [
          "Die gesamte Domäne fällt sofort aus",
          "Andere DCs übernehmen dank Replikation der AD-Datenbank weiterhin Anmeldung und AD-Dienste",
          "Alle Benutzerkonten werden automatisch gesperrt",
          "Nur der ausgefallene DC kann sich noch anmelden"
        ],
        correct: 1,
        explanation: "Da Active-Directory-Daten zwischen mehreren DCs repliziert werden, übernehmen die verbleibenden DCs weiterhin Authentifizierung und AD-Dienste."
      },
      {
        type: "text",
        question: "Wie heißt die Datenbankdatei, in der Active Directory auf dem Domain Controller seine Daten speichert?",
        accepted: ["ntds.dit", "ntds"],
        explanation: "ntds.dit ist die zentrale AD-Datenbankdatei; sie kann z. B. mit ntdsutil im DSRM-Modus offline defragmentiert werden."
      },
      {
        type: "mc",
        question: "Wofür sind SRV-Einträge im DNS für Active Directory besonders wichtig?",
        options: [
          "Sie verschlüsseln den Datenverkehr zum Domain Controller",
          "Sie ermöglichen es Clients, Domänencontroller und Dienste wie LDAP oder Kerberos zu finden",
          "Sie vergeben automatisch IP-Adressen per DHCP",
          "Sie speichern Benutzerpasswörter"
        ],
        correct: 1,
        explanation: "Ohne funktionierende SRV-Einträge im DNS können Clients keinen passenden Domänencontroller bzw. AD-Dienst finden."
      },
      {
        type: "mc",
        question: "Warum sollte ein Administrator die Wiederherstellungsdauer im Active-Directory-Papierkorb nicht pauschal als identisch für jede Gesamtstruktur annehmen?",
        options: [
          "Sie hängt von Attributen wie msDS-deletedObjectLifetime und tombstoneLifetime sowie der Historie und Konfiguration der Gesamtstruktur ab.",
          "Der AD-Papierkorb bewahrt Objekte immer unbegrenzt auf.",
          "Die Dauer wird ausschließlich durch die Bildschirmauflösung des Domain Controllers bestimmt.",
          "Gelöschte AD-Objekte können grundsätzlich nie wiederhergestellt werden."
        ],
        correct: 0,
        explanation: "In neueren Gesamtstrukturen ist 180 Tage häufig der Standard, ältere oder abweichend konfigurierte Umgebungen können jedoch andere Werte haben. Die tatsächliche Konfiguration muss geprüft werden."
      },
      {
        type: "mc",
        question: "Welche FSMO-Rolle gibt es nur einmal pro Domäne und ist u. a. für Zeitsynchronisation und Passwortänderungen zuständig?",
        options: ["Schema-Master", "Domain-Name-Master", "PDC-Emulator", "RID-Master"],
        correct: 2,
        explanation: "Der PDC-Emulator existiert einmal pro Domäne und kümmert sich um Zeitsynchronisation, Passwortänderungen und Kompatibilität."
      },
      {
        type: "mc",
        question: "Welche zwei FSMO-Rollen existieren jeweils nur EINMAL pro gesamter Gesamtstruktur (Forest), nicht pro Domäne?",
        options: [
          "PDC-Emulator und RID-Master",
          "Schema-Master und Domain-Name-Master",
          "Infrastruktur-Master und PDC-Emulator",
          "RID-Master und Infrastruktur-Master"
        ],
        correct: 1,
        explanation: "Schema-Master und Domain-Name-Master gelten für die gesamte Gesamtstruktur; PDC-Emulator, RID-Master und Infrastruktur-Master gelten je Domäne."
      },
      {
        type: "text",
        question: "Mit welchem PowerShell-Cmdlet übergibt man eine FSMO-Rolle geordnet an einen anderen Domain Controller?",
        accepted: ["move-addirectoryserveroperationmasterrole", "move-addirectoryserveroperationmasterrole "],
        explanation: "Move-ADDirectoryServerOperationMasterRole überträgt eine FSMO-Rolle kontrolliert; im Notfall ist alternativ eine 'Seize'-Übernahme möglich."
      },
      {
        type: "mc",
        question: "Wofür wird das Tool repadmin verwendet?",
        options: [
          "Zur Verwaltung von Freigabeberechtigungen",
          "Zum Prüfen und Steuern der Replikation zwischen mehreren Domain Controllern",
          "Zur Installation von Windows-Updates",
          "Zur Konfiguration von Hyper-V-Switches"
        ],
        correct: 1,
        explanation: "repadmin ist ein Diagnose- und Steuerungswerkzeug für die AD-Replikation zwischen Domain Controllern."
      },
      {
        type: "mc",
        question: "Was ermöglicht eine Vertrauensstellung (Trust) zwischen zwei Domänen?",
        options: [
          "Automatische Lizenzübertragung",
          "Gegenseitigen Ressourcenzugriff zwischen den beiden Domänen",
          "Automatische Zusammenführung zu einer einzigen Domäne",
          "Verschlüsselung des gesamten Datenverkehrs im Internet"
        ],
        correct: 1,
        explanation: "Ein Trust erlaubt Benutzern einer Domäne, unter bestimmten Bedingungen auf Ressourcen der anderen, vertrauenden Domäne zuzugreifen."
      },
      {
        type: "mc",
        question: "Was unterscheidet Provisioning von Deprovisioning?",
        options: [
          "Provisioning entzieht Zugänge, Deprovisioning vergibt sie",
          "Provisioning stattet ein Konto/Gerät automatisch mit allem Nötigen aus, Deprovisioning entzieht automatisch alle Zugänge beim Austritt",
          "Beide Begriffe sind Synonyme",
          "Provisioning betrifft nur Hardware, Deprovisioning nur Software"
        ],
        correct: 1,
        explanation: "Provisioning = automatische Einrichtung (z. B. neuer Mitarbeiter erhält Mail/Rechte/Apps), Deprovisioning = automatischer Entzug beim Austritt."
      },
      {
        type: "mc",
        question: "Was zeichnet den Windows Configuration Designer (WCD) im Vergleich zu Windows Autopilot besonders aus?",
        options: [
          "WCD funktioniert komplett offline über ein Konfigurationspaket (.ppkg), z. B. per USB-Stick",
          "WCD benötigt zwingend eine Internetverbindung zu Microsoft",
          "WCD ist nur für Server-Betriebssysteme nutzbar",
          "WCD ersetzt vollständig Active Directory"
        ],
        correct: 0,
        explanation: "Anders als Autopilot, das eine Registrierung beim Hersteller und meist Internet/Intune voraussetzt, funktioniert WCD komplett offline."
      },
      {
        type: "mc",
        question: "Wie funktioniert Windows Autopilot im Grundprinzip?",
        options: [
          "Geräte werden manuell von der IT-Abteilung vorkonfiguriert, bevor sie verschickt werden",
          "Geräte werden beim Hersteller registriert und laden beim ersten Einschalten automatisch Apps, Einstellungen und Richtlinien, meist zusammen mit Intune",
          "Autopilot ist ausschließlich für Server-Betriebssysteme gedacht",
          "Autopilot funktioniert nur ohne Internetverbindung"
        ],
        correct: 1,
        explanation: "Autopilot ermöglicht den Versand neuer PCs direkt an Mitarbeiter, ohne Umweg über die IT – die Konfiguration erfolgt automatisch beim ersten Start."
      },
      {
        type: "mc",
        question: "Was ist die moderne Cloud-Alternative zu klassischen, lokalen Gruppenrichtlinien ohne eigenen Server?",
        options: ["Microsoft Intune", "FSRM", "AppLocker", "Windows Admin Center"],
        correct: 0,
        explanation: "Intune verwaltet Geräterichtlinien zentral über die Cloud, ganz ohne eigenen Domain Controller oder GPO-Infrastruktur."
      },
      {
        type: "text",
        question: "Nach welchem festen Muster (zwei Wörter, mit Bindestrich) sind PowerShell-Cmdlets aufgebaut, z. B. bei Get-ADUser?",
        accepted: ["verb-substantiv", "verb-nomen"],
        explanation: "Jedes Cmdlet folgt dem Schema Verb-Substantiv, z. B. Get- (abfragen), Set- (ändern), New- (erstellen), Remove- (löschen)."
      },
      {
        type: "text",
        question: "Mit welchem PowerShell-Cmdlet installiert man Serverrollen bzw. -features wie DNS oder DHCP?",
        accepted: ["install-windowsfeature"],
        explanation: "Install-WindowsFeature installiert Serverrollen/-features direkt per PowerShell, alternativ grafisch über den Server-Manager."
      },
      {
        type: "mc",
        question: "Was bewirkt der Befehl slmgr.vbs /rearm?",
        options: [
          "Er kauft automatisch eine neue Windows-Lizenz",
          "Er setzt den Aktivierungs-Timer zurück und verlängert die Testphase (Grace Period), ist aber nur begrenzt oft nutzbar",
          "Er deinstalliert Windows vollständig",
          "Er aktiviert TPM 2.0 nachträglich"
        ],
        correct: 1,
        explanation: "/rearm verlängert nur die Testphase einer Evaluierungsversion, ersetzt aber keine echte Lizenz – nach der Ausführung ist ein Neustart nötig."
      },
      {
        type: "mc",
        question: "Ein Server soll nach einer erfolgreichen Testphase produktiv weiterbetrieben werden. Welches Vorgehen ist fachlich und lizenzrechtlich richtig?",
        options: ["Eine passende Lizenz beschaffen und die Evaluierung kontrolliert in eine lizenzierte Bereitstellung überführen", "Die Evaluation dauerhaft produktiv ohne Lizenz betreiben", "Die Systemzeit regelmäßig zurückstellen", "Sicherheitsupdates dauerhaft deaktivieren"],
        correct: 0,
        explanation: "Eine Evaluation ist für Prüfung und Erprobung gedacht. Vor dem Produktivbetrieb gehören Lizenzierung, ein geplanter Übergang und eine Sicherung zum Vorgehen."
      },
      {
        type: "mc",
        question: "Was ist der zentrale Unterschied zwischen NTFS-Berechtigungen und Freigabeberechtigungen?",
        options: [
          "NTFS-Berechtigungen gelten immer (auch lokal), Freigabeberechtigungen nur bei Zugriff über das Netzwerk",
          "Freigabeberechtigungen gelten immer, NTFS nur im Netzwerk",
          "Beide Berechtigungsarten sind technisch identisch",
          "NTFS-Berechtigungen gibt es nur bei FAT32"
        ],
        correct: 0,
        explanation: "NTFS-Rechte wirken unabhängig vom Zugriffsweg, Freigabeberechtigungen dagegen ausschließlich bei Zugriff über eine Netzwerkfreigabe."
      },
      {
        type: "mc",
        question: "Ein Benutzer ist Mitglied in Gruppe A (Lesen erlaubt) und Gruppe B (Lesen ausdrücklich verweigert/Deny). Was gilt effektiv?",
        options: [
          "Der Zugriff wird gewährt, da Allow Vorrang hat",
          "Der Zugriff wird verweigert, da eine wirksame explizite Deny-Berechtigung Vorrang vor Allow hat",
          "Windows fragt den Benutzer, welche Regel gelten soll",
          "Beide Regeln heben sich gegenseitig auf, kein Zugriff und kein Fehler"
        ],
        correct: 1,
        explanation: "Ein explizites Deny gewinnt grundsätzlich gegen ein Allow, unabhängig davon, aus wie vielen Gruppen die Allow-Rechte stammen."
      },
      {
        type: "mc",
        question: "Freigabeberechtigung = 'Lesen', NTFS-Berechtigung = 'Ändern'. Was kann der Benutzer beim Zugriff über das Netzwerk tatsächlich tun?",
        options: ["Ändern, da NTFS mehr Rechte gibt", "Nur Lesen, da die restriktivere Kombination gilt", "Vollzugriff, da sich beide Rechte addieren", "Gar nichts, da sich die Rechte widersprechen"],
        correct: 1,
        explanation: "Bei Netzwerkzugriff wirken Freigabe- und NTFS-Rechte zusammen; es gilt jeweils die restriktivere der beiden Einstellungen."
      },
      {
        type: "mc",
        question: "Ein Team soll die Größe seiner Projektordner begrenzen, ohne bestimmte Dateitypen zu verbieten. Welche FSRM-Funktion ist dafür die passende erste Wahl?",
        options: [
          "Zur Verwaltung von Hyper-V-VMs",
          "Speicherkontingente (Quotas)",
          "Zur zentralen Verwaltung von Gruppenrichtlinien",
          "Zur Verschlüsselung von Netzwerkverkehr"
        ],
        correct: 1,
        explanation: "Quotas begrenzen den belegbaren Speicherplatz. Dateiscreening wäre passend, wenn bestimmte Dateitypen wie Videos verhindert werden sollen."
      },
      {
        type: "text",
        question: "Wie nennt man es, wenn bestimmte Benutzerordner (z. B. Dokumente) automatisch auf einen zentralen Netzwerkpfad umgeleitet werden?",
        accepted: ["ordnerumleitung"],
        explanation: "Bei der Ordnerumleitung zeigt z. B. der Dokumente-Ordner transparent auf einen zentralen Server-Pfad statt auf die lokale Festplatte."
      },
      {
        type: "mc",
        question: "Welcher Hyper-V-Switch-Typ gibt virtuellen Maschinen Zugriff auf das echte, physische Netzwerk inklusive Internet?",
        options: ["Privat", "Intern", "Extern", "Isoliert"],
        correct: 2,
        explanation: "Der externe Switch bindet die physische Netzwerkkarte des Hosts ein und ermöglicht VMs so den Zugriff auf das reale Netzwerk."
      },
      {
        type: "mc",
        question: "Welcher Hyper-V-Switch-Typ erlaubt VMs die Kommunikation untereinander UND mit dem Host-PC, aber NICHT mit dem externen Netzwerk?",
        options: ["Privat", "Intern", "Extern", "Öffentlich"],
        correct: 1,
        explanation: "Der interne Switch-Typ verbindet VMs mit dem Host, isoliert das Ganze aber vom physischen, externen Netzwerk."
      },
      {
        type: "mc",
        question: "Wofür wird AppLocker eingesetzt?",
        options: [
          "Zur Verschlüsselung von Festplatten",
          "Um festzulegen, welche Anwendungen Benutzer überhaupt ausführen dürfen",
          "Zur automatischen Vergabe von IP-Adressen",
          "Zur Verwaltung von Benutzerkontingenten"
        ],
        correct: 1,
        explanation: "AppLocker blockiert nicht freigegebene oder unbekannte Programme und lässt nur erlaubte Anwendungen zu."
      },
      {
        type: "mc",
        question: "Im Zusammenhang mit welcher Technik wird das Kommandozeilentool cipher.exe typischerweise genutzt?",
        options: ["WLAN-Konfiguration", "EFS-/NTFS-Verschlüsselung", "DHCP-Verwaltung", "Hyper-V-Netzwerke"],
        correct: 1,
        explanation: "cipher.exe steht im Zusammenhang mit der dateibasierten EFS-Verschlüsselung auf NTFS-Laufwerken."
      },
      {
        type: "text",
        question: "Ein Administrator muss Dateien vertraulich und authentisiert über einen SSH-basierten Dienst übertragen. Welches Protokoll passt?",
        accepted: ["sftp", "ssh file transfer protocol"],
        explanation: "SFTP läuft über SSH und stellt eine verschlüsselte, authentisierte Dateiübertragung bereit. Es ist nicht dasselbe wie FTPS."
      },
      {
        type: "mc",
        question: "Warum wird JSON auf Webseiten häufig gegenüber XML bevorzugt?",
        options: [
          "JSON ist grundsätzlich sicherer verschlüsselt",
          "JSON entspricht direkt der JavaScript-Schreibweise, ist kompakter und wird von fast jeder Sprache gelesen",
          "XML kann von Browsern gar nicht verarbeitet werden",
          "JSON unterstützt im Gegensatz zu XML keine verschachtelten Strukturen"
        ],
        correct: 1,
        explanation: "JSON ist kürzer als XML, leicht im Browser verarbeitbar (entspricht der JS-Syntax) und plattformübergreifend nutzbar."
      },
      {
        type: "mc",
        question: "Was ist ein zentrales Sicherheitsrisiko von IoT-Geräten (z. B. smarte Glühbirnen, Thermostate)?",
        options: [
          "Sie verbrauchen zu viel Strom",
          "Jedes vernetzte Gerät ist ein potenzielles Einfallstor, wenn es schlecht abgesichert ist",
          "Sie funktionieren nur mit Kabel",
          "Sie können nicht mit dem Internet verbunden werden"
        ],
        correct: 1,
        explanation: "Da IoT-Geräte oft seltener aktualisiert werden und direkt mit dem Internet verbunden sind, sind sie ein beliebtes Angriffsziel."
      },
      {
        type: "mc",
        question: "Was ist der wesentliche Unterschied zwischen On-Premises und Cloud-Betrieb?",
        options: [
          "On-Prem bedeutet, Server/Software selbst vor Ort zu betreiben (volle Kontrolle, aber hohe Anfangsinvestition); Cloud bedeutet Miete beim Anbieter",
          "Cloud ist immer günstiger als On-Prem",
          "On-Prem funktioniert nur ohne Internetverbindung",
          "Es gibt keinen praktischen Unterschied mehr"
        ],
        correct: 0,
        explanation: "On-Prem bietet volle Datenkontrolle, erfordert aber eigene Investition und Wartung; viele Firmen (v. a. Banken/Behörden) nutzen deshalb Hybrid-Modelle."
      }
    ]
  }
];

/*
  Erweiterter Fragenpool
  ----------------------
  Die Zusatzfelder id, subtopic und difficulty werden von der bestehenden
  Quiz-Engine bewusst ignoriert. Sie machen die Fragen aber eindeutig
  referenzierbar und ermöglichen die fachliche Pflege ohne Logikänderung.
*/
const mc = (id, subtopic, difficulty, question, options, correct, explanation) =>
  ({ id, subtopic, difficulty, type: "mc", question, options, correct, explanation });
const multi = (id, subtopic, difficulty, question, options, correct, explanation) =>
  ({ id, subtopic, difficulty, type: "multi", question, options, correct, explanation });
const textQuestion = (id, subtopic, difficulty, question, accepted, explanation) =>
  ({ id, subtopic, difficulty, type: "text", question, accepted, explanation });
const blankQuestion = (id, subtopic, difficulty, question, blanks, explanation) =>
  ({ id, subtopic, difficulty, type: "blank", question, blanks, explanation });

const QUESTION_POOL_EXPANSION = {
  "it-sicherheit": [
    mc("sec-001", "schutzziele", "fortgeschritten", "Ein Onlineshop ist während eines Angriffs nicht erreichbar, Kundendaten wurden aber weder gelesen noch verändert. Welches Schutzziel ist unmittelbar verletzt?", ["Verfügbarkeit", "Vertraulichkeit", "Integrität", "Authentizität"], 0, "Wenn ein Dienst bei Bedarf nicht nutzbar ist, ist seine Verfügbarkeit beeinträchtigt."),
    mc("sec-002", "risikomanagement", "fortgeschritten", "Ein ungepatchter Webserver ist von außen erreichbar. Wie hängen Schwachstelle, Bedrohung und Risiko hier korrekt zusammen?", ["Der fehlende Patch ist die Schwachstelle; ein Angreifer ist eine Bedrohung; ein erfolgreicher Missbrauch erzeugt ein Risiko.", "Der Angreifer ist die Schwachstelle; der Patch ist das Risiko.", "Die Erreichbarkeit ist automatisch bereits ein Sicherheitsvorfall.", "Ein Risiko besteht erst, wenn Daten tatsächlich gelöscht wurden."], 0, "Eine Schwachstelle kann von einer Bedrohung ausgenutzt werden. Das daraus mögliche Schadensereignis ist das Risiko."),
    mc("sec-003", "zugriffsschutz", "fortgeschritten", "Eine Auszubildende soll Rechnungen lesen, aber weder freigeben noch Konten verwalten. Welches Prinzip wird damit umgesetzt?", ["Least Privilege", "Single Sign-on", "Failover", "Datenminimierung"], 0, "Least Privilege vergibt nur die Berechtigungen, die für die Aufgabe erforderlich sind."),
    mc("sec-004", "zugriffsschutz", "anspruchsvoll", "Ein Angreifer kennt das Passwort eines Mitarbeiters. Welche zusätzliche Maßnahme reduziert das Risiko eines erfolgreichen Logins am stärksten?", ["Ein zweiter, unabhängiger Faktor wie ein FIDO2-Sicherheitsschlüssel", "Ein längerer Benutzername", "Eine tägliche Änderung des Anzeigenamens", "Das Ausblenden des Login-Formulars im Intranet"], 0, "Mehrfaktor-Authentisierung verlangt neben Wissen wie einem Passwort einen weiteren, unabhängigen Faktor."),
    mc("sec-005", "passwoerter", "fortgeschritten", "Warum ist ein individuell zufälliger Salt beim Speichern von Passwort-Hashes sinnvoll?", ["Er verhindert, dass gleiche Passwörter zwangsläufig gleiche Hashwerte ergeben, und erschwert vorberechnete Tabellen.", "Er macht aus einem Hash wieder ein verschlüsseltes Passwort.", "Er ersetzt die Notwendigkeit einer langsamen Hashfunktion.", "Er erlaubt dem Administrator, das Klartextpasswort wiederherzustellen."], 0, "Ein Salt ist kein Geheimnis, macht aber vorberechnete Angriffe und Vergleiche gleicher Passwörter deutlich schwieriger."),
    mc("sec-006", "kryptografie", "fortgeschritten", "Welche Aussage unterscheidet Hashing eindeutig von symmetrischer Verschlüsselung?", ["Ein Hash soll nicht zurückgerechnet werden; symmetrisch verschlüsselte Daten können mit demselben geheimen Schlüssel entschlüsselt werden.", "Ein Hash benötigt immer ein Zertifikat, Verschlüsselung nie.", "Symmetrische Verschlüsselung verändert keine Daten.", "Hashing schützt automatisch die Vertraulichkeit einer Datei."], 0, "Hashes dienen beispielsweise Integritätsprüfungen oder Passwortspeicherung; Verschlüsselung schützt die Vertraulichkeit."),
    mc("sec-007", "backup", "anspruchsvoll", "Nach einem Ransomware-Befall existiert ein Online-Backup, das ebenfalls verschlüsselt wurde. Welche Ergänzung hätte die Wiederherstellbarkeit am wirksamsten verbessert?", ["Ein getrenntes, gegen Änderungen geschütztes Offline- oder immutable Backup", "Ein zweites Administrator-Konto auf demselben Server", "Eine längere Passwortlänge für Endnutzer", "Das Löschen der Ereignisprotokolle"], 0, "Backups müssen vom Produktionssystem getrennt und vor Manipulation geschützt sein."),
    mc("sec-008", "backup", "fortgeschritten", "Ein Fachbereich akzeptiert höchstens vier Stunden Datenverlust nach einem Ausfall. Welche Kennzahl beschreibt diese Vorgabe?", ["RPO", "RTO", "MTTR", "SLA"], 0, "Das Recovery Point Objective beschreibt den maximal akzeptablen Datenverlust in Zeit."),
    mc("sec-009", "backup", "fortgeschritten", "Ein Dienst muss nach einem Ausfall innerhalb von zwei Stunden wieder laufen. Welche Kennzahl wird damit festgelegt?", ["RTO", "RPO", "Hashwert", "Aufbewahrungsfrist"], 0, "Das Recovery Time Objective beschreibt die maximal akzeptable Wiederherstellungszeit."),
    mc("sec-010", "incident-response", "anspruchsvoll", "Auf einem Arbeitsplatz erscheinen Ransomware-Hinweise und Netzwerkfreigaben werden schnell umbenannt. Was ist die sinnvollste erste technische Sofortmaßnahme?", ["Den betroffenen Rechner vom Netzwerk trennen, ohne Beweise zu löschen.", "Sofort alle Dateien auf dem Rechner löschen.", "Das Lösegeld bezahlen, bevor jemand informiert wird.", "Den Rechner normal weiterarbeiten lassen, um den Fehler zu beobachten."], 0, "Die Isolation begrenzt die Ausbreitung. Danach folgen dokumentierte Incident-Response-Schritte."),
    mc("sec-011", "patchmanagement", "fortgeschritten", "Warum sollte ein Unternehmen Sicherheitsupdates vor der breiten Verteilung zunächst in einer Testgruppe prüfen?", ["Um Inkompatibilitäten früh zu erkennen und trotzdem zeitnah gegen bekannte Schwachstellen zu schützen.", "Damit Updates niemals produktiv installiert werden müssen.", "Weil Tests Sicherheitslücken automatisch schließen.", "Damit Mitarbeitende ihre Passwörter nicht ändern müssen."], 0, "Ein geregeltes Patchmanagement verbindet Risikoreduktion mit Betriebssicherheit."),
    mc("sec-012", "netzwerksicherheit", "anspruchsvoll", "Ein Webserver darf nur HTTPS-Anfragen aus dem Internet annehmen. Die Datenbank soll ausschließlich vom Webserver erreichbar sein. Welche Architektur unterstützt dies am besten?", ["Segmentierung mit getrennten Zonen und Firewall-Regeln zwischen Webserver und Datenbank", "Alle Systeme in dasselbe flache Netzwerk legen", "Die Datenbank mit einer öffentlichen IP-Adresse versehen", "Den Datenbankport für alle eingehenden Verbindungen öffnen"], 0, "Netzsegmentierung und restriktive Regeln begrenzen seitliche Bewegungen und Angriffsflächen."),
    mc("sec-013", "websicherheit", "anspruchsvoll", "Eine Suche baut SQL durch Zeichenkettenverkettung aus Benutzereingaben. Welche Maßnahme verhindert SQL-Injection am zuverlässigsten?", ["Parametrisierte Abfragen beziehungsweise Prepared Statements verwenden", "Sonderzeichen nur in der Benutzeroberfläche ausblenden", "Die Fehlermeldungen rot einfärben", "Die Datenbanktabelle umbenennen"], 0, "Parameter werden getrennt vom SQL-Code übergeben und nicht als ausführbarer Bestandteil interpretiert."),
    mc("sec-014", "websicherheit", "fortgeschritten", "Welches Ziel verfolgt Output-Encoding im Kontext einer Webanwendung?", ["Benutzereingaben beim Ausgeben so behandeln, dass sie nicht als ausführbarer HTML- oder Skriptcode wirken.", "Datenbankpasswörter im Klartext anzeigen.", "TLS-Zertifikate ersetzen.", "Den Netzwerkverkehr komprimieren."], 0, "Kontextgerechtes Encoding ist eine zentrale Maßnahme gegen Cross-Site-Scripting."),
    mc("sec-015", "logging", "fortgeschritten", "Welcher Protokolleintrag ist für die Untersuchung wiederholter fehlgeschlagener Anmeldungen besonders wichtig?", ["Zeitpunkt, betroffener Account, Quelladresse und Ergebnis der Anmeldung", "Die Lieblingsfarbe des Benutzers", "Nur die Anzahl installierter Drucker", "Der Klartext des eingegebenen Passworts"], 0, "Aussagekräftige, manipulationsgeschützte Logs unterstützen Erkennung und Forensik; Passwörter gehören niemals hinein."),
    mc("sec-016", "zugriffsschutz", "anspruchsvoll", "Ein Mitarbeiter wechselt von der Buchhaltung in den Vertrieb. Welche Maßnahme verhindert am ehesten dauerhaft zu weitreichende Rechte?", ["Rollen und Gruppenberechtigungen beim Rollenwechsel prüfen und anpassen.", "Den alten Benutzeraccount zusätzlich aktiv lassen.", "Den Namen des Mitarbeiters im E-Mail-Programm ändern.", "Alle Kolleginnen und Kollegen zu lokalen Administratoren machen."], 0, "Joiner-Mover-Leaver-Prozesse sorgen dafür, dass Rechte mit der tatsächlichen Aufgabe übereinstimmen."),
    mc("sec-017", "datenschutz", "fortgeschritten", "Ein Formular verlangt Geburtsdatum, obwohl für die Newsletter-Anmeldung nur eine E-Mail-Adresse nötig ist. Welcher DSGVO-Grundsatz ist betroffen?", ["Datenminimierung", "Speicherintegrität", "Portabilität", "Verfügbarkeit"], 0, "Es dürfen nur personenbezogene Daten erhoben werden, die für den angegebenen Zweck erforderlich sind."),
    mc("sec-018", "datenschutz", "anspruchsvoll", "Ein Unternehmen ersetzt Namen in einer Auswertung durch Kundennummern, kann die Zuordnung aber über eine getrennte Tabelle wiederherstellen. Wie heißt dieses Verfahren?", ["Pseudonymisierung", "Anonymisierung", "Verschlüsselung ohne Schlüssel", "Löschung"], 0, "Bei Pseudonymisierung bleibt eine Re-Identifizierung mit Zusatzinformationen möglich; bei Anonymisierung nicht."),
    mc("sec-019", "datenschutz", "fortgeschritten", "Wann ist eine Datenschutz-Folgenabschätzung besonders naheliegend?", ["Wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Rechte und Freiheiten betroffener Personen erzeugt.", "Bei jeder Änderung eines Firmenlogos.", "Nur wenn weniger als 20 Personen Daten verarbeiten.", "Erst nachdem ein Datenschutzvorfall eingetreten ist."], 0, "Die DSFA bewertet Risiken vor einer besonders risikoreichen Verarbeitung und plant Schutzmaßnahmen."),
    mc("sec-020", "datenschutz", "anspruchsvoll", "Ein Cloud-Anbieter verarbeitet Kundendaten weisungsgebunden. Welche Regelung muss insbesondere Verantwortlichkeiten, Weisungen und technische Maßnahmen festlegen?", ["Ein Vertrag zur Auftragsverarbeitung", "Ein Kaufvertrag über Hardware", "Eine private Geheimhaltungsvereinbarung der Kunden", "Ein Wartungsvertrag ohne Datenbezug"], 0, "Die Auftragsverarbeitung nach DSGVO erfordert eine klare vertragliche Regelung zwischen Verantwortlichem und Auftragsverarbeiter."),
    mc("sec-021", "netzwerksicherheit", "fortgeschritten", "Warum ersetzt ein VPN im Hotel-WLAN nicht die Prüfung einer HTTPS-Verbindung?", ["Ein VPN schützt den Weg zum VPN-Endpunkt; HTTPS schützt zusätzlich die Ende-zu-Ende-Verbindung zur Website und deren Identität.", "HTTPS funktioniert innerhalb eines VPN grundsätzlich nicht.", "Ein VPN macht Zertifikate ungültig.", "Das Hotel-WLAN kann dann keine IP-Adressen mehr vergeben."], 0, "Beide Maßnahmen schützen unterschiedliche Abschnitte und Eigenschaften einer Verbindung."),
    mc("sec-022", "social-engineering", "anspruchsvoll", "Eine E-Mail fordert unter Zeitdruck zur Anmeldung über einen Link auf. Die Absenderadresse ähnelt der echten Domäne nur optisch. Welches Merkmal spricht am stärksten für Phishing?", ["Die abweichende tatsächliche Absenderdomäne in Kombination mit Zeitdruck und Login-Link", "Dass die E-Mail ein Firmenlogo enthält", "Dass sie an einem Werktag ankommt", "Dass sie Text statt eines Bildes enthält"], 0, "Phishing kombiniert oft technische Täuschung mit sozialem Druck. Die tatsächliche Domäne ist entscheidend."),
    mc("sec-023", "sicherheitsarchitektur", "fortgeschritten", "Was beschreibt Defense in Depth am treffendsten?", ["Mehrere voneinander unabhängige Schutzschichten, sodass der Ausfall einer Maßnahme nicht sofort zum vollständigen Kompromiss führt.", "Eine einzige sehr komplexe Firewall-Regel.", "Das Abschalten aller Protokollierung.", "Die Nutzung desselben Passworts in allen Systemen."], 0, "Mehrschichtige Schutzmaßnahmen reduzieren das Risiko eines Single Point of Failure in der Sicherheit."),
    mc("sec-024", "verfuegbarkeit", "anspruchsvoll", "Zwei Webserver arbeiten hinter einem Load Balancer. Ein Server fällt aus, der Dienst bleibt erreichbar. Welches Ziel wird primär erreicht?", ["Höhere Verfügbarkeit durch Redundanz", "Vertraulichkeit durch Verschlüsselung", "Datenminimierung", "Nichtabstreitbarkeit"], 0, "Redundanz kann den Ausfall einzelner Komponenten abfangen und die Verfügbarkeit steigern."),
    mc("sec-025", "zugriffsschutz", "fortgeschritten", "Welcher Fall ist ein Beispiel für eine technische Zugriffskontrolle statt einer organisatorischen Regel?", ["Eine Firewall verweigert Verbindungen zu einem nicht freigegebenen Port.", "Eine Arbeitsanweisung verbietet private USB-Sticks.", "Ein Aushang erinnert an die Clean-Desk-Policy.", "Eine Schulung erklärt Phishing."], 0, "Technische Maßnahmen werden durch Systeme durchgesetzt; Richtlinien und Schulungen sind organisatorische Maßnahmen."),
    mc("sec-026", "kryptografie", "anspruchsvoll", "Ein Empfänger soll nachweisen können, dass eine Nachricht vom angegebenen Absender stammt und unterwegs nicht verändert wurde. Was wird benötigt?", ["Eine digitale Signatur des Absenders", "Nur eine Komprimierung der Nachricht", "Eine öffentliche IP-Adresse des Empfängers", "Ein zweites identisches Passwort"], 0, "Eine digitale Signatur ermöglicht Authentizitäts- und Integritätsprüfung; sie ersetzt keine Verschlüsselung für Vertraulichkeit."),
    mc("sec-027", "malware", "fortgeschritten", "Warum ist das Arbeiten mit einem Standardbenutzerkonto im Alltag sicherer als dauerhaft mit lokalen Administratorrechten?", ["Schadsoftware erhält bei einem erfolgreichen Angriff weniger weitreichende Rechte.", "Standardkonten können keine Dateien lesen.", "Administratorrechte verhindern jede Phishing-Mail.", "Updates funktionieren nur mit Standardkonten."], 0, "Geringere Berechtigungen begrenzen die mögliche Auswirkung eines kompromittierten Kontos."),
    mc("sec-028", "datenschutz", "fortgeschritten", "Ein Kunde verlangt Auskunft über die zu seiner Person gespeicherten Daten. Welche Eigenschaft der Datenhaltung hilft besonders, fristgerecht und vollständig zu antworten?", ["Ein gepflegtes Verzeichnis der Verarbeitungstätigkeiten und nachvollziehbare Datenflüsse", "Möglichst viele lokale Excel-Dateien", "Das Deaktivieren aller Backups", "Eine möglichst lange Speicherfrist ohne Zweck"], 0, "Dokumentierte Verarbeitung und Datenflüsse unterstützen Betroffenenrechte und Datenschutz-Compliance."),
    mc("sec-029", "incident-response", "anspruchsvoll", "Warum sollte ein Sicherheitsvorfall dokumentiert werden, auch wenn er schnell behoben scheint?", ["Um Ursache, Umfang, Meldepflichten und Verbesserungsmaßnahmen nachvollziehbar bewerten zu können.", "Damit Logs anschließend gelöscht werden können.", "Weil Dokumentation den Angriff automatisch rückgängig macht.", "Nur für die Erstellung von Werbematerial."], 0, "Dokumentation ist für Forensik, Compliance und die Verbesserung von Schutzmaßnahmen notwendig."),
    mc("sec-030", "websicherheit", "fortgeschritten", "Ein Serverzertifikat ist abgelaufen. Welche Sicherheitsfolge hat das im Browser typischerweise?", ["Die Identität des Servers kann nicht mehr vertrauenswürdig validiert werden; die Verbindung darf nicht einfach als sicher akzeptiert werden.", "Der Inhalt wird automatisch verschlüsselt archiviert.", "Die DNS-Auflösung wird beschleunigt.", "Alle Nutzer erhalten automatisch Administratorrechte."], 0, "Zertifikatsprüfung ist Teil der TLS-Vertrauenskette. Warnungen dürfen nicht routinemäßig übergangen werden."),
    mc("sec-031", "datenschutz", "anspruchsvoll", "Ein Unternehmen bewahrt Newsletter-Anmeldedaten nach einer Abmeldung unbegrenzt auf, obwohl kein gesetzlicher Grund und kein anderer Zweck mehr besteht. Welcher Grundsatz ist besonders betroffen?", ["Speicherbegrenzung", "Datenübertragbarkeit", "Netzneutralität", "Verfügbarkeit"], 0, "Personenbezogene Daten sollen nicht länger als für den Zweck erforderlich gespeichert werden. Gesetzliche Aufbewahrungspflichten können eine begründete Ausnahme sein."),
    mc("sec-032", "backup", "anspruchsvoll", "Ein Fachbereich akzeptiert höchstens vier Stunden Datenverlust, der Dienst darf aber bis zu acht Stunden ausfallen. Welche Zuordnung ist richtig?", ["RPO = 4 Stunden, RTO = 8 Stunden", "RPO = 8 Stunden, RTO = 4 Stunden", "Beide Werte beschreiben nur die Backupgröße", "RPO und RTO sind identisch"], 0, "RPO beschreibt den maximal tolerierten Datenverlust in Zeit; RTO die maximal tolerierte Wiederherstellungsdauer."),
    mc("sec-033", "risikomanagement", "anspruchsvoll", "Ein Unternehmen akzeptiert ein geringes Restrisiko, nachdem es Maßnahmen umgesetzt hat. Welche Aussage ist fachlich richtig?", ["Sicherheit wird risikobasiert verbessert; ein absolutes Nullrisiko ist in der Praxis kaum erreichbar.", "Nach einer Maßnahme existiert immer garantiert kein Risiko mehr.", "Restrisiko bedeutet, dass keine Schutzmaßnahme dokumentiert werden darf.", "Risiken dürfen nur nach einem Schaden bewertet werden."], 0, "Risikomanagement identifiziert, bewertet und behandelt Risiken; ein verbleibendes Restrisiko wird bewusst entschieden und überwacht.")
  ],
  "sql": [
    mc("sql-021", "datenmodell", "fortgeschritten", "Eine Tabelle Bestellung enthält die Spalte KundenID, die auf Kunde(KundenID) verweist. Welche Aufgabe hat diese Beziehung?", ["Sie stellt per Fremdschlüssel sicher, dass eine Bestellung einem vorhandenen Kunden zugeordnet werden kann.", "Sie macht KundenID automatisch zu einem Passwort.", "Sie ersetzt einen Primärschlüssel in beiden Tabellen.", "Sie sortiert Bestellungen alphabetisch."], 0, "Ein Fremdschlüssel modelliert Beziehungen und kann referenzielle Integrität durchsetzen."),
    mc("sql-022", "datenmodell", "fortgeschritten", "Warum ist eine automatisch vergebene Bestellnummer als Primärschlüssel oft besser geeignet als der Kundenname?", ["Sie ist stabil und eindeutig, während Namen sich ändern oder mehrfach vorkommen können.", "Sie enthält immer die vollständige Adresse.", "Sie verhindert jede Fremdschlüsselbeziehung.", "Sie macht Indizes überflüssig."], 0, "Primärschlüssel müssen jeden Datensatz eindeutig und möglichst dauerhaft identifizieren."),
    mc("sql-023", "joins", "anspruchsvoll", "Eine Abfrage soll alle Kunden zeigen, auch solche ohne Bestellung. Welche Join-Richtung ist bei Kunde LEFT JOIN Bestellung passend?", ["Kunde links, Bestellung rechts; Kunden ohne Treffer erhalten für Bestellspalten NULL.", "Bestellung links, Kunde rechts; fehlende Kunden werden gelöscht.", "INNER JOIN, weil er immer alle Kunden liefert.", "CROSS JOIN, weil er nur passende Kunden liefert."], 0, "Ein LEFT JOIN erhält alle Zeilen der linken Tabelle und ergänzt nicht vorhandene rechte Werte mit NULL."),
    mc("sql-024", "joins", "anspruchsvoll", "Eine Abfrage verbindet Kunde und Bestellung, enthält aber versehentlich keine JOIN-Bedingung. Welches Risiko besteht?", ["Es kann ein unbeabsichtigtes kartesisches Produkt mit sehr vielen falschen Kombinationen entstehen.", "Die Datenbank ergänzt automatisch den passenden Fremdschlüssel.", "Es werden garantiert nur Kunden ohne Bestellung angezeigt.", "Die Tabellen werden automatisch gelöscht."], 0, "Ohne korrekte Verknüpfungsbedingung kann jede Zeile der einen Tabelle mit jeder Zeile der anderen kombiniert werden."),
    mc("sql-025", "aggregation", "anspruchsvoll", "Eine Abfrage soll nur Artikelgruppen mit mindestens zehn Bestellungen zeigen. Wo gehört die Bedingung COUNT(*) >= 10 hin?", ["In HAVING nach GROUP BY", "In WHERE vor SELECT", "In ORDER BY", "In den Tabellennamen"], 0, "WHERE filtert einzelne Ausgangszeilen; HAVING filtert aggregierte Gruppen."),
    mc("sql-026", "null", "fortgeschritten", "Warum liefert WHERE Lieferdatum = NULL nicht die Zeilen ohne Lieferdatum?", ["NULL steht für unbekannt beziehungsweise nicht vorhanden und wird mit IS NULL geprüft.", "NULL ist dasselbe wie die Zahl 0.", "Der Vergleich funktioniert nur mit ORDER BY.", "NULL darf nur in Primärschlüsseln stehen."], 0, "In SQL ist NULL kein normaler Wert. Verwende IS NULL beziehungsweise IS NOT NULL."),
    mc("sql-027", "transaktionen", "anspruchsvoll", "Bei einer Geldüberweisung wird der Betrag vom Quellkonto abgebucht, aber ein Fehler verhindert die Gutschrift. Welche Transaktionseigenschaft verhindert einen halbfertigen Zustand?", ["Atomarität", "Redundanz", "Denormalisierung", "Sortierung"], 0, "Atomarität bedeutet: Alle Schritte einer Transaktion werden vollständig durchgeführt oder vollständig zurückgerollt."),
    mc("sql-028", "transaktionen", "fortgeschritten", "Welche ACID-Eigenschaft stellt sicher, dass eine erfolgreich bestätigte Transaktion einen Stromausfall übersteht?", ["Durability (Dauerhaftigkeit)", "Consistency allein", "Join-Fähigkeit", "Kardinalität"], 0, "Dauerhaftigkeit stellt sicher, dass bestätigte Änderungen persistent bleiben."),
    mc("sql-029", "integritaet", "fortgeschritten", "Eine Spalte Menge darf nie negativ sein. Welche Datenbankregel passt am besten?", ["CHECK (Menge >= 0)", "ORDER BY Menge", "LEFT JOIN Menge", "DROP TABLE Menge"], 0, "Eine CHECK-Constraint begrenzt zulässige Werte direkt in der Datenbank."),
    mc("sql-030", "integritaet", "fortgeschritten", "Welchen Zweck erfüllt eine UNIQUE-Constraint auf E-Mail, wenn NULL nicht betrachtet wird?", ["Sie verhindert, dass dieselbe E-Mail-Adresse mehrfach gespeichert wird.", "Sie verschlüsselt die Adresse.", "Sie erstellt automatisch eine zweite Tabelle.", "Sie erlaubt beliebig viele gleiche Werte."], 0, "UNIQUE erzwingt Eindeutigkeit für die betreffenden Werte."),
    mc("sql-031", "performance", "anspruchsvoll", "Eine Abfrage filtert häufig nach Kundennummer und danach nach Bestelldatum. Welcher Index ist als Ausgangspunkt am ehesten passend?", ["Ein zusammengesetzter Index mit Kundennummer vor Bestelldatum", "Ein Index nur auf einer unbeteiligten Beschreibungsspalte", "Kein Index, weil Indizes nie lesen beschleunigen", "Ein Index auf jeder Spalte ohne Analyse"], 0, "Ein Index sollte zu den Filter- und Sortiermustern passen; zusätzliche Indizes kosten Speicher und Schreibaufwand."),
    mc("sql-032", "performance", "fortgeschritten", "Warum kann ein Index eine INSERT- oder UPDATE-Operation verlangsamen?", ["Neben dem Datensatz müssen auch betroffene Indexstrukturen gepflegt werden.", "Indizes löschen automatisch alle neuen Daten.", "Indizes funktionieren nur bei SELECT.", "Ein Index verschlüsselt jede Zeile."], 0, "Indizes beschleunigen viele Lesezugriffe, verursachen aber Pflegeaufwand bei Änderungen."),
    mc("sql-033", "normalisierung", "anspruchsvoll", "In Bestellung stehen Kundennummer, Kundenname und Kundenadresse bei jeder Bestellung erneut. Welche Anomalie droht bei einer Adressänderung?", ["Eine Update-Anomalie, weil mehrere Bestellzeilen konsistent geändert werden müssten.", "Eine Verschlüsselungs-Anomalie.", "Eine JOIN-Anomalie, die Daten löscht.", "Keine, weil Wiederholung immer Normalform bedeutet."], 0, "Wiederholte Kundendaten führen zu redundanten Änderungen; die Kundendaten gehören in eine eigene Tabelle."),
    mc("sql-034", "normalisierung", "fortgeschritten", "Eine Tabelle Kursbelegung hat den zusammengesetzten Schlüssel (TeilnehmerID, KursID), enthält aber zusätzlich TeilnehmerName. Warum verletzt das typischerweise die 2. Normalform?", ["TeilnehmerName hängt nur von TeilnehmerID, also nur von einem Teil des zusammengesetzten Schlüssels ab.", "TeilnehmerName ist niemals ein Attribut.", "Ein zusammengesetzter Schlüssel darf keine Fremdschlüssel enthalten.", "2NF verlangt immer genau eine Spalte pro Tabelle."], 0, "Bei einem zusammengesetzten Schlüssel dürfen Nichtschlüsselattribute nicht nur von einem Schlüsselteil abhängen."),
    mc("sql-035", "sicherheit", "anspruchsvoll", "Eine Anwendung baut SQL aus Eingaben durch Verkettung zusammen. Welche Lösung ist fachlich korrekt?", ["Parameterisierte Queries verwenden und Eingaben als Daten statt als SQL-Code übergeben.", "Anführungszeichen aus der Eingabe entfernen und sonst nichts tun.", "Die Datenbank ohne Benutzerkonto öffnen.", "Fehlermeldungen für Administratoren sichtbar lassen."], 0, "Prepared Statements verhindern, dass Eingaben als Teil der SQL-Syntax interpretiert werden."),
    mc("sql-036", "dml", "fortgeschritten", "Welche Reihenfolge beschreibt eine sichere Änderung vieler Datensätze in einer Transaktion am besten?", ["Änderung ausführen, Ergebnis prüfen und bei Erfolg COMMIT; bei Fehler ROLLBACK.", "Sofort COMMIT und danach überlegen.", "Zuerst DROP TABLE und dann UPDATE.", "ROLLBACK nur bei erfolgreichen Änderungen."], 0, "Transaktionen erlauben kontrollierte, zusammenhängende Änderungen."),
    mc("sql-037", "abfragen", "fortgeschritten", "Welche Bedingung findet Namen, die mit 'Meier' beginnen, aber nicht zwingend exakt so heißen?", ["WHERE Name LIKE 'Meier%'", "WHERE Name = '%Meier'", "WHERE Name LIKE '%Meier%' nur am Ende", "WHERE Name IN NULL"], 0, "In LIKE steht % für eine beliebige Folge von Zeichen; ein Suffix-% steht für einen Präfixvergleich."),
    mc("sql-038", "abfragen", "anspruchsvoll", "Eine Auswertung soll den Umsatz je Kunde berechnen und Kunden ohne Bestellung mit 0 anzeigen. Welche Kombination ist erforderlich?", ["LEFT JOIN von Kunde auf Bestellung, Aggregation und eine Behandlung von NULL für den Umsatz", "INNER JOIN ohne Aggregation", "DELETE mit WHERE", "CROSS JOIN ohne Bedingung"], 0, "Der LEFT JOIN erhält auch Kunden ohne Bestellung; Aggregation und NULL-Behandlung erzeugen den gewünschten Wert."),
    mc("sql-039", "datenqualitaet", "fortgeschritten", "Warum sollte die Geschäftsregel 'E-Mail-Adresse ist erforderlich' zusätzlich zur Formularprüfung in der Datenbank abgesichert werden?", ["Weil Daten auch über andere Wege importiert oder geschrieben werden können und die Datenbank die letzte Integritätsgrenze ist.", "Weil Datenbanken keine Formulare unterstützen.", "Weil NOT NULL jede E-Mail automatisch validiert.", "Weil dadurch keine Berechtigungen mehr nötig sind."], 0, "Anwendungsvalidierung verbessert die Bedienung; Constraints schützen die Daten unabhängig vom Zugriffsweg."),
    mc("sql-040", "views", "fortgeschritten", "Ein Supportteam soll nur Name, Kundennummer und Ticketstatus sehen, nicht aber Rechnungsdaten. Welche Lösung unterstützt dieses Ziel?", ["Eine View mit den benötigten Spalten und passenden Berechtigungen", "Vollzugriff auf alle Tabellen", "Eine Kopie der gesamten Datenbank auf jedem PC", "Das Entfernen aller Primärschlüssel"], 0, "Views können Datenzugriffe vereinfachen und in Verbindung mit Rechten die Sicht auf notwendige Daten beschränken."),
    mc("sql-041", "joins", "anspruchsvoll", "In einer Abfrage werden Kunden mit ihren Bestellungen verbunden. Was passiert, wenn ein Kunde drei Bestellungen hat?", ["Der Kunde erscheint in der Join-Ergebnismenge typischerweise in drei Zeilen, je Bestellung einmal.", "Der Kunde erscheint nie, weil Joins nur 1:1-Beziehungen erlauben.", "Die drei Bestellungen werden automatisch zu einer Zeile addiert.", "Die Datenbank löscht doppelte Kundennummern."], 0, "Ein Join bildet die vorhandenen Beziehungen ab. Aggregation ist ein zusätzlicher Schritt, wenn eine Zeile pro Kunde gewünscht ist."),
    mc("sql-042", "abfragen", "fortgeschritten", "Warum ist SELECT * in einer produktiven Schnittstelle oft ungünstig?", ["Es koppelt die Schnittstelle an alle Spalten, kann unnötige Daten übertragen und sensible Spalten versehentlich preisgeben.", "Es kann keine Daten lesen.", "Es verhindert jede Indexnutzung grundsätzlich.", "Es liefert immer nur eine Zeile."], 0, "Explizite Spaltenlisten machen Datenbedarf, Berechtigungen und Schnittstellen stabiler."),
    mc("sql-043", "dml", "anspruchsvoll", "Eine Löschabfrage soll vor Ausführung überprüft werden. Welcher sichere Ablauf ist sinnvoll?", ["Zuerst denselben WHERE-Filter mit SELECT prüfen, dann in einer Transaktion DELETE ausführen und kontrollieren.", "DELETE ohne WHERE ausführen und danach filtern.", "Die Tabelle umbenennen und dann löschen.", "Den Datenbankserver neu starten."], 0, "Ein vorangestelltes SELECT hilft, den Filter zu validieren; eine Transaktion ermöglicht bei Bedarf ROLLBACK."),
    mc("sql-044", "datenmodell", "fortgeschritten", "Welche Beziehung liegt vor, wenn ein Kunde viele Bestellungen haben kann, jede Bestellung aber genau einem Kunden gehört?", ["1:n von Kunde zu Bestellung", "n:m ohne Zwischentabelle", "1:1 zwingend", "Keine Beziehung"], 0, "Ein Kunde kann zu vielen Bestellungen referenziert werden; die Fremdschlüsselspalte liegt üblicherweise in Bestellung."),
    mc("sql-045", "datenmodell", "anspruchsvoll", "Studierende können mehrere Kurse besuchen und ein Kurs mehrere Studierende haben. Wie wird diese n:m-Beziehung relational sauber modelliert?", ["Mit einer Zwischentabelle, die auf Studierende und Kurse verweist.", "Indem alle Kursnamen in einer Textspalte mit Kommas gespeichert werden.", "Indem die Tabelle Kurse gelöscht wird.", "Mit einem einzigen Primärschlüssel in beiden Tabellen ohne Beziehung."], 0, "Eine Zuordnungstabelle modelliert die einzelnen Belegungen und kann weitere Attribute wie Anmeldedatum tragen."),
    mc("sql-046", "transaktionen", "fortgeschritten", "Welches Problem kann auftreten, wenn zwei Prozesse denselben Lagerbestand gleichzeitig lesen und beide danach einen neuen Wert schreiben?", ["Ein Lost Update, wenn die Änderungen nicht geeignet synchronisiert oder transaktional geschützt werden.", "Ein DNS-Konflikt.", "Eine Normalformverletzung durch einen Primärschlüssel.", "Eine automatische Datensicherung."], 0, "Nebenläufigkeit benötigt Transaktions- und Isolationskonzepte, damit konkurrierende Änderungen korrekt bleiben."),
    mc("sql-047", "aggregation", "fortgeschritten", "Was zählt COUNT(Spalte) in einer Gruppe?", ["Nur Zeilen, in denen diese Spalte nicht NULL ist.", "Immer alle Zeilen einschließlich NULL.", "Nur unterschiedliche Zeilen unabhängig von DISTINCT.", "Die Zeichen der Spaltennamen."], 0, "COUNT(*) zählt Zeilen; COUNT(Spalte) ignoriert NULL in dieser Spalte."),
    mc("sql-048", "sicherheit", "fortgeschritten", "Warum sollte ein Anwendungsdatenbankkonto nicht mit Administrationsrechten betrieben werden?", ["Bei einem kompromittierten Anwendungskonto begrenzt minimale Berechtigung den möglichen Schaden.", "Administrationsrechte machen Abfragen langsamer.", "Administrationsrechte verhindern Backups.", "Datenbanken unterstützen keine Rollen."], 0, "Auch Datenbankkonten sollten nur die für ihre Aufgabe nötigen Rechte besitzen."),
    textQuestion("sql-049", "transaktionen", "fortgeschritten", "Wie heißt der Befehl, der eine erfolgreiche Transaktion dauerhaft bestätigt?", ["commit"], "COMMIT bestätigt die Änderungen einer Transaktion dauerhaft."),
    textQuestion("sql-050", "transaktionen", "fortgeschritten", "Wie heißt der Befehl, der nicht bestätigte Änderungen einer Transaktion zurücknimmt?", ["rollback"], "ROLLBACK verwirft die nicht bestätigten Änderungen der aktuellen Transaktion.")
  ],
  "ipv4": [
    mc("ip-018", "adressplanung", "fortgeschritten", "Ein Standort benötigt mindestens 50 nutzbare Hostadressen in einem Subnetz. Welches der folgenden Präfixe ist das kleinste passende?", ["/26", "/27", "/28", "/29"], 0, "/26 bietet 62 nutzbare Hostadressen. /27 bietet nur 30."),
    mc("ip-019", "adressplanung", "fortgeschritten", "Ein /24-Netz wird in gleich große /27-Subnetze aufgeteilt. Wie viele Subnetze entstehen?", ["8", "4", "16", "32"], 0, "Von /24 auf /27 werden drei Bits für die Subnetzbildung genutzt: 2^3 = 8 Subnetze."),
    mc("ip-020", "adressplanung", "anspruchsvoll", "Welches Subnetz enthält die Adresse 192.168.5.140/27?", ["192.168.5.128/27", "192.168.5.96/27", "192.168.5.140/27", "192.168.5.160/27"], 0, "Bei /27 beträgt die Blockgröße 32. Die Bereiche beginnen bei 0, 32, 64, 96, 128, 160 usw.; 140 liegt im Bereich 128 bis 159."),
    mc("ip-021", "adressplanung", "anspruchsvoll", "Ist 10.0.0.31 in einem Netz 10.0.0.0/27 als Hostadresse verwendbar?", ["Nein, es ist die Broadcastadresse dieses Subnetzes.", "Ja, es ist der erste Host.", "Ja, es ist die Netzwerkadresse.", "Nein, weil 10.0.0.0 nie privat ist."], 0, "Ein /27-Subnetz 10.0.0.0/27 reicht von .0 bis .31; .0 ist Netzadresse und .31 Broadcast."),
    mc("ip-022", "adressplanung", "anspruchsvoll", "Ein Router hat die Adresse 172.16.20.1/23. Welche Adresse liegt sicher im selben Subnetz?", ["172.16.21.200", "172.16.22.1", "172.16.18.254", "172.16.24.1"], 0, "Ein /23 umfasst in diesem Fall 172.16.20.0 bis 172.16.21.255."),
    mc("ip-023", "private-adressen", "fortgeschritten", "Welche Adresse gehört zu einem privaten IPv4-Adressbereich nach RFC 1918?", ["172.20.10.5", "172.40.10.5", "169.254.10.5", "8.8.8.8"], 0, "Privat sind 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16. 172.20.x.x liegt im Bereich 172.16 bis 172.31."),
    mc("ip-024", "private-adressen", "fortgeschritten", "Ein Client erhält 169.254.42.10 und keine konfigurierte Gateway-Adresse. Was ist die wahrscheinlichste Ursache?", ["Der Client hat keine DHCP-Antwort erhalten und verwendet eine Link-Local-Adresse.", "Der Client ist erfolgreich über NAT im Internet.", "Der DNS-Server hat einen MX-Eintrag geliefert.", "Die Adresse ist eine normale statische öffentliche Adresse."], 0, "APIPA beziehungsweise IPv4 Link-Local-Adressen 169.254.0.0/16 weisen häufig auf ein DHCP-Problem hin."),
    mc("ip-025", "dhcp", "anspruchsvoll", "Ein Gerät erhält per DHCP eine Adresse, die bereits statisch an einem Drucker vergeben ist. Welche vorbeugende Konfiguration ist passend?", ["Den statischen Bereich außerhalb des DHCP-Pools halten oder eine DHCP-Reservierung verwenden.", "Beide Geräte mit derselben MAC-Adresse betreiben.", "Den DHCP-Server abschalten.", "Die Subnetzmaske auf /32 setzen."], 0, "Adressbereiche müssen geplant sein; Reservierungen binden eine Adresse kontrolliert an eine MAC-Adresse."),
    mc("ip-026", "routing", "anspruchsvoll", "Ein Router kennt sowohl 10.10.0.0/16 als auch 10.10.20.0/24. Wohin leitet er ein Paket für 10.10.20.50 gemäß Longest-Prefix-Match?", ["Über die Route 10.10.20.0/24", "Über die Route 10.10.0.0/16, weil sie zuerst eingetragen wurde", "An die Broadcastadresse", "Ohne Routing über ARP ins Internet"], 0, "Die spezifischste passende Route mit dem längsten Präfix wird bevorzugt."),
    mc("ip-027", "routing", "fortgeschritten", "Wozu dient ein Default Gateway für einen Client?", ["Als nächster Hop für Ziele außerhalb des eigenen Subnetzes", "Als Ersatz für die eigene IP-Adresse", "Als Server für alle DNS-Zonen", "Als Broadcastadresse im lokalen Netz"], 0, "Ziele im eigenen Subnetz werden direkt erreicht; für fremde Netze sendet der Client an das Gateway."),
    mc("ip-028", "subnetting", "anspruchsvoll", "Welche zwei /25-Netze zerlegen 192.168.10.0/24 vollständig und ohne Überschneidung?", ["192.168.10.0/25 und 192.168.10.128/25", "192.168.10.0/25 und 192.168.10.64/25", "192.168.10.0/24 und 192.168.10.128/25", "192.168.10.1/25 und 192.168.10.129/25"], 0, "Die /25-Blöcke eines /24 beginnen bei .0 und .128."),
    mc("ip-029", "subnetting", "fortgeschritten", "Wie viele nutzbare Hosts hat ein /30-Subnetz im klassischen IPv4-Einsatz?", ["2", "4", "6", "14"], 0, "Ein /30 hat vier Adressen: Netzadresse, zwei Hostadressen und Broadcastadresse."),
    mc("ip-030", "subnetting", "anspruchsvoll", "Ein Unternehmen reserviert 192.168.100.0/24. Es benötigt Netze für 100, 50 und 20 Hosts. Welche Zuteilung nutzt VLSM sinnvoll von groß nach klein?", ["/25 für 100 Hosts, /26 für 50 Hosts, /27 für 20 Hosts", "/26 für 100 Hosts, /27 für 50 Hosts, /28 für 20 Hosts", "/24 für jeden Bereich", "/27 für alle drei Bereiche"], 0, "/25 bietet 126, /26 62 und /27 30 nutzbare Hosts. VLSM vergibt passende unterschiedlich große Netze."),
    mc("ip-031", "subnetting", "fortgeschritten", "Warum darf die Netzwerkadresse eines IPv4-Subnetzes nicht einem Endgerät zugewiesen werden?", ["Sie identifiziert das gesamte Subnetz und ist keine Hostadresse.", "Sie ist immer die Adresse des DNS-Servers.", "Sie enthält zu viele Einsen.", "Sie kann nur mit WLAN verwendet werden."], 0, "Die Adresse mit allen Host-Bits auf 0 bezeichnet das Netz selbst."),
    mc("ip-032", "broadcast", "fortgeschritten", "Ein Host sendet an die gerichtete Broadcastadresse seines Subnetzes. Wer ist das Ziel dieser Übertragung?", ["Alle Hosts dieses einen Subnetzes", "Nur das Default Gateway", "Alle Hosts im gesamten Internet", "Nur der DNS-Server"], 0, "Die gerichtete Broadcastadresse adressiert alle Hosts im eigenen Subnetz. Router begrenzen deren Ausbreitung in andere Netze normalerweise."),
    mc("ip-033", "fehleranalyse", "anspruchsvoll", "Zwei PCs haben 192.168.1.10/24 und 192.168.1.20/25. Beide hängen am selben Switch. Warum kann Kommunikation zu anderen Netzen asymmetrisch fehlschlagen?", ["Die Hosts beurteilen anhand unterschiedlicher Masken verschieden, welche Ziele lokal sind.", "Ein Switch kann nie zwei IP-Adressen weiterleiten.", "/25 deaktiviert ARP vollständig.", "Die niedrigere Hostnummer ist ungültig."], 0, "Unterschiedliche Subnetzmasken führen zu unterschiedlichen Routingentscheidungen und sollten in einem Layer-2-Segment vermieden werden."),
    mc("ip-034", "nat", "fortgeschritten", "Warum wird NAT in vielen privaten IPv4-Netzen eingesetzt?", ["Mehrere private Hosts können über wenige oder eine öffentliche IPv4-Adresse kommunizieren.", "NAT ersetzt jede Firewall-Regel.", "NAT verteilt DNS-Namen.", "NAT macht alle Daten Ende-zu-Ende verschlüsselt."], 0, "NAT adressiert IPv4-Adressknappheit, ist aber kein Ersatz für Sicherheits- oder Verschlüsselungsmaßnahmen."),
    mc("ip-035", "adressplanung", "anspruchsvoll", "Welche Adresse ist in 192.168.50.64/26 ein gültiger Host?", ["192.168.50.100", "192.168.50.64", "192.168.50.127", "192.168.50.128"], 0, "Das /26-Subnetz reicht von .64 bis .127; gültige Hosts sind .65 bis .126."),
    mc("ip-036", "adressplanung", "anspruchsvoll", "Ein /24-Netz soll vier gleich große Subnetze mit jeweils mindestens 50 Hosts liefern. Welches Präfix hat jedes Teilnetz?", ["/26", "/25", "/27", "/28"], 0, "Vier gleich große Teilnetze benötigen zwei zusätzliche Netzbits: /24 wird zu /26. Jedes /26 hat 62 nutzbare Hosts."),
    mc("ip-037", "routing", "fortgeschritten", "Ein Client möchte 192.168.1.50 erreichen und besitzt selbst 192.168.1.10/24. Welche Information benötigt er zunächst auf Layer 2?", ["Die MAC-Adresse von 192.168.1.50, typischerweise per ARP", "Die öffentliche IP des Default Gateways", "Den TCP-Port des DNS-Servers", "Die Broadcastadresse des Internets"], 0, "Für ein Ziel im eigenen Subnetz ermittelt der Client dessen MAC-Adresse über ARP und sendet direkt."),
    mc("ip-038", "dhcp", "fortgeschritten", "Welche DHCP-Information ist nötig, damit ein Client Namen wie intranet.firma.de auflösen kann?", ["Die Adresse eines DNS-Servers", "Die MAC-Adresse des Switches", "Die Broadcastadresse", "Die Seriennummer des Routers"], 0, "DHCP kann unter anderem IP-Adresse, Maske, Gateway und DNS-Server übermitteln."),
    mc("ip-039", "subnetting", "anspruchsvoll", "Wie lautet die Broadcastadresse für 10.1.2.96/28?", ["10.1.2.111", "10.1.2.96", "10.1.2.112", "10.1.2.127"], 0, "Bei /28 beträgt die Blockgröße 16. Der Bereich .96 bis .111 hat .111 als Broadcastadresse."),
    mc("ip-040", "subnetting", "anspruchsvoll", "Welche Präfixlänge entspricht der Maske 255.255.255.224?", ["/27", "/24", "/26", "/28"], 0, "224 entspricht im letzten Oktett 11100000, also drei weitere Netzbits nach /24: /27."),
    mc("ip-041", "fehleranalyse", "fortgeschritten", "Ein Client kann IP-Adressen im Internet anpingen, aber keine Domainnamen auflösen. Welcher Dienst ist am wahrscheinlichsten fehlerhaft konfiguriert?", ["DNS", "DHCP-Leasezeit", "Switch-Portgeschwindigkeit", "NAT allein"], 0, "Wenn die IP-Konnektivität besteht, aber Namen nicht aufgelöst werden, ist DNS der naheliegende Prüfpunkt."),
    mc("ip-042", "adressplanung", "anspruchsvoll", "Welcher Adressplan verhindert eine Überschneidung mit einem bereits verwendeten Netz 10.0.0.0/16?", ["10.1.0.0/16", "10.0.20.0/24", "10.0.0.0/24", "10.0.128.0/17"], 0, "Alle Netze innerhalb 10.0.0.0/16 überschneiden sich; 10.1.0.0/16 nicht."),
    mc("ip-043", "routing", "anspruchsvoll", "Ein Client besitzt kein Default Gateway. Welche Kommunikation bleibt bei korrekter Maske trotzdem möglich?", ["Zu Hosts im eigenen Subnetz", "Zu jedem Ziel im Internet", "Nur zu DNS-Servern außerhalb des Netzes", "Zu keinem anderen Host"], 0, "Für lokale Ziele ist kein Router nötig; fremde Netze sind ohne Default Route nicht erreichbar."),
    mc("ip-044", "subnetting", "fortgeschritten", "Welche ist die erste nutzbare Hostadresse im Subnetz 192.168.1.72/29?", ["192.168.1.73", "192.168.1.72", "192.168.1.79", "192.168.1.80"], 0, "Ein /29 hat Blöcke zu acht Adressen. Das Netz beginnt bei .72, der Broadcast ist .79; die erste nutzbare Hostadresse ist .73."),
    mc("ip-045", "fehleranalyse", "anspruchsvoll", "Ein neuer Drucker nutzt dieselbe IP wie ein bestehender Server. Welches Symptom ist typisch?", ["Die Erreichbarkeit derselben IP ist instabil oder Antworten stammen wechselnd von unterschiedlichen Geräten.", "Beide Geräte erhalten automatisch unterschiedliche IPs.", "DNS verhindert einen IP-Konflikt immer.", "Der Switch wandelt die Adresse in IPv6 um."], 0, "Doppelte IP-Adressen verursachen ARP-Konflikte und unzuverlässige Kommunikation.")
  ],
  "netzwerke": [
    mc("net-019", "switching", "fortgeschritten", "Wie lernt ein Layer-2-Switch üblicherweise, an welchem Port eine MAC-Adresse erreichbar ist?", ["Er ordnet die Quell-MAC eingehender Frames dem Eingangsport zu.", "Er fragt den DNS-Server nach jeder MAC-Adresse.", "Er liest die Ziel-IP aus dem HTTP-Header.", "Er sendet nur an das Default Gateway."], 0, "Switches lernen Quell-MAC-Adressen und nutzen ihre MAC-Adress-Tabelle für gezieltes Weiterleiten."),
    mc("net-020", "switching", "anspruchsvoll", "Ein Switch kennt die Ziel-MAC eines eingehenden Frames noch nicht. Was tut er innerhalb desselben VLANs typischerweise?", ["Er floodet den Frame an alle passenden Ports außer dem Eingangsport.", "Er verwirft ihn immer.", "Er sendet ihn ausschließlich an den DNS-Server.", "Er ändert die Ziel-MAC in die Broadcastadresse."], 0, "Unknown Unicast wird im betreffenden VLAN geflutet, bis die Zuordnung gelernt ist."),
    mc("net-021", "vlan", "fortgeschritten", "Welches Problem löst ein VLAN auf einem Switch hauptsächlich?", ["Es trennt Broadcast-Domänen logisch, auch wenn Geräte an derselben Hardware angeschlossen sind.", "Es erhöht automatisch die Internetbandbreite.", "Es ersetzt IP-Adressen durch MAC-Adressen.", "Es verschlüsselt Frames automatisch."], 0, "VLANs segmentieren Layer-2-Netze logisch. Kommunikation zwischen VLANs benötigt Routing."),
    mc("net-022", "vlan", "anspruchsvoll", "Ein PC in VLAN 10 soll einen Server in VLAN 20 erreichen. Welche Komponente oder Funktion wird benötigt?", ["Inter-VLAN-Routing über einen Router oder Layer-3-Switch", "Nur ein weiterer Hub", "Ein längeres Ethernet-Kabel", "Ein zweiter DHCP-Client"], 0, "VLANs sind getrennte IP-Netze beziehungsweise Broadcast-Domänen; zwischen ihnen wird geroutet."),
    mc("net-023", "vlan", "fortgeschritten", "Wofür wird ein Trunk-Port zwischen zwei Switches verwendet?", ["Um Frames mehrerer VLANs über eine Verbindung zu transportieren und ihre VLAN-Zuordnung zu kennzeichnen.", "Um genau einen Endgerät-Port ohne VLAN zu betreiben.", "Um DHCP zu deaktivieren.", "Um eine Glasfaserleitung in Kupfer umzuwandeln."], 0, "Trunks transportieren mehrere VLANs, häufig mit IEEE 802.1Q-Tags."),
    mc("net-024", "switching", "anspruchsvoll", "Warum wird Spanning Tree Protocol in redundant verkabelten Switch-Netzen eingesetzt?", ["Um Layer-2-Schleifen und daraus entstehende Broadcast-Stürme zu verhindern.", "Um IP-Adressen dynamisch zu vergeben.", "Um WLAN-Passwörter zu speichern.", "Um TCP-Verbindungen zu verschlüsseln."], 0, "STP blockiert bei Bedarf redundante Pfade logisch und erhält trotzdem Ausfallsicherheit."),
    mc("net-025", "ethernet", "fortgeschritten", "Was ist der praktische Vorteil von Full Duplex auf einer Ethernet-Verbindung?", ["Senden und Empfangen können gleichzeitig erfolgen, ohne klassische Kollisionen auf dem Link.", "Die IP-Adresse wird doppelt so lang.", "Broadcasts werden automatisch blockiert.", "Ein Switch wird dadurch zu einem Router."], 0, "Bei Full Duplex existiert kein gemeinsames Kollisionsmedium wie bei einem Hub."),
    mc("net-026", "poe", "fortgeschritten", "Warum ist Power over Ethernet für einen Access Point an der Decke praktisch?", ["Strom und Daten können über dasselbe Ethernet-Kabel bereitgestellt werden.", "PoE ersetzt die Netzwerkkonfiguration.", "PoE verschlüsselt den WLAN-Verkehr.", "PoE vergibt automatisch IP-Adressen."], 0, "PoE reduziert separate Stromleitungen, setzt aber kompatible Switches oder Injektoren und passende Leistungsklassen voraus."),
    mc("net-027", "arp", "fortgeschritten", "Welches Problem löst ARP in einem IPv4-LAN?", ["Es ermittelt zu einer bekannten lokalen IPv4-Adresse die zugehörige MAC-Adresse.", "Es übersetzt Domainnamen in IP-Adressen.", "Es verteilt IP-Adressen per Lease.", "Es verschlüsselt Ethernet-Frames."], 0, "ARP verbindet Layer 3 und Layer 2 im lokalen IPv4-Segment."),
    mc("net-028", "routing", "anspruchsvoll", "Ein Host sendet ein Paket an eine externe IP. Welche MAC-Adresse steht normalerweise im ersten Ethernet-Frame als Zieladresse?", ["Die MAC-Adresse des Default Gateways", "Die MAC-Adresse des entfernten Zielservers", "Die MAC-Adresse des DNS-Servers", "Die Broadcast-MAC-Adresse in jedem Fall"], 0, "Für ein fremdes IP-Netz adressiert der Host den Frame an den nächsten Router; die IP-Zieladresse bleibt die des entfernten Systems."),
    mc("net-029", "transport", "fortgeschritten", "Welche Eigenschaft spricht für TCP statt UDP bei einem Dateiübertragungsprotokoll?", ["TCP bietet verbindungsorientierte, bestätigte und geordnete Übertragung.", "TCP hat keine Ports.", "TCP arbeitet nur im lokalen Netzwerk.", "TCP ersetzt die IP-Adressierung."], 0, "TCP übernimmt unter anderem Zuverlässigkeit, Reihenfolge und Flusskontrolle; UDP verzichtet bewusst darauf."),
    mc("net-030", "transport", "fortgeschritten", "Für welche Anwendung ist UDP wegen geringer Latenz und tolerierbarer einzelner Verluste häufig sinnvoller als TCP?", ["Echtzeit-Audio oder -Video", "Eine Banküberweisung in einer Datenbank", "Der Download einer vollständigen Datei mit Integritätsanforderung", "Eine SSH-Sitzung"], 0, "Bei Echtzeitdaten ist ein verspätetes Paket oft weniger wert als ein verlorenes; die Anwendung kann Verluste behandeln."),
    mc("net-031", "dns", "anspruchsvoll", "Ein Browser erreicht https://intranet.firma.de nicht, aber https://10.10.0.20 funktioniert. Welche Prüfung ist zuerst sinnvoll?", ["Die DNS-Auflösung von intranet.firma.de und den zugehörigen Eintrag prüfen.", "Die MAC-Adresse des Monitors ändern.", "Alle Switches neu starten.", "Das Betriebssystem neu installieren."], 0, "Erreicht der Browser die IP, aber nicht den Namen, deutet dies auf DNS oder Namenskonfiguration hin."),
    mc("net-032", "dns", "fortgeschritten", "Welche DNS-Eintragsart ordnet einem Hostnamen eine IPv4-Adresse zu?", ["A", "MX", "CNAME", "PTR"], 0, "A-Records enthalten IPv4-Adressen. AAAA steht für IPv6, MX für Mailserver und PTR für Reverse Lookup."),
    mc("net-033", "dns", "fortgeschritten", "Wozu dient ein DNS-MX-Eintrag?", ["Er benennt zuständige Mailserver für eine Domain.", "Er vergibt MAC-Adressen.", "Er verschlüsselt E-Mails Ende zu Ende.", "Er ersetzt SPF und DKIM."], 0, "MX-Records helfen sendenden Mailservern, den Ziel-Mailserver einer Domain zu finden."),
    mc("net-034", "dhcp", "anspruchsvoll", "Warum ist eine DHCP-Reservierung für einen Netzwerkdrucker oft besser als eine manuell vergebene Adresse im DHCP-Bereich?", ["Der DHCP-Server verwaltet die eindeutige Zuordnung der gewünschten Adresse zur MAC-Adresse zentral.", "Die Reservierung macht DNS unnötig.", "Sie verhindert jede Störung im Ethernet-Kabel.", "Sie vergibt dem Drucker automatisch Administratorrechte."], 0, "Reservierungen verbinden planbare Adressen mit zentraler Adressverwaltung und vermeiden Überschneidungen."),
    mc("net-035", "wlan", "fortgeschritten", "Warum sollten Access Points in dichtem WLAN-Ausbau abgestimmt geplante, nicht überlappende Kanäle verwenden?", ["Um gegenseitige Funkstörungen und unnötige Wartezeiten im gemeinsamen Medium zu reduzieren.", "Damit jeder Client dieselbe MAC-Adresse erhält.", "Damit VLANs überflüssig werden.", "Damit WPA2 automatisch zu WPA3 wird."], 0, "Funk ist ein geteiltes Medium. Kanalplanung verbessert Kapazität und Stabilität."),
    mc("net-036", "wlan", "anspruchsvoll", "Welcher Schutz ist für ein Unternehmens-WLAN mit individuellen Benutzerkonten gegenüber einem gemeinsamen Kennwort besonders geeignet?", ["WPA2-Enterprise oder WPA3-Enterprise mit 802.1X und RADIUS", "Ein öffentlich sichtbares Passwort an der Rezeption", "WEP mit kurzem Schlüssel", "Ein versteckter SSID-Name als alleinige Maßnahme"], 0, "802.1X ermöglicht individuelle Authentisierung und gezielte Sperrung einzelner Zugänge; SSID-Verbergen ist kein wirksamer Schutz."),
    mc("net-037", "firewall", "fortgeschritten", "Was bedeutet das Prinzip 'Default Deny' bei einer Firewall?", ["Nicht ausdrücklich erlaubter Verkehr wird standardmäßig blockiert.", "Jeder Verkehr wird erlaubt und später protokolliert.", "Nur DNS wird blockiert.", "Die Firewall akzeptiert keine Regeln."], 0, "Eine explizite Freigabeliste reduziert die Angriffsfläche gegenüber pauschal offenem Verkehr."),
    mc("net-038", "proxy", "anspruchsvoll", "Welche Aufgabe kann ein Reverse Proxy vor mehreren Webservern übernehmen?", ["Anfragen an Backend-Server weiterleiten und dabei beispielsweise TLS terminieren oder Last verteilen.", "Clients private IP-Adressen per DHCP geben.", "Ethernet-Kollisionen erkennen.", "Lokale Benutzerkonten in Active Directory anlegen."], 0, "Ein Reverse Proxy steht auf Serverseite vor Backends; er ist nicht mit einem Forward Proxy für Clientzugriffe gleichzusetzen."),
    mc("net-039", "routing", "fortgeschritten", "Warum trennt ein Router Broadcast-Domänen?", ["Er leitet Layer-2-Broadcasts normalerweise nicht zwischen verschiedenen IP-Netzen weiter.", "Er verwandelt Broadcasts in Multicasts.", "Er vergibt jedem Switch eine gleiche MAC-Adresse.", "Er benötigt keine Routingtabelle."], 0, "Router verbinden Netze auf Layer 3 und begrenzen die Ausbreitung lokaler Broadcasts."),
    mc("net-040", "qos", "fortgeschritten", "Welches Ziel verfolgt Quality of Service in einem Netzwerk?", ["Zeitkritischen Verkehr wie Sprache oder Video gegenüber weniger kritischem Verkehr planbar bevorzugen.", "Jede Anwendung dauerhaft mit exakt gleicher Bandbreite versorgen.", "Pakete verschlüsseln.", "DNS-Records automatisch reparieren."], 0, "QoS klassifiziert und priorisiert Verkehr, wenn Ressourcen knapp sind."),
    mc("net-041", "mtu", "anspruchsvoll", "Was kann passieren, wenn ein Pfad eine kleinere MTU unterstützt als ein Sender annimmt und notwendige ICMP-Hinweise gefiltert werden?", ["Verbindungen können wegen PMTUD-Problemen scheinbar hängen, obwohl Grundkonnektivität besteht.", "Der Switch vergibt neue IP-Adressen.", "DNS löscht die Zone.", "TCP wird automatisch zu UDP."], 0, "Path MTU Discovery benötigt passende Rückmeldungen; blockiertes ICMP kann schwer diagnostizierbare Fragmentierungsprobleme verursachen."),
    mc("net-042", "vpn", "fortgeschritten", "Was unterscheidet einen Site-to-Site-VPN-Tunnel von einem Remote-Access-VPN?", ["Site-to-Site verbindet typischerweise ganze Netze über Gateways; Remote Access bindet einzelne Clients ein.", "Site-to-Site funktioniert nur ohne Verschlüsselung.", "Remote Access benötigt keine Authentisierung.", "Beide Begriffe bezeichnen ausschließlich WLAN."], 0, "Beide schützen Daten über unsichere Netze, unterscheiden sich aber in den verbundenen Endpunkten."),
    mc("net-043", "netzwerkdiagnose", "anspruchsvoll", "Ein Client erreicht sein Gateway, aber keine externe IP. Der DNS-Server ist erreichbar. Welche Komponente ist als Nächstes besonders relevant?", ["Die Routing- oder NAT-Konfiguration hinter dem Gateway", "Die lokale Bildschirmauflösung", "Die Reihenfolge der Desktop-Symbole", "Die Hostdatei des Druckers"], 0, "Die Tests grenzen den Fehler ein: lokales Netz und DNS sind erreichbar, der Weg aus dem Netz muss geprüft werden."),
    mc("net-044", "osi", "fortgeschritten", "Warum ist das OSI-Modell bei der Fehlersuche nützlich?", ["Es hilft, Probleme schichtweise einzugrenzen, etwa Kabel, Link, IP, Transport und Anwendung.", "Es legt weltweit alle IP-Adressen fest.", "Es ersetzt Monitoring und Logs.", "Es ist ein Verschlüsselungsalgorithmus."], 0, "Das Modell ist eine Denk- und Kommunikationshilfe, keine konkrete Implementierung eines einzelnen Protokolls."),
    mc("net-045", "netzwerkdiagnose", "anspruchsvoll", "Ein PC erhält per DHCP IP-Adresse, Maske und DNS-Server, aber kein Default Gateway. Welche Folge ist am wahrscheinlichsten?", ["Ziele im lokalen Subnetz funktionieren, Ziele in anderen Netzen typischerweise nicht.", "DNS funktioniert zwingend nicht.", "Der PC kann keine lokale ARP-Anfrage senden.", "Alle lokalen Dateien werden gelöscht."], 0, "Ohne Gateway fehlt die Route für Ziele außerhalb des eigenen Subnetzes."),
    mc("net-046", "sicherheit", "anspruchsvoll", "Ein Switch-Port soll nur die konfigurierte MAC-Adresse eines Inventargeräts akzeptieren und bei einer fremden MAC-Adresse sperren oder alarmieren. Welche Funktion passt?", ["Port Security", "DHCP Relay", "NAT", "DNS Forwarding"], 0, "Port Security begrenzt zugelassene MAC-Adressen an einem physischen Switch-Port. Für benutzer- oder zertifikatsbasierte Netzwerkanmeldung wäre 802.1X ein anderer Ansatz."),
    mc("net-047", "routing", "fortgeschritten", "Welcher Unterschied besteht zwischen einem Switch und einem Router im Kern?", ["Ein Switch verbindet Endgeräte vor allem innerhalb eines Layer-2-Netzes; ein Router leitet Pakete zwischen Layer-3-Netzen weiter.", "Ein Router kann keine MAC-Adressen verwenden.", "Ein Switch vergibt immer öffentliche IP-Adressen.", "Beide arbeiten nur auf der Anwendungsschicht."], 0, "Moderne Geräte können mehrere Funktionen kombinieren, die Grundaufgaben bleiben jedoch unterschiedlich."),
    mc("net-048", "http", "fortgeschritten", "Welcher HTTP-Statuscode weist typischerweise darauf hin, dass eine Ressource nicht gefunden wurde?", ["404", "200", "301", "500"], 0, "200 bedeutet Erfolg, 301 eine Umleitung, 404 nicht gefunden und 500 einen serverseitigen Fehler."),
    mc("net-049", "tls", "anspruchsvoll", "Welche Aussage zu TLS-Zertifikaten ist richtig?", ["Der Client prüft unter anderem, ob der angefragte Hostname zum Zertifikat passt und die Vertrauenskette gültig ist.", "Ein Zertifikat ersetzt jedes Benutzerpasswort.", "Ein Zertifikat macht einen Webserver automatisch frei von Sicherheitslücken.", "Ein Zertifikat wird nur für IPv6 benötigt."], 0, "TLS-Zertifikate helfen bei Authentisierung des Servers und beim Aufbau einer verschlüsselten Verbindung."),
    mc("net-050", "lastverteilung", "fortgeschritten", "Welche Kennzahl ist für einen Load Balancer wichtig, um einen ausgefallenen Webserver nicht weiter mit Anfragen zu versorgen?", ["Ein regelmäßiger Health Check", "Die Bildschirmgröße des Clients", "Die Länge der DNS-Domain", "Die Farbe des Switch-Gehäuses"], 0, "Health Checks erkennen nicht erreichbare oder fehlerhafte Backends, damit sie aus dem Pool genommen werden können."),
    mc("net-051", "dns", "fortgeschritten", "Wofür dient ein PTR-Record im DNS?", ["Für die Rückwärtsauflösung von einer IP-Adresse zu einem Namen", "Für die Zuordnung eines Namens zu IPv4", "Für Mailrouting", "Für DHCP-Leases"], 0, "PTR-Records werden in Reverse-Lookup-Zonen verwendet."),
    mc("net-052", "switching", "anspruchsvoll", "Warum ist ein Hub in modernen Ethernet-Netzen gegenüber einem Switch ungeeignet?", ["Er teilt das Medium und sendet Frames an alle Ports, was Kollisionen und unnötigen Verkehr begünstigt.", "Er kann keine Stromversorgung liefern.", "Er verwendet zwingend IPv6.", "Er routet zu viele Netze."], 0, "Ein Switch lernt MAC-Adressen und leitet bekannten Unicast-Verkehr gezielt weiter."),
    mc("net-053", "ipv6", "fortgeschritten", "Warum wird IPv6 langfristig zusätzlich zu oder statt IPv4 eingesetzt?", ["Der IPv4-Adressraum ist begrenzt; IPv6 stellt einen sehr viel größeren Adressraum bereit.", "IPv6 benötigt keine Routingtabellen.", "IPv6 kann keine Verschlüsselung unterstützen.", "IPv6 verwendet keine Präfixe."], 0, "IPv6 löst nicht jedes Netzwerkproblem, adressiert aber insbesondere die Knappheit öffentlicher IPv4-Adressen."),
    mc("net-054", "diagnose", "anspruchsvoll", "Welche Reihenfolge ist bei der strukturierten Fehlersuche sinnvoll?", ["Zuerst das Problem eingrenzen und reproduzieren, dann schichtweise prüfen und Änderungen dokumentieren.", "Zufällig möglichst viele Komponenten austauschen.", "Zuerst alle Logs löschen.", "Sofort das gesamte Netzwerk neu adressieren."], 0, "Strukturiertes Vorgehen reduziert Nebenwirkungen und erleichtert die Ursachenanalyse."),
    mc("net-055", "sicherheit", "fortgeschritten", "Warum sollte ein Gast-WLAN in einem eigenen VLAN mit restriktiven Regeln betrieben werden?", ["Gäste erhalten Internetzugang, ohne automatisch auf interne Systeme zugreifen zu können.", "Damit Gäste dieselben Rechte wie Administratoren bekommen.", "Damit kein DHCP erforderlich ist.", "Damit alle WLANs dieselbe SSID haben müssen."], 0, "Segmentierung begrenzt Zugriffe zwischen nicht vertrauenswürdigen und internen Bereichen.")
  ],
  "it-grundlagen": [
    mc("base-014", "betriebssysteme", "fortgeschritten", "Welche Aufgabe übernimmt ein Betriebssystemkern unter anderem?", ["Er verwaltet Hardware-Ressourcen und stellt grundlegende Dienste für Prozesse bereit.", "Er ersetzt jede Anwendungssoftware.", "Er speichert Passwörter ausschließlich im Klartext.", "Er ist nur für die Bildschirmdarstellung zuständig."], 0, "Der Kernel vermittelt zwischen Hardware und Programmen, etwa bei Speicher-, Prozess- und Geräteverwaltung."),
    mc("base-015", "speicher", "fortgeschritten", "Warum ist Arbeitsspeicher (RAM) für laufende Programme schneller nutzbar als eine SSD, aber nicht als dauerhafter Speicher geeignet?", ["RAM ist flüchtig und für schnellen Zugriff ausgelegt; ohne Strom geht sein Inhalt verloren.", "RAM ist immer größer als jede SSD.", "RAM speichert nur Betriebssystemdateien.", "Eine SSD verliert beim Ausschalten grundsätzlich alle Daten."], 0, "RAM dient als schneller temporärer Speicher; SSDs sind nichtflüchtige Massenspeicher."),
    mc("base-016", "speicher", "anspruchsvoll", "Ein System hat zu wenig RAM und lagert Speicherbereiche auf die SSD aus. Welche Folge ist typisch?", ["Die Leistung kann durch häufige Auslagerungen deutlich sinken.", "Die SSD wird zu echtem RAM ohne Unterschied.", "Der Prozessor erhält automatisch mehr Kerne.", "Das Netzwerk erhält höhere Bandbreite."], 0, "Virtueller Speicher hilft bei Knappheit, ist aber wegen der langsameren Massenspeicherzugriffe kein Ersatz für ausreichend RAM."),
    mc("base-017", "virtualisierung", "fortgeschritten", "Was unterscheidet einen Hypervisor Typ 1 von Typ 2?", ["Typ 1 läuft direkt auf der Hardware, Typ 2 auf einem Host-Betriebssystem.", "Typ 1 unterstützt keine virtuellen Maschinen.", "Typ 2 kann nur Linux ausführen.", "Beide Begriffe beschreiben Backup-Arten."], 0, "Bare-Metal-Hypervisor laufen ohne allgemeines Host-Betriebssystem zwischen Hardware und VMs."),
    mc("base-018", "virtualisierung", "anspruchsvoll", "Ein Testsystem soll mit eigenem Betriebssystemkern, eigenem Netzwerk und klarer Isolation laufen. Welche Wahl passt eher?", ["Eine virtuelle Maschine", "Ein Container ohne weitere Konfiguration", "Ein Browser-Lesezeichen", "Ein RAID-Verbund"], 0, "VMs virtualisieren Hardware und enthalten ein eigenes Gastbetriebssystem; Container teilen typischerweise den Host-Kernel."),
    mc("base-019", "container", "fortgeschritten", "Welcher Vorteil von Containern erklärt ihre schnelle Startzeit gegenüber vielen virtuellen Maschinen?", ["Container teilen den Kernel des Host-Betriebssystems und enthalten nicht zwingend ein vollständiges Gastbetriebssystem.", "Container benötigen grundsätzlich keine Ressourcen.", "Container sind automatisch sicherer als jede VM.", "Container ersetzen Netzwerksegmentierung."], 0, "Die geringere Isolationsebene und der gemeinsame Kernel reduzieren Start- und Ressourcenaufwand."),
    mc("base-020", "speicher", "anspruchsvoll", "Welche RAID-Eigenschaft bietet RAID 1 bei zwei gleich großen Festplatten?", ["Spiegelung mit Redundanz; nutzbar ist ungefähr die Kapazität einer Platte.", "Doppelte Kapazität ohne Redundanz.", "Parität über mindestens drei Platten.", "Keine Datenredundanz bei maximaler Streifenbildung."], 0, "RAID 1 spiegelt Daten. Es ersetzt dennoch kein Backup gegen Löschen, Ransomware oder Standortverlust."),
    mc("base-021", "speicher", "fortgeschritten", "Warum ist RAID kein Ersatz für ein Backup?", ["RAID schützt je nach Level vor Plattenausfall, nicht aber zuverlässig vor Löschen, Malware oder logischer Beschädigung.", "RAID speichert Daten nur offline.", "RAID verhindert jede Fehlbedienung.", "RAID macht Wiederherstellungstests unnötig."], 0, "Redundanz erhöht Verfügbarkeit, während Backups unabhängige Wiederherstellungspunkte bereitstellen."),
    mc("base-022", "cloud", "fortgeschritten", "Ein Unternehmen mietet virtuelle Maschinen und verwaltet darauf Betriebssystem und Anwendungen selbst. Welches Cloud-Modell beschreibt dies?", ["IaaS", "SaaS", "PaaS", "On-Premises ohne Dienstleister"], 0, "Bei Infrastructure as a Service stellt der Anbieter Infrastruktur bereit; Kunde verwaltet typischerweise Betriebssystem und Anwendungen."),
    mc("base-023", "cloud", "fortgeschritten", "Ein Team nutzt einen fertigen webbasierten E-Mail-Dienst und verwaltet weder Server noch Betriebssystem. Welches Modell liegt vor?", ["SaaS", "IaaS", "PaaS", "Bare Metal"], 0, "Software as a Service liefert eine fertige Anwendung; der Anbieter betreibt die zugrunde liegende Plattform."),
    mc("base-024", "cloud", "anspruchsvoll", "Welcher Cloud-Vorteil wird mit Elastizität beschrieben?", ["Ressourcen können bei Lastbedarf bedarfsgerecht hoch- und wieder herunterskaliert werden.", "Daten werden automatisch dauerhaft gelöscht.", "Jeder Dienst erhält immer dieselbe feste Hardware.", "Verschlüsselung wird überflüssig."], 0, "Elastizität erlaubt eine flexible Anpassung von Ressourcen; sie benötigt dennoch Kosten- und Kapazitätskontrolle."),
    mc("base-025", "verfuegbarkeit", "anspruchsvoll", "Ein Dienst soll bei Ausfall eines Servers weiterlaufen. Welche Kombination ist erforderlich?", ["Redundante Komponenten, Fehlererkennung und ein geplanter Failover", "Ein besonders großes einzelnes Netzteil", "Nur eine schnellere CPU", "Ein lokales Benutzerkonto"], 0, "Hochverfügbarkeit erfordert mehr als eine zweite Maschine: Daten, Zustandsübernahme und Umschaltung müssen berücksichtigt werden."),
    mc("base-026", "dateisysteme", "fortgeschritten", "Welche Aufgabe erfüllt ein Dateisystem hauptsächlich?", ["Es organisiert Dateien, Verzeichnisse, Metadaten und Zugriffsstrukturen auf einem Datenträger.", "Es ersetzt den Arbeitsspeicher.", "Es löst Domainnamen auf.", "Es ist ein Netzwerkprotokoll."], 0, "Dateisysteme strukturieren die Speicherung und Zugriffe auf Massenspeicher."),
    mc("base-027", "schnittstellen", "fortgeschritten", "Warum sind APIs für die Integration von Anwendungen wichtig?", ["Sie definieren einen kontrollierten, dokumentierten Weg, Funktionen oder Daten zwischen Systemen auszutauschen.", "Sie machen Berechtigungen unnötig.", "Sie ersetzen Datenformate vollständig.", "Sie funktionieren nur im Browser."], 0, "APIs benötigen dennoch Authentisierung, Autorisierung, Versionierung und Fehlerbehandlung."),
    mc("base-028", "datenformate", "fortgeschritten", "Welche Eigenschaft macht JSON für viele Web-APIs praktisch?", ["Es bildet strukturierte Daten kompakt und sprachübergreifend ab.", "Es kann keine verschachtelten Daten darstellen.", "Es ist automatisch verschlüsselt.", "Es enthält immer eine Datenbankabfrage."], 0, "JSON ist ein Datenformat; Transportverschlüsselung und Validierung müssen separat umgesetzt werden."),
    mc("base-029", "cpu", "anspruchsvoll", "Eine Anwendung nutzt nur einen Ausführungsfaden. Welcher CPU-Ausbau beschleunigt sie nicht zwingend proportional?", ["Mehr zusätzliche Kerne", "Höhere Leistung eines einzelnen Kerns", "Schnellerer Speicherzugriff", "Beseitigung eines Engpasses in der Anwendung"], 0, "Ohne Parallelisierung kann ein einzelner Thread nur begrenzt von weiteren Kernen profitieren."),
    mc("base-030", "backup", "fortgeschritten", "Was sollte ein Wiederherstellungstest eines Backups nachweisen?", ["Dass die benötigten Daten innerhalb der geforderten Zeit korrekt wiederhergestellt werden können.", "Nur dass eine Backup-Datei existiert.", "Dass die Backup-Software installiert ist.", "Dass alle Anwender lokale Administratoren sind."], 0, "Ein ungetestetes Backup ist keine nachgewiesene Wiederherstellungsstrategie."),
    mc("base-031", "verteilte-systeme", "anspruchsvoll", "Warum müssen verteilte Systeme mit Teilausfällen rechnen?", ["Netzwerkverbindungen oder einzelne Knoten können ausfallen, während andere Teile weiterlaufen.", "Alle Komponenten fallen immer gleichzeitig aus.", "Eine Datenbank kann dort keine Daten speichern.", "Verteilte Systeme benötigen keine Zeitstempel."], 0, "Teilausfälle und Netzwerkverzögerungen machen Konsistenz, Wiederholungen und Fehlerbehandlung anspruchsvoll."),
    mc("base-032", "virtualisierung", "fortgeschritten", "Was ist ein Snapshot einer virtuellen Maschine primär?", ["Ein zeitpunktbezogener Zustand, der für Tests oder kurzfristige Rückkehrpunkte nützlich sein kann.", "Ein vollständiger Ersatz für langfristige Backups.", "Eine Methode zur Verschlüsselung des Netzwerks.", "Eine physische Festplatte."], 0, "Snapshots können abhängig vom System wachsen und liegen oft am selben Speicher; sie ersetzen keine unabhängigen Backups."),
    mc("base-033", "speicher", "anspruchsvoll", "Eine Datenbank benötigt viele zufällige Lesezugriffe mit geringer Latenz. Welcher Speicher bringt gegenüber einer HDD typischerweise den größten Vorteil?", ["SSD oder NVMe-SSD", "Magnetband", "Optisches Archivmedium", "Ein langsameres Netzlaufwerk"], 0, "Flash-Speicher bietet deutlich geringere Zugriffszeiten als rotierende Festplatten."),
    mc("base-034", "sicherheit", "fortgeschritten", "Warum ist eine USV in einer Serverumgebung sinnvoll?", ["Sie überbrückt kurze Stromausfälle und ermöglicht ein kontrolliertes Herunterfahren.", "Sie ersetzt alle Backups.", "Sie erhöht die Netzwerkkapazität.", "Sie verschlüsselt Festplatten."], 0, "Eine unterbrechungsfreie Stromversorgung reduziert Risiken durch plötzlichen Stromverlust, ersetzt aber keine Redundanz über längere Ausfälle."),
    mc("base-035", "monitoring", "fortgeschritten", "Welches Ziel verfolgt Monitoring in einer IT-Umgebung?", ["Zustände und Kennzahlen beobachten, um Störungen früh zu erkennen und Ursachen einzugrenzen.", "Mitarbeiterpasswörter sammeln.", "Regelmäßig Daten löschen.", "Hardware ohne Messwerte austauschen."], 0, "Metriken, Logs und Alerts unterstützen Betrieb, Kapazitätsplanung und Incident Response."),
    mc("base-036", "cloud", "anspruchsvoll", "Welche Verantwortung bleibt bei einem SaaS-Dienst typischerweise beim Kunden?", ["Benutzer, Zugriffsrechte, Datenklassifikation und korrekte Konfiguration des Dienstes", "Die physische Reparatur der Rechenzentrumsserver", "Die Firmware der Netzwerkgeräte des Anbieters", "Die Kühlung des Anbieter-Rechenzentrums"], 0, "Das Shared-Responsibility-Modell verschiebt Verantwortungen, hebt sie aber nicht auf."),
    mc("base-037", "betriebssysteme", "fortgeschritten", "Was bedeutet Prozessisolation im Betriebssystemkontext?", ["Ein Prozess kann nicht beliebig direkt auf den Speicher eines anderen Prozesses zugreifen.", "Alle Prozesse teilen immer denselben Speicher ohne Schutz.", "Nur Administratoren dürfen Prozesse starten.", "Prozesse benötigen keine Ressourcen."], 0, "Speicherschutz und Berechtigungen begrenzen Auswirkungen fehlerhafter oder kompromittierter Anwendungen."),
    mc("base-038", "lizenzierung", "fortgeschritten", "Warum ist Open-Source-Software nicht automatisch ohne Lizenzpflicht nutzbar?", ["Auch Open-Source-Lizenzen enthalten Bedingungen, etwa zu Weitergabe, Lizenztexten oder Quellcodepflichten.", "Open Source darf nur privat verwendet werden.", "Open Source besitzt nie Urheberrechte.", "Jede Open-Source-Lizenz ist identisch."], 0, "Die konkrete Lizenz muss geprüft werden; Open Source beschreibt den Zugang zum Quellcode, nicht das Fehlen aller Bedingungen."),
    mc("base-039", "datenintegritaet", "fortgeschritten", "Wofür kann ein Prüfsummen-Hash bei einem Dateidownload verwendet werden?", ["Um zu prüfen, ob die heruntergeladene Datei mit dem erwarteten Datenstand übereinstimmt.", "Um die Datei ohne Schlüssel zu entschlüsseln.", "Um eine IP-Adresse zu vergeben.", "Um eine Datenbanktabelle zu normalisieren."], 0, "Stimmt ein vertrauenswürdig bereitgestellter Hash nicht überein, wurde die Datei verändert oder unvollständig übertragen."),
    mc("base-040", "skalierung", "anspruchsvoll", "Was ist der Unterschied zwischen vertikaler und horizontaler Skalierung?", ["Vertikal erweitert eine einzelne Instanz; horizontal verteilt Last auf zusätzliche Instanzen.", "Vertikal betrifft nur Datenbanken, horizontal nur PCs.", "Horizontal erhöht immer die CPU-Taktfrequenz.", "Beide bedeuten ausschließlich mehr Speicherplatz."], 0, "Horizontale Skalierung benötigt häufig Load Balancing und zustandsarme oder koordinierte Anwendungen."),
    mc("base-041", "datenformate", "fortgeschritten", "Warum sollte eine Anwendung externe JSON-Daten validieren, bevor sie verarbeitet werden?", ["Damit erwartete Struktur und Datentypen geprüft werden und fehlerhafte oder unerwartete Eingaben kontrolliert behandelt werden.", "Weil JSON nie Text enthalten darf.", "Damit TLS überflüssig wird.", "Weil JSON automatisch eine Datenbank ist."], 0, "Parsing allein garantiert weder fachliche Gültigkeit noch Sicherheit."),
    mc("base-042", "kapazitaetsplanung", "anspruchsvoll", "Ein Server erreicht regelmäßig 95 % RAM-Auslastung und lagert stark aus. Welche Maßnahme ist vor einer Beschaffung sinnvoll?", ["Messdaten und verursachende Prozesse analysieren, um den tatsächlichen Engpass zu bestätigen.", "Sofort alle Dienste deaktivieren.", "Die IP-Adresse ändern.", "Die Logs löschen."], 0, "Kapazitätsplanung basiert auf Messwerten und Lastprofilen, nicht auf Vermutungen."),
    mc("base-043", "backup", "fortgeschritten", "Welche Aussage beschreibt eine sinnvolle Backup-Strategie am besten?", ["Mehrere Kopien auf unterschiedlichen Medien oder Orten mit regelmäßig getesteter Wiederherstellung", "Eine einzige Kopie auf demselben Server", "RAID ohne Wiederherstellungstest", "Nur Screenshots wichtiger Dateien"], 0, "Mehrere voneinander getrennte Kopien reduzieren das Risiko gemeinsamer Ausfallursachen."),
    mc("base-044", "virtualisierung", "anspruchsvoll", "Warum muss bei der Konsolidierung vieler VMs auf einem Host auch die Ausfallsicherheit geplant werden?", ["Der Ausfall eines einzelnen Hosts kann mehrere Dienste gleichzeitig betreffen.", "VMs können nie gleichzeitig ausfallen.", "Virtualisierung verhindert Hardwaredefekte.", "Ein Host benötigt keine Wartung."], 0, "Konsolidierung spart Ressourcen, erhöht aber die Bedeutung von Redundanz, Backups und Failover-Konzepten."),
    mc("base-045", "sicherheit", "fortgeschritten", "Welche Maßnahme reduziert das Risiko eines Schadens durch einen verlorenen Laptop am stärksten?", ["Vollverschlüsselung des Datenträgers mit sicher verwaltetem Schlüssel", "Ein kürzerer Gerätename", "Das Ausschalten von Updates", "Eine statische IP-Adresse"], 0, "Datenträgerverschlüsselung schützt gespeicherte Daten, wenn das Gerät physisch verloren geht.")
  ],
  "windows-netzwerke": [
    mc("win-net-009", "active-directory", "fortgeschritten", "Warum werden Benutzer und Computer in Active Directory häufig in Organisationseinheiten (OUs) strukturiert?", ["Um Verwaltung, Delegation und gezielte Anwendung von Gruppenrichtlinien zu ermöglichen.", "Damit jeder Benutzer einen eigenen Domain Controller erhält.", "Damit DNS nicht mehr benötigt wird.", "Damit alle Berechtigungen lokal gespeichert werden."], 0, "OUs sind Verwaltungscontainer; sie helfen bei Delegation und bei der GPO-Verknüpfung."),
    mc("win-net-010", "gpo", "anspruchsvoll", "Ein Benutzer erhält eine Kennwortrichtlinie aus einer verknüpften GPO. Welche Reihenfolge beschreibt die übliche Verarbeitung von GPOs?", ["Local, Site, Domain, OU", "OU, Domain, Site, Local", "DNS, DHCP, GPO, OU", "Nur die zuletzt erstellte GPO"], 0, "Die typische Reihenfolge lautet LSDOU. Später angewendete Einstellungen können bei Konflikten vorherige überschreiben."),
    mc("win-net-011", "gpo", "fortgeschritten", "Was bewirkt 'Block Inheritance' auf einer OU grundsätzlich?", ["Vererbte GPOs höherer Ebenen werden für diese OU grundsätzlich nicht übernommen, soweit sie nicht erzwungen sind.", "Alle lokalen Benutzer werden gelöscht.", "Die OU wird zur neuen Domäne.", "DNS-Einträge werden blockiert."], 0, "Block Inheritance ist kein universeller Schutz: erzwungene GPOs können weiterhin wirken."),
    mc("win-net-012", "gpo", "fortgeschritten", "Welche Wirkung hat eine als 'Enforced' markierte GPO gegenüber Block Inheritance?", ["Sie wird trotz Block Inheritance weiter vererbt.", "Sie kann keine Computereinstellungen enthalten.", "Sie gilt nur für lokale Konten.", "Sie deaktiviert Active Directory."], 0, "Erzwungene GPOs sind ein starkes Mittel und sollten gezielt eingesetzt werden."),
    mc("win-net-013", "gpo", "anspruchsvoll", "Eine GPO soll nur für Mitglieder der Gruppe Vertrieb gelten, obwohl sie an der OU mit allen Mitarbeitenden verknüpft ist. Welche Technik ergänzt die Verknüpfung passend?", ["Security Filtering mit der Gruppe Vertrieb und passenden Les-/Anwenden-Rechten", "Ein zweites DHCP-Scope", "Eine Änderung der Subnetzmaske", "Ein lokales Administratorpasswort"], 0, "Security Filtering grenzt die Anwendung einer GPO auf berechtigte Sicherheitsprinzipale ein."),
    mc("win-net-014", "gpo", "fortgeschritten", "Warum sollte eine neue GPO zunächst an einer Test-OU erprobt werden?", ["Fehlkonfigurationen lassen sich mit begrenzter Auswirkung erkennen, bevor viele Nutzer oder Rechner betroffen sind.", "Weil GPOs in Produktiv-OUs nie funktionieren.", "Weil Test-OUs keinen Domain Controller benötigen.", "Damit Kennwörter im Klartext gespeichert werden."], 0, "Stufenweise Einführung und Rückfallplanung reduzieren Betriebsrisiken."),
    mc("win-net-015", "authentisierung", "fortgeschritten", "Welche zentrale Aufgabe übernimmt ein Domain Controller bei der Anmeldung in einer Active-Directory-Domäne?", ["Er prüft Domänenanmeldungen und stellt Verzeichnis- sowie Authentisierungsdienste bereit.", "Er ersetzt alle Datei- und Druckserver zwingend.", "Er verteilt automatisch WLAN-Funkkanäle.", "Er ist nur ein lokaler Benutzeraccount."], 0, "Domain Controller hosten Active Directory Domain Services und arbeiten eng mit DNS und Kerberos zusammen."),
    mc("win-net-016", "authentisierung", "anspruchsvoll", "Ein mobiler Benutzer hat sich bereits an einem Domänenlaptop angemeldet und arbeitet vorübergehend ohne Verbindung zum Domain Controller. Was ist bei einer erneuten Anmeldung typischerweise möglich?", ["Eine Anmeldung mit zuvor zwischengespeicherten Domänenanmeldedaten; Domänenressourcen bleiben ohne Netzwerk jedoch nicht normal erreichbar.", "Eine neue Domänenidentität wird automatisch erstellt.", "Alle Gruppenrichtlinien werden vollständig vom Internet geladen.", "Das Konto erhält automatisch Domain-Adminrechte."], 0, "Windows kann vorherige Domänenanmeldungen zwischenspeichern. Das ersetzt keine Verbindung zu AD-Diensten oder Netzwerkressourcen."),
    mc("win-net-017", "kerberos", "anspruchsvoll", "Warum ist eine möglichst genaue Zeitsynchronisation in einer Kerberos-Domäne wichtig?", ["Kerberos-Tickets sind zeitgebunden; starke Zeitabweichungen können Anmeldungen verhindern.", "Sie erhöht die Festplattenkapazität.", "Sie ersetzt DNS-SRV-Einträge.", "Sie deaktiviert Gruppenrichtlinien."], 0, "Zeitstempel begrenzen Wiederholungsangriffe. Deshalb ist ein zuverlässiger Zeitdienst in AD-Umgebungen wesentlich."),
    mc("win-net-018", "berechtigungen", "fortgeschritten", "Warum sollten Berechtigungen bevorzugt Gruppen statt einzelnen Benutzerkonten zugewiesen werden?", ["Rollenwechsel und Ein-/Austritte lassen sich durch Gruppenmitgliedschaften zentraler und nachvollziehbarer verwalten.", "Einzelne Benutzer können dann keine Dateien öffnen.", "Gruppen verschlüsseln Dateien automatisch.", "Gruppen machen Auditierung unmöglich."], 0, "Rollenbasierte Gruppen verringern Pflegeaufwand und Fehler bei individuellen Berechtigungen."),
    mc("win-net-019", "berechtigungen", "anspruchsvoll", "Ein Mitarbeiter erhält Zugriff auf einen Ordner über zwei Gruppen: Lesen und Ändern. Welche Berechtigung ist im Regelfall effektiv, sofern kein explizites Deny greift?", ["Ändern, weil erlaubte Berechtigungen zusammengeführt werden.", "Keine Berechtigung, weil Gruppen sich gegenseitig aufheben.", "Nur Lesen, weil die schwächste Berechtigung immer gewinnt.", "Vollzugriff, weil zwei Gruppen beteiligt sind."], 0, "NTFS-Allow-Berechtigungen werden kumuliert; explizites Deny hat jedoch besondere Wirkung und sollte sparsam eingesetzt werden."),
    mc("win-net-020", "gpo", "anspruchsvoll", "Eine Benutzer-GPO setzt ein Netzlaufwerk, wird aber bei einem bestimmten Konto nicht angewendet. Welche Diagnose ist besonders zielgerichtet?", ["Mit gpresult beziehungsweise der Gruppenrichtlinienauswertung prüfen, welche GPOs angewendet oder gefiltert wurden.", "Die IP-Adresse des Benutzers löschen.", "Den Bildschirmtreiber neu installieren.", "Den Domainnamen in einen Dateinamen umbenennen."], 0, "Gruppenrichtlinienauswertungen zeigen Verknüpfung, Filterung und Fehler bei der Verarbeitung."),
    mc("win-net-021", "gpo", "fortgeschritten", "Was ist der Unterschied zwischen Benutzer- und Computerkonfiguration in einer GPO?", ["Benutzerkonfiguration richtet sich an Benutzerkonten; Computerkonfiguration an Computerobjekte.", "Beide gelten nur für Domain Controller.", "Computerkonfiguration funktioniert nur bei WLAN.", "Benutzerkonfiguration wird nur beim Serverstart verarbeitet."], 0, "Der Zieltyp bestimmt, wann und für wen Einstellungen verarbeitet werden."),
    mc("win-net-022", "domäne", "fortgeschritten", "Welchen Vorteil bietet ein Domänenkonto gegenüber einem lokalen Konto auf mehreren PCs?", ["Eine zentrale Identität kann gemäß Berechtigungen an mehreren Domänenrechnern verwendet werden.", "Es benötigt nie ein Passwort.", "Es funktioniert ohne Domain Controller und DNS.", "Es hat automatisch lokale Administratorrechte überall."], 0, "Zentrale Authentisierung ersetzt nicht die gezielte Vergabe lokaler oder Ressourcenberechtigungen."),
    mc("win-net-023", "domäne", "anspruchsvoll", "Ein neuer PC kann der Domäne nicht beitreten, obwohl Netzwerkzugang zum Domain Controller besteht. Welche Einstellung ist besonders wahrscheinlich zu prüfen?", ["Ob der Client als DNS-Server einen AD-integrierten DNS-Server verwendet.", "Ob der Client eine besonders hohe Bildschirmauflösung besitzt.", "Ob die lokale Maus angeschlossen ist.", "Ob der PC einen privaten E-Mail-Account hat."], 0, "Für Domänenbeitritt und AD-Dienstsuche muss der Client AD-DNS korrekt verwenden, nicht einen beliebigen öffentlichen Resolver."),
    mc("win-net-024", "active-directory", "fortgeschritten", "Ein Benutzer aus Domäne A soll eine Freigabe in Domäne B verwenden. Was ist zusätzlich zu einer passenden Vertrauensstellung erforderlich?", ["Eine Berechtigung auf der Freigabe oder dem Ordner für die Identität beziehungsweise Gruppe aus Domäne A", "Die automatische Replikation aller Benutzerprofile", "Eine Änderung der MAC-Adresse des Benutzers", "Das Löschen der lokalen Konten in Domäne B"], 0, "Ein Trust ermöglicht die Authentisierungsbeziehung. Der Zugriff auf die konkrete Ressource muss weiterhin ausdrücklich berechtigt werden."),
    mc("win-net-025", "gpo", "anspruchsvoll", "Warum kann Loopback Processing für gemeinsam genutzte Kiosk- oder Terminalserver sinnvoll sein?", ["Benutzereinstellungen können abhängig vom Computer erzwungen werden, an dem sich ein Benutzer anmeldet.", "Es beschleunigt den Switch-Port.", "Es ersetzt alle Domänenkonten.", "Es deaktiviert Benutzer-GPOs weltweit."], 0, "Loopback ist ein Spezialfall für Rechner, auf denen unabhängig vom Benutzer eine bestimmte Umgebung gelten soll."),
    mc("win-net-026", "berechtigungen", "fortgeschritten", "Welches Vorgehen folgt dem AGDLP-Prinzip in einer Windows-Domäne am besten?", ["Benutzerkonten kommen in globale Rollengruppen, diese in domänenlokale Ressourcengruppen, die Berechtigungen erhalten.", "Berechtigungen werden direkt jedem Benutzerkonto einzeln erteilt.", "Lokale Drucker werden in globale Gruppen verschoben.", "Jeder Benutzer erhält Domänen-Adminrechte."], 0, "AGDLP strukturiert Berechtigungen nach Konten, Rollen, Ressourcengruppen und Berechtigungen."),
    mc("win-net-027", "authentisierung", "anspruchsvoll", "Warum sollte ein Dienstkonto nicht für interaktive Benutzeranmeldungen verwendet werden?", ["Dienstkonten sollten auf ihren Zweck und minimale Rechte beschränkt sein; interaktive Nutzung erhöht Missbrauchs- und Nachvollziehbarkeitsrisiken.", "Dienstkonten haben grundsätzlich kein Passwort.", "Dienstkonten können keine Netzwerkverbindung aufbauen.", "Interaktive Anmeldungen verbessern die Rotation von Geheimnissen."], 0, "Getrennte, verwaltete Dienstidentitäten verbessern Least Privilege und Auditierbarkeit."),
    mc("win-net-028", "gpo", "fortgeschritten", "Wann werden viele Computereinstellungen aus Gruppenrichtlinien typischerweise verarbeitet?", ["Beim Systemstart und anschließend periodisch im Hintergrund", "Nur wenn ein Benutzer einen Drucker anschließt", "Ausschließlich beim Erstellen der GPO", "Nie bei Domain-Computern"], 0, "Benutzereinstellungen werden zusätzlich bei Anmeldung und periodisch verarbeitet; einzelne Einstellungen können abweichen."),
    mc("win-net-029", "active-directory", "fortgeschritten", "Was ist ein Sicherheitsprinzipal in Active Directory?", ["Eine Identität wie Benutzer, Computer oder Sicherheitsgruppe, der Berechtigungen zugeordnet werden können.", "Ein DNS-Record ohne Namen.", "Ein physischer Switch-Port.", "Ein Dateisystemformat."], 0, "Sicherheitsprinzipale besitzen eine SID und können in Zugriffssteuerungslisten erscheinen."),
    mc("win-net-030", "gpo", "anspruchsvoll", "Zwei GPOs setzen denselben Wert unterschiedlich und sind beide an derselben OU verknüpft. Welche Einstellung gewinnt im Normalfall?", ["Die GPO mit höherer Verknüpfungspriorität, die später verarbeitet wird.", "Immer die älteste GPO.", "Immer die GPO mit dem längsten Namen.", "Beide Werte werden gemittelt."], 0, "Bei Konflikten gilt die Verarbeitungsreihenfolge; Verknüpfungsreihenfolge und Erzwungene Einstellungen müssen sorgfältig geplant werden."),
    mc("win-net-031", "sicherheit", "fortgeschritten", "Warum ist die Mitgliedschaft in Domain Admins besonders restriktiv zu behandeln?", ["Konten dieser Gruppe besitzen weitreichende Rechte in der Domäne und sind daher ein attraktives Angriffsziel.", "Die Gruppe kann keine Gruppenrichtlinien lesen.", "Sie dient nur zur Druckerverwaltung.", "Sie hat nur Rechte auf einem einzelnen Client."], 0, "Administrative Gruppen gehören zu den besonders schützenswerten Identitäten und sollten nicht für Alltagsarbeit verwendet werden."),
    mc("win-net-032", "domäne", "fortgeschritten", "Weshalb ist eine Arbeitsgruppe für viele PCs mit unterschiedlichen Berechtigungen aufwendiger als eine Domäne?", ["Konten, Passwörter und Berechtigungen müssen auf einzelnen Rechnern dezentral gepflegt werden.", "Arbeitsgruppen können keine Netzwerkfreigaben verwenden.", "Domänen benötigen keine Server.", "Arbeitsgruppen verwenden kein TCP/IP."], 0, "Eine Domäne zentralisiert Identitäts- und Richtlinienverwaltung; sie ist aber nicht für jede sehr kleine Umgebung erforderlich."),
    mc("win-net-033", "dns", "anspruchsvoll", "Ein Administrator trägt auf Domänenclients einen öffentlichen DNS-Resolver ein, damit Webseiten schneller aufgelöst werden. Welche Folge ist besonders kritisch?", ["AD-Dienstsuche und Domänenfunktionen können fehlschlagen, weil interne SRV- und Hosteinträge nicht zuverlässig auflösbar sind.", "Alle Benutzer erhalten automatisch höhere Rechte.", "Die Domäne wird in eine Arbeitsgruppe umgewandelt.", "NTFS-Berechtigungen werden gelöscht."], 0, "Domänenclients sollten für die AD-Zone den internen AD-DNS nutzen; externe Namen können von dort weitergeleitet werden."),
    mc("win-net-034", "gpo", "fortgeschritten", "Welches Ziel verfolgt eine zentrale Kennwortrichtlinie in einer Domäne?", ["Einheitliche Mindestanforderungen und Sperrregeln für Domänenkonten durchsetzen.", "Jedes Konto mit demselben Klartextpasswort versorgen.", "Lokale Dateien automatisch sichern.", "DNS-Zonen replizieren."], 0, "Kennwortrichtlinien sind nur ein Baustein; MFA und Schutz privilegierter Konten bleiben wichtig."),
    mc("win-net-035", "berechtigungen", "anspruchsvoll", "Ein Benutzer darf einen Ordner über eine Freigabe im Netzwerk nur lesen, obwohl NTFS lokal Ändern erlaubt. Was ist die passende Erklärung?", ["Beim Netzwerkzugriff begrenzt die restriktivere Kombination aus Freigabe- und NTFS-Berechtigungen die effektive Berechtigung.", "NTFS-Berechtigungen gelten über das Netzwerk nie.", "Freigabeberechtigungen gelten nur lokal.", "Der Benutzer erhält deshalb automatisch Vollzugriff."], 0, "Beim Zugriff über eine Freigabe wirken beide Berechtigungsebenen; effektiv bleibt nur, was beide erlauben.")
  ],
  "windows-server-admin": [
    mc("srv-047", "server-core", "fortgeschritten", "Ein Server soll mit möglichst kleiner Angriffsfläche betrieben und remote per PowerShell verwaltet werden. Welche Installationsoption passt?", ["Server Core", "Desktop Experience ausschließlich wegen der GUI", "Ein Client-Betriebssystem ohne Serverrolle", "Ein nicht aktualisiertes Legacy-System"], 0, "Server Core reduziert grafische Komponenten und wird typischerweise remote oder per Kommandozeile verwaltet."),
    mc("srv-048", "active-directory", "anspruchsvoll", "Warum sollten mindestens zwei Domain Controller für eine produktive Domäne geplant werden?", ["Sie erhöhen Verfügbarkeit von Anmeldung, DNS und Verzeichnisdiensten und erlauben Replikation zwischen DCs.", "Der zweite DC ersetzt jedes Backup.", "Zwei DCs verhindern alle Fehlkonfigurationen.", "AD erlaubt mit zwei DCs keine Gruppenrichtlinien mehr."], 0, "Redundante DCs verbessern Verfügbarkeit, erfordern aber weiterhin Backups, Monitoring und Replikationsüberwachung."),
    mc("srv-049", "active-directory", "anspruchsvoll", "Ein Domain Controller mit der RID-Master-Rolle ist dauerhaft verloren gegangen. Welche Rolle muss vor einer umfangreichen Anlage neuer Benutzerkonten auf einem verbleibenden DC fachlich übernommen werden?", ["RID Master", "Schema Master", "Domain Naming Master", "Infrastructure Master"], 0, "Der RID Master vergibt RID-Pools, aus denen eindeutige Sicherheitskennungen für neue Sicherheitsprinzipale gebildet werden. Bei dauerhaftem Verlust wird die Rolle gezielt übernommen (seized)."),
    mc("srv-050", "fileserver", "anspruchsvoll", "Ein Dateiserver soll verhindern, dass Benutzer sehr große private Videodateien in einer Abteilungsfreigabe speichern. Welche Windows-Server-Funktion ist passend?", ["FSRM-Dateiscreening mit einer passenden Dateigruppe oder Richtlinie", "DHCP-Reservierung", "DNS-Forwarder", "Hyper-V-Checkpoint"], 0, "File Server Resource Manager kann Quotas, Dateiscreening und Speicherberichte bereitstellen."),
    mc("srv-051", "hyper-v", "fortgeschritten", "Welche Maßnahme schützt eine VM vor einem einzelnen Hostausfall nicht zuverlässig?", ["Nur ein lokaler Checkpoint auf demselben Host", "Ein geplanter Failover-Cluster mit gemeinsamer oder replizierter Grundlage", "Ein getestetes Backup", "Redundante Hosts"], 0, "Ein lokaler Checkpoint liegt beim gleichen Ausfallort und ist kein Hochverfügbarkeitsmechanismus."),
    mc("srv-052", "updates", "anspruchsvoll", "Warum sollten Serverupdates in einem Wartungsfenster mit Rückfallplan erfolgen?", ["Updates können Neustarts oder Inkompatibilitäten auslösen; ein kontrollierter Ablauf reduziert Ausfallrisiken.", "Damit Sicherheitsupdates möglichst lange nicht installiert werden.", "Weil Updates nur außerhalb des Netzwerks funktionieren.", "Damit keine Protokolle entstehen."], 0, "Testen, sichern, planen und überwachen sind zentrale Schritte eines sicheren Updateprozesses."),
    mc("srv-053", "bitlocker", "fortgeschritten", "Welches Risiko adressiert BitLocker auf einem verlorenen Server- oder Laptopdatenträger primär?", ["Unbefugtes Auslesen gespeicherter Daten ohne korrekten Entsperrschlüssel", "Netzwerküberlastung durch Broadcasts", "Fehlerhafte DNS-Auflösung", "Doppelte IP-Adressen"], 0, "Datenträgerverschlüsselung schützt ruhende Daten; laufende Systeme benötigen zusätzlich Zugriffs- und Netzwerkschutz."),
    mc("srv-054", "active-directory", "anspruchsvoll", "Ein Administrator stellt fest, dass ein Domain Controller seit Monaten nicht repliziert. Warum ist ein einfaches Wiederanschließen riskant?", ["Nach Ablauf relevanter Aufbewahrungszeiten können veraltete Objekte und Replikationsprobleme entstehen; der Zustand muss fachlich bewertet werden.", "Replikation funktioniert nur mit einem DC.", "Ein DC benötigt keine Zeitquelle.", "DNS verhindert jede Replikation automatisch."], 0, "Lange nicht replizierende DCs können zu Lingering Objects und inkonsistentem Verzeichniszustand führen."),
    mc("srv-055", "berechtigungen", "fortgeschritten", "Warum sollten administrative Tätigkeiten mit einem getrennten Administratorkonto statt dem normalen Benutzerkonto erfolgen?", ["Der privilegierte Kontext wird auf notwendige Tätigkeiten begrenzt und Phishing- sowie Fehlbedienungsrisiken im Alltag sinken.", "Das normale Konto erhält dadurch automatisch mehr Rechte.", "Ein Administratorkonto benötigt keine MFA.", "Getrennte Konten verhindern alle Schadprogramme."], 0, "Getrennte Konten unterstützen Least Privilege, Nachvollziehbarkeit und den Schutz privilegierter Identitäten.")
  ]
};

const QUESTION_POOL_MATERIAL_EXTENSION = {
  "it-sicherheit": [
    mc("sec-034", "auftragsverarbeitung", "anspruchsvoll", "Ein Cloud-Anbieter verarbeitet Kundendaten ausschließlich nach dokumentierten Weisungen des Unternehmens. Welche Rollen sind korrekt?", ["Unternehmen: Verantwortlicher; Cloud-Anbieter: Auftragsverarbeiter", "Cloud-Anbieter: Verantwortlicher; Unternehmen: Betroffener", "Beide sind automatisch Datenschutzbeauftragte", "Der Anbieter ist nie an Weisungen gebunden"], 0, "Wer Zwecke und Mittel der Verarbeitung festlegt, ist Verantwortlicher. Ein weisungsgebundener Dienstleister verarbeitet als Auftragsverarbeiter."),
    mc("sec-035", "datenschutz", "anspruchsvoll", "Ein Unternehmen führt eine Verarbeitung durch, die voraussichtlich ein hohes Risiko für Betroffene verursacht. Was kann unabhängig von der Zahl der Mitarbeitenden erforderlich werden?", ["Eine Datenschutz-Folgenabschätzung und gegebenenfalls die Benennung eines Datenschutzbeauftragten", "Das Abschalten aller Protokolle", "Die automatische Löschung aller Daten am selben Tag", "Eine öffentliche Bekanntgabe aller Passwörter"], 0, "Bei Verarbeitungen mit hohem Risiko ist eine Datenschutz-Folgenabschätzung zu prüfen. Das BDSG nennt dafür neben der 20-Personen-Regel weitere Fälle."),
    mc("sec-036", "auftragsverarbeitung", "anspruchsvoll", "Ein Dienstleister entscheidet eigenständig, zu welchen eigenen Marketingzwecken er die erhaltenen Kundendaten zusätzlich nutzt. Warum ist die Einordnung als bloßer Auftragsverarbeiter dann problematisch?", ["Er handelt für diese zusätzliche Nutzung nicht mehr ausschließlich weisungsgebunden und kann dafür selbst Verantwortlicher sein.", "Auftragsverarbeiter dürfen keine Verträge schließen.", "Marketingdaten sind niemals personenbezogen.", "Eine Weisung ist nur bei Papierakten nötig."], 0, "Ein Auftragsverarbeiter verarbeitet nur im Rahmen der Weisungen. Eigene Zwecke verändern die datenschutzrechtliche Rollenbewertung."),
    mc("sec-037", "auftragsverarbeitung", "fortgeschritten", "Welche Regelung muss bei einer Auftragsverarbeitung insbesondere festhalten, welche Daten wie und nach wessen Weisung verarbeitet werden?", ["Ein Vertrag zur Auftragsverarbeitung", "Eine DHCP-Reservierung", "Eine Lizenz für ein Textverarbeitungsprogramm", "Eine Routingtabelle"], 0, "Der Vertrag zur Auftragsverarbeitung regelt unter anderem Gegenstand, Dauer, Weisungen, technische Maßnahmen und Pflichten der Beteiligten."),
    mc("sec-038", "schutzziele", "fortgeschritten", "Eine Rechnung erreicht den Empfänger, ihr Betrag wurde unterwegs aber unbemerkt verändert. Welches Schutzziel ist unmittelbar verletzt?", ["Integrität", "Verfügbarkeit", "Datenminimierung", "Skalierbarkeit"], 0, "Integrität bedeutet, dass Daten vollständig und unverändert bleiben beziehungsweise Manipulationen erkennbar sind.")
  ],
  "ipv4": [
    mc("ip-046", "subnetting", "fortgeschritten", "Welche Subnetzmaske gehört zu einem /23-Netz?", ["255.255.254.0", "255.255.255.0", "255.255.252.0", "255.255.255.128"], 0, "Bei /23 sind im dritten Oktett sieben Bits gesetzt: 11111110 entspricht 254."),
    mc("ip-047", "supernetting", "anspruchsvoll", "Die vier zusammenhängenden Netze 192.168.8.0/24 bis 192.168.11.0/24 sollen als eine Route zusammengefasst werden. Welches Präfix passt?", ["192.168.8.0/22", "192.168.8.0/23", "192.168.8.0/24", "192.168.8.0/21"], 0, "Ein /22 umfasst vier aufeinanderfolgende /24-Netze. Die Netzgrenze liegt hier bei 8 im dritten Oktett."),
    mc("ip-048", "routing", "fortgeschritten", "Ein PC hat 192.168.20.50/24. Welche Adresse ist als Standardgateway grundsätzlich passend?", ["192.168.20.1", "192.168.21.1", "10.0.0.1", "192.168.20.255"], 0, "Das Gateway muss für den PC direkt im eigenen Subnetz erreichbar sein und darf keine Broadcastadresse sein."),
    mc("ip-049", "dhcp", "anspruchsvoll", "Ein neuer DHCP-Bereich soll Clients vollständig für den Zugriff auf andere Netze und interne Namen konfigurieren. Welche Kombination gehört mindestens in die Bereichsoptionen?", ["Subnetzmaske, Standardgateway und DNS-Server", "Nur die MAC-Adresse des Switches", "Nur ein MX-Record", "Nur die Seriennummer des Routers"], 0, "DHCP kann neben der IP-Adresse unter anderem Maske, Router (Gateway) und DNS-Server verteilen."),
    mc("ip-050", "subnetting", "anspruchsvoll", "Ein /24-Netz wird in acht gleich große Teilnetze zerlegt. Wie viele nutzbare Hostadressen hat jedes Teilnetz im klassischen IPv4-Modell?", ["30", "14", "62", "126"], 0, "Acht Teilnetze benötigen drei zusätzliche Netzbits: /24 wird zu /27. Ein /27 hat 32 Adressen und 30 nutzbare Hosts."),
    mc("ip-051", "adressplanung", "anspruchsvoll", "In einem Netz soll der DHCP-Pool 192.168.30.100 bis 192.168.30.200 vergeben. Welche statische Druckeradresse vermeidet sicher eine Überschneidung?", ["192.168.30.20", "192.168.30.150", "192.168.30.200", "192.168.30.180"], 0, "Statische Adressen gehören außerhalb des dynamischen DHCP-Pools oder werden als Reservierung zentral verwaltet."),
    mc("ip-052", "supernetting", "fortgeschritten", "Welche Adresse liegt im zusammengefassten Netz 192.168.8.0/22?", ["192.168.10.25", "192.168.12.25", "192.168.7.25", "192.168.16.25"], 0, "192.168.8.0/22 reicht von 192.168.8.0 bis 192.168.11.255."),
    mc("ip-053", "broadcast", "fortgeschritten", "Warum ist ein Router nicht dazu da, normale Layer-2-Broadcasts zwischen zwei IP-Netzen weiterzuleiten?", ["Damit Broadcasts auf ihr lokales Segment begrenzt bleiben und nicht netzübergreifend Last erzeugen.", "Weil Router keine IP-Adressen kennen.", "Weil Broadcasts nur in IPv6 existieren.", "Damit DNS nicht funktioniert."], 0, "Router trennen Broadcast-Domänen. Für ausgewählte Dienste wie DHCP gibt es kontrollierte Relay-Mechanismen."),
    mc("ip-054", "subnetting", "anspruchsvoll", "Welches Netz enthält den Host 172.16.34.200/22?", ["172.16.32.0/22", "172.16.34.0/22", "172.16.36.0/22", "172.16.0.0/22"], 0, "Ein /22 hat im dritten Oktett eine Blockgröße von vier. 34 liegt im Bereich 32 bis 35."),
    mc("ip-055", "fehleranalyse", "anspruchsvoll", "Ein Client erreicht die eigene Gateway-IP, aber weder eine externe IP-Adresse noch ein Ziel hinter einem anderen Standort. DNS ist dabei nicht beteiligt. Was ist nach der lokalen Konfiguration besonders zu prüfen?", ["Routing beziehungsweise Weiterleitung hinter dem Gateway", "Die Schriftart im Browser", "Die Bildschirmauflösung", "Den Namen des DHCP-Bereichs allein"], 0, "Wenn der erste Hop erreichbar ist, liegt die weitere Ursache häufig in Routing, WAN-Verbindung oder einer Filterregel hinter dem Gateway.")
  ],
  "netzwerke": [
    mc("net-056", "uebertragungsmedien", "fortgeschritten", "Ein Gebäude soll über eine große Distanz mit hoher Bandbreite verbunden werden. Welches Medium ist gegenüber Kupfer typischerweise die passende Wahl?", ["Glasfaser, bei sehr langen Strecken häufig Singlemode", "Ein kurzes Bluetooth-Pairing", "Ein passiver Hub", "Ein Koax-Abschlusswiderstand ohne Kabel"], 0, "Glasfaser eignet sich für hohe Bandbreiten und große Distanzen. Singlemode wird typischerweise für längere Strecken verwendet."),
    mc("net-057", "uebertragungsmedien", "fortgeschritten", "Warum wurden GBIC-Module in vielen Netzwerkumgebungen weitgehend durch SFP-Module ersetzt?", ["SFP-Module sind kleiner und ermöglichen flexible steckbare Transceiver für verschiedene Medien.", "GBIC kann keine Daten übertragen.", "SFP ersetzt jede Netzwerkkarte.", "SFP ist ein DNS-Protokoll."], 0, "Beide sind steckbare Transceiver-Formate; SFP ist kompakter und in modernen Geräten weit verbreitet."),
    mc("net-058", "komponenten", "fortgeschritten", "Was kann ein klassischer Repeater leisten, was aber nicht?", ["Er regeneriert Signale zur Segmentverlängerung, trifft aber keine Weiterleitungsentscheidung nach IP-Zielen.", "Er vergibt DHCP-Leases und DNS-Namen.", "Er routet automatisch zwischen beliebigen IP-Netzen.", "Er ersetzt eine Firewall."], 0, "Ein Repeater arbeitet auf der Bitübertragungsschicht und erhöht nicht die verfügbare Datenrate oder Routing-Funktion."),
    mc("net-059", "komponenten", "fortgeschritten", "Ein Gerät soll zwei Ethernet-Segmente auf Layer 2 koppeln und anhand von MAC-Adressen weiterleiten. Welche Komponente beschreibt diese Aufgabe?", ["Bridge beziehungsweise Layer-2-Switch", "DNS-Server", "DHCP-Server", "Router ausschließlich auf Layer 3"], 0, "Eine Bridge koppelt Layer-2-Segmente. Ein Switch ist funktional eine mehrportige Bridge."),
    mc("net-060", "netzwerkdiagnose", "fortgeschritten", "Welches Windows-Kommando liefert unter anderem IPv4-Adresse, Subnetzmaske, Standardgateway und DHCP-Status eines Clients?", ["ipconfig /all", "nslookup", "tracert", "hostname"], 0, "ipconfig /all zeigt die lokale IP-Konfiguration. Es ist ein sinnvoller erster Schritt bei DHCP- und Gateway-Problemen."),
    mc("net-061", "netzwerkdiagnose", "anspruchsvoll", "Ein Browser erreicht einen Webserver per IP-Adresse, aber nicht über seinen Namen. Welches Werkzeug prüft gezielt die Namensauflösung?", ["nslookup", "format", "chkdsk", "taskkill"], 0, "nslookup fragt DNS ab und hilft, Namen, Serverantworten und Records getrennt von der Webanwendung zu prüfen."),
    mc("net-062", "netzwerkdiagnose", "fortgeschritten", "Welches Werkzeug hilft, die Zwischenstationen auf dem Weg zu einem entfernten IP-Ziel sichtbar zu machen?", ["tracert", "ipconfig", "net user", "sfc"], 0, "tracert zeigt anhand schrittweise begrenzter Pakete die Hops auf einem Netzwerkpfad und kann Routingprobleme eingrenzen."),
    mc("net-063", "netzwerkdiagnose", "anspruchsvoll", "Ein PC erhält keine Netzwerkverbindung. Welche Prüfung gehört in einer schichtweisen Fehlersuche sinnvoll an den Anfang?", ["Physische Verbindung und Link-Status von Kabel, Port oder WLAN prüfen", "Sofort alle IP-Adressen im Unternehmen ändern", "Zuerst die Datenbank löschen", "Den DNS-Server ohne Diagnose neu installieren"], 0, "Eine strukturierte Fehlersuche beginnt bei den Grundlagen und arbeitet sich über Link, IP, Routing, DNS und Anwendung vor."),
    mc("net-064", "uebertragungsmedien", "fortgeschritten", "Wofür dient ein Patchkabel in einer strukturierten Verkabelung typischerweise?", ["Zum Verbinden von Endgerät, Netzwerkdose, Patchpanel oder Switch-Port", "Zum Ersetzen aller Glasfaserstrecken zwischen Gebäuden", "Zum Übersetzen von DNS-Namen", "Zum Erzeugen von VLANs ohne Switch"], 0, "Patchkabel stellen die flexiblen Verbindungen zwischen Anschlüssen und aktiven Komponenten her; die feste Gebäudeverkabelung bleibt getrennt."),
    mc("net-065", "topologien", "anspruchsvoll", "Warum fällt bei einer Stern-Topologie mit Switch beim Defekt eines einzelnen Endgerätekabels meist nicht das gesamte Netz aus?", ["Die Verbindung dieses Endgeräts ist separat; die anderen Ports bleiben grundsätzlich unabhängig nutzbar.", "Alle Teilnehmer nutzen zwingend dieselbe Leitung.", "Der Switch vergibt sofort neue MAC-Adressen.", "Das Default Gateway ersetzt das defekte Kabel."], 0, "Die sternförmige Verkabelung begrenzt Kabeldefekte meist auf einen Anschluss. Der Ausfall des zentralen Switches bleibt dagegen kritisch.")
  ],
  "it-grundlagen": [
    mc("base-056", "grundbegriffe", "fortgeschritten", "Welche Zuordnung beschreibt Hardware und Software korrekt?", ["Hardware sind physische Komponenten; Software sind Programme und Daten, die darauf ausgeführt werden.", "Hardware sind nur Betriebssysteme; Software sind nur Kabel.", "Beide Begriffe meinen ausschließlich Cloud-Dienste.", "Software ist immer physisch greifbar."], 0, "Beispiele für Hardware sind CPU, Monitor und Festplatte. Betriebssysteme und Anwendungen sind Software."),
    mc("base-057", "betriebssysteme", "fortgeschritten", "Welche Aufgabe erfüllt ein Betriebssystem für Anwendungen und Hardware?", ["Es verwaltet Ressourcen wie Prozesse, Speicher, Dateien und Gerätezugriffe.", "Es ersetzt jede Anwendung durch eine Webseite.", "Es sorgt dafür, dass keine Dateien gespeichert werden.", "Es ist nur ein Netzwerkstecker."], 0, "Das Betriebssystem vermittelt zwischen Hardware und Anwendungen und setzt dabei auch Schutz- und Zugriffsgrenzen durch."),
    mc("base-058", "netzwerktypen", "fortgeschritten", "Welche Aussage unterscheidet Internet und Intranet korrekt?", ["Das Internet ist ein globales öffentliches Netz; ein Intranet ist ein organisationsinternes, kontrolliertes Netzwerk.", "Ein Intranet ist immer nur ein einzelner PC.", "Das Internet kann keine Server enthalten.", "Beide Begriffe bezeichnen ausschließlich WLAN."], 0, "Ein Intranet nutzt oft dieselben Netzwerktechniken wie das Internet, ist aber für eine abgegrenzte Organisation vorgesehen."),
    mc("base-059", "cloud", "anspruchsvoll", "Ein Entwicklungsteam stellt eigenen Code auf einer vom Anbieter betriebenen Laufzeitplattform bereit und verwaltet weder Betriebssystem noch Server. Welches Cloud-Modell passt?", ["PaaS", "IaaS", "SaaS", "On-Premises"], 0, "Platform as a Service stellt eine Plattform für Anwendungen bereit. Bei IaaS verwaltet das Team typischerweise Betriebssystem und Anwendungen selbst."),
    mc("base-060", "verteilte-systeme", "anspruchsvoll", "Welche Aussage unterscheidet einen Cluster von einem einzelnen leistungsstarken Server am treffendsten?", ["Ein Cluster besteht aus mehreren zusammenarbeitenden Knoten und kann je nach Design Verfügbarkeit, Leistung oder Kapazität erhöhen.", "Ein Cluster ist immer nur eine einzelne Festplatte.", "Ein Cluster benötigt keine Netzwerkverbindung.", "Ein Cluster ersetzt jede Datensicherung."], 0, "Cluster verteilen Aufgaben über mehrere Systeme. Der konkrete Nutzen hängt von Architektur, Datenhaltung und Failover-Konzept ab.")
  ],
  "windows-netzwerke": [
    mc("win-net-036", "domäne", "fortgeschritten", "Warum ist eine Windows-Domäne für viele Arbeitsplätze mit zentralen Berechtigungen geeigneter als eine Arbeitsgruppe?", ["Identitäten, Richtlinien und Gruppen können zentral über Verzeichnisdienste verwaltet werden.", "Domänen verhindern jede Netzwerkverbindung.", "Arbeitsgruppen unterstützen grundsätzlich keine Benutzerkonten.", "Domänen benötigen keine DNS-Namensauflösung."], 0, "Eine Domäne zentralisiert Verwaltung, setzt aber korrektes DNS, Domain Controller und Betriebskonzepte voraus."),
    mc("win-net-037", "active-directory", "fortgeschritten", "Warum werden Benutzer- und Computerobjekte in getrennten Organisationseinheiten strukturiert?", ["Um Verwaltung, Delegation und gezielte Verknüpfung von Gruppenrichtlinien übersichtlich zu gestalten.", "Damit alle Konten automatisch Domain Admins werden.", "Damit DNS ausgeschaltet wird.", "Damit NTFS-Berechtigungen nicht mehr gelten."], 0, "OUs bilden die Organisations- und Verwaltungsstruktur. Sie sind keine Sicherheitsgrenze und ersetzen keine Berechtigungen."),
    mc("win-net-038", "dns", "anspruchsvoll", "Warum ist DNS in einer Active-Directory-Domäne für die Anmeldung und den Domänenbeitritt so wichtig?", ["Clients finden über DNS unter anderem Domain Controller und deren Dienste wie LDAP oder Kerberos.", "DNS speichert ausschließlich Druckertreiber.", "DNS ersetzt alle Benutzerkonten.", "DNS vergibt NTFS-Berechtigungen."], 0, "AD veröffentlicht Dienstinformationen in DNS, insbesondere über SRV-Records. Darum sollten Domänenclients den internen AD-DNS nutzen."),
    mc("win-net-039", "active-directory", "anspruchsvoll", "Ein Computerobjekt wurde versehentlich gelöscht und der Active-Directory-Papierkorb ist aktiviert. Welche Wiederherstellung ist typischerweise am schonendsten?", ["Das Objekt im Active-Directory-Papierkorb wiederherstellen", "Die gesamte Domäne neu installieren", "Die DNS-Zone löschen", "Einen neuen Benutzer mit gleichem Namen anlegen"], 0, "Der AD-Papierkorb ermöglicht die Wiederherstellung gelöschter Objekte innerhalb der konfigurierten Aufbewahrungszeit."),
    mc("win-net-040", "gpo", "fortgeschritten", "Eine GPO enthält ausschließlich Computerkonfiguration. Welche Objekte müssen sich im Wirkungsbereich der Verknüpfung befinden, damit diese Einstellungen angewendet werden können?", ["Computerobjekte", "Nur Benutzerobjekte", "Nur DNS-Records", "Nur Gruppenrichtlinienobjekte selbst"], 0, "Computerkonfiguration richtet sich an Computerobjekte; Benutzerkonfiguration an Benutzerobjekte."),
    mc("win-net-041", "gpo", "anspruchsvoll", "Eine GPO ist an eine OU verknüpft, wird aber für eine Zielgruppe nicht angewendet. Welche Berechtigung sollte bei Security Filtering für die Zielgruppe vorhanden sein?", ["Lesen und Gruppenrichtlinie übernehmen (Apply Group Policy)", "Lokale Administratorrechte auf allen Clients", "Vollzugriff auf die DNS-Zone", "Eine feste öffentliche IP-Adresse"], 0, "Security Filtering beschränkt die Anwendung einer verknüpften GPO auf berechtigte Sicherheitsprinzipale."),
    mc("win-net-042", "berechtigungen", "anspruchsvoll", "Ein Projektteam erhält Zugriff auf eine Abteilungsfreigabe. Welches Vorgehen ist langfristig am wartbarsten?", ["Eine Ressourcengruppe mit den benötigten Rechten verwenden und Teammitglieder über eine Rollengruppe zuordnen.", "Jede Berechtigung direkt an einzelne Benutzerkonten vergeben.", "Allen Teammitgliedern Domain Admins geben.", "Die Freigabe ohne Berechtigungen veröffentlichen."], 0, "Gruppenbasierte Berechtigungen erleichtern Rollenwechsel, Audits und das Entfernen von Zugängen."),
    mc("win-net-043", "berechtigungen", "fortgeschritten", "Warum ist ein explizites Deny in NTFS-Berechtigungen mit Vorsicht einzusetzen?", ["Es kann auch sonst erlaubte Zugriffe über Gruppen übersteuern und Fehlersuche erschweren.", "Es ist nur bei FAT32 wirksam.", "Es erhöht automatisch die Speicherkapazität.", "Es gilt nur im Internet."], 0, "Explizites Deny hat besondere Wirkung. Meist sind klare Gruppenmitgliedschaften und gezielte Allow-Rechte leichter wartbar."),
    mc("win-net-044", "dateiserver", "fortgeschritten", "Welchen Zweck erfüllt eine Ordnerumleitung für Dokumente in einer Domäne?", ["Benutzerordner werden auf einen zentral verwalteten Netzwerkpfad gelegt, ohne dass der Benutzer den gewohnten Ordner wechseln muss.", "Sie wandelt NTFS in FAT32 um.", "Sie ersetzt die Anmeldung am Domain Controller.", "Sie blockiert jede Dateifreigabe."], 0, "Ordnerumleitung kann zentrale Sicherung und Zugriff unterstützen; Verfügbarkeit, Offlineverhalten und Rechte müssen geplant werden."),
    mc("win-net-045", "dateiserver", "fortgeschritten", "Welche Zeichenfolge ist ein UNC-Pfad zu einer Freigabe namens Projekte auf dem Server FILE01?", ["\\\\FILE01\\Projekte", "C:\\FILE01\\Projekte", "https://FILE01/Projekte", "FILE01:Projekte"], 0, "UNC-Pfade beginnen mit zwei Backslashes, gefolgt von Servername und Freigabename."),
    mc("win-net-046", "remoteverwaltung", "anspruchsvoll", "Ein Administrator möchte einen Server per PowerShell aus der Ferne verwalten. Welche Voraussetzung ist neben Berechtigungen besonders relevant?", ["Die Remoteverwaltung beziehungsweise PowerShell-Remoting muss erreichbar und erlaubt sein.", "Der Server muss einen lokalen Monitor besitzen.", "Die IP-Adresse muss öffentlich sein.", "Der Server darf kein DNS verwenden."], 0, "Windows-Remoting benötigt passende Netzwerk-, Firewall-, Authentisierungs- und Konfigurationseinstellungen."),
    mc("win-net-047", "active-directory", "fortgeschritten", "Warum ist ein zweiter Domain Controller kein Ersatz für ein Backup von Active Directory?", ["Fehlkonfigurationen oder ungewollte Löschungen können repliziert werden; für Wiederherstellung braucht es zusätzlich getestete Backups.", "Domain Controller können keine DNS-Daten speichern.", "Backups verhindern jede Replikation.", "Ein zweiter DC besitzt keine Datenbank."], 0, "Replikation erhöht Verfügbarkeit, aber nicht automatisch die Möglichkeit, einen früheren korrekten Zustand wiederherzustellen."),
    mc("win-net-048", "gpo", "anspruchsvoll", "Ein Kiosk-PC soll unabhängig vom angemeldeten Benutzer immer dieselben strengen Benutzereinstellungen erhalten. Welches GPO-Konzept ist dafür passend?", ["Loopback Processing", "DHCP-Reservierung", "NAT", "Dateiscreening"], 0, "Loopback Processing verarbeitet Benutzereinstellungen abhängig von dem Computer, an dem sich der Benutzer anmeldet."),
    mc("win-net-049", "domäne", "anspruchsvoll", "Ein Benutzer kann sich mit seinem Domänenkonto anmelden, aber eine Freigabe bleibt gesperrt. Welche Aussage ist fachlich richtig?", ["Erfolgreiche Authentisierung ersetzt nicht die Berechtigung auf die konkrete Ressource.", "Eine Domänenanmeldung gewährt automatisch Vollzugriff auf alle Freigaben.", "DNS löst die Berechtigung automatisch auf.", "Der Benutzer muss deshalb seine IP-Adresse ändern."], 0, "Authentisierung beantwortet, wer jemand ist; Autorisierung bestimmt, was diese Identität tun darf."),
    mc("win-net-050", "gpo", "fortgeschritten", "Wann ist es sinnvoll, eine Gruppenrichtlinie zunächst in einer Test-OU zu verknüpfen?", ["Vor einer breiten Einführung, um Wirkung und Nebenwirkungen mit begrenztem Risiko zu prüfen.", "Erst nachdem sie alle Produktivclients beeinflusst hat.", "Nur wenn keine Benutzerkonten existieren.", "Damit sie keine Einstellungen mehr enthalten kann."], 0, "Stufenweise Einführung erleichtert Tests, Rücknahme und Fehlersuche."),
    mc("win-net-051", "sicherheit", "anspruchsvoll", "Warum sollte ein Dienstkonto von einem persönlichen Benutzerkonto getrennt sein?", ["Zweck, Rechte, Kennwortrotation und Nachvollziehbarkeit können gezielt auf den Dienst ausgerichtet werden.", "Ein Dienstkonto darf nie ein Passwort besitzen.", "Persönliche Konten können keine Gruppen haben.", "Getrennte Konten machen MFA unnötig."], 0, "Getrennte Dienstidentitäten unterstützen Least Privilege und reduzieren die Auswirkung kompromittierter Benutzerkonten."),
    mc("win-net-052", "dns", "anspruchsvoll", "Ein Domänenclient nutzt ausschließlich einen öffentlichen DNS-Resolver. Welche Folge ist für Active Directory besonders wahrscheinlich?", ["Interne Namen und AD-Dienstrecords können nicht zuverlässig aufgelöst werden.", "Der Client wird automatisch zum Domain Controller.", "NTFS-Rechte werden in Freigaberechte umgewandelt.", "Die IP-Adresse wird automatisch statisch."], 0, "Öffentliche Resolver kennen die interne AD-Zone normalerweise nicht. Externe Namen können über Forwarder vom internen DNS aufgelöst werden."),
    mc("win-net-053", "berechtigungen", "fortgeschritten", "Warum dürfen Freigabeberechtigungen und NTFS-Berechtigungen nicht getrennt betrachtet werden?", ["Beim Netzwerkzugriff müssen beide Ebenen Zugriff erlauben; die wirksame Berechtigung ist dadurch begrenzt.", "NTFS gilt nur bei USB-Sticks.", "Freigaberechte gelten immer auch lokal.", "Beide Ebenen verschlüsseln Dateien."], 0, "Für lokale Zugriffe gelten nur NTFS-Berechtigungen; über eine Freigabe wirken NTFS und Freigabe zusammen."),
    mc("win-net-054", "active-directory", "fortgeschritten", "Was ist eine Organisationseinheit in Active Directory nicht?", ["Eine vollständige Sicherheitsgrenze, die Berechtigungen automatisch voneinander trennt", "Ein Container zur Strukturierung von Objekten", "Ein möglicher Zielpunkt für GPO-Verknüpfungen", "Ein Bereich für Verwaltungsdelegation"], 0, "OUs organisieren Objekte und unterstützen Delegation sowie GPOs. Zugriffsschutz wird weiterhin über Berechtigungen und Gruppen geregelt."),
    mc("win-net-055", "gpo", "anspruchsvoll", "Zwei GPOs setzen an derselben OU gegensätzliche Werte. Welche Information ist zur Bewertung besonders wichtig?", ["Die Verarbeitungs- und Verknüpfungsreihenfolge sowie mögliche Enforced- oder Block-Inheritance-Einstellungen", "Nur die Länge der GPO-Namen", "Die MAC-Adresse des Domain Controllers", "Die Bildschirmauflösung des Clients"], 0, "GPO-Konflikte lassen sich nur mit der tatsächlichen Verarbeitungsreihenfolge und den Ausnahmeoptionen fachlich beurteilen.")
  ],
  "windows-server-admin": [
    mc("srv-056", "verwaltung", "fortgeschritten", "Welches Werkzeug eignet sich auf einem Windows-Server mit Desktop Experience besonders zum Installieren und Verwalten von Serverrollen auf lokalen und entfernten Servern?", ["Server Manager", "Datenträgerbereinigung", "Paint", "ARP-Cache"], 0, "Server Manager bündelt Rollen, Features und die Verwaltung mehrerer Windows-Server."),
    mc("srv-057", "verwaltung", "fortgeschritten", "Wofür steht die Microsoft Management Console (MMC) in der Windows-Administration praktisch?", ["Sie hostet administrative Snap-Ins für gezielte Verwaltungsaufgaben.", "Sie ist ein Ersatz für Active Directory.", "Sie verteilt DHCP-Adressen selbstständig.", "Sie ist ein Dateisystem."], 0, "MMC ist ein Rahmen für Verwaltungs-Snap-Ins, beispielsweise zur Ereignisanzeige oder Computerverwaltung."),
    mc("srv-058", "verwaltung", "anspruchsvoll", "Ein Administrator möchte von einem Windows-Client aus Rollen und Features eines entfernten Servers verwalten. Welche Sammlung von Werkzeugen ist dafür vorgesehen?", ["RSAT", "SFC", "EFS", "APIPA"], 0, "Remote Server Administration Tools stellen Verwaltungswerkzeuge wie Server Manager, MMC-Snap-Ins und PowerShell-Module bereit."),
    mc("srv-059", "verwaltung", "fortgeschritten", "Welche Aussage beschreibt Windows Admin Center zutreffend?", ["Es ist ein browserbasiertes Werkzeug zur Remoteverwaltung von Windows-Servern und -Infrastruktur.", "Es ersetzt jede Sicherung und jede Lizenz.", "Es ist ausschließlich ein DNS-Server.", "Es kann nur lokale Benutzerkonten anzeigen."], 0, "Windows Admin Center ergänzt klassische Verwaltungswerkzeuge und eignet sich besonders für zentrale, browserbasierte Administration."),
    mc("srv-060", "server-core", "fortgeschritten", "Ein Server Core benötigt zunächst eine Netzwerkkonfiguration, Domänenbeitritt und Update-Einstellungen. Welches lokale Werkzeug ist dafür besonders vorgesehen?", ["SConfig", "Notepad", "nslookup", "Disk Cleanup"], 0, "SConfig unterstützt auf Server Core häufige Grundkonfigurationen wie Netzwerk, Domänenbeitritt, Updates und Remoteverwaltung."),
    mc("srv-061", "fileserver", "fortgeschritten", "Ein Benutzer soll eine Freigabe Daten auf dem Server FS01 öffnen. Welcher Pfad ist korrekt?", ["\\\\FS01\\Daten", "C:\\FS01\\Daten", "FS01:Daten", "http://FS01/Daten"], 0, "Eine Windows-Dateifreigabe wird über einen UNC-Pfad mit Server- und Freigabename angesprochen."),
    mc("srv-062", "speicher", "anspruchsvoll", "Eine virtuelle Festplatte soll 3 TB groß sein. Warum ist das klassische VHD-Format dafür ungeeignet?", ["VHD ist auf ungefähr 2 TB begrenzt; für größere virtuelle Festplatten wird VHDX verwendet.", "VHD kann nur Textdateien speichern.", "VHDX unterstützt keine virtuellen Maschinen.", "VHD benötigt zwingend einen Domain Controller."], 0, "VHDX ist der modernere virtuelle Festplattentyp und unterstützt größere Kapazitäten sowie weitere Verbesserungen."),
    mc("srv-064", "dateisysteme", "fortgeschritten", "Ein USB-Datenträger soll zwischen verschiedenen Systemen genutzt werden und einzelne Dateien größer als 4 GB aufnehmen können. Welches Dateisystem passt gegenüber FAT32 typischerweise besser?", ["exFAT", "FAT32", "Ein DNS-Record", "NTFS-Berechtigung"], 0, "FAT32 hat eine Dateigrößenbegrenzung von 4 GB. exFAT ist für wechselbare Datenträger und größere Einzeldateien besser geeignet."),
    mc("srv-065", "speicher", "anspruchsvoll", "Drei gleich große Laufwerke werden in Storage Spaces als Parity-Speicherplatz eingerichtet. Welches Ziel wird damit im Vergleich zu einer einfachen Ablage vor allem erreicht?", ["Der Ausfall eines Laufwerks kann toleriert werden, bei nutzbarer Kapazität unter der Gesamtkapazität.", "Jedes Laufwerk speichert zwingend eine vollständige Spiegelkopie.", "Es entsteht automatisch ein unabhängiges Backup außerhalb des Servers.", "Die Laufwerke benötigen kein Dateisystem."], 0, "Parity verteilt Prüfinformationen über mehrere Laufwerke und kann den Ausfall eines Laufwerks abfangen. Es ersetzt kein Backup.")
  ]
};

const QUESTION_POOL_MULTISELECT_EXTENSION = {
  "it-sicherheit": [
    multi("sec-multi-001", "incident-response", "anspruchsvoll", "Auf einem Arbeitsplatz erscheinen Ransomware-Hinweise und Dateien auf Netzwerkfreigaben werden schnell umbenannt. Welche Sofortmaßnahmen sind angemessen?", ["Das betroffene Gerät vom Netzwerk isolieren", "Den Vorfall nach dem Incident-Prozess melden und dokumentieren", "Den Rechner weiterarbeiten lassen, um den Schaden nicht sichtbar zu machen", "Ereignis- und Sicherheitsprotokolle sofort löschen"], [0, 1], "Isolation begrenzt die weitere Ausbreitung. Meldung und Dokumentation ermöglichen koordinierte Reaktion und Ursachenanalyse; relevante Spuren dürfen nicht gelöscht werden."),
    multi("sec-multi-002", "passwoerter", "fortgeschritten", "Welche Maßnahmen erschweren Offline-Angriffe auf gestohlene Passwort-Hashdatenbanken?", ["Für jedes Passwort einen individuellen zufälligen Salt verwenden", "Eine absichtlich langsame, geeignete Passwort-Hashfunktion verwenden", "Alle Hashes mit demselben festen Salt speichern", "Passwörter reversibel verschlüsseln statt hashen"], [0, 1], "Individuelle Salts und geeignete, langsame Passwort-Hashverfahren erschweren vorberechnete und massenhafte Rateangriffe. Passwörter sollen nicht reversibel gespeichert werden."),
    multi("sec-multi-003", "auftragsverarbeitung", "anspruchsvoll", "Welche Inhalte gehören typischerweise in einen Vertrag zur Auftragsverarbeitung?", ["Dokumentierte Weisungen des Verantwortlichen", "Vereinbarte technische und organisatorische Maßnahmen", "Die private IP-Adresse jedes Mitarbeiters als Ersatz für Berechtigungen", "Eine Zusage, dass der Auftragsverarbeiter Daten für eigene Zwecke verwenden darf"], [0, 1], "Ein AV-Vertrag regelt Weisungen, Schutzmaßnahmen und Pflichten. Eigene, nicht weisungsgebundene Zwecke wären mit der Rolle als Auftragsverarbeiter problematisch."),
    multi("sec-multi-004", "zugriffsschutz", "fortgeschritten", "Welche Maßnahmen setzen das Prinzip der minimalen Rechtevergabe sinnvoll um?", ["Berechtigungen über passende Rollen- oder Gruppenmitgliedschaften vergeben", "Administrative Rechte zeitlich oder auf notwendige Aufgaben beschränken", "Allen Mitarbeitenden vorsorglich lokale Administratorrechte geben", "Ein gemeinsames Administratorkonto für das gesamte Team verwenden"], [0, 1], "Least Privilege beschränkt Berechtigungen auf den notwendigen Zweck. Rollen und getrennte Konten verbessern Nachvollziehbarkeit und reduzieren Auswirkungen eines Angriffs.")
  ],
  "sql": [
    multi("sql-multi-001", "sicherheit", "anspruchsvoll", "Welche Maßnahmen gehören zu einem sicheren Ablauf, bevor eine umfangreiche DELETE-Anweisung ausgeführt wird?", ["Den vorgesehenen WHERE-Filter zuerst mit SELECT prüfen", "Die Änderung in einer Transaktion kontrolliert ausführen", "DELETE ohne WHERE ausführen und erst danach prüfen", "Die Datenbankprotokolle vorab löschen"], [0, 1], "Ein vorheriges SELECT prüft die Zielmenge. Eine Transaktion ermöglicht abhängig vom Ergebnis COMMIT oder ROLLBACK."),
    multi("sql-multi-002", "integritaet", "fortgeschritten", "Welche Datenbankregeln unterstützen die Datenintegrität direkt?", ["Ein Fremdschlüssel kann verhindern, dass eine Bestellung auf einen nicht vorhandenen Kunden verweist", "Eine CHECK-Constraint kann negative Mengen verhindern", "Ein beliebiger Index erzwingt automatisch fachliche Wertebereiche", "ORDER BY verhindert doppelte Datensätze"], [0, 1], "Fremdschlüssel und CHECK-Constraints erzwingen konkrete Regeln. Indizes und Sortierung dienen nicht der fachlichen Integritätssicherung."),
    multi("sql-multi-003", "aggregation", "fortgeschritten", "Welche Aussagen zu WHERE, HAVING und COUNT sind korrekt?", ["WHERE filtert einzelne Ausgangszeilen vor der Gruppierung", "HAVING filtert Gruppen nach einer Aggregation", "COUNT(Spalte) ignoriert NULL-Werte dieser Spalte", "ORDER BY bestimmt, welche Zeilen in COUNT gezählt werden"], [0, 1, 2], "WHERE wirkt vor GROUP BY, HAVING auf gebildete Gruppen. COUNT(Spalte) zählt nur nicht-NULL-Werte; ORDER BY sortiert erst das Ergebnis." )
  ],
  "ipv4": [
    multi("ip-multi-001", "dhcp", "fortgeschritten", "Welche Informationen kann ein DHCP-Server einem IPv4-Client typischerweise übermitteln?", ["IPv4-Adresse und Subnetzmaske", "Standardgateway", "Adresse eines DNS-Servers", "Die MAC-Adresse des Switches als Voraussetzung für Routing"], [0, 1, 2], "DHCP kann zentrale Netzwerkparameter wie Adresse, Maske, Gateway und DNS-Server verteilen. Die Switch-MAC ist dafür nicht erforderlich."),
    multi("ip-multi-002", "private-adressen", "fortgeschritten", "Welche Adressen liegen in privaten IPv4-Adressbereichen nach RFC 1918?", ["10.12.5.9", "172.20.5.9", "192.168.5.9", "172.32.5.9"], [0, 1, 2], "Privat sind 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16. Der Bereich 172.32.x.x gehört nicht dazu."),
    multi("ip-multi-003", "fehleranalyse", "anspruchsvoll", "Ein Client erhält eine Adresse aus 169.254.0.0/16 und keine Gateway-Adresse. Welche Prüfungen sind sinnvoll?", ["Erreichbarkeit und Konfiguration des DHCP-Servers prüfen", "Physische Verbindung oder WLAN-Verbindung prüfen", "Die Adresse als reguläre öffentliche Internetadresse behandeln", "Den DNS-MX-Record als primäre Ursache annehmen"], [0, 1], "IPv4-Link-Local-Adressen deuten häufig auf ein Problem beim DHCP-Bezug hin. DHCP-Erreichbarkeit und Link sind sinnvolle erste Prüfpunkte.")
  ],
  "netzwerke": [
    multi("net-multi-001", "switching", "anspruchsvoll", "Welche Aussagen zu redundanten Layer-2-Verbindungen und Spanning Tree Protocol sind korrekt?", ["Redundante Switch-Verbindungen können ohne Schleifenschutz Layer-2-Schleifen verursachen", "STP kann redundante Pfade logisch blockieren, um Broadcast-Stürme zu vermeiden", "DHCP verhindert Layer-2-Schleifen automatisch", "Ein Hub trennt Broadcast-Domänen zuverlässig"], [0, 1], "Redundanz erhöht Verfügbarkeit, kann auf Layer 2 aber Schleifen erzeugen. STP verhindert deren Auswirkungen durch kontrolliertes Blockieren von Pfaden."),
    multi("net-multi-002", "netzwerkdiagnose", "anspruchsvoll", "Ein Dienst ist per IP-Adresse erreichbar, aber nicht über seinen Hostnamen. Welche Prüfungen sind zielgerichtet?", ["Mit nslookup die DNS-Antwort prüfen", "Die auf dem Client konfigurierte DNS-Serveradresse prüfen", "Sofort die Subnetzmaske aller Clients ändern", "Den Switch ohne weitere Diagnose ersetzen"], [0, 1], "Wenn IP-Konnektivität besteht, liegt die Ursache oft bei Namensauflösung oder DNS-Konfiguration. nslookup trennt DNS-Probleme von der Anwendung."),
    multi("net-multi-003", "wlan", "fortgeschritten", "Welche Maßnahmen verbessern ein Unternehmens-WLAN mit vielen Nutzern?", ["Individuelle Benutzeranmeldung über WPA-Enterprise beziehungsweise 802.1X einsetzen", "Kanäle bei mehreren Access Points geplant abstimmen", "Ein gemeinsames Kennwort für alle Mitarbeitenden dauerhaft unverändert lassen", "WLAN-Verschlüsselung deaktivieren, damit die Verbindung einfacher wird"], [0, 1], "Individuelle Authentisierung verbessert Nachvollziehbarkeit; abgestimmte Kanäle reduzieren Funkstörungen. Gemeinsame Dauerpasswörter und fehlende Verschlüsselung sind ungeeignet."),
    multi("net-multi-004", "netzwerkdiagnose", "fortgeschritten", "Welche Schritte gehören zu einer strukturierten Netzwerkfehlersuche?", ["Physische Verbindung und Link-Status prüfen", "IP-Konfiguration, Gateway und DNS passend zum Fehlerbild prüfen", "Änderungen und Beobachtungen dokumentieren", "Ohne Eingrenzung möglichst viele Komponenten gleichzeitig austauschen"], [0, 1, 2], "Eine schichtweise Diagnose beginnt bei der Basis, prüft dann passende Netzwerkparameter und dokumentiert Maßnahmen. Zufälliges Austauschen erschwert die Ursachenanalyse.")
  ],
  "it-grundlagen": [
    multi("base-multi-001", "verfuegbarkeit", "anspruchsvoll", "Welche Bausteine sind für einen Dienst mit geplanter Hochverfügbarkeit sinnvoll?", ["Redundante Komponenten", "Fehlererkennung und ein geplanter Failover", "Nur ein besonders leistungsstarker einzelner Server", "Das Deaktivieren von Monitoring"], [0, 1], "Hochverfügbarkeit benötigt Redundanz und eine erkannte, kontrollierte Umschaltung. Ein einzelner leistungsstarker Server bleibt ein Single Point of Failure."),
    multi("base-multi-002", "cloud", "fortgeschritten", "Ein SaaS-Administratorkonto wird nicht mehr benötigt. Welche Schritte verbessern den sicheren Umgang mit dieser Identität?", ["Das Konto deaktivieren oder entfernen", "Berechtigte Rollen und Gruppenmitgliedschaften prüfen", "Zugriffstoken oder Sitzungen bei Bedarf widerrufen", "Das Konto zur Sicherheit mit einem allgemeinen Teamkonto zusammenlegen"], [0, 1, 2], "Auch bei SaaS liegt die Verwaltung von Identitäten beim Kunden. Deprovisioning umfasst das Beenden von Zugriffen, Überprüfen von Rollen und gegebenenfalls das Widerrufen aktiver Zugriffe."),
    multi("base-multi-003", "backup", "anspruchsvoll", "Originaldaten und die einzige Sicherung liegen auf demselben, dauerhaft erreichbaren Server. Welche Risiken oder Verbesserungen treffen zu?", ["Ein Hardwareausfall des Servers kann Original und Sicherung gleichzeitig betreffen", "Ein Angriff mit Verschlüsselungsschadsoftware kann eine erreichbare Sicherung ebenfalls gefährden", "Eine zusätzliche unabhängige Sicherung außerhalb dieses Ausfallorts verbessert die Wiederherstellbarkeit", "Damit ist ein Wiederherstellungstest überflüssig"], [0, 1, 2], "Eine Sicherung am selben Ausfallort schützt nicht ausreichend gegen Hardwaredefekt oder Ransomware. Unabhängige Kopien und regelmäßige Tests sind nötig.")
  ],
  "windows-netzwerke": [
    multi("win-multi-001", "domäne", "fortgeschritten", "Welche Voraussetzungen sind für einen zuverlässigen Beitritt eines Windows-Clients zu einer Active-Directory-Domäne besonders wichtig?", ["Erreichbarkeit eines Domain Controllers", "Verwendung eines AD-integrierten DNS-Servers auf dem Client", "Ausreichende Berechtigung zum Domänenbeitritt", "Ein ausschließlich öffentlicher DNS-Resolver auf dem Client"], [0, 1, 2], "Für die AD-Dienstsuche benötigt der Client internes DNS. Zusätzlich müssen Netzwerkverbindung und passende Berechtigungen vorhanden sein."),
    multi("win-multi-002", "gpo", "anspruchsvoll", "Eine GPO wird bei einem Zielkonto nicht angewendet. Welche Prüfungen sind sinnvoll?", ["Mit gpresult oder der Gruppenrichtlinienauswertung die angewendeten und gefilterten GPOs prüfen", "Prüfen, ob die GPO an die passende OU verknüpft ist", "Security Filtering und erforderliche Rechte prüfen", "Zuerst den Bildschirmtreiber neu installieren"], [0, 1, 2], "Die Richtlinienauswertung zeigt Verknüpfung, Filterung und Fehler. Eine passende OU und Berechtigungen sind Grundvoraussetzungen für die Anwendung."),
    multi("win-multi-003", "berechtigungen", "anspruchsvoll", "Welche Aussagen zu Zugriff auf eine Dateifreigabe über das Netzwerk sind korrekt?", ["Die Freigabe- und NTFS-Berechtigungen müssen gemeinsam betrachtet werden", "Eine erfolgreiche Domänenanmeldung ersetzt nicht die Berechtigung auf den Ordner", "Ein explizites Deny kann sonst erlaubte Rechte übersteuern", "NTFS-Berechtigungen gelten bei Netzwerkzugriff grundsätzlich nie"], [0, 1, 2], "Über eine Freigabe wirken Freigabe- und NTFS-Rechte zusammen. Authentisierung und Autorisierung sind getrennt; explizites Deny ist mit Vorsicht einzusetzen."),
    multi("win-multi-004", "active-directory", "fortgeschritten", "Welche Aussagen zum Active-Directory-Papierkorb sind korrekt, wenn er aktiviert ist?", ["Gelöschte Objekte können innerhalb der konfigurierten Aufbewahrungszeit wiederherstellbar sein", "Er ist eine sinnvolle erste Option bei versehentlich gelöschten AD-Objekten", "Er ersetzt jede Sicherung von Active Directory vollständig", "Er macht die AD-Replikation überflüssig"], [0, 1], "Der AD-Papierkorb erleichtert die Wiederherstellung gelöschter Objekte, ersetzt aber weder Backups noch Replikation und gilt nur innerhalb der Aufbewahrungszeit.")
  ],
  "windows-server-admin": [
    multi("srv-multi-001", "verwaltung", "fortgeschritten", "Welche Möglichkeiten eignen sich zur Verwaltung eines Windows-Server-Core-Systems?", ["Windows Admin Center", "Remote Server Administration Tools", "Remote PowerShell", "Server Manager von einem Verwaltungsrechner"], [0, 1, 2, 3], "Server Core wird typischerweise lokal per Kommandozeile oder remote mit Verwaltungswerkzeugen wie Windows Admin Center, RSAT, PowerShell und Server Manager administriert."),
    multi("srv-multi-002", "fileserver", "fortgeschritten", "Welche Funktionen stellt der File Server Resource Manager bereit?", ["Speicherkontingente (Quotas)", "Dateiscreening", "Speicherberichte", "Vergabe von DHCP-Leases"], [0, 1, 2], "FSRM unterstützt die Verwaltung von Speicherplatz und Dateitypen auf Dateiservern. DHCP ist eine eigenständige Serverrolle."),
    multi("srv-multi-003", "verfuegbarkeit", "anspruchsvoll", "Welche Maßnahmen helfen bei einem Ausfall eines Virtualisierungshosts bei der Wiederherstellung oder Fortführung virtueller Maschinen?", ["Ein getestetes Backup", "Ein geplanter Failover-Cluster oder eine geeignete Replikation", "Nur ein lokaler Checkpoint auf demselben Host", "Das Deaktivieren von Host-Updates"], [0, 1], "Backups unterstützen die Wiederherstellung, Cluster oder Replikation können die Verfügbarkeit verbessern. Ein lokaler Checkpoint schützt nicht vor dem Ausfall seines Hosts.")
  ]
};

Object.entries(QUESTION_POOL_EXPANSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_MATERIAL_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_MULTISELECT_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});
