import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule]
})
export class InstructionsComponent {

  constructor() { }


}
