import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})

export class StoragePage implements OnInit {
  textoAlmacenado=''

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    this.textoAlmacenado = await this.storage.get('textoAlmacenado');
  }

  async guardarDato(){
    await this.storage.set('textoAlmacenado', this.textoAlmacenado);
  }
}
