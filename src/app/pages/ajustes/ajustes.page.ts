import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption]
})
export class AjustesPage implements OnInit {

  darkMode = false;
  language = 'es';

  constructor() { }

  ngOnInit() {
    this.darkMode = document.body.classList.contains('dark');
  }

  toggleTheme() {
    document.body.classList.toggle('dark', this.darkMode);
  }

  changeLanguage(){
    console.log('Idioma cambiado a:', this.language);
  }
}
