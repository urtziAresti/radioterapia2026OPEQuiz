import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { I18nService } from '../../../assets/i18n/i18n.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule]
})
export class InstructionsComponent {
  private readonly i18n = inject(I18nService);
  texts = this.i18n.texts;
  constructor() { }


}
