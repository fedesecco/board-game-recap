import { Injectable, signal } from '@angular/core';
import { Tag } from '../models/board-game';

export type ComplexityBand = '0-1' | '1-2' | '2-3' | '3-4' | '4+';

export interface HomeFiltersForm {
  query: string;
  filtersOpen: boolean;
  tagsOpen: boolean;
  complexityOpen: boolean;
  players: string;
  bestPlayers: string;
  duration: string;
  selectedComplexityBands: ComplexityBand[];
  selectedTags: Tag[];
}

const initialHomeFiltersForm: HomeFiltersForm = {
  query: '',
  filtersOpen: false,
  tagsOpen: false,
  complexityOpen: false,
  players: '',
  bestPlayers: '',
  duration: '',
  selectedComplexityBands: [],
  selectedTags: [],
};

@Injectable({ providedIn: 'root' })
export class HomeFiltersService {
  readonly form = signal<HomeFiltersForm>(initialHomeFiltersForm);

  updateTextField(field: 'query' | 'players' | 'bestPlayers' | 'duration', value: string): void {
    this.form.update((current) => ({
      ...current,
      [field]: value,
    }));
  }

  toggleFlag(field: 'filtersOpen' | 'tagsOpen' | 'complexityOpen'): void {
    this.form.update((current) => ({
      ...current,
      [field]: !current[field],
    }));
  }

  toggleComplexityBand(band: ComplexityBand): void {
    this.form.update((current) => ({
      ...current,
      selectedComplexityBands: current.selectedComplexityBands.includes(band)
        ? current.selectedComplexityBands.filter((currentBand) => currentBand !== band)
        : [...current.selectedComplexityBands, band],
    }));
  }

  toggleTag(tag: Tag): void {
    this.form.update((current) => ({
      ...current,
      selectedTags: current.selectedTags.includes(tag)
        ? current.selectedTags.filter((currentTag) => currentTag !== tag)
        : [...current.selectedTags, tag],
    }));
  }
}
