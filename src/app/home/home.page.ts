import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { PersonajesService } from '../services/personajes';
import { TitleCasePipe } from '@angular/common';
import {
  InfiniteScrollCustomEvent,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonHeader,
  IonCardSubtitle
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    NgFor,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
  ],
})
export class Homepage implements OnInit {

  personajes: Personaje[] = [];
  personajesFiltrados: Personaje[] = [];

  private index: number = 0;
  private batchSize: number = 15;

  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    // Cargar personajes desde el servicio
    this.personajes = this.personajesService.getPersonajes();

    // Cargar primer lote
    this.loadMore();
  }

  loadMore(event?: any) {
    const start = this.index;
    const end = this.index + this.batchSize;

    const nuevos = this.personajes.slice(start, end);
    this.personajesFiltrados.push(...nuevos);

    this.index = end;

    if (event) {
      setTimeout(() => {
        event.target.complete();

        if (this.index >= this.personajes.length) {
          event.target.disabled = true;
        }
      }, 600);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadMore(event);
  }

  buscar(event: any) {
    const texto = event.target.value.toLowerCase();

    if (!texto || texto.trim() === '') {
      // Reset a los primeros elementos
      this.personajesFiltrados = [];
      this.index = 0;
      this.loadMore();
      return;
    }

    this.personajesFiltrados = this.personajes.filter(p =>
      p.nombre.toLowerCase().includes(texto) ||
      p.alias.toLowerCase().includes(texto) ||
      p.afiliacion.toLowerCase().includes(texto) ||
      p.universo.toLowerCase().includes(texto)
    );
  }

}
