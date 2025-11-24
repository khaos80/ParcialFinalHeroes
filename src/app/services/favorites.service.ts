import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadFavorites();
  }

  private async loadFavorites() {
    const stored = (await this.storageService.get('favorites')) || [];
    this.favoritesSubject.next(stored);
  }

  async addFavorite(id: string) {
    const current = (await this.storageService.get('favorites')) || [];
    if (!current.includes(id)) {
      const updated = [...current, id];
      await this.storageService.set('favorites', updated);
      this.favoritesSubject.next(updated);
    }
  }

  async removeFavorite(id: string) {
    const current = (await this.storageService.get('favorites')) || [];
    const updated = current.filter((f: string) => f !== id);
    await this.storageService.set('favorites', updated);
    this.favoritesSubject.next(updated);
  }
}
