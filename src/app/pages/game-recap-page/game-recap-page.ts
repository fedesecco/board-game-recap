import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { getBoardGameBySlug } from '../../data/board-games';
import { BoardGameRecapSection } from '../../models/board-game';

@Component({
  selector: 'app-game-recap-page',
  imports: [RouterLink],
  templateUrl: './game-recap-page.html',
  styleUrl: './game-recap-page.css',
})
export class GameRecapPageComponent {
  private readonly route = inject(ActivatedRoute);
  private static readonly quickNotesTitle = 'Occhio a';
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

    const sections = selectedGame.recapSections.map((section) => ({ ...section }));
    const quickNotes = selectedGame.quickNotes;
    const quickSectionIndex = sections.findIndex(
      (section) => section.title === GameRecapPageComponent.quickNotesTitle,
    );

    if (!quickNotes.length) {
      return sections.map((section) => ({
        ...section,
        items: this.expandBulletItems(section.items),
      }));
    }

    if (quickSectionIndex >= 0) {
      const mergedSection: BoardGameRecapSection = {
        ...sections[quickSectionIndex],
        items: this.expandBulletItems([...quickNotes, ...sections[quickSectionIndex].items]),
      };
      sections[quickSectionIndex] = mergedSection;
      return sections.map((section, index) =>
        index === quickSectionIndex
          ? section
          : { ...section, items: this.expandBulletItems(section.items) },
      );
    }

    return [
      ...sections.map((section) => ({
        ...section,
        items: this.expandBulletItems(section.items),
      })),
      {
        title: GameRecapPageComponent.quickNotesTitle,
        items: this.expandBulletItems(quickNotes),
      },
    ];
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
