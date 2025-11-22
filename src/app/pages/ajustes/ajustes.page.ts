import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonSelect,
  IonSelectOption} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonButton,
    CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon, IonText, IonListHeader, IonRange
  ]
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


  changeLanguage() {
    this.langService.setLanguage(this.language);
  }

  changeFontSize() {
    localStorage.setItem('fontSize', this.fontSize);
    this.applyFontSize();
  }

  applyFontSize() {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add(`font-${this.fontSize}`);
  }

  resetDefaults() {
    // Restablecer valores
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
