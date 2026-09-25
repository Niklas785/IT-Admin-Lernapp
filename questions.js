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

  6) Reihenfolge (type: "order")
  {
    type: "order",
    question: "Bringe die Schritte in die richtige Reihenfolge.",
    items: ["Erster Schritt", "Zweiter Schritt", "Dritter Schritt"],
    explanation: "Kurze Erklärung der richtigen Reihenfolge."
  }

  7) Zuordnung (type: "match")
  {
    type: "match",
    question: "Ordne die Begriffe ihren Erklärungen zu.",
    pairs: [
      { left: "Begriff A", right: "Passende Erklärung A" },
      { left: "Begriff B", right: "Passende Erklärung B" }
    ],
    explanation: "Kurze Erklärung der Zuordnungen."
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
        type: "order",
        question: "Bringe die Klauseln einer üblichen SELECT-Abfrage in ihre syntaktische Schreibreihenfolge.",
        items: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "HAVING", "ORDER BY"],
        explanation: "Die übliche Schreibreihenfolge lautet SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY. Die logische Verarbeitung einer Abfrage beginnt dagegen bei den Datenquellen aus FROM und JOIN."
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
        options: ["Jedes Attribut enthält einen atomaren Wert statt einer Liste mehrerer Werte","Alle Attribute hängen vom vollständigen Schlüssel ab","Nichtschlüsselattribute hängen nicht transitiv über andere Nichtschlüsselattribute ab","Jeder gespeicherte Attributwert muss innerhalb seiner Spalte eindeutig vorkommen"],
        correct: 0,
        explanation: "1NF: 1 Zelle = 1 Wert, keine Mehrfachwerte oder Listen in einer Zelle."
      },
      {
        type: "mc",
        question: "Eine Tabelle erfüllt bereits die 1. Normalform und hat einen zusammengesetzten Primärschlüssel. Welche zusätzliche Bedingung ist für die 2. Normalform entscheidend?",
        options: ["Nichtschlüsselattribute hängen vom gesamten Schlüssel ab, nicht nur von einem Teil","Jeder Wert wird atomar gespeichert, weitere Abhängigkeiten sind nicht zu prüfen","Ein Nichtschlüsselattribut darf ausschließlich von einer einzelnen Schlüsselspalte abhängen","Jede Schlüsselspalte muss auch für sich allein jeden Datensatz eindeutig kennzeichnen"],
        correct: 0,
        explanation: "Zur 2. Normalform gehört neben der 1. Normalform, dass Nichtschlüsselattribute nicht nur von einem Teil eines zusammengesetzten Kandidatenschlüssels abhängen. Solche Teilabhängigkeiten werden durch passend getrennte Tabellen aufgelöst."
      },
      {
        type: "mc",
        question: "Eine Tabelle erfüllt die 2. Normalform. Welches zusätzliche Ziel beschreibt die 3. Normalform im üblichen Grundlagenmodell?",
        options: ["Transitive Abhängigkeiten zwischen Nichtschlüsselattributen vermeiden","Erst die Speicherung mehrerer Werte in einem einzigen Feld auflösen","Erst Teilabhängigkeiten von zusammengesetzten Schlüsseln beseitigen","Alle Fremdschlüssel durch zusätzliche fortlaufende Nummern ersetzen"],
        correct: 0,
        explanation: "Im Grundlagenmodell sollen Nichtschlüsselattribute nicht über andere Nichtschlüsselattribute vom Schlüssel abhängen. Beispielsweise gehört die Anschrift eines Kunden zur Kundennummer und sollte nicht in jeder Bestellung wiederholt gepflegt werden."
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
          "Mit welcher Art von Anführungszeichen werden Textliterale bei INSERT INTO in SQL Server mit QUOTED_IDENTIFIER ON umschlossen? Nenne die Art oder gib das öffnende und schließende Zeichen ohne Text dazwischen ein.",
        accepted: ["einfache anführungszeichen", "einfaches anführungszeichen", "apostroph", "apostrophe", "'", "''", "' '", "hochkomma", "hochkommas", "hochkommata"],
        explanation: "Textliterale stehen in einfachen Anführungszeichen, zum Beispiel 'Max'. Als Antwort auf die Zeichenfrage werden ein einzelnes Apostroph oder das Zeichenpaar akzeptiert; im SQL-Code selbst bezeichnet '' einen leeren Text. Doppelte Anführungszeichen kennzeichnen bei QUOTED_IDENTIFIER ON Bezeichner, keine Textliterale."
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
        question: "Wie berechnest du aus n Host-Bits die Anzahl nutzbarer IPv4-Hostadressen eines klassischen Subnetzes? Gib die Formel ein.",
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
        accepted: ["/30", "30"],
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
          "Wie viele verschiedene IPv4-Adressen gibt es insgesamt? (nur Ziffern, ohne Punkte)",
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
          "Welche Blockgröße haben Subnetze mit der Maske 255.255.255.192 im letzten Oktett? (nur Zahl)",
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
        question: "Ein Client hat in seinem IPv4-Subnetz einen Router als Standardgateway eingetragen. Welche Aufgabe übernimmt dieser Router als Standardgateway?",
        options: [
          "Er ist der nächste Hop für Ziele ohne speziellere Route.",
          "Er beantwortet DNS-Anfragen des Clients.",
          "Er teilt dem Client eine IP-Adresse mit zeitlich begrenzter Lease zu.",
          "Er ermittelt für den Client die MAC-Adressen aller entfernten Zielhosts."
        ],
        correct: 0,
        explanation: "Die Standardroute verweist auf das Gateway als nächsten Hop, wenn keine speziellere Route zum Ziel passt. Namensauflösung und Adressvergabe sind Aufgaben von DNS beziehungsweise DHCP; ein Gerät kann diese Dienste zusätzlich anbieten, aber nicht aufgrund seiner Rolle als Standardgateway. Der Client ermittelt für entfernte Ziele die lokale MAC-Adresse des nächsten Hops, nicht die des entfernten Zielhosts. Gateway kann in anderen Zusammenhängen auch eine Protokollvermittlung bezeichnen."
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
        type: "order",
        question: "Bringe die Nachrichten des DHCP-DORA-Prozesses in die richtige Reihenfolge.",
        items: ["Discover", "Offer", "Request", "Acknowledge"],
        explanation: "DORA bedeutet Discover, Offer, Request, Acknowledge: Der Client sucht, der Server bietet eine Konfiguration an, der Client fordert sie an und der Server bestätigt sie."
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
        options: ["Ein SAN, das den Servern blockbasierten Speicher bereitstellt","Ein NAS mit ausschließlich dateibasierten SMB-Freigaben","Ein Objektspeicher, der ausschließlich Zugriffe auf Objekte per HTTP anbietet","Ein lokales RAID, das ohne Netzwerkfreigabe nur an einen Server angeschlossen ist"],
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
        options: ["Anwendungen ausschließlich auf eigenen lokalen Endgeräten installieren","IT-Ressourcen als bedarfsgerecht nutzbare Dienste über ein Netzwerk bereitstellen","Rechenleistung durch den einmaligen Kauf eigener Server statt durch Dienste bereitstellen","Daten allein durch Kopieren auf eine externe Festplatte außerhalb des Büros aufbewahren"],
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
        question: "Mit welchen Active-Directory-Ebenen können GPOs direkt verknüpft werden?",
        options: ["Mit Gruppen, Benutzern und Computerobjekten","Mit Standorten, Domänen und Organisationseinheiten","Mit Gesamtstrukturen, Vertrauensstellungen und Gruppenmitgliedschaften","Mit Netzlaufwerken, Freigaben und einzelnen Verzeichniseinträgen"],
        correct: 1,
        explanation: "GPO-Verknüpfungen sind an Sites, Domänen und OUs möglich. Sicherheitsgruppen können den Geltungsbereich filtern, sind aber keine Verknüpfungsziele. Lokale Gruppenrichtlinien existieren zusätzlich und sind keine AD-Verknüpfung."
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
        options: ["Version und Edition bestimmen, wie lange reguläre Sicherheitsupdates bereitstehen","Alle Versionen derselben Windows-Familie besitzen unabhängig von der Edition dasselbe Supportende","Die erfolgreiche Aktivierung verlängert den Produktsupport automatisch um weitere Jahre","Eine gültige Lizenz garantiert unabhängig vom Lebenszyklus unbegrenzte Sicherheitsupdates"],
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
        question: "Welche Aussage unterscheidet die Supportlaufzeiten von Windows 11 Enterprise LTSC 2024 und Windows 11 IoT Enterprise LTSC 2024 korrekt?",
        options: ["Beide Editionen erhalten grundsätzlich unbegrenzten Support.", "Enterprise LTSC 2024 hat fünf Jahre, IoT Enterprise LTSC 2024 zehn Jahre Support.", "Enterprise LTSC 2024 hat zehn Jahre, IoT Enterprise LTSC 2024 fünf Jahre Support.", "Die Supportdauer hängt ausschließlich von der installierten RAM-Menge ab."],
        correct: 1,
        explanation: "Die Laufzeit hängt von Edition und Version ab: Windows 11 Enterprise LTSC 2024 hat einen fünfjährigen, die IoT-Enterprise-LTSC-2024-Edition einen zehnjährigen Lebenszyklus. LTSC ist daher keine pauschale Zusage für zehn Jahre Support."
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
        question: "Mehrere direkt angeschlossene Laufwerke eines Windows-Servers sollen ohne Hardware-RAID-Controller einen gespiegelten Speicherplatz bilden. Welche Windows-Funktion ist dafür vorgesehen?",
        options: ["Storage Spaces mit einem passenden Spiegelungs-Layout","Ein Storage-Spaces-Pool mit ausschließlich einfachem Layout ohne Redundanz","NTFS-Komprimierung der Dateien auf einem einzelnen Laufwerk","Ein zusätzlicher Volume-Einhängepunkt ohne redundante Datenablage"],
        correct: 0,
        explanation: "Storage Spaces kann Laufwerke zu einem Pool zusammenfassen und einen gespiegelten Speicherplatz bereitstellen. Ein einfaches Layout, Komprimierung oder zusätzliche Zugriffspfade erzeugen keine Spiegelung. Ein hardwareseitiger RAID-Controller ist dafür nicht erforderlich."
      },
      {
        type: "text",
        question: "Wie viele physische Laufwerke benötigt ein klassischer Dreiwegspiegel in Windows Storage Spaces auf einem einzelnen Server mindestens? (nur Zahl)",
        accepted: ["5"],
        explanation: "Klassische Storage Spaces auf einem Standalone-Server benötigen mindestens fünf Laufwerke für einen Dreiwegspiegel mit Schutz gegen zwei gleichzeitige Laufwerksausfälle. Drei Datenkopien bedeuten nicht, dass bereits drei Laufwerke genügen."
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
        question: "Einer von mehreren Domain Controllern fällt aus. Ein anderer beschreibbarer DC mit aktuellem Replikationsstand und den benötigten DNS-/GC-Diensten ist für Clients erreichbar. Was gilt für gewöhnliche Domänenanmeldungen?",
        options: ["Sie bleiben bis zur manuellen Wiederherstellung sämtlicher FSMO-Rollen grundsätzlich gesperrt","Sie können über den verbleibenden geeigneten DC weiter funktionieren","Sie erfordern auf jedem Client das Löschen und erneute Anlegen des Domänenkontos","Sie wechseln für alle Benutzer automatisch zu neu angelegten lokalen Konten"],
        correct: 1,
        explanation: "AD-Replikation und weitere erreichbare geeignete DCs ermöglichen gewöhnliche Anmeldungen auch bei Ausfall eines DCs. Spezielle Rollen, DNS, Global Catalog, Standort und Erreichbarkeit sind zu berücksichtigen; deshalb sind diese Voraussetzungen in der Aufgabe benannt."
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
        options: ["Sie ordnen jeder IPv4-Adresse ausschließlich ihren Hostnamen für die Rückwärtsauflösung zu","Sie benennen Server und Ports für Dienste wie LDAP oder Kerberos","Sie speichern die signierten Kerberos-Tickets der zuletzt angemeldeten Benutzer","Sie legen für jede Freigabe die zum Zugriff berechtigten Sicherheitsgruppen fest"],
        correct: 1,
        explanation: "Ohne funktionierende SRV-Einträge im DNS können Clients keinen passenden Domänencontroller bzw. AD-Dienst finden."
      },
      {
        type: "mc",
        question: "Warum sollte ein Administrator die Wiederherstellungsdauer im Active-Directory-Papierkorb nicht pauschal als identisch für jede Gesamtstruktur annehmen?",
        options: ["Konfigurierte Aufbewahrungsattribute und die Historie der Gesamtstruktur sind maßgeblich","Die aktuell installierte Windows-Version jedes Clients legt eine einheitliche Dauer fest","Die verbleibende Kennwortgültigkeit des gelöschten Kontos bestimmt die Wiederherstellungsfrist","Die TTL des DNS-Records zum Domänencontroller bestimmt die Aufbewahrung gelöschter AD-Objekte"],
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
        question: "Was bewirkt slmgr.vbs /rearm bei einer Windows-Installation, die den Vorgang noch zulässt?",
        options: ["Es installiert einen neuen Produktschlüssel aus einer eingegebenen Lizenzdatei","Es setzt den Aktivierungsstatus beziehungsweise zugehörige Fristen im zulässigen Rahmen zurück","Es startet ausschließlich eine Onlineaktivierung mit dem bereits installierten Produktschlüssel","Es entfernt die bisherige Windows-Edition und installiert automatisch eine neuere Edition"],
        correct: 1,
        explanation: "/rearm setzt den Aktivierungsstatus zurück und kann je nach Edition und Lizenzzustand eine zulässige Nutzungs- oder Aktivierungsfrist erneut beginnen lassen. Voraussetzungen und Begrenzungen müssen erfüllt sein. Es beschafft keine Lizenz und ist keine allgemeine Dauerverlängerung."
      },
      {
        type: "mc",
        question: "Ein Server soll nach einer erfolgreichen Testphase produktiv weiterbetrieben werden. Welches Vorgehen ist fachlich und lizenzrechtlich richtig?",
        options: ["Passende Lizenzierung und einen unterstützten Übergang in den Produktivbetrieb sicherstellen","Die Evaluierungsfrist regelmäßig zurücksetzen und dies als dauerhafte Lizenzierung behandeln","Die Installation eines aktuellen Sicherheitsupdates als Ersatz für eine Produktivlizenz ansehen","Die Aktivierung eines anderen Servers als Nachweis für die Lizenzierung dieser Installation nutzen"],
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
        question: "Welcher praktische Vorteil spricht bei vielen Web-APIs für JSON als Austauschformat gegenüber XML?",
        options: ["Eine automatische Verschlüsselung der übertragenen Inhalte ohne zusätzliches Transportprotokoll","Eine oft kompakte Textdarstellung mit breiter Unterstützung in Programmiersprachen","Eine integrierte Prüfung, ob die übertragenen Daten zum fachlichen Schema der Anwendung passen","Die Fähigkeit, komplexe Datenstrukturen darzustellen, die XML grundsätzlich nicht abbilden kann"],
        correct: 1,
        explanation: "JSON wird von vielen Sprachen unterstützt und ist für typische strukturierte API-Daten oft kompakt. XML kann ebenfalls komplexe Strukturen darstellen und hat eigene Einsatzvorteile. JSON allein verschlüsselt Daten nicht und ersetzt keine fachliche Schema- oder Eingabeprüfung."
      },
      {
        type: "mc",
        question: "Was ist ein zentrales Sicherheitsrisiko von IoT-Geräten (z. B. smarte Glühbirnen, Thermostate)?",
        options: ["Ein Gerät ohne Bildschirm kann seine Firmware nachträglich grundsätzlich nicht verändern","Unzureichend geschützte Geräte können einen Zugangspunkt ins Netzwerk bilden","Die Nutzung eines privaten Adressbereichs schließt Angriffe auf das Gerät bereits aus","Ein Gerät mit nur einer Steuerfunktion benötigt unabhängig vom Netzzugang keine Updates"],
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
  id und subtopic unterstützen die fachliche Pflege. difficulty wird vom
  vorhandenen Schwierigkeitsfilter ausgewertet; fehlende Werte zählen als
  Grundlagen. Neue Inhalte verwenden dieselben vorhandenen Fragetypen.
*/
const mc = (id, subtopic, difficulty, question, options, correct, explanation) =>
  ({ id, subtopic, difficulty, type: "mc", question, options, correct, explanation });
const multi = (id, subtopic, difficulty, question, options, correct, explanation) =>
  ({ id, subtopic, difficulty, type: "multi", question, options, correct, explanation });
const orderQuestion = (id, subtopic, difficulty, question, items, explanation) =>
  ({ id, subtopic, difficulty, type: "order", question, items, explanation });
const matchQuestion = (id, subtopic, difficulty, question, pairs, explanation) =>
  ({ id, subtopic, difficulty, type: "match", question, pairs, explanation });
const textQuestion = (id, subtopic, difficulty, question, accepted, explanation) =>
  ({ id, subtopic, difficulty, type: "text", question, accepted, explanation });
const blankQuestion = (id, subtopic, difficulty, question, blanks, explanation) =>
  ({ id, subtopic, difficulty, type: "blank", question, blanks, explanation });

const QUESTION_POOL_EXPANSION = {
  "it-sicherheit": [
    mc("sec-001", "schutzziele", "fortgeschritten", "Ein Onlineshop ist während eines Angriffs nicht erreichbar, Kundendaten wurden aber weder gelesen noch verändert. Welches Schutzziel ist unmittelbar verletzt?", ["Verfügbarkeit", "Vertraulichkeit", "Integrität", "Authentizität"], 0, "Wenn ein Dienst bei Bedarf nicht nutzbar ist, ist seine Verfügbarkeit beeinträchtigt."),
    mc("sec-002", "risikomanagement", "fortgeschritten", "Ein ungepatchter Webserver ist von außen erreichbar. Wie hängen Schwachstelle, Bedrohung und Risiko hier korrekt zusammen?", ["Der fehlende Patch ist die Schwachstelle; ein Angreifer ist eine Bedrohung; ein erfolgreicher Missbrauch erzeugt ein Risiko.", "Der Angreifer ist die Schwachstelle; der Patch ist das Risiko.", "Die Erreichbarkeit ist automatisch bereits ein Sicherheitsvorfall.", "Ein Risiko besteht erst, wenn Daten tatsächlich gelöscht wurden."], 0, "Eine Schwachstelle kann von einer Bedrohung ausgenutzt werden. Das daraus mögliche Schadensereignis ist das Risiko."),
    mc("sec-003", "zugriffsschutz", "fortgeschritten", "Eine Auszubildende soll Rechnungen lesen, aber weder freigeben noch Konten verwalten. Welches Prinzip wird damit umgesetzt?", ["Least Privilege", "Single Sign-on", "Failover", "Datenminimierung"], 0, "Least Privilege vergibt nur die Berechtigungen, die für die Aufgabe erforderlich sind."),
    mc("sec-004", "zugriffsschutz", "anspruchsvoll", "Ein Angreifer kennt das Passwort eines Mitarbeiters. Welche zusätzliche Maßnahme reduziert das Risiko eines erfolgreichen Logins am stärksten?", ["Einen unabhängigen zweiten Faktor für die Anmeldung verlangen","Das bekannte Passwort durch eine längere Mindestlänge absichern","Das Kennwortfeld während der Eingabe mit Sternchen verdecken","Die Fehlermeldung bei einem unbekannten Benutzernamen vereinheitlichen"], 0, "Mehrfaktor-Authentisierung verlangt neben Wissen wie einem Passwort einen weiteren, unabhängigen Faktor."),
    mc("sec-005", "passwoerter", "fortgeschritten", "Warum ist ein individuell zufälliger Salt beim Speichern von Passwort-Hashes sinnvoll?", ["Er verhindert, dass gleiche Passwörter zwangsläufig gleiche Hashwerte ergeben, und erschwert vorberechnete Tabellen.", "Er macht aus einem Hash wieder ein verschlüsseltes Passwort.", "Er ersetzt die Notwendigkeit einer langsamen Hashfunktion.", "Er erlaubt dem Administrator, das Klartextpasswort wiederherzustellen."], 0, "Ein Salt ist kein Geheimnis, macht aber vorberechnete Angriffe und Vergleiche gleicher Passwörter deutlich schwieriger."),
    mc("sec-006", "kryptografie", "fortgeschritten", "Welche Aussage unterscheidet Hashing eindeutig von symmetrischer Verschlüsselung?", ["Ein Hash soll nicht zurückgerechnet werden; symmetrisch verschlüsselte Daten können mit demselben geheimen Schlüssel entschlüsselt werden.", "Ein Hash benötigt immer ein Zertifikat, Verschlüsselung nie.", "Symmetrische Verschlüsselung verändert keine Daten.", "Hashing schützt automatisch die Vertraulichkeit einer Datei."], 0, "Hashes dienen beispielsweise Integritätsprüfungen oder Passwortspeicherung; Verschlüsselung schützt die Vertraulichkeit."),
    mc("sec-007", "backup", "anspruchsvoll", "Nach einem Ransomware-Befall existiert ein Online-Backup, das ebenfalls verschlüsselt wurde. Welche Ergänzung hätte die Wiederherstellbarkeit am wirksamsten verbessert?", ["Eine getrennte, offline oder unveränderlich geschützte Sicherung","Eine zweite Backup-Datei im selben beschreibbaren Netzwerkordner","Häufigere Sicherungen mit denselben uneingeschränkten Zugriffsrechten","Eine Spiegelung auf ein dauerhaft verbundenes beschreibbares Laufwerk"], 0, "Backups müssen vom Produktionssystem getrennt und vor Manipulation geschützt sein."),
    mc("sec-008", "backup", "fortgeschritten", "Ein Fachbereich akzeptiert höchstens vier Stunden Datenverlust nach einem Ausfall. Welche Kennzahl beschreibt diese Vorgabe?", ["RPO", "RTO", "MTTR", "SLA"], 0, "Das Recovery Point Objective beschreibt den maximal akzeptablen Datenverlust in Zeit."),
    mc("sec-009", "backup", "fortgeschritten", "Ein Dienst muss nach einem Ausfall innerhalb von zwei Stunden wieder laufen. Welche Kennzahl wird damit festgelegt?", ["RTO", "RPO", "Hashwert", "Aufbewahrungsfrist"], 0, "Das Recovery Time Objective beschreibt die maximal akzeptable Wiederherstellungszeit."),
    mc("sec-010", "incident-response", "anspruchsvoll", "Auf einem Arbeitsplatz erscheinen Ransomware-Hinweise und Netzwerkfreigaben werden schnell umbenannt. Was ist die sinnvollste erste technische Sofortmaßnahme?", ["Den betroffenen Rechner vom Netzwerk trennen, ohne Beweise zu löschen.", "Sofort alle Dateien auf dem Rechner löschen.", "Das Lösegeld bezahlen, bevor jemand informiert wird.", "Den Rechner normal weiterarbeiten lassen, um den Fehler zu beobachten."], 0, "Die Isolation begrenzt die Ausbreitung. Danach folgen dokumentierte Incident-Response-Schritte."),
    mc("sec-011", "patchmanagement", "fortgeschritten", "Warum sollte ein Unternehmen Sicherheitsupdates vor der breiten Verteilung zunächst in einer Testgruppe prüfen?", ["Inkompatibilitäten vor der breiten Installation früh erkennen","Die erfolgreiche Installation bereits als vollständigen Anwendungstest werten","Die Sicherung vor späteren produktiven Updates dadurch einsparen","Nur prüfen, ob sich die Update-Datei erfolgreich herunterladen lässt"], 0, "Ein geregeltes Patchmanagement verbindet Risikoreduktion mit Betriebssicherheit."),
    mc("sec-012", "netzwerksicherheit", "anspruchsvoll", "Ein Webserver darf nur HTTPS-Anfragen aus dem Internet annehmen. Die Datenbank soll ausschließlich vom Webserver erreichbar sein. Welche Architektur unterstützt dies am besten?", ["Getrennte Zonen mit gezielten Firewallfreigaben zwischen den Diensten","Eine gemeinsame Zone mit Filterung nur am Internetanschluss","Ein Datenbankzugang aus dem Internet, geschützt allein durch ein Kennwort","Eine Trennung durch DNS-Namen bei unverändert offenen Verbindungen"], 0, "Netzsegmentierung und restriktive Regeln begrenzen seitliche Bewegungen und Angriffsflächen."),
    mc("sec-013", "websicherheit", "anspruchsvoll", "Eine Suche baut SQL durch Zeichenkettenverkettung aus Benutzereingaben. Welche Maßnahme verhindert SQL-Injection am zuverlässigsten?", ["Parametrisierte Abfragen beziehungsweise Prepared Statements verwenden", "Sonderzeichen nur in der Benutzeroberfläche ausblenden", "Die Fehlermeldungen rot einfärben", "Die Datenbanktabelle umbenennen"], 0, "Parameter werden getrennt vom SQL-Code übergeben und nicht als ausführbarer Bestandteil interpretiert."),
    mc("sec-014", "websicherheit", "fortgeschritten", "Welches Ziel verfolgt Output-Encoding im Kontext einer Webanwendung?", ["Auszugebende Daten im jeweiligen Kontext nicht als Code interpretieren lassen","Eingaben vor der Speicherung mit einem Passwort-Hashverfahren umwandeln","Eingegebene Werte allein durch Entfernen aller Leerzeichen bereinigen","Die Übertragung der Antwort unabhängig vom verwendeten Protokoll verschlüsseln"], 0, "Kontextgerechtes Encoding ist eine zentrale Maßnahme gegen Cross-Site-Scripting."),
    mc("sec-015", "logging", "fortgeschritten", "Welcher Protokolleintrag ist für die Untersuchung wiederholter fehlgeschlagener Anmeldungen besonders wichtig?", ["Zeitpunkt, Konto, Quelladresse und Erfolg beziehungsweise Fehler","Zeitpunkt, Prozesslast, freier Speicher und laufende Dienstnamen","Konto, Abteilung, Erstellungsdatum und vorgesehene Lizenzgruppe","Quelladresse, Datenmenge, Paketgröße und Geschwindigkeit der Verbindung"], 0, "Aussagekräftige, manipulationsgeschützte Logs unterstützen Erkennung und Forensik; Passwörter gehören niemals hinein."),
    mc("sec-016", "zugriffsschutz", "anspruchsvoll", "Ein Mitarbeiter wechselt von der Buchhaltung in den Vertrieb. Welche Maßnahme verhindert am ehesten dauerhaft zu weitreichende Rechte?", ["Nicht mehr benötigte Gruppenrechte entziehen und neue Rechte zuweisen","Neue Gruppenrechte ergänzen und die bisherigen Rechte beibehalten","Das Passwort wechseln und die bisherigen Gruppenmitgliedschaften übernehmen","Die Abteilungsangabe ändern, ohne bestehende Zugriffsrechte anzupassen"], 0, "Joiner-Mover-Leaver-Prozesse sorgen dafür, dass Rechte mit der tatsächlichen Aufgabe übereinstimmen."),
    mc("sec-017", "datenschutz", "fortgeschritten", "Ein Formular verlangt Geburtsdatum, obwohl für die Newsletter-Anmeldung nur eine E-Mail-Adresse nötig ist. Welcher DSGVO-Grundsatz ist betroffen?", ["Datenminimierung", "Speicherintegrität", "Portabilität", "Verfügbarkeit"], 0, "Es dürfen nur personenbezogene Daten erhoben werden, die für den angegebenen Zweck erforderlich sind."),
    mc("sec-018", "datenschutz", "anspruchsvoll", "Ein Unternehmen ersetzt Namen in einer Auswertung durch Kundennummern, kann die Zuordnung aber über eine getrennte Tabelle wiederherstellen. Wie heißt dieses Verfahren?", ["Pseudonymisierung", "Anonymisierung", "Verschlüsselung ohne Schlüssel", "Löschung"], 0, "Bei Pseudonymisierung bleibt eine Re-Identifizierung mit Zusatzinformationen möglich; bei Anonymisierung nicht."),
    mc("sec-019", "datenschutz", "fortgeschritten", "Wann ist eine Datenschutz-Folgenabschätzung besonders naheliegend?", ["Wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Rechte und Freiheiten betroffener Personen erzeugt.", "Bei jeder Änderung eines Firmenlogos.", "Nur wenn weniger als 20 Personen Daten verarbeiten.", "Erst nachdem ein Datenschutzvorfall eingetreten ist."], 0, "Die DSFA bewertet Risiken vor einer besonders risikoreichen Verarbeitung und plant Schutzmaßnahmen."),
    mc("sec-020", "datenschutz", "anspruchsvoll", "Ein Cloud-Anbieter verarbeitet Kundendaten weisungsgebunden. Welche Regelung muss insbesondere Verantwortlichkeiten, Weisungen und technische Maßnahmen festlegen?", ["Ein Vertrag zur Auftragsverarbeitung", "Ein Kaufvertrag über Hardware", "Eine private Geheimhaltungsvereinbarung der Kunden", "Ein Wartungsvertrag ohne Datenbezug"], 0, "Die Auftragsverarbeitung nach DSGVO erfordert eine klare vertragliche Regelung zwischen Verantwortlichem und Auftragsverarbeiter."),
    mc("sec-021", "netzwerksicherheit", "fortgeschritten", "Warum ersetzt ein VPN im Hotel-WLAN nicht die Prüfung einer HTTPS-Verbindung?", ["Der VPN-Tunnel endet am VPN-Server; HTTPS schützt die Verbindung zur Website","Die VPN-Anmeldung bestätigt zugleich die Identität aller besuchten Websites","Die Verschlüsselung im VPN ersetzt die Prüfung des Website-Zertifikats","Die Website wird durch die Nutzung des VPN-Endpunkts automatisch vertrauenswürdig"], 0, "Beide Maßnahmen schützen unterschiedliche Abschnitte und Eigenschaften einer Verbindung."),
    mc("sec-022", "social-engineering", "anspruchsvoll", "Eine E-Mail fordert unter Zeitdruck zur Anmeldung über einen Link auf. Die Absenderadresse ähnelt der echten Domäne nur optisch. Welches Merkmal spricht am stärksten für Phishing?", ["Die abweichende Absenderdomäne zusammen mit Zeitdruck und Login-Link","Die Verwendung einer allgemeinen Begrüßung ohne ausgeschriebenen Vornamen","Ein Firmenlogo im Kopfbereich und eine Signatur mit Kontaktdaten","Ein anklickbarer Link statt einer vollständig ausgeschriebenen Webadresse"], 0, "Phishing kombiniert oft technische Täuschung mit sozialem Druck. Die tatsächliche Domäne ist entscheidend."),
    mc("sec-023", "sicherheitsarchitektur", "fortgeschritten", "Was beschreibt Defense in Depth am treffendsten?", ["Mehrere Schutzschichten begrenzen die Folgen einer einzelnen versagenden Maßnahme","Eine Schutzmaßnahme wird so umfangreich konfiguriert, dass weitere entfallen","Derselbe Schutzdienst wird ohne funktionale Trennung mehrfach hintereinandergeschaltet","Schutzmaßnahmen werden vollständig an der äußeren Netzwerkgrenze konzentriert"], 0, "Mehrschichtige Schutzmaßnahmen reduzieren das Risiko eines Single Point of Failure in der Sicherheit."),
    mc("sec-024", "verfuegbarkeit", "anspruchsvoll", "Zwei Webserver arbeiten hinter einem Load Balancer. Ein Server fällt aus, der Dienst bleibt erreichbar. Welches Ziel wird primär erreicht?", ["Höhere Verfügbarkeit durch Redundanz", "Vertraulichkeit durch Verschlüsselung", "Datenminimierung", "Nichtabstreitbarkeit"], 0, "Redundanz kann den Ausfall einzelner Komponenten abfangen und die Verfügbarkeit steigern."),
    mc("sec-025", "zugriffsschutz", "fortgeschritten", "Welcher Fall ist ein Beispiel für eine technische Zugriffskontrolle statt einer organisatorischen Regel?", ["Eine Firewall verweigert Verbindungen zu einem nicht freigegebenen Port.", "Eine Arbeitsanweisung verbietet private USB-Sticks.", "Ein Aushang erinnert an die Clean-Desk-Policy.", "Eine Schulung erklärt Phishing."], 0, "Technische Maßnahmen werden durch Systeme durchgesetzt; Richtlinien und Schulungen sind organisatorische Maßnahmen."),
    mc("sec-026", "kryptografie", "anspruchsvoll", "Ein Empfänger soll nachweisen können, dass eine Nachricht vom angegebenen Absender stammt und unterwegs nicht verändert wurde. Was wird benötigt?", ["Eine digitale Signatur des Absenders", "Nur eine Komprimierung der Nachricht", "Eine öffentliche IP-Adresse des Empfängers", "Ein zweites identisches Passwort"], 0, "Eine digitale Signatur ermöglicht Authentizitäts- und Integritätsprüfung; sie ersetzt keine Verschlüsselung für Vertraulichkeit."),
    mc("sec-027", "malware", "fortgeschritten", "Warum ist das Arbeiten mit einem Standardbenutzerkonto im Alltag sicherer als dauerhaft mit lokalen Administratorrechten?", ["Programme starten gewöhnlich mit weniger weitreichenden Berechtigungen","Das Konto untersucht jede geöffnete Datei auf bislang unbekannte Schadsoftware","Der Browser ersetzt mit diesem Kontotyp seine Zertifikatsprüfung","Die Anmeldung verhindert bereits die Zustellung gefälschter Nachrichten"], 0, "Geringere Berechtigungen begrenzen die mögliche Auswirkung eines kompromittierten Kontos."),
    mc("sec-028", "datenschutz", "fortgeschritten", "Ein Kunde verlangt Auskunft über die zu seiner Person gespeicherten Daten. Welche Eigenschaft der Datenhaltung hilft besonders, fristgerecht und vollständig zu antworten?", ["Ein gepflegtes Verarbeitungsverzeichnis mit nachvollziehbaren Datenflüssen","Eine Liste aller Servernamen ohne Zuordnung der gespeicherten Daten","Ein Verzeichnis aller Sicherungsläufe ohne Angaben zu den Dateninhalten","Eine Übersicht über Lizenzkosten und Versionen der eingesetzten Anwendungen"], 0, "Dokumentierte Verarbeitung und Datenflüsse unterstützen Betroffenenrechte und Datenschutz-Compliance."),
    mc("sec-029", "incident-response", "anspruchsvoll", "Warum sollte ein Sicherheitsvorfall dokumentiert werden, auch wenn er schnell behoben scheint?", ["Ursache, Auswirkungen und notwendige Folgemaßnahmen nachvollziehbar festhalten","Den Vorfall mit der Dokumentation ohne weitere Prüfung endgültig abschließen","Die Wiederherstellung des Dienstes allein anhand der Textbeschreibung nachweisen","Eine technische Ursachenprüfung durch einen vollständigen Ereignisbericht ersetzen"], 0, "Dokumentation ist für Forensik, Compliance und die Verbesserung von Schutzmaßnahmen notwendig."),
    mc("sec-030", "websicherheit", "fortgeschritten", "Ein Serverzertifikat ist abgelaufen. Welche Sicherheitsfolge hat das im Browser typischerweise?", ["Die Zertifikatsprüfung scheitert an der überschrittenen Gültigkeitsdauer","Der öffentliche Schlüssel gilt automatisch als kompromittiert","Die bestehende Verschlüsselung wird durch das Ablaufdatum mathematisch entschlüsselbar","Der Browser verlängert die Gültigkeit, wenn der Hostname weiterhin zum Zertifikat passt"], 0, "Zertifikatsprüfung ist Teil der TLS-Vertrauenskette. Warnungen dürfen nicht routinemäßig übergangen werden."),
    mc("sec-031", "datenschutz", "anspruchsvoll", "Ein Unternehmen bewahrt Newsletter-Anmeldedaten nach einer Abmeldung unbegrenzt auf, obwohl kein gesetzlicher Grund und kein anderer Zweck mehr besteht. Welcher Grundsatz ist besonders betroffen?", ["Speicherbegrenzung", "Datenübertragbarkeit", "Netzneutralität", "Verfügbarkeit"], 0, "Personenbezogene Daten sollen nicht länger als für den Zweck erforderlich gespeichert werden. Gesetzliche Aufbewahrungspflichten können eine begründete Ausnahme sein."),
    mc("sec-032", "backup", "anspruchsvoll", "Ein Fachbereich akzeptiert höchstens vier Stunden Datenverlust, der Dienst darf aber bis zu acht Stunden ausfallen. Welche Zuordnung ist richtig?", ["RPO = 4 Stunden, RTO = 8 Stunden", "RPO = 8 Stunden, RTO = 4 Stunden", "Beide Werte beschreiben nur die Backupgröße", "RPO und RTO sind identisch"], 0, "RPO beschreibt den maximal tolerierten Datenverlust in Zeit; RTO die maximal tolerierte Wiederherstellungsdauer."),
    mc("sec-033", "risikomanagement", "anspruchsvoll", "Ein Unternehmen akzeptiert ein geringes Restrisiko, nachdem es Maßnahmen umgesetzt hat. Welche Aussage ist fachlich richtig?", ["Ein begründetes Restrisiko kann akzeptiert werden und bleibt zu überwachen","Die Neubewertung nach formaler Risikoakzeptanz einstellen","Die Umsetzung einer Schutzmaßnahme belegt bereits ein vollständiges Nullrisiko","Die Risikoakzeptanz überträgt die Verantwortung automatisch an den IT-Dienstleister"], 0, "Risikomanagement identifiziert, bewertet und behandelt Risiken; ein verbleibendes Restrisiko wird bewusst entschieden und überwacht.")
  ],
  "sql": [
    mc("sql-021", "datenmodell", "fortgeschritten", "Eine Tabelle Bestellung enthält die Spalte KundenID, die auf Kunde(KundenID) verweist. Welche Aufgabe hat diese Beziehung?", ["Eine angegebene KundenID muss auf einen vorhandenen Kundenschlüssel verweisen","Jeder Kunde darf durch diese Beziehung höchstens eine Bestellung besitzen","Bestellungen werden durch die Beziehung nach dem Namen des Kunden sortiert","Jede Bestellung erhält eine Kopie aller Kundendaten statt eines Verweises"], 0, "Ein Fremdschlüssel modelliert Beziehungen und kann referenzielle Integrität durchsetzen."),
    mc("sql-022", "datenmodell", "fortgeschritten", "Warum ist eine automatisch vergebene Bestellnummer als Primärschlüssel oft besser geeignet als der Kundenname?", ["Eine solche Nummer ist als eindeutiger, stabiler Identifikator geeignet","Die Nummer beschreibt unmittelbar den Inhalt der Bestellung","Eine solche Nummer ordnet die Bestellungen automatisch nach dem Kundennamen","Eine solche Nummer verhindert unabhängig vom Tabellendesign redundante Kundendaten"], 0, "Primärschlüssel müssen jeden Datensatz eindeutig und möglichst dauerhaft identifizieren."),
    mc("sql-023", "joins", "anspruchsvoll", "Eine Abfrage soll alle Kunden zeigen, auch solche ohne Bestellung. Welche Join-Richtung ist bei Kunde LEFT JOIN Bestellung passend?", ["Kunde links, Bestellung rechts; Kunden ohne Treffer erhalten für Bestellspalten NULL.", "Bestellung links, Kunde rechts; fehlende Kunden werden gelöscht.", "INNER JOIN, weil er immer alle Kunden liefert.", "CROSS JOIN, weil er nur passende Kunden liefert."], 0, "Ein LEFT JOIN erhält alle Zeilen der linken Tabelle und ergänzt nicht vorhandene rechte Werte mit NULL."),
    mc("sql-024", "joins", "anspruchsvoll", "Eine Abfrage verbindet Kunde und Bestellung, enthält aber versehentlich keine JOIN-Bedingung. Welches Risiko besteht?", ["Es kann ein unbeabsichtigtes kartesisches Produkt mit sehr vielen falschen Kombinationen entstehen.", "Die Datenbank ergänzt automatisch den passenden Fremdschlüssel.", "Es werden garantiert nur Kunden ohne Bestellung angezeigt.", "Die Tabellen werden automatisch gelöscht."], 0, "Ohne korrekte Verknüpfungsbedingung kann jede Zeile der einen Tabelle mit jeder Zeile der anderen kombiniert werden."),
    mc("sql-025", "aggregation", "anspruchsvoll", "Eine Abfrage soll nur Artikelgruppen mit mindestens zehn Bestellungen zeigen. Wo gehört die Bedingung COUNT(*) >= 10 hin?", ["In HAVING nach GROUP BY", "In WHERE vor SELECT", "In ORDER BY", "In den Tabellennamen"], 0, "WHERE filtert einzelne Ausgangszeilen; HAVING filtert aggregierte Gruppen."),
    mc("sql-026", "null", "fortgeschritten", "Warum liefert WHERE Lieferdatum = NULL nicht die Zeilen ohne Lieferdatum?", ["NULL steht für unbekannt beziehungsweise nicht vorhanden und wird mit IS NULL geprüft.", "NULL ist dasselbe wie die Zahl 0.", "Der Vergleich funktioniert nur mit ORDER BY.", "NULL darf nur in Primärschlüsseln stehen."], 0, "In SQL ist NULL kein normaler Wert. Verwende IS NULL beziehungsweise IS NOT NULL."),
    mc("sql-027", "transaktionen", "anspruchsvoll", "Bei einer Geldüberweisung wird der Betrag vom Quellkonto abgebucht, aber ein Fehler verhindert die Gutschrift. Welche Transaktionseigenschaft verhindert einen halbfertigen Zustand?", ["Atomarität", "Redundanz", "Denormalisierung", "Sortierung"], 0, "Atomarität bedeutet: Alle Schritte einer Transaktion werden vollständig durchgeführt oder vollständig zurückgerollt."),
    mc("sql-028", "transaktionen", "fortgeschritten", "Welche ACID-Eigenschaft stellt sicher, dass eine erfolgreich bestätigte Transaktion einen Stromausfall übersteht?", ["Durability (Dauerhaftigkeit)", "Consistency allein", "Join-Fähigkeit", "Kardinalität"], 0, "Dauerhaftigkeit stellt sicher, dass bestätigte Änderungen persistent bleiben."),
    mc("sql-029", "integritaet", "fortgeschritten", "Eine Spalte Menge darf nie negativ sein. Welche Datenbankregel passt am besten?", ["CHECK (Menge >= 0)", "ORDER BY Menge", "LEFT JOIN Menge", "DROP TABLE Menge"], 0, "Eine CHECK-Constraint begrenzt zulässige Werte direkt in der Datenbank."),
    mc("sql-030", "integritaet", "fortgeschritten", "Welchen Zweck erfüllt eine UNIQUE-Constraint auf E-Mail, wenn NULL nicht betrachtet wird?", ["Derselbe E-Mail-Wert darf nicht in mehreren Zeilen vorkommen","Die Adresse wird auf Zustellbarkeit geprüft","Jeder E-Mail-Wert muss der aktuellen Adresse des Kunden entsprechen","Die E-Mail-Werte werden bei jeder Ausgabe alphabetisch angeordnet"], 0, "UNIQUE erzwingt Eindeutigkeit für die betreffenden Werte."),
    mc("sql-031", "performance", "anspruchsvoll", "Abfragen filtern meist auf eine bestimmte Kundennummer und anschließend auf einen Bestelldatumsbereich. Welcher zusammengesetzte Index ist ein naheliegender Ausgangspunkt für die Prüfung?", ["Ein Index auf Kundennummer, danach Bestelldatum","Ein Index auf Bestelldatum, danach Kundennummer","Ein Index auf Kundenname, danach Bestelldatum","Ein Index auf Artikelbeschreibung, danach Kundennummer"], 0, "Für die vorgegebene Gleichheitsbedingung auf Kundennummer mit anschließendem Datumsbereich ist diese Spaltenreihenfolge ein naheliegender Startpunkt. Die tatsächliche Eignung wird mit Datenverteilung und Ausführungsplan geprüft; es gibt keine pauschal optimale Indexreihenfolge für jede Abfrage."),
    mc("sql-032", "performance", "fortgeschritten", "Warum kann ein Index eine INSERT- oder UPDATE-Operation verlangsamen?", ["Betroffene Indexstrukturen müssen zusätzlich zu den Tabellendaten geändert werden","Die Anwendung muss nach jeder Änderung sämtliche SELECT-Abfragen erneut ausführen","Die Datenbank muss vor jeder Änderung alle Fremdschlüssel kurzfristig deaktivieren","Jeder Index erzwingt vor einer Änderung eine vollständige Sicherung der Datenbank"], 0, "Indizes beschleunigen viele Lesezugriffe, verursachen aber Pflegeaufwand bei Änderungen."),
    mc("sql-033", "normalisierung", "anspruchsvoll", "In Bestellung stehen Kundennummer, Kundenname und Kundenadresse bei jeder Bestellung erneut. Welche Anomalie droht bei einer Adressänderung?", ["Die neue Adresse muss in mehreren Zeilen konsistent nachgeführt werden","Die Kundennummer muss bei jeder Adressänderung wechseln","Eine Adressänderung beseitigt automatisch die Bestellungen unter der alten Adresse","Die Kundennummer muss bei jeder Adressänderung einen neuen Schlüsselwert erhalten"], 0, "Wiederholte Kundendaten führen zu redundanten Änderungen; die Kundendaten gehören in eine eigene Tabelle."),
    mc("sql-034", "normalisierung", "fortgeschritten", "Eine Tabelle Kursbelegung hat den zusammengesetzten Schlüssel (TeilnehmerID, KursID), enthält aber zusätzlich TeilnehmerName. Warum verletzt das typischerweise die 2. Normalform?", ["Der Name hängt nur von TeilnehmerID ab, nicht vom vollständigen Schlüssel","Der Name hängt von TeilnehmerID und KursID gemeinsam als Schlüssel ab","TeilnehmerName muss innerhalb der gesamten Tabelle eindeutig sein","Der Name wird als Text statt als numerischer Wert in einer Spalte gespeichert"], 0, "Bei einem zusammengesetzten Schlüssel dürfen Nichtschlüsselattribute nicht nur von einem Schlüsselteil abhängen."),
    mc("sql-035", "sicherheit", "anspruchsvoll", "Eine Anwendung baut SQL aus Eingaben durch Verkettung zusammen. Welche Lösung ist fachlich korrekt?", ["Parameterisierte Queries verwenden und Eingaben als Daten statt als SQL-Code übergeben.", "Anführungszeichen aus der Eingabe entfernen und sonst nichts tun.", "Die Datenbank ohne Benutzerkonto öffnen.", "Fehlermeldungen für Administratoren sichtbar lassen."], 0, "Prepared Statements verhindern, dass Eingaben als Teil der SQL-Syntax interpretiert werden."),
    mc("sql-036", "dml", "fortgeschritten", "Welche Reihenfolge beschreibt eine sichere Änderung vieler Datensätze in einer Transaktion am besten?", ["Änderung ausführen, Ergebnis prüfen, dann COMMIT oder bei Fehler ROLLBACK","Ändern, COMMIT ausführen, dann prüfen und gegebenenfalls ROLLBACK","COMMIT ausführen, Änderung ausführen und erst danach die Transaktion beginnen","Änderung ausführen und die offene Transaktion ohne Abschluss bestehen lassen"], 0, "Transaktionen erlauben kontrollierte, zusammenhängende Änderungen."),
    mc("sql-037", "abfragen", "fortgeschritten", "Welche Bedingung findet Namen, die mit 'Meier' beginnen, aber nicht zwingend exakt so heißen?", ["WHERE Name LIKE 'Meier%'", "WHERE Name = '%Meier'", "WHERE Name LIKE '%Meier%' nur am Ende", "WHERE Name IN NULL"], 0, "In LIKE steht % für eine beliebige Folge von Zeichen; ein Suffix-% steht für einen Präfixvergleich."),
    mc("sql-038", "abfragen", "anspruchsvoll", "Eine Auswertung soll den Umsatz je Kunde berechnen und Kunden ohne Bestellung mit 0 anzeigen. Welche Kombination ist erforderlich?", ["LEFT JOIN von Kunde auf Bestellung, Aggregation und eine Behandlung von NULL für den Umsatz", "INNER JOIN ohne Aggregation", "DELETE mit WHERE", "CROSS JOIN ohne Bedingung"], 0, "Der LEFT JOIN erhält auch Kunden ohne Bestellung; Aggregation und NULL-Behandlung erzeugen den gewünschten Wert."),
    mc("sql-039", "datenqualitaet", "fortgeschritten", "Warum sollte die Geschäftsregel 'E-Mail-Adresse ist erforderlich' zusätzlich zur Formularprüfung in der Datenbank abgesichert werden?", ["Andere Schreibwege können die Formularprüfung umgehen","Die Formularprüfung gilt damit für jeden Import","Die Datenbank kann ohne diese Regel keine E-Mail-Spalte speichern","Eine Pflichtfeldregel prüft zugleich die Zustellbarkeit jeder Adresse"], 0, "Anwendungsvalidierung verbessert die Bedienung; Constraints schützen die Daten unabhängig vom Zugriffsweg."),
    mc("sql-040", "views", "fortgeschritten", "Ein Supportteam soll nur Name, Kundennummer und Ticketstatus sehen, nicht aber Rechnungsdaten. Welche Lösung unterstützt dieses Ziel?", ["Eine passende View freigeben und den direkten Tabellenzugriff beschränken","Rechnungsfelder ausblenden und volle Tabellenrechte beibehalten","Eine gespeicherte SELECT-Abfrage verteilen und Vollzugriff auf die Tabellen geben","Eine View mit allen Spalten erstellen und die Rechnungsspalten lediglich umbenennen"], 0, "Views können Datenzugriffe vereinfachen und in Verbindung mit Rechten die Sicht auf notwendige Daten beschränken."),
    mc("sql-041", "joins", "anspruchsvoll", "In einer Abfrage werden Kunden mit ihren Bestellungen verbunden. Was passiert, wenn ein Kunde drei Bestellungen hat?", ["Der Kunde erscheint in der Join-Ergebnismenge typischerweise in drei Zeilen, je Bestellung einmal.", "Der Kunde erscheint nie, weil Joins nur 1:1-Beziehungen erlauben.", "Die drei Bestellungen werden automatisch zu einer Zeile addiert.", "Die Datenbank löscht doppelte Kundennummern."], 0, "Ein Join bildet die vorhandenen Beziehungen ab. Aggregation ist ein zusätzlicher Schritt, wenn eine Zeile pro Kunde gewünscht ist."),
    mc("sql-042", "abfragen", "fortgeschritten", "Warum ist SELECT * in einer produktiven Schnittstelle oft ungünstig?", ["Neue Tabellenspalten können die gelieferte Schnittstelle ungewollt verändern","Die Ausgabe wird dadurch zwingend alphabetisch sortiert","Die Schreibweise erzwingt eine alphabetische Sortierung aller zurückgegebenen Zeilen","Die Schreibweise liefert unabhängig von Berechtigungen immer sämtliche Daten der Tabelle"], 0, "Explizite Spaltenlisten machen Datenbedarf, Berechtigungen und Schnittstellen stabiler."),
    mc("sql-043", "dml", "anspruchsvoll", "Eine Löschabfrage soll vor Ausführung überprüft werden. Welcher sichere Ablauf ist sinnvoll?", ["Zielzeilen mit SELECT prüfen, DELETE in einer Transaktion ausführen und kontrollieren","DELETE bestätigen und erst danach prüfen, welche Zeilen die Bedingung ausgewählt hat","Den WHERE-Filter nur auf Syntax prüfen und die Änderung anschließend sofort bestätigen","Die Transaktion beginnen und den WHERE-Filter beim DELETE zur Beschleunigung weglassen"], 0, "Ein vorangestelltes SELECT hilft, den Filter zu validieren; eine Transaktion ermöglicht bei Bedarf ROLLBACK."),
    mc("sql-044", "datenmodell", "fortgeschritten", "Welche Beziehung liegt vor, wenn ein Kunde viele Bestellungen haben kann, jede Bestellung aber genau einem Kunden gehört?", ["1:n von Kunde zu Bestellung", "n:m ohne Zwischentabelle", "1:1 zwingend", "Keine Beziehung"], 0, "Ein Kunde kann zu vielen Bestellungen referenziert werden; die Fremdschlüsselspalte liegt üblicherweise in Bestellung."),
    mc("sql-045", "datenmodell", "anspruchsvoll", "Studierende können mehrere Kurse besuchen und ein Kurs mehrere Studierende haben. Wie wird diese n:m-Beziehung relational sauber modelliert?", ["Mit einer Zwischentabelle, die auf Studierende und Kurse verweist.", "Indem alle Kursnamen in einer Textspalte mit Kommas gespeichert werden.", "Indem die Tabelle Kurse gelöscht wird.", "Mit einem einzigen Primärschlüssel in beiden Tabellen ohne Beziehung."], 0, "Eine Zuordnungstabelle modelliert die einzelnen Belegungen und kann weitere Attribute wie Anmeldedatum tragen."),
    mc("sql-046", "transaktionen", "fortgeschritten", "Welches Problem kann auftreten, wenn zwei Prozesse denselben Lagerbestand gleichzeitig lesen und beide danach einen neuen Wert schreiben?", ["Ein Lost Update: Eine Änderung überschreibt die andere auf Basis eines alten Wertes","Ein Deadlock entsteht bereits durch das gleichzeitige Lesen","Ein Deadlock: Gleichzeitiges Lesen derselben Zeile erzeugt zwingend eine zyklische Sperre","Ein Phantom Read: Derselbe Datensatz wird durch die beiden Updates automatisch dupliziert"], 0, "Nebenläufigkeit benötigt Transaktions- und Isolationskonzepte, damit konkurrierende Änderungen korrekt bleiben."),
    mc("sql-047", "aggregation", "fortgeschritten", "Die Spalte Betrag enthält in drei Zeilen die Werte 10, NULL und 20. Welches Ergebnis liefert AVG(Betrag)?", ["15", "10", "30", "Immer NULL, sobald eine einzige Zeile NULL enthält"], 0, "AVG ignoriert NULL-Werte: Die Summe 30 wird durch zwei berücksichtigte Werte geteilt. NULL ist nicht dasselbe wie die Zahl 0; bei 10, 0 und 20 wäre der Durchschnitt 10."),
    mc("sql-048", "sicherheit", "fortgeschritten", "Warum sollte ein Anwendungsdatenbankkonto nicht mit Administrationsrechten betrieben werden?", ["Minimale Rechte begrenzen die Folgen eines kompromittierten Anwendungskontos","Administrationsrechte umgehen automatisch die Transaktionsprüfung","Ein eingeschränktes Konto verschlüsselt jede gespeicherte Zeile ohne weitere Konfiguration","Administrationsrechte verhindern die Verwendung parametrisierter Abfragen im Programm"], 0, "Auch Datenbankkonten sollten nur die für ihre Aufgabe nötigen Rechte besitzen."),
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
    mc("ip-031", "subnetting", "fortgeschritten", "Warum wird die Netzwerkadresse eines klassischen IPv4-Subnetzes mit getrennten Netz-, Host- und Broadcastadressen keinem Endgerät zugewiesen?", ["Sie bezeichnet das Subnetz und nicht einen einzelnen Host darin","Sie ist als feste Hostadresse für das Gateway reserviert","Sie bezeichnet alle Hosts des Subnetzes als Empfänger eines Broadcasts","Sie ist als einzige Adresse des Subnetzes für den DHCP-Server vorgesehen"], 0, "Die Netzwerkadresse identifiziert im klassischen Subnetzmodell das gesamte Netz. Sie ist weder eine gewöhnliche Hostadresse noch zwingend die Routeradresse. Besondere Verwendungen von /31 oder /32 sind hier nicht gemeint."),
    mc("ip-032", "broadcast", "fortgeschritten", "Ein Host sendet an die gerichtete Broadcastadresse seines Subnetzes. Wer ist das Ziel dieser Übertragung?", ["Alle Hosts dieses einen Subnetzes", "Nur das Default Gateway", "Alle Hosts im gesamten Internet", "Nur der DNS-Server"], 0, "Die gerichtete Broadcastadresse adressiert alle Hosts im eigenen Subnetz. Router begrenzen deren Ausbreitung in andere Netze normalerweise."),
    mc("ip-033", "fehleranalyse", "anspruchsvoll", "Zwei PCs haben 192.168.1.10/24 und 192.168.1.20/25. Beide hängen am selben Switch. Warum kann Kommunikation zu anderen Netzen asymmetrisch fehlschlagen?", ["Die Masken führen zu unterschiedlichen Entscheidungen über lokale und entfernte Ziele","Die unterschiedlichen Masken verhindern bereits jeden direkten Datenaustausch zwischen diesen PCs","Die Adresse 192.168.1.20 ist bei /25 die Netzwerkadresse und damit als Hostadresse ungeeignet","Die beiden PCs müssen sich wegen der verschiedenen Masken grundsätzlich über das Gateway erreichen"], 0, "Unterschiedliche Subnetzmasken führen zu unterschiedlichen Routingentscheidungen und sollten in einem Layer-2-Segment vermieden werden."),
    mc("ip-034", "nat", "fortgeschritten", "Warum wird NAT in vielen privaten IPv4-Netzen eingesetzt?", ["Private Adressen können über eine oder wenige öffentliche Adressen nach außen abgebildet werden","Private Adressen werden durch NAT als öffentliche Routen im Internet bekannt gegeben","NAT teilt den Endgeräten die privaten Adressen anstelle eines DHCP-Servers zu","NAT vergrößert den IPv4-Adressraum, indem zusätzliche Bits an die Adressen angehängt werden"], 0, "NAT adressiert IPv4-Adressknappheit, ist aber kein Ersatz für Sicherheits- oder Verschlüsselungsmaßnahmen."),
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
    mc("ip-045", "fehleranalyse", "anspruchsvoll", "Ein neuer Drucker nutzt dieselbe IP wie ein bestehender Server. Welches Symptom ist typisch?", ["Zugriffe auf diese IP können wechselnd das falsche Gerät erreichen","TCP-Ports trennen beide Geräte trotz gleicher IP zuverlässig","Die beiden Geräte werden anhand ihrer TCP-Ports dauerhaft eindeutig getrennt","Beide Geräte wechseln nach dem Konflikt gemeinsam auf dieselbe APIPA-Adresse"], 0, "Doppelte IP-Adressen verursachen ARP-Konflikte und unzuverlässige Kommunikation.")
  ],
  "netzwerke": [
    mc("net-019", "switching", "fortgeschritten", "Wie lernt ein Layer-2-Switch üblicherweise, an welchem Port eine MAC-Adresse erreichbar ist?", ["Er ordnet die Quell-MAC eingehender Frames dem Eingangsport zu.", "Er fragt den DNS-Server nach jeder MAC-Adresse.", "Er liest die Ziel-IP aus dem HTTP-Header.", "Er sendet nur an das Default Gateway."], 0, "Switches lernen Quell-MAC-Adressen und nutzen ihre MAC-Adress-Tabelle für gezieltes Weiterleiten."),
    mc("net-020", "switching", "anspruchsvoll", "Ein Switch kennt die Ziel-MAC eines eingehenden Frames noch nicht. Was tut er innerhalb desselben VLANs typischerweise?", ["Er floodet den Frame an alle passenden Ports außer dem Eingangsport.", "Er verwirft ihn immer.", "Er sendet ihn ausschließlich an den DNS-Server.", "Er ändert die Ziel-MAC in die Broadcastadresse."], 0, "Unknown Unicast wird im betreffenden VLAN geflutet, bis die Zuordnung gelernt ist."),
    mc("net-021", "vlan", "fortgeschritten", "Welches Problem löst ein VLAN auf einem Switch hauptsächlich?", ["Es trennt die Broadcast-Domänen auf gemeinsam genutzter Switch-Hardware","Es bündelt mehrere Kabel zu einem logischen Link","Es wählt bei redundanter Verkabelung schleifenfreie Weiterleitungswege aus","Es stellt die Weiterleitung zwischen verschiedenen IP-Netzen auf dem Switch her"], 0, "VLANs segmentieren Layer-2-Netze logisch. Kommunikation zwischen VLANs benötigt Routing."),
    mc("net-022", "vlan", "anspruchsvoll", "Ein PC in VLAN 10 soll einen Server in VLAN 20 erreichen. Welche Komponente oder Funktion wird benötigt?", ["Inter-VLAN-Routing über einen Router oder Layer-3-Switch","Ein Trunk zwischen reinen Layer-2-Switches allein","Ein DHCP-Relay ohne Routingfunktion zwischen den beiden VLANs","Link Aggregation zwischen den Switches ohne Änderung der Layer-3-Konfiguration"], 0, "VLANs sind getrennte IP-Netze beziehungsweise Broadcast-Domänen; zwischen ihnen wird geroutet."),
    mc("net-023", "vlan", "fortgeschritten", "Wofür wird ein Trunk-Port zwischen zwei Switches verwendet?", ["Um Frames mehrerer VLANs über eine Verbindung zu transportieren und ihre VLAN-Zuordnung zu kennzeichnen.", "Um genau einen Endgerät-Port ohne VLAN zu betreiben.", "Um DHCP zu deaktivieren.", "Um eine Glasfaserleitung in Kupfer umzuwandeln."], 0, "Trunks transportieren mehrere VLANs, häufig mit IEEE 802.1Q-Tags."),
    mc("net-024", "switching", "anspruchsvoll", "Warum wird Spanning Tree Protocol in redundant verkabelten Switch-Netzen eingesetzt?", ["Redundante Layer-2-Pfade bei Bedarf blockieren und Schleifen verhindern","Mehrere Links für höheren Durchsatz zu einer logischen Verbindung bündeln","Endgeräte unabhängig von der Verkabelung verschiedenen VLANs zuordnen","Die kürzeste IP-Route zwischen verschiedenen Standorten dynamisch ermitteln"], 0, "STP blockiert bei Bedarf redundante Pfade logisch und erhält trotzdem Ausfallsicherheit."),
    mc("net-025", "ethernet", "fortgeschritten", "Was ist der praktische Vorteil von Full Duplex auf einer Ethernet-Verbindung?", ["Beide Seiten können auf dem Link gleichzeitig senden und empfangen","Beide Seiten wechseln sich zeitlich beim Senden ab","Die Verbindung transportiert gleichzeitig Frames aus genau zwei VLANs","Die Verbindung sendet jedes Frame vorsorglich zweimal zur Fehlerkorrektur"], 0, "Bei Full Duplex existiert kein gemeinsames Kollisionsmedium wie bei einem Hub."),
    mc("net-026", "poe", "fortgeschritten", "Warum ist Power over Ethernet für einen Access Point an der Decke praktisch?", ["Ein geeignetes Ethernet-Kabel kann Daten und elektrische Leistung zuführen","Der Access Point verwendet die WLAN-Funkwellen als Stromversorgung","Der Access Point erreicht dadurch mehr Funkkanäle ohne zusätzliche Antennen","Die Versorgung über Ethernet ersetzt die Funkplanung für den Montageort"], 0, "PoE reduziert separate Stromleitungen, setzt aber kompatible Switches oder Injektoren und passende Leistungsklassen voraus."),
    mc("net-027", "arp", "fortgeschritten", "Welches Problem löst ARP in einem IPv4-LAN?", ["Es ermittelt zu einer bekannten lokalen IPv4-Adresse die zugehörige MAC-Adresse.", "Es übersetzt Domainnamen in IP-Adressen.", "Es verteilt IP-Adressen per Lease.", "Es verschlüsselt Ethernet-Frames."], 0, "ARP verbindet Layer 3 und Layer 2 im lokalen IPv4-Segment."),
    mc("net-028", "routing", "anspruchsvoll", "Ein Host sendet ein Paket an eine externe IP. Welche MAC-Adresse steht normalerweise im ersten Ethernet-Frame als Zieladresse?", ["Die MAC-Adresse des Default Gateways", "Die MAC-Adresse des entfernten Zielservers", "Die MAC-Adresse des DNS-Servers", "Die Broadcast-MAC-Adresse in jedem Fall"], 0, "Für ein fremdes IP-Netz adressiert der Host den Frame an den nächsten Router; die IP-Zieladresse bleibt die des entfernten Systems."),
    mc("net-029", "transport", "fortgeschritten", "Welche Eigenschaft spricht für TCP statt UDP bei einem Dateiübertragungsprotokoll?", ["Bestätigung, Wiederholung bei Verlust und geordnete Bereitstellung der Daten","Erhaltung einzelner Datagrammgrenzen ohne zustandsbehafteten Verbindungsaufbau","Unveränderte Weitergabe jeder Nachricht trotz erkannter Übertragungsfehler","Garantierte feste Antwortzeiten unabhängig von Auslastung und Übertragungsweg"], 0, "TCP übernimmt unter anderem Zuverlässigkeit, Reihenfolge und Flusskontrolle; UDP verzichtet bewusst darauf."),
    mc("net-030", "transport", "fortgeschritten", "Für welche Anwendung ist UDP wegen geringer Latenz und tolerierbarer einzelner Verluste häufig sinnvoller als TCP?", ["Echtzeit-Audio oder -Video", "Eine Banküberweisung in einer Datenbank", "Der Download einer vollständigen Datei mit Integritätsanforderung", "Eine SSH-Sitzung"], 0, "Bei Echtzeitdaten ist ein verspätetes Paket oft weniger wert als ein verlorenes; die Anwendung kann Verluste behandeln."),
    mc("net-031", "dns", "anspruchsvoll", "Ein Browser erreicht https://intranet.firma.de nicht, aber https://10.10.0.20 funktioniert. Welche Prüfung ist zuerst sinnvoll?", ["Die Namensauflösung für den Hostnamen und ihren DNS-Eintrag prüfen","Die Größe des DHCP-Adresspools für den bereits konfigurierten Client prüfen","Die VLAN-Zuordnung ändern, obwohl derselbe Server über seine IP erreichbar ist","Den Duplexmodus ändern, ohne zuvor die Namensauflösung zu prüfen"], 0, "Erreicht der Browser die IP, aber nicht den Namen, deutet dies auf DNS oder Namenskonfiguration hin."),
    mc("net-032", "dns", "fortgeschritten", "Welche DNS-Eintragsart ordnet einem Hostnamen eine IPv4-Adresse zu?", ["A", "MX", "CNAME", "PTR"], 0, "A-Records enthalten IPv4-Adressen. AAAA steht für IPv6, MX für Mailserver und PTR für Reverse Lookup."),
    mc("net-033", "dns", "fortgeschritten", "Wozu dient ein DNS-MX-Eintrag?", ["Er benennt zuständige Mailserver für eine Domain.", "Er vergibt MAC-Adressen.", "Er verschlüsselt E-Mails Ende zu Ende.", "Er ersetzt SPF und DKIM."], 0, "MX-Records helfen sendenden Mailservern, den Ziel-Mailserver einer Domain zu finden."),
    mc("net-034", "dhcp", "anspruchsvoll", "Warum ist eine DHCP-Reservierung für einen Netzwerkdrucker oft besser als eine manuell vergebene Adresse im DHCP-Bereich?", ["Die Zuordnung bleibt im DHCP-System zentral verwaltet und berücksichtigt","Die Adresse wird ohne DHCP-Kommunikation im Drucker gesetzt","Die Reservierung ersetzt die MAC-Adresse des Druckers durch eine neue feste Kennung","Die Reservierung erlaubt mehreren Druckern, dieselbe IP-Adresse gleichzeitig zu verwenden"], 0, "Reservierungen verbinden planbare Adressen mit zentraler Adressverwaltung und vermeiden Überschneidungen."),
    mc("net-035", "wlan", "fortgeschritten", "Warum sollten Access Points in dichtem WLAN-Ausbau abgestimmt geplante, nicht überlappende Kanäle verwenden?", ["Um gegenseitige Störungen und unnötige Konkurrenz um das Funkmedium zu begrenzen","Um Clients beim Roaming ohne Prüfung ihrer Zugangsdaten automatisch zuzulassen","Um jedem Client durch die Kanalnummer eine eindeutige IP-Adresse zuzuteilen","Um die Verschlüsselung durch unterschiedliche Frequenzen statt durch Schlüssel zu erreichen"], 0, "Funk ist ein geteiltes Medium. Kanalplanung verbessert Kapazität und Stabilität."),
    mc("net-036", "wlan", "anspruchsvoll", "Welcher Schutz ist für ein Unternehmens-WLAN mit individuellen Benutzerkonten gegenüber einem gemeinsamen Kennwort besonders geeignet?", ["WPA2- oder WPA3-Enterprise mit 802.1X und zentraler Authentisierung","WPA2-Personal mit gemeinsamem, regelmäßig geändertem Schlüssel","WPA3-Personal mit demselben Zugangspasswort für die gesamte Belegschaft","Eine Liste erlaubter MAC-Adressen anstelle individueller Anmeldedaten"], 0, "802.1X ermöglicht individuelle Authentisierung und gezielte Sperrung einzelner Zugänge; SSID-Verbergen ist kein wirksamer Schutz."),
    mc("net-037", "firewall", "fortgeschritten", "Was bedeutet das Prinzip 'Default Deny' bei einer Firewall?", ["Nicht ausdrücklich erlaubter Verkehr wird standardmäßig blockiert.", "Jeder Verkehr wird erlaubt und später protokolliert.", "Nur DNS wird blockiert.", "Die Firewall akzeptiert keine Regeln."], 0, "Eine explizite Freigabeliste reduziert die Angriffsfläche gegenüber pauschal offenem Verkehr."),
    mc("net-038", "proxy", "anspruchsvoll", "Welche Aufgabe kann ein Reverse Proxy vor mehreren Webservern übernehmen?", ["Eingehende Webanfragen an passende Backend-Server weiterleiten","Ausgehende Clientanfragen stellvertretend ins Internet senden","Rekursive DNS-Anfragen der Clients über zwischengespeicherte Records beantworten","IP-Pakete ausschließlich anhand einer Routingtabelle zwischen Subnetzen vermitteln"], 0, "Ein Reverse Proxy steht auf Serverseite vor Backends; er ist nicht mit einem Forward Proxy für Clientzugriffe gleichzusetzen."),
    mc("net-039", "routing", "fortgeschritten", "Warum trennt ein Router Broadcast-Domänen?", ["Er leitet Layer-2-Broadcasts normalerweise nicht zwischen verschiedenen IP-Netzen weiter.", "Er verwandelt Broadcasts in Multicasts.", "Er vergibt jedem Switch eine gleiche MAC-Adresse.", "Er benötigt keine Routingtabelle."], 0, "Router verbinden Netze auf Layer 3 und begrenzen die Ausbreitung lokaler Broadcasts."),
    mc("net-040", "qos", "fortgeschritten", "Welches Ziel verfolgt Quality of Service in einem Netzwerk?", ["Zeitkritischen Verkehr wie Sprache oder Video gegenüber weniger kritischem Verkehr planbar bevorzugen.", "Jede Anwendung dauerhaft mit exakt gleicher Bandbreite versorgen.", "Pakete verschlüsseln.", "DNS-Records automatisch reparieren."], 0, "QoS klassifiziert und priorisiert Verkehr, wenn Ressourcen knapp sind."),
    mc("net-041", "mtu", "anspruchsvoll", "Was kann passieren, wenn ein Pfad eine kleinere MTU unterstützt als ein Sender annimmt und notwendige ICMP-Hinweise gefiltert werden?", ["Kleine Pakete können ankommen, während größere Übertragungen hängen bleiben","Der Sender erhöht nach dem Paketverlust die Paketgröße","Der Sender erkennt ohne weitere Signale immer sofort die kleinste MTU des Pfades","Die Empfänger ergänzen fehlende Paketanteile selbstständig anhand der TCP-Portnummer"], 0, "Path MTU Discovery benötigt passende Rückmeldungen; blockiertes ICMP kann schwer diagnostizierbare Fragmentierungsprobleme verursachen."),
    mc("net-042", "vpn", "fortgeschritten", "Was unterscheidet einen Site-to-Site-VPN-Tunnel von einem Remote-Access-VPN?", ["Site-to-Site verbindet Netze über Gateways; Remote Access bindet einzelne Clients an","Site-to-Site bindet Clients an; Remote Access verbindet Netze","Site-to-Site ist durchgehend verschlüsselt; Remote Access bezeichnet stets einen Klartextzugang","Site-to-Site arbeitet ohne Zugangskontrolle; Remote Access ist nur für DNS-Anfragen vorgesehen"], 0, "Beide schützen Daten über unsichere Netze, unterscheiden sich aber in den verbundenen Endpunkten."),
    mc("net-043", "netzwerkdiagnose", "anspruchsvoll", "Ein Client erreicht sein Gateway, aber keine externe IP. Der DNS-Server ist erreichbar. Welche Komponente ist als Nächstes besonders relevant?", ["Routing oder NAT auf dem Weg hinter dem Gateway","Die DNS-Auflösung der numerischen Zieladresse","Die lokale MAC-Auflösung für den entfernten Internetserver selbst","Die Belegung der Hostnamen im DNS-Cache als Voraussetzung für IP-Routing"], 0, "Die Tests grenzen den Fehler ein: lokales Netz und DNS sind erreichbar, der Weg aus dem Netz muss geprüft werden."),
    mc("net-044", "osi", "fortgeschritten", "Warum ist das OSI-Modell bei der Fehlersuche nützlich?", ["Es strukturiert die Eingrenzung nach Übertragungs- und Kommunikationsfunktionen","Es gibt für jeden Fehler unabhängig vom Netzaufbau eine feste Reparaturanweisung vor","Es ordnet jeder Anwendung dauerhaft eine eigene physische Netzwerkleitung zu","Es bestimmt allein aus einer IP-Adresse den Standort einer defekten Hardwarekomponente"], 0, "Das Modell ist eine Denk- und Kommunikationshilfe, keine konkrete Implementierung eines einzelnen Protokolls."),
    mc("net-045", "netzwerkdiagnose", "anspruchsvoll", "Ein PC erhält per DHCP IP-Adresse, Maske und DNS-Server, aber kein Default Gateway. Welche Folge ist am wahrscheinlichsten?", ["Ziele im lokalen Subnetz funktionieren, Ziele in anderen Netzen typischerweise nicht.", "DNS funktioniert zwingend nicht.", "Der PC kann keine lokale ARP-Anfrage senden.", "Alle lokalen Dateien werden gelöscht."], 0, "Ohne Gateway fehlt die Route für Ziele außerhalb des eigenen Subnetzes."),
    mc("net-046", "sicherheit", "anspruchsvoll", "Ein Switch-Port soll nur die konfigurierte MAC-Adresse eines Inventargeräts akzeptieren und bei einer fremden MAC-Adresse sperren oder alarmieren. Welche Funktion passt?", ["Port Security", "DHCP Relay", "NAT", "DNS Forwarding"], 0, "Port Security begrenzt zugelassene MAC-Adressen an einem physischen Switch-Port. Für benutzer- oder zertifikatsbasierte Netzwerkanmeldung wäre 802.1X ein anderer Ansatz."),
    mc("net-047", "routing", "fortgeschritten", "Welcher Unterschied besteht zwischen einem Switch und einem Router im Kern?", ["Ein Switch verbindet Endgeräte vor allem innerhalb eines Layer-2-Netzes; ein Router leitet Pakete zwischen Layer-3-Netzen weiter.", "Ein Router kann keine MAC-Adressen verwenden.", "Ein Switch vergibt immer öffentliche IP-Adressen.", "Beide arbeiten nur auf der Anwendungsschicht."], 0, "Moderne Geräte können mehrere Funktionen kombinieren, die Grundaufgaben bleiben jedoch unterschiedlich."),
    mc("net-048", "http", "fortgeschritten", "Welcher HTTP-Statuscode weist typischerweise darauf hin, dass eine Ressource nicht gefunden wurde?", ["404", "200", "301", "500"], 0, "200 bedeutet Erfolg, 301 eine Umleitung, 404 nicht gefunden und 500 einen serverseitigen Fehler."),
    mc("net-049", "tls", "anspruchsvoll", "Welche Aussage zu TLS-Zertifikaten ist richtig?", ["Hostname und Vertrauenskette gehören zu den Prüfungen des Clients","Ein passender Hostname genügt ohne Vertrauenskette","Ein gültiges Zertifikat weist nach, dass der Inhalt der Website keine Schadsoftware enthält","Ein Zertifikat mit späterem Ablaufdatum ist unabhängig vom Aussteller vertrauenswürdiger"], 0, "TLS-Zertifikate helfen bei Authentisierung des Servers und beim Aufbau einer verschlüsselten Verbindung."),
    mc("net-050", "lastverteilung", "fortgeschritten", "Welche Kennzahl ist für einen Load Balancer wichtig, um einen ausgefallenen Webserver nicht weiter mit Anfragen zu versorgen?", ["Ein regelmäßiger Health Check", "Die Bildschirmgröße des Clients", "Die Länge der DNS-Domain", "Die Farbe des Switch-Gehäuses"], 0, "Health Checks erkennen nicht erreichbare oder fehlerhafte Backends, damit sie aus dem Pool genommen werden können."),
    mc("net-051", "dns", "fortgeschritten", "Wofür dient ein PTR-Record im DNS?", ["Für die Rückwärtsauflösung von einer IP-Adresse zu einem Namen", "Für die Zuordnung eines Namens zu IPv4", "Für Mailrouting", "Für DHCP-Leases"], 0, "PTR-Records werden in Reverse-Lookup-Zonen verwendet."),
    mc("net-052", "switching", "anspruchsvoll", "Warum ist ein Hub in modernen Ethernet-Netzen gegenüber einem Switch ungeeignet?", ["Alle Ports teilen das Medium und dessen Kollisionsdomäne","Ein Hub führt eine MAC-Tabelle je Anschluss","Ein Hub erzeugt pro Anschluss ein eigenes IP-Subnetz mit Routing","Jeder Hub-Port stellt einen getrennten Vollduplex-Kanal bereit"], 0, "Ein Switch lernt MAC-Adressen und leitet bekannten Unicast-Verkehr gezielt weiter."),
    mc("net-053", "ipv6", "fortgeschritten", "Warum wird IPv6 langfristig zusätzlich zu oder statt IPv4 eingesetzt?", ["IPv6 bietet deutlich mehr Adressen als der knappe IPv4-Adressraum","IPv6 beseitigt die Notwendigkeit von IP-Routing","IPv6 vergrößert die Ethernet-Framegröße unabhängig von den eingesetzten Geräten","IPv6 erlaubt Kommunikation zwischen Netzen ohne Weiterleitungsentscheidungen"], 0, "IPv6 löst nicht jedes Netzwerkproblem, adressiert aber insbesondere die Knappheit öffentlicher IPv4-Adressen."),
    mc("net-054", "diagnose", "anspruchsvoll", "Welche Reihenfolge ist bei der strukturierten Fehlersuche sinnvoll?", ["Problem eingrenzen, gezielt prüfen, Änderungen und Ergebnis dokumentieren","Mehrere Einstellungen zugleich ändern und nur das Endergebnis prüfen","Die vermutete Ursache sofort beheben und erst danach den Ausgangszustand ermitteln","Mit der aufwendigsten Reparatur beginnen und anschließend einfache Ursachen prüfen"], 0, "Strukturiertes Vorgehen reduziert Nebenwirkungen und erleichtert die Ursachenanalyse."),
    mc("net-055", "sicherheit", "fortgeschritten", "Warum sollte ein Gast-WLAN in einem eigenen VLAN mit restriktiven Regeln betrieben werden?", ["Damit Gastgeräte keinen pauschalen Zugriff auf interne Ressourcen erhalten","Damit jedes Gastgerät automatisch verschlüsselt kommuniziert","Damit VLAN-Zuordnung allein jede Kommunikation ohne weitere Zugriffsregeln verschlüsselt","Damit alle Gastgeräte ohne Authentisierung die internen Administrationsdienste nutzen können"], 0, "Segmentierung begrenzt Zugriffe zwischen nicht vertrauenswürdigen und internen Bereichen.")
  ],
  "it-grundlagen": [
    mc("base-014", "betriebssysteme", "fortgeschritten", "Welche Aufgabe übernimmt ein Betriebssystemkern unter anderem?", ["Prozesse, Speicher und Zugriffe auf Hardware-Ressourcen koordinieren","Die fachlichen Regeln aller Anwendungsprogramme festlegen","Benutzeroberflächen ausschließlich innerhalb des Webbrowsers darstellen","Tabellenbeziehungen und Abfragepläne jeder installierten Datenbank verwalten"], 0, "Der Kernel vermittelt zwischen Hardware und Programmen, etwa bei Speicher-, Prozess- und Geräteverwaltung."),
    mc("base-015", "speicher", "fortgeschritten", "Warum ist Arbeitsspeicher (RAM) für laufende Programme schneller nutzbar als eine SSD, aber nicht als dauerhafter Speicher geeignet?", ["RAM bietet schnelle Zugriffe, verliert seinen Inhalt aber ohne Strom","RAM behält seinen Inhalt bis zum nächsten Benutzerwechsel","RAM behält Daten ohne Strom nur dann, wenn sie nicht komprimiert wurden","RAM schreibt jeden geänderten Wert automatisch dauerhaft in die CPU zurück"], 0, "RAM dient als schneller temporärer Speicher; SSDs sind nichtflüchtige Massenspeicher."),
    mc("base-016", "speicher", "anspruchsvoll", "Ein System hat zu wenig RAM und lagert Speicherbereiche auf die SSD aus. Welche Folge ist typisch?", ["Häufige Zugriffe auf ausgelagerte Speicherbereiche können Programme verlangsamen","Ausgelagerte Daten werden von der SSD mit derselben Latenz wie aus RAM geliefert","Die Betriebssystemprozesse benötigen durch Auslagerung keinen adressierbaren Speicher mehr","Eine größere Auslagerungsdatei senkt unabhängig von der Last jede Speicherzugriffszeit"], 0, "Virtueller Speicher hilft bei Knappheit, ist aber wegen der langsameren Massenspeicherzugriffe kein Ersatz für ausreichend RAM."),
    mc("base-017", "virtualisierung", "fortgeschritten", "Was unterscheidet einen Hypervisor Typ 1 von Typ 2?", ["Typ 1 setzt direkt auf Hardware auf, Typ 2 auf einem Host-Betriebssystem","Typ 1 setzt auf einem Host-Betriebssystem auf, Typ 2 direkt auf Hardware","Typ 1 bezeichnet Vollvirtualisierung, Typ 2 ausschließlich Betriebssystemcontainer","Typ 1 bezeichnet einen lokalen VM-Betrieb, Typ 2 ausschließlich einen Cloudbetrieb"], 0, "Bare-Metal-Hypervisor laufen ohne allgemeines Host-Betriebssystem zwischen Hardware und VMs."),
    mc("base-018", "virtualisierung", "anspruchsvoll", "Ein Testsystem soll mit eigenem Betriebssystemkern, eigenem Netzwerk und klarer Isolation laufen. Welche Wahl passt eher?", ["Eine virtuelle Maschine", "Ein Container ohne weitere Konfiguration", "Ein Browser-Lesezeichen", "Ein RAID-Verbund"], 0, "VMs virtualisieren Hardware und enthalten ein eigenes Gastbetriebssystem; Container teilen typischerweise den Host-Kernel."),
    mc("base-019", "container", "fortgeschritten", "Welcher Vorteil von Containern erklärt ihre schnelle Startzeit gegenüber vielen virtuellen Maschinen?", ["Sie können den Host-Kernel nutzen, statt ein vollständiges Gastbetriebssystem zu booten","Sie reservieren beim Start die gesamte Hardware ausschließlich für eine einzige Anwendung","Sie wandeln sämtliche Anwendungsdateien vor dem Start in bereits laufende Prozesse um","Sie umgehen beim Start die Ausführung von Programmen und liefern nur gespeicherte Ergebnisse"], 0, "Die geringere Isolationsebene und der gemeinsame Kernel reduzieren Start- und Ressourcenaufwand."),
    mc("base-020", "speicher", "anspruchsvoll", "Welche RAID-Eigenschaft bietet RAID 1 bei zwei gleich großen Festplatten?", ["Spiegelung mit Redundanz; nutzbar ist ungefähr die Kapazität einer Platte.", "Doppelte Kapazität ohne Redundanz.", "Parität über mindestens drei Platten.", "Keine Datenredundanz bei maximaler Streifenbildung."], 0, "RAID 1 spiegelt Daten. Es ersetzt dennoch kein Backup gegen Löschen, Ransomware oder Standortverlust."),
    mc("base-021", "speicher", "fortgeschritten", "Warum ist RAID kein Ersatz für ein Backup?", ["RAID hält auch versehentliche Änderungen nicht als unabhängige ältere Stände vor","RAID erstellt für jede Datei automatisch unveränderliche historische Versionen","Ein redundantes RAID bewahrt gelöschte Dateien bis zum nächsten Plattenwechsel auf","Die Spiegelung trennt aktuelle Nutzdaten dauerhaft von allen Sicherungskopien"], 0, "Redundanz erhöht Verfügbarkeit, während Backups unabhängige Wiederherstellungspunkte bereitstellen."),
    mc("base-022", "cloud", "fortgeschritten", "Ein Unternehmen mietet virtuelle Maschinen und verwaltet darauf Betriebssystem und Anwendungen selbst. Welches Cloud-Modell beschreibt dies?", ["IaaS", "SaaS", "PaaS", "On-Premises ohne Dienstleister"], 0, "Bei Infrastructure as a Service stellt der Anbieter Infrastruktur bereit; Kunde verwaltet typischerweise Betriebssystem und Anwendungen."),
    mc("base-023", "cloud", "fortgeschritten", "Ein Team nutzt einen fertigen webbasierten E-Mail-Dienst und verwaltet weder Server noch Betriebssystem. Welches Modell liegt vor?", ["SaaS", "IaaS", "PaaS", "Bare Metal"], 0, "Software as a Service liefert eine fertige Anwendung; der Anbieter betreibt die zugrunde liegende Plattform."),
    mc("base-024", "cloud", "anspruchsvoll", "Welcher Cloud-Vorteil wird mit Elastizität beschrieben?", ["Ressourcen je nach Bedarf hoch- und wieder herunterskalieren","Eine feste Kapazität trotz wechselnder Last reservieren","Dieselbe Datenmenge dauerhaft auf eine kleinere feste Dateigröße komprimieren","Anwendungen ohne Anpassung auf jedem beliebigen Betriebssystem ausführen"], 0, "Elastizität erlaubt eine flexible Anpassung von Ressourcen; sie benötigt dennoch Kosten- und Kapazitätskontrolle."),
    mc("base-025", "verfuegbarkeit", "anspruchsvoll", "Ein Dienst soll bei Ausfall eines Servers weiterlaufen. Welche Kombination ist erforderlich?", ["Redundanz mit Fehlererkennung und vorbereitetem Failover","Ein einzelner Server mit höherer CPU-Leistung","Ein zweiter Server ohne Datenabgleich und ohne Übernahmeverfahren","Eine aktuelle Sicherung ohne bereitstehendes System für den Dienstbetrieb"], 0, "Hochverfügbarkeit erfordert mehr als eine zweite Maschine: Daten, Zustandsübernahme und Umschaltung müssen berücksichtigt werden."),
    mc("base-026", "dateisysteme", "fortgeschritten", "Welche Aufgabe erfüllt ein Dateisystem hauptsächlich?", ["Dateien, Verzeichnisse und ihre Metadaten auf einem Datenträger organisieren","Die fachlichen Abfragepläne der Datenbanken optimieren","Datenbankabfragen nach ihren fachlichen Tabellenbeziehungen optimieren und ausführen","Netzwerkpakete anhand ihrer Zieladresse zum passenden entfernten Rechner weiterleiten"], 0, "Dateisysteme strukturieren die Speicherung und Zugriffe auf Massenspeicher."),
    mc("base-027", "schnittstellen", "fortgeschritten", "Warum sind APIs für die Integration von Anwendungen wichtig?", ["Sie stellen definierte Zugriffsmöglichkeiten auf Funktionen und Daten bereit","Die vollständige Anwendung in jeden aufrufenden Prozess kopieren","Sie gleichen unterschiedliche Datenformate ohne vorher festgelegte Regeln automatisch an","Sie ersetzen durch die Schnittstellenbeschreibung sämtliche Prüfungen der Zugriffsrechte"], 0, "APIs benötigen dennoch Authentisierung, Autorisierung, Versionierung und Fehlerbehandlung."),
    mc("base-028", "datenformate", "fortgeschritten", "Welche Eigenschaft macht JSON für viele Web-APIs praktisch?", ["Es beschreibt strukturierte Daten in einem kompakten, verbreiteten Textformat","Es enthält statt Daten bereits ausgeführten Programmcode","Es verlangt für den Datenaustausch auf beiden Seiten dieselbe Programmiersprache","Es legt für jeden enthaltenen Wert automatisch eine Tabelle in der Zieldatenbank an"], 0, "JSON ist ein Datenformat; Transportverschlüsselung und Validierung müssen separat umgesetzt werden."),
    mc("base-029", "cpu", "anspruchsvoll", "Eine Anwendung nutzt nur einen Ausführungsfaden. Welcher CPU-Ausbau beschleunigt sie nicht zwingend proportional?", ["Mehr zusätzliche Kerne", "Höhere Leistung eines einzelnen Kerns", "Schnellerer Speicherzugriff", "Beseitigung eines Engpasses in der Anwendung"], 0, "Ohne Parallelisierung kann ein einzelner Thread nur begrenzt von weiteren Kernen profitieren."),
    mc("base-030", "backup", "fortgeschritten", "Was sollte ein Wiederherstellungstest eines Backups nachweisen?", ["Benötigte Daten sind korrekt und innerhalb der Zielzeit wiederherstellbar","Der Sicherungsauftrag endet mit Erfolg, ohne eine Rücksicherung zu erproben","Die Sicherungsdatei ist groß genug, ohne ihren Inhalt wieder einzulesen","Der Sicherungsserver ist erreichbar, ohne die gesicherten Daten zu kontrollieren"], 0, "Ein ungetestetes Backup ist keine nachgewiesene Wiederherstellungsstrategie."),
    mc("base-031", "verteilte-systeme", "anspruchsvoll", "Warum müssen verteilte Systeme mit Teilausfällen rechnen?", ["Einzelne Knoten oder Verbindungen können unabhängig voneinander ausfallen","Ein lokaler Fehler beendet sofort sämtliche Komponenten","Ein erreichbarer Teilknoten beweist bereits die Funktion aller übrigen Komponenten","Eine Verbindung meldet jeden Ausfall sofort und zuverlässig an alle anderen Knoten"], 0, "Teilausfälle und Netzwerkverzögerungen machen Konsistenz, Wiederholungen und Fehlerbehandlung anspruchsvoll."),
    mc("base-032", "virtualisierung", "fortgeschritten", "Was ist ein Snapshot einer virtuellen Maschine primär?", ["Ein zeitpunktbezogener Zustand, der für Tests oder kurzfristige Rückkehrpunkte nützlich sein kann.", "Ein vollständiger Ersatz für langfristige Backups.", "Eine Methode zur Verschlüsselung des Netzwerks.", "Eine physische Festplatte."], 0, "Snapshots können abhängig vom System wachsen und liegen oft am selben Speicher; sie ersetzen keine unabhängigen Backups."),
    mc("base-033", "speicher", "anspruchsvoll", "Eine Datenbank benötigt viele zufällige Lesezugriffe mit geringer Latenz. Welcher Speicher bringt gegenüber einer HDD typischerweise den größten Vorteil?", ["SSD oder NVMe-SSD", "Magnetband", "Optisches Archivmedium", "Ein langsameres Netzlaufwerk"], 0, "Flash-Speicher bietet deutlich geringere Zugriffszeiten als rotierende Festplatten."),
    mc("base-034", "sicherheit", "fortgeschritten", "Warum ist eine USV in einer Serverumgebung sinnvoll?", ["Kurze Stromausfälle überbrücken und kontrolliertes Herunterfahren ermöglichen","Ausgefallene Dienste auf einen Ersatzhost übertragen","Nach einem Stromausfall alle seit der letzten Sicherung gelöschten Dateien wiederherstellen","Ohne Wartung eine beliebig lange Betriebszeit unabhängig von der Stromversorgung gewährleisten"], 0, "Eine unterbrechungsfreie Stromversorgung reduziert Risiken durch plötzlichen Stromverlust, ersetzt aber keine Redundanz über längere Ausfälle."),
    mc("base-035", "monitoring", "fortgeschritten", "Welches Ziel verfolgt Monitoring in einer IT-Umgebung?", ["Zustände und Messwerte beobachten, um Störungen früh zu erkennen","Systeme regelmäßig auf Sollkonfiguration zurücksetzen","Nach einem Ausfall die gesicherten Daten auf neue Hardware zurückschreiben","Die zulässigen Benutzerrechte verbindlich festlegen und im Verzeichnis hinterlegen"], 0, "Metriken, Logs und Alerts unterstützen Betrieb, Kapazitätsplanung und Incident Response."),
    mc("base-036", "cloud", "anspruchsvoll", "Welche Verantwortung bleibt bei einem SaaS-Dienst typischerweise beim Kunden?", ["Benutzer, Zugriffsrechte, Datenklassifikation und korrekte Konfiguration des Dienstes", "Die physische Reparatur der Rechenzentrumsserver", "Die Firmware der Netzwerkgeräte des Anbieters", "Die Kühlung des Anbieter-Rechenzentrums"], 0, "Das Shared-Responsibility-Modell verschiebt Verantwortungen, hebt sie aber nicht auf."),
    mc("base-037", "betriebssysteme", "fortgeschritten", "Was bedeutet Prozessisolation im Betriebssystemkontext?", ["Ein Prozess kann nicht beliebig direkt auf den Speicher eines anderen Prozesses zugreifen.", "Alle Prozesse teilen immer denselben Speicher ohne Schutz.", "Nur Administratoren dürfen Prozesse starten.", "Prozesse benötigen keine Ressourcen."], 0, "Speicherschutz und Berechtigungen begrenzen Auswirkungen fehlerhafter oder kompromittierter Anwendungen."),
    mc("base-038", "lizenzierung", "fortgeschritten", "Warum ist Open-Source-Software nicht automatisch ohne Lizenzpflicht nutzbar?", ["Auch offene Lizenzen enthalten Nutzungs- und Weitergabebedingungen","Ein kostenloser Download ersetzt jede Lizenzzustimmung","Ein kostenloser Download ersetzt die Zustimmung zu den geltenden Lizenzbedingungen","Sichtbarer Quellcode bedeutet, dass die Urheberrechte auf jeden Empfänger übergehen"], 0, "Die konkrete Lizenz muss geprüft werden; Open Source beschreibt den Zugang zum Quellcode, nicht das Fehlen aller Bedingungen."),
    mc("base-039", "datenintegritaet", "fortgeschritten", "Wofür kann ein Prüfsummen-Hash bei einem Dateidownload verwendet werden?", ["Die Datei mit einem aus vertrauenswürdiger Quelle erwarteten Hashwert vergleichen","Die Datei allein mit dem Hash als schadsoftwarefrei einstufen","Den Herausgeber allein aus einem nicht authentisierten Hashwert zweifelsfrei identifizieren","Fehlende Dateiteile aus dem erwarteten Hashwert ohne erneuten Download rekonstruieren"], 0, "Stimmt ein vertrauenswürdig bereitgestellter Hash nicht überein, wurde die Datei verändert oder unvollständig übertragen."),
    mc("base-040", "skalierung", "anspruchsvoll", "Was ist der Unterschied zwischen vertikaler und horizontaler Skalierung?", ["Vertikal: eine Instanz vergrößern; horizontal: weitere Instanzen hinzufügen","Vertikal: weitere Instanzen hinzufügen; horizontal: eine Instanz vergrößern","Vertikal: Daten komprimieren; horizontal: Daten dauerhaft archivieren","Vertikal: die Last zeitlich verschieben; horizontal: einen Dienst neu starten"], 0, "Horizontale Skalierung benötigt häufig Load Balancing und zustandsarme oder koordinierte Anwendungen."),
    mc("base-041", "datenformate", "fortgeschritten", "Warum sollte eine Anwendung externe JSON-Daten validieren, bevor sie verarbeitet werden?", ["Erwartete Struktur und Datentypen vor der weiteren Verarbeitung prüfen","Gültige JSON-Syntax als Beleg fachlich korrekter Inhalte verwenden","Alle Werte vor der Nutzung ungeprüft in denselben numerischen Datentyp umwandeln","Eine erfolgreiche HTTPS-Übertragung als Garantie des erwarteten Datenschemas behandeln"], 0, "Parsing allein garantiert weder fachliche Gültigkeit noch Sicherheit."),
    mc("base-042", "kapazitaetsplanung", "anspruchsvoll", "Ein Server erreicht regelmäßig 95 % RAM-Auslastung und lagert stark aus. Welche Maßnahme ist vor einer Beschaffung sinnvoll?", ["Speichernutzung und verursachende Prozesse über einen geeigneten Zeitraum analysieren","Allein aus dem Spitzenwert ohne Betrachtung der Arbeitslast die doppelte RAM-Menge bestellen","Nur die CPU-Taktfrequenz erhöhen, ohne den Speicherengpass weiter zu untersuchen","Die Auslagerungsdatei abschalten, ohne den Speicherbedarf der laufenden Prozesse zu ermitteln"], 0, "Kapazitätsplanung basiert auf Messwerten und Lastprofilen, nicht auf Vermutungen."),
    mc("base-043", "backup", "fortgeschritten", "Welche Aussage beschreibt eine sinnvolle Backup-Strategie am besten?", ["Getrennte Kopien auf mehreren Medien oder Orten mit geprüfter Wiederherstellung","Mehrere aktuelle Kopien im gleichen beschreibbaren Ordner mit identischen Zugriffsrechten","Ein gespiegelter Datenträger ohne getrennte historische Sicherungsstände","Eine laufende Synchronisierung, die Änderungen und Löschungen sofort überall übernimmt"], 0, "Mehrere voneinander getrennte Kopien reduzieren das Risiko gemeinsamer Ausfallursachen."),
    mc("base-044", "virtualisierung", "anspruchsvoll", "Warum muss bei der Konsolidierung vieler VMs auf einem Host auch die Ausfallsicherheit geplant werden?", ["Ein Hostausfall kann mehrere darauf betriebene Dienste gleichzeitig treffen","Jede VM besitzt unabhängig vom Host eine eigene physische Stromversorgung","Die Trennung der Gastbetriebssysteme verhindert bereits den gemeinsamen Hardwareausfall","Das Kopieren der VM-Konfiguration reicht für einen unterbrechungsfreien Weiterbetrieb aus"], 0, "Konsolidierung spart Ressourcen, erhöht aber die Bedeutung von Redundanz, Backups und Failover-Konzepten."),
    mc("base-045", "sicherheit", "fortgeschritten", "Ein verlorener Laptop soll auch bei Ausbau seines Datenträgers gegen unbefugtes Auslesen geschützt sein. Welche Maßnahme passt am besten?", ["Vollverschlüsselung mit geschützt verwaltetem Schlüssel","Ein Windows-Kennwort ohne Datenträgerverschlüsselung","NTFS-Zugriffsrechte ohne Verschlüsselung der gespeicherten Inhalte","Eine automatische Bildschirmsperre ohne Schutz der Daten im ausgeschalteten Zustand"], 0, "Eine geeignete Vollverschlüsselung schützt ruhende Daten auch bei einem ausgebauten Datenträger, sofern der Schlüssel geschützt bleibt. Anmeldekennwort, Bildschirmsperre und Dateirechte allein verhindern das Offline-Auslesen nicht.")
  ],
  "windows-netzwerke": [
    mc("win-net-009", "active-directory", "fortgeschritten", "Warum werden Benutzer und Computer in Active Directory häufig in Organisationseinheiten (OUs) strukturiert?", ["Verwaltung delegieren und Gruppenrichtlinien gezielt verknüpfen","Über die OU allein alle Dateirechte der Mitglieder vergeben","Für jede OU automatisch eine eigene Sicherheitsgrenze wie eine Gesamtstruktur bilden","Benutzer einer OU automatisch zu einer AD-Sicherheitsgruppe zusammenfassen"], 0, "OUs sind Verwaltungscontainer; sie helfen bei Delegation und bei der GPO-Verknüpfung."),
    orderQuestion("win-net-010", "gpo", "anspruchsvoll", "Bringe die Ebenen der üblichen GPO-Verarbeitung in die richtige Reihenfolge.", ["Local", "Site", "Domain", "OU"], "Die typische Reihenfolge lautet Local, Site, Domain, OU (LSDOU). Später angewendete Einstellungen können bei Konflikten vorherige überschreiben."),
    mc("win-net-011", "gpo", "fortgeschritten", "Was bewirkt 'Block Inheritance' auf einer OU grundsätzlich?", ["Sie blockiert geerbte GPOs, deren Verknüpfungen nicht erzwungen sind.", "Sie blockiert direkt verknüpfte GPOs, lässt geerbte GPOs aber weiter wirken.", "Sie blockiert nur die geerbten GPOs, deren Verknüpfungen erzwungen sind.", "Sie deaktiviert die Benutzerkonfiguration aller GPOs innerhalb dieser OU."], 0, "Block Inheritance unterbricht die gewöhnliche Vererbung von höheren AD-Ebenen. Über erzwungene Verknüpfungen vererbte GPOs können weiterhin wirken; direkt an der OU verknüpfte GPOs werden dadurch nicht blockiert. Die Option schaltet nicht pauschal die Benutzerkonfiguration ab."),
    mc("win-net-012", "gpo", "fortgeschritten", "Welche Wirkung hat eine als 'Enforced' markierte GPO gegenüber Block Inheritance?", ["Die GPO kann trotz blockierter Vererbung auf untergeordnete OUs wirken","Blockierte Vererbung setzt auch erzwungene Links außer Kraft","Die GPO wird bei blockierter Vererbung nur noch für lokale Konten ausgewertet","Die GPO verliert bei blockierter Vererbung ausschließlich ihre Computereinstellungen"], 0, "Erzwungene GPOs sind ein starkes Mittel und sollten gezielt eingesetzt werden."),
    mc("win-net-013", "gpo", "anspruchsvoll", "Eine GPO soll nur für Mitglieder der Gruppe Vertrieb gelten, obwohl sie an der OU mit allen Mitarbeitenden verknüpft ist. Welche Technik ergänzt die Verknüpfung passend?", ["Sicherheitsfilterung mit passenden Lese- und Anwenden-Rechten für die Gruppe","Die GPO direkt mit dem Sicherheitsgruppenobjekt statt mit der OU verknüpfen","Die Verknüpfung erzwingen, damit sie ausschließlich für Vertriebsmitglieder gilt","Die Verknüpfungsreihenfolge ändern, ohne den berechtigten Empfängerkreis anzupassen"], 0, "Security Filtering grenzt die Anwendung einer GPO auf berechtigte Sicherheitsprinzipale ein."),
    mc("win-net-014", "gpo", "fortgeschritten", "Warum sollte eine neue GPO zunächst an einer Test-OU erprobt werden?", ["Nebenwirkungen mit begrenztem Empfängerkreis vor der breiten Anwendung erkennen","Nach einem Test alle späteren Änderungen ohne Prüfung freigeben","Die produktive Wirkung allein anhand des GPO-Namens und der Beschreibung bestätigen","Mit der Test-OU die Sicherung und Dokumentation der Richtlinie dauerhaft ersetzen"], 0, "Stufenweise Einführung und Rückfallplanung reduzieren Betriebsrisiken."),
    mc("win-net-015", "authentisierung", "fortgeschritten", "Welche zentrale Aufgabe übernimmt ein Domain Controller bei der Anmeldung in einer Active-Directory-Domäne?", ["Domänenidentitäten prüfen und Authentisierungsdienste bereitstellen","Nach der Anmeldung Vollzugriff auf alle Freigaben erteilen","Die Anmeldung ausschließlich durch die lokale SAM-Datenbank des Clients bestätigen","Für die Anmeldung eine dynamische IP-Adresse anstelle eines Benutzerkontos zuweisen"], 0, "Domain Controller hosten Active Directory Domain Services und arbeiten eng mit DNS und Kerberos zusammen."),
    mc("win-net-016", "authentisierung", "anspruchsvoll", "Ein mobiler Benutzer hat sich bereits an einem Domänenlaptop angemeldet und arbeitet vorübergehend ohne Verbindung zum Domain Controller. Was ist bei einer erneuten Anmeldung typischerweise möglich?", ["Die lokale Anmeldung kann mit zwischengespeicherten Domänenanmeldedaten gelingen","Die Anmeldung erzeugt ohne Verbindung ein neues Konto in der AD-Datenbank","Das letzte Domänenkennwort wird ohne Verbindung auf allen DCs zurückgesetzt","Die Anmeldung verlängert ohne DC-Kontakt sämtliche abgelaufenen Kerberos-Tickets"], 0, "Windows kann vorherige Domänenanmeldungen zwischenspeichern. Das ersetzt keine Verbindung zu AD-Diensten oder Netzwerkressourcen."),
    mc("win-net-017", "kerberos", "anspruchsvoll", "Warum ist eine möglichst genaue Zeitsynchronisation in einer Kerberos-Domäne wichtig?", ["Zeitgebundene Tickets und Anfragen erfordern ausreichend übereinstimmende Uhren","Der Zeitabgleich ersetzt die Prüfung, ob ein Ticket von einem vertrauenswürdigen KDC stammt","Gleiche Uhrzeiten führen dazu, dass Tickets ohne Ablaufdatum ausgestellt werden","Die Zeitsynchronisation überträgt zugleich alle Benutzerkennwörter an die Clients"], 0, "Zeitstempel begrenzen Wiederholungsangriffe. Deshalb ist ein zuverlässiger Zeitdienst in AD-Umgebungen wesentlich."),
    mc("win-net-018", "berechtigungen", "fortgeschritten", "Warum sollten Berechtigungen bevorzugt Gruppen statt einzelnen Benutzerkonten zugewiesen werden?", ["Gruppenmitgliedschaften machen Rollenwechsel und Rechtepflege übersichtlicher","Gruppen erhalten automatisch minimal nötige Rechte","Die Mitgliedschaft in einer Gruppe schützt deren Dateien automatisch durch Verschlüsselung","Eine Gruppe erhält für jede Ressource automatisch den kleinsten erforderlichen Zugriff"], 0, "Rollenbasierte Gruppen verringern Pflegeaufwand und Fehler bei individuellen Berechtigungen."),
    mc("win-net-019", "berechtigungen", "anspruchsvoll", "Ein Mitarbeiter erhält Zugriff auf einen Ordner über zwei Gruppen: Lesen und Ändern. Welche Berechtigung ist im Regelfall effektiv, sofern kein explizites Deny greift?", ["Ändern, weil erlaubte Berechtigungen zusammengeführt werden.", "Keine Berechtigung, weil Gruppen sich gegenseitig aufheben.", "Nur Lesen, weil die schwächste Berechtigung immer gewinnt.", "Vollzugriff, weil zwei Gruppen beteiligt sind."], 0, "NTFS-Allow-Berechtigungen werden kumuliert; explizites Deny hat jedoch besondere Wirkung und sollte sparsam eingesetzt werden."),
    mc("win-net-020", "gpo", "anspruchsvoll", "Eine Benutzer-GPO setzt ein Netzlaufwerk, wird aber bei einem bestimmten Konto nicht angewendet. Welche Diagnose ist besonders zielgerichtet?", ["Mit gpresult angewendete und abgelehnte Richtlinien des betroffenen Kontos prüfen","Nur die GPO im Editor öffnen und aus der gespeicherten Einstellung ihre Anwendung ableiten","Die GPO ohne Prüfung mehrfach neu verknüpfen und die Ergebnisse nicht vergleichen","Nur die Gruppenmitgliedschaften eines anderen Benutzers als Nachweis heranziehen"], 0, "Gruppenrichtlinienauswertungen zeigen Verknüpfung, Filterung und Fehler bei der Verarbeitung."),
    mc("win-net-021", "gpo", "fortgeschritten", "Was ist der Unterschied zwischen Benutzer- und Computerkonfiguration in einer GPO?", ["Benutzerkonfiguration gilt für Benutzer-, Computerkonfiguration für Computerobjekte","Benutzer: nur lokale Konten; Computer: nur Domänenbenutzer","Benutzerkonfiguration wird pro Sitzung gespeichert, Computerkonfiguration nur auf DCs","Benutzerkonfiguration steuert nur Apps, Computerkonfiguration ausschließlich physische Hardware"], 0, "Der Zieltyp bestimmt, wann und für wen Einstellungen verarbeitet werden."),
    mc("win-net-022", "domäne", "fortgeschritten", "Welchen Vorteil bietet ein Domänenkonto gegenüber einem lokalen Konto auf mehreren PCs?", ["Dieselbe zentral verwaltete Identität kann auf berechtigten Domänen-PCs genutzt werden","Gleichnamige lokale Konten auf mehreren PCs erhalten dadurch automatisch dieselbe SID","Die Nutzung eines Domänenkontos erteilt ohne weitere Zuweisung lokale Administratorrechte","Das Konto ersetzt durch seine zentrale Speicherung alle Zugriffsprüfungen auf Freigaben"], 0, "Zentrale Authentisierung ersetzt nicht die gezielte Vergabe lokaler oder Ressourcenberechtigungen."),
    mc("win-net-023", "domäne", "anspruchsvoll", "Ein neuer PC erreicht die IP-Adresse des Domain Controllers, findet beim Domänenbeitritt aber die Domäne nicht. Welche Einstellung ist besonders gezielt zu prüfen?", ["Ob der konfigurierte DNS-Server die AD-Dienstrecords auflösen kann","Ob der Clientname dem Namen des DCs entspricht","Ob der Client seine Adresse statisch statt durch einen funktionierenden DHCP-Dienst bezieht","Ob die MAC-Adresse des Domain Controllers als Standardgateway auf dem Client eingetragen ist"], 0, "AD-Clients benötigen funktionierende Namens- und Dienstauflösung, insbesondere passende SRV-Records. Ein öffentlicher Resolver kennt interne AD-Zonen gewöhnlich nicht. Entscheidend ist die korrekte Auflösung; der DNS-Server muss nicht zwangsläufig selbst ein Domain Controller sein."),
    mc("win-net-024", "active-directory", "fortgeschritten", "Ein Benutzer aus Domäne A soll eine Freigabe in Domäne B verwenden. Was ist zusätzlich zu einer passenden Vertrauensstellung erforderlich?", ["Eine Berechtigung auf der Freigabe oder dem Ordner für die Identität beziehungsweise Gruppe aus Domäne A", "Die automatische Replikation aller Benutzerprofile", "Eine Änderung der MAC-Adresse des Benutzers", "Das Löschen der lokalen Konten in Domäne B"], 0, "Ein Trust ermöglicht die Authentisierungsbeziehung. Der Zugriff auf die konkrete Ressource muss weiterhin ausdrücklich berechtigt werden."),
    mc("win-net-025", "gpo", "anspruchsvoll", "Warum kann Loopback Processing für gemeinsam genutzte Kiosk- oder Terminalserver sinnvoll sein?", ["Benutzereinstellungen anhand des gerade verwendeten Computers auswählen","Das Benutzerobjekt bei Anmeldung in die Computer-OU verschieben","Die Benutzerobjekte bei jeder Anmeldung automatisch in die Computer-OU verschieben","Die lokalen Gruppenmitgliedschaften bei jeder Anmeldung in Domänengruppen umwandeln"], 0, "Loopback ist ein Spezialfall für Rechner, auf denen unabhängig vom Benutzer eine bestimmte Umgebung gelten soll."),
    mc("win-net-026", "berechtigungen", "fortgeschritten", "Welches Vorgehen folgt dem AGDLP-Prinzip in einer Windows-Domäne am besten?", ["Benutzerkonten kommen in globale Rollengruppen, diese in domänenlokale Ressourcengruppen, die Berechtigungen erhalten.", "Berechtigungen werden direkt jedem Benutzerkonto einzeln erteilt.", "Lokale Drucker werden in globale Gruppen verschoben.", "Jeder Benutzer erhält Domänen-Adminrechte."], 0, "AGDLP strukturiert Berechtigungen nach Konten, Rollen, Ressourcengruppen und Berechtigungen."),
    mc("win-net-027", "authentisierung", "anspruchsvoll", "Warum sollte ein Dienstkonto nicht für interaktive Benutzeranmeldungen verwendet werden?", ["Interaktive Nutzung vermischt Dienstzweck, Berechtigungen und persönliche Nachvollziehbarkeit","Die erste interaktive Anmeldung macht das Dienstkonto technisch zu einem Computerkonto","Ein Dienstkonto erhält nur während einer interaktiven Anmeldung Zugriff auf Netzwerkressourcen","Die interaktive Nutzung rotiert das Kennwort automatisch ohne Auswirkungen auf den Dienst"], 0, "Getrennte, verwaltete Dienstidentitäten verbessern Least Privilege und Auditierbarkeit."),
    mc("win-net-028", "gpo", "fortgeschritten", "Wann werden viele Computereinstellungen aus Gruppenrichtlinien typischerweise verarbeitet?", ["Beim Systemstart sowie bei späteren Hintergrundaktualisierungen","Ausschließlich beim erstmaligen Beitritt des Computers zur Domäne","Ausschließlich beim Speichern der GPO durch den Administrator","Nur bei jeder Benutzeranmeldung, unabhängig von Hintergrundaktualisierungen"], 0, "Benutzereinstellungen werden zusätzlich bei Anmeldung und periodisch verarbeitet; einzelne Einstellungen können abweichen."),
    mc("win-net-029", "active-directory", "fortgeschritten", "Was ist ein Sicherheitsprinzipal in Active Directory?", ["Eine Identität, der Zugriffsrechte auf Ressourcen zugewiesen werden können.", "Ein Container, der Benutzer und Computer organisatorisch zusammenfasst.", "Ein Richtlinienobjekt, das Einstellungen für Benutzer und Computer festlegt.", "Eine Strukturdefinition, die zulässige Objektklassen und Attribute vorgibt."], 0, "Sicherheitsprinzipale wie Benutzer, Computer und Sicherheitsgruppen besitzen eine SID und können in Zugriffssteuerungslisten erscheinen. Die anderen Beschreibungen beziehen sich auf eine OU, ein GPO beziehungsweise das AD-Schema."),
    mc("win-net-030", "gpo", "anspruchsvoll", "Zwei GPOs setzen denselben Wert unterschiedlich und sind beide an derselben OU verknüpft. Welche Einstellung gewinnt im Normalfall?", ["Die GPO mit höherer Verknüpfungspriorität, die später verarbeitet wird","Die zuerst verarbeitete GPO mit niedrigerer Linkpriorität","Die GPO, deren Objekt zuletzt bearbeitet wurde, unabhängig von der Linkreihenfolge","Die GPO, die auf dem zuerst kontaktierten DC als erstes repliziert wurde"], 0, "Bei Konflikten gilt die Verarbeitungsreihenfolge; Verknüpfungsreihenfolge und Erzwungene Einstellungen müssen sorgfältig geplant werden."),
    mc("win-net-031", "sicherheit", "fortgeschritten", "Warum ist die Mitgliedschaft in Domain Admins besonders restriktiv zu behandeln?", ["Die Gruppe gewährt weitreichende Rechte mit entsprechend großem Schadenspotenzial","Die Mitgliedschaft ist für jeden normalen Freigabezugriff erforderlich","Die Gruppe sollte alle Benutzer enthalten, damit Gruppenrichtlinien zuverlässig greifen","Die Mitgliedschaft beschränkt Administratoren automatisch auf ihre jeweils eigene Abteilung"], 0, "Administrative Gruppen gehören zu den besonders schützenswerten Identitäten und sollten nicht für Alltagsarbeit verwendet werden."),
    mc("win-net-032", "domäne", "fortgeschritten", "Weshalb ist eine Arbeitsgruppe für viele PCs mit unterschiedlichen Berechtigungen aufwendiger als eine Domäne?", ["Konten und Berechtigungen müssen häufig auf mehreren Rechnern einzeln gepflegt werden","Gleichnamige lokale Konten gleichen ihre Kennwörter automatisch zwischen allen PCs ab","Arbeitsgruppen speichern sämtliche Benutzerrechte in einer gemeinsamen zentralen AD-Datenbank","Jeder Arbeitsgruppen-PC übernimmt Änderungen an lokalen Gruppen unmittelbar von seinen Nachbarn"], 0, "Eine Domäne zentralisiert Identitäts- und Richtlinienverwaltung; sie ist aber nicht für jede sehr kleine Umgebung erforderlich."),
    mc("win-net-033", "dns", "anspruchsvoll", "Ein Administrator trägt auf Domänenclients einen öffentlichen DNS-Resolver ein, damit Webseiten schneller aufgelöst werden. Welche Folge ist besonders kritisch?", ["Die Auflösung interner AD-Dienstrecords kann ausfallen","Der öffentliche Resolver wird selbst Mitglied der AD-Domäne","Der Client repliziert seine lokalen Konten dadurch in das öffentliche DNS","Die Wahl des DNS-Resolvers überträgt automatisch die FSMO-Rollen ins Internet"], 0, "Domänenclients sollten für die AD-Zone den internen AD-DNS nutzen; externe Namen können von dort weitergeleitet werden."),
    mc("win-net-034", "gpo", "fortgeschritten", "Welches Ziel verfolgen zentrale Kennwort- und Kontosperrrichtlinien in einer Domäne?", ["Einheitliche Anforderungen an Kennwörter und den Umgang mit Fehlanmeldungen","Die Berechtigungen auf jeder einzelnen Datei unmittelbar festzulegen","Für jedes Domänenkonto ein persönliches TLS-Serverzertifikat auszustellen","Die Aktualisierung der Kerberos-Diensttickets durch gemeinsame Kennwörter zu ersetzen"], 0, "Kennwort- und Kontosperrrichtlinien legen Anforderungen und Regeln für Konten fest, etwa Mindestlänge oder Sperrschwellen. Sie sind von Datei-ACLs und Zertifikatsverwaltung zu unterscheiden. Abweichungen für bestimmte Konten können über dafür vorgesehene differenzierte Kennwortrichtlinien umgesetzt werden."),
    mc("win-net-035", "berechtigungen", "anspruchsvoll", "Ein Benutzer darf einen Ordner über eine Freigabe im Netzwerk nur lesen, obwohl NTFS lokal Ändern erlaubt. Was ist die passende Erklärung?", ["Beim Netzwerkzugriff begrenzt die restriktivere Kombination aus Freigabe- und NTFS-Berechtigungen die effektive Berechtigung.", "NTFS-Berechtigungen gelten über das Netzwerk nie.", "Freigabeberechtigungen gelten nur lokal.", "Der Benutzer erhält deshalb automatisch Vollzugriff."], 0, "Beim Zugriff über eine Freigabe wirken beide Berechtigungsebenen; effektiv bleibt nur, was beide erlauben.")
  ],
  "windows-server-admin": [
    mc("srv-047", "server-core", "fortgeschritten", "Ein Server soll mit möglichst kleiner Angriffsfläche betrieben und remote per PowerShell verwaltet werden. Welche Installationsoption passt?", ["Server Core", "Desktop Experience ausschließlich wegen der GUI", "Ein Client-Betriebssystem ohne Serverrolle", "Ein nicht aktualisiertes Legacy-System"], 0, "Server Core reduziert grafische Komponenten und wird typischerweise remote oder per Kommandozeile verwaltet."),
    mc("srv-048", "active-directory", "anspruchsvoll", "Warum sollten mindestens zwei Domain Controller für eine produktive Domäne geplant werden?", ["Weitere geeignete DCs erhöhen die Verfügbarkeit der zentralen Domänendienste","Der zweite DC bewahrt automatisch jede frühere Version aller AD-Objekte unveränderlich auf","Zwei DCs verhindern die Replikation fehlerhafter administrativer Änderungen zwischen ihnen","Der zweite DC ersetzt die Prüfung der Erreichbarkeit und Replikation durch automatische Garantie"], 0, "Redundante DCs verbessern Verfügbarkeit, erfordern aber weiterhin Backups, Monitoring und Replikationsüberwachung."),
    mc("srv-049", "active-directory", "anspruchsvoll", "Nach dem dauerhaften Verlust eines DCs sind die lokalen RID-Vorräte der verbleibenden DCs erschöpft und neue Vorräte nicht erhältlich. Welche Betriebsmasterrolle ist für die Vergabe neuer RID-Pools zuständig?", ["RID Master", "Schema Master", "Domain Naming Master", "Infrastructure Master"], 0, "Der RID-Master verteilt RID-Pools für neue Sicherheitsprinzipale. Bereits vergebene Vorräte erlauben zunächst weitere Neuanlagen. Bei dauerhaftem Rollenverlust ist eine kontrollierte Übernahme nötig; das ist kein automatisches Cluster-Failover."),
    mc("srv-050", "fileserver", "anspruchsvoll", "In einer Abteilungsfreigabe sollen Dateien mit festgelegten Video-Dateinamensmustern wie *.mp4 blockiert werden. Welches Windows-Server-Werkzeug passt dafür?", ["Aktives FSRM-Dateiscreening mit einer passenden Dateigruppe","Ein FSRM-Speicherkontingent, das ausschließlich die Gesamtgröße des Ordners begrenzt","Eine Freigabeberechtigung, die allen Benutzern unverändert Änderungsrechte erlaubt","Eine NTFS-Komprimierung, die Dateien lediglich platzsparender ablegt"], 0, "Aktives FSRM-Dateiscreening kann Dateien anhand definierter Dateinamensmuster blockieren. Quotas begrenzen dagegen den Speicherverbrauch. Dateiscreening ist keine zuverlässige Inhaltsanalyse: Das Umbenennen einer Datei kann eine rein namensbasierte Regel umgehen."),
    mc("srv-051", "hyper-v", "fortgeschritten", "Welche Maßnahme schützt eine VM vor einem einzelnen Hostausfall nicht zuverlässig?", ["Nur ein lokaler Checkpoint auf demselben Host", "Ein geplanter Failover-Cluster mit gemeinsamer oder replizierter Grundlage", "Ein getestetes Backup", "Redundante Hosts"], 0, "Ein lokaler Checkpoint liegt beim gleichen Ausfallort und ist kein Hochverfügbarkeitsmechanismus."),
    mc("srv-052", "updates", "anspruchsvoll", "Warum sollten Serverupdates in einem Wartungsfenster mit Rückfallplan erfolgen?", ["Neustarts und mögliche Inkompatibilitäten sollen kontrolliert beherrschbar bleiben","Ein Wartungsfenster macht die Prüfung von Dienstabhängigkeiten und Startreihenfolgen überflüssig","Ein vorhandener Rückfallplan bestätigt bereits ohne Test, dass jede Rücknahme erfolgreich ist","Die Installation außerhalb der Geschäftszeit beseitigt unabhängig vom Update alle Betriebsrisiken"], 0, "Testen, sichern, planen und überwachen sind zentrale Schritte eines sicheren Updateprozesses."),
    mc("srv-053", "bitlocker", "fortgeschritten", "Welches Risiko adressiert BitLocker auf einem verlorenen Server- oder Laptopdatenträger primär?", ["Das unbefugte Offline-Auslesen der gespeicherten Inhalte","Den Zugriff durch einen berechtigten Benutzer nach regulärer Entsperrung","Die Übertragung vertraulicher Dateien über eine unverschlüsselte Netzwerkverbindung","Das Löschen erreichbarer Dateien durch Schadsoftware in der bereits entsperrten Sitzung"], 0, "Datenträgerverschlüsselung schützt ruhende Daten; laufende Systeme benötigen zusätzlich Zugriffs- und Netzwerkschutz."),
    mc("srv-054", "active-directory", "anspruchsvoll", "Ein Administrator stellt fest, dass ein Domain Controller seit Monaten nicht repliziert. Warum ist ein einfaches Wiederanschließen riskant?", ["Veraltete AD-Objekte und abgelaufene Aufbewahrungsfristen können Replikationsprobleme verursachen","Der DC erhält beim Wiederanschließen unabhängig vom Zustand automatisch eine neue saubere AD-Datenbank","Die längere Trennung verhindert grundsätzlich jede spätere Änderung an den gespeicherten AD-Objekten","Ein abgelaufener DHCP-Lease beweist bereits, dass die AD-Datenbank vollständig konsistent ist"], 0, "Lange nicht replizierende DCs können zu Lingering Objects und inkonsistentem Verzeichniszustand führen."),
    mc("srv-055", "berechtigungen", "fortgeschritten", "Warum sollten administrative Tätigkeiten mit einem getrennten Administratorkonto statt dem normalen Benutzerkonto erfolgen?", ["Erhöhte Rechte werden auf die erforderlichen administrativen Tätigkeiten begrenzt","Das getrennte Konto schützt jede geöffnete Website unabhängig vom Browser gegen Phishing","Zwei Konten führen dazu, dass jede administrative Aktion von einer zweiten Person bestätigt wird","Ein separat benanntes Konto verhindert bereits ohne weitere Maßnahmen den Diebstahl seiner Zugangsdaten"], 0, "Getrennte Konten unterstützen Least Privilege, Nachvollziehbarkeit und den Schutz privilegierter Identitäten.")
  ]
};

const QUESTION_POOL_MATERIAL_EXTENSION = {
  "it-sicherheit": [
    mc("sec-034", "auftragsverarbeitung", "anspruchsvoll", "Ein Cloud-Anbieter verarbeitet Kundendaten ausschließlich nach dokumentierten Weisungen des Unternehmens. Welche Rollen sind korrekt?", ["Unternehmen: Verantwortlicher; Cloud-Anbieter: Auftragsverarbeiter", "Cloud-Anbieter: Verantwortlicher; Unternehmen: Betroffener", "Beide sind automatisch Datenschutzbeauftragte", "Der Anbieter ist nie an Weisungen gebunden"], 0, "Wer Zwecke und Mittel der Verarbeitung festlegt, ist Verantwortlicher. Ein weisungsgebundener Dienstleister verarbeitet als Auftragsverarbeiter."),
    mc("sec-035", "datenschutz", "anspruchsvoll", "Eine geplante Verarbeitung personenbezogener Daten führt voraussichtlich zu einem hohen Risiko für Betroffene. Welche Prüfung verlangt die DSGVO grundsätzlich schon vor Beginn, unabhängig von der Beschäftigtenzahl?", ["Eine Datenschutz-Folgenabschätzung für die geplante Verarbeitung","Eine Folgenabschätzung erst nach einem tatsächlichen Vorfall","Eine pauschale Vorabgenehmigung jeder Verarbeitung durch die Aufsichtsbehörde","Eine Prüfung ausschließlich dann, wenn mehr als 20 Beschäftigte beteiligt sind"], 0, "Artikel 35 DSGVO sieht bei voraussichtlich hohem Risiko grundsätzlich vorab eine Datenschutz-Folgenabschätzung vor. Die Beschäftigtenzahl ist dafür nicht das entscheidende Kriterium. Ob zusätzlich ein Datenschutzbeauftragter zu benennen ist, richtet sich nach weiteren gesetzlichen Voraussetzungen; eine pauschale Genehmigung jeder Verarbeitung ist nicht vorgeschrieben."),
    mc("sec-036", "auftragsverarbeitung", "anspruchsvoll", "Ein Dienstleister entscheidet eigenständig, zu welchen eigenen Marketingzwecken er die erhaltenen Kundendaten zusätzlich nutzt. Warum ist die Einordnung als bloßer Auftragsverarbeiter dann problematisch?", ["Für selbst bestimmte zusätzliche Zwecke kann er selbst Verantwortlicher sein","Die Vertragsüberschrift allein bestimmt seine Datenschutzrolle","Die ursprüngliche Weisung deckt jeden später vom Dienstleister bestimmten Zweck mit ab","Die Verantwortung für neue eigene Zwecke bleibt allein beim ursprünglichen Auftraggeber"], 0, "Ein Auftragsverarbeiter verarbeitet nur im Rahmen der Weisungen. Eigene Zwecke verändern die datenschutzrechtliche Rollenbewertung."),
    mc("sec-037", "passwoerter", "grundlagen", "Welche Aufgabe hat der Kostenfaktor einer geeigneten Passwort-Hashfunktion?", ["Er erhöht den Rechen- beziehungsweise Speicheraufwand je Passwortversuch und erschwert damit massenhaftes Raten.", "Er bestimmt den monatlichen Preis des Benutzerkontos.", "Er macht den Salt geheim, ohne ihn getrennt speichern zu müssen.", "Er ermöglicht das direkte Entschlüsseln des Passworts aus dem Hash."], 0, "Ein Salt verhindert insbesondere wiederverwendbare Vorberechnungen, während eine aufwendige Passwortfunktion jeden einzelnen Rateversuch verteuert. Der Kostenfaktor muss zur Plattform passen; eine schnelle allgemeine Hashfunktion allein ist dafür ungeeignet."),
    mc("sec-038", "schutzziele", "fortgeschritten", "Eine Rechnung erreicht den Empfänger, ihr Betrag wurde unterwegs aber unbemerkt verändert. Welches Schutzziel ist unmittelbar verletzt?", ["Integrität", "Verfügbarkeit", "Datenminimierung", "Skalierbarkeit"], 0, "Integrität bedeutet, dass Daten vollständig und unverändert bleiben beziehungsweise Manipulationen erkennbar sind.")
  ],
  "ipv4": [
    mc("ip-046", "subnetting", "fortgeschritten", "Welche Subnetzmaske gehört zu einem /23-Netz?", ["255.255.254.0", "255.255.255.0", "255.255.252.0", "255.255.255.128"], 0, "Bei /23 sind im dritten Oktett sieben Bits gesetzt: 11111110 entspricht 254."),
    mc("ip-047", "supernetting", "anspruchsvoll", "Die vier zusammenhängenden Netze 192.168.8.0/24 bis 192.168.11.0/24 sollen als eine Route zusammengefasst werden. Welches Präfix passt?", ["192.168.8.0/22", "192.168.8.0/23", "192.168.8.0/24", "192.168.8.0/21"], 0, "Ein /22 umfasst vier aufeinanderfolgende /24-Netze. Die Netzgrenze liegt hier bei 8 im dritten Oktett."),
    mc("ip-048", "routing", "fortgeschritten", "Ein PC hat 192.168.20.50/24. Welche Adresse ist als Standardgateway grundsätzlich passend?", ["192.168.20.1", "192.168.21.1", "10.0.0.1", "192.168.20.255"], 0, "Das Gateway muss für den PC direkt im eigenen Subnetz erreichbar sein und darf keine Broadcastadresse sein."),
    mc("ip-049", "dhcp", "anspruchsvoll", "Ein DHCPv4-Server soll Clients neben einer gültigen Adresse und Subnetzmaske auch den Zugang zu anderen Netzen und interne Namensauflösung ermöglichen. Welche weiteren Angaben benötigen die Clients dafür typischerweise?", ["Standardgateway und Adresse eines geeigneten DNS-Servers","Adresse eines NTP-Servers und Name der Windows-Arbeitsgruppe","DNS-Suchdomäne und Adresse des zuständigen Druckservers","Leasezeit und MAC-Adresse des angeschlossenen Access Points"], 0, "Die IP-Konfiguration benötigt für entfernte Ziele typischerweise ein Standardgateway und für Namensauflösung einen geeigneten DNS-Server. Unter Windows DHCP werden dafür unter anderem die Optionen Router (003) und DNS-Server (006) verwendet; Adresse und Subnetz ergeben sich aus der Bereichskonfiguration."),
    mc("ip-050", "subnetting", "anspruchsvoll", "Ein /24-Netz wird in acht gleich große Teilnetze zerlegt. Wie viele nutzbare Hostadressen hat jedes Teilnetz im klassischen IPv4-Modell?", ["30", "14", "62", "126"], 0, "Acht Teilnetze benötigen drei zusätzliche Netzbits: /24 wird zu /27. Ein /27 hat 32 Adressen und 30 nutzbare Hosts."),
    mc("ip-051", "adressplanung", "anspruchsvoll", "In einem Netz soll der DHCP-Pool 192.168.30.100 bis 192.168.30.200 vergeben. Welche statische Druckeradresse vermeidet sicher eine Überschneidung?", ["192.168.30.20", "192.168.30.150", "192.168.30.200", "192.168.30.180"], 0, "Statische Adressen gehören außerhalb des dynamischen DHCP-Pools oder werden als Reservierung zentral verwaltet."),
    mc("ip-052", "supernetting", "fortgeschritten", "Welche Adresse liegt im zusammengefassten Netz 192.168.8.0/22?", ["192.168.10.25", "192.168.12.25", "192.168.7.25", "192.168.16.25"], 0, "192.168.8.0/22 reicht von 192.168.8.0 bis 192.168.11.255."),
    mc("ip-053", "broadcast", "fortgeschritten", "Warum ist ein Router nicht dazu da, normale Layer-2-Broadcasts zwischen zwei IP-Netzen weiterzuleiten?", ["Die lokalen Broadcast-Domänen sollen an den Netzgrenzen getrennt bleiben","Der Router ersetzt den Broadcast jeweils durch einen Multicast","Die Broadcastadresse jedes Netzes ist zugleich die öffentliche Adresse des Routers","Ein Router kann Pakete nur weitergeben, wenn ihre Ziel-MAC eine Broadcastadresse ist"], 0, "Router trennen Broadcast-Domänen. Für ausgewählte Dienste wie DHCP gibt es kontrollierte Relay-Mechanismen."),
    mc("ip-054", "subnetting", "anspruchsvoll", "Welches Netz enthält den Host 172.16.34.200/22?", ["172.16.32.0/22", "172.16.34.0/22", "172.16.36.0/22", "172.16.0.0/22"], 0, "Ein /22 hat im dritten Oktett eine Blockgröße von vier. 34 liegt im Bereich 32 bis 35."),
    mc("ip-055", "fehleranalyse", "anspruchsvoll", "Ein Client erreicht die eigene Gateway-IP, aber weder eine externe IP-Adresse noch ein Ziel hinter einem anderen Standort. DNS ist dabei nicht beteiligt. Was ist nach der lokalen Konfiguration besonders zu prüfen?", ["Routing und zulässige Weiterleitung hinter dem Gateway","Den DNS-Suchsuffix für die numerischen Ziele","Die lokale ARP-Auflösung für die MAC-Adresse des entfernten Standortservers","Die DHCP-Leasezeit als vorgeschriebene Wartezeit vor dem Zugriff auf andere Netze"], 0, "Wenn der erste Hop erreichbar ist, liegt die weitere Ursache häufig in Routing, WAN-Verbindung oder einer Filterregel hinter dem Gateway.")
  ],
  "netzwerke": [
    mc("net-056", "uebertragungsmedien", "fortgeschritten", "Zwei Gebäude sollen über eine mehrere Kilometer lange, neu zu errichtende Kabelstrecke mit hoher Datenrate verbunden werden. Welches Medium passt am ehesten?", ["Singlemode-Glasfaser mit passenden optischen Transceivern","Durchgehendes Twisted-Pair-Kupfer ohne aktive Zwischenstation","Ein einzelnes passives Direct-Attach-Kupferkabel zwischen den Gebäuden","Eine USB-Verlängerung ohne aktive Signalaufbereitung über die gesamte Strecke"], 0, "Singlemode-Glasfaser mit für Distanz und Datenrate geeigneten Transceivern ist für solche Kilometerstrecken vorgesehen. Passive Kupferverbindungen für Ethernet, DAC oder USB sind nicht für diese ununterbrochene Reichweite ausgelegt."),
    mc("net-057", "uebertragungsmedien", "fortgeschritten", "Warum wurden GBIC-Module in vielen Netzwerkumgebungen weitgehend durch SFP-Module ersetzt?", ["SFP benötigt weniger Platz und ermöglicht eine höhere Portdichte","SFP legt für alle Module dieselbe Reichweite fest","SFP lässt jedes Modul ohne Prüfung von Gerät und Datenrate in jedem Port arbeiten","SFP ersetzt durch die kleinere Bauform die Auswahl eines passenden Übertragungsmediums"], 0, "Beide sind steckbare Transceiver-Formate; SFP ist kompakter und in modernen Geräten weit verbreitet."),
    mc("net-058", "komponenten", "fortgeschritten", "Was kann ein klassischer Repeater leisten, was aber nicht?", ["Er regeneriert Signale zur Segmentverlängerung, trifft aber keine Weiterleitungsentscheidung nach IP-Zielen.", "Er vergibt DHCP-Leases und DNS-Namen.", "Er routet automatisch zwischen beliebigen IP-Netzen.", "Er ersetzt eine Firewall."], 0, "Ein Repeater arbeitet auf der Bitübertragungsschicht und erhöht nicht die verfügbare Datenrate oder Routing-Funktion."),
    mc("net-059", "komponenten", "fortgeschritten", "Ein Gerät soll zwei Ethernet-Segmente auf Layer 2 koppeln und anhand von MAC-Adressen weiterleiten. Welche Komponente beschreibt diese Aufgabe?", ["Bridge beziehungsweise Layer-2-Switch", "DNS-Server", "DHCP-Server", "Router ausschließlich auf Layer 3"], 0, "Eine Bridge koppelt Layer-2-Segmente. Ein Switch ist funktional eine mehrportige Bridge."),
    mc("net-060", "netzwerkdiagnose", "fortgeschritten", "Welches Windows-Kommando liefert unter anderem IPv4-Adresse, Subnetzmaske, Standardgateway und DHCP-Status eines Clients?", ["ipconfig /all", "nslookup", "tracert", "hostname"], 0, "ipconfig /all zeigt die lokale IP-Konfiguration. Es ist ein sinnvoller erster Schritt bei DHCP- und Gateway-Problemen."),
    mc("net-061", "netzwerkdiagnose", "anspruchsvoll", "Ein Browser erreicht einen Webserver per IP-Adresse, aber nicht über seinen Namen. Welches Werkzeug prüft gezielt die Namensauflösung?", ["nslookup", "format", "chkdsk", "taskkill"], 0, "nslookup fragt DNS ab und hilft, Namen, Serverantworten und Records getrennt von der Webanwendung zu prüfen."),
    mc("net-062", "netzwerkdiagnose", "fortgeschritten", "Welches Werkzeug hilft, die Zwischenstationen auf dem Weg zu einem entfernten IP-Ziel sichtbar zu machen?", ["tracert", "ipconfig", "net user", "sfc"], 0, "tracert zeigt anhand schrittweise begrenzter Pakete die Hops auf einem Netzwerkpfad und kann Routingprobleme eingrenzen."),
    mc("net-063", "netzwerkdiagnose", "anspruchsvoll", "Ein PC erhält keine Netzwerkverbindung. Welche Prüfung gehört in einer schichtweisen Fehlersuche sinnvoll an den Anfang?", ["Zuerst physische Verbindung und Link-Status prüfen","Zuerst DNS ändern, ohne den Link zu prüfen","Zuerst das Gateway austauschen, ohne den Umfang der Störung einzugrenzen","Zuerst die Anwendung neu installieren, ohne andere Verbindungen zu testen"], 0, "Eine strukturierte Fehlersuche beginnt bei den Grundlagen und arbeitet sich über Link, IP, Routing, DNS und Anwendung vor."),
    mc("net-064", "uebertragungsmedien", "fortgeschritten", "Wofür dient ein Patchkabel in einer strukturierten Verkabelung typischerweise?", ["Es verbindet Anschlussstellen wie Netzwerkdose, Patchpanel und Switch","Es bildet die feste Installationsstrecke innerhalb der Gebäudewand","Es wandelt allein durch seine Steckverbindung elektrische in optische Signale um","Es verteilt einen Ethernet-Port passiv auf mehrere unabhängig sendende Endgeräte"], 0, "Patchkabel stellen die flexiblen Verbindungen zwischen Anschlüssen und aktiven Komponenten her; die feste Gebäudeverkabelung bleibt getrennt."),
    mc("net-065", "verkabelung", "grundlagen", "Was beschreibt S/FTP bei einem Twisted-Pair-Kabel?", ["Einen Gesamtschirm aus Geflecht und eine Folienschirmung der einzelnen Aderpaare", "Ein vollständig ungeschirmtes Kabel", "Ein Glasfaserkabel mit genau einem Lichtausbreitungsmodus", "Eine Kabelkategorie, die allein immer 100 Gbit/s garantiert"], 0, "Vor dem Schrägstrich steht der Gesamtschirm, danach die Schirmung der Paare: S bezeichnet Geflecht, F Folie. U/UTP ist ungeschirmt; F/UTP hat einen Folien-Gesamtschirm, aber ungeschirmte Paare. Schirmung und Übertragungskategorie sind verschiedene Angaben.")
  ],
  "it-grundlagen": [
    mc("base-056", "grundbegriffe", "fortgeschritten", "Welche Zuordnung beschreibt Hardware und Software korrekt?", ["Hardware sind physische Komponenten; Software sind die darauf verwendeten Programme","Hardware sind laufende Programme; Software sind deren physische Speicherbausteine","Hardware bezeichnet nur Eingabegeräte; Software bezeichnet sämtliche internen Bauteile","Hardware bezeichnet gespeicherte Dateien; Software bezeichnet die Verbindungen zwischen Geräten"], 0, "Beispiele für Hardware sind CPU, Monitor und Festplatte. Betriebssysteme und Anwendungen sind Software."),
    mc("base-057", "betriebssysteme", "fortgeschritten", "Welche Aufgabe erfüllt ein Betriebssystem für Anwendungen und Hardware?", ["Es verwaltet Prozesse, Speicher, Dateien und Gerätezugriffe","Es legt die Fachlogik jeder Anwendung fest","Es übersetzt jedes Anwendungsprogramm bereits beim Einschalten in Quellcode","Es übernimmt ausschließlich die grafische Darstellung, nicht die Ressourcenverwaltung"], 0, "Das Betriebssystem vermittelt zwischen Hardware und Anwendungen und setzt dabei auch Schutz- und Zugriffsgrenzen durch."),
    mc("base-058", "netzwerktypen", "fortgeschritten", "Welche Aussage unterscheidet Internet und Intranet korrekt?", ["Internet: globales Netz; Intranet: organisationsinternes Netz mit kontrolliertem Zugang","Internet: Funkverbindungen; Intranet: verkabelte Verbindungen","Internet: beliebige Protokolle; Intranet: ausschließlich ein vom Unternehmen erfundenes Protokoll","Internet: nur öffentliche Webseiten; Intranet: ausschließlich die Dateien eines einzelnen Computers"], 0, "Ein Intranet nutzt oft dieselben Netzwerktechniken wie das Internet, ist aber für eine abgegrenzte Organisation vorgesehen."),
    mc("base-059", "cloud", "anspruchsvoll", "Ein Entwicklungsteam stellt eigenen Code auf einer vom Anbieter betriebenen Laufzeitplattform bereit und verwaltet weder Betriebssystem noch Server. Welches Cloud-Modell passt?", ["PaaS", "IaaS", "SaaS", "On-Premises"], 0, "Platform as a Service stellt eine Plattform für Anwendungen bereit. Bei IaaS verwaltet das Team typischerweise Betriebssystem und Anwendungen selbst."),
    mc("base-060", "verteilte-systeme", "anspruchsvoll", "Welche Aussage unterscheidet einen Cluster von einem einzelnen leistungsstarken Server am treffendsten?", ["Ein Cluster besteht aus mehreren koordiniert zusammenarbeitenden Knoten","Ein Cluster ist ein einzelner Server mit mehreren Prozessorkernen","Ein Cluster bezeichnet mehrere Laufwerke im Gehäuse eines Servers","Ein Cluster entsteht bereits durch unverbundene Kopien derselben Serverinstallation"], 0, "Cluster verteilen Aufgaben über mehrere Systeme. Der konkrete Nutzen hängt von Architektur, Datenhaltung und Failover-Konzept ab.")
  ],
  "windows-netzwerke": [
    mc("win-net-036", "domäne", "fortgeschritten", "Warum ist eine Windows-Domäne für viele Arbeitsplätze mit zentralen Berechtigungen geeigneter als eine Arbeitsgruppe?", ["Identitäten und Richtlinien können zentral über Verzeichnisdienste gepflegt werden","Jeder Domänen-PC benötigt dauerhaft eine eigene Kopie aller Benutzerkennwörter im Klartext","Dateiberechtigungen entfallen in einer Domäne zugunsten einheitlichen Vollzugriffs","Die Domäne synchronisiert sämtliche lokal angelegten Konten automatisch zu einem Konto"], 0, "Eine Domäne zentralisiert Verwaltung, setzt aber korrektes DNS, Domain Controller und Betriebskonzepte voraus."),
    mc("win-net-037", "active-directory", "fortgeschritten", "Warum werden Benutzer- und Computerobjekte in getrennten Organisationseinheiten strukturiert?", ["Unterschiedliche Verwaltungszuständigkeiten und GPO-Verknüpfungen übersichtlich gestalten","Durch die OU-Trennung automatisch alle Zugriffsrechte zwischen beiden Objektarten sperren","Den Computern über ihre OU eine andere physische Netzwerkverbindung zuweisen","Die getrennten OUs ohne weitere Konfiguration in selbstständige Domänen umwandeln"], 0, "OUs bilden die Organisations- und Verwaltungsstruktur. Sie sind keine Sicherheitsgrenze und ersetzen keine Berechtigungen."),
    mc("win-net-038", "dns", "anspruchsvoll", "Warum ist DNS in einer Active-Directory-Domäne für die Anmeldung und den Domänenbeitritt so wichtig?", ["DNS liefert unter anderem die Standorte von DCs und AD-Diensten","DNS bestätigt bei jeder Anmeldung selbst die Übereinstimmung des Benutzerkennworts","DNS erzeugt anstelle des KDC die für einen Dienstzugriff benötigten Kerberos-Tickets","DNS entscheidet anhand von A-Records über die NTFS-Rechte des angemeldeten Benutzers"], 0, "AD veröffentlicht Dienstinformationen in DNS, insbesondere über SRV-Records. Darum sollten Domänenclients den internen AD-DNS nutzen."),
    mc("win-net-039", "active-directory", "anspruchsvoll", "Ein Computerobjekt wurde versehentlich gelöscht und der Active-Directory-Papierkorb ist aktiviert. Welche Wiederherstellung ist typischerweise am schonendsten?", ["Das gelöschte Objekt aus dem aktivierten AD-Papierkorb wiederherstellen","Ein neues Computerobjekt mit gleichem Namen als identischen Ersatz für die SID erzeugen","Nur den gleichnamigen DNS-A-Record neu anlegen und damit das AD-Objekt rekonstruieren","Den Computer lediglich in eine andere OU verschieben, ohne das gelöschte Objekt zurückzuholen"], 0, "Der AD-Papierkorb ermöglicht die Wiederherstellung gelöschter Objekte innerhalb der konfigurierten Aufbewahrungszeit."),
    mc("win-net-040", "gpo", "fortgeschritten", "Eine GPO enthält ausschließlich Computerkonfiguration. Welche Objekte müssen sich im Wirkungsbereich der Verknüpfung befinden, damit diese Einstellungen angewendet werden können?", ["Computerobjekte", "Nur Benutzerobjekte", "Nur DNS-Records", "Nur Gruppenrichtlinienobjekte selbst"], 0, "Computerkonfiguration richtet sich an Computerobjekte; Benutzerkonfiguration an Benutzerobjekte."),
    mc("win-net-041", "gpo", "anspruchsvoll", "Eine GPO ist an eine OU verknüpft, wird aber für eine Zielgruppe nicht angewendet. Welche Berechtigung sollte bei Security Filtering für die Zielgruppe vorhanden sein?", ["Lesen und Gruppenrichtlinie übernehmen auf der betreffenden GPO","Nur Lesen auf der GPO, aber kein Recht zum Übernehmen der Richtlinie","Nur Einstellungen bearbeiten auf der GPO, ohne Recht zum Übernehmen","Nur Mitgliedschaft in einer OU, ohne passende Rechte auf der Richtlinie"], 0, "Security Filtering beschränkt die Anwendung einer verknüpften GPO auf berechtigte Sicherheitsprinzipale."),
    mc("win-net-042", "berechtigungen", "anspruchsvoll", "Ein Projektteam erhält Zugriff auf eine Abteilungsfreigabe. Welches Vorgehen ist langfristig am wartbarsten?", ["Eine Ressourcengruppe mit den benötigten Rechten verwenden und Teammitglieder über eine Rollengruppe zuordnen.", "Jede Berechtigung direkt an einzelne Benutzerkonten vergeben.", "Allen Teammitgliedern Domain Admins geben.", "Die Freigabe ohne Berechtigungen veröffentlichen."], 0, "Gruppenbasierte Berechtigungen erleichtern Rollenwechsel, Audits und das Entfernen von Zugängen."),
    mc("win-net-043", "berechtigungen", "fortgeschritten", "Warum ist ein explizites Deny in NTFS-Berechtigungen mit Vorsicht einzusetzen?", ["Eine Verweigerung kann trotz erlaubender Gruppenrechte Zugriff verhindern","Eine Verweigerung wird bei Mitgliedschaft in mehreren Gruppen automatisch ignoriert","Ein explizites Deny betrifft nur die Anzeige des Ordners und nicht den eigentlichen Zugriff","Ein Deny erzeugt für alle zuvor berechtigten Konten automatisch eine erlaubende Ausnahme"], 0, "Explizites Deny hat besondere Wirkung. Meist sind klare Gruppenmitgliedschaften und gezielte Allow-Rechte leichter wartbar."),
    mc("win-net-044", "dateiserver", "fortgeschritten", "Welchen Zweck erfüllt eine Ordnerumleitung für Dokumente in einer Domäne?", ["Der gewohnte Benutzerordner verweist auf einen zentralen Speicherpfad","Alle Anwendungen des Benutzers werden samt Installation in einen Netzwerkordner kopiert","Eine bloße Laufwerkszuordnung ersetzt automatisch den Speicherort aller Benutzerordner","Das vollständige Benutzerprofil wird bei jedem Dateizugriff zwischen DCs repliziert"], 0, "Ordnerumleitung kann zentrale Sicherung und Zugriff unterstützen; Verfügbarkeit, Offlineverhalten und Rechte müssen geplant werden."),
    mc("win-net-045", "dateiserver", "fortgeschritten", "Welche Zeichenfolge ist ein UNC-Pfad zu einer Freigabe namens Projekte auf dem Server FILE01?", ["\\\\FILE01\\Projekte", "C:\\FILE01\\Projekte", "https://FILE01/Projekte", "FILE01:Projekte"], 0, "UNC-Pfade beginnen mit zwei Backslashes, gefolgt von Servername und Freigabename."),
    mc("win-net-046", "remoteverwaltung", "anspruchsvoll", "Ein Windows-Server soll per PowerShell-Remoting über WS-Management verwaltet werden. Berechtigungen und Authentisierung passen. Welche technische Voraussetzung muss auf dem Server erfüllt sein?", ["WinRM mit Listener und einer passenden Firewallfreigabe","Remotedesktop mit RDP-Listener und freigegebenem TCP-Port 3389","Der Dateiserverdienst mit einer SMB-Freigabe über TCP-Port 445","Ein IIS-Webserver mit einer HTTPS-Website über TCP-Port 443"], 0, "Für den ausdrücklich genannten WS-Management-Weg benötigt PowerShell-Remoting WinRM, einen erreichbaren Listener und eine passende Konfiguration. RDP, SMB oder eine gewöhnliche IIS-Website ersetzen diesen Endpunkt nicht. PowerShell-Remoting über SSH wäre ein anderer Transportweg und ist hier nicht gemeint."),
    mc("win-net-047", "active-directory", "fortgeschritten", "Warum ist ein zweiter Domain Controller kein Ersatz für ein Backup von Active Directory?", ["Auch Fehler oder Löschungen können auf den zweiten DC repliziert werden","Die Replikation bewahrt jeden früheren Objektstand automatisch unbegrenzt auf","Jeder zusätzliche DC stellt einen zeitlich eingefrorenen Stand der AD-Datenbank bereit","Ein zweiter DC ist allein durch seine Rolle vom Zugriff kompromittierter Domänenadmins getrennt"], 0, "Replikation erhöht Verfügbarkeit, aber nicht automatisch die Möglichkeit, einen früheren korrekten Zustand wiederherzustellen."),
    mc("win-net-048", "gpo", "anspruchsvoll", "Eine GPO-Verknüpfung ist als 'Erzwungen' markiert. Der Zielcomputer wird jedoch durch die Sicherheitsfilterung ausgeschlossen. Wird diese Filterung allein durch 'Erzwungen' aufgehoben?", ["Nein. Erzwungen beeinflusst Vererbung und Vorrang, umgeht aber nicht die Sicherheitsfilterung.", "Ja. Erzwungen gibt jedem Computer automatisch Lesen und Übernehmen.", "Ja, allerdings nur bei Computern ohne DNS-Server.", "Nein, weil erzwungene GPOs grundsätzlich niemals auf Computer wirken."], 0, "Erzwungen ist kein Ersatz für den passenden Geltungsbereich. Verknüpfung, Filter und Berechtigungen müssen weiterhin stimmen. Loopback wird gesondert geprüft und löst eine andere Aufgabe."),
    mc("win-net-049", "domäne", "anspruchsvoll", "Ein Benutzer kann sich mit seinem Domänenkonto anmelden, aber eine Freigabe bleibt gesperrt. Welche Aussage ist fachlich richtig?", ["Die bestätigte Identität benötigt zusätzlich die passenden Zugriffsrechte","Eine erfolgreiche Anmeldung ersetzt die Prüfung der Freigabe- und NTFS-Berechtigungen","Jeder angemeldete Domänenbenutzer erhält dadurch mindestens Änderungsrechte auf jeder Freigabe","Die Authentisierung überträgt automatisch die Rechte des Domain Controllers auf den Benutzer"], 0, "Authentisierung beantwortet, wer jemand ist; Autorisierung bestimmt, was diese Identität tun darf."),
    mc("win-net-050", "gpo", "grundlagen", "Eine GPO wurde erstellt und konfiguriert, aber noch nirgendwo verknüpft. Warum verteilt sie ihre Einstellungen nicht allein dadurch an alle Domänencomputer?", ["Erst Verknüpfungen und Filter legen den wirksamen Empfängerkreis fest","Das Erstellungsdatum einer GPO bestimmt ohne Verknüpfung automatisch ihre Ziel-OU","Der Name der GPO muss nur mit dem Namen der Zielgruppe übereinstimmen","Die Replikation der GPO wendet sie ohne Verknüpfung auf alle Domänencomputer an"], 0, "Eine erstellte GPO ist nicht automatisch überall angewendet. Verknüpfungen an Standort, Domäne oder OU und die jeweiligen Filter bestimmen ihre Wirkung. Eine GPO kann mehrere Links haben."),
    mc("win-net-051", "sicherheit", "anspruchsvoll", "Warum sollte ein Dienstkonto von einem persönlichen Benutzerkonto getrennt sein?", ["Dienstrechte und Aktionen bleiben unabhängig von einer persönlichen Identität zuordenbar","Ein eigenes Dienstkonto ordnet jede Dienstaktion automatisch einem bestimmten Mitarbeiter zu","Alle getrennten Dienstkonten erhalten dadurch automatisch identische Administratorrechte","Die Trennung ersetzt die Pflege der Dienstkennwörter und ihrer Zugriffsberechtigungen"], 0, "Getrennte Dienstidentitäten unterstützen Least Privilege und reduzieren die Auswirkung kompromittierter Benutzerkonten."),
    mc("win-net-052", "dns", "anspruchsvoll", "Ein Domänenclient nutzt einen öffentlichen DNS-Resolver und kann interne AD-Dienste nicht finden. Auch öffentliche Namen sollen weiterhin auflösbar sein. Welche Konfiguration ist geeignet?", ["Am Client internes DNS nutzen; öffentliche Namen über dessen Weiterleitung oder Rekursion auflösen","Am Client öffentliches DNS beibehalten und das interne DNS nur als Standardgateway eintragen","Am Client öffentliches DNS zuerst und internes DNS als namensabhängigen Ersatzresolver eintragen","Am Client ausschließlich die lokale hosts-Datei pflegen, um auch alle AD-SRV-Anfragen zu ersetzen"], 0, "Der Client verwendet einen DNS-Dienst, der die internen AD-Zonen kennt. Dieser kann öffentliche Namen über geeignete Weiterleitung oder Rekursion auflösen. Ein alternativer DNS-Server ist kein zuverlässiger namensabhängiger Ersatz für negative Antworten des bevorzugten Servers. Die hosts-Datei ersetzt keine SRV-Records."),
    mc("win-net-053", "berechtigungen", "fortgeschritten", "Warum dürfen Freigabeberechtigungen und NTFS-Berechtigungen nicht getrennt betrachtet werden?", ["Beim Netzwerkzugriff müssen beide Ebenen Zugriff erlauben; die wirksame Berechtigung ist dadurch begrenzt.", "NTFS gilt nur bei USB-Sticks.", "Freigaberechte gelten immer auch lokal.", "Beide Ebenen verschlüsseln Dateien."], 0, "Für lokale Zugriffe gelten nur NTFS-Berechtigungen; über eine Freigabe wirken NTFS und Freigabe zusammen."),
    mc("win-net-054", "active-directory", "fortgeschritten", "Was ist eine Organisationseinheit in Active Directory nicht?", ["Eine vollständige Sicherheitsgrenze, die Berechtigungen automatisch voneinander trennt", "Ein Container zur Strukturierung von Objekten", "Ein möglicher Zielpunkt für GPO-Verknüpfungen", "Ein Bereich für Verwaltungsdelegation"], 0, "OUs organisieren Objekte und unterstützen Delegation sowie GPOs. Zugriffsschutz wird weiterhin über Berechtigungen und Gruppen geregelt."),
    mc("win-net-055", "gpo", "anspruchsvoll", "Zwei an derselben OU verknüpfte GPOs setzen einen Wert unterschiedlich. Beide gelten für den Zielcomputer und keine Verknüpfung ist erzwungen. Was muss zur Bestimmung des Vorrangs geprüft werden?", ["Die Verknüpfungsreihenfolge der beiden GPOs an dieser OU","Das Erstellungsdatum der beiden GPO-Objekte im Verzeichnis","Die Reihenfolge, in der der Administrator die beiden GPOs zuletzt geöffnet hat","Die Reihenfolge der GPO-Dateien im Verzeichnis des SYSVOL-Ordners"], 0, "Unter den genannten Bedingungen entscheidet die Linkreihenfolge an der OU. Die Verknüpfung mit der Nummer 1 hat die höchste Priorität und wird zuletzt verarbeitet. Dateinamen, Öffnungszeitpunkte oder Erstellungsdaten bestimmen diesen Vorrang nicht.")
  ],
  "windows-server-admin": [
    mc("srv-056", "verwaltung", "fortgeschritten", "Welches Werkzeug eignet sich auf einem Windows-Server mit Desktop Experience besonders zum Installieren und Verwalten von Serverrollen auf lokalen und entfernten Servern?", ["Server Manager", "Datenträgerbereinigung", "Paint", "ARP-Cache"], 0, "Server Manager bündelt Rollen, Features und die Verwaltung mehrerer Windows-Server."),
    mc("srv-057", "verwaltung", "fortgeschritten", "Wofür steht die Microsoft Management Console (MMC) in der Windows-Administration praktisch?", ["Sie stellt einen Rahmen für administrative Snap-Ins bereit","Sie speichert als Verzeichnisdienst die Benutzerobjekte einer Windows-Domäne","Sie führt ausschließlich PowerShell-Skripte ohne grafische Verwaltungsbausteine aus","Sie sammelt als zentrales Backup-Repository sämtliche Serverkonfigurationen automatisch"], 0, "MMC ist ein Rahmen für Verwaltungs-Snap-Ins, beispielsweise zur Ereignisanzeige oder Computerverwaltung."),
    mc("srv-058", "verwaltung", "anspruchsvoll", "Ein Administrator möchte von einem Windows-Client aus Rollen und Features eines entfernten Servers verwalten. Welche Sammlung von Werkzeugen ist dafür vorgesehen?", ["RSAT", "SFC", "EFS", "APIPA"], 0, "Remote Server Administration Tools stellen Verwaltungswerkzeuge wie Server Manager, MMC-Snap-Ins und PowerShell-Module bereit."),
    mc("srv-059", "verwaltung", "fortgeschritten", "Welche Aussage beschreibt Windows Admin Center zutreffend?", ["Eine browserbasierte Verwaltungsoberfläche für Windows-Server und Infrastruktur","Ein Cloud-Verzeichnisdienst zur Speicherung von Benutzeridentitäten und Anmeldungen","Ein Dienst zur automatischen Bereitstellung von Betriebssystemabbildern per PXE","Ein Sicherungsformat für die konsistente Archivierung virtueller Festplatten"], 0, "Windows Admin Center ergänzt klassische Verwaltungswerkzeuge und eignet sich besonders für zentrale, browserbasierte Administration."),
    mc("srv-060", "server-core", "fortgeschritten", "Ein Server Core benötigt zunächst eine Netzwerkkonfiguration, Domänenbeitritt und Update-Einstellungen. Welches lokale Werkzeug ist dafür besonders vorgesehen?", ["SConfig", "Notepad", "nslookup", "Disk Cleanup"], 0, "SConfig unterstützt auf Server Core häufige Grundkonfigurationen wie Netzwerk, Domänenbeitritt, Updates und Remoteverwaltung."),
    mc("srv-061", "fileserver", "fortgeschritten", "Ein Benutzer soll eine Freigabe Daten auf dem Server FS01 öffnen. Welcher Pfad ist korrekt?", ["\\\\FS01\\Daten", "C:\\FS01\\Daten", "FS01:Daten", "http://FS01/Daten"], 0, "Eine Windows-Dateifreigabe wird über einen UNC-Pfad mit Server- und Freigabename angesprochen."),
    mc("srv-062", "speicher", "anspruchsvoll", "Eine virtuelle Festplatte soll 3 TB groß sein. Warum ist das klassische VHD-Format dafür ungeeignet?", ["Die VHD-Kapazitätsgrenze liegt bei ungefähr 2 TB; VHDX unterstützt mehr","Die VHD-Grenze wird allein durch den freien Speicher des Hostvolumes bestimmt","Ein dynamisch wachsendes VHD hat unabhängig vom Format keine maximale Kapazität","Das Anschließen desselben VHD an einen SCSI-Controller hebt dessen Formatgrenze auf"], 0, "VHDX ist der modernere virtuelle Festplattentyp und unterstützt größere Kapazitäten sowie weitere Verbesserungen."),
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

/*
  Ergänzende Grundlagenfragen: Diese Fragen erklären zentrale Begriffe, die
  später in den Anwendungs- und Szenariofragen vorausgesetzt werden. Sie
  ergänzen den Pool, ohne gleichartige Szenariofragen zu ersetzen.
*/
const QUESTION_POOL_FOUNDATION_EXTENSION = {
  "it-sicherheit": [
    mc("sec-base-001", "risikomanagement", "grundlagen", "Was ist eine Schwachstelle (Vulnerability) in der IT-Sicherheit?", ["Ein Fehler, eine Fehlkonfiguration oder eine Schwäche, die von einer Bedrohung ausgenutzt werden kann", "Jeder bereits eingetretene Sicherheitsvorfall", "Ein Backup, das außerhalb des Unternehmens gespeichert wird", "Eine ausschließlich organisatorische Sicherheitsrichtlinie"], 0, "Eine Schwachstelle ist eine ausnutzbare Schwäche. Sie wird erst zusammen mit einer Bedrohung und möglichen Auswirkungen zu einem konkreten Risiko."),
    mc("sec-base-002", "zugriffsschutz", "grundlagen", "Was beschreibt Mehrfaktor-Authentisierung?", ["Die Anmeldung mit mindestens zwei unabhängigen Faktoren, etwa Passwort und Sicherheitsschlüssel", "Die Anmeldung mit zwei unterschiedlichen Passwörtern", "Die Verwendung eines besonders langen Benutzernamens", "Die automatische Anmeldung an mehreren Computern"], 0, "Mehrfaktor-Authentisierung kombiniert verschiedene Faktorarten, beispielsweise Wissen, Besitz oder ein biometrisches Merkmal. Zwei Passwörter wären weiterhin nur ein Faktor: Wissen.")
  ],
  "sql": [
    mc("sql-base-001", "datenmodell", "grundlagen", "Was ist die zentrale Aufgabe eines Primärschlüssels in einer Tabelle?", ["Jeden Datensatz eindeutig zu identifizieren", "Die Tabelle nach einer Spalte zu sortieren", "Alle Daten in einer Spalte zu verschlüsseln", "Abfragen aus mehreren Tabellen automatisch zu verbinden"], 0, "Ein Primärschlüssel identifiziert einen Datensatz eindeutig und darf nicht NULL sein. Er ist eine wichtige Grundlage für Beziehungen zwischen Tabellen."),
    mc("sql-base-002", "transaktionen", "grundlagen", "Was beschreibt eine Datenbanktransaktion?", ["Eine zusammengehörige Folge von Änderungen, die vollständig oder gar nicht wirksam wird", "Eine Sicherungskopie jeder einzelnen Tabelle", "Eine Abfrage, die Daten ausschließlich sortiert", "Eine automatisch erzeugte Tabellenbeziehung"], 0, "Transaktionen fassen zusammengehörige Änderungen zusammen. Bei einem Fehler kann die gesamte Einheit zurückgerollt werden, damit kein halbfertiger Zustand bleibt.")
  ],
  "ipv4": [
    mc("ip-base-001", "subnetting", "grundlagen", "Welche Aufgabe hat eine IPv4-Subnetzmaske?", ["Sie trennt bei einer IPv4-Adresse den Netzanteil vom Hostanteil", "Sie verschlüsselt den Netzwerkverkehr", "Sie ersetzt die MAC-Adresse eines Geräts", "Sie legt den DNS-Server für einen Client fest"], 0, "Die Subnetzmaske kennzeichnet die Bits des Netzanteils mit Einsen; die übrigen Bits gehören zum Hostanteil."),
    mc("ip-base-002", "dhcp", "grundlagen", "Wofür wird DHCP in einem IPv4-Netz eingesetzt?", ["Zur automatischen Zuweisung von IP-Konfigurationen wie Adresse, Maske, Gateway und DNS", "Zur Verschlüsselung von Ethernet-Frames", "Zur Übersetzung von Domainnamen in IP-Adressen", "Zur Weiterleitung zwischen verschiedenen IP-Netzen"], 0, "DHCP verteilt zentrale Netzparameter. DNS löst Namen auf, während Router zwischen Netzen weiterleiten.")
  ],
  "netzwerke": [
    mc("net-base-001", "vlan", "grundlagen", "Was ist ein VLAN?", ["Eine logische Aufteilung eines Switch-Netzes in getrennte Broadcast-Domänen", "Ein Kabeltyp für besonders schnelle Netzwerkverbindungen", "Ein Verfahren zur Verschlüsselung von WLAN-Verbindungen", "Eine öffentliche IPv4-Adresse für einen Router"], 0, "VLANs segmentieren ein physisches Switch-Netz logisch. Kommunikation zwischen VLANs benötigt Routing, etwa über einen Router oder Layer-3-Switch."),
    mc("net-base-002", "ethernet", "grundlagen", "Wofür wird eine MAC-Adresse in einem Ethernet-LAN hauptsächlich verwendet?", ["Zur lokalen Zustellung von Frames auf Layer 2", "Zur weltweiten eindeutigen Adressierung im Internet", "Zur Vergabe von Subnetzmasken", "Zur Verschlüsselung von DNS-Anfragen"], 0, "Eine MAC-Adresse dient der Layer-2-Kommunikation im lokalen Netz. Für die Kommunikation zwischen IP-Netzen werden IP-Adressen und Routing verwendet.")
  ],
  "it-grundlagen": [
    mc("base-base-001", "betriebssysteme", "grundlagen", "Was ist ein Prozess im Betriebssystemkontext?", ["Eine gerade ausgeführte Instanz eines Programms mit zugeordneten Ressourcen", "Ein physischer Rechenkern einer CPU", "Eine dauerhafte Sicherungskopie einer Datei", "Eine Netzwerkverbindung zwischen zwei Servern"], 0, "Ein Prozess ist die laufende Instanz eines Programms. Das Betriebssystem verwaltet dafür unter anderem Speicher, Ausführungszeit und Berechtigungen."),
    mc("base-base-002", "schnittstellen", "grundlagen", "Was ist eine API?", ["Eine definierte Schnittstelle, über die Programme Funktionen oder Daten anderer Programme nutzen können", "Ein Dateisystem für virtuelle Maschinen", "Ein Hardwareanschluss für Netzwerkkabel", "Eine Methode zur Komprimierung von Backups"], 0, "APIs definieren, wie Software miteinander kommuniziert. Sie ermöglichen beispielsweise die strukturierte Nutzung von Daten oder Funktionen eines Dienstes.")
  ],
  "windows-netzwerke": [
    mc("win-base-001", "active-directory", "grundlagen", "Was ist Active Directory in einer Windows-Domänenumgebung?", ["Ein Verzeichnisdienst für zentrale Identitäten, Computer und weitere Domänenobjekte","Ein Dateisystem zur lokalen Speicherung von Ordnern und Zugriffslisten","Ein Dienst zur automatischen Vergabe von IP-Adressen und Netzwerkeinstellungen","Ein Werkzeug zur Erfassung von Hardwareinventar ohne Verwaltung von Benutzeridentitäten"], 0, "Active Directory speichert und organisiert Domänenobjekte wie Benutzer, Gruppen und Computer und unterstützt zentrale Authentisierung sowie Verwaltung."),
    mc("win-base-002", "domäne", "grundlagen", "Was beschreibt eine Windows-Domäne am treffendsten?", ["Eine zentral verwaltete Umgebung für Benutzer, Computer, Richtlinien und Berechtigungen", "Eine Sammlung unabhängiger PCs ohne zentrale Anmeldung", "Ein einzelner freigegebener Ordner auf einem Server", "Eine feste IP-Adressklasse in IPv4"], 0, "Eine Domäne ermöglicht zentrale Verwaltung und Anmeldung. Das unterscheidet sie grundlegend von einer Arbeitsgruppe.")
  ],
  "windows-server-admin": [
    mc("srv-base-001", "serverrollen", "grundlagen", "Was ist eine Serverrolle unter Windows Server?", ["Eine installierbare Sammlung von Diensten für eine Aufgabe wie DNS, DHCP oder Dateifreigaben", "Ein Benutzerkonto mit lokalen Administratorrechten", "Eine Lizenzart für Windows-Clients", "Ein virtueller Hyper-V-Switch"], 0, "Serverrollen stellen gezielt Dienste für bestimmte Serveraufgaben bereit. Sie können über Server Manager oder PowerShell installiert und verwaltet werden."),
    mc("srv-base-002", "fileserver", "grundlagen", "Was ist eine Windows-Dateifreigabe?", ["Ein über das Netzwerk bereitgestellter Ordner, auf den berechtigte Benutzer per UNC-Pfad zugreifen können", "Eine lokale Kopie eines Ordners auf jedem Client", "Eine Methode zum Verschlüsseln von Festplatten", "Eine automatisch vergebene IP-Adresse"], 0, "Eine Freigabe macht einen Ordner im Netzwerk erreichbar. Der Zugriff wird durch Freigabe- und gegebenenfalls NTFS-Berechtigungen gesteuert.")
  ]
};

const QUESTION_POOL_ORDER_EXTENSION = {
  "ipv4": [
    orderQuestion("ip-order-001", "subnetting", "grundlagen", "Bringe die Rechenschritte in die richtige Reihenfolge, um die Anzahl nutzbarer Hostadressen in einem klassischen IPv4-Subnetz zu bestimmen.", ["Die Präfixlänge von 32 abziehen und so die Zahl der Host-Bits bestimmen", "2 hoch die Anzahl der Host-Bits berechnen", "Für Netzwerk- und Broadcastadresse 2 abziehen"], "Zuerst wird aus dem Präfix die Zahl der Host-Bits ermittelt. Dann ergibt 2^n die Zahl aller Adressen; im klassischen IPv4-Modell bleiben nach Abzug von Netzwerk- und Broadcastadresse 2^n − 2 nutzbare Hostadressen." )
  ],
  "netzwerke": [
    orderQuestion("net-order-001", "osi", "grundlagen", "Bringe die sieben Schichten des OSI-Modells von Schicht 1 bis Schicht 7 in die richtige Reihenfolge.", ["Bitübertragungsschicht", "Sicherungsschicht", "Vermittlungsschicht", "Transportschicht", "Sitzungsschicht", "Darstellungsschicht", "Anwendungsschicht"], "Die Reihenfolge von unten nach oben lautet: Bitübertragungs-, Sicherungs-, Vermittlungs-, Transport-, Sitzungs-, Darstellungs- und Anwendungsschicht. Sie erleichtert die systematische Einordnung von Netzwerkfunktionen und Fehlern.")
  ]
};

const QUESTION_POOL_MATCH_EXTENSION = {
  "netzwerke": [
    matchQuestion("net-match-001", "dhcp", "grundlagen", "Ordne jeder Nachricht des DHCP-DORA-Prozesses die passende Aufgabe zu.", [
      { left: "Discover", right: "Der Client sucht im Netzwerk nach verfügbaren DHCP-Servern." },
      { left: "Offer", right: "Ein DHCP-Server bietet dem Client eine IP-Konfiguration an." },
      { left: "Request", right: "Der Client fordert die angebotene Konfiguration eines Servers an." },
      { left: "Acknowledge", right: "Der DHCP-Server bestätigt die Zuweisung der Konfiguration." }
    ], "Discover startet die Suche, Offer liefert ein Angebot, Request wählt beziehungsweise fordert das Angebot an und Acknowledge bestätigt die Zuweisung. Der Ablauf und die Zuordnung ergänzen sich, prüfen aber unterschiedliche Aspekte.")
  ],
  "windows-server-admin": [
    matchQuestion("srv-match-001", "active-directory", "fortgeschritten", "Ordne jeder FSMO-Rolle ihre zentrale Aufgabe zu.", [
      { left: "Schema Master", right: "Verarbeitet Änderungen am Active-Directory-Schema." },
      { left: "Domain Naming Master", right: "Fügt Domänen im Forest hinzu oder entfernt sie daraus." },
      { left: "RID Master", right: "Verteilt RID-Pools für neue Sicherheitsprinzipale an Domain Controller." },
      { left: "PDC Emulator", right: "Behandelt unter anderem Kennwortänderungen und dient in der Gesamtstruktur-Stammdomäne als maßgebliche Zeitquelle." },
      { left: "Infrastructure Master", right: "Aktualisiert Verweise auf Objekte aus anderen Domänen." }
    ], "Schema Master und Domain Naming Master gibt es je Forest; RID Master, PDC Emulator und Infrastructure Master je Domäne. Die Rollen verhindern Konflikte bei besonderen Verzeichnisoperationen.")
  ]
};

/*
  Kurze Begriffsabfragen für die Grundlagenstufe. Sie schaffen ein solides
  Vokabular für die komplexeren Anwendungs- und Szenariofragen, ohne diese zu
  verdrängen.
*/
const QUESTION_POOL_TERM_EXTENSION = {
  "it-sicherheit": [
    mc("sec-term-001", "social-engineering", "grundlagen", "Was ist Phishing?", ["Der Versuch, über täuschend echte Nachrichten oder Webseiten vertrauliche Informationen zu erlangen", "Die automatische Installation von Sicherheitsupdates", "Die Verschlüsselung einer Festplatte", "Eine Methode, IP-Adressen dynamisch zu vergeben"], 0, "Phishing nutzt Täuschung und oft Zeitdruck, um etwa Zugangsdaten oder Zahlungsinformationen zu erlangen. Die Prüfung von Absender, Zieladresse und Kontext ist wichtig."),
    mc("sec-term-002", "patchmanagement", "grundlagen", "Was ist ein Sicherheitsupdate?", ["Eine Aktualisierung zur Behebung bekannter Sicherheitslücken oder Sicherheitsfehler","Eine Kopie des letzten funktionsfähigen Systemstands zur späteren Wiederherstellung","Eine Einstellung, die festlegt, welche Benutzer auf bestimmte Dateien zugreifen dürfen","Eine Prüfung, die vorhandene Schwachstellen meldet, ohne Software zu verändern"], 0, "Sicherheitsupdates reduzieren bekannte Angriffsflächen. Sie sollten geregelt getestet und zeitnah verteilt werden.")
  ],
  "sql": [
    mc("sql-term-001", "datenmodell", "grundlagen", "Was ist ein Fremdschlüssel in einer relationalen Datenbank?", ["Eine Spalte oder Spaltenkombination, die auf einen passenden Schlüssel einer anderen Tabelle verweist", "Ein automatisch erzeugtes Kennwort für die Datenbank", "Eine Spalte, die jeden Datensatz derselben Tabelle eindeutig kennzeichnet", "Eine Sortierreihenfolge für Abfrageergebnisse"], 0, "Fremdschlüssel bilden Beziehungen zwischen Tabellen ab und können verhindern, dass auf nicht vorhandene Datensätze verwiesen wird."),
    mc("sql-term-002", "abfragen", "grundlagen", "Was ist eine SQL-Abfrage (Query)?", ["Eine Anweisung, mit der Daten aus einer Datenbank gezielt abgerufen oder ausgewertet werden", "Eine physische Kopie einer Datenbank auf einem anderen Server", "Ein Dateisystem für Tabellen", "Eine Methode zur Verschlüsselung von Passwörtern"], 0, "Eine Query ist typischerweise eine SELECT-Abfrage. Sie kann Daten filtern, verbinden, gruppieren und auswerten, ohne die Daten zwingend zu verändern.")
  ],
  "ipv4": [
    mc("ip-term-001", "adressierung", "grundlagen", "Was ist eine Broadcastadresse in einem klassischen IPv4-Subnetz?", ["Eine Adresse, über die eine Nachricht an alle Hosts desselben Subnetzes gesendet wird", "Die erste nutzbare Hostadresse eines Subnetzes", "Die öffentliche Adresse eines DNS-Servers", "Eine Adresse, die nur ein einzelner Router verwendet"], 0, "Die Broadcastadresse kennzeichnet alle Hosts eines klassischen IPv4-Subnetzes gleichzeitig und ist daher nicht als normale Hostadresse nutzbar."),
    mc("ip-term-002", "dhcp", "grundlagen", "Was bezeichnet APIPA bei IPv4?", ["Eine automatisch vergebene Link-Local-Adresse aus 169.254.0.0/16, wenn kein DHCP-Lease verfügbar ist", "Einen privaten IPv4-Adressbereich für Unternehmensnetze", "Ein Routing-Protokoll für das Internet", "Eine Verschlüsselung für WLAN-Verbindungen"], 0, "APIPA-Adressen deuten häufig darauf hin, dass ein Client keinen DHCP-Server erreichen oder keinen Lease erhalten konnte.")
  ],
  "netzwerke": [
    mc("net-term-001", "protokolle", "grundlagen", "Was ist ein Netzwerkprotokoll?", ["Ein Satz von Regeln und Datenformaten für die Kommunikation zwischen Systemen","Eine Aufzeichnung von Netzwerkereignissen und Fehlermeldungen","Eine Übersicht über Kabelwege und die räumliche Anordnung aller angeschlossenen Geräte","Eine Liste erlaubter Zugriffe für Benutzer auf freigegebene Ordner und Drucker"], 0, "Netzwerkprotokolle definieren, wie Systeme Daten austauschen. Beispiele sind HTTP, DNS, DHCP oder TCP."),
    mc("net-term-002", "ethernet", "grundlagen", "Was ist ein Ethernet-Frame?", ["Eine Datenübertragungseinheit auf Layer 2 mit unter anderem Quell- und Ziel-MAC-Adresse", "Ein IP-Paket, das zwischen verschiedenen Netzen geroutet wird", "Ein WLAN-Kennwort für einen Access Point", "Eine Konfiguration für einen DHCP-Bereich"], 0, "Ein Ethernet-Frame transportiert Daten im lokalen Netz. Switches verwenden die darin enthaltenen MAC-Adressen für die Weiterleitung auf Layer 2.")
  ],
  "it-grundlagen": [
    mc("base-term-001", "virtualisierung", "grundlagen", "Was ist ein Hypervisor?", ["Eine Software- oder Firmware-Schicht, die virtuelle Maschinen erstellt und verwaltet", "Ein Dateisystem für USB-Datenträger", "Ein Protokoll zur Namensauflösung", "Ein physischer Rechenkern einer CPU"], 0, "Ein Hypervisor verteilt Hardware-Ressourcen an virtuelle Maschinen. Typ-1-Hypervisor laufen direkt auf der Hardware, Typ-2-Hypervisor auf einem Betriebssystem."),
    mc("base-term-002", "virtualisierung", "grundlagen", "Was ist ein Container in der IT?", ["Eine isolierte Ausführungsumgebung für Anwendungen, die üblicherweise den Kernel des Host-Betriebssystems mitnutzt", "Eine vollständige virtuelle Maschine mit eigenem Betriebssystemkern", "Ein verschlüsselter Datenträger für Backups", "Ein physischer Netzwerkschrank"], 0, "Container kapseln Anwendungen und ihre Abhängigkeiten, teilen aber in der Regel den Kernel des Hosts. Dadurch starten sie oft schneller als vollständige virtuelle Maschinen." )
  ],
  "windows-netzwerke": [
    mc("win-term-001", "gpo", "grundlagen", "Was ist eine Gruppenrichtlinie (GPO) in einer Windows-Domäne?", ["Eine verwaltete Sammlung von Einstellungen für Benutzer und Computer","Eine Mitgliedschaftsliste, die Benutzerkonten zu einer Sicherheitsgruppe zusammenfasst","Eine Vertrauensbeziehung, die den Zugriff zwischen zwei AD-Domänen ermöglicht","Eine Zugriffssteuerungsliste, die ausschließlich an einer einzelnen Datei gespeichert ist"], 0, "GPOs verteilen beispielsweise Kennwort-, Desktop- oder Sicherheitseinstellungen zentral an Benutzer und Computer in einer Domäne."),
    mc("win-term-002", "authentisierung", "grundlagen", "Was ist Kerberos in einer Windows-Domäne?", ["Ein Authentisierungsprotokoll mit zeitlich begrenzten Tickets","Ein Verzeichniszugriffsprotokoll zum Lesen und Ändern von AD-Objekten","Ein Namensauflösungsprotokoll zum Auffinden von Rechnern und Diensten","Ein Dateizugriffsprotokoll zum Übertragen von Daten über Netzwerkfreigaben"], 0, "Kerberos ermöglicht die Authentifizierung in Active Directory über Tickets. Eine zuverlässige Zeitsynchronisation ist wichtig, weil die Tickets zeitlich begrenzt gültig sind.")
  ],
  "windows-server-admin": [
    mc("srv-term-001", "speicher", "grundlagen", "Was ist RAID?", ["Ein Verbund mehrerer Laufwerke, der je nach RAID-Level Leistung, Redundanz oder beides verbessern kann", "Eine Verschlüsselungsmethode für Windows-Benutzerkonten", "Ein Protokoll zur dynamischen IP-Adressvergabe", "Ein Dateiformat für virtuelle Festplatten"], 0, "RAID fasst Laufwerke logisch zusammen. Welchen Schutz oder welche Kapazität es bietet, hängt vom verwendeten RAID-Level ab; RAID ersetzt kein Backup."),
    mc("srv-term-002", "sicherheit", "grundlagen", "Was ist BitLocker?", ["Eine Windows-Funktion zur Verschlüsselung von Datenträgern und zum Schutz gespeicherter Daten", "Ein Dienst zur Auflösung von DNS-Namen", "Eine Serverrolle zur Dateifreigabe", "Ein Werkzeug zum Verwalten von Gruppenrichtlinien"], 0, "BitLocker schützt Daten auf verlorenen oder gestohlenen Datenträgern vor unbefugtem Zugriff. Es ersetzt weder Zugriffsrechte noch Backups.")
  ]
};

const QUESTION_POOL_PERMISSION_EXTENSION = {
  "windows-netzwerke": [
    mc("win-perm-001", "berechtigungen", "fortgeschritten", "Welche Aussage beschreibt die Priorität von explizit gesetzten gegenüber vererbten NTFS-Berechtigungen korrekt?", ["Direkt auf dem Objekt gesetzte Berechtigungen stehen in der DACL vor geerbten Berechtigungen und haben bei einem Konflikt Vorrang.", "Geerbte Berechtigungen haben immer Vorrang, weil sie vom übergeordneten Ordner stammen.", "Ein Ordner kann niemals zugleich explizite und geerbte Berechtigungen enthalten.", "Vererbte Berechtigungen wirken ausschließlich bei Zugriff über eine Netzwerkfreigabe."], 0, "Windows ordnet direkt gesetzte ACE vor geerbten ACE in der DACL ein. Zusätzlich spielt die Art der ACE eine Rolle: Ein explizites Deny steht vor einem expliziten Allow. Die effektive Berechtigung sollte bei komplexen ACLs stets geprüft werden.")
  ]
};

/*
  Ergänzungen aus den Seminarunterlagen zu Windows Server 2022 und Hyper-V.
  Die Fragetypen sind bewusst gemischt: Begriffe werden knapp abgefragt,
  eng verwandte Verfahren zugeordnet und Betriebsabläufe als Szenario geprüft.
*/
const QUESTION_POOL_SERVER_HYPERV_EXTENSION = {
  "windows-server-admin": [
    mc("srv-hv-001", "hyper-v-vm", "grundlagen", "Für eine neue VM mit einem modernen, unterstützten Windows-Gast werden UEFI, Secure Boot und das Booten von einer virtuellen SCSI-Festplatte benötigt. Welche VM-Generation ist passend?", ["Generation 2", "Generation 1", "Beide Generationen verwenden ausschließlich Legacy-BIOS", "Die Generation wird erst beim ersten Start automatisch gewählt"], 0, "Generation 2 verwendet UEFI und unterstützt moderne Funktionen wie Secure Boot sowie das Booten von einer virtuellen SCSI-Festplatte. Die VM-Generation wird bei der Erstellung festgelegt."),
    matchQuestion("srv-hv-002", "hyper-v-vm", "fortgeschritten", "Ordne den Hyper-V-Begriffen die passende Beschreibung zu.", [
      { left: "Generation 1", right: "Verwendet ein Legacy-BIOS und emulierte ältere Geräte für kompatible Gastbetriebssysteme." },
      { left: "Generation 2", right: "Verwendet UEFI und modernere virtuelle Hardware ohne emuliertes Legacy-BIOS." },
      { left: "Secure Boot", right: "Prüft beim Start die Vertrauenswürdigkeit signierter Bootkomponenten." },
      { left: "vTPM", right: "Stellt einer VM TPM-Funktionen beispielsweise für BitLocker bereit." }
    ], "Generation 1 dient vor allem der Kompatibilität. Generation 2 ist für moderne Gastbetriebssysteme vorgesehen; Secure Boot und vTPM erfüllen dabei unterschiedliche Sicherheitsaufgaben."),
    multi("srv-hv-003", "hyper-v-vm", "fortgeschritten", "Welche Merkmale sind typisch für eine Hyper-V-VM der Generation 2?", ["UEFI-Firmware", "Unterstützung von Secure Boot", "Booten von einer virtuellen SCSI-Festplatte", "Zwingende Verwendung eines emulierten IDE-Systemlaufwerks"], [0, 1, 2], "Generation 2 nutzt UEFI, unterstützt Secure Boot und kann von SCSI booten. Ein emuliertes IDE-Systemlaufwerk ist ein Merkmal der älteren Generation 1."),

    mc("srv-hv-004", "hyper-v-checkpoints", "grundlagen", "Für eine laufende Hyper-V-VM unterstützt das Gastsystem Produktionscheckpoints. Welche Gegenüberstellung ist richtig?", ["Standard: mit RAM-Zustand; Produktion: ohne RAM-Zustand, mit Gastkonsistenzmechanismen.", "Standard: ohne RAM-Zustand, mit Gastkonsistenzmechanismen; Produktion: mit RAM-Zustand.", "Beide: mit RAM-Zustand; nur der Produktionscheckpoint nutzt zusätzlich Gastkonsistenzmechanismen.", "Beide: ohne RAM-Zustand; nur der Standardcheckpoint nutzt zusätzlich Gastkonsistenzmechanismen."], 0, "Bei einer laufenden VM hält der Standardcheckpoint auch den Arbeitsspeicherzustand fest. Der Produktionscheckpoint verwendet stattdessen unterstützte Mechanismen wie VSS beziehungsweise Dateisystem-Freeze, um einen anwendungs- oder dateisystemkonsistenten Zustand ohne RAM-Abbild zu erzeugen. Keines der Verfahren ersetzt ein getrenntes Backup."),
    multi("srv-hv-005", "hyper-v-checkpoints", "anspruchsvoll", "Welche Aussagen zu Hyper-V-Checkpoints sind korrekt?", ["Ein Checkpoint liegt typischerweise im selben Storage-Kontext wie die VM und schützt daher nicht vor dessen Ausfall.", "Lange Checkpoint-Ketten können Speicherbedarf und Betrieb beeinflussen.", "Ein Checkpoint ersetzt ein getestetes, getrenntes Backup vollständig.", "Produktionscheckpoints sind für produktive Workloads in der Regel geeigneter als Standardcheckpoints."], [0, 1, 3], "Checkpoints unterstützen kurzfristige Rücksetzpunkte, sind aber kein getrenntes Backup. Lange Ketten sollten vermieden und Produktionscheckpoints für produktive Systeme bevorzugt werden."),
    mc("srv-hv-006", "hyper-v-checkpoints", "anspruchsvoll", "Vor einem Update einer laufenden Datenbank-VM soll ein konsistenter Rücksetzpunkt erstellt werden, ohne den Arbeitsspeicherzustand einzufrieren. Welche Wahl passt am besten?", ["Ein Produktionscheckpoint", "Ein Standardcheckpoint", "Nur eine Kopie der VM-Konfigurationsdatei", "Das Deaktivieren der Datenbankprotokollierung"], 0, "Ein Produktionscheckpoint bindet unterstützte Sicherungsmechanismen des Gastbetriebssystems ein und erzeugt einen anwendungs- beziehungsweise dateisystemkonsistenten Zustand."),

    matchQuestion("srv-hv-007", "hyper-v-migration", "fortgeschritten", "Ordne den Migrationsverfahren ihren jeweiligen Zweck zu.", [
      { left: "Live Migration mit gemeinsamem Storage", right: "Verschiebt die laufende VM auf einen anderen Host; ihre Datenträger bleiben auf dem gemeinsamen Speicher." },
      { left: "Quick Migration", right: "Speichert den VM-Zustand kurz und setzt ihn auf einem anderen Clusterknoten fort." },
      { left: "Storage Migration", right: "Verschiebt die Dateien einer VM auf einen anderen Speicherort, während sie weiterlaufen kann." },
      { left: "Shared-Nothing Live Migration", right: "Verschiebt eine laufende VM zwischen Hosts, ohne gemeinsamen Storage vorauszusetzen." }
    ], "Die Verfahren lösen unterschiedliche Aufgaben: Compute verschieben, Speicher verschieben oder beides ohne gemeinsamen Datenträger durchführen."),
    mc("srv-hv-008", "hyper-v-migration", "grundlagen", "Die VHDX-Dateien einer laufenden VM sollen auf ein neues Storage-System verschoben werden, die VM soll aber auf demselben Host weiterlaufen. Welches Verfahren ist vorgesehen?", ["Storage Migration", "Quick Migration", "Testfailover", "Checkpoint-Export"], 0, "Storage Migration verschiebt VM-Dateien zwischen Speicherorten, ohne dass die VM zwingend auf einen anderen Host wechseln muss."),
    multi("srv-hv-009", "hyper-v-migration", "anspruchsvoll", "Welche Voraussetzungen oder Prüfungen sind für eine zuverlässige Live Migration relevant?", ["Ein funktionierender Migrationsnetzwerkpfad", "Passende Authentisierung, beispielsweise CredSSP oder Kerberos mit korrekter Delegierung", "Kompatible Host- und VM-Konfiguration", "Gemeinsam genutzter Storage ist bei jeder Form der Live Migration zwingend"], [0, 1, 2], "Netzwerk, Authentisierung und Kompatibilität müssen stimmen. Shared-Nothing Live Migration zeigt, dass gemeinsamer Storage nicht bei jeder Variante zwingend ist."),
    mc("srv-hv-010", "hyper-v-migration", "fortgeschritten", "Eine produktive VM soll für Wartungsarbeiten auf einen anderen kompatiblen Host wechseln, ohne geplante Unterbrechung des Dienstes. Welche Technik passt?", ["Live Migration", "Quick Migration", "Export bei ausgeschalteter VM", "Ungeplantes Replica-Failover"], 0, "Live Migration verschiebt eine laufende VM mit keiner geplanten Anwendungsunterbrechung. Quick Migration verursacht durch Speichern und Wiederherstellen des Zustands eine kurze Pause."),

    mc("srv-hv-011", "hyper-v-replica", "grundlagen", "Wie arbeitet Hyper-V Replica grundsätzlich?", ["Es repliziert virtuelle Festplatten asynchron auf einen zweiten Host oder Standort.", "Es spiegelt jeden Arbeitsspeicherzugriff synchron zwischen allen Hosts.", "Es ersetzt die VM automatisch durch einen Container.", "Es funktioniert nur innerhalb desselben physischen Servers."], 0, "Hyper-V Replica überträgt Änderungen asynchron. Dadurch eignet es sich für Wiederanlaufszenarien, garantiert aber keinen verlustfreien synchronen Zustand."),
    matchQuestion("srv-hv-012", "hyper-v-replica", "fortgeschritten", "Ordne die Hyper-V-Replica-Verfahren ihrem Einsatzzweck zu.", [
      { left: "Testfailover", right: "Startet eine isolierte Testkopie, ohne die laufende Replikationsbeziehung produktiv umzuschalten." },
      { left: "Geplantes Failover", right: "Überträgt bei verfügbarem Primärsystem geordnet die letzten Änderungen und schaltet anschließend um." },
      { left: "Ungeplantes Failover", right: "Startet die Replikat-VM nach einem Ausfall, wenn das Primärsystem nicht mehr verfügbar ist." }
    ], "Testfailover prüft die Wiederanlaufbarkeit, geplantes Failover dient einer kontrollierten Umschaltung und ungeplantes Failover einem tatsächlichen Ausfall."),
    multi("srv-hv-013", "hyper-v-replica", "anspruchsvoll", "Welche Aussagen zu Hyper-V Replica sind korrekt?", ["Die Replikation kann Wiederanläufe auf einem zweiten Host oder Standort unterstützen.", "Die asynchrone Übertragung kann bei einem plötzlichen Ausfall einen kleinen Datenverlust zulassen.", "Replica ersetzt ein versioniertes und getestetes Backup vollständig.", "Ein Testfailover sollte die produktive VM und die laufende Replikation nicht ungeplant übernehmen."], [0, 1, 3], "Replica verbessert die Wiederanlaufmöglichkeit, ist aber kein Backup. Wegen der asynchronen Übertragung sind RPO und mögliche Datenverluste zu berücksichtigen."),
    mc("srv-hv-014", "hyper-v-replica", "fortgeschritten", "Ein Administrator möchte prüfen, ob eine replizierte VM am zweiten Standort startet, ohne die Produktions-VM umzuschalten. Welche Funktion ist dafür vorgesehen?", ["Testfailover", "Ungeplantes Failover", "Quick Migration", "Standardcheckpoint"], 0, "Ein Testfailover erzeugt eine isolierte Test-VM aus einem Replikationspunkt, während die produktive Replikationsbeziehung bestehen bleibt."),

    mc("srv-hv-015", "failover-cluster", "fortgeschritten", "Welches Problem löst das Quorum eines Failover-Clusters hauptsächlich?", ["Es verhindert widersprüchlichen Weiterbetrieb voneinander getrennter Clusterteile","Es hält alle Datenbestände der Anwendungen ohne deren Replikationsverfahren identisch","Es verteilt jede VM automatisch gleichmäßig nach aktueller CPU-Auslastung auf alle Knoten","Es erstellt vor jeder Rollenübernahme eine unabhängige Langzeitsicherung der Anwendungsdaten"], 0, "Quorum stellt sicher, dass nur ein entscheidungsfähiger Clusterteil Rollen verwaltet. Dadurch wird ein Split-Brain-Betrieb vermieden."),
    matchQuestion("srv-hv-016", "failover-cluster", "fortgeschritten", "Ordne den Clusterbegriffen ihre zentrale Aufgabe zu.", [
      { left: "Failover Cluster", right: "Überwacht Knoten und Rollen und kann Workloads nach einem Knotenausfall auf anderen Knoten starten." },
      { left: "Quorum", right: "Bestimmt, welcher Clusterteil noch entscheidungsfähig ist." },
      { left: "Witness", right: "Liefert eine zusätzliche Stimme, um in passenden Topologien eine eindeutige Mehrheitsentscheidung zu ermöglichen." },
      { left: "Cluster Shared Volume", right: "Ermöglicht mehreren Clusterknoten koordinierten Zugriff auf ein gemeinsames Volume." }
    ], "Cluster, Quorum, Witness und CSV ergänzen sich, erfüllen aber unterschiedliche Aufgaben für Verfügbarkeit, Entscheidung und Speicherzugriff."),
    multi("srv-hv-017", "failover-cluster", "anspruchsvoll", "Welche Aussagen zu einem Hyper-V-Failover-Cluster sind korrekt?", ["Er kann VMs nach dem Ausfall eines Hosts auf einem verbleibenden Knoten neu starten.", "Er benötigt eine geplante Quorumkonfiguration.", "Er ersetzt Backups gegen versehentliches Löschen und logische Datenfehler.", "Netzwerk- und Speicherpfade müssen ebenfalls hochverfügbar geplant werden."], [0, 1, 3], "Ein Cluster schützt vor bestimmten Infrastrukturfehlern, nicht vor jedem logischen Fehler. Quorum, Netzwerk, Storage und Backup bleiben eigenständige Planungsbereiche."),
    mc("srv-hv-018", "failover-cluster", "anspruchsvoll", "Ein Hyper-V-Host fällt vollständig aus. Die VMs sollen auf einem anderen Host automatisch neu gestartet werden. Welche Lösung ist dafür am direktesten vorgesehen?", ["Ein korrekt geplanter Failover-Cluster", "Nur ein lokaler Produktionscheckpoint", "Storage Migration auf demselben Host", "Eine zusätzliche Desktop-Experience-Installation"], 0, "Ein Failover-Cluster erkennt den Knotenausfall und kann hochverfügbare VMs auf verbleibenden Knoten neu starten."),
    mc("srv-hv-019", "failover-cluster", "fortgeschritten", "Warum ist ein Failover-Cluster kein Ersatz für ein Backup?", ["Verfügbarkeit ersetzt keine unabhängigen früheren Datenstände nach Löschen oder Befall","Ein Cluster spiegelt nur gültige fachliche Änderungen und erkennt jede versehentliche Löschung","Der zweite Clusterknoten bewahrt alle früheren Dateiversionen unveränderlich und unbegrenzt auf","Der gemeinsame Speicher ist durch die Clusterzugehörigkeit vor jedem berechtigten Löschzugriff geschützt"], 0, "Hochverfügbarkeit reduziert Ausfallzeiten bestimmter Komponenten. Ein Backup stellt frühere, unabhängige Datenstände wieder her und schützt damit vor anderen Schadensarten."),

    matchQuestion("srv-hv-020", "hyper-v-netzwerk", "anspruchsvoll", "Ordne den Hyper-V-Netzwerktechniken ihre Hauptaufgabe zu.", [
      { left: "SET", right: "Bündelt physische Netzwerkadapter direkt innerhalb eines Hyper-V-Switches." },
      { left: "RDMA", right: "Überträgt Daten mit direktem Speicherzugriff und geringer CPU-Belastung." },
      { left: "RoCE", right: "Transportiert RDMA über Converged Ethernet und erfordert häufig eine konsistente DCB/PFC-Konfiguration." },
      { left: "iWARP", right: "Transportiert RDMA über TCP und ist routbar, ohne verlustfreies Ethernet in gleichem Maß vorauszusetzen." },
      { left: "QoS", right: "Priorisiert oder begrenzt Datenverkehr nach definierten Bandbreitenregeln." }
    ], "SET, RDMA, die RDMA-Transporte RoCE/iWARP und QoS betreffen unterschiedliche Ebenen einer leistungsfähigen Hyper-V-Netzwerkarchitektur."),
    mc("srv-hv-021", "hyper-v-netzwerk", "fortgeschritten", "Was ist der wesentliche Unterschied von Switch Embedded Teaming gegenüber einem klassischen, vorgelagerten NIC-Team?", ["SET integriert das Teaming direkt in den Hyper-V-Virtual-Switch.", "SET funktioniert ausschließlich innerhalb einer einzelnen VM.", "SET ersetzt jede VLAN-Konfiguration durch NAT.", "SET kann keine redundanten physischen Adapter verwenden."], 0, "Bei SET sind Teaming und virtueller Switch eine gemeinsame Architektur. Das ist für moderne Hyper-V-Hosts die bevorzugte Variante."),
    multi("srv-hv-022", "hyper-v-netzwerk", "anspruchsvoll", "Welche Gründe sprechen dafür, Management-, VM-, Storage-, Cluster- und Live-Migration-Verkehr mindestens logisch zu trennen?", ["Unterschiedliche Verkehrsarten können gezielt priorisiert und abgesichert werden.", "Ein Fehler oder eine Überlastung eines Pfads wirkt sich weniger leicht auf alle Funktionen gleichzeitig aus.", "Jede VM benötigt dadurch automatisch eine öffentliche IP-Adresse.", "Fehlersuche und Kapazitätsplanung werden nachvollziehbarer."], [0, 1, 3], "Logische oder physische Trennung verbessert Steuerbarkeit, Sicherheit, Diagnose und Verfügbarkeit. Sie hat nichts mit einer Pflicht zu öffentlichen VM-Adressen zu tun."),
    mc("srv-hv-023", "hyper-v-netzwerk", "fortgeschritten", "Welche Wirkung wird mit RDMA bei Hyper-V-Storage- oder Migrationsverkehr hauptsächlich angestrebt?", ["Hoher Durchsatz und geringe Latenz bei reduzierter CPU-Belastung","Garantierte verlustfreie Langzeitsicherung aller übertragenen VM-Daten","Eine vollständige Verschlüsselung des Datenverkehrs ohne zusätzliche Sicherheitskonfiguration","Die automatische Zusammenfassung aller Hostlaufwerke in einen gemeinsamen Storage-Pool"], 0, "RDMA ermöglicht Netzwerkkarten einen weitgehend direkten Datentransfer in den Arbeitsspeicher und entlastet dadurch die CPU."),
    mc("srv-hv-024", "hyper-v-netzwerk", "anspruchsvoll", "Ein Unternehmen setzt RoCE für Storage-Verkehr ein. Welche zusätzliche Planung ist besonders wichtig?", ["Eine zur RoCE-Umsetzung passende, durchgängige DCB-/PFC-Planung","Eine reine DNS-Weiterleitungskette als Ersatz für die Behandlung von Ethernet-Überlastung","PFC ausschließlich auf einem Endgerät aktivieren und die Switch-Konfiguration unverändert lassen","Pauschal jede Verkehrsklasse priorisieren, ohne Überlastung und gemeinsame Pfade zu berücksichtigen"], 0, "RoCE reagiert empfindlich auf Paketverlust. Deshalb muss die verlustarme Ethernet-Konfiguration mit DCB/PFC Ende zu Ende geplant und geprüft werden."),

    mc("srv-hv-025", "hyper-v-speicher", "grundlagen", "Was beschreibt Storage Spaces Direct am treffendsten?", ["Es bündelt direkt angeschlossene Laufwerke mehrerer Clusterknoten zu einem hochverfügbaren, softwaredefinierten Speicher.", "Es erstellt ausschließlich einen lokalen Speicherpool auf einem einzelnen Windows-Client.", "Es ist ein Dateiformat für virtuelle Festplatten.", "Es ersetzt die Netzwerkkarten eines Hyper-V-Hosts."], 0, "Storage Spaces Direct kombiniert lokale Datenträger mehrerer Clusterknoten. Der daraus entstehende Speicher kann hochverfügbar für Clusterworkloads bereitgestellt werden."),
    mc("srv-hv-026", "hyper-v-speicher", "fortgeschritten", "Was unterscheidet Storage Spaces Direct von klassischen Storage Spaces am deutlichsten?", ["Storage Spaces Direct verteilt den Speicher über mehrere Clusterknoten; klassische Storage Spaces können einen lokalen Pool auf einem einzelnen Server bilden.", "Nur klassische Storage Spaces können Redundanz bereitstellen.", "Storage Spaces Direct benötigt immer ein externes SAN.", "Beide Begriffe bezeichnen ausschließlich dasselbe VHDX-Dateiformat."], 0, "Storage Spaces Direct erweitert das softwaredefinierte Speicherkonzept über mehrere Clusterknoten und nutzt deren direkt angeschlossene Laufwerke."),
    multi("srv-hv-027", "hyper-v-speicher", "anspruchsvoll", "Welche Komponenten oder Planungsbereiche sind für eine produktive Storage-Spaces-Direct-Umgebung wesentlich?", ["Mehrere geeignete Failover-Clusterknoten", "Kompatible direkt angeschlossene Laufwerke", "Ein leistungsfähiges und redundantes Netzwerk zwischen den Knoten", "Ein zwingend vorgeschaltetes externes SAN als Speicherquelle"], [0, 1, 2], "S2D nutzt lokale Laufwerke der Clusterknoten und benötigt eine passende Cluster- und Netzwerkinfrastruktur. Ein externes SAN ist gerade nicht die Grundlage des Konzepts."),

    matchQuestion("srv-hv-028", "hyper-v-import", "fortgeschritten", "Ordne den Hyper-V-Importmodi ihr Verhalten zu.", [
      { left: "Register in place", right: "Registriert die VM direkt am vorhandenen Speicherort, ohne ihre Dateien zu kopieren." },
      { left: "Restore", right: "Übernimmt die vorhandene VM-ID und legt die VM-Dateien an den ausgewählten Zielorten ab." },
      { left: "Copy", right: "Kopiert die VM und erzeugt eine neue eindeutige VM-ID." }
    ], "Der Importmodus entscheidet, ob Dateien am Ort bleiben, an Zielorte übernommen werden oder eine unabhängige Kopie mit neuer Identität entsteht."),
    mc("srv-hv-029", "hyper-v-import", "fortgeschritten", "Eine exportierte VM soll als zweite Test-VM auf demselben Host importiert werden. Welcher Importmodus erzeugt dafür eine neue Hyper-V-VM-ID?", ["Copy", "Register in place", "Restore mit unveränderter VM-ID", "Quick Migration"], 0, "Copy erzeugt eine neue Hyper-V-VM-ID. Rechnername, IP-Konfiguration und Domänenidentität innerhalb des Gasts werden dadurch nicht automatisch angepasst. Diese müssen vor dem parallelen Einsatz getrennt vorbereitet werden."),
    mc("srv-hv-030", "hyper-v-kompatibilitaet", "anspruchsvoll", "Nach dem Aktualisieren der Konfigurationsversion einer VM kann ein älterer Hyper-V-Host sie nicht mehr übernehmen. Was ist die fachlich passende Erklärung?", ["Der ältere Host unterstützt die neue VM-Konfigurationsversion nicht","Das Update der Konfigurationsversion konvertiert automatisch jedes Gastbetriebssystem","Die Konfigurationsversion passt sich beim Import grundsätzlich an jeden Zielhost an","Die neue Konfigurationsversion betrifft nur die Anzeige und kann die Übernahme nicht beeinflussen"], 0, "Die Konfigurationsversion bestimmt, welche Hyper-V-Funktionen und Hosts die VM unterstützen. Ein Update kann die Rückkehr auf ältere Hosts verhindern."),
    mc("srv-hv-031", "hyper-v-kompatibilitaet", "anspruchsvoll", "Wozu dient der Prozessor-Kompatibilitätsmodus einer Hyper-V-VM hauptsächlich?", ["Er begrenzt die für den Gast sichtbaren CPU-Funktionen für kompatible Migrationen.", "Er passt die Anzahl virtueller CPUs automatisch an die freien Kerne des Zielhosts an.", "Er setzt die VM-Konfigurationsversion beim Verschieben auf die Version des Zielhosts zurück.", "Er verschiebt CPU-intensiven Gastcode während des Betriebs zur Ausführung auf andere Hosts."], 0, "Der Modus stellt der VM einen gemeinsamen, eingeschränkten CPU-Funktionsumfang bereit und erleichtert Migrationen zwischen Prozessorgenerationen desselben Herstellers. Er ändert weder die Anzahl virtueller CPUs noch die VM-Konfigurationsversion und verteilt die laufende Berechnung einer VM nicht auf mehrere Hosts. Andere Migrationsvoraussetzungen bleiben bestehen."),

    orderQuestion("srv-ops-001", "bereitstellung", "fortgeschritten", "Bringe die Phasen einer geplanten Windows-Server-Bereitstellung in eine sinnvolle Reihenfolge.", ["Workload und Anforderungen bestimmen", "Ressourcen, Edition, Netzwerk und Betriebsmodell planen", "Betriebssystem installieren und grundlegend konfigurieren", "Benötigte Rollen und Anwendungen bereitstellen", "System härten, aktualisieren und rollenbezogen konfigurieren", "Funktion validieren, dokumentieren und in den Betrieb übergeben"], "Die Bereitstellung beginnt mit dem Bedarf und endet nicht mit der Installation. Erst Validierung, Dokumentation und geregelte Betriebsübergabe schaffen einen belastbaren Dienst."),
    multi("srv-ops-002", "betriebsuebergabe", "anspruchsvoll", "Welche Punkte sollten vor der produktiven Betriebsübergabe eines neuen Servers nachweisbar geklärt sein?", ["Rollenfunktion und benötigte Kommunikationswege wurden getestet.", "Backup, Wiederherstellung und Monitoring sind eingerichtet beziehungsweise geplant und geprüft.", "IP-, DNS-, Berechtigungs-, Firewall- und Administrationskonzept sind dokumentiert.", "Ein erfolgreicher Windows-Start reicht unabhängig von Rolle und Sicherheitszustand als vollständiger Abnahmetest."], [0, 1, 2], "Betriebsbereitschaft umfasst Funktion, Sicherheit, Wiederherstellbarkeit, Überwachung und Dokumentation. Ein bloßer Systemstart ist kein vollständiger Abnahmetest."),
    mc("srv-ops-003", "baseline", "anspruchsvoll", "Ein Server weicht nach mehreren ungeplanten Änderungen von der dokumentierten Sicherheitsbaseline ab. Warum ist das problematisch?", ["Ungeprüfte Abweichungen machen Schutz und Fehleranalyse weniger verlässlich","Jede einmal freigegebene Baseline bleibt auch bei neuen Sicherheitslücken dauerhaft ausreichend","Eine erfolgreiche Anmeldung weist unabhängig von Abweichungen die vollständige Härtung nach","Eine lokale Änderung ersetzt ohne Dokumentation automatisch die zentrale freigegebene Baseline"], 0, "Eine Baseline ist ein kontrollierter Ausgangszustand. Notwendige Abweichungen müssen begründet, getestet, freigegeben und dokumentiert werden."),
    mc("srv-ops-004", "bereitstellung", "fortgeschritten", "Die DNS-Serverrolle ist installiert, aber Clients können keine Namen auflösen. Welche Aussage ist fachlich richtig?", ["Die Rolle muss zusätzlich passend konfiguriert und ihre Funktion geprüft werden","Die Installation legt für jede interne Domäne automatisch eine vollständige DNS-Zone an","Der Rollenstatus installiert beweist bereits, dass alle Clientanfragen erfolgreich beantwortet werden","Ein laufender DNS-Dienst ersetzt die Kontrolle von Records und Netzwerk-Erreichbarkeit"], 0, "Rollenbereitstellung und Rollenfunktion sind getrennte Schritte. Nach Installation folgen Konfiguration, Abhängigkeitsprüfung, Absicherung und ein fachlicher Funktionstest.")
  ],

  "netzwerke": [
    mc("net-ipv6-001", "ipv6", "grundlagen", "Welche Aussage beschreibt IPv6 korrekt?", ["IPv6 verwendet 128-Bit-Adressen und kennt keinen Broadcast wie IPv4.", "IPv6 verwendet ausschließlich 32-Bit-Adressen.", "IPv6 kann nur innerhalb eines einzelnen Switches eingesetzt werden.", "IPv6 ersetzt DNS durch MAC-Adressen."], 0, "IPv6 besitzt einen sehr großen 128-Bit-Adressraum. Broadcast wurde durch gezieltere Mechanismen wie Multicast ersetzt."),
    matchQuestion("net-ipv6-002", "ipv6-adresstypen", "fortgeschritten", "Ordne den IPv6-Adresstypen ihre typische Bedeutung zu.", [
      { left: "Link-Local", right: "Gilt nur am lokalen Link und beginnt typischerweise mit fe80::/10." },
      { left: "Global Unicast", right: "Ist global eindeutig und grundsätzlich über IPv6-Netze routbar." },
      { left: "Unique Local", right: "Ist für interne Netze vorgesehen und stammt aus fc00::/7." },
      { left: "Loopback", right: "Bezeichnet mit ::1 das lokale System selbst." }
    ], "IPv6-Schnittstellen besitzen häufig mehrere Adressen gleichzeitig, weil Link-Local-, globale oder interne Adressen unterschiedliche Zwecke erfüllen."),
    mc("net-ipv6-003", "ipv6-autokonfiguration", "fortgeschritten", "Welche Information nutzt ein IPv6-Client bei SLAAC hauptsächlich, um selbstständig eine Adresse zu bilden?", ["Router Advertisements mit dem angekündigten Präfix", "Einen IPv4-DHCP-Offer", "Die MAC-Tabelle des Switches als DNS-Ersatz", "Einen MX-Record"], 0, "Bei SLAAC kündigt ein Router über Router Advertisements unter anderem das Präfix an. Der Client bildet daraus selbst eine IPv6-Adresse."),
    mc("net-ipv6-004", "ipv6-autokonfiguration", "anspruchsvoll", "Ein IPv6-Client erhält seine Adresse über DHCPv6, aber keinen Standardrouter. Welche zusätzliche Information ist für das Default Gateway maßgeblich?", ["Ein Router Advertisement eines IPv6-Routers", "Ein DNS-PTR-Record", "Die IPv4-Option 003", "Die MAC-Adresse des DHCPv6-Servers"], 0, "Bei IPv6 wird der Standardrouter über Router Advertisements gelernt. DHCPv6 liefert je nach Betriebsart Adressen und weitere Optionen, aber nicht den Default-Gateway-Eintrag wie DHCPv4."),
    mc("net-ipv6-005", "ipv6-neighbor-discovery", "fortgeschritten", "Welche Aufgabe übernimmt Neighbor Discovery bei IPv6 unter anderem?", ["Nachbarn und Router entdecken sowie Link-Layer-Adressen ermitteln","Hostnamen anhand von DNS-Zonen in IPv6-Adressen übersetzen","Den Austausch von Routingtabellen zwischen allen Internetroutern übernehmen","Anwendungsdaten zwischen Client und Server auf Transportebene verschlüsseln"], 0, "Neighbor Discovery verwendet ICMPv6 für Nachbarerkennung, Routererkennung und weitere Kontrollfunktionen. ARP wird bei IPv6 nicht verwendet."),
    multi("net-ipv6-006", "ipv6-diagnose", "anspruchsvoll", "Ein Dual-Stack-Server ist per IPv4 erreichbar, per IPv6 jedoch nicht. Welche Prüfungen sind zielgerichtet?", ["IPv6-Adresse, Präfix und Link-Local-Adresse der Schnittstelle prüfen", "IPv6-Routing und Router Advertisements prüfen", "AAAA-Auflösung sowie IPv6-Firewallregeln prüfen", "Nur den IPv4-DHCP-Pool vergrößern und alle IPv6-Werte ignorieren"], [0, 1, 2], "IPv4- und IPv6-Pfade müssen in Dual-Stack-Umgebungen getrennt geprüft werden. Adresse, Route, Namensauflösung und Firewall können je Protokoll unterschiedlich funktionieren."),
    mc("net-ipv6-007", "ipv6-praefixe", "fortgeschritten", "Welche Präfixlänge wird für ein gewöhnliches IPv6-LAN mit SLAAC typischerweise verwendet?", ["/64", "/8", "/24", "/128 für das gesamte LAN"], 0, "Für normale IPv6-LAN-Segmente und SLAAC ist /64 die typische Präfixlänge. /128 bezeichnet dagegen eine einzelne Adresse beziehungsweise Route."),
    mc("net-ipv6-008", "ipv6-adresstypen", "fortgeschritten", "Ein Windows-Server zeigt auf einer Netzwerkschnittstelle gleichzeitig eine Link-Local- und eine Global-Unicast-Adresse. Wie ist das zu bewerten?", ["Das ist bei IPv6 normal, weil eine Schnittstelle mehrere Adressen für unterschiedliche Gültigkeitsbereiche besitzen kann.", "Es handelt sich zwingend um einen Adresskonflikt.", "Nur die Link-Local-Adresse darf jemals aktiv sein.", "Die Global-Unicast-Adresse ersetzt automatisch die MAC-Adresse."], 0, "Mehrere IPv6-Adressen pro Schnittstelle sind üblich. Link-Local wird für lokale Kontrollkommunikation benötigt, während Global Unicast für geroutete Kommunikation verwendet werden kann.")
  ]
};

/*
  Ergänzungen zum Master-Lernskript IT-Administration (Stand 21.09.2026).
  Quellenstellen stehen an den Themenblöcken. Bewusst keine Änderungen an
  Quiz-Engine oder PDF; bestehende Typen und Schwierigkeitswerte bleiben erhalten.
*/
const QUESTION_POOL_MASTER_EXTENSION = {
  // Kapitel 2 und 4, S. 5–13: Medien, DHCP-/DNS-Betrieb und Dienstports.
  "netzwerke": [
    mc("master-net-01", "dhcp-lease", "grundlagen", "Was bezeichnet eine DHCP-Lease?", ["Die zeitlich begrenzte Zuweisung einer IP-Konfiguration an einen Client", "Eine dauerhaft fest im Netzwerkadapter gespeicherte IP-Adresse", "Die Gültigkeitsdauer eines DNS-Zertifikats", "Die Erlaubnis, sich an einer Windows-Domäne anzumelden"], 0, "Eine Lease ist eine befristete Zuweisung. Der Client muss sie rechtzeitig erneuern; nach Ablauf darf er die Adresse ohne erneute Berechtigung nicht einfach weiterverwenden."),
    mc("master-net-02", "dhcp-lease", "fortgeschritten", "Eine DHCPv4-Lease gilt acht Tage. Es sind keine abweichenden T1-/T2-Zeiten vorgegeben. Wann versucht der Client standardmäßig zuerst die Erneuerung und wann das Rebinding?", ["T1 nach zwei Tagen, T2 nach vier Tagen", "T1 nach vier Tagen, T2 nach sieben Tagen", "T1 nach sieben Tagen, T2 nach acht Tagen", "Beides erst nach Ablauf der acht Tage"], 1, "Standardmäßig liegt T1 bei 50 % und T2 bei 87,5 % der Leasezeit. Zunächst fragt der Client den bisherigen Server, beim Rebinding kann ein anderer zuständiger Server antworten."),
    mc("master-net-03", "dhcp-relay", "fortgeschritten", "Clients in VLAN 20 sollen einen DHCPv4-Server in VLAN 10 nutzen. Routing ist vorhanden, die ersten DHCP-Broadcasts erreichen den Server jedoch nicht. Was wird zusätzlich benötigt?", ["Eine zusätzliche Standardroute ohne Weiterleitung der DHCP-Anfragen","Ein weiterer DNS-Forwarder, der DHCP-Broadcasts anhand des Hostnamens zuordnet","Ein DHCP-Relay im Clientnetz und ein passender Bereich auf dem Server","Eine DHCP-Reservierung auf dem Server ohne Übertragung der Clientanfragen"], 2, "Ein Relay nimmt DHCP-Nachrichten im Clientnetz entgegen und leitet sie an den Server weiter. Der Server benötigt einen passenden Bereich und einen funktionierenden Rückweg; normales Routing allein leitet den Broadcast nicht weiter."),
    multi("master-net-04", "dhcp-sicherheit", "anspruchsvoll", "Welche Aussagen zur Abwehr unerwünschter DHCPv4-Server sind korrekt?", ["Die AD-Autorisierung allein blockiert auch jedes fremde DHCP-Gerät am Switch.", "Ein Windows-DHCP-Server in einer AD-Umgebung muss passend autorisiert sein.", "DHCP-Snooping kann Serverantworten auf nicht vertrauenswürdigen Switch-Ports blockieren.", "Bei DHCP-Snooping müssen legitime Server- beziehungsweise Uplink-Ports passend als vertrauenswürdig geplant werden."], [1, 2, 3], "AD-Autorisierung und DHCP-Snooping wirken an unterschiedlichen Stellen. Die Autorisierung ist keine netzweite Sperre für beliebige Fremdgeräte; falsch konfigurierte Snooping-Ports können auch legitime Antworten blockieren."),
    matchQuestion("master-net-05", "dhcp-failover", "grundlagen", "Ordne den DHCP-Betriebsmodellen die passende Beschreibung zu.", [
      { left: "DHCP-Failover: Load Balance", right: "Zwei Partner teilen sich im Normalbetrieb die Clientbedienung und synchronisieren Leaseinformationen." },
      { left: "DHCP-Failover: Hot Standby", right: "Ein Partner bedient normalerweise die Clients; der andere ist für die Übernahme vorgesehen." },
      { left: "Split Scope", right: "Zwei Server verwenden getrennte Teilbereiche ohne die Lease-Synchronisierung einer Failoverbeziehung." }
    ], "Windows-DHCP-Failover ist eine IPv4-Funktion zwischen zwei Partnern, kein Windows-Failovercluster. Split Scope ist ein anderes Redundanzmodell."),
    mc("master-net-06", "dhcp-failover", "anspruchsvoll", "Bei Windows-DHCP-Failover wurde eine Bereichsoption auf einem Partner geändert. Die Leases sind synchron, die Option fehlt aber beim anderen Partner. Was ist gezielt zu tun?", ["Den Client aus der Domäne entfernen", "Auf die automatische Lease-Verlängerung als garantierte Übertragung aller Bereichsoptionen warten", "DHCPv6 anstelle von DHCPv4 aktivieren", "Die geänderte Bereichskonfiguration ausdrücklich zum Failoverpartner replizieren"], 3, "Die laufende Lease-Synchronisierung ersetzt nicht die gezielte Replikation geänderter Bereichseinstellungen. Nach der Konfigurationsreplikation sollte die Option auf beiden Partnern geprüft werden."),
    mc("master-net-07", "dhcp-failover", "anspruchsvoll", "Welchen Zweck erfüllt die Maximum Client Lead Time (MCLT) bei DHCP-Failover?", ["Sie bestimmt ausschließlich den Abstand zwischen zwei Statusabfragen der Partner","Sie begrenzt Leaseverlängerungen gegenüber dem zuletzt abgestimmten Partnerstand","Sie legt fest, wie lange Clients vor ihrem ersten DHCP-Discover warten müssen","Sie bestimmt die Lebensdauer eines DNS-Records nach der Vergabe einer IP-Adresse"], 1, "MCLT begrenzt, wie weit eine Lease über den dem Partner bekannten Stand hinaus verlängert werden darf. Sie ist außerdem bei der sicheren Übernahme von Adressen relevant und nicht einfach die normale Client-Leasezeit."),
    mc("master-net-08", "dns-zonen", "grundlagen", "Was ist eine DNS-Zone?", ["Die Liste aller Netzwerkadapter eines DNS-Servers", "Ein IP-Subnetz, dessen Geräte denselben DNS-Server verwenden", "Ein administrativ verwalteter Teil des DNS-Namensraums mit zugehörigen Records", "Ein zeitlich begrenzter Eintrag ausschließlich im Clientcache"], 2, "Eine Zone enthält autoritativ verwaltete DNS-Daten. Eine Domäne und eine Zone sind nicht zwingend deckungsgleich, weil untergeordnete Namensbereiche delegiert werden können."),
    matchQuestion("master-net-09", "dns-zonen", "fortgeschritten", "Ordne den DNS-Zonentypen beziehungsweise Weiterleitungsarten ihre Aufgabe zu.", [
      { left: "Sekundäre Zone", right: "Schreibgeschützte Zonenkopie aus einer Zonenübertragung" },
      { left: "AD-integrierte Zone", right: "Zonendaten im Verzeichnisdienst mit AD-Replikation" },
      { left: "Stubzone", right: "Begrenzte Zonendaten zum Auffinden der autoritativen Nameserver" },
      { left: "Bedingte Weiterleitung", right: "Weitergabe von Anfragen für bestimmte DNS-Namensbereiche an festgelegte Resolver" }
    ], "Eine sekundäre Zone kopiert die Zonendaten; eine Stubzone enthält nur die zur Erreichbarkeit der autoritativen Server benötigte Teilmenge. Eine Weiterleitung ist keine Zonenkopie. Eine dateibasierte primäre Zone ist dagegen die beschreibbare Ausgangszone."),
    mc("master-net-10", "dns-aufloesung", "fortgeschritten", "Was unterscheidet eine rekursive von einer iterativen DNS-Anfrage?", ["Rekursiv: Auflösung erledigen lassen; iterativ: auch einen Weiterverweis erhalten","Rekursiv: nur Cache verwenden; iterativ: nur endgültige Antworten liefern","Rekursiv: Anfragen verschlüsseln; iterativ: dieselben Namen ohne Verschlüsselung übertragen","Rekursiv: Namen zu Adressen auflösen; iterativ: ausschließlich Adressen zu Namen auflösen"], 0, "Ein Client erwartet vom rekursiven Resolver eine abschließende Antwort oder einen Fehler. Der Resolver kann bei der weiteren Suche iterative Anfragen verwenden und Verweisen folgen."),
    matchQuestion("master-net-11", "dns-records", "grundlagen", "Ordne den DNS-Recordtypen ihre jeweilige Funktion zu.", [
      { left: "AAAA", right: "Ordnet einem Namen eine IPv6-Adresse zu" },
      { left: "CNAME", right: "Verweist von einem Aliasnamen auf einen anderen DNS-Namen" },
      { left: "NS", right: "Benennt einen autoritativen Nameserver für eine Zone" },
      { left: "SOA", right: "Enthält Verwaltungsangaben einer Zone, etwa Seriennummer und Zeitparameter" }
    ], "AAAA ist die IPv6-Adresszuordnung. CNAME ist ein Namensalias, keine unmittelbare IP-Zuordnung. NS und SOA beschreiben Zuständigkeit beziehungsweise Verwaltungsdaten der Zone."),
    mc("master-net-12", "dns-cache", "fortgeschritten", "Ein A-Record wurde auf dem autoritativen DNS-Server geändert. Ein Resolver liefert noch die alte Adresse aus seinem gültigen Cache. Welcher Wert begrenzt normalerweise deren weitere Cache-Nutzung?", ["Die DHCP-Leasezeit des Servers", "Die Anzahl der Gruppenmitgliedschaften des Benutzers", "Die Subnetzmaske des Clients", "Die verbleibende TTL des zwischengespeicherten Records"], 3, "TTL begrenzt die Cache-Gültigkeit. Eine Änderung am autoritativen Record entfernt bereits zwischengespeicherte Antworten nicht unmittelbar aus allen Resolvern."),
    mc("master-net-13", "dns-betrieb", "anspruchsvoll", "In einer dynamisch aktualisierten DNS-Zone bleiben Records längst entfernter Clients zurück. Welcher Mechanismus ist dafür vorgesehen, solche veralteten Einträge nach passenden Fristen zu bereinigen?", ["Nur die TTL verkürzen, ohne Records in der Zone zu bereinigen","DNS-Aging und Scavenging mit passend geplanten Fristen","Nur den DNS-Clientcache leeren, ohne den Datenbestand der Zone zu ändern","Nur die DHCP-Leasezeit erhöhen, ohne Alterung oder Bereinigung zu konfigurieren"], 1, "Aging erfasst die Alterung dynamischer Records; Scavenging kann ausreichend veraltete Einträge entfernen. Zeitstempel, Aktualisierung und Fristen müssen stimmen, damit gültige Einträge erhalten bleiben."),
    mc("master-net-14", "dns-sicherheit", "grundlagen", "Was schützt DNSSEC bei korrekt eingerichteter Validierung hauptsächlich?", ["Es verschlüsselt sämtliche DNS-Anfragen vor dem Netzbetreiber.", "Es vergibt automatisch vertrauenswürdige Webserverzertifikate.", "Es ermöglicht die Prüfung von Herkunft und Unverändertheit signierter DNS-Daten.", "Es verhindert unabhängig vom Serverzustand jeden DNS-Ausfall."], 2, "DNSSEC verwendet digitale Signaturen zur Authentizitäts- und Integritätsprüfung. Es verschlüsselt nicht automatisch die DNS-Kommunikation und ersetzt weder Verfügbarkeitsplanung noch TLS."),
    matchQuestion("master-net-15", "dienstports", "grundlagen", "Ordne den Diensten ihre üblichen Standardports zu.", [
      { left: "DNS", right: "TCP und UDP 53" },
      { left: "SMB", right: "TCP 445" },
      { left: "Kerberos", right: "TCP und UDP 88" },
      { left: "DHCPv4 (Server / Client)", right: "UDP 67 / UDP 68" },
      { left: "WinRM über HTTPS", right: "TCP 5986" }
    ], "Ports ordnen Kommunikation Diensten zu. Die Zuordnung ist keine pauschale Firewall-Freigabe: Nur erforderliche Dienste und Gegenstellen erlauben. DHCP-Failover nutzt zwischen seinen Partnern TCP 647."),
    matchQuestion("master-net-16", "verkabelung", "grundlagen", "Ordne den Begriffen der strukturierten Verkabelung die passende Beschreibung zu.", [
      { left: "Singlemode-Glasfaser", right: "Faser mit kleinem Kern für einen Ausbreitungsmodus; häufig für große Entfernungen" },
      { left: "Multimode-Glasfaser", right: "Faser mit größerem Kern für mehrere Ausbreitungsmoden; häufig für kürzere Strecken" },
      { left: "Cat 6A", right: "Kupfer-Verkabelungskategorie für 10GBASE-T bis 100 m bei normgerechtem Kanal" },
      { left: "Patchpanel", right: "Passiver Abschluss und Verteiler fester Leitungen, der keinen Switch ersetzt" }
    ], "Faser, Transceiver und Strecke müssen zusammenpassen. Bei Kupfer zählt der gesamte Kanal einschließlich Anschlüssen und Patchkabeln, nicht nur die Aufschrift eines einzelnen Kabels."),
    matchQuestion("master-net-17", "funktechniken", "grundlagen", "Ordne den Funkbegriffen ihren jeweiligen Schwerpunkt zu.", [
      { left: "Wi-Fi Direct", right: "Direkte WLAN-Verbindung zwischen Geräten ohne separaten Access Point" },
      { left: "Miracast", right: "Drahtlose Übertragung von Bildschirminhalten, typischerweise über Wi-Fi Direct" },
      { left: "NFC", right: "Kontaktlose Kommunikation über sehr kurze Distanz, etwa beim Antippen" },
      { left: "Bluetooth", right: "Kurzstreckenfunk im 2,4-GHz-Band, etwa für Headsets und Eingabegeräte" }
    ], "Wi-Fi Direct beschreibt eine Verbindungsart, Miracast die Bildschirmübertragung. Die tatsächliche Bluetooth-Reichweite hängt von Technik, Leistung und Umgebung ab und ist nicht pauschal auf zehn Meter festgelegt.")
  ],
  // Kapitel 1 und 11, S. 3–4 und 30–31: Einheiten, Hardware und Hybridbetrieb.
  "it-grundlagen": [
    { id: "master-base-01", subtopic: "einheiten", difficulty: "grundlagen", type: "text", question: "Eine Verbindung überträgt theoretisch 1 Gbit/s. Wie viele MB/s sind das ohne Protokoll-Overhead bei dezimalen Einheiten? (nur Zahl)", accepted: ["125"], explanation: "Ein Byte umfasst acht Bit. 1.000 Mbit/s geteilt durch acht ergibt theoretisch 125 MB/s; Protokolle, Datenträger und andere Engpässe können den Praxiswert senken." },
    mc("master-base-02", "einheiten", "grundlagen", "Welche Zuordnung von dezimaler und binärer Speichereinheit ist korrekt?", ["1 kB = 1.024 Byte; 1 KiB = 1.000 Byte", "1 kB = 1.000 Byte; 1 KiB = 1.024 Byte", "1 kB und 1 KiB bedeuten beide genau 1.000 Bit", "1 KiB ist eine Einheit für CPU-Taktfrequenzen"], 1, "SI-Präfixe wie kB verwenden Zehnerpotenzen, binäre Präfixe wie KiB Zweierpotenzen. Unterschiedliche Darstellungen erklären einen Teil scheinbar abweichender Kapazitätsangaben."),
    mc("master-base-03", "speicherschnittstellen", "grundlagen", "Warum ist die Aussage 'Jede M.2-SSD verwendet NVMe' falsch?", ["M.2 beschreibt ein Protokoll, das Daten unabhängig vom Anschluss überträgt","NVMe beschreibt die Länge der Platine, während M.2 die Speicherzellen festlegt","M.2 beschreibt die Bauform; das Gerät kann beispielsweise SATA oder PCIe/NVMe nutzen","Jeder mechanisch passende M.2-Steckplatz unterstützt unabhängig vom System jedes Protokoll"], 2, "Formfaktor, Schnittstelle und Protokoll sind verschiedene Eigenschaften. Eine M.2-SSD muss elektrisch und protokollseitig zum Steckplatz passen; die Bauform allein genügt nicht."),
    mc("master-base-04", "cloud-identitaet", "grundlagen", "Was unterscheidet Microsoft Entra ID von lokalem Active Directory Domain Services?", ["Entra ID ist lediglich der neue Dateiname der lokalen ntds.dit.", "Entra ID stellt automatisch dieselben klassischen Domänen-GPOs für jeden lokalen PC bereit.", "AD DS ist ausschließlich ein öffentlicher Cloudspeicher.", "Entra ID ist ein Cloud-Identitätsdienst; lokales AD DS und seine Domänenfunktionen werden dadurch nicht automatisch ersetzt."], 3, "Entra ID unterstützt Cloudidentitäten und Zugriffssteuerung. Klassische AD-Domänen mit DCs, Kerberos und GPOs sind ein anderes Modell; hybride Identitätskonzepte können beide verbinden."),
    matchQuestion("master-base-05", "cloud-hybrid", "grundlagen", "Ordne den Microsoft-Diensten ihre unterschiedliche Rolle zu.", [
      { left: "Azure Arc", right: "Bindet unter anderem Server außerhalb von Azure in zentrale Azure-Verwaltung ein" },
      { left: "Azure Local", right: "Betreibt eine mit Azure verbundene Infrastrukturplattform auf geeigneter lokaler Hardware" },
      { left: "Microsoft Intune", right: "Verwaltet registrierte Endgeräte und Apps über Cloudrichtlinien" }
    ], "Arc-Onboarding verschiebt eine lokale VM nicht automatisch nach Azure. Azure Local hieß zuvor Azure Stack HCI. Intune dient der Geräte- und Appverwaltung und benötigt passende Voraussetzungen und Lizenzen."),
    matchQuestion("master-base-06", "cloud-speicher", "grundlagen", "Ordne den Azure-Speicherdiensten die passende Art von Datenzugriff zu.", [
      { left: "Blob Storage", right: "Objektspeicher für unstrukturierte Daten, etwa Bilder oder Sicherungsobjekte" },
      { left: "Azure Files", right: "Verwaltete Dateifreigaben über SMB beziehungsweise in geeigneter Konfiguration NFS" },
      { left: "Table Storage", right: "Schemaloser NoSQL-Speicher für strukturierte Entitäten, keine relationale SQL-Tabelle" },
      { left: "Queue Storage", right: "Nachrichtenwarteschlangen zur Entkopplung von Anwendungskomponenten" }
    ], "Die Dienste unterscheiden sich durch Datenmodell und Zugriff. Ein Blobcontainer ist nicht automatisch eine SMB-Dateifreigabe; Table Storage ersetzt nicht die relationale SQL-Abfragesprache."),
    mc("master-base-07", "cloud-api", "fortgeschritten", "Ein Verwaltungsskript soll freigegebene Microsoft-365-Benutzerdaten über eine API abrufen. Welche Rolle hat Microsoft Graph dabei?", ["Einen authentisierten und berechtigungsgesteuerten Zugriff auf die Daten ermöglichen","Die Benutzerkonten ohne API-Abfrage lokal zwischenspeichern","Die Zustimmung zur Datenabfrage durch die bloße Kenntnis einer Benutzeradresse ersetzen","Ein vollständiges Desktopprogramm auf dem Endgerät jedes abgefragten Benutzers starten"], 0, "Microsoft Graph erschließt Microsoft-365- und Entra-Daten über APIs. Authentisierung, Einwilligung beziehungsweise Berechtigungen und minimale Rechte bleiben notwendig; JSON ist ein Datenformat und keine Zugriffsberechtigung."),
    mc("master-base-08", "cloud-automatisierung", "grundlagen", "Was beschreibt das Grundprinzip eines ereignisgesteuerten Power-Automate-Flows?", ["Nur das Öffnen des Flow-Editors führt die Aktionen aus","Ein Ereignis löst definierte Aktionen mit möglichen Bedingungen aus","Ein Ereignis erzeugt nur eine Dokumentation, ohne nachgelagerte Aktionen starten zu können","Jeder Flow muss unabhängig vom Auslöser sämtliche verbundenen Dienste vollständig kopieren"], 1, "Ein Trigger, etwa das Eintreffen eines Formulars, startet Aktionen wie eine Genehmigungsanforderung. Verbindungen und Berechtigungen müssen passend eingerichtet sein."),
    mc("master-base-09", "cloud-datenschutz", "fortgeschritten", "Ein Team synchronisiert seinen Projektordner mit OneDrive. Eine versehentliche Löschung wird ebenfalls synchronisiert. Welche Schlussfolgerung ist richtig?", ["Synchronisierung erhält ohne Konfiguration alle Versionen unbegrenzt","Jede lokal gelöschte Datei bleibt durch Synchronisierung grundsätzlich unverändert in der Cloud","Synchronisierung allein ersetzt kein geprüftes Sicherungs- und Wiederherstellungskonzept","Eine zweite synchronisierte Kopie ist gegen synchronisierte Löschungen automatisch unabhängig"], 2, "Synchronisierung verteilt auch unerwünschte Änderungen. Vorhandene Versionen und Papierkörbe können helfen, ersetzen aber keine Prüfung von Aufbewahrungsfristen, Risiken und Wiederherstellung."),
    matchQuestion("master-base-10", "cpu", "grundlagen", "Ordne den CPU-Begriffen ihre Bedeutung zu.", [
      { left: "CPU-Sockel", right: "Aufnahme für ein physisches Prozessorpaket auf der Hauptplatine" },
      { left: "CPU-Kern", right: "Physische Verarbeitungseinheit innerhalb eines Prozessors" },
      { left: "SMT / Hyper-Threading", right: "Stellt über einen physischen Kern mehrere logische Ausführungskontexte bereit" }
    ], "Sockel, Kerne und logische Prozessoren sind nicht gleichzusetzen. SMT macht aus einem Kern keine zwei vollständig unabhängigen physischen Kerne; der Leistungsgewinn hängt von der Arbeitslast ab.")
  ],
  // Kapitel 12, S. 32–35: Bedrohungen, mobile Geräte und Passwortspeicherung.
  "it-sicherheit": [
    matchQuestion("master-sec-01", "malware", "grundlagen", "Ordne den Schadsoftware-Begriffen ihr kennzeichnendes Merkmal zu.", [
      { left: "Virus", right: "Hängt sich typischerweise an andere Dateien oder Programme" },
      { left: "Wurm", right: "Verbreitet sich selbstständig zwischen Systemen" },
      { left: "Trojaner", right: "Tarnt eine schädliche Funktion als erwünschtes Programm" },
      { left: "Keylogger", right: "Zeichnet Tastatureingaben auf" }
    ], "Die Begriffe beschreiben unterschiedliche Eigenschaften und können sich bei einem Schadprogramm überschneiden. Für diese Zuordnung ist jeweils das kennzeichnende Merkmal entscheidend."),
    mc("master-sec-02", "social-engineering", "grundlagen", "Was wird mit Quishing bezeichnet?", ["Das Verschlüsseln eines QR-Codes mit einem privaten Schlüssel", "Die automatische Prüfung einer QR-Code-Zielseite durch den Browser", "Das Ausspähen von Tastatureingaben durch einen Treiber", "Phishing, bei dem ein QR-Code zum betrügerischen Ziel führt"], 3, "QR-Codes können die eigentliche Zieladresse zunächst verbergen. Auch bei einem gescannten Code müssen Ziel und Anlass geprüft werden; der Code selbst ist kein Vertrauensnachweis."),
    multi("master-sec-03", "social-engineering", "fortgeschritten", "Eine angebliche Führungskraft fordert per Sprachnachricht dringend eine ungewöhnliche Überweisung. Auch die Stimme könnte nachgeahmt sein. Welche Schritte sind angemessen?", ["Die Anweisung über eine bereits bekannte, unabhängig ermittelte Kontaktmöglichkeit bestätigen lassen", "Allein die vertraut klingende Stimme als ausreichenden Nachweis behandeln", "Vorgesehene Freigabe- und Vier-Augen-Verfahren trotz Zeitdruck einhalten", "Die in der verdächtigen Nachricht neu genannte Rückrufnummer als unabhängige Prüfung verwenden"], [0, 2], "CEO-Fraud nutzt Autorität und Zeitdruck; Deepfakes können Stimme oder Bild nachahmen. Eine unabhängige Bestätigung und etablierte Freigabeverfahren sind deshalb wichtiger als der bloße Eindruck von Echtheit."),
    mc("master-sec-04", "physische-sicherheit", "grundlagen", "Was bedeutet Tailgating im Zusammenhang mit Zutrittskontrolle?", ["Das automatische Sperren eines unbenutzten Computers", "Unberechtigtes Mitgehen hinter einer berechtigten Person durch eine gesicherte Tür", "Das Verschlüsseln eines mobilen Datenträgers", "Das Überlasten einer Firewall durch zu viele Verbindungen"], 1, "Tailgating umgeht eine physische Zugangskontrolle. Besucherregelungen und einzeln geprüfte Zutritte helfen; eine Netzwerkanmeldung allein schützt keinen Serverraum."),
    mc("master-sec-05", "mobile-geraete", "fortgeschritten", "Ein verwaltetes Smartphone geht verloren und ist ausgeschaltet. Warum darf sich die IT nicht allein auf eine sofortige MDM-Fernlöschung verlassen?", ["Die Löschung ist bereits abgeschlossen, sobald der Administrator den Auftrag bestätigt","Die Registrierung im MDM ermöglicht die Fernlöschung auch ohne jede Stromversorgung","Der Löschauftrag kann erst wirken, wenn Gerät und Verwaltungsdienst wieder kommunizieren","Das lokale Ausschalten erfüllt bereits denselben Schutz wie das sichere Löschen der Daten"], 2, "Ein Offlinegerät kann den Löschbefehl zunächst nicht empfangen. Vorbeugender Schutz, Sperrung von Zugängen und ein geregelter Vorfallprozess sind zusätzlich erforderlich."),
    multi("master-sec-06", "mobile-geraete", "grundlagen", "Welche Einstellungen begrenzen unnötigen Datenzugriff durch Apps auf einem betrieblich genutzten Smartphone?", ["Jeder App vorsorglich Zugriff auf alle Kontakte geben", "Standortzugriff nur bei fachlichem Bedarf erlauben", "Unbekannten Apps dauerhaft Mikrofon- und Kamerazugriff erlauben", "Nicht benötigte Kamera-, Mikrofon- und Kontaktberechtigungen entziehen"], [1, 3], "App-Berechtigungen sollen zum tatsächlichen Zweck passen. Ein legitimer App-Name ist kein Grund für pauschalen Zugriff auf alle Sensoren und Unternehmensdaten."),
    mc("master-sec-07", "passwoerter", "grundlagen", "Was unterscheidet einen Pepper von einem Salt bei der Passwortspeicherung?", ["Ein Pepper ist ein zusätzliches Geheimnis, das getrennt von der Passwortdatenbank geschützt wird; der individuelle Salt muss nicht geheim sein.", "Ein Salt muss geheim bleiben, während ein Pepper immer öffentlich im Benutzernamen steht.", "Ein Pepper ist lediglich ein anderer Name für den fertigen Hashwert.", "Ein Pepper macht eine geeignete Passwortfunktion und starke Passwörter überflüssig."], 0, "Ein Salt verhindert insbesondere die gemeinsame Nutzung von Vorberechnungen für viele Konten. Ein optionaler Pepper ist eine zusätzliche geheime Eingabe und braucht eine getrennte, sichere Verwaltung."),
    mc("master-sec-08", "windows-authentisierung", "anspruchsvoll", "Welche Aussage verhindert ein Missverständnis beim Übertragen des allgemeinen Salt-Prinzips auf Windows-Passwörter?", ["Eine Kennwort-GPO versieht automatisch jeden klassischen NT-Hash mit einem zufälligen Salt.", "Ein NT-Hash ist eine verschlüsselte Klartextdatei mit einem öffentlichen Entschlüsselungsschlüssel.", "Alle Windows-Authentisierungsverfahren speichern identische gesalzene Werte.", "Der klassische NT-Hash ist ungesalzen; die allgemeinen Empfehlungen zur Passwortspeicherung beschreiben nicht automatisch dieses Windows-Verfahren."], 3, "Der klassische NT-Hash basiert auf MD4 des passend kodierten Kennworts und enthält keinen individuellen Salt. Pass-the-Hash kann geeignete erbeutete Hashes zur Authentisierung missbrauchen, ohne das Klartextkennwort zu kennen. Schutz privilegierter Anmeldungen bleibt daher wichtig.")
  ],
  // Kapitel 13, S. 35–38: T-SQL-Datentypen und Auswertungssemantik.
  "sql": [
    matchQuestion("master-sql-01", "datentypen", "grundlagen", "Ordne den SQL-Server-Datentypen die passende Bedeutung zu.", [
      { left: "INT", right: "Ganze Zahl" },
      { left: "DECIMAL(10,2)", right: "Exakte Dezimalzahl mit insgesamt zehn Stellen, davon zwei Nachkommastellen" },
      { left: "DATE", right: "Kalenderdatum ohne Uhrzeit" },
      { left: "BIT", right: "Wert 0 oder 1; zusätzlich NULL, falls die Spalte dies erlaubt" }
    ], "Datentypen legen zulässige Werte fest. DECIMAL eignet sich für exakte Dezimalwerte; (10,2) bedeutet nicht zehn Vor- plus zwei Nachkommastellen."),
    mc("master-sql-02", "identity", "fortgeschritten", "Eine SQL-Server-Tabelle verwendet IDENTITY(1,1). Nach einem fehlgeschlagenen Einfügevorgang fehlt eine Nummer. Welche Aussage ist richtig?", ["IDENTITY garantiert immer eine lückenlose Nummernfolge.", "Lücken sind möglich; Eindeutigkeit sollte zusätzlich durch PRIMARY KEY oder UNIQUE abgesichert werden.", "Eine fehlende Nummer beweist, dass die Datenbankdatei beschädigt ist.", "IDENTITY sorgt automatisch für die alphabetische Reihenfolge aller Datensätze."], 1, "IDENTITY erzeugt Werte, garantiert aber weder Lückenlosigkeit noch allein die Eindeutigkeit der Spalte. Eine Schlüssel- beziehungsweise UNIQUE-Bedingung dient der Eindeutigkeitsprüfung."),
    orderQuestion("master-sql-03", "logische-verarbeitung", "fortgeschritten", "Ordne diese Phasen einer SELECT-Abfrage nach ihrer vereinfachten logischen Verarbeitung, nicht nach ihrer Schreibreihenfolge oder dem physischen Ausführungsplan.", ["FROM / ON / JOIN: Ausgangszeilen bilden", "WHERE: Ausgangszeilen filtern", "GROUP BY: Gruppen bilden", "HAVING: Gruppen filtern", "SELECT: Ausgabespalten bestimmen", "ORDER BY: Ergebnis sortieren"], "Die logische Verarbeitung beginnt bei den Datenquellen. Dadurch kann ein SELECT-Alias gewöhnlich bei ORDER BY, aber nicht schon bei WHERE verwendet werden. Der Optimierer darf einen anderen physischen Ausführungsplan wählen."),
    mc("master-sql-04", "outer-join-filter", "anspruchsvoll", "Eine Abfrage nutzt Kunden k LEFT JOIN Bestellungen b ON k.ID = b.KundenID. Kunden ohne Bestellung sollen erhalten bleiben, aber nur Bestellungen mit Status 'offen' zugeordnet werden. Wo gehört b.Status = 'offen' hin?", ["Als zusätzliche AND-Bedingung in die ON-Klausel des LEFT JOIN", "Als alleinige Bedingung in die WHERE-Klausel", "Anstelle der Bedingung k.ID = b.KundenID", "Ausschließlich in ORDER BY"], 0, "Die zusätzliche ON-Bedingung begrenzt passende rechte Zeilen und erhält trotzdem jede linke Kundenzeile. WHERE b.Status = 'offen' entfernt die NULL-Zeilen ohne passenden Treffer und verändert damit das gewünschte Ergebnis."),
    mc("master-sql-05", "views", "fortgeschritten", "Eine Anwendung liest aus einer SQL-View und benötigt stets alphabetisch sortierte Kundennamen. Worauf muss sie sich stützen?", ["Die physische Reihenfolge der Datensätze auf dem Datenträger", "Den Namen der View, wenn darin 'Sortiert' vorkommt", "Ein ORDER BY in ihrer äußeren SELECT-Abfrage", "Die Reihenfolge, in der die Kunden ursprünglich eingefügt wurden"], 2, "Eine View ist eine gespeicherte Abfragedefinition und garantiert keine Ausgabereihenfolge. Die konkrete äußere Abfrage muss ihre gewünschte Sortierung selbst festlegen."),
    mc("master-sql-06", "zeichendatentypen", "anspruchsvoll", "Welche Aussage zu VARCHAR(n) und NVARCHAR(n) in SQL Server ist korrekt?", ["n bezeichnet bei beiden Typen immer exakt die Anzahl sichtbarer Zeichen.", "VARCHAR speichert ausschließlich Zahlen, NVARCHAR ausschließlich Datumswerte.", "NVARCHAR verbietet Unicode-Zeichen außerhalb des ASCII-Bereichs.", "Bei VARCHAR begrenzt n die Bytes; bei NVARCHAR die UTF-16-Codeeinheiten, sodass nicht jedes Zeichen genau eine Einheit benötigt."], 3, "Die Länge ist nicht pauschal mit der Zahl sichtbarer Zeichen gleichzusetzen. Insbesondere ergänzende Unicode-Zeichen können zwei UTF-16-Codeeinheiten benötigen; bei VARCHAR hängt der Platzbedarf von der Kodierung ab.")
  ],
  // Kapitel 3, S. 8–10: gezielte Ergänzungen statt weiterer ähnlicher /24-Rechnungen.
  "ipv4": [
    matchQuestion("master-ip-01", "praefix-sonderfaelle", "fortgeschritten", "Ordne den IPv4-Präfixen die passende Adressierungsbedeutung im angegebenen Einsatz zu.", [
      { left: "/30 im klassischen Subnetzmodell", right: "Vier Adressen insgesamt, davon zwei gewöhnliche Hostadressen" },
      { left: "/31 auf einer dafür unterstützten Punkt-zu-Punkt-Verbindung", right: "Zwei Adressen für die beiden Endpunkte ohne Abzug von Netz- und Broadcastadresse" },
      { left: "/32 als Hostroute", right: "Bezeichnet genau eine IPv4-Adresse" }
    ], "Die übliche Minus-zwei-Regel gilt nicht unverändert für jeden Präfix. /31 hat einen besonderen Punkt-zu-Punkt-Einsatz; /32 adressiert ein einzelnes Ziel."),
    mc("master-ip-02", "nat-pat", "fortgeschritten", "Mehrere interne Clients teilen sich gleichzeitig eine öffentliche IPv4-Adresse. Wodurch unterscheidet PAT ihre Verbindungen nach außen zusätzlich?", ["Durch eine eigene öffentliche MAC-Adresse je Client", "Durch die Zuordnung von Transportprotokoll und Portnummern zusammen mit den Adressen", "Durch einen anderen DNS-Zonennamen für jedes einzelne Paket", "Ausschließlich durch die Länge des Computernamens"], 1, "PAT übersetzt neben Adressen auch Portzuordnungen, damit Antworten zur passenden Verbindung zurückfinden. Diese Übersetzung allein ersetzt keine Firewallregeln und keine Prüfung erlaubter Verbindungen.")
  ],
  // Kapitel 8 und 9, S. 22–27: Identitäten, Gruppen und differenzierte GPO-Verwaltung.
  "windows-netzwerke": [
    mc("master-win-01", "sid", "fortgeschritten", "Ein AD-Benutzer wird gelöscht und später mit demselben Anmeldenamen neu angelegt. Warum greifen seine alten, direkt vergebenen Dateirechte nicht automatisch wieder?", ["Das neue Konto hat eine neue SID; alte Rechte beziehen sich auf die frühere SID","NTFS vergibt beim ersten Anmelden dieselbe SID an jedes Konto mit gleichem Anzeigenamen","Die alte SID bleibt unverändert und wird nur bis zum nächsten Kennwortwechsel gesperrt","Das Neuanlegen übernimmt die alte SID erst nach einer Änderung des DNS-Hosteintrags"], 0, "Berechtigungen beziehen sich auf Sicherheitskennungen, nicht nur auf sichtbare Namen. Umbenennen erhält die SID; Löschen und Neuanlegen erzeugt dagegen eine neue Identität. Der RID ist der relative, letzte Teil einer entsprechenden SID."),
    mc("master-win-02", "ad-gruppentypen", "grundlagen", "Welche AD-Gruppenart ist für die Vergabe von NTFS-Zugriffsrechten vorgesehen?", ["Eine Verteilergruppe, weil alle Empfänger automatisch Zugriffsrechte erhalten", "Eine Sicherheitsgruppe", "Eine beliebige Kontaktliste im E-Mail-Programm", "Eine OU, die als Benutzergruppe in die DACL eingetragen wird"], 1, "Sicherheitsgruppen sind für Zugriffskontrolle aktiviert. Verteilergruppen dienen der Verteilung, beispielsweise von E-Mails; eine OU ist ein Verwaltungscontainer und keine Berechtigungsgruppe."),
    matchQuestion("master-win-03", "ad-gruppenbereiche", "fortgeschritten", "Ordne den AD-Gruppenbereichen ihre Mitgliedschaftsregel für Benutzerkonten zu. Es gelten die üblichen modernen AD-Gruppenregeln.", [
      { left: "Globale Gruppe", right: "Benutzerkonten als Mitglieder dürfen nur aus ihrer eigenen Domäne stammen" },
      { left: "Universelle Gruppe", right: "Benutzerkonten als Mitglieder dürfen aus beliebigen Domänen derselben Gesamtstruktur stammen, nicht aus fremden Gesamtstrukturen" },
      { left: "Domänenlokale Gruppe", right: "Kann auch Benutzerkonten aus passenden vertrauenswürdigen fremden Domänen aufnehmen; Rechte gelten für Ressourcen ihrer eigenen Domäne" }
    ], "Gruppenbereich und Gruppentyp sind getrennte Eigenschaften. Globale Gruppen bündeln häufig Rollen einer Domäne, domänenlokale Gruppen deren Ressourcenrechte. Universelle Gruppen können forestweite Rollen zusammenfassen; Gruppenverschachtelung hat zusätzliche Regeln."),
    matchQuestion("master-win-04", "ad-struktur", "grundlagen", "Ordne den AD-Begriffen ihre jeweilige Aufgabe zu.", [
      { left: "Schema", right: "Definiert mögliche Objektklassen und Attribute im Verzeichnis" },
      { left: "Globaler Katalog", right: "Ermöglicht forestweite Suche mit einem Teil der Attribute aller Forest-Objekte" },
      { left: "Standort / Site", right: "Bildet Netzwerktopologie mit Subnetzen für DC-Auswahl und Replikation ab" },
      { left: "SYSVOL", right: "Enthält replizierte dateibasierte Bestandteile von Gruppenrichtlinien und Anmeldeskripten" }
    ], "Eine OU bildet Verwaltungszuständigkeit ab, eine Site die Netzwerktopologie. SYSVOL ergänzt die AD-Datenbank ntds.dit; funktionierende AD-Replikation allein beweist noch nicht die korrekte Replikation aller GPO-Dateien."),
    orderQuestion("master-win-05", "kerberos", "fortgeschritten", "Ordne den vereinfachten Kerberos-Ablauf für einen erstmaligen Dienstzugriff ohne bereits vorhandene Tickets. DNS und Zeitsynchronisation funktionieren.", ["Client authentisiert sich beim KDC und erhält ein Ticket Granting Ticket (TGT)", "Client fordert mithilfe des TGT ein Ticket für den gewünschten Dienst an", "KDC stellt das passende Dienstticket aus", "Client legt das Dienstticket beim Dienst vor"], "Das TGT dient zum Anfordern von Diensttickets, nicht unmittelbar als Ticket für jede Ressource. Nach erfolgreicher Authentisierung prüft der Dienst zusätzlich die benötigten Zugriffsrechte."),
    matchQuestion("master-win-06", "gpo-standardrichtlinien", "grundlagen", "Ordne den Standard-GPOs ihre typische Verknüpfung und ihren Schwerpunkt zu.", [
      { left: "Default Domain Policy", right: "An der Domäne verknüpft; insbesondere domänenweite Kennwort-, Kontosperr- und Kerberos-Richtlinien" },
      { left: "Default Domain Controllers Policy", right: "An der OU Domain Controllers verknüpft; insbesondere Sicherheitsvorgaben für Domänencontroller" }
    ], "Die DC-Richtlinie ist keine allgemeine Richtlinie für sämtliche Mitgliedsserver. Weitere Einstellungen lassen sich in eigenen, passend verknüpften GPOs verwalten."),
    mc("master-win-07", "gpo-kennwoerter", "anspruchsvoll", "Nur eine bestimmte Gruppe von Domänenbenutzern soll abweichende Kennwort- und Kontosperrvorgaben erhalten. Welches AD-Konzept ist dafür vorgesehen?", ["Eine gewöhnliche Kennwort-GPO ausschließlich an der OU der Benutzer verknüpfen","Die Default Domain Controllers Policy nur nach dieser Benutzergruppe filtern","Fine-Grained Password Policies über passende Password Settings Objects","Die lokale Kennwortrichtlinie auf einem einzelnen Mitgliedsserver für die Gruppe ändern"], 2, "PSOs ermöglichen differenzierte Kennwort- und Sperrrichtlinien. Sie werden nicht direkt einer OU zugewiesen; eine beliebige OU-Kennwort-GPO ersetzt dieses Konzept für Domänenkonten nicht."),
    mc("master-win-08", "gpo-filter", "fortgeschritten", "Eine verknüpfte GPO soll nur auf Computern gelten, die eine abgefragte Betriebssystemeigenschaft erfüllen. Welcher Mechanismus prüft solche Systemeigenschaften?", ["Ein DNS-MX-Record", "Eine Freigabeberechtigung", "Ein DHCP-Ausschlussbereich", "Ein WMI-Filter an der GPO"], 3, "WMI-Filter prüfen Systemeigenschaften. Sie ergänzen Verknüpfung und Sicherheitsfilter; aufwendige Abfragen können die Richtlinienverarbeitung verzögern."),
    mc("master-win-09", "gpo-preferences", "fortgeschritten", "Eine Einstellung wurde per Group Policy Preferences gesetzt. Der Computer verlässt später den Wirkungsbereich. Warum darf man nicht pauschal erwarten, dass der frühere lokale Wert wiederhergestellt wird?", ["Preferences können Werte hinterlassen; eine Rücknahme hängt von der Konfiguration ab","Das Verlassen des Wirkungsbereichs stellt den ursprünglichen Wert immer automatisch wieder her","gpupdate /force stellt jede zuvor gesetzte Preference auf den ursprünglichen lokalen Wert zurück","Preferences werden nur im Arbeitsspeicher gehalten und verschwinden beim nächsten Neustart"], 0, "Preferences setzen bevorzugte Konfigurationen und können Werte dauerhaft verändern. Richtlinien und Preferences haben unterschiedliche Verhaltensweisen; eine automatische Rücknahme muss gezielt geprüft werden."),
    mc("master-win-10", "gpo-aktualisierung", "fortgeschritten", "Eine korrekt verknüpfte GPO wurde geändert. Was bewirkt gpupdate /force auf einem erreichbaren Windows-Client?", ["Es wendet die Richtlinien ohne Beachtung von Sicherheits- und WMI-Filtern an","Es stößt die erneute Verarbeitung der Benutzer- und Computerrichtlinien an","Es repliziert sämtliche GPO-Änderungen sofort zwischen allen Domain Controllern","Es übernimmt auch neustartpflichtige Einstellungen zwingend ohne Abmeldung oder Neustart"], 1, "Die normale Hintergrundaktualisierung liegt bei Domänenclients typischerweise bei 90 Minuten plus bis zu 30 Minuten Zufallsversatz, bei DCs bei fünf Minuten. gpupdate repariert keine falsche Verknüpfung oder Filterung."),
    mc("master-win-11", "benutzerprofile", "grundlagen", "Was unterscheidet ein servergespeichertes Benutzerprofil von einer Ordnerumleitung?", ["Profile verschieben die gesamte Windows-Installation; Ordnerumleitung kopiert alle Anwendungen","Profile gelten ausschließlich für Computerobjekte; Ordnerumleitung ausschließlich für lokale Gruppen","Profile synchronisieren Profilbestandteile; Ordnerumleitung ändert ausgewählte Speicherpfade","Profile und Ordnerumleitung sind zwei Namen für die Replikation von Benutzerkennwörtern"], 2, "Profile betreffen Benutzereinstellungen und Profildaten, Ordnerumleitung ausgewählte Ordner wie Dokumente. Installierte Anwendungen folgen nicht automatisch; Profilversionen, Rechte und Offlineverhalten müssen berücksichtigt werden.")
  ],
  // Kapitel 5–7, 10 und 14, S. 13–21, 27–30 und 39–41.
  "windows-server-admin": [
    matchQuestion("master-srv-01", "speicherbegriffe", "grundlagen", "Ordne die Begriffe Datenträger, Partition, Volume und Dateisystem ihren Bedeutungen zu.", [
      { left: "Datenträger", right: "Physischer oder virtueller Speicherträger, etwa eine SSD oder virtuelle Festplatte" },
      { left: "Partition", right: "Durch die Partitionstabelle abgegrenzter Bereich eines Datenträgers" },
      { left: "Volume", right: "Logischer Speicherbereich, den das Betriebssystem beispielsweise über einen Laufwerksbuchstaben oder Einhängepunkt bereitstellt" },
      { left: "Dateisystem", right: "Organisationsstruktur für Dateien und Verzeichnisse, etwa NTFS" }
    ], "Partition und Volume können im einfachen Fall zusammenfallen, sind aber nicht dasselbe Konzept. Ein Volume benötigt nicht zwingend einen Laufwerksbuchstaben; zwei Volumes auf derselben SSD bieten noch keine physische Redundanz."),
    mc("master-srv-02", "partitionierung", "fortgeschritten", "Ein 4-TB-Datenträger mit logischen 512-Byte-Sektoren soll vollständig für ein modernes Windows-Datenvolume genutzt werden. Welches Partitionsschema vermeidet die klassische MBR-Größengrenze?", ["FAT32, weil es die Partitionstabelle ersetzt", "MBR mit einem längeren Laufwerksbuchstaben", "GPT", "NTFS-Kompression ohne Änderung der Partitionstabelle"], 2, "MBR adressiert bei 512-Byte-Sektoren nur ungefähr 2 TiB. GPT unterstützt größere Datenträger. GPT/MBR beschreiben die Partitionierung, NTFS/FAT32 dagegen Dateisysteme; Umstellungen müssen mit Datensicherung geplant werden."),
    matchQuestion("master-srv-03", "raid", "fortgeschritten", "Ordne den RAID-Varianten ihre Redundanzeigenschaft bei gleich großen Laufwerken zu.", [
      { left: "RAID 5", right: "Verteilte einfache Parität; toleriert einen Laufwerksausfall" },
      { left: "RAID 6", right: "Verteilte doppelte Parität; toleriert zwei beliebige Laufwerksausfälle" },
      { left: "RAID 10 aus Zweier-Spiegelpaaren", right: "Striping über Spiegelpaare; mehrere Ausfälle sind nur überlebbar, wenn kein Paar vollständig ausfällt" }
    ], "RAID 5 benötigt mindestens drei, RAID 6 mindestens vier Laufwerke. Das übliche RAID 10 aus Zweier-Spiegelpaaren benötigt mindestens vier Laufwerke. Redundanz schützt nicht vor versehentlichem Löschen oder Ransomware und ersetzt kein Backup."),
    mc("master-srv-04", "storage-spaces", "fortgeschritten", "Ein Storage-Pool enthält 10 TB physischen Speicher. Per Thin Provisioning wurden Volumes mit zusammen 18 TB logischer Kapazität angelegt. Was muss der Betrieb besonders überwachen?", ["Den real belegten Speicher und die rechtzeitige Erweiterung des Pools","Nur die Summe der logischen Größen, unabhängig von der tatsächlichen Belegung","Nur die Zahl der Volume-Namen, weil sie die physische Kapazität festlegt","Die Annahme, dass 18 TB logische Größe bereits 18 TB verfügbare Laufwerke garantiert"], 0, "Thin Provisioning reserviert physischen Platz nach Bedarf, nicht vollständig bei der logischen Zuweisung. Ohne rechtzeitige Erweiterung kann der Pool voll werden, obwohl ein Volume noch freie logische Kapazität anzeigt."),
    multi("master-srv-05", "ntfs-funktionen", "fortgeschritten", "Welche Aussagen zu NTFS-Kompression und EFS sind korrekt?", ["NTFS-Kompression ersetzt die Verschlüsselung vertraulicher Dateien.", "NTFS-Kompression und EFS können nicht gleichzeitig auf dieselbe Datei angewendet werden.", "EFS benötigt geeignete Zertifikate und private Schlüssel zum Entschlüsseln.", "Ein Dateiname mit der Endung .efs genügt als Verschlüsselungsschutz."], [1, 2], "Kompression spart je nach Daten Platz, EFS schützt Dateiinhalte kryptografisch. Eine Datei kann nicht zugleich NTFS-komprimiert und EFS-verschlüsselt sein; Schlüsselwiederherstellung muss geplant werden."),
    mc("master-srv-06", "ntfs-rechte", "fortgeschritten", "Für einen Ordner gilt ausschließlich das NTFS-Standardrecht 'Schreiben', ohne zusätzliches Lesen, Löschen oder 'Unterordner und Dateien löschen'. Welche Aussage ist korrekt?", ["Schreiben umfasst automatisch das vollständige Recht Ändern.", "Schreiben garantiert auch das Lesen aller bestehenden Dateien.", "Schreiben erlaubt automatisch das Ändern der Ordnerberechtigungen.", "Schreiben allein gewährt weder automatisch Lesen noch Löschen."], 3, "Die Standardrechte sind Pakete aus Einzelrechten. 'Ändern' enthält mehr als 'Schreiben', insbesondere Lesen und Löschen. Zusätzliche Rechte am Objekt oder Elternordner müssen bei realen Zugriffen gesondert geprüft werden."),
    mc("master-srv-07", "ntfs-vererbung", "fortgeschritten", "Eine Datei wird im Windows-Explorer innerhalb desselben NTFS-Volumes in einen anderen Ordner verschoben. Es gibt keine Sonderkonfiguration oder nachträgliche ACL-Anpassung. Was geschieht normalerweise mit ihren bisherigen NTFS-Berechtigungen?", ["Die Datei erbt unabhängig von den genannten Bedingungen stets nur die Rechte des Zielordners","Die bisherigen NTFS-Berechtigungen bleiben gewöhnlich erhalten","Die Datei übernimmt beim Verschieben stets ausschließlich die Rechte des ausführenden Benutzers","Die Datei erhält automatisch dieselben Berechtigungen wie die Netzwerkfreigabe des Zielordners"], 1, "Beim üblichen Verschieben innerhalb desselben NTFS-Volumes bleibt das Objekt mit seinen Rechten erhalten. Kopieren oder volumenübergreifendes Verschieben erzeugt dagegen typischerweise ein neues Objekt mit Zielvererbung. Werkzeuge mit expliziten Sicherheitsoptionen können davon abweichen."),
    mc("master-srv-08", "efs-besitz", "anspruchsvoll", "Ein Administrator übernimmt den Besitz einer EFS-verschlüsselten Datei und erteilt sich NTFS-Vollzugriff. Der passende private EFS-Schlüssel und ein Wiederherstellungsschlüssel fehlen. Was folgt daraus?", ["Die Besitzübernahme allein entschlüsselt die Dateiinhalte nicht.", "NTFS-Vollzugriff ersetzt den privaten EFS-Schlüssel automatisch.", "Der öffentliche Teil eines beliebigen Zertifikats genügt zur Entschlüsselung.", "Das Umbenennen der Datei entfernt die Verschlüsselung."], 0, "Berechtigungen und kryptografische Entschlüsselung sind getrennt. Besitzübernahme ermöglicht Rechteverwaltung, ersetzt aber nicht den passenden privaten Schlüssel oder einen eingerichteten Wiederherstellungsweg."),
    matchQuestion("master-srv-09", "druckverwaltung", "grundlagen", "Ordne den Windows-Druckerberechtigungen ihre zentrale Aufgabe zu.", [
      { left: "Drucken", right: "Druckaufträge senden und eigene Aufträge verwalten" },
      { left: "Dokumente verwalten", right: "Auch Druckaufträge anderer Benutzer in der Warteschlange verwalten" },
      { left: "Drucker verwalten", right: "Druckerobjekt und dessen Einstellungen administrieren" }
    ], "Druckerberechtigungen gelten für das Windows-Druckerobjekt beziehungsweise die Warteschlange. Druckergerät, Anschluss, Treiber und Spooler sind weitere getrennt zu prüfende Komponenten."),
    mc("master-srv-10", "powershell", "grundlagen", "Was gibt Get-Service | Where-Object Status -eq 'Running' in PowerShell aus?", ["Nur den Klartext aller Dateien im Windows-Verzeichnis", "Eine Liste ausschließlich ausgeschalteter Rechner", "Die Dienstobjekte, deren Status Running ist", "Die Namen aller Benutzer, die lokale Administratoren sind"], 2, "PowerShell übergibt hier Objekte durch die Pipeline. Where-Object filtert deren Eigenschaft Status. Anders als eine reine Textsuche kann die Pipeline strukturierte Eigenschaften gezielt auswerten."),
    matchQuestion("master-srv-11", "diagnosewerkzeuge", "fortgeschritten", "Ordne den Diagnosebefehlen die jeweils gezielte Prüfung zu.", [
      { left: "Test-NetConnection FS01 -Port 445", right: "TCP-Erreichbarkeit des SMB-Ports am Ziel prüfen" },
      { left: "dcdiag", right: "Diagnosetests für Domänencontroller ausführen" },
      { left: "whoami /groups", right: "Gruppen im aktuellen Anmeldetoken anzeigen" },
      { left: "Get-NetTCPConnection", right: "TCP-Verbindungen und lauschende TCP-Endpunkte anzeigen" }
    ], "Ein erreichbarer Host ist nicht automatisch ein funktionierender Dienst. Die Werkzeuge prüfen unterschiedliche Ebenen; nach Gruppenänderungen kann ein neues Anmeldetoken nötig sein."),
    matchQuestion("master-srv-12", "storage-monitoring", "grundlagen", "Ordne den Speicherkennzahlen die richtige Bedeutung zu.", [
      { left: "Kapazität", right: "Verfügbare oder belegte Datenmenge, etwa in TB" },
      { left: "IOPS", right: "Anzahl der Ein-/Ausgabeoperationen pro Sekunde" },
      { left: "Durchsatz", right: "Übertragene Datenmenge pro Zeit, etwa in MB/s" },
      { left: "Latenz", right: "Zeit bis zur Bearbeitung beziehungsweise Antwort eines Zugriffs" }
    ], "Viel freier Speicher beweist keine ausreichende Leistung. IOPS, Durchsatz und Latenz hängen unter anderem von Zugriffsmuster, Blockgröße, Warteschlangen und Storage-Pfaden ab."),
    mc("master-srv-13", "hyper-v-ressourcen", "fortgeschritten", "Ein Host besitzt acht physische CPU-Kerne. Seinen VMs werden insgesamt 24 vCPUs zugewiesen. Welche Aussage beschreibt diese Zuweisung korrekt?", ["Die Zuweisung reserviert jeder vCPU dauerhaft einen eigenen physischen Kern","Die vCPUs teilen sich reale CPU-Zeit; die Leistung hängt von der gleichzeitigen Last ab","Die VM-Konfiguration erweitert den Host durch 24 vCPUs auf 24 physische Kerne","Die Summe der vCPUs beschreibt bereits die garantierte Rechenleistung bei voller Last"], 1, "vCPUs sind virtuelle Ausführungseinheiten, keine neu entstandenen physischen Kerne. Überbuchung kann sinnvoll sein, benötigt aber Kapazitätsplanung und Messung der tatsächlichen Last."),
    mc("master-srv-14", "hyper-v-arbeitsspeicher", "fortgeschritten", "Mehrere Hyper-V-VMs verwenden dynamischen Arbeitsspeicher. Was ist bei der Planung des Host-RAMs trotzdem erforderlich?", ["Nur die maximalen VM-Werte addieren, weil diese jederzeit automatisch physisch bereitstehen","Den gesamten Host-RAM fest an Gäste vergeben, ohne Speicher für den Host zurückzuhalten","Nur den kleinsten Startbedarf betrachten, ohne spätere Lastspitzen der Gäste zu berücksichtigen","Realen Gesamtbedarf und genügend Speicherreserve für den Host einplanen"], 3, "Dynamischer Arbeitsspeicher kann die Zuteilung innerhalb konfigurierter Grenzen anpassen. Bei gleichzeitiger Last bleibt die physische Kapazität eine Grenze; auch der Host benötigt Ressourcen."),
    mc("master-srv-15", "hyper-v-numa", "fortgeschritten", "Warum kann bei großen VMs die NUMA-Topologie eines Hosts wichtig sein?", ["Lokaler Speicherzugriff kann schneller sein als Zugriff auf einen anderen NUMA-Knoten","Jeder NUMA-Knoten besitzt unabhängig von der Hardware dieselbe Latenz zu sämtlichem RAM","NUMA verteilt eine einzelne VM automatisch über die Speicher mehrerer physischer Hosts","Die NUMA-Zuordnung legt primär fest, welcher virtuelle Switch für den Speicherzugriff verwendet wird"], 0, "Bei NUMA sind Speicherzugriffswege nicht gleichwertig. Große VMs und ihre vCPU-/RAM-Verteilung sollten deshalb zur Hosttopologie und Arbeitslast passen."),
    mc("master-srv-16", "uac", "grundlagen", "Welche Aussage beschreibt die Benutzerkontensteuerung UAC korrekt?", ["Eine UAC-Bestätigung erteilt jedem Standardbenutzer dauerhaft Administratorrechte","Ein bestätigter UAC-Dialog setzt die Datei-ACLs für das gestartete Programm außer Kraft","UAC unterstützt die kontrollierte Ausführung mit erhöhten Rechten","UAC prüft nach jeder Bestätigung den Programmcode vollständig auf Schadsoftware"], 2, "Auch Mitglieder der lokalen Administratoren arbeiten üblicherweise mit getrenntem normalem und erhöhtem Kontext. Standardbenutzer benötigen für administrative Aktionen passende zusätzliche Anmeldeinformationen; UAC schafft keine pauschale Domänenberechtigung.")
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

Object.entries(QUESTION_POOL_FOUNDATION_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_ORDER_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_MATCH_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_TERM_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_PERMISSION_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_SERVER_HYPERV_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

Object.entries(QUESTION_POOL_MASTER_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Master-Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

// Ergänzung vom 23.09.2026: nur eigenständige Lernziele aus Sammelmappe Server.pdf
// und WLAntworten.docx. Seiten beziehen sich auf die PDF, Word-Nummern auf die
// im Bild sichtbare Aufgabennummer. Farbige Schlüssel wurden fachlich geprüft.
// Doppelte, fehlerhafte und unvollständige Originalaufgaben werden nicht importiert.
// Separat am Ende anhängen, damit auch positionsbasierte Altfragen stabil bleiben.
const QUESTION_POOL_EXAM_EXTENSION = {
  "netzwerke": [
    // PDF S. 15; Word 14/15: widersprüchliche Netzangaben vereinheitlicht.
    mc("exam-net-01", "dhcp-superscope", "fortgeschritten", "In einem physischen LAN-Segment werden zwei logische IPv4-Netze betrieben: 192.168.1.0/24 und 192.168.2.0/24. Ein Windows-DHCP-Server hat für jedes Netz einen eigenen Bereich. Welche Funktion fasst die Bereiche für die Adressvergabe in diesem gemeinsamen Segment zusammen?", ["Ein DHCP-Relay zwischen zwei VLANs", "Eine Bereichsgruppierung (Superscope)", "Eine DHCP-Reservierung für alle Clients", "Ein DHCP-Failover-Verbund mit einem zweiten Server"], 1, "Eine Bereichsgruppierung fasst mehrere DHCP-Bereiche für mehrere logische IP-Subnetze auf demselben physischen Segment zusammen. Sie ersetzt weder Routing zwischen den IP-Netzen noch passende Gateway- und Bereichsoptionen; die Subnetzmasken bleiben getrennt."),
    // PDF S. 37.
    mc("exam-net-02", "dhcp-bindungen", "fortgeschritten", "Ein Windows-DHCP-Server besitzt die Schnittstellen LAN1 und LAN2. Er soll nur auf LAN1 DHCP-Anfragen bedienen. Andere Serverdienste müssen über LAN2 erreichbar bleiben. Welche Einstellung passt am gezieltesten?", ["Den gesamten Netzwerkadapter LAN2 deaktivieren", "Die Routingmetrik von LAN2 verkleinern", "Die DHCP-Serverbindung an LAN2 deaktivieren und an LAN1 beibehalten", "Den DHCP-Dienst auf dem Server beenden"], 2, "Die Schnittstellenbindungen bestimmen, auf welchen Interfaces der DHCP-Serverdienst arbeitet. Das Entfernen der DHCP-Bindung von LAN2 schaltet nicht den gesamten Adapter ab. Die Routingmetrik steuert dagegen die Pfadwahl, nicht die Dienstbindung."),
    // PDF S. 40: unbeabsichtigte lokale Stammzone, nicht Internet-Root-Hints.
    mc("exam-net-03", "dns-stammzone", "anspruchsvoll", "Ein interner Windows-DNS-Server soll interne und öffentliche Namen auflösen. Nach dem versehentlichen Anlegen einer lokalen primären Zone mit dem Namen '.' beantwortet er öffentliche Namen negativ. Eine eigene DNS-Wurzel ist nicht vorgesehen. Welche Konfigurationsänderung behebt diesen Fehler an der Ursache?", ["Die interne AD-Zone löschen und nur '.' behalten", "Weitere öffentliche DNS-Server in die Netzwerkeinstellungen der Clients eintragen, ohne den Serverfehler zu beheben", "Die TTL aller internen A-Einträge erhöhen", "Die unbeabsichtigte Zone '.' entfernen und anschließend Rekursion sowie Weiterleitung oder Stammhinweise prüfen"], 3, "Mit einer lokalen Zone '.' betrachtet sich der Server als autoritativ für die DNS-Wurzel. Ohne passende Delegationen beantwortet er darunterliegende unbekannte Namen nicht wie ein gewöhnlicher rekursiver Resolver. Die unerwünschte Stammzone muss entfernt werden; anschließend ist der vorgesehene externe Auflösungsweg zu prüfen. Eine Root-Zone ist nicht dasselbe wie die Liste der Stammhinweise."),
    // PDF S. 45: identischer FQDN, IPv4 und veraltete DNS-Antworten abgegrenzt.
    mc("exam-net-04", "dns-hosts-datei", "fortgeschritten", "nslookup liefert vom zuständigen DNS-Server für files.firma.example die korrekte IPv4-Adresse. ping -4 verwendet auf demselben Windows-Client für genau diesen Namen trotz geleertem DNS-Resolvercache eine falsche IPv4-Adresse. Welche lokale Datei solltest du gezielt auf eine feste Namenszuordnung prüfen?", ["Die hosts-Datei", "Die Datei ntds.dit", "Die Datei lmhosts für NetBIOS-Namen", "Die Datei services mit Dienstnamen und Portnummern"], 0, "Die hosts-Datei enthält lokale Zuordnungen von Hostnamen zu IP-Adressen und wird bei der normalen Windows-Namensauflösung berücksichtigt. nslookup fragt dagegen den DNS-Server direkt ab. Ein falscher hosts-Eintrag wird durch das Leeren des DNS-Caches nicht aus der Datei entfernt. Hier wird derselbe vollständige DNS-Name ausdrücklich per IPv4 geprüft.")
  ],
  "windows-netzwerke": [
    // PDF S. 8: Ja/Nein-Abfrage zu PowerShell-Skripten als eindeutige Zuordnung.
    matchQuestion("exam-win-01", "gpo-skripte", "grundlagen", "Ordne die per Gruppenrichtlinie eingebundenen PowerShell-Skripte ihrem Auslöser und dem passenden GPO-Bereich zu.", [
      { left: "Start-Skript", right: "Beim Computerstart – Computerkonfiguration" },
      { left: "Shutdown-Skript", right: "Beim Herunterfahren – Computerkonfiguration" },
      { left: "Anmelde-Skript", right: "Bei der Benutzeranmeldung – Benutzerkonfiguration" },
      { left: "Abmelde-Skript", right: "Bei der Benutzerabmeldung – Benutzerkonfiguration" }
    ], "Gruppenrichtlinien können auch PowerShell-Skripte einbinden. Starten und Herunterfahren sind Computerereignisse; Anmelden und Abmelden sind Benutzerereignisse. Diese Skripte werden nicht einfach bei jeder Hintergrundaktualisierung der Richtlinien ausgeführt. Erreichbarkeit, Berechtigungen und geltende Ausführungsrichtlinien müssen passen."),
    // PDF S. 35: konkretes MSI-Deployment, keine bloße Wiederholung der OU-Definition.
    mc("exam-win-02", "gpo-softwareverteilung", "fortgeschritten", "Ein MSI-Paket soll per Gruppenrichtlinien-Softwareinstallation automatisch auf allen Computern in drei Verkaufs-OUs installiert werden, unabhängig vom angemeldeten Benutzer. Die Computerkonten dürfen das Paket über seinen UNC-Pfad lesen. Welche Konfiguration erfüllt das Ziel, ohne weitere OUs einzubeziehen?", ["Das Paket in der Benutzerkonfiguration veröffentlichen und die GPO mit der gesamten Domäne verknüpfen", "Das Paket in der Computerkonfiguration zuweisen und dieselbe GPO mit jeder der drei Verkaufs-OUs verknüpfen", "Das Paket nur in der Benutzerkonfiguration zuweisen und die GPO unverknüpft lassen", "Das Paket in der Computerkonfiguration zuweisen und die GPO ohne weitere Filter mit der gesamten Domäne verknüpfen"], 1, "Die Zuweisung in der Computerkonfiguration installiert das Paket computerbezogen bei der entsprechenden Startverarbeitung. Die drei OU-Verknüpfungen begrenzen den vorgesehenen Geltungsbereich. Veröffentlichung für Benutzer bietet dagegen eine benutzerbezogene Installationsmöglichkeit und erfüllt nicht die geforderte automatische Computerbereitstellung. Weitere Filter oder Vererbungsblockaden sind hier nicht vorgegeben."),
    // PDF S. 25; Word 23: tatsächlichen PowerShell-Modulnamen verwenden.
    mc("exam-win-03", "ad-bereitstellung", "grundlagen", "Welches PowerShell-Modul enthält die Cmdlets zur Heraufstufung eines Windows-Servers zum Domänencontroller?", ["ActiveDirectory", "ServerManager", "ADDSDeployment", "ADCSDeployment"], 2, "ADDSDeployment enthält beispielsweise Install-ADDSDomainController und Install-ADDSForest. ActiveDirectory dient der Verwaltung vorhandener AD-Objekte, ServerManager unter anderem der Rolleninstallation und ADCSDeployment der Bereitstellung von Zertifikatdiensten. Die Installation der AD-DS-Rolle allein ist noch keine Heraufstufung zum Domänencontroller."),
    // PDF S. 36: Wartungsziel statt unvollständiger Vier-Schritte-Betriebsanleitung.
    mc("exam-win-04", "ad-datenbankwartung", "anspruchsvoll", "Nach umfangreichen Löschungen enthält ntds.dit viel intern freien Platz. Die automatische Online-Defragmentierung hat die Dateigröße nicht verkleinert. Welche geplante Wartungsmaßnahme kann diesen freien Platz durch eine kompakte neue Datenbankdatei an das Dateisystem zurückgeben?", ["Die Online-Defragmentierung erneut abwarten; sie verkleinert die Datei zwingend", "Nur das NTFS-Volume defragmentieren, ohne die AD-Datenbank zu kompaktieren", "Ausschließlich die AD-Replikation erneut anstoßen", "Die AD-Datenbank offline mit ntdsutil kompaktieren und kontrolliert ersetzen"], 3, "Die Online-Defragmentierung macht internen Platz wiederverwendbar, verkleinert aber die Datei nicht. Eine Offline-Kompaktierung erzeugt eine kleinere Datenbankdatei. Sie benötigt einen geplanten, dokumentierten Wartungsablauf mit geeigneter Sicherung, offline befindlicher Datenbank, Prüfung der tatsächlichen Pfade und anschließenden Integritäts- und Funktionstests; sie ist kein routinemäßiger Ersatz für Kapazitätsplanung.")
  ],
  "windows-server-admin": [
    // PDF S. 7: NTFS-Ebene und Mindestberechtigung ausdrücklich vorgegeben.
    mc("exam-srv-01", "ntfs-rechte", "grundlagen", "Ein Benutzer soll lokal Dateien lesen und vorhandene Programme aus einem NTFS-Ordner ausführen, aber keine Dateien verändern oder löschen. Es wirken keine zusätzlichen Rechte oder Verweigerungen. Welche NTFS-Standardberechtigung erfüllt dies mit den geringsten nötigen Rechten?", ["Lesen", "Lesen und Ausführen", "Schreiben", "Ändern"], 1, "'Lesen und Ausführen' umfasst Lesen und das Ausführen von Dateien. 'Lesen' allein gewährt nicht das Ausführungsrecht, 'Schreiben' passt nicht zur Aufgabe und 'Ändern' würde zusätzliche Änderungs- und Löschrechte gewähren. Zusätzliche Sicherheitsmechanismen wie AppLocker sind in dieser reinen NTFS-Frage nicht Gegenstand."),
    // PDF S. 17; Word 17. Vollständiger Cmdletname verlangt, keine Alias-Falle.
    textQuestion("exam-srv-02", "powershell-hilfe", "grundlagen", "Welches PowerShell-Cmdlet zeigt die Hilfe zu einem anderen Cmdlet einschließlich seiner Parameterbeschreibungen an? Gib den vollständigen Cmdletnamen ohne Alias und ohne Parameter ein.", ["Get-Help"], "Mit Get-Help Resolve-DnsName lässt sich beispielsweise die Hilfe zu Resolve-DnsName aufrufen. -Full fordert die vollständige Hilfe an; lokal verfügbare Hilfeinhalte können mit Update-Help aktualisiert werden. Get-Command zeigt dagegen Befehlsinformationen und Syntax, ersetzt aber nicht die ausführliche Parameterhilfe."),
    // PDF S. 18; Word 18. Interaktive Sitzung von Invoke-Command abgrenzen.
    textQuestion("exam-srv-03", "powershell-remoting", "fortgeschritten", "Du möchtest interaktiv in einer PowerShell-Remotesitzung auf Server1 arbeiten. Remoting und Berechtigungen sind eingerichtet. Welches Cmdlet steht vor '-ComputerName Server1'? Gib nur den vollständigen Cmdletnamen ein.", ["Enter-PSSession"], "Enter-PSSession -ComputerName Server1 startet eine interaktive Sitzung auf dem Zielrechner. Die eingegebenen Befehle laufen dort; Exit-PSSession beendet die Sitzung. Invoke-Command führt dagegen gezielt Skriptblöcke aus, und New-PSSession erstellt eine Sitzung, ohne sie allein dadurch interaktiv zu betreten."),
    // PDF S. 23; Word Extra B/32. Abbildung in einen vollständigen Text übersetzt.
    mc("exam-srv-04", "volume-einhaengepunkt", "fortgeschritten", "Auf Datenträger 0 liegt das NTFS-Volume C:. Eine zusätzliche Festplatte enthält bereits ein NTFS-formatiertes Datenvolume. Dessen Speicher soll über den leeren Ordner C:\\Archiv erreichbar sein, ohne C: zu vergrößern oder einen neuen Laufwerksbuchstaben zu vergeben. Wie gehst du vor?", ["Das zusätzliche Volume als Ordnerbereitstellungspunkt in C:\\Archiv einbinden", "Dem zusätzlichen Volume lediglich die Bezeichnung Archiv geben", "C: und das Datenvolume spiegeln, damit sich ihre Kapazitäten addieren", "Nur eine Verknüpfung zu einem weiterhin nicht eingebundenen Volume im Ordner anlegen"], 0, "Ein Volume kann in einem leeren Ordner auf einem NTFS-Volume bereitgestellt werden. Zugriffe unter C:\\Archiv verwenden dann den Speicher des eingebundenen Volumes. Die Kapazität von C: selbst wächst dadurch nicht; der Pfad bindet einen getrennten Speicherbereich ein."),
    // PDF S. 27; Word 24. Ergänzt die vorhandenen Fragen zu Intern/Extern.
    mc("exam-srv-05", "hyper-v-switch", "grundlagen", "Mehrere Test-VMs auf demselben Hyper-V-Host sollen miteinander kommunizieren, aber weder mit dem Hostbetriebssystem noch mit dem physischen Netz. Es wird kein Routing durch eine VM eingerichtet. Welcher virtuelle Switch-Typ passt?", ["Extern mit Zugriff für das Hostbetriebssystem", "Intern", "Privat", "Extern ohne Zugriff für das Hostbetriebssystem"], 2, "Ein privater Hyper-V-Switch verbindet die daran angeschlossenen VMs desselben Hosts untereinander. Ein interner Switch bindet zusätzlich das Hostbetriebssystem ein; ein externer Switch das physische Netzwerk. Eine zusätzliche Router-VM oder andere Verbindung müsste bei einer echten Isolation gesondert ausgeschlossen werden."),
    // PDF S. 29; Word 26. Ergänzt Enter-PSSession um entfernte Skriptblöcke.
    textQuestion("exam-srv-06", "powershell-remoting", "fortgeschritten", "Ein Skriptblock soll über PowerShell-Remoting auf CL1, CL2 und CL3 ausgeführt werden. Die Voraussetzungen sind erfüllt. Welches Cmdlet ergänzt den Befehl vor '-ComputerName CL1, CL2, CL3 -ScriptBlock { ipconfig /all }'? Gib nur den vollständigen Cmdletnamen ein.", ["Invoke-Command"], "Invoke-Command kann denselben Skriptblock auf mehreren erreichbaren Zielrechnern ausführen und deren Ergebnisse zurückliefern. Enter-PSSession ist für die interaktive Arbeit in einer einzelnen Sitzung gedacht. Die Ausführung setzt passende Zielberechtigungen und eine funktionierende Remoting-Konfiguration voraus."),
    // PDF S. 44: Generation 1 und funktionierende Switch-Anbindung explizit.
    mc("exam-srv-07", "hyper-v-pxe", "fortgeschritten", "Eine bestehende Hyper-V-VM der Generation 1 soll ein unterstütztes Betriebssystem per PXE installieren. DHCP und Bereitstellungsserver sind im erreichbaren Netz korrekt eingerichtet. Welcher Adapter muss für diesen Netzwerkstart an den passenden virtuellen Switch angeschlossen sein?", ["Nur der synthetische Standard-Netzwerkadapter der Generation-1-VM", "Ein virtueller SCSI-Controller anstelle einer Netzwerkkarte", "Eine zusätzliche Netzwerkkarte ausschließlich im Host, ohne VM-Anbindung", "Ein älterer Netzwerkadapter (Legacy Network Adapter) in der VM"], 3, "Bei Generation 1 benötigt der PXE-Start den emulierten älteren Netzwerkadapter. Generation 2 unterstützt den Netzwerkstart über den synthetischen Adapter. Die Aussage gilt daher gezielt für die vorgegebene Generation-1-VM, nicht als Empfehlung für jede neu zu erstellende VM.")
  ]
};

Object.entries(QUESTION_POOL_EXAM_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im Aufgaben-Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});

// Eigenes Thema: allgemeine PowerShell-Lernziele aus den bisherigen Themen
// verschieben, nicht kopieren. Die Quellblöcke und Frage-IDs bleiben erhalten.
// AD-/GPO-/Serverrollen-spezifische Aufgaben bleiben bei ihrem Fachthema.
const POWERSHELL_TOPIC = { id: "powershell", title: "PowerShell", questions: [] };
const POWERSHELL_EXISTING_IDS = new Set([
  "win-net-046", "master-srv-10", "exam-srv-02", "exam-srv-03", "exam-srv-06"
]);
const POWERSHELL_LEGACY_QUESTION = "Nach welchem festen Muster (zwei Wörter, mit Bindestrich) sind PowerShell-Cmdlets aufgebaut, z. B. bei Get-ADUser?";
QUIZ_DATA.forEach((topic) => {
  topic.questions = topic.questions.filter((question) => {
    if (POWERSHELL_EXISTING_IDS.has(question.id) || question.question === POWERSHELL_LEGACY_QUESTION) {
      POWERSHELL_TOPIC.questions.push(question);
      return false;
    }
    return true;
  });
});
if (POWERSHELL_TOPIC.questions.length !== 6) {
  throw new Error("Die Zuordnung der sechs bestehenden PowerShell-Fragen ist unvollständig.");
}
QUIZ_DATA.push(POWERSHELL_TOPIC);

// PowerShell_Grundlagen.docx, Ergänzung vom 24.09.2026.
// Abschnittsnummern beziehen sich auf die Überschriften des unveränderten Lernzettels.
// Kein erneuter Import von Get-Help, Cmdlet-Namensschema oder einfacher Dienstfilterung.
// Die Beispiele sind Daten für das Quiz und werden niemals als PowerShell ausgeführt.
const QUESTION_POOL_POWERSHELL_EXTENSION = {
  "powershell": [
    // Abschnitte 1–2: Umgebung und Skriptstart.
    mc("ps-001", "powershell-umgebung", "grundlagen", "Welche Aussage unterscheidet PowerShell von der Windows PowerShell ISE korrekt?", ["Die ISE ist die Skriptsprache; PowerShell dient nur zur Textbearbeitung.", "Die ISE ist eine grafische Arbeitsumgebung für Windows PowerShell bis 5.1; PowerShell 7 wird darin nicht unterstützt.", "Jedes PowerShell-Skript benötigt zwingend die ISE zur Ausführung.", "Die ISE wandelt Windows-PowerShell-Skripte beim Öffnen automatisch in PowerShell 7 um."], 1, "PowerShell ist eine Shell und Skriptsprache; die ISE kombiniert unter anderem Editor, Konsole und Debugging für Windows PowerShell. Sie unterstützt nicht PowerShell 7. Ein Skript kann auch ohne die ISE ausgeführt werden; PowerShell 7 ist zudem für mehrere Betriebssysteme verfügbar."),
    mc("ps-002", "powershell-skriptstart", "grundlagen", "Die Datei Inventar.ps1 liegt im aktuellen Ordner. Sie ist ein geprüftes PowerShell-Skript, und die geltenden Richtlinien erlauben seine Ausführung. Welcher Aufruf startet genau diese Datei ausdrücklich aus dem aktuellen Ordner?", ["..\\Inventar.ps1", "Get-Content .\\Inventar.ps1", ".\\Inventar.ps1", "Set-Location .\\Inventar.ps1"], 2, "Die Endung .ps1 kennzeichnet ein PowerShell-Skript. .\\ bezeichnet den aktuellen Ordner, ..\\ den übergeordneten. Get-Content liest den Dateiinhalt, führt ihn aber nicht als Skript aus. Die ausdrücklich angegebene Position vermeidet die Verwechslung mit der Suche nach Befehlen im Suchpfad."),
    // Abschnitte 3–4: Parameter, Variablen/Typen und Zeichenketten.
    matchQuestion("ps-003", "powershell-parameter", "grundlagen", "Ordne die Bestandteile des Aufrufs Get-Process -Name 'explorer' ihrer Rolle zu.", [
      { left: "Get-Process", right: "Cmdlet, das ausgeführt werden soll" },
      { left: "-Name", right: "Benannter Parameter zur genaueren Steuerung des Cmdlets" },
      { left: "'explorer'", right: "Argument, das als Wert an den Parameter übergeben wird" }
    ], "Ein Cmdlet führt eine Aufgabe aus. Parameter bestimmen Einzelheiten des Aufrufs, Argumente liefern ihre Werte. Nicht jeder Parameter benötigt einen getrennten Wert: Ein Switch-Parameter kann durch seine Angabe eingeschaltet werden."),
    matchQuestion("ps-004", "powershell-variablen", "grundlagen", "Ordne den ausdrücklich typisierten PowerShell-Variablen den gespeicherten Werttyp zu.", [
      { left: "[string] $a = 'False'", right: "Text mit den Zeichen False, kein boolescher Wahrheitswert" },
      { left: "[int]$b = 18", right: "Ganze Zahl" },
      { left: "[bool]$c = $false", right: "Boolescher Wahrheitswert falsch" }
    ], "Variablen werden mit einem Dollarzeichen angesprochen, = weist einen Wert zu. Eine explizite Typangabe steht in eckigen Klammern. 'False' ist hier ausdrücklich eine Zeichenkette, $false dagegen ein Wahrheitswert; beides darf nicht gleichgesetzt werden."),
    mc("ps-005", "powershell-zeichenketten", "fortgeschritten", "Nach $name = 'Mia' werden nacheinander die Ausdrücke \"Hallo $name\" und 'Hallo $name' ausgegeben. Welche beiden Texte erscheinen in dieser Reihenfolge?", ["Hallo Mia; danach Hallo Mia", "Hallo $name; danach Hallo Mia", "Hallo $name; danach Hallo $name", "Hallo Mia; danach Hallo $name"], 3, "Doppelte Anführungszeichen erlauben die Ersetzung einfacher Variablenreferenzen durch ihren Wert. Einfache Anführungszeichen bewahren den Text wörtlich. Daher wird $name nur im ersten Ausdruck durch Mia ersetzt."),
    // Abschnitt 5: Zuweisung, Vergleich und logische Bedingungen.
    mc("ps-006", "powershell-vergleiche", "grundlagen", "Welche Zeile prüft in PowerShell, ob die bereits gesetzte ganzzahlige Variable $anzahl den Wert 5 hat, ohne ihr einen neuen Wert zuzuweisen?", ["$anzahl -eq 5", "$anzahl = 5", "$anzahl -gt 5", "$anzahl -ne 5"], 0, "-eq vergleicht auf Gleichheit. = ist eine Zuweisung, -gt prüft auf größer und -ne auf ungleich. Die Frage verwendet ausdrücklich einen einzelnen ganzzahligen Wert, keine Sammlung."),
    mc("ps-007", "powershell-bedingungen", "fortgeschritten", "Gegeben sind $alter = 17 und $freigabe = $true. Welche Ausgabe erzeugt: if (($alter -ge 18) -and $freigabe) { 'Zugang' } else { 'Gesperrt' }?", ["Zugang", "Gesperrt", "Zugang und anschließend Gesperrt", "Keine Ausgabe, weil ein boolescher Wert nicht in einer Bedingung stehen darf"], 1, "-and verlangt, dass beide Teilbedingungen wahr sind. $alter -ge 18 ist bei 17 falsch; die vorhandene Freigabe allein genügt deshalb nicht. Es wird nur der else-Block ausgeführt. Bei -or würde dagegen eine wahre Teilbedingung genügen."),
    // Abschnitte 4–5: Arrays, foreach/for und Schleifendurchläufe.
    mc("ps-008", "powershell-arrays", "grundlagen", "Die Variable $werte enthält das Array @(7, 11, 20). Welche Werte liefern $werte[0] und $werte.Count?", ["11 und 3", "7 und 2", "7 und 3", "0 und 20"], 2, "Die Indizierung beginnt bei 0, daher liefert $werte[0] das erste Element 7. Count ist die Anzahl der Elemente, hier 3; die gültigen Indizes dieses Arrays sind 0, 1 und 2."),
    mc("ps-009", "powershell-schleifen", "grundlagen", "Du willst jeden Eintrag einer vorhandenen Namensliste einmal verarbeiten, ohne selbst einen Index zu verwalten. Welche PowerShell-Schleifenform drückt das direkt aus?", ["if mit einem einzelnen Vergleich", "switch mit ausschließlich fest eingetragenen Namen", "for mit einer konstant falschen Bedingung", "foreach ($name in $namen) { ... }"], 3, "Die foreach-Anweisung durchläuft die Elemente einer Sammlung und weist das jeweilige Element der Schleifenvariablen zu. Eine for-Schleife eignet sich unter anderem für zählergesteuerte Abläufe, erfordert dafür aber selbst festgelegte Initialisierung, Bedingung und Fortschaltung."),
    textQuestion("ps-010", "powershell-schleifen", "fortgeschritten", "Wie oft wird 'Prüfen' ausgegeben? for ($i = 2; $i -le 5; $i++) { 'Prüfen' } Gib nur die Anzahl ein.", ["4", "vier"], "Der Block läuft für $i = 2, 3, 4 und 5. Nach der Erhöhung auf 6 ist die Bedingung $i -le 5 falsch. Wichtig sind sowohl der Startwert als auch das eingeschlossene obere Ende durch -le."),
    // Abschnitte 6–7: drei verschiedene Switch/Bool-Begriffe, Fallauswahl, Klammern.
    matchQuestion("ps-011", "powershell-switch", "grundlagen", "Ordne den drei ähnlich wirkenden PowerShell-Begriffen ihre unterschiedliche Aufgabe zu.", [
      { left: "[bool]", right: "Datentyp für die Wahrheitswerte $true und $false" },
      { left: "[switch]", right: "Parametertyp für eine beim Befehlsaufruf zuschaltbare Option" },
      { left: "switch (...) { ... }", right: "Sprachanweisung zur Auswahl passender Fälle anhand eines Wertes" }
    ], "Ein boolescher Parameter bekommt üblicherweise einen Wert, etwa -Aktiv $true. Bei einem Switch-Parameter genügt beispielsweise -Details; -Details:$false schaltet ihn ausdrücklich aus. Die switch-Anweisung ist dagegen eine Kontrollstruktur im Skript."),
    mc("ps-012", "powershell-fallauswahl", "fortgeschritten", "Welche Ausgabe erzeugt diese PowerShell-Fallauswahl? switch ('X') { 'A' { 'Anzeigen'; break } 'B' { 'Bearbeiten'; break } default { 'Unbekannt' } }", ["Unbekannt", "Anzeigen", "Bearbeiten", "Anzeigen, Bearbeiten und Unbekannt"], 0, "Für X passt weder der Fall A noch B. Deshalb wird der default-Block ausgeführt. break beendet die switch-Anweisung, wenn es in einem ausgeführten Fall erreicht wird. Ein nicht passender Fall wird nicht ausgeführt."),
    matchQuestion("ps-013", "powershell-klammern", "grundlagen", "Ordne die markierten Klammerarten ihrem Einsatz in den angegebenen PowerShell-Beispielen zu.", [
      { left: "Rund: ( )", right: "Gruppiert in (2 + 3) * 4 den zuerst auszuwertenden Rechenausdruck" },
      { left: "Eckig: [ ]", right: "Greift in $namen[0] über einen Index auf ein Arrayelement zu" },
      { left: "Geschweift: { }", right: "Begrenzt in if ($bereit) { 'Los' } den Anweisungsblock" }
    ], "Die Bedeutung hängt vom Kontext ab: Runde Klammern stehen auch um Bedingungen, eckige Klammern auch bei Typangaben wie [int]. Geschweifte Klammern begrenzen Blöcke. Optionale Angaben in einer Hilfesyntax sind eine andere Verwendung eckiger Klammern und werden nicht wörtlich mitgetippt."),
    // Abschnitte 8–10: Befehle entdecken, Objekte untersuchen und auswerten.
    matchQuestion("ps-014", "powershell-erkundung", "grundlagen", "Welche beiden PowerShell-Werkzeuge helfen bei diesen unterschiedlichen Erkundungsaufgaben? Ordne sie zu.", [
      { left: "Get-Command", right: "Verfügbare Befehle finden, beispielsweise über ein Namensmuster" },
      { left: "Get-Member", right: "Typ, Eigenschaften und Methoden übergebener Objekte untersuchen" }
    ], "Get-Command *Service* sucht passende Befehlsnamen. Get-Process | Get-Member untersucht dagegen die gelieferten Prozessobjekte. Die schon separat abgefragte Hilfe zu einem Befehl erhält man mit Get-Help; Befehlsuche, Hilfe und Objektuntersuchung sind unterschiedliche Aufgaben."),
    mc("ps-015", "powershell-pipeline", "fortgeschritten", "Eine PowerShell-Pipeline soll alle von Get-Service gelieferten Dienste nach Name sortieren und anschließend nur die Eigenschaften Name und Status ausgeben. Welcher Aufruf passt?", ["Get-Service | Where-Object Name | Select-Object Status", "Get-Service | Sort-Object Name | Select-Object Name, Status", "Get-Service | Select-Object -First 5 | Sort-Object Status", "Get-Service | Measure-Object | Select-Object Name, Status"], 1, "Sort-Object sortiert nach der angegebenen Eigenschaft. Select-Object wählt hier Eigenschaften aus; -First würde stattdessen die Anzahl der ausgegebenen Objekte begrenzen. Where-Object filtert Objekte anhand einer Bedingung, Measure-Object ermittelt Messwerte wie die Anzahl."),
    mc("ps-016", "powershell-pipelineobjekt", "grundlagen", "Wofür steht $_ innerhalb des Skriptblocks von Where-Object { $_.Status -eq 'Running' }?", ["Für den gesamten Befehlsverlauf der Konsole", "Für die Anzahl der bisherigen Schleifendurchläufe", "Für das aktuell vom Skriptblock verarbeitete Pipelineobjekt", "Für den Namen des angemeldeten Benutzers"], 2, "$_ bezeichnet in diesem Pipeline-Skriptblock das aktuelle Objekt. $_.Status liest dessen Eigenschaft Status. Es ist weder eine pauschale Textzeile noch automatisch die gesamte Sammlung; die Bedeutung wird hier im konkreten Where-Object-Kontext abgefragt."),
    mc("ps-017", "powershell-messen", "grundlagen", "Ein Befehl liefert mehrere Objekte über die Pipeline. Welches Cmdlet ermittelt ohne zusätzliche Messoptionen deren Anzahl und stellt sie in der Eigenschaft Count bereit?", ["Sort-Object", "Get-Member", "Select-Object -First 1", "Measure-Object"], 3, "Measure-Object zählt standardmäßig die übergebenen Objekte. Beispielsweise liefert Get-Command | Measure-Object einen Messdatensatz mit Count. Diese konkrete Anzahl ist systemabhängig und wird deshalb nicht als feste Zahl abgefragt. measure ist ein Alias für Measure-Object."),
    // Abschnitte 11–13: Dateibefehle, Inhalt erhalten und Aktionen vorab prüfen.
    matchQuestion("ps-018", "powershell-dateien", "grundlagen", "Ordne den PowerShell-Dateibefehlen ihre Aufgabe im Dateisystem zu.", [
      { left: "Set-Location", right: "In einen anderen Arbeitsordner wechseln" },
      { left: "Get-ChildItem", right: "Dateien und Unterordner auflisten" },
      { left: "Copy-Item", right: "Eine Datei an einen Zielpfad kopieren" },
      { left: "Test-Path", right: "Prüfen, ob ein Pfad existiert, und einen Wahrheitswert liefern" }
    ], "Get-Location zeigt den aktuellen Ordner, Set-Location wechselt ihn. Get-ChildItem -Recurse bezieht Unterordner ein. Copy-Item kopiert, Move-Item verschiebt und Remove-Item löscht; vorhandene Zieldaten können bei Dateioperationen betroffen sein. Relative Pfade beziehen sich auf den aktuellen Ordner, Pfade mit Leerzeichen werden beim Aufruf in Anführungszeichen gesetzt."),
    mc("ps-019", "powershell-dateiinhalt", "fortgeschritten", "Ein Skript soll eine neue Statuszeile an eine bestehende Textdatei anhängen. Die bisherigen Zeilen müssen erhalten bleiben. Welcher Befehl ist dafür vorgesehen?", ["Add-Content -Path '.\\status.txt' -Value 'Prüfung beendet'", "Set-Content -Path '.\\status.txt' -Value 'Prüfung beendet'", "Get-Content -Path '.\\status.txt'", "Clear-Host"], 0, "Add-Content hängt Inhalt an; Set-Content ersetzt vorhandenen Inhalt. Get-Content liest die Datei und Clear-Host verändert nur die Konsolenanzeige. Dateipfad, Zugriffsrechte und bei realen Protokollen auch die verwendete Textkodierung müssen passen."),
    multi("ps-020", "powershell-sichere-ausfuehrung", "fortgeschritten", "Welche Aussagen zu Remove-Item -Path '.\\alt.txt' mit den Zusätzen -WhatIf beziehungsweise -Confirm sind richtig? Der Dateisystemanbieter unterstützt diese Parameter.", ["-WhatIf stellt eine bereits gelöschte Datei wieder her.", "-WhatIf zeigt die beabsichtigte Löschaktion an, ohne diese Datei dabei zu löschen.", "-Confirm fordert vor der Löschaktion eine Bestätigung an.", "-Confirm garantiert unabhängig von der Antwort, dass die Datei erhalten bleibt."], [1, 2], "-WhatIf ist eine Vorschau der unterstützten Aktion, keine Wiederherstellung. -Confirm lässt die Aktion nach Zustimmung zu, ersetzt also weder Vorsicht noch ein Backup. Diese Parameter stehen nur bei entsprechend unterstützten Befehlen zur Verfügung und sind keine allgemeine Sandbox für beliebige Skripte."),
    // Abschnitt 10: gezielte Prozessverwaltung und Konsolenanzeige.
    mc("ps-021", "powershell-prozesse", "fortgeschritten", "Get-Process hat für einen hängenden Prozess die ID 4711 geliefert. Du hast das richtige Ziel geprüft und die nötigen Rechte. Welcher Befehl adressiert zum Beenden genau diese Prozess-ID?", ["Get-Process -Id 4711", "Stop-Process -Id 4711", "Stop-Process -Name '4711'", "Stop-Service -Name '4711'"], 1, "Stop-Process -Id adressiert die numerische Prozess-ID. -Name würde nach einem Prozessnamen suchen; Get-Process liest nur Informationen und Stop-Service verwaltet Dienste. Beim Beenden eines Prozesses können ungespeicherte Daten verloren gehen, weshalb Ziel und Auswirkungen vorher geprüft werden müssen."),
    mc("ps-022", "powershell-konsole", "grundlagen", "Was bewirkt Clear-Host in einer laufenden PowerShell-Sitzung?", ["Es entfernt alle Variablen der Sitzung.", "Es beendet alle zuvor gestarteten Prozesse.", "Es leert die Konsolenanzeige, ohne damit Variablen und Befehlsverlauf zu löschen.", "Es setzt die Ausführungsrichtlinie auf ihren Standardwert zurück."], 2, "Clear-Host räumt die Anzeige auf, beendet aber nicht die Sitzung und löscht dadurch weder ihre Variablen noch ihren Befehlsverlauf. Eine optisch leere Konsole ist deshalb kein Nachweis dafür, dass vorherige Eingaben oder Daten entfernt wurden.")
  ]
};

Object.entries(QUESTION_POOL_POWERSHELL_EXTENSION).forEach(([topicId, questions]) => {
  const topic = QUIZ_DATA.find((entry) => entry.id === topicId);
  if (!topic) throw new Error(`Unbekanntes Thema im PowerShell-Fragenpool: ${topicId}`);
  topic.questions.push(...questions);
});
