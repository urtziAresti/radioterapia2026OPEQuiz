import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import packageInfo from '../../../../package.json'; // Ajusta los '../' para llegar a la raíz de tu proyecto

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="version-footer">
      v{{ appVersion }}
    </div>
  `,
  styles: [`
    .version-footer {
      font-size: 12px;
      color: #888;
      text-align: center;
      padding: 10px;
    }
  `]
})
export class FooterComponent implements OnInit {
  // Guardamos la versión en una variable
  appVersion: string = packageInfo.version;

  ngOnInit() {
    console.log('Versión actual de la app:', this.appVersion);
  }
}