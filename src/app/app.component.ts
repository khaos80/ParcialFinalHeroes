import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    await this.storageService.init();
  }
}
