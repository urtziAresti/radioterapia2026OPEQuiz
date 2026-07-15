import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { documentTextOutline,documentOutline } from 'ionicons/icons';
import { I18nService } from '../../../assets/i18n/i18n.service';

addIcons({
  'document-text-outline': documentTextOutline,
  'document-outline': documentOutline,
});
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class ReferencesComponent {
  private readonly i18n = inject(I18nService);
  texts = this.i18n.texts;
  constructor() { }

  openFile(path: string): void {
    window.open(path, '_blank');
  }
  openPDF(type: number): void {

    switch (type) { 
     
      case 1:   
      const fileUrl = new URL('https://radioterapia2026-ope.vercel.app/assets/docs/preguntasOK.pdf', document.baseURI).href;
      const googleViewer = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl)}`;
        window.open(googleViewer, '_blank');
      break;


      case 2:   
      const fileUrl2 = new URL('https://radioterapia2026-ope.vercel.app/assets/docs/respuestas-UTS.pdf', document.baseURI).href;
      const googleViewer2 = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl2)}`;
        window.open(googleViewer2, '_blank');
      break;
      
    }

   
  }

}
