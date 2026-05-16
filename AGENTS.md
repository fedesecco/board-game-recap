# AGENTS.md

## Scopo del progetto

Questo progetto e una libreria personale di board game recap costruita in Angular.

Ogni gioco deve avere:

- una card nella home
- una cover reale in `public/assets/games`
- i metadati base nel catalogo
- una pagina di dettaglio con recap rapido pensato per chi deve spiegare il gioco

La pagina dettaglio non deve essere un regolamento completo. Deve essere un promemoria ad alta leggibilita per uno spiegatore di giochi: una persona che deve rimettere in testa setup, flusso del turno e gotcha prima di spiegare al tavolo.

Obiettivo centrale dei testi:

- far ripartire velocemente uno spiegatore
- ricordargli il setup senza andare a cercare tutto nel manuale
- dargli un brief rapido di come gira il gioco
- evidenziare le regole che si dimenticano o si sbagliano piu spesso

Non e un tutorial da zero. Non e una recensione. Non e una riscrittura completa del regolamento.

## Dove stanno i dati

- Catalogo principale: `src/app/data/board-games.ts`
- Contenuti recap dettaglio: `src/app/data/board-game-recaps.ts`
- Modello dati: `src/app/models/board-game.ts`
- Home page: `src/app/pages/home-page`
- Pagina recap gioco: `src/app/pages/game-recap-page`
- Immagini cover: `public/assets/games`

## Procedura completa per aggiungere un gioco

### 1. Verificare se il gioco esiste gia

Prima di aggiungere un gioco:

- cercare `slug:` e `title:` in `src/app/data/board-games.ts`
- cercare eventuale recap gia presente in `src/app/data/board-game-recaps.ts`
- controllare se esiste gia una cover in `public/assets/games`

Se il gioco esiste gia:

- non duplicarlo
- completare solo i dati mancanti
- se manca il recap, aggiungere solo il recap
- se manca la cover reale, sostituire il placeholder o l asset vecchio

### 2. Raccogliere le informazioni base

Per ogni gioco servono questi campi minimi nel catalogo:

- `bggId`
- `bggUrl`
- `slug`
- `title`
- `tagline`
- `category`
- `minPlayers`
- `maxPlayers`
- `bestPlayers`
- `playTime`
- `complexity`
- `year`
- `accentColor`
- `coverUrl`

Fonti consigliate:

- BoardGameGeek per dati strutturati e nome ufficiale
- Board Game Oracle come fonte pratica per metadata pubblici e cover
- store o pagine editore come fallback

Regole pratiche:

- usare un titolo leggibile e vicino al nome stampato sulla scatola
- usare uno `slug` semplice e stabile, in kebab-case
- `bestPlayers` puo essere singolo (`4`) o range (`2-3`)
- `complexity` puo essere stringa numerica (`2.69`) oppure `n/d` se davvero non disponibile
- `playTime` va salvato come testo leggibile (`30 min`, `60-90 min`)
- `tagline` deve essere breve e utile, non marketing generico

### 3. Recuperare una cover reale

Non usare immagini placeholder se si riesce ad avere una cover vera.

Ordine di priorita:

- cover da Board Game Oracle / metadata pubblici
- cover da BGG se accessibile
- cover da sito editore o store affidabile

Regole:

- salvare il file in `public/assets/games`
- preferire `.jpg` quando la fonte e fotografica
- usare nomi file coerenti con lo slug, per esempio `terraforming-mars.jpg`
- aggiornare `coverUrl` nel catalogo con il path locale `/assets/games/<file>`

Se una cover vecchia non e piu usata:

- si puo lasciare nel repo temporaneamente
- idealmente va rimossa in una successiva pulizia asset

### 4. Aggiungere il gioco al catalogo della home

Aggiungere l entry in `src/app/data/board-games.ts` usando `buildGame(...)`.

Linee guida:

- mantenere il formato esistente
- usare `accentColor` coerente con la cover quando possibile
- se il recap non esiste ancora, il gioco comparira comunque in home grazie ai fallback

Importante:

- la home legge direttamente `BOARD_GAMES`
- non serve toccare altro per far comparire il gioco in lista
- l ordinamento viene gestito dalla home

### 5. Creare il recap della pagina dettaglio

Aggiungere una voce in `src/app/data/board-game-recaps.ts` con chiave uguale allo `slug`.

Ogni recap dovrebbe contenere:

- `summary`
- `quickNotes`
- `recapSections`

Anche se `summary` esiste nel modello, la pagina attuale e stata alleggerita: il focus deve stare su sezioni e note operative.

Il criterio guida e sempre questo:

- se una frase aiuta uno spiegatore a ricordare come mettere giu la partita o come raccontarla, serve
- se una frase e solo descrittiva, tematica o da recensione, non serve

### 6. Struttura consigliata della pagina dettaglio

La pagina dettaglio deve essere costruita per spiegare il gioco velocemente.

Deve aiutare a rispondere subito a queste domande:

- come preparo il tavolo
- cosa faccio nel turno
- cosa fa finire la partita
- cosa mi dimentico sempre quando lo spiego

Struttura raccomandata:

1. `Setup rapido`
2. `Come gira`
3. `Occhio a`

Se serve, si possono usare titoli piu specifici, ma solo quando migliorano davvero la chiarezza.

#### Setup rapido

Deve spiegare:

- cosa mettere sul tavolo
- cosa riceve ogni giocatore
- cosa preparare prima del primo turno
- quali regole di setup si dimenticano facilmente

Stile:

- diretto
- concreto
- niente dettagli inutili se non cambiano la prima spiegazione
- va scritto pensando a uno che sta materialmente aprendo la scatola

#### Come gira

Deve spiegare:

- il flusso di turno
- le azioni principali
- come si avanza nella partita
- come o quando finisce

Stile:

- pensato per chi deve ricordare il ritmo del gioco
- non deve coprire tutte le eccezioni del regolamento
- deve dare uno scheletro chiaro da raccontare a voce in 30-60 secondi

#### Occhio a

Deve contenere:

- regole facili da sbagliare
- reminder di timing
- punti che cambiano davvero come si spiega o si gioca
- errori tipici del tavolo

Questa sezione e molto importante: deve aiutare chi spiega a non dimenticare le cose che mandano fuori strada la partita.

I gotcha migliori sono:

- timing strani
- vincoli di setup
- regole che il tavolo interpreta male
- eccezioni che cambiano davvero la spiegazione
- errori che falsano i primi turni

### 7. Scrivere bene i contenuti

Regole editoriali:

- scrivere in italiano semplice
- preferire frasi brevi
- privilegiare leggibilita e scansione veloce
- evitare tono da regolamento legale
- evitare testo promozionale
- evitare introduzioni inutili

Formato raccomandato:

- ogni idea importante come bullet separato
- se una frase contiene due concetti distinti, dividerli
- meglio tre bullet chiari che un paragrafo denso

La pagina recap serve a:

- ricordare il setup
- ripassare il turno
- non dimenticare regole critiche
- dare sicurezza allo spiegatore prima di iniziare la spiegazione

Non serve a:

- insegnare da zero tutto il regolamento
- sostituire il manuale
- raccontare il tema del gioco in modo descrittivo
- inserire lore, impressioni personali o contesto superfluo

### 8. Verifiche finali

Dopo aver aggiunto un gioco, controllare:

- il gioco appare in home
- la cover viene caricata correttamente
- la card ha dati leggibili
- il click porta alla pagina `/games/:slug`
- la pagina dettaglio mostra sezioni e note giuste
- non ci sono doppioni nel catalogo
- non ci sono `coverUrl` che puntano ancora a placeholder se esiste una cover vera

### 9. Quando i dati mancano davvero

Se non si trovano dati affidabili:

- usare `n/d` solo dove necessario
- evitare di inventare numeri
- lasciare `bggId: null` solo se non si trova un riferimento solido
- se la cover non si trova, usare temporaneamente un asset locale semplice ma segnare il gioco come da completare

### 10. Obiettivo di qualita

Un nuovo gioco si considera aggiunto bene solo quando:

- ha una cover reale locale
- ha metadati completi o quasi completi
- compare bene nella home
- ha una pagina recap utile a una spiegazione al tavolo
- include setup, flusso e cose da non dimenticare
