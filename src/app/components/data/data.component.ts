import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { documentTextOutline } from 'ionicons/icons';

addIcons({
  'document-text-outline': documentTextOutline,
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

}
