import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="version-footer">
      v{{ appVersion }} by Urr
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: none;
    }

    .version-footer {
      font-size: 12px;
      color: #888;
      text-align: center;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 12px;
      backdrop-filter: blur(4px);
    }
  `]
})
export class FooterComponent {
  appVersion: string = packageInfo.version;
}