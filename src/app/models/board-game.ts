export interface BoardGameRecapSection {
  title: string;
  items: string[];
}

export interface BoardGame {
  bggId: number | null;
  bggUrl: string | null;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  minPlayers: number | null;
  maxPlayers: number | null;
  bestPlayers: string;
  playTime: string;
  players: string;
  duration: string;
  complexity: string;
  year: number;
  accentColor: string;
  coverUrl: string;
  summary: string;
  quickNotes: string[];
  recapSections: BoardGameRecapSection[];
}
