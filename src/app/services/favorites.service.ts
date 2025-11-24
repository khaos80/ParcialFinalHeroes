import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { Personaje } from '../models/personaje.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.initFavorites();
  }

  private async initFavorites() {
    await this.storageService.init();
    const stored: string[] = (await this.storageService.get('favorites')) || [];
    this.favoritesSubject.next(stored);
  }

  async toggle(personaje: Personaje) {
    const current = [...this.favoritesSubject.value];
    if (current.includes(personaje.id)) {
      const updated = current.filter(id => id !== personaje.id);
      this.favoritesSubject.next(updated);
      await this.storageService.set('favorites', updated);
    } else {
      const updated = [...current, personaje.id];
      this.favoritesSubject.next(updated);
      await this.storageService.set('favorites', updated);
    }
  }

  isFavorito(personaje: Personaje): boolean {
    return this.favoritesSubject.value.includes(personaje.id);
  }
}
