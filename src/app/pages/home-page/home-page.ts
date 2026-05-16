import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BOARD_GAMES } from '../../data/board-games';
import { BoardGame } from '../../models/board-game';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  protected readonly games = BOARD_GAMES;
  protected readonly query = signal('');
  protected readonly playersFilter = signal('');
  protected readonly bestPlayersFilter = signal('');
  protected readonly durationFilter = signal('');
  protected readonly complexityFilter = signal('');
  protected readonly filteredGames = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();
    const playersFilter = Number(this.playersFilter() || 0);
    const bestPlayersFilter = Number(this.bestPlayersFilter() || 0);
    const durationFilter = Number(this.durationFilter() || 0);
    const complexityFilter = Number(this.complexityFilter() || 0);

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

        if (complexityFilter && !this.matchesComplexity(game, complexityFilter)) {
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

  protected updateComplexityFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.complexityFilter.set(target.value);
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

  private matchesComplexity(game: BoardGame, maxComplexity: number): boolean {
    const complexity = Number.parseFloat(game.complexity);

    if (Number.isNaN(complexity)) {
      return false;
    }

    return complexity <= maxComplexity;
  }

  private parseUpperBound(value: string): number | null {
    const matches = value.match(/\d+/g);

    if (!matches || matches.length === 0) {
      return null;
    }

    return Number(matches.at(-1));
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
}
