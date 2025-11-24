import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/services/personajes';
import { FavoritesService } from 'src/app/services/favorites.service'; 
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FavoritosPage implements OnInit {

  favoritos: Personaje[] = [];

  constructor(
    private personajesService: PersonajesService,
    private lang: LanguageService,
    private favoritesService: FavoritesService
  ) { }

   t(key: string) {
    return this.lang.t(key);
  }

  ngOnInit() {
    this.favoritesService.favorites$.subscribe(ids => {
      this.favoritos = this.personajesService.getPersonajes().filter(p => ids.includes(p.id));
    });
  }
}
