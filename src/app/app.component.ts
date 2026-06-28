import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent, CommonModule],
})
export class AppComponent {

  private router = inject(Router);

  showFooter = false;

  /**
   * 🔐 Whitelist de rutas donde quieres mostrar el footer
   */
  private whiteListUrls: string[] = [
    '/login',
    '/welcome'
  ];

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const url: string = event.urlAfterRedirects;

        // 🔎 Control de whitelist
        this.showFooter = this.whiteListUrls.some(path =>
          url.startsWith(path)
        );

        console.log('[Router]', url, 'showFooter:', this.showFooter);
      });
  }
}