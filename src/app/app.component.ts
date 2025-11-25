import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    await this.storageService.init();

    // Configuración de la barra de estado
    StatusBar.setOverlaysWebView({ overlay: false }); // Evita que el contenido se meta debajo
    StatusBar.setStyle({ style: Style.Light });       // Cambia el estilo (Light/Dark)
    StatusBar.setBackgroundColor({ color: '#ffffff' }); // Color de fondo de la barra
  }
}

