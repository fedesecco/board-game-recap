export interface BoardGameRecapSection {
  title: string;
  items: string[];
}

export interface BoardGameRecap {
  sections: BoardGameRecapSection[];
}

export enum Tag {
  Play26 = 'play-2026',
  Cooperative = 'cooperative',
  EngineBuilding = 'engine-building',
  Euro = 'euro',
  American = 'american',
  PartyGame = 'party-game',
  Abstract = 'abstract',
}

export interface BoardGame {
  bggId: number | null;
  bggUrl: string | null;
  slug: string;
  title: string;
  category: string;
  minPlayers: number | null;
  maxPlayers: number | null;
  bestPlayers: string;
  playTime: string;
  complexity: string;
  year: number;
  accentColor: string;
  coverUrl: string;
  tags: Tag[];
  recap: BoardGameRecap;
}
