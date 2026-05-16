import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BOARD_GAMES } from '../../data/board-games';
import { BoardGame, Tag } from '../../models/board-game';

type ComplexityBand = '0-1' | '1-2' | '2-3' | '3-4' | '4+';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  protected readonly games = BOARD_GAMES;
  protected readonly query = signal('');
  protected readonly filtersOpen = signal(false);
  protected readonly tagsOpen = signal(false);
  protected readonly complexityOpen = signal(false);
  protected readonly playersFilter = signal('');
  protected readonly bestPlayersFilter = signal('');
  protected readonly durationFilter = signal('');
  protected readonly selectedComplexityBands = signal<ComplexityBand[]>([]);
  protected readonly selectedTags = signal<Tag[]>([]);
  protected readonly complexityOptions: ComplexityBand[] = ['0-1', '1-2', '2-3', '3-4', '4+'];
  protected readonly complexityLabels: Record<ComplexityBand, string> = {
    '0-1': '0-1',
    '1-2': '1-2',
    '2-3': '2-3',
    '3-4': '3-4',
    '4+': '4+',
  };
  protected readonly tagLabels: Record<Tag, string> = {
    [Tag.Play26]: 'Play Bologna 2026',
    [Tag.Cooperative]: 'Coop',
    [Tag.EngineBuilding]: 'Engine building',
    [Tag.Euro]: 'Euro',
    [Tag.American]: 'American',
    [Tag.PartyGame]: 'Party',
    [Tag.Abstract]: 'Abstract',
  };
  protected readonly tagOptions = computed(() => {
    const seen = new Set<Tag>();
    const ordered: Tag[] = [];

    for (const preferred of [
      Tag.Play26,
      Tag.Cooperative,
      Tag.EngineBuilding,
      Tag.Euro,
      Tag.American,
      Tag.PartyGame,
      Tag.Abstract,
    ]) {
      if (this.games.some((game) => game.tags.includes(preferred))) {
        seen.add(preferred);
        ordered.push(preferred);
      }
    }

    const rest = this.games
      .flatMap((game) => game.tags)
      .filter((tag) => !seen.has(tag))
      .sort((left, right) => this.tagLabels[left].localeCompare(this.tagLabels[right], 'it'));

    for (const tag of rest) {
      if (!seen.has(tag)) {
        seen.add(tag);
        ordered.push(tag);
      }
    }

    return ordered;
  });
  protected readonly tagTriggerLabel = computed(() => {
    const selected = this.selectedTags();

    if (selected.length === 0) {
      return 'Tutti';
    }

    if (selected.length === 1) {
      return this.tagLabels[selected[0]];
    }

    return `${selected.length} selezionati`;
  });
  protected readonly complexityTriggerLabel = computed(() => {
    const selected = this.selectedComplexityBands();

    if (selected.length === 0) {
      return 'Qualsiasi';
    }

    if (selected.length === 1) {
      return this.complexityLabels[selected[0]];
    }

    return `${selected.length} selezionati`;
  });
  protected readonly filteredGames = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();
    const playersFilter = Number(this.playersFilter() || 0);
    const bestPlayersFilter = Number(this.bestPlayersFilter() || 0);
    const durationFilter = Number(this.durationFilter() || 0);
    const selectedComplexityBands = this.selectedComplexityBands();
    const selectedTags = this.selectedTags();

    return [...this.games]
      .filter((game) => {
        if (normalizedQuery && !game.title.toLowerCase().includes(normalizedQuery)) {
          return false;
        }

        if (playersFilter && !this.matchesPlayerCount(game, playersFilter)) {
          return false;
        }

        if (bestPlayersFilter && !this.matchesBestPlayers(game, bestPlayersFilter)) {
          return false;
        }

        if (durationFilter && !this.matchesDuration(game, durationFilter)) {
          return false;
        }

        if (selectedComplexityBands.length > 0 && !this.matchesComplexityBands(game, selectedComplexityBands)) {
          return false;
        }

        if (selectedTags.length > 0 && !selectedTags.every((tag) => game.tags.includes(tag))) {
          return false;
        }

        return true;
      })
      .sort((left: BoardGame, right: BoardGame) => left.title.localeCompare(right.title, 'it'));
  });

  protected updateQuery(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
  }

  protected toggleFilters(): void {
    this.filtersOpen.update((open) => !open);
  }

  protected toggleTagsOpen(): void {
    this.tagsOpen.update((open) => !open);
  }

  protected toggleComplexityOpen(): void {
    this.complexityOpen.update((open) => !open);
  }

  protected updatePlayersFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.playersFilter.set(target.value);
  }

  protected updateBestPlayersFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.bestPlayersFilter.set(target.value);
  }

  protected updateDurationFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.durationFilter.set(target.value);
  }

  protected toggleComplexityBand(band: ComplexityBand): void {
    this.selectedComplexityBands.update((bands) =>
      bands.includes(band) ? bands.filter((currentBand) => currentBand !== band) : [...bands, band],
    );
  }

  protected hasComplexityBandSelected(band: ComplexityBand): boolean {
    return this.selectedComplexityBands().includes(band);
  }

  protected toggleTag(tag: Tag): void {
    this.selectedTags.update((tags) =>
      tags.includes(tag) ? tags.filter((currentTag) => currentTag !== tag) : [...tags, tag],
    );
  }

  protected hasTagSelected(tag: Tag): boolean {
    return this.selectedTags().includes(tag);
  }

  protected getGameLabel(title: string): string {
    return `Apri il recap di ${title}`;
  }

  protected getPlayersSummary(game: BoardGame): string {
    if (game.minPlayers === null || game.maxPlayers === null) {
      return 'Giocatori n/d';
    }

    return `${game.minPlayers}-${game.maxPlayers}`;
  }

  protected getDifficultySummary(game: BoardGame): string {
    return game.complexity === 'n/d' ? 'n/d' : game.complexity;
  }

  protected getPlayTimeSummary(game: BoardGame): string {
    const range = this.parseTimeRange(game.playTime);

    if (!range) {
      return game.playTime;
    }

    return range.min === range.max ? `${range.max}` : `${range.min}-${range.max}`;
  }

  private matchesPlayerCount(game: BoardGame, targetPlayers: number): boolean {
    if (game.minPlayers === null || game.maxPlayers === null) {
      return false;
    }

    return targetPlayers >= game.minPlayers && targetPlayers <= game.maxPlayers;
  }

  private matchesBestPlayers(game: BoardGame, targetPlayers: number): boolean {
    const range = this.parseRange(game.bestPlayers);

    if (!range) {
      return false;
    }

    return targetPlayers >= range.min && targetPlayers <= range.max;
  }

  private matchesDuration(game: BoardGame, maxMinutes: number): boolean {
    const duration = this.parseUpperBound(game.playTime);

    if (duration === null) {
      return false;
    }

    return duration <= maxMinutes;
  }

  private matchesComplexityBands(game: BoardGame, bands: ComplexityBand[]): boolean {
    const complexity = Number.parseFloat(game.complexity);

    if (Number.isNaN(complexity)) {
      return false;
    }

    return bands.some((band) => this.matchesComplexityBand(complexity, band));
  }

  private matchesComplexityBand(complexity: number, band: ComplexityBand): boolean {
    switch (band) {
      case '0-1':
        return complexity < 1;
      case '1-2':
        return complexity >= 1 && complexity < 2;
      case '2-3':
        return complexity >= 2 && complexity < 3;
      case '3-4':
        return complexity >= 3 && complexity < 4;
      case '4+':
        return complexity >= 4;
    }
  }

  private parseUpperBound(value: string): number | null {
    const range = this.parseTimeRange(value);

    return range?.max ?? null;
  }

  private parseRange(value: string): { min: number; max: number } | null {
    const matches = value.match(/\d+/g);

    if (!matches || matches.length === 0) {
      return null;
    }

    const numbers = matches.map(Number);
    return {
      min: numbers[0],
      max: numbers.at(-1) ?? numbers[0],
    };
  }

  private parseTimeRange(value: string): { min: number; max: number } | null {
    const normalized = value.trim().toLowerCase();
    const hourMatches = [...normalized.matchAll(/(\d+(?:[.,]\d+)?)\s*h/g)];
    const minuteMatches = [...normalized.matchAll(/(\d+(?:[.,]\d+)?)\s*(?:m|min)\b/g)];

    if (hourMatches.length > 0 || minuteMatches.length > 0) {
      const values = [
        ...hourMatches.map((match) => Math.round(Number.parseFloat(match[1].replace(',', '.')) * 60)),
        ...minuteMatches.map((match) => Math.round(Number.parseFloat(match[1].replace(',', '.')))),
      ].filter((minutes) => !Number.isNaN(minutes));

      if (values.length === 0) {
        return null;
      }

      return {
        min: values[0],
        max: values.at(-1) ?? values[0],
      };
    }

    const fallbackMatches = normalized.match(/\d+/g);

    if (!fallbackMatches || fallbackMatches.length === 0) {
      return null;
    }

    const numbers = fallbackMatches.map(Number);
    return {
      min: numbers[0],
      max: numbers.at(-1) ?? numbers[0],
    };
  }
}
