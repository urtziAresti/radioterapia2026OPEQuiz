import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { documentTextOutline,documentOutline } from 'ionicons/icons';

addIcons({
  'document-text-outline': documentTextOutline,
  'document-outline': documentOutline,

});
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class DataComponent {

  constructor() { }

  openFile(path: string): void {
    window.open(path, '_blank');
  }
  openPDF(): void {
    const fileUrl = new URL('https://radioterapia2026-ope.vercel.app/assets/docs/preguntasOK.pdf', document.baseURI).href;
    const googleViewer = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl)}`;
    window.open(googleViewer, '_blank');
  }

}
