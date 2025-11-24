import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/services/personajes';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonList, IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon
  ]
})
export class FavoritosPage implements OnInit {

  favoritos: string[] = [];
  personajesFavoritos: Personaje[] = [];
  personajeExpandido: Personaje | null = null;

  constructor(
    private personajesService: PersonajesService,
    private favoritesService: FavoritesService,
    private lang: LanguageService
  ) {}

  t(key: string) {
    return this.lang.t(key);
  }

  ngOnInit() {
    this.favoritesService.favorites$.subscribe(ids => {
      this.favoritos = ids;
      this.personajesFavoritos = this.personajesService.getPersonajes().filter(p => ids.includes(p.id));
    });
  }

  esFavorito(personaje: Personaje): boolean {
    return this.favoritos.includes(personaje.id);
  }

  toggleFavorito(personaje: Personaje) {
    this.favoritesService.toggle(personaje);
  }

  expandirCard(p: Personaje) {
    this.personajeExpandido = p;
  }

  cerrarExpandido() {
    this.personajeExpandido = null;
  }
}
