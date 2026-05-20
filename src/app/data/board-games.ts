import { BoardGame, Tag } from '../models/board-game';

// Snapshot statico dei dati, copiato una volta da BGG e fonti secondarie il 2026-05-16.

export const BOARD_GAMES: BoardGame[] = [
  {
    bggId: 129622,
    bggUrl: 'https://boardgamegeek.com/boardgame/129622/love-letter',
    slug: 'love-letter',
    title: 'Love Letter',
    category: 'Card game',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '20 min',
    complexity: '1.18',
    year: 2012,
    accentColor: '#b44b66',
    coverUrl: '/assets/games/love-letter.jpg',
    tags: [Tag.PartyGame],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Mescola il mazzo, metti 1 carta coperta da parte e distribuisci 1 carta a ciascuno.',
            'Prepara i segnalini favore; il numero per vincere dipende dal count giocatori o dalla variante scelta.',
            'Scegli il primo giocatore e parti subito: il gioco si spiega quasi giocando.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno peschi 1 carta e ne giochi 1, risolvendone leffetto per eliminare, proteggere, confrontare o manipolare mani.',
            'Se resti l ultimo in gioco vinci il round; altrimenti, a fine mazzo vince chi ha la carta piu alta in mano.',
            'I round sono indipendenti ma la memoria delle scelte del tavolo conta molto.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'L immunita della Damigella dura fino al tuo turno successivo.',
            'Il Principe puo colpire anche te stesso, spesso correttamente.',
            'Se devi scartare la Principessa, sei fuori senza eccezioni.',
          ],
        },
      ],
    },
  },
  {
    bggId: 237182,
    bggUrl: 'https://boardgamegeek.com/boardgame/237182/root',
    slug: 'root',
    title: 'Root',
    category: 'Asymmetric strategy',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '60-90 min',
    complexity: '3.84',
    year: 2018,
    accentColor: '#c06e34',
    coverUrl: '/assets/games/root.jpg',
    tags: [Tag.American, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Seguite i setup stampati sulle plance fazione: sono molto piu affidabili della memoria.',
            'Preparate mappa, clearings, item, mazzo comune e carte Dominance se le usate.',
            'Con 2 giocatori fate attenzione a fazioni e assetto consigliati: il gioco rende meglio con Reach adeguato.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni fazione gioca Birdsong, Daylight, Evening ma con azioni e vincoli propri.',
            'Si fanno punti costruendo il proprio engine e sfruttando il controllo del bosco in modo diverso a seconda della fazione.',
            'Il combattimento e semplice come procedura, ma il vero nodo e il posizionamento prima dello scontro.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Gatti, Aquile, Alleanza e Vagabondo non si leggono allo stesso modo: non usare automatismi tra una partita e l altra.',
            'Gli oggetti del Vagabondo, l indignazione dell Alleanza e il Turmoil delle Aquile sono i tre reminder che saltano piu spesso.',
            'Prima di attaccare o correre per punti, chiediti sempre chi sta davvero vincendo il tavolo.',
          ],
        },
      ],
    },
  },
  {
    bggId: 262712,
    bggUrl: 'https://boardgamegeek.com/boardgame/262712/res-arcana',
    slug: 'res-arcana',
    title: 'Res Arcana',
    category: 'Engine building',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '2',
    playTime: '30-60 min',
    complexity: '2.69',
    year: 2019,
    accentColor: '#5b4b8a',
    coverUrl: '/assets/games/res-arcana.jpg',
    tags: [Tag.Euro, Tag.EngineBuilding, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Ogni giocatore riceve mago, oggetto magico iniziale e il proprio deck da 8 artefatti.',
            'Rendi visibili monumenti e luoghi di potere previsti dal count giocatori.',
            'Distribuisci essenze iniziali e scegli il primo giocatore.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni round: raccogli eventuali entrate, poi a turno i giocatori fanno 1 azione alla volta finche tutti passano.',
            'Le azioni classiche sono: giocare un artefatto, usare un potere, reclamare monumento / luogo, scartare per risorse o passare.',
            'Chi passa per primo prende il first player, cambia oggetto magico e pesca 1 carta.',
            'Controlla la soglia punti a fine round; appena qualcuno supera il target, la partita puo chiudersi subito a quel check.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il gioco premia mani piccole ma coerenti: non giocare tutto solo perche puoi.',
            'Le essenze sui componenti e sulle carte vanno ricordate ogni round.',
            'Molti errori nascono dal dimenticare che i luoghi di potere sono una corsa, non un extra.',
          ],
        },
      ],
    },
  },
  {
    bggId: 431248,
    bggUrl: 'https://boardgamegeek.com/boardgame/431248/for-a-crown',
    slug: 'per-la-corona',
    title: 'Per la Corona / For a Crown',
    category: 'Deck building',
    minPlayers: 3,
    maxPlayers: 5,
    bestPlayers: '4-5',
    playTime: '30-45 min',
    complexity: '1.40',
    year: 2025,
    accentColor: '#8d5d2a',
    coverUrl: '/assets/games/per-la-corona.jpg',
    tags: [Tag.EngineBuilding, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara le famiglie / colori, il mazzo eventi comune e i componenti economici del gioco.',
            'Ogni giocatore riceve la propria identita e la dotazione iniziale prevista dal regolamento.',
            'Assicuratevi che sia chiaro come le carte personali entrano nel mazzo condiviso.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Durante la fase di reclutamento compri nuovi personaggi e li aggiungi alla tua linea colorata / sleeve.',
            'Poi tutte le carte vengono mischiate nel deck comune e rivelate una alla volta: quando esce una tua carta, risolvi tu il suo effetto.',
            'Dopo quattro round vince chi ha raccolto piu rubini.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Una carta forte ma lenta puo non ripagarsi se entra tardi nel ciclo.',
            'Guarda sempre anche cosa stai regalando al ritmo del mazzo comune.',
            'Segna bene i trigger di fine round: sono facili da saltare se il tavolo va veloce.',
          ],
        },
      ],
    },
  },
  {
    bggId: 418059,
    bggUrl:
      'https://boardgamegeek.com/boardgame/418059/seti-search-for-extraterrestrial-intelligence',
    slug: 'seti',
    title: 'SETI',
    category: 'Strategy euro',
    minPlayers: 1,
    maxPlayers: 4,
    bestPlayers: '2-3',
    playTime: '40-160 min',
    complexity: '3.82',
    year: 2024,
    accentColor: '#3d5d91',
    coverUrl: '/assets/games/seti.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara tabellone Sistema Solare, tech, carte e i componenti generali del gioco.',
            'Scegli le specie / moduli di partita previsti e rendi visibili gli obiettivi o scoring comuni.',
            'Ogni giocatore prende plancia, risorse iniziali, carte iniziali e asset di partenza.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno fai una grossa azione: lanciare o muovere asset, scandagliare, analizzare, giocare carte, sviluppare tecnologia o azioni simili secondo lo stato della partita.',
            'Le carte trasformano il motore e spesso aprono bonus o sconti se giocate nel timing giusto.',
            'La partita premia scienza, milestone e gestione efficiente della corsa alle scoperte.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Le posizioni di sonde / orbite non sono cosmetiche: incidono sulle azioni future.',
            'Non inseguire ogni mini-bonus se ti fa perdere il ritmo della traccia principale.',
            'A fine partita pesano molto le fonti di punti differiti: non arrivarci solo con rendita tattica.',
          ],
        },
      ],
    },
  },
  {
    bggId: 191894,
    bggUrl: 'https://boardgamegeek.com/boardgame/191894/imagine',
    slug: 'imagine',
    title: 'Imagine',
    category: 'Party game',
    minPlayers: 3,
    maxPlayers: 8,
    bestPlayers: '4-6',
    playTime: '15-30 min',
    complexity: '1.06',
    year: 2016,
    accentColor: '#4aa39b',
    coverUrl: '/assets/games/imagine.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Disponi le carte trasparenti e il sistema di punti secondo la modalita scelta.',
            'Assicurati che tutti vedano bene il centro del tavolo: serve leggibilita.',
            'Chiarite prima se la variante permette uso di orientamento, sovrapposizione, movimento o mime minima.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Un giocatore riceve il concetto da far indovinare e usa solo le carte trasparenti per rappresentarlo.',
            'Gli altri fanno tentativi entro la finestra prevista; quando qualcuno indovina si passa al round dopo.',
            'Il punteggio e secondario: la cosa importante e mantenere il turno rapido.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'L orientamento e la stratificazione delle carte sono spesso l informazione decisiva.',
            'Se tutti ragionano troppo il gioco si spegne: fate guess veloci.',
            'Meglio evocare una scena che inseguire una somiglianza perfetta.',
          ],
        },
      ],
    },
  },
  {
    bggId: 403441,
    bggUrl: 'https://boardgamegeek.com/boardgame/403441/windmill-valley',
    slug: 'windmill-valley',
    title: 'Windmill Valley',
    category: 'Strategy euro',
    minPlayers: 1,
    maxPlayers: 4,
    bestPlayers: '2',
    playTime: '45-90 min',
    complexity: '2.93',
    year: 2024,
    accentColor: '#d56b7f',
    coverUrl: '/assets/games/windmill-valley.jpg',
    tags: [Tag.Euro],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara plancia principale, mercato / contratti, tessere comuni e moduli base.',
            'Ogni giocatore prende la propria plancia mulino, risorse iniziali e materiale personale.',
            'Verificate prima del via come funziona la rotazione delle ruote e da quale coppia di azioni si sceglie.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno ruoti il mulino, crei la combinazione di azioni disponibile e ne esegui quella scelta.',
            'Le azioni alimentano piantagione, raccolta, contratti, upgrade e avanzamento sul motore personale.',
            'Il punteggio finale premia sia lo sviluppo economico sia il modo in cui hai chiuso i pattern della plancia.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Una rotazione mediocre oggi puo rovinare due turni dopo: non guardare solo il guadagno immediato.',
            'Se insegui tutti i mini-obiettivi, rischi di non completarne nessuno bene.',
            'Quando un upgrade cambia il tuo albero di decisioni, prenditi 10 secondi per ricalcolare il round.',
          ],
        },
      ],
    },
  },
  {
    bggId: 440007,
    bggUrl: 'https://boardgamegeek.com/boardgame/440007/the-druids-of-edora',
    slug: 'the-druids-of-edora',
    title: 'The Druids of Edora',
    category: 'Dice placement',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '3-4',
    playTime: '60-90 min',
    complexity: '3.04',
    year: 2025,
    accentColor: '#50724a',
    coverUrl: '/assets/games/the-druids-of-edora.jpg',
    tags: [Tag.Euro],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara foresta / plancia principale, dadi, risorse, obiettivi e componenti dei giocatori.',
            'Ogni giocatore prende la propria plancia e la dotazione iniziale.',
            'Mettete bene in chiaro costi, bonus e slot azione della mappa: e li che si inceppa il primo turno.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno piazzi dadi per compiere azioni: raccogliere, muovere, costruire, ottenere conoscenza o preparare pozioni.',
            'Le azioni si intrecciano: spesso una mossa vale per il setup della successiva piu che per il beneficio immediato.',
            'La partita si vince accumulando prestigio da costruzioni, contratti / obiettivi e buon uso del motore.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Un dado alto o basso non vale uguale ovunque: controlla bene gli slot prima di spenderlo.',
            'Le pozioni sono forti solo se supportano il piano di round, non come collezione decorativa.',
            'Se perdi il timing delle strutture, il tuo motore resta mezzo giro indietro per tutta la partita.',
          ],
        },
      ],
    },
  },
  {
    bggId: null,
    bggUrl: 'https://boardgamegeek.com/boardgameversion/778505/english-edition',
    slug: 'carnuta',
    title: 'Carnuta',
    category: 'Card drafting',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: 'n/d',
    playTime: '30-45 min',
    complexity: 'n/d',
    year: 2026,
    accentColor: '#7d6840',
    coverUrl: '/assets/games/carnuta.jpg',
    tags: [Tag.Euro],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara ingredienti, rune doppia faccia, token e plance personali.',
            'Dai a ogni giocatore il materiale iniziale previsto e rendi visibili le fonti comuni di ingredienti/bonus.',
            'Ricordate fin dall inizio come ruotano o si attivano le rune sole/luna: e la regola che si dimentica piu facilmente.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno selezioni ingredienti e costruisci la tua miscela cercando sinergie con lo stato attuale delle rune.',
            'Le carte / ingredienti giocati aprono scoring o sconti se sono combinati con il lato corretto delle rune.',
            'La partita accelera man mano che la tua griglia / pozione prende forma; serve pianificare un paio di mosse avanti.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non trattare sole e luna come puro bonus: sono vincoli di timing.',
            'Bloccare un ingrediente chiave troppo presto puo chiuderti linee piu ricche dopo.',
            'Quando puoi scegliere tra punti immediati e struttura migliore, spesso la struttura vince.',
          ],
        },
      ],
    },
  },
  {
    bggId: 68448,
    bggUrl: 'https://boardgamegeek.com/boardgame/68448/7-wonders',
    slug: '7-wonders',
    title: '7 Wonders',
    category: 'Card drafting',
    minPlayers: 2,
    maxPlayers: 7,
    bestPlayers: '4',
    playTime: '30 min',
    complexity: '2.32',
    year: 2010,
    accentColor: '#8f5c31',
    coverUrl: '/assets/games/7-wonders.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Fai i 3 mazzi delle 3 ere. Carte viola: numero giocatori + 2',
            'Dai a ciascuno una board Meraviglia, 3 monete e 7 carte Era 1',
            'Segnalini militari e soldi al centro, a portata di tutti',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Fra le carte nella mano puoi: costruirla, metterla nella meraviglia, scartarla',
            'Risoluzione conflitti militari a fine epoca',
            'Conteggio punti a fine partita',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            "L'era finisce quando viene giocata la penultima carta, non l'ultima",
            'Non si possono costruire 2 edifici identici',
            'Non è possibile usare le Monete ricevute dagli altri giocatori durante lo stesso turno',
            'Non è possibile acquistare risorse da un Edificio che il proprio vicino ha costruito in quello stesso turno',
          ],
        },
      ],
    },
  },
  {
    bggId: 173346,
    bggUrl: 'https://boardgamegeek.com/boardgame/173346/7-wonders-duel',
    slug: '7-wonders-duel',
    title: '7 Wonders Duel',
    category: 'Card drafting',
    minPlayers: 2,
    maxPlayers: 2,
    bestPlayers: '2',
    playTime: '30 min',
    complexity: '2.24',
    year: 2015,
    accentColor: '#9f6133',
    coverUrl: '/assets/games/7-wonders-duel.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara le tre strutture di carte per Era I, II e III secondo lo schema del regolamento, con alcune carte coperte.',
            'Date a ciascuno 4 meraviglie tramite draft e preparate monete, segnalino conflitto e token progresso.',
            'Ricordate prima di partire le tre condizioni di vittoria: scientifica, militare o punti a fine Era III.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno prendi una carta accessibile dalla struttura e la usi per costruire, scartare per monete o costruire una meraviglia.',
            'Alcune carte fanno avanzare il conflitto, altre danno simboli scienza o sconti permanenti.',
            'Quando finiscono le carte di un Era si prepara la successiva; se nessuno ha gia vinto, si va al conteggio finale.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Le carte coperte si sbloccano in base a cosa rimuovi: il controllo della struttura e mezza partita.',
            'La vittoria scientifica e immediata al sesto simbolo diverso, non a fine round.',
            'L avanzamento militare puo dare penalita o vittoria istantanea: tieni il tracciato sempre sotto controllo mentre spieghi.',
          ],
        },
      ],
    },
  },
  {
    bggId: 230802,
    bggUrl: 'https://boardgamegeek.com/boardgame/230802/azul',
    slug: 'azul',
    title: 'Azul',
    category: 'Abstract strategy',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '30-45 min',
    complexity: '1.76',
    year: 2017,
    accentColor: '#2d7997',
    coverUrl: '/assets/games/azul.jpg',
    tags: [Tag.Abstract, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara le fabbriche in numero corretto, riempi il sacchetto e dai a ciascuno una plancia con il lato scelto.',
            'Metti il segnalino primo giocatore al centro insieme alle tessere che andranno nel mercato comune.',
            'Prima del primo turno chiarisci la differenza tra linee preparazione, muro e riga pavimento.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno scegli tutte le tessere di un colore da una fabbrica o dal centro e le metti in una sola linea preparazione.',
            'Le tessere che non entrano nella linea vanno sul pavimento e fanno malus.',
            'Quando non restano piu tessere, ogni linea completa trasferisce una tessera sul muro, segna punti e poi si riparte con un nuovo round.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non puoi mettere un colore in una linea se quel colore e gia presente nella riga corrispondente del muro.',
            'Le tessere in eccesso non si conservano mai: se non entrano, fanno danno subito sul pavimento.',
            'Il round finale scatta appena qualcuno completa una riga orizzontale del muro, ma si finisce comunque quel round.',
          ],
        },
      ],
    },
  },
  {
    bggId: 3955,
    bggUrl: 'https://boardgamegeek.com/boardgame/3955/bang',
    slug: 'bang',
    title: 'BANG!',
    category: 'Party card game',
    minPlayers: 4,
    maxPlayers: 7,
    bestPlayers: '6-7',
    playTime: '20-40 min',
    complexity: '1.63',
    year: 2002,
    accentColor: '#9d4a2f',
    coverUrl: '/assets/games/bang.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Assegna i ruoli, rivela solo lo Sceriffo e distribuisci i personaggi con i rispettivi punti vita.',
            'Mescola il mazzo, dai le carte iniziali e prepara gli scarti raggiungibili da tutti.',
            'Spiega subito gli obiettivi dei ruoli e come si calcola la distanza attorno al tavolo.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel tuo turno peschi 2 carte, giochi quante carte legali vuoi e poi scarti fino al limite punti vita.',
            'Le carte principali sono attacchi, equipaggiamenti, recupero vita e azioni immediate.',
            'La partita finisce quando si realizza la condizione del ruolo rimasto vincente, di solito con la morte dello Sceriffo o dei fuorilegge.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Normalmente puoi giocare un solo BANG! per turno salvo effetti che dicano il contrario.',
            'La distanza si conta nel verso piu corto del tavolo e puo essere modificata da armi e bonus personaggio.',
            'Quando un giocatore va a zero, puo ancora salvarsi con Birra o effetti validi prima di essere eliminato del tutto.',
          ],
        },
      ],
    },
  },
  {
    bggId: 822,
    bggUrl: 'https://boardgamegeek.com/boardgame/822/carcassonne',
    slug: 'carcassonne',
    title: 'Carcassonne',
    category: 'Tile placement',
    minPlayers: 2,
    maxPlayers: 5,
    bestPlayers: '2',
    playTime: '30-45 min',
    complexity: '1.90',
    year: 2000,
    accentColor: '#8b6a3d',
    coverUrl: '/assets/games/carcassonne.jpg',
    tags: [Tag.Abstract, Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Metti la tessera iniziale al centro, mescola tutte le altre e dai a ciascuno i meeple del proprio colore.',
            'Lascia il punteggio visibile e chiarisci se state giocando base pura o con espansioni.',
            'Se il gruppo e arrugginito, spiega prima strade, citta e monasteri; i campi possono arrivare subito dopo.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno peschi una tessera e la piazzi in modo legale accostando lati compatibili.',
            'Poi puoi mettere un meeple su un elemento della tessera appena giocata se quell elemento non e gia occupato nella struttura collegata.',
            'Quando completi una strada, una citta o un monastero, si assegnano i punti e i meeple tornano al proprietario.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il meeple si piazza solo sulla tessera appena giocata, non su una tessera gia a terra.',
            'Una struttura collegata con gia un meeple non puo riceverne altri dello stesso tipo, salvo fusioni che avvengono dopo.',
            'I campi di solito si contano solo a fine partita: non mischiare il loro scoring con quello immediato delle altre strutture.',
          ],
        },
      ],
    },
  },
  {
    bggId: 147151,
    bggUrl: 'https://boardgamegeek.com/boardgame/147151/concept',
    slug: 'concept',
    title: 'Concept',
    category: 'Party game',
    minPlayers: 4,
    maxPlayers: 12,
    bestPlayers: '6-8',
    playTime: '40 min',
    complexity: '1.35',
    year: 2013,
    accentColor: '#5c8b66',
    coverUrl: '/assets/games/concept.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Apri il tabellone delle icone, prepara cubetti e token e scegli se giocare con punti o in modalita libera.',
            'Dividetevi in coppie o squadre secondo il numero di giocatori.',
            'Prima di partire chiarite che si comunica solo tramite icone e marcatori, non con parole o gesti extra.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Chi deve far indovinare sceglie il concetto segreto e piazza il marcatore principale sull idea centrale.',
            'Usa poi cubetti secondari per aggiungere attributi, categorie o dettagli utili.',
            'Gli altri fanno tentativi finche qualcuno indovina oppure si decide di passare oltre secondo la modalita scelta.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non spiegare con la faccia o col tono: il gioco si rompe subito se entrano segnali extra.',
            'Il marcatore principale deve sempre indicare il concetto base; i secondari servono per modulare, non per sostituirlo.',
            'Se un indizio si e incartato, conviene ripartire puliti invece di aggiungere dieci marker confusi.',
          ],
        },
      ],
    },
  },
  {
    bggId: 246784,
    bggUrl: 'https://boardgamegeek.com/boardgame/246784/cryptid',
    slug: 'cryptid',
    title: 'Cryptid',
    category: 'Deduction',
    minPlayers: 3,
    maxPlayers: 5,
    bestPlayers: '4-5',
    playTime: '30-50 min',
    complexity: '2.16',
    year: 2018,
    accentColor: '#54696f',
    coverUrl: '/assets/games/cryptid.jpg',
    tags: [Tag.Abstract, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Costruite la mappa corretta, distribuite a ciascuno una carta indizio e preparate cubi e dischi del proprio colore.',
            'Assicuratevi che tutti sappiano orientamento della mappa e significato di terreni e strutture.',
            'Ricordate che ogni indizio e vero insieme agli altri, e che esiste una sola casella finale compatibile.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno puoi interrogare un altro giocatore su una casella oppure fare una ricerca tu stesso.',
            'Le risposte pubbliche aggiungono dischi o cubi che restringono il numero di caselle possibili.',
            'Quando pensi di avere la soluzione, fai la ricerca finale sulla casella sospetta e controlli tutti gli avversari coinvolti.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Un disco significa che la casella puo contenere il Cryptid per quel giocatore; un cubo significa no.',
            'Le domande vanno fatte su caselle informative, non su caselle quasi certe che regalano dati agli altri.',
            'Se il tavolo dimentica un orientamento della mappa, tutta la deduzione salta: verificatelo subito nel setup.',
          ],
        },
      ],
    },
  },
  {
    bggId: 39856,
    bggUrl: 'https://boardgamegeek.com/boardgame/39856/dixit',
    slug: 'dixit',
    title: 'Dixit',
    category: 'Party game',
    minPlayers: 3,
    maxPlayers: 6,
    bestPlayers: '6',
    playTime: '30 min',
    complexity: '1.19',
    year: 2008,
    accentColor: '#8b5ba7',
    coverUrl: '/assets/games/dixit.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Date a ciascuno una mano di carte, coniglio segnapunti e gettoni voto nel proprio colore.',
            'Preparate il tracciato punteggio e chiarite quanti gettoni usa ogni giocatore in base al tavolo.',
            'Spiega subito la regola centrale dell indizio: deve essere interpretabile, non evidente.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Il narratore sceglie una carta della mano e dice un indizio, parola o frase, senza mostrarla.',
            'Gli altri scelgono una carta della propria mano che potrebbe adattarsi all indizio; poi si mischiano e si rivelano.',
            'Tutti votano la carta del narratore, si segnano i punti e si passa il ruolo.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il narratore non vuole essere indovinato da tutti: cerca una via di mezzo, non la soluzione perfetta.',
            'Non si puo votare la propria carta.',
            'I giocatori prendono punti anche se altri votano la loro carta-esca, quindi la scelta difensiva conta parecchio.',
          ],
        },
      ],
    },
  },
  {
    bggId: 194594,
    bggUrl: 'https://boardgamegeek.com/boardgame/194594/dice-forge',
    slug: 'dice-forge',
    title: 'Dice Forge',
    category: 'Dice crafting',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '45 min',
    complexity: '1.97',
    year: 2017,
    accentColor: '#4f78d5',
    coverUrl: '/assets/games/dice-forge.jpg',
    tags: [Tag.Euro, Tag.EngineBuilding],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara il tempio con i set di carte scelti, i dadi base e le facce acquistabili.',
            'Ogni giocatore prende plancia, dado coppia e risorse iniziali standard.',
            'Disponi bene le facce dei dadi: sono il mercato vero del gioco.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni turno attivo inizia con il tiro dei dadi del giocatore attivo, ma in molti momenti tutti raccolgono anche entrate passive dai propri dadi.',
            'Con le risorse puoi comprare nuove facce e sostituirle sui dadi oppure comprare carte dal tempio.',
            'Le carte danno punti, accelerazioni o effetti permanenti; la partita dura un numero fisso di round.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Cambiare una faccia e letteralmente migliorare il dado: togli il lato vecchio e aggancia il nuovo.',
            'Non saturarti di carte costose se il dado produce ancora poco.',
            'Molti effetti del tempio premiano il timing del turno, non solo il valore assoluto.',
          ],
        },
      ],
    },
  },
  {
    bggId: 316554,
    bggUrl: 'https://boardgamegeek.com/boardgame/316554/dune-imperium',
    slug: 'dune-imperium',
    title: 'Dune: Imperium',
    category: 'Strategy euro',
    minPlayers: 1,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '60-120 min',
    complexity: '3.03',
    year: 2020,
    accentColor: '#9e7040',
    coverUrl: '/assets/games/dune-imperium.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara tabellone, mercato imperium, leader, risorse e mazzi conflitto/intrigo secondo il setup base.',
            'Ogni giocatore sceglie un leader, prende deck iniziale, 2 agenti e dotazione di partenza.',
            'Prima del primo turno chiarisci dove si piazzano agenti, come si legge il testo in alto delle carte e come funziona la lotta di round.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'A turno giochi una carta dalla mano per mandare un agente in uno spazio compatibile con le icone di accesso.',
            'Quando hai finito gli agenti, fai il reveal delle carte rimaste per ottenere persuasione e forza extra, poi compri dal mercato se puoi.',
            'A fine round si risolve il conflitto in ordine di forza e si prepara il round successivo.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il testo di piazzamento e il testo reveal della stessa carta non si usano insieme nello stesso momento.',
            'Le alleanze e le tracce fazione valgono tantissimo: non presentarle come un extra marginale.',
            'La spada nel conflitto non e tutto: i punti arrivano anche da carte, fazioni e timing del deck.',
          ],
        },
      ],
    },
  },
  {
    bggId: 131357,
    bggUrl: 'https://boardgamegeek.com/boardgame/131357/coup',
    slug: 'coup',
    title: 'Coup',
    category: 'Bluffing',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '5',
    playTime: '15 min',
    complexity: '1.42',
    year: 2012,
    accentColor: '#7f3e42',
    coverUrl: '/assets/games/coup.jpg',
    tags: [Tag.PartyGame],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Mescola il mazzo ruoli, dai 2 carte coperte a ciascuno e 2 monete iniziali.',
            'Le carte in mano sono le tue influenze vive; quelle perse restano rivelate davanti a te.',
            'Lascia il mazzo e i soldi comuni raggiungibili da tutti.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno dichiari una sola azione: reddito, aiuto estero, colpo di stato o una azione da ruolo.',
            'Gli altri possono sfidare la veridicita del ruolo dichiarato oppure bloccare se la regola lo permette.',
            'Quando qualcuno perde entrambe le influenze, esce; vince l ultimo rimasto.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Chi mostra di avere davvero il ruolo dopo una sfida lo rimischia e pesca una nuova carta.',
            'Il Duca blocca aiuto estero; il Capitano puo essere bloccato da Capitano o Ambasciatore.',
            'Se arrivi a 10 monete devi fare colpo di stato immediatamente.',
          ],
        },
      ],
    },
  },
  {
    bggId: 128882,
    bggUrl: 'https://boardgamegeek.com/boardgame/128882/the-resistance-avalon',
    slug: 'the-resistance-avalon',
    title: 'The Resistance: Avalon',
    category: 'Social deduction',
    minPlayers: 5,
    maxPlayers: 10,
    bestPlayers: '7',
    playTime: '30 min',
    complexity: '1.74',
    year: 2012,
    accentColor: '#5f415d',
    coverUrl: '/assets/games/the-resistance-avalon.jpg',
    tags: [Tag.PartyGame],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Scegli i ruoli in base al count giocatori e distribuiscili coperti.',
            'Fai la sequenza iniziale di occhi chiusi / aperti per Evil e Merlin secondo i ruoli in partita.',
            'Prepara tracker missioni, marker leader e carte team vote / mission vote.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Il leader propone un team; tutti votano approvazione o rifiuto.',
            'Se il team passa, i membri in missione giocano successo/fallimento coperto e si rivela lesito.',
            'Dopo tre missioni vinte da un lato, si va al finale: se il Bene ha vinto, gli assassini provano a trovare Merlin.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Le carte missione del Bene sono sempre successo; il male puo scegliere quando spingere davvero.',
            'Il meta sulle proposte di team e spesso piu informativo dei discorsi lunghi.',
            'Se Merlin parla troppo, spesso consegna la partita nel finale.',
          ],
        },
      ],
    },
  },
  {
    bggId: 332321,
    bggUrl: 'https://boardgamegeek.com/boardgame/332321/alien-fate-of-the-nostromo',
    slug: 'alien-fate-of-the-nostromo',
    title: 'Alien: Il Destino della Nostromo',
    category: 'Cooperative',
    minPlayers: 1,
    maxPlayers: 5,
    bestPlayers: '4',
    playTime: '60 min',
    complexity: '1.80',
    year: 2021,
    accentColor: '#3f5962',
    coverUrl: '/assets/games/alien-fate-of-the-nostromo.webp',
    tags: [Tag.Cooperative, Tag.American],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Per la prima partita apri la plancia Nostromo, metti il morale sul valore iniziale corretto, prepara il mazzo Incontri e lascia Ash nella scatola.',
            'Ogni giocatore prende un membro dell equipaggio con pedina e abilità.',
            'Metti 2 rottami in Garage, MU-TH-UR, Infermeria e Maintenance; 1 segnalino nascosto in Garage, Workshop e Maintenance; 1 tanica di refrigerante in Workshop, Garage, Maintenance, Equipment Storage, MU-TH-UR e Hyper Sleep.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel tuo turno usa le azioni per: camminare | raccogliere X oggetti | depositare X oggetti | scambiare oggetti | creare un oggetto | usare un oggetto',
            'Il gruppo deve raccogliere risorse, completare gli obiettivi in ordine e aprirsi la strada al finale.',
          ],
        },
        {
          title: 'Occhio a',
          items: ['La torcia avita danni solo se equipaggiata da chi riceve i danni'],
        },
      ],
    },
  },
  {
    bggId: 347137,
    bggUrl: 'https://boardgamegeek.com/boardgame/347137/chronicles-of-avel',
    slug: 'le-cronache-di-avel',
    title: 'Le Cronache di Avel',
    category: 'Cooperative fantasy',
    minPlayers: 1,
    maxPlayers: 4,
    bestPlayers: '3-4',
    playTime: '60 min',
    complexity: '1.95',
    year: 2021,
    accentColor: '#5d7e52',
    coverUrl: '/assets/games/le-cronache-di-avel.jpg',
    tags: [Tag.Cooperative, Tag.American],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Per la prima partita usate la mappa introduttiva del regolamento, non una variante o una mappa avanzata.',
            'Ogni giocatore crea il proprio eroe e prende la dotazione iniziale.',
            'Preparate subito castello, mostri iniziali, dadi e mazzi base, cosi il tavolo vede da subito cosa difende e da dove arrivano i problemi.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno i giocatori si muovono, esplorano, raccolgono equipaggiamento e affrontano mostri.',
            'La partita alterna crescita del party e gestione del ritmo di invasione sulla mappa.',
            'Il finale chiede al gruppo di arrivare preparato, non solo vivo.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Se il gruppo spreca troppi turni in micro-ottimizzazioni, il tabellone si riempie di problemi.',
            'Condividete equip e risorse dove generano il massimo impatto.',
            'Prima del boss o dell ultima fase, ricontrollate vincoli scenario e condizioni di sconfitta.',
          ],
        },
      ],
    },
  },
  {
    bggId: 205398,
    bggUrl: 'https://boardgamegeek.com/boardgame/205398/citadels',
    slug: 'citadels',
    title: 'Citadels',
    category: 'Role selection',
    minPlayers: 2,
    maxPlayers: 8,
    bestPlayers: '5',
    playTime: '30-60 min',
    complexity: '2.05',
    year: 2016,
    accentColor: '#806b3a',
    coverUrl: '/assets/games/citadels.jpg',
    tags: [Tag.Euro],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Mescola il mazzo quartieri, dai 4 carte a testa, crea la banca comune e dai 2 oro a ciascuno.',
            '2 giocatori: 8 personaggi. 1 Scarta coperto+sceglie, 2 sceglie+scarta etc. Vittoria: 8 quartieri.',
            '3 giocatori: 9 personaggi. 1 Scarta coperto+sceglie, 2 sceglie+scarta etc. Vittoria: 8 quartieri.',
            '4 giocatori: 8(9) personaggi. Scartare 2(3) carte a faccia in sù, una faccia in giù. Vittoria: 7 quartieri.',
            '5 giocatori: 8(9) personaggi. Scartare 1(2) carta a faccia in sù, una faccia in giù. Vittoria: 7 quartieri.',
            '6 giocatori: 8(9) personaggi. Scartare 1(1) carta a faccia in giù. Vittoria: 7 quartieri.',
            '7 giocatori: 8(9) personaggi. Scartare 1 carta a faccia in giù. Ultimo giocatore sceglie anche fra quella se erano 8 personaggi. Vittoria: 7 quartieri.',
            '8 giocatori: 9 personaggi. Scartare 1 carta a faccia in giù. Ultimo giocatore sceglie anche fra quella. Vittoria: 7 quartieri.',
          ],
        },
        {
          title: 'Turno vero e proprio',
          items: ['Esegui le azioni nella carta promemoria'],
        },
        {
          title: 'Occhio a',
          items: [
            'Regina 5+ giocatori',
            'No quartieri doppi, a meno che un effetto lo consenta esplicitamente.',
            'Le citta complete non possono subire certi effetti distruttivi.',
            'Tiebreaker vittoria: punti -> chi ha il rango più alto',
          ],
        },
      ],
    },
  },
  {
    bggId: 457589,
    bggUrl: 'https://boardgamegeek.com/boardgame/457589/disco-draw',
    slug: 'disco-draw',
    title: 'Disco Draw',
    category: 'Party game',
    minPlayers: 3,
    maxPlayers: 6,
    bestPlayers: 'n/d',
    playTime: '30 min',
    complexity: 'n/d',
    year: 2025,
    accentColor: '#cf4f7d',
    coverUrl: '/assets/games/disco-draw.jpg',
    tags: [Tag.PartyGame],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara supporti di disegno, timer e mazzo/obiettivi della partita.',
            'Mettete il materiale in modo che il passaggio o la rotazione sia immediato.',
            'Chiarite prima del primo round cosa vale come indizio illegale.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Un round tipico alterna prompt da rappresentare, finestra di disegno rapida e fase di interpretazione / punteggio.',
            'Il twist della tavola rotante o del passaggio dei supporti cambia chi completa davvero il disegno.',
            'Si segna soprattutto sulla leggibilita del concetto, non sulla bellezza.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non restare bloccato su un dettaglio: il tempo corto punisce la perfezione.',
            'I simboli troppo astratti spesso confondono piu di quanto aiutino.',
            'Usate un ritmo serrato e poche discussioni tra un round e l altro.',
          ],
        },
      ],
    },
  },
  {
    bggId: 199042,
    bggUrl: 'https://boardgamegeek.com/boardgame/199042/harry-potter-hogwarts-battle',
    slug: 'harry-potter-hogwarts-battle',
    title: 'Harry Potter Hogwarts Battle',
    category: 'Cooperative deck building',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '30-60 min',
    complexity: '2.08',
    year: 2016,
    accentColor: '#7b4e2f',
    coverUrl: '/assets/games/harry-potter-hogwarts-battle.jpg',
    tags: [Tag.Cooperative, Tag.EngineBuilding, Tag.American, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Scegli l anno/scatola da giocare, prepara eroi, mazzo iniziale, mercato Hogwarts, luoghi e mazzo oscurita corrispondenti.',
            'Ogni giocatore prende il proprio eroe con segnalini salute e deck iniziale.',
            'Spiegate prima quali moduli aggiuntivi introduce quell anno specifico, altrimenti il tavolo si perde tra regole nuove e base.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno riveli eventi oscurita, risolvi eventuali effetti, giochi le carte della mano e spendi risorse per attaccare, curare o comprare nuove carte.',
            'I nemici vanno eliminati collaborando mentre difendete i luoghi dal controllo nemico.',
            'A fine turno scarti la mano, peschi di nuovo e si passa al giocatore dopo finche il gruppo vince o perde per i luoghi.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il mercato comune non e solo potenza: comprare carte troppo costose o lente puo sporcare il deck e rallentare tutti.',
            'Molti effetti dicono se valgono su un solo nemico o su tutti: chiariscilo mentre spieghi, non dopo il primo errore.',
            'La sconfitta spesso arriva dal controllo sui luoghi, non dalla vita degli eroi: non perdere di vista quel tracciato.',
          ],
        },
      ],
    },
  },
  {
    bggId: 366013,
    bggUrl: 'https://boardgamegeek.com/boardgame/366013/heat-pedal-to-the-metal',
    slug: 'heat-pedal-to-the-metal',
    title: 'Heat: Pedal to the Metal',
    category: 'Racing',
    minPlayers: 1,
    maxPlayers: 6,
    bestPlayers: '5-6',
    playTime: '30-60 min',
    complexity: '2.18',
    year: 2022,
    accentColor: '#bc5334',
    coverUrl: '/assets/games/heat-pedal-to-the-metal.jpg',
    tags: [Tag.American, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Scegli il circuito, prepara le auto, dai a ciascuno il mazzo base e i componenti della plancia pilota.',
            'Posiziona le macchine in griglia e chiarisci subito il significato delle marce e della pila heat.',
            'Se usate upgrade o automa, spiegateli dopo il core: il flusso base va capito pulito.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni round selezioni la marcia, peschi il numero corretto di carte, ne giochi una come accelerazione e muovi di quel totale.',
            'Puoi spendere heat per spingere oltre o per gestire meglio alcuni momenti chiave.',
            'Dopo il movimento si controllano curve, slipstream, raffreddamento e fine round secondo il flusso della plancia.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Se esci da una curva troppo forte prendi penalita: la soglia si controlla quando la lasci, non quando ci entri.',
            'Heat non e scarto normale: entra e esce dal motore con tempistiche precise, quindi spiegarlo bene evita caos subito.',
            'Una marcia alta non e sempre meglio: saltare troppo presto di gear puo bloccarti la mano nel round dopo.',
          ],
        },
      ],
    },
  },
  {
    bggId: 302520,
    bggUrl: 'https://boardgamegeek.com/boardgame/302520/hues-and-cues',
    slug: 'hues-and-cues',
    title: 'Hues and Cues',
    category: 'Party game',
    minPlayers: 3,
    maxPlayers: 10,
    bestPlayers: '4-8',
    playTime: '30 min',
    complexity: '1.18',
    year: 2020,
    accentColor: '#7c5ce0',
    coverUrl: '/assets/games/hues-and-cues.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Apri la plancia dei colori, date i segnalini ai giocatori e scegliete come ruota il clue giver.',
            'Assicuratevi che tutti vedano bene la griglia; da mobile o luce scarsa il gioco peggiora molto.',
            'Chiarite prima cosa e permesso come parola: di solito un indizio da una parola e poi, se previsto, un secondo piu preciso.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Il clue giver guarda il target segreto e da il primo indizio verbale legale.',
            'Gli altri piazzano un segnalino sul colore che credono corretto; poi arriva il secondo indizio e un eventuale aggiustamento/secondo segnalino.',
            'Si assegnano punti in base alla vicinanza al target e il ruolo passa al giocatore successivo.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non usare riferimenti troppo privati o tecnici che solo una persona al tavolo capirebbe.',
            'La vicinanza al colore giusto conta: non serve la casella perfetta per segnare bene.',
            'Se il gruppo discute continuamente sulla legalita degli indizi, fermatevi e fissate un criterio comune prima di continuare.',
          ],
        },
      ],
    },
  },
  {
    bggId: 416851,
    bggUrl: 'https://boardgamegeek.com/boardgame/416851/castle-combo',
    slug: 'castle-combo',
    title: 'Castle Combo',
    category: 'Tableau building',
    minPlayers: 2,
    maxPlayers: 5,
    bestPlayers: '2',
    playTime: '25 min',
    complexity: '1.73',
    year: 2024,
    accentColor: '#7f5c47',
    coverUrl: '/assets/games/castle-combo.jpg',
    tags: [Tag.Euro, Tag.EngineBuilding],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara il mercato comune e le risorse iniziali secondo il numero di giocatori.',
            'Ogni giocatore costruira un tableau 3x3: lasciate lo spazio ben leggibile fin dall inizio.',
            'Se usate file o colonne con carte coperte/scoperte, chiarite subito da dove si puo comprare.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno prendi la carta accessibile che ti conviene e la piazzi in uno dei nove slot.',
            'L economia gira su poche risorse e piccoli sconti/ritorni, quindi il sequencing conta molto.',
            'A fine partita quasi tutti i punti vengono dalla qualita del tableau piu che da motori secondari.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non riempire i buchi con carte mediocri troppo presto: il posizionamento finale vale parecchio.',
            'Molte carte sono forti solo se la griglia le sostiene attorno.',
            'Quando hai dubbi, privilegia una carta che tiene aperte due linee di scoring.',
          ],
        },
      ],
    },
  },
  {
    bggId: 413246,
    bggUrl: 'https://boardgamegeek.com/boardgame/413246/bomb-busters',
    slug: 'bomb-busters',
    title: 'Bomb Busters',
    category: 'Deduction co-op',
    minPlayers: 2,
    maxPlayers: 5,
    bestPlayers: '4',
    playTime: '30 min',
    complexity: '2.00',
    year: 2025,
    accentColor: '#8d4734',
    coverUrl: '/assets/games/bomb-busters.jpg',
    tags: [Tag.Cooperative, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Per la prima partita usate la Missione 1 del libro: niente scatole sorpresa e niente missioni avanzate.',
            'Distribuisci i supporti personali e fai in modo che ciascuno veda solo le informazioni permesse.',
            'Il capitano legge ad alta voce il setup della missione, poi distribuite i fili come indicato e mettete sul tavolo solo i token davvero usati da quella missione.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno provi a identificare un taglio corretto usando informazione pubblica e disposizione dei fili.',
            'Ogni successo restringe il puzzle e apre nuove certezze per gli altri.',
            'Le missioni aggiungono twist che cambiano come leggere valori, coppie o vincoli.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Le deduzioni forti vanno espresse in modo utile al tavolo, non tenute solo in testa.',
            'Non confondere probabilita alta con certezza: il gioco punisce la fretta.',
            'Prima di un taglio rischioso, ricontrolla cosa hanno gia implicato i tagli precedenti.',
          ],
        },
      ],
    },
  },
  {
    bggId: 422175,
    bggUrl: 'https://boardgamegeek.com/boardgame/422175/drama-lama',
    slug: 'drama-lama',
    title: 'Drama Lama',
    category: 'Party game',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '4',
    playTime: '20 min',
    complexity: '1.00',
    year: 2024,
    accentColor: '#9d6d33',
    coverUrl: '/assets/games/drama-lama.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara il mazzo e il materiale comune previsto dalla variante base.',
            'Dai a tutti la mano / dotazione iniziale standard e chiarisci la condizione di fine round.',
            'Se il gioco prevede una carta o un segnalino leader iniziale, assegnalo subito.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno giochi lazione consentita dalla carta o dal momento, cercando di migliorare la tua posizione o peggiorare quella altrui.',
            'I round sono brevi e si risolvono in una manciata di scelte dirette.',
            'Punti o obiettivo finale dipendono dal tipo di carte tenute, scaricate o fatte risolvere.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Molte carte sembrano equivalenti ma cambiano molto se giocate da leader o da inseguitore.',
            'Se una carta crea interazione simultanea, chiarite l ordine di risoluzione prima di partire.',
          ],
        },
      ],
    },
  },
  {
    bggId: 274960,
    bggUrl: 'https://boardgamegeek.com/boardgame/274960/point-salad',
    slug: 'insalata-di-punti',
    title: 'Insalata di Punti / Point Salad',
    category: 'Card drafting',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '2-3',
    playTime: '15-30 min',
    complexity: '1.15',
    year: 2019,
    accentColor: '#5e9b4b',
    coverUrl: '/assets/games/insalata-di-punti.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Forma il mercato con i mazzi/tagli corretti e mostra chiaramente le due carte ortaggio visibili per pila se usate la disposizione standard.',
            'Spiega che ogni carta ha due lati: uno punteggio e uno ortaggio.',
            'Lasciate spazio personale per un tableau leggibile, perche il conteggio finale si basa tutto su quello che hai raccolto.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno prendi due carte ortaggio visibili dello stesso gruppo oppure una singola carta punteggio dal lato scoring.',
            'Le carte ortaggio vanno tenute dal lato prodotto; le carte punteggio restano sul lato obiettivo.',
            'Quando il mercato si esaurisce, si contano tutti i punti delle carte obiettivo applicandoli alla propria collezione di ortaggi.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Una carta scelta come ortaggio non puo essere girata dopo a punteggio, e viceversa.',
            'Non tutte le carte premiano la stessa cosa: evitare doppioni inutili vale piu che prendere sempre il colore preferito.',
            'Il gioco e breve: una carta punteggio presa tardi senza supporto spesso vale meno di due ortaggi ben presi prima.',
          ],
        },
      ],
    },
  },
  {
    bggId: 164928,
    bggUrl: 'https://boardgamegeek.com/boardgame/164928/orleans',
    slug: 'orleans',
    title: 'Orleans',
    category: 'Bag building euro',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '90 min',
    complexity: '3.06',
    year: 2014,
    accentColor: '#8a6c44',
    coverUrl: '/assets/games/orleans.jpg',
    tags: [Tag.Euro, Tag.EngineBuilding, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara tabellone, mappa, eventi di round, merci e componenti personali secondo il numero di giocatori.',
            'Ogni giocatore prende la propria plancia, seguaci iniziali e sacca.',
            'Spiega subito i tipi di seguaci e le azioni base della plancia personale prima di parlare della mappa esterna.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni round si rivela un evento, poi i giocatori pescano seguaci dalla sacca e li assegnano agli spazi azione della plancia.',
            'Quando un azione e completata con i seguaci richiesti, la risolvi e ottieni movimento, merci, nuovi seguaci, tech o avanzamenti.',
            'La partita prosegue per i round previsti e il punteggio arriva da sviluppo su tracce, merci, cittadini e presenza sulla mappa.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'I seguaci usati per preparare un azione non tornano subito disponibili: questo va spiegato bene il primo round.',
            'Gli eventi di round non sono decorativi: alcuni cambiano parecchio priorita e timing delle azioni.',
            'La sacca va migliorata con criterio: prendere seguaci a caso senza struttura rende il motore incoerente.',
          ],
        },
      ],
    },
  },
  {
    bggId: 260605,
    bggUrl: 'https://boardgamegeek.com/boardgame/260605/camel-up-second-edition',
    slug: 'camel-up',
    title: 'Camel Up',
    category: 'Betting',
    minPlayers: 3,
    maxPlayers: 8,
    bestPlayers: '5-6',
    playTime: '30-45 min',
    complexity: '1.47',
    year: 2018,
    accentColor: '#b78334',
    coverUrl: '/assets/games/camel-up.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Mettete plancia, piramide, dadi e cammelli sulla pista come da setup iniziale.',
            'Date monete e tessera deserto ai giocatori, poi preparate leg-bet e winner/loser bet.',
            'Tirate i dadi iniziali per il posizionamento di partenza se usate la procedura standard.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel tuo turno scegli una delle azioni classiche: far uscire un dado dalla piramide, piazzare tessera deserto, prendere una scommessa di gamba, o puntare vincente/perdente finale.',
            'Quando tutti i dadi della gamba sono usciti, si paga la gamba e si resetta il round corto.',
            'La partita chiude quando un cammello taglia il traguardo; poi si pagano le scommesse finali.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'I cammelli in cima alla pila vengono trasportati insieme se quello sotto si muove.',
            'Le tessere deserto possono cambiare lordine e fare guadagnare una moneta al proprietario.',
            'Le scommesse finali premiano anche il timing con cui sono state prese.',
          ],
        },
      ],
    },
  },
  {
    bggId: 355483,
    bggUrl: 'https://boardgamegeek.com/boardgame/355483/wandering-towers',
    slug: 'the-wandering-towers',
    title: 'The Wandering Towers',
    category: 'Family strategy',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '4',
    playTime: '30 min',
    complexity: '1.66',
    year: 2022,
    accentColor: '#5b68a0',
    coverUrl: '/assets/games/the-wandering-towers.jpg',
    tags: [Tag.Abstract, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara il percorso, le torri, i maghi di tutti i colori e il materiale pozioni/carte.',
            'Ogni giocatore riceve la mano iniziale e mette i propri maghi nelle posizioni di partenza previste.',
            'Assicuratevi che tutti ricordino come si comportano i maghi quando una torre li copre o li trasporta.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno giochi una carta o lazione prevista per muovere un mago o una torre.',
            'L interazione nasce dal coprire, liberare o trascinare pezzi, aprendo scorciatoie o rallentamenti.',
            'Vince chi porta a destinazione i propri maghi nei tempi e nei modi richiesti dal gioco.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'La torre giusta nel punto giusto vale piu di un semplice avanzamento lineare.',
            'Non sprecare carte forti per fare solo un passo comodo.',
            'Ricontrolla sempre gli effetti di liberazione o blocco prima di passare il turno.',
          ],
        },
      ],
    },
  },
  {
    bggId: 45,
    bggUrl: 'https://boardgamegeek.com/boardgame/45/perudo',
    slug: 'perudo',
    title: 'Perudo',
    category: 'Bluffing',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '5-6',
    playTime: '20-30 min',
    complexity: '1.33',
    year: 1993,
    accentColor: '#7f3a2e',
    coverUrl: '/assets/games/perudo.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Date a ciascuno il bicchiere e il numero corretto di dadi, poi tutti lanciano coperti.',
            'Scegliete se giocate con regole base o varianti tipo palifico e chiaritele prima di iniziare.',
            'Spiega bene come funziona il valore uno nella vostra partita e qual e la perdita quando un dubbio si risolve.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Il giocatore di turno fa una dichiarazione sul numero totale di dadi di un certo valore presenti sotto tutti i bicchieri.',
            'Il turno successivo deve rilanciare in modo legale oppure dire che la chiamata precedente e falsa.',
            'Quando qualcuno dubita, si rivelano i dadi, si conta e chi ha sbagliato perde un dado; vince l ultimo con dadi rimasti.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il rilancio deve rispettare la logica corretta di quantita e/o valore: spiegarla male rovina subito la partita.',
            'Se usate palifico, ricordate bene da quando si attiva e cosa cambia per gli uno.',
            'Non fate raccontare i numeri ad alta voce al tavolo durante il reveal: contate insieme e basta, senza retrospiegazioni infinite.',
          ],
        },
      ],
    },
  },
  {
    bggId: 339214,
    bggUrl: 'https://boardgamegeek.com/boardgameversion/735427/italian-edition',
    slug: 'procioni-in-cassa-4!',
    title: 'Procioni in Cassa 4!',
    category: 'Family card game',
    minPlayers: 2,
    maxPlayers: 5,
    bestPlayers: '4',
    playTime: '20 min',
    complexity: '1.02',
    year: 2021,
    accentColor: '#5c4c42',
    coverUrl: '/assets/games/procioni-in-cassa-4.jpg',
    tags: [Tag.PartyGame, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara il mazzo, i componenti bottino e l eventuale area comune di scarto o refurtiva secondo il regolamento.',
            'Dai a ciascuno la dotazione iniziale prevista e chiarisci subito come si tiene il bottino sicuro rispetto a quello ancora a rischio.',
            'Se ci sono effetti speciali di carta, mostratene un paio prima di partire invece di leggerli tutti uno per uno.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno o nella fase comune continui a rivelare / giocare carte cercando di aumentare il bottino senza saltare.',
            'A un certo punto puoi fermarti e mettere al sicuro quello che hai raccolto, oppure rischiare ancora per guadagnare di piu.',
            'La partita procede per round o finche il mazzo / condizione finale non chiude il punteggio complessivo.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il cuore del gioco e la distinzione tra guadagno potenziale e guadagno ormai salvato: spiegala benissimo al primo minuto.',
            'Se esistono carte che rubano o spostano bottino, chiarisci il timing preciso quando vengono rivelate.',
            'Meglio non appesantire la spiegazione: questo e un filler di flusso, non un gioco da ottimizzare con sei eccezioni prima del via.',
          ],
        },
      ],
    },
  },
  {
    bggId: 199561,
    bggUrl: 'https://boardgamegeek.com/boardgame/199561/sagrada',
    slug: 'sagrada',
    title: 'Sagrada',
    category: 'Dice drafting',
    minPlayers: 1,
    maxPlayers: 4,
    bestPlayers: '3-4',
    playTime: '30-45 min',
    complexity: '1.90',
    year: 2017,
    accentColor: '#6c79b4',
    coverUrl: '/assets/games/sagrada.jpg',
    tags: [Tag.Abstract, Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Ogni giocatore prende una finestra, una plancia supporto e i marker favore richiesti dal pattern scelto.',
            'Prepara sacchetto dadi, tracciato round, obiettivi comuni e tool cards selezionate.',
            'Spiega prima di tirare i dadi il vincolo del primo piazzamento e le regole base di adiacenza.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'In ordine di snake draft i giocatori scelgono un dado dal pool e lo piazzano legalmente sulla propria finestra.',
            'Durante la partita puoi spendere marker favore per usare le tool cards e piegare alcune regole in modo controllato.',
            'A fine round i dadi avanzano sul tracciato round; a fine partita si contano obiettivi pubblici, privati e malus per spazi vuoti.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Due dadi adiacenti ortogonalmente non possono condividere stesso colore o stesso valore.',
            'Il primo dado deve stare sul bordo o in un angolo, non ovunque.',
            'Le tool cards hanno timing e costi che cambiano dopo il primo uso: spiegale quando entrano, non tutte in anticipo.',
          ],
        },
      ],
    },
  },
  {
    bggId: 108745,
    bggUrl: 'https://boardgamegeek.com/boardgame/108745/seasons',
    slug: 'seasons',
    title: 'Seasons',
    category: 'Card drafting',
    minPlayers: 2,
    maxPlayers: 4,
    bestPlayers: '4',
    playTime: '60 min',
    complexity: '2.75',
    year: 2012,
    accentColor: '#4d7aa5',
    coverUrl: '/assets/games/seasons.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Fate il draft iniziale delle carte e costruite i mazzi personali secondo la procedura base del gioco.',
            'Preparate i dadi stagione, il calendario e le energie comuni.',
            'Chiarite prima del via il concetto di evocazione: le carte in mano non sono gia in gioco e lo spazio evocazione e limitato.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'A inizio stagione si tirano i dadi disponibili; in ordine i giocatori ne scelgono uno ottenendo energia, carte, cristalli o avanzamento del tempo.',
            'Nel proprio turno possono anche evocare carte, usare poteri e convertire risorse secondo gli effetti in gioco.',
            'Quando il calendario completa il ciclo, si contano cristalli e punti delle carte per determinare il vincitore.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il limite di evocazione e una regola che si dimentica subito: ricordala ogni volta che un giocatore vuole calare mezza mano.',
            'I dadi scelti fanno avanzare il tempo in modi diversi, quindi la scelta non e solo economica ma anche di ritmo.',
            'Alcune combo esplodono se entrano presto: spiegando il gioco, fai capire che il timing delle carte conta quanto il testo stampato.',
          ],
        },
      ],
    },
  },
  {
    bggId: 169786,
    bggUrl: 'https://boardgamegeek.com/boardgame/169786/scythe',
    slug: 'scythe',
    title: 'Scythe',
    category: 'Strategy euro',
    minPlayers: 1,
    maxPlayers: 5,
    bestPlayers: '4',
    playTime: '90-115 min',
    complexity: '3.46',
    year: 2016,
    accentColor: '#6d4f46',
    coverUrl: '/assets/games/scythe.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Assegna a ciascuno una fazione e una plancia giocatore, prepara mappa, risorse, encounter, obiettivi e automa se usato.',
            'Posizionate worker, leader, mecha iniziali e componenti secondo il setup di fazione/plancia.',
            'Chiarite subito come si legge una colonna azione: parte alta sempre disponibile, parte bassa opzionale se paghi il costo.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno scegli una colonna diversa da quella usata nel turno precedente e risolvi prima l azione alta e poi, se vuoi e puoi, quella bassa.',
            'Le azioni fanno muovere, produrre, commerciare, rafforzarsi, costruire mecha, edifici, reclute e upgrade.',
            'La partita finisce quando qualcuno piazza la sesta stella; poi si fa il conteggio finale con denaro, territori, risorse e bonus di popolarita.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Il combattimento esiste, ma costa risorse e tempo: non presentarlo come unica via per vincere.',
            'La popolarita moltiplica il valore del finale: ignorarla troppo spesso porta a punteggi deludenti anche con buon motore.',
            'Worker e leader non si comportano allo stesso modo in movimento e controllo: chiariscilo prima del primo scontro o trasporto.',
          ],
        },
      ],
    },
  },
  {
    bggId: 373106,
    bggUrl: 'https://boardgamegeek.com/boardgame/373106/sky-team',
    slug: 'sky-team',
    title: 'Sky Team',
    category: 'Cooperative strategy',
    minPlayers: 2,
    maxPlayers: 2,
    bestPlayers: '2',
    playTime: '20 min',
    complexity: '2.05',
    year: 2023,
    accentColor: '#4a6f8f',
    coverUrl: '/assets/games/sky-team.jpg',
    tags: [Tag.Cooperative, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Per la prima partita usa Montreal YUL sul lato base con la traccia altitudine verde/gialla e senza moduli avanzati.',
            'Date a ciascuno i propri dadi e chiarite quali aree della cabina gestisce ciascun giocatore.',
            'Mettete i reroll sugli spazi indicati della traccia altitudine, riempite la traccia di avvicinamento con gli aerei stampati e lasciate nella scatola tutto il contenuto del vano chiuso.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni round tirate i dadi, poi li piazzate a turno negli strumenti della cabina per regolare inclinazione, velocita, radio, flap, freni e altro.',
            'Dopo il piazzamento completo si risolvono gli effetti e si controlla se l aereo resta stabile e se avanza correttamente verso la pista.',
            'Vincete solo se atterrate rispettando le condizioni dello scenario; altrimenti l aereo perde il controllo o fallisce l avvicinamento.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Un dado forte nel posto sbagliato puo sistemare una traccia e romperne un altra: spiegando il gioco, sottolinea sempre il bilanciamento.',
            'La comunicazione limitata non significa mutismo totale in assoluto: va chiarito esattamente cosa si puo dire e quando.',
            'Molti moduli scenario aggiungono eccezioni vere: introducili solo dopo che il core turn e stato capito.',
          ],
        },
      ],
    },
  },
  {
    bggId: 27627,
    bggUrl: 'https://boardgamegeek.com/boardgame/27627/talisman-revised-4th-edition',
    slug: 'talisman',
    title: 'Talisman',
    category: 'Adventure',
    minPlayers: 2,
    maxPlayers: 6,
    bestPlayers: '4-5',
    playTime: '90-120 min',
    complexity: '2.43',
    year: 2007,
    accentColor: '#6a4a7d',
    coverUrl: '/assets/games/talisman.jpg',
    tags: [Tag.American, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara tabellone, carte avventura/incantesimo, segnalini e personaggi con le rispettive schede.',
            'Ogni giocatore prende un personaggio, segnalini vita/forza/astuzia e la dotazione iniziale indicata.',
            'Spiega le tre regioni del tabellone e come si passa da esterna a media a interna, cosi il tavolo capisce subito il percorso generale.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Nel turno lanci il dado, muovi in una delle direzioni consentite e risolvi lo spazio di arrivo o le carte che li si pescano.',
            'Combatti nemici, prendi oggetti, guadagni statistiche e cerchi modi per superare le soglie verso la regione interna.',
            'La partita si chiude quando qualcuno raggiunge il centro e risolve correttamente la fase finale prevista dalla versione giocata.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Non tutti gli incontri si risolvono nello stesso ordine: sullo spazio conta sempre la procedura stampata o descritta dal gioco.',
            'Forza e Astuzia non sono intercambiabili: spiega bene quale test usa quale valore.',
            'Talisman e chiavi di accesso alle regioni non sono dettagli di colore: senza quelli il tavolo gira a vuoto piu del necessario.',
          ],
        },
      ],
    },
  },
  {
    bggId: 167791,
    bggUrl: 'https://boardgamegeek.com/boardgame/167791/terraforming-mars',
    slug: 'terraforming-mars',
    title: 'Terraforming Mars',
    category: 'Strategy euro',
    minPlayers: 1,
    maxPlayers: 5,
    bestPlayers: '3',
    playTime: '120 min',
    complexity: '3.26',
    year: 2016,
    accentColor: '#a05d37',
    coverUrl: '/assets/games/terraforming-mars.jpg',
    tags: [Tag.Euro, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Prepara tabellone Marte, mazzi progetto, corporation, risorse e tracciati temperatura, ossigeno e oceani.',
            'Ogni giocatore sceglie corporation e mano iniziale secondo la modalita base o draft usata.',
            'Spiegate subito la differenza tra valore produzione e risorsa accumulata su ogni tracciato personale.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Ogni generazione inizia con ricerca carte, poi si fanno a turno una o due azioni finche tutti passano.',
            'Le azioni principali sono giocare carte, usare azioni stampate, standard projects e piazzare tessere quando gli effetti lo permettono.',
            'A fine generazione si producono risorse; la partita finisce quando temperatura, ossigeno e oceani sono completati, poi si contano tutti i punti.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Pagare 3 per tenere una carta in mano e una leva vera del gioco: non fate scegliere carte gratis se state giocando regole standard.',
            'Molte carte hanno prerequisiti globali o di tag: prima si controlla il requisito, poi si paga, poi si applica l effetto.',
            'La TR da punti e reddito insieme: se la sottovaluti durante la spiegazione, il tavolo legge male mezza economia.',
          ],
        },
      ],
    },
  },
  {
    bggId: 213460,
    bggUrl: 'https://boardgamegeek.com/boardgame/213460/unlock-escape-adventures',
    slug: 'unlock',
    title: 'Unlock!',
    category: 'Cooperative puzzle',
    minPlayers: 1,
    maxPlayers: 6,
    bestPlayers: '2-4',
    playTime: '60 min',
    complexity: '1.61',
    year: 2017,
    accentColor: '#3e657a',
    coverUrl: '/assets/games/unlock.jpg',
    tags: [Tag.Cooperative, Tag.Play26],
    recap: {
      sections: [
        {
          title: 'Setup',
          items: [
            'Per la prima partita fate prima il tutorial da 10 carte, poi passate a uno scenario vero.',
            'Mettete la carta iniziale e tenete il resto del mazzo ordinato per numero.',
            'Apri nell app il tutorial o lo scenario giusto e chiarisci subito differenza tra carte oggetto, macchine, codici e combinazioni numeriche.',
          ],
        },
        {
          title: 'Turni',
          items: [
            'Esplorate le carte disponibili, combinate numeri o oggetti quando ha senso e inserite nell app codici o risultati di puzzle.',
            'L app scandisce il tempo e gestisce penalita, indizi e alcuni enigmi speciali.',
            'Lo scenario finisce quando arrivate alla soluzione finale oppure quando il tempo e gli errori vi fermano.',
          ],
        },
        {
          title: 'Occhio a',
          items: [
            'Due carte combinabili non significano sempre risultato utile: controllate prima se la coppia ha davvero senso narrativo o meccanico.',
            'Tenete le carte sul tavolo in ordine e separate tra risolte, ancora utili e scarti, altrimenti si spreca tempo a rileggere tutto.',
            'Le penalita dell app pesano: se il tavolo inizia a sparare codici a caso, ricordate subito che il gioco non lo premia.',
          ],
        },
      ],
    },
  },
];

export function getBoardGameBySlug(slug: string | null | undefined): BoardGame | undefined {
  return BOARD_GAMES.find((game) => game.slug === slug);
}
