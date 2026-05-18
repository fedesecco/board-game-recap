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
          'Fai i 3 mazzi delle 3 ere. Carte viola: numero giocatori + 2',
          'Dai a ciascuno una board Meraviglia, 3 monete e 7 carte dell Era 1',
          'Segnalini militari e soldi al centro, a portata di tutti',
        ],
      },
      {
        title: 'Come gira',
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
          "Non si possono costruire 2 edifici identici",
          "Non è possibile usare le Monete ricevute dagli altri giocatori durante lo stesso turno",
          "Non è possibile acquistare risorse da un Edificio che il proprio vicino ha costruito in quello stesso turno"
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
  '7-wonders-duel': {
    summary: 'Versione a due di 7 Wonders: draft aperto a piramide, tre vie di vittoria e pressione continua sul timing.',
    quickNotes: [
      'Non guardare solo i punti: militare e scienza possono chiudere la partita prima.',
      'Aprire una carta coperta all avversario puo essere forte o disastroso.',
      'Le meraviglie non sono solo punti: spesso servono per ritmo, extra turni e denial.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara le tre strutture di carte per Era I, II e III secondo lo schema del regolamento, con alcune carte coperte.',
          'Date a ciascuno 4 meraviglie tramite draft e preparate monete, segnalino conflitto e token progresso.',
          'Ricordate prima di partire le tre condizioni di vittoria: scientifica, militare o punti a fine Era III.',
        ],
      },
      {
        title: 'Come gira',
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
  azul: {
    summary: 'Draft di tessere molto pulito: prendi da una fabbrica o dal centro, riempi le linee e poi trasli punti sul muro.',
    quickNotes: [
      'Spiegare bene quando le tessere in eccesso cadono sul pavimento evita meta degli errori.',
      'Il centro tavolo va svuotato con criterio: prendere il primo giocatore puo costare parecchio.',
      'La plancia personale va letta con calma il primo round, poi il gioco scorre da solo.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara le fabbriche in numero corretto, riempi il sacchetto e dai a ciascuno una plancia con il lato scelto.',
          'Metti il segnalino primo giocatore al centro insieme alle tessere che andranno nel mercato comune.',
          'Prima del primo turno chiarisci la differenza tra linee preparazione, muro e riga pavimento.',
        ],
      },
      {
        title: 'Come gira',
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
  bang: {
    summary: 'Ruoli nascosti e gestione della distanza: lo scheletro e semplice, il tavolo si incasina se non chiarisci bene turni e gittata.',
    quickNotes: [
      'Il punto non e solo sparare: e capire chi puo colpire chi e con quali carte.',
      'Sceriffo visibile, ruoli coperti e obiettivi diversi vanno spiegati con ordine prima di partire.',
      'Molti errori vengono dalla distanza e dai limiti sul numero di BANG! giocabili.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Assegna i ruoli, rivela solo lo Sceriffo e distribuisci i personaggi con i rispettivi punti vita.',
          'Mescola il mazzo, dai le carte iniziali e prepara gli scarti raggiungibili da tutti.',
          'Spiega subito gli obiettivi dei ruoli e come si calcola la distanza attorno al tavolo.',
        ],
      },
      {
        title: 'Come gira',
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
  carcassonne: {
    summary: 'Piazzi tessere, metti meeple e chiudi elementi per segnare: il gioco si spiega bene se distingui subito piazzamento e scoring.',
    quickNotes: [
      'La prima cosa da chiarire e quando il meeple si puo piazzare e quando invece no.',
      'Strade, citta, monasteri e campi non si raccontano tutti con lo stesso livello: i campi possono stare per ultimi.',
      'Il tavolo sbaglia spesso il conteggio finale dei campi se non e stato chiarito prima.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Metti la tessera iniziale al centro, mescola tutte le altre e dai a ciascuno i meeple del proprio colore.',
          'Lascia il punteggio visibile e chiarisci se state giocando base pura o con espansioni.',
          'Se il gruppo e arrugginito, spiega prima strade, citta e monasteri; i campi possono arrivare subito dopo.',
        ],
      },
      {
        title: 'Come gira',
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
  concept: {
    summary: 'Indovinelli per icone: il clue giver non parla quasi mai davvero, costruisce un percorso di concetti sul tabellone.',
    quickNotes: [
      'Funziona solo se il tavolo capisce bene cosa si puo indicare e cosa no.',
      'Piu importante della regola punti e il linguaggio condiviso delle icone.',
      'Meglio un indizio pulito con due livelli che una mappa piena di marker casuali.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Apri il tabellone delle icone, prepara cubetti e token e scegli se giocare con punti o in modalita libera.',
          'Dividetevi in coppie o squadre secondo il numero di giocatori.',
          'Prima di partire chiarite che si comunica solo tramite icone e marcatori, non con parole o gesti extra.',
        ],
      },
      {
        title: 'Come gira',
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
  cryptid: {
    summary: 'Deduzione pura: ogni giocatore ha un indizio parziale e il tavolo stringe il cerchio fino a individuare una sola casella valida.',
    quickNotes: [
      'Spiega bene l idea di informazione pubblica contro informazione privata prima della prima domanda.',
      'Il cuore del gioco non e il bluff: e non regalare piu informazione del necessario.',
      'Le domande sbagliate accelerano la vittoria degli altri, non solo la tua sconfitta.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Costruite la mappa corretta, distribuite a ciascuno una carta indizio e preparate cubi e dischi del proprio colore.',
          'Assicuratevi che tutti sappiano orientamento della mappa e significato di terreni e strutture.',
          'Ricordate che ogni indizio e vero insieme agli altri, e che esiste una sola casella finale compatibile.',
        ],
      },
      {
        title: 'Come gira',
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
  dixit: {
    summary: 'Associazione di immagini: il narratore deve dare un indizio ne troppo ovvio ne troppo oscuro.',
    quickNotes: [
      'La frase chiave da ricordare e questa: se tutti indovinano o nessuno indovina, il narratore ha sbagliato target.',
      'Il gioco rende meglio se l indizio resta evocativo e non descrittivo.',
      'La gestione dei punteggi e semplice, ma va raccontata prima del primo voto.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Date a ciascuno una mano di carte, coniglio segnapunti e gettoni voto nel proprio colore.',
          'Preparate il tracciato punteggio e chiarite quanti gettoni usa ogni giocatore in base al tavolo.',
          'Spiega subito la regola centrale dell indizio: deve essere interpretabile, non evidente.',
        ],
      },
      {
        title: 'Come gira',
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
  'dune-imperium': {
    summary: 'Deckbuilding e worker placement intrecciati: giochi una carta per mandare un agente, poi riveli il resto per comprare e combattere.',
    quickNotes: [
      'Spiega separatamente fase Agenti e Reveal: e li che il gioco smette di sembrare un worker placement standard.',
      'La lotta non e obbligatoria ogni round, ma ignorarla troppo spesso ti lascia indietro.',
      'Persuasione, spezia e acqua vanno lette sempre insieme al posizionamento disponibile.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara tabellone, mercato imperium, leader, risorse e mazzi conflitto/intrigo secondo il setup base.',
          'Ogni giocatore sceglie un leader, prende deck iniziale, 2 agenti e dotazione di partenza.',
          'Prima del primo turno chiarisci dove si piazzano agenti, come si legge il testo in alto delle carte e come funziona la lotta di round.',
        ],
      },
      {
        title: 'Come gira',
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
  'harry-potter-hogwarts-battle': {
    summary: 'Co-op deckbuilding a campagna: si parte semplice e ogni anno aggiunge regole, nemici e carte nuove.',
    quickNotes: [
      'Spiega sempre il gioco base del deckbuilding prima dei moduli dell anno corrente.',
      'La perdita di controllo sui luoghi e il vero timer della partita.',
      'Se il tavolo e alle prime armi, meglio enfatizzare acquisti puliti e focus sugli effetti che rimuovono danni o controllo.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Scegli l anno/scatola da giocare, prepara eroi, mazzo iniziale, mercato Hogwarts, luoghi e mazzo oscurita corrispondenti.',
          'Ogni giocatore prende il proprio eroe con segnalini salute e deck iniziale.',
          'Spiegate prima quali moduli aggiuntivi introduce quell anno specifico, altrimenti il tavolo si perde tra regole nuove e base.',
        ],
      },
      {
        title: 'Come gira',
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
  'heat-pedal-to-the-metal': {
    summary: 'Corse gestite a marce e heat: vuoi andare forte, ma ogni curva ti ricorda che il motore non perdona.',
    quickNotes: [
      'Spiega prima bene marce, limite di carte pescate e heat; tutto il resto si appoggia li.',
      'Le curve non chiedono velocita media, ma numero di spazi prima di uscirne.',
      'Il gioco sembra arcade ma il timing del cooldown conta tantissimo.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Scegli il circuito, prepara le auto, dai a ciascuno il mazzo base e i componenti della plancia pilota.',
          'Posiziona le macchine in griglia e chiarisci subito il significato delle marce e della pila heat.',
          'Se usate upgrade o automa, spiegateli dopo il core: il flusso base va capito pulito.',
        ],
      },
      {
        title: 'Come gira',
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
  'hues-and-cues': {
    summary: 'Un indizio di colore con una o due parole e tutti puntano una sfumatura su una griglia enorme.',
    quickNotes: [
      'Il gioco vive o muore sulla chiarezza di cosa conta come indizio legale.',
      'Meglio spendere 20 secondi prima a chiarire il formato degli indizi che discutere per tutta la partita.',
      'Il resto e velocissimo: indizio, piazzamento, punteggio.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Apri la plancia dei colori, date i segnalini ai giocatori e scegliete come ruota il clue giver.',
          'Assicuratevi che tutti vedano bene la griglia; da mobile o luce scarsa il gioco peggiora molto.',
          'Chiarite prima cosa e permesso come parola: di solito un indizio da una parola e poi, se previsto, un secondo piu preciso.',
        ],
      },
      {
        title: 'Come gira',
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
  'insalata-di-punti': {
    summary: 'Draft super rapido di verdure e carte punteggio: costruisci conversioni semplici ma cerca il momento giusto per cambiare lato alle carte.',
    quickNotes: [
      'La regola chiave e che ogni carta puo essere ortaggio o scoring, non entrambe.',
      'Si spiega in due minuti se parti dal draft e solo dopo parli dei punti.',
      'Le mani si leggono meglio se i giocatori tengono separati ortaggi e carte obiettivo.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Forma il mercato con i mazzi/tagli corretti e mostra chiaramente le due carte ortaggio visibili per pila se usate la disposizione standard.',
          'Spiega che ogni carta ha due lati: uno punteggio e uno ortaggio.',
          'Lasciate spazio personale per un tableau leggibile, perche il conteggio finale si basa tutto su quello che hai raccolto.',
        ],
      },
      {
        title: 'Come gira',
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
  orleans: {
    summary: 'Bag building con piazzamento simultaneo di seguaci: carichi la sacca, pianifichi la plancia e converti bene le azioni chiave di round.',
    quickNotes: [
      'Spiega bene il ciclo prendo seguaci -> li pesco -> li piazzo su azioni; e il motore del gioco.',
      'La mappa e importante, ma va presentata dopo la plancia personale.',
      'Molti errori nascono dal dimenticare quali seguaci restano bloccati fino alla risoluzione.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara tabellone, mappa, eventi di round, merci e componenti personali secondo il numero di giocatori.',
          'Ogni giocatore prende la propria plancia, seguaci iniziali e sacca.',
          'Spiega subito i tipi di seguaci e le azioni base della plancia personale prima di parlare della mappa esterna.',
        ],
      },
      {
        title: 'Come gira',
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
  perudo: {
    summary: 'Bluff su dadi nascosti: rilanci o dubiti, con poche regole ma tanto peso sulla lettura del tavolo.',
    quickNotes: [
      'Spiega subito se gli uno sono jolly nella versione che state usando, perche cambia tutto.',
      'Il gioco si capisce solo se il rilancio minimo e chiarissimo.',
      'Una spiegazione breve ma precisa vale piu di mille esempi verbali confusi.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Date a ciascuno il bicchiere e il numero corretto di dadi, poi tutti lanciano coperti.',
          'Scegliete se giocate con regole base o varianti tipo palifico e chiaritele prima di iniziare.',
          'Spiega bene come funziona il valore uno nella vostra partita e qual e la perdita quando un dubbio si risolve.',
        ],
      },
      {
        title: 'Come gira',
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
  'procioni-in-cassa-4': {
    summary: 'Filler family di push your luck e furti leggeri: raccogli bottino e fermati al momento giusto prima che qualcun altro ti superi.',
    quickNotes: [
      'Spiega con chiarezza quando si puo continuare a pescare e quando conviene fermarsi.',
      'Il ritmo deve essere molto rapido: piu il tavolo analizza, meno il gioco rende.',
      'Le interazioni leggere vanno lette come swing di round, non come strategia lunga.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara il mazzo, i componenti bottino e l eventuale area comune di scarto o refurtiva secondo il regolamento.',
          'Dai a ciascuno la dotazione iniziale prevista e chiarisci subito come si tiene il bottino sicuro rispetto a quello ancora a rischio.',
          'Se ci sono effetti speciali di carta, mostratene un paio prima di partire invece di leggerli tutti uno per uno.',
        ],
      },
      {
        title: 'Come gira',
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
  sagrada: {
    summary: 'Draft di dadi colorati su vetrate con vincoli di colore e valore: i tool aiutano, ma il cuore e non bloccarsi la plancia da soli.',
    quickNotes: [
      'Spiega subito la differenza tra restrizioni adiacenza, colore e numero.',
      'I tool cards vanno presentati come eccezioni mirate, non come regola base.',
      'Molti errori vengono dai limiti di piazzamento e da cosa significa adiacenza ortogonale/diagonale.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Ogni giocatore prende una finestra, una plancia supporto e i marker favore richiesti dal pattern scelto.',
          'Prepara sacchetto dadi, tracciato round, obiettivi comuni e tool cards selezionate.',
          'Spiega prima di tirare i dadi il vincolo del primo piazzamento e le regole base di adiacenza.',
        ],
      },
      {
        title: 'Come gira',
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
  seasons: {
    summary: 'Draft iniziale e calendario a dadi: giochi carte, evochi combo e gestisci bene il limite di evocazione mentre le stagioni scorrono.',
    quickNotes: [
      'La spiegazione funziona se separi bene draft iniziale, round di dadi e limite di evocazione.',
      'Le energie non sono tutte equivalenti: il cambio stagione modifica anche il loro valore relativo.',
      'Molti errori derivano dal dimenticare il limite di carte evocate davanti a te.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Fate il draft iniziale delle carte e costruite i mazzi personali secondo la procedura base del gioco.',
          'Preparate i dadi stagione, il calendario e le energie comuni.',
          'Chiarite prima del via il concetto di evocazione: le carte in mano non sono gia in gioco e lo spazio evocazione e limitato.',
        ],
      },
      {
        title: 'Come gira',
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
  scythe: {
    summary: 'Euro di espansione con mappa condivisa: scegli una sezione della plancia, fai l azione alta e magari quella bassa, costruendo economia e presenza.',
    quickNotes: [
      'Spiega il flusso della plancia personale prima di parlare di combattimento o obiettivi.',
      'Il gioco non e un wargame puro: il conflitto c e, ma il motore economico viene prima.',
      'Popolarita, potere e stelle vanno presentati subito come assi portanti della partita.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Assegna a ciascuno una fazione e una plancia giocatore, prepara mappa, risorse, encounter, obiettivi e automa se usato.',
          'Posizionate worker, leader, mecha iniziali e componenti secondo il setup di fazione/plancia.',
          'Chiarite subito come si legge una colonna azione: parte alta sempre disponibile, parte bassa opzionale se paghi il costo.',
        ],
      },
      {
        title: 'Come gira',
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
  'sky-team': {
    summary: 'Co-op a due di dadi piazzati in silenzio relativo: volete atterrare senza perdere il controllo di asse, velocita, flap e pista.',
    quickNotes: [
      'La spiegazione deve partire dai quattro strumenti critici: asse, velocita, flap e freni/atterraggio.',
      'Il gioco sembra piccolo ma il vincolo di comunicazione e la regola che piu incide sul tavolo.',
      'Meglio fare un round di esempio completo che tre minuti di teoria astratta.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Scegli l aeroporto/scenario, prepara la plancia con i moduli richiesti e distribuisci i ruoli ai due piloti.',
          'Date a ciascuno i propri dadi e chiarite quali aree della cabina gestisce ciascun giocatore.',
          'Prima di iniziare spiegate il livello di comunicazione consentito in quella fase della partita, perche cambia molto la difficolta percepita.',
        ],
      },
      {
        title: 'Come gira',
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
  talisman: {
    summary: 'Avventura fantasy a dadi e carte: muovi, incontri spazi e cerchi di crescere abbastanza da affrontare il centro del tabellone.',
    quickNotes: [
      'Il gioco rende se la spiegazione resta semplice: movimento, incontri, equip e accesso alle regioni interne.',
      'Non provare a coprire ogni carta possibile: dai lo scheletro e fai leggere gli effetti quando escono.',
      'L accesso alla regione centrale e il nodo che il tavolo dimentica piu spesso.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara tabellone, carte avventura/incantesimo, segnalini e personaggi con le rispettive schede.',
          'Ogni giocatore prende un personaggio, segnalini vita/forza/astuzia e la dotazione iniziale indicata.',
          'Spiega le tre regioni del tabellone e come si passa da esterna a media a interna, cosi il tavolo capisce subito il percorso generale.',
        ],
      },
      {
        title: 'Come gira',
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
  'terraforming-mars': {
    summary: 'Engine builder di carte e tag: paghi per progetti, alzi i parametri globali e costruisci un motore che converte soldi e sinergie in punti.',
    quickNotes: [
      'La spiegazione funziona se separi bene generazione, azioni/progetti e fine generazione.',
      'Le tre metriche globali non sono solo fine partita: guidano ritmo, economia e milestone.',
      'Non leggere tutte le icone al tavolo prima del via: spiega i simboli che servono subito e il resto quando appare.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Prepara tabellone Marte, mazzi progetto, corporation, risorse e tracciati temperatura, ossigeno e oceani.',
          'Ogni giocatore sceglie corporation e mano iniziale secondo la modalita base o draft usata.',
          'Spiegate subito la differenza tra valore produzione e risorsa accumulata su ogni tracciato personale.',
        ],
      },
      {
        title: 'Come gira',
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
  unlock: {
    summary: 'Escape room a carte con app: cercate numeri, combinate oggetti e risolvete enigmi sotto pressione di tempo.',
    quickNotes: [
      'Spiega il sistema di carte e combinazioni prima di raccontare l app.',
      'Il tavolo deve capire subito quali carte restano in gioco e quali invece si scartano.',
      'Il vero rischio non e la difficolta degli enigmi, ma l uso disordinato delle carte sul tavolo.',
    ],
    recapSections: [
      {
        title: 'Setup rapido',
        items: [
          'Scegliete lo scenario, aprite solo il mazzo richiesto e preparate l app con la missione corretta.',
          'Mettete la carta iniziale e tenete il resto del mazzo ordinato per numero.',
          'Prima di partire spiegate bene differenza tra carte oggetto, macchine, codici e combinazioni numeriche.',
        ],
      },
      {
        title: 'Come gira',
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
};
