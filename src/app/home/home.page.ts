import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { PersonajesService } from '../services/personajes';
import { ViewChild } from '@angular/core';
import { IonSelect, IonSelectOption, IonItem } from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonHeader, IonCardSubtitle, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { LanguageService } from '.././services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, NgFor, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonHeader, IonButtons, IonButton, IonIcon, IonSelect, IonSelectOption ],
})

export class Homepage implements OnInit {

  personajes: Personaje[] = [];
  personajesFiltrados: Personaje[] = [];

  private index: number = 0;
  private batchSize: number = 15;

  constructor(private personajesService: PersonajesService, private lang: LanguageService) {}
  
  t(key: string) {
    return this.lang.t(key);
  }
  ngOnInit() {
    // Cargar personajes desde el servicio
    this.personajes = this.personajesService.getPersonajes();

    // Cargar primer lote
    this.loadMore();
  }

  // Función para cargar más personajes
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

  // Manejador del evento de scroll infinito
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadMore(event);
  }

  // Función de búsqueda
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

  // Referencia al IonSelect
  @ViewChild('selectFiltros', { static: false }) selectFiltros!: IonSelect;

  // Filtro seleccionado
  filtroUniverso: string = '';
  filtroAfiliacion: string = '';
  ordenNombre: 'A-Z' | 'Z-A' | '' = '';
  
  // Función para abrir el IonSelect
  abrirSelectFiltros() {
    this.selectFiltros.open();
  }

  // Función para aplicar filtros y ordenamiento
  aplicarFiltro(event: any) {
    const valor = event.detail.value;

    if (valor === 'Limpiar') {
      this.filtroUniverso = '';
      this.filtroAfiliacion = '';
      this.ordenNombre = '';
      this.aplicarFiltros();
      return;
    }

    const [tipo, dato] = valor.split(':');

    switch (tipo) {
      case 'universo':
        this.filtroUniverso = dato;
        break;
      case 'afiliacion':
        this.filtroAfiliacion = dato;
        break;
      case 'orden':
        this.ordenNombre = dato as 'A-Z' | 'Z-A';
        break;
    }

    this.aplicarFiltros();
  }
  
  // Función para aplicar los filtros y ordenamientos
  aplicarFiltros() {
    let filtrados = [...this.personajes];

    if (this.filtroUniverso) {
      filtrados = filtrados.filter(p => p.universo.toLowerCase() === this.filtroUniverso.toLowerCase());
    }

    if (this.filtroAfiliacion) {

      const af = this.filtroAfiliacion.toLowerCase().replace(/[- ]/g, '');
      filtrados = filtrados.filter(p => {
        const afiliacionPersonaje = p.afiliacion.toLowerCase().replace(/[- ]/g, '');
        return afiliacionPersonaje === af;
      });
    }

    if (this.ordenNombre === 'A-Z') {
      filtrados = [...filtrados].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    if (this.ordenNombre === 'Z-A') {
      filtrados = [...filtrados].sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    this.personajesFiltrados = filtrados;
  }
}
