import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _storage: Storage | null = null;

  constructor() {}

  async init() {
    if (!this._storage) {
      const storage = new Storage({ name: '__mydb' });
      this._storage = await storage.create();
    }
  }

  async set(key: string, value: any) {
    return this._storage?.set(key, value);
  }

  async get(key: string) {
    return this._storage?.get(key);
  }
}
