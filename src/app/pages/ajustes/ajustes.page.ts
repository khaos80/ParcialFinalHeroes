import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToggle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToggle, IonToolbar, IonSelect, IonSelectOption]
})

export class AjustesPage implements OnInit {
  paletteToggle = false;
  language: 'es' | 'en' = 'es';
  fontSize: 'small' | 'medium' | 'large' = 'medium';

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    // Tema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
     this.initializeDarkPalette(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
    
    // Idioma
    this.language = this.langService.getLanguage();

    // Tamaño de fuente
    const savedSize = localStorage.getItem('fontSize') as 'small' | 'medium' | 'large' | null;
    this.fontSize = savedSize ?? 'medium';
    this.applyFontSize();
  }

  // Función de cambio de Tema entre Light/Dark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }
  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Funcioón de cambio de lenguaje entre Español/Ingles
  changeLanguage() {
    this.langService.setLanguage(this.language);
  }

  // Función de cambio y aplicación de tamaño de fuente
  changeFontSize() {
    localStorage.setItem('fontSize', this.fontSize);
    this.applyFontSize();
  }
  applyFontSize() {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add(`font-${this.fontSize}`);
  }

  // Función restablecer valores de ajustes a predeterminados
  resetDefaults() {
    localStorage.removeItem('theme');
    localStorage.removeItem('language');
    localStorage.removeItem('fontSize');

    this.language = 'es';
    this.langService.setLanguage('es');

    this.fontSize = 'medium';
    this.applyFontSize();
  }

  t(key: string) {
    return this.langService.t(key);
  }
}
