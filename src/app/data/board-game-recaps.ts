import { BoardGame } from '../models/board-game';

type BoardGameRecap = Pick<BoardGame, 'summary' | 'quickNotes' | 'recapSections'>;

export const BOARD_GAME_RECAPS: Record<string, BoardGameRecap> = {
  '7-wonders': {
    summary: 'Draft simultaneo in 3 Ere: scegli una carta, giochi la carta, passi la mano. Vinci facendo punti su motore, scienza, guerra e gilde.',
    quickNotes: [
      'Ogni Era: scegli 1 carta, giocala o scartala per 3 monete o usala per costruire una fase della meraviglia.',
      'Le catene di simboli fanno risparmiare tantissimo: guardale prima di spendere monete.',
      'I conflitti militari si risolvono solo a fine Era contro i due vicini.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Separa le carte per Era e usa solo quelle compatibili col numero di giocatori; in Era III aggiungi le gilde in quantita corretta.',
          'Dai a ciascuno una board Meraviglia, 3 monete e 7 carte dell Era I.',
          'Tieni scorepad e segnalini militari a portata; le mani si passano sinistra-destra-sinistra nelle 3 Ere.',
        ],
      },
      {
        title: 'Come gira',
        items: [
          'Tutti scelgono una carta in simultanea, poi rivelano e risolvono.',
          'Con la carta puoi: costruire il edificio, costruire una fase della meraviglia, oppure scartare per 3 monete.',
          'Quando hai 2 carte in mano ne giochi 1 e l altra si scarta; poi risolvi il conflitto di fine Era.',
        ],
      },
      {
        title: 'Occhio a',
        items: [
          'Le risorse prodotte non si consumano definitivamente: valgono per pagare il costo di una singola carta, non per piu carte.',
          'Le risorse gialle grigie marroni con slash sono alternative, non cumulative.',
          'La scienza esplode solo se bilanci simboli uguali e set completi: non improvvisarla tardi.',
        ],
      },
    ],
  },
  'alien-fate-of-the-nostromo': {
    summary: 'Cooperativo snello: la ciurma prepara il piano, gira sulla Nostromo, raccoglie oggetti e prova a completare obiettivi mentre l Alien peggiora la situazione.',
    quickNotes: [
      'Tenete sempre d occhio morale / rischio e posizione dell Alien, non solo il vostro task locale.',
      'Gli oggetti giusti cambiano il ritmo della partita: non sprecateli appena escono.',
      'Quando si entra nel finale serve coordinazione, non corse individuali.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara la plancia Nostromo, il tracciato Alien e i mazzi richiesti dallo scenario scelto.',
          'Ogni giocatore prende un membro dell equipaggio con pedina e abilita.',
          'Posiziona Alien, segnalini missione e componenti scenario come indicato dallo scenario iniziale.',
        ],
      },
      {
        title: 'Come gira',
        items: [
          'Nel tuo turno muovi, fai lazione principale disponibile e poi risolvi la pressione del gioco / Alien.',
          'Il gruppo deve raccogliere risorse, completare gli obiettivi in ordine e aprirsi la strada al finale.',
          'Le abilita dei personaggi sono pensate per coprire ruoli diversi: trattatele come puzzle cooperativo.',
        ],
      },
      {
        title: 'Occhio a',
        items: [
          'Se il tavolo si disperde troppo, la partita si incattivisce rapidamente.',
          'L ordine in cui chiudete i sotto-obiettivi conta piu della micro-ottimizzazione individuale.',
          'Ricordate sempre gli effetti persistenti delle carte evento / panico prima di passare il turno.',
        ],
      },
    ],
  },
  'bomb-busters': {
    summary: 'Cooperativo di deduzione: i fili sono informazioni parziali, e il tavolo vince solo se taglia con ordine e senza regalare errori.',
    quickNotes: [
      'L obiettivo non e indovinare a caso: e restringere lo spazio di possibilita per il team.',
      'Ogni informazione detta o implicita va protetta, non sprecata.',
      'Quando il gruppo accelera troppo, di solito perde.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara la missione scelta con i fili e i componenti richiesti dal livello.',
          'Distribuisci i supporti personali e fai in modo che ciascuno veda solo le informazioni permesse.',
          'Spiegate prima della partita come verbalizzare deduzioni e conferme senza oltrepassare il limite del gioco.',
        ],
      },
      {
        title: 'Come gira',
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
  'camel-up': {
    summary: 'Corse di cammelli e scommesse: il cuore non e muovere il proprio pezzo, ma leggere il timing della gamba e della corsa completa.',
    quickNotes: [
      'I cammelli impilati si trascinano: questo cambia tutto nei sorpassi.',
      'Scommettere presto rende di piu ma puo essere un suicidio.',
      'Non dimenticare le tessere deserto: spostano le corse piu di quanto sembri.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Mettete plancia, piramide, dadi e cammelli sulla pista come da setup iniziale.',
          'Date monete e tessera deserto ai giocatori, poi preparate leg-bet e winner/loser bet.',
          'Tirate i dadi iniziali per il posizionamento di partenza se usate la procedura standard.',
        ],
      },
      {
        title: 'Come gira',
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
  carnuta: {
    summary: 'Druidi in gara per la pozione migliore: raccogli ingredienti, orienta bene le rune sole/luna e costruisci il tuo scoring senza perdere il ritmo.',
    quickNotes: [
      'Le rune sono il vero motore: gli ingredienti da soli non bastano.',
      'Meglio una linea coerente che inseguire ogni bonus.',
      'Occhio a quando chiudi la tua undicesima carta: puo accorciare i tempi.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara ingredienti, rune doppia faccia, token e plance personali.',
          'Dai a ogni giocatore il materiale iniziale previsto e rendi visibili le fonti comuni di ingredienti/bonus.',
          'Ricordate fin dall inizio come ruotano o si attivano le rune sole/luna: e la regola che si dimentica piu facilmente.',
        ],
      },
      {
        title: 'Come gira',
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
  'castle-combo': {
    summary: 'Mini tableau 3x3: compri poche carte, ma ogni slot e ogni adiacenza pesano tantissimo.',
    quickNotes: [
      'I soldi sono stretti: comprare bene conta piu che comprare tanto.',
      'Gioca pensando alla griglia completa, non alla singola carta forte.',
      'Le icone di scoring vanno lette in coppia con il posizionamento.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara il mercato comune e le risorse iniziali secondo il numero di giocatori.',
          'Ogni giocatore costruira un tableau 3x3: lasciate lo spazio ben leggibile fin dall inizio.',
          'Se usate file o colonne con carte coperte/scoperte, chiarite subito da dove si puo comprare.',
        ],
      },
      {
        title: 'Come gira',
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
  citadels: {
    summary: 'Promemoria da tavolo, non tutorial: scegli un personaggio, raccogli risorse, usa una sola abilita per turno e costruisci la citta migliore leggendo gli altri.',
    quickNotes: [
      'Regola d oro: il testo completo del regolamento prevale sul riassunto stampato sulle carte.',
      'Oro in riserva e numero di carte in mano sono informazione aperta.',
      'La partita base chiude a 7 quartieri; con 2-3 giocatori si chiude a 8 e ogni giocatore usa 2 personaggi.',
    ],
    recapSections: [
      {
        title: 'Setup pulito',
        items: [
          'Per una partita standard usa 8 personaggi, uno per rango 1-8. Se volete personalizzare, scegliete anche 14 quartieri unici da mischiare ai 54 base.',
          'Mescola il mazzo quartieri, dai 4 carte a testa, crea la banca comune e dai 2 oro a ciascuno.',
          'Metti in mezzo i reminder dei personaggi e assegna la corona al giocatore iniziale.',
          'Partita a 3: usa i ranghi 1-9, ogni giocatore sceglie 2 personaggi per round, e la partita finisce quando qualcuno arriva a 8 quartieri.',
          'Partita a 2: usa 1-8 senza Imperatore; ogni giocatore prende due personaggi a round con la procedura keep-one-discard-one descritta dal regolamento.',
        ],
      },
      {
        title: 'Selezione personaggi senza caos',
        items: [
          'Il giocatore con la corona mescola i personaggi e scarta il numero corretto di carte previsto dal count giocatori prima della scelta.',
          'Poi si drafta il personaggio in ordine, sempre coperto: nessuno rivela nulla finche il rango non viene chiamato.',
          'Con 7 giocatori, l ultimo vede anche la carta scartata coperta all inizio e ne tiene una delle due; con 8 giocatori la stessa regola vale per l ottavo.',
        ],
      },
      {
        title: 'Turno vero e proprio',
        items: [
          'Quando il tuo rango viene chiamato, se non sei stato ucciso riveli il personaggio e fai il turno.',
          'Prima risolvi eventuali effetti che ti colpiscono appena vieni rivelato, per esempio furto.',
          'Poi scegli una sola raccolta risorse: 2 oro oppure peschi 2 quartieri e ne tieni 1.',
          'Durante il turno puoi usare la tua abilita una sola volta nel momento consentito e costruire normalmente 1 quartiere pagando il costo.',
          'Le abilita che danno oro/carte per un colore possono essere usate prima o dopo la costruzione, a seconda di cosa ti conviene.',
        ],
      },
      {
        title: 'Occhio a',
        items: [
          'Le abilita di personaggio e dei quartieri sono opzionali salvo testo must / cannot.',
          'Normalmente non puoi avere due quartieri con lo stesso nome in citta, a meno che un effetto lo consenta esplicitamente.',
          'Il Magistrato confisca solo il primo quartiere pagato dal bersaglio e gli restituisce l oro speso; quel quartiere conta comunque verso il limite build del bersaglio.',
          'Le citta complete non possono subire certi effetti distruttivi; inoltre il tie-break finale va al giocatore che nell ultimo round ha rivelato il rango piu alto.',
          'Se il gruppo si dimentica spesso timing e personaggi speciali, tenete aperta la pagina personaggi invece di fidarvi del testo mini sulle carte.',
        ],
      },
    ],
  },
  coup: {
    summary: 'Bluff secco: 2 influenze, poche monete, azioni semplici, e tutto il gioco sta nel capire quando dichiarare, sfidare o lasciare passare.',
    quickNotes: [
      'Se sfidi male perdi un influenza; se sfidi bene la perde l altro.',
      'Il blocco conta quanto lazione: non dimenticarlo.',
      'A 7 monete devi fare colpo di stato nel tuo turno.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Mescola il mazzo ruoli, dai 2 carte coperte a ciascuno e 2 monete iniziali.',
          'Le carte in mano sono le tue influenze vive; quelle perse restano rivelate davanti a te.',
          'Lascia il mazzo e i soldi comuni raggiungibili da tutti.',
        ],
      },
      {
        title: 'Come gira',
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
  'dice-forge': {
    summary: 'Engine building a dadi: tiri ogni round, migliori facce, compri carte e converti il motore in punti prima degli altri.',
    quickNotes: [
      'Aggiornare i dadi presto e bene vale piu di una carta brillante al momento sbagliato.',
      'Le carte con effetto immediato e quelle persistenti vanno bilanciate.',
      'Ricordate il tiro passivo anche fuori dal proprio turno.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara il tempio con i set di carte scelti, i dadi base e le facce acquistabili.',
          'Ogni giocatore prende plancia, dado coppia e risorse iniziali standard.',
          'Disponi bene le facce dei dadi: sono il mercato vero del gioco.',
        ],
      },
      {
        title: 'Come gira',
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
  'disco-draw': {
    summary: 'Party game di disegno rapido: conta piu l energia del tavolo che la precisione tecnica.',
    quickNotes: [
      'Serve ritmo: se il tavolo rallenta troppo, il gioco perde.',
      'Spiega prima bene cosa e consentito comunicare oltre al disegno.',
      'Meglio linee chiare e leggibili che tentativi complessi.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara supporti di disegno, timer e mazzo/obiettivi della partita.',
          'Mettete il materiale in modo che il passaggio o la rotazione sia immediato.',
          'Chiarite prima del primo round cosa vale come indizio illegale.',
        ],
      },
      {
        title: 'Come gira',
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
  'drama-lama': {
    summary: 'Party game cattivo e rapido: il tavolo ride se tutti giocano veloci e accettano il caos.',
    quickNotes: [
      'Le partite rendono se nessuno overanalizza.',
      'Le carte che puniscono gli altri valgono di piu col timing giusto.',
      'Tenete il focus sul flusso del round, non sul singolo micro-effetto.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara il mazzo e il materiale comune previsto dalla variante base.',
          'Dai a tutti la mano / dotazione iniziale standard e chiarisci la condizione di fine round.',
          'Se il gioco prevede una carta o un segnalino leader iniziale, assegnalo subito.',
        ],
      },
      {
        title: 'Come gira',
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
          'Se il tavolo non ricorda un dettaglio, meglio controllare subito che inventare.',
        ],
      },
    ],
  },
  imagine: {
    summary: 'Carte trasparenti e associazione visiva: il clue giver costruisce un immagine leggibile, gli altri devono leggerla senza aiuti verbali.',
    quickNotes: [
      'Non spiegare a parole: il linguaggio del gioco e la composizione visiva.',
      'Pochi elementi ben scelti valgono piu di collage enormi.',
      'Accordo al tavolo su cosa conta come gesto vietato prima di iniziare.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Disponi le carte trasparenti e il sistema di punti secondo la modalita scelta.',
          'Assicurati che tutti vedano bene il centro del tavolo: serve leggibilita.',
          'Chiarite prima se la variante permette uso di orientamento, sovrapposizione, movimento o mime minima.',
        ],
      },
      {
        title: 'Come gira',
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
  'le-cronache-di-avel': {
    summary: 'Cooperativo family adventure: esplorate, equipaggiate i personaggi e tenete pulita la mappa abbastanza a lungo da chiudere bene il finale.',
    quickNotes: [
      'Dividersi troppo presto di solito punisce.',
      'L equipaggiamento buono va concentrato dove serve davvero.',
      'La difesa del castello conta tanto quanto l esplorazione.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara plancia / mappa, personaggi, mostri, dadi e mazzi scenario secondo il capitolo scelto.',
          'Ogni giocatore crea il proprio eroe e prende la dotazione iniziale.',
          'Posiziona minacce iniziali e componenti di obiettivo prima di pescare eventi.',
        ],
      },
      {
        title: 'Come gira',
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
  'love-letter': {
    summary: 'Filler di deduzione: una carta in mano, una pescata, una giocata. Il round finisce quando resta un solo giocatore o il mazzo si esaurisce.',
    quickNotes: [
      'La Principessa scartata ti elimina subito.',
      'La Contessa va giocata se hai anche Re o Principe in mano.',
      'Ricorda chi ha gia mostrato o scartato cosa: la memoria e il vero vantaggio.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Mescola il mazzo, metti 1 carta coperta da parte e distribuisci 1 carta a ciascuno.',
          'Prepara i segnalini favore; il numero per vincere dipende dal count giocatori o dalla variante scelta.',
          'Scegli il primo giocatore e parti subito: il gioco si spiega quasi giocando.',
        ],
      },
      {
        title: 'Come gira',
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
  'per-la-corona': {
    summary: 'Deckbuilding con un solo mazzo condiviso: inserisci personaggi nella tua bustina / famiglia, poi il mazzo comune li rimescola e li fa esplodere in ordine imprevedibile.',
    quickNotes: [
      'Non costruire il mazzo pensando di pescare tu le tue carte subito: il deck e condiviso.',
      'I rubini contano piu del semplice vantaggio tattico del momento.',
      'I round sono pochi: serve accelerare presto verso un piano coerente.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara le famiglie / colori, il mazzo eventi comune e i componenti economici del gioco.',
          'Ogni giocatore riceve la propria identita e la dotazione iniziale prevista dal regolamento.',
          'Assicuratevi che sia chiaro come le carte personali entrano nel mazzo condiviso.',
        ],
      },
      {
        title: 'Come gira',
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
  root: {
    summary: 'Asimmetrico puro: ogni fazione ha il proprio minigioco. Il promemoria giusto e ricordarsi il motore della propria fazione e chi va fermato al tavolo.',
    quickNotes: [
      'Se nessuno ricorda bene almeno la propria fazione, meglio tenere i player boards molto visibili.',
      'Il leader va contenuto presto, non quando ha gia sfondato.',
      'Le regole comuni bastano poco: le eccezioni di fazione sono il gioco.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Seguite i setup stampati sulle plance fazione: sono molto piu affidabili della memoria.',
          'Preparate mappa, clearings, item, mazzo comune e carte Dominance se le usate.',
          'Con 2 giocatori fate attenzione a fazioni e assetto consigliati: il gioco rende meglio con Reach adeguato.',
        ],
      },
      {
        title: 'Come gira',
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
  'res-arcana': {
    summary: 'Otto carte, poche azioni, motore strettissimo. Non e un builder largo: e un esercizio di conversione elegante e cattivo.',
    quickNotes: [
      'Scartare un artefatto per oro / essenze e una leva vera, non un ripiego.',
      'Chi passa per primo prende vantaggi importanti.',
      'Molte partite si decidono su tempo e sequencing, non sulla raw power delle carte.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Ogni giocatore riceve mago, oggetto magico iniziale e il proprio deck da 8 artefatti.',
          'Rendi visibili monumenti e luoghi di potere previsti dal count giocatori.',
          'Distribuisci essenze iniziali e scegli il primo giocatore.',
        ],
      },
      {
        title: 'Come gira',
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
  seti: {
    summary: 'Euro spaziale a densita alta: alterni azioni forti, sviluppo tecnologico e timing delle scoperte. La pagina serve solo a rimettere in testa il flusso.',
    quickNotes: [
      'Prima del primo turno ricontrolla sempre setup delle specie aliene scelte: cambiano molto la partita.',
      'Il gioco e pieno di icone: se il tavolo e arrugginito, tieni gli aiuti aperti.',
      'Le azioni belle costano tempo e posizione: non pensare solo in risorse.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara tabellone Sistema Solare, tech, carte e i componenti generali del gioco.',
          'Scegli le specie / moduli di partita previsti e rendi visibili gli obiettivi o scoring comuni.',
          'Ogni giocatore prende plancia, risorse iniziali, carte iniziali e asset di partenza.',
        ],
      },
      {
        title: 'Come gira',
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
  'the-druids-of-edora': {
    summary: 'Euro a dadi in foresta: piazzamento, raccolta, pozioni e struttura a medio peso con tanti piccoli incastri.',
    quickNotes: [
      'I dadi sono worker ma anche tempo e priorita.',
      'Le pozioni vanno pianificate, non improvvisate dal materiale avanzato.',
      'Le strutture fatte al momento giusto cambiano il ritmo della partita.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara foresta / plancia principale, dadi, risorse, obiettivi e componenti dei giocatori.',
          'Ogni giocatore prende la propria plancia e la dotazione iniziale.',
          'Mettete bene in chiaro costi, bonus e slot azione della mappa: e li che si inceppa il primo turno.',
        ],
      },
      {
        title: 'Come gira',
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
  'the-resistance-avalon': {
    summary: 'Social deduction a missioni: il promemoria vero e ricordarsi apertura, numero di fallimenti richiesti e gestione dei team.',
    quickNotes: [
      'A 7+ giocatori la quarta missione richiede 2 fallimenti per fallire.',
      'Il Bene non deve solo leggere il male: deve anche proteggere informazioni utili per Merlin.',
      'Non fossilizzarti sui singoli vote: conta il pattern di proposta + approvazione.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Scegli i ruoli in base al count giocatori e distribuiscili coperti.',
          'Fai la sequenza iniziale di occhi chiusi / aperti per Evil e Merlin secondo i ruoli in partita.',
          'Prepara tracker missioni, marker leader e carte team vote / mission vote.',
        ],
      },
      {
        title: 'Come gira',
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
  'the-wandering-towers': {
    summary: 'Corsa family con maghi e torri mobili: il cuore e usare bene movimento, sovrapposizioni e pozioni per arrivare al castello al momento giusto.',
    quickNotes: [
      'Le torri non sono solo ostacoli: possono essere strumento di posizionamento.',
      'Le pozioni vanno conservate per swing importanti, non per micro-vantaggi.',
      'Guarda sempre il tabellone a 2 mosse, non solo la carta del turno.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara il percorso, le torri, i maghi di tutti i colori e il materiale pozioni/carte.',
          'Ogni giocatore riceve la mano iniziale e mette i propri maghi nelle posizioni di partenza previste.',
          'Assicuratevi che tutti ricordino come si comportano i maghi quando una torre li copre o li trasporta.',
        ],
      },
      {
        title: 'Come gira',
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
  'windmill-valley': {
    summary: 'Euro su tulipani e ingranaggi: ruoti la tua windmill board per generare coppie di azioni e convertire il timing in efficienza.',
    quickNotes: [
      'La rotazione delle ruote e il gioco: pensa in combinazioni, non in singola azione.',
      'Bulbi, denaro e sviluppo ruotano insieme: se una gamba manca, il turno si sgonfia.',
      'Pianifica i turni finali per non lasciare punti sparsi ovunque.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara plancia principale, mercato / contratti, tessere comuni e moduli base.',
          'Ogni giocatore prende la propria plancia mulino, risorse iniziali e materiale personale.',
          'Verificate prima del via come funziona la rotazione delle ruote e da quale coppia di azioni si sceglie.',
        ],
      },
      {
        title: 'Come gira',
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
};
