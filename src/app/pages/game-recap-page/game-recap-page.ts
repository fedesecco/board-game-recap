import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { getBoardGameBySlug } from '../../data/board-games';

@Component({
  selector: 'app-game-recap-page',
  imports: [RouterLink],
  templateUrl: './game-recap-page.html',
  styleUrl: './game-recap-page.css',
})
export class GameRecapPageComponent {
  private readonly route = inject(ActivatedRoute);
  private static readonly bulletSplitPattern = /(?<=[.;])\s+(?=[A-Z0-9])/g;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') },
  );

  protected readonly game = computed(() => getBoardGameBySlug(this.slug()));
  protected readonly recapSections = computed(() => {
    const selectedGame = this.game();

    if (!selectedGame) {
      return [];
    }

    return selectedGame.recapSections.map((section) => ({
      ...section,
      items: this.expandBulletItems(section.items),
    }));
  });

  private expandBulletItems(items: string[]): string[] {
    return items.flatMap((item) =>
      item
        .split(GameRecapPageComponent.bulletSplitPattern)
        .map((fragment) => fragment.trim())
        .filter(Boolean),
    );
  }
}
