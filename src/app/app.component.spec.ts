import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import {
  SwUpdate,
  VersionReadyEvent
} from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent, CommonModule],
})
export class AppComponent {

  private router = inject(Router);
  private swUpdate = inject(SwUpdate);

  showFooter = false;

  /**
   * 🔐 Whitelist de rutas donde quieres mostrar el footer
   */
  private whiteListUrls: string[] = [
    '/login',
    '/welcome'
  ];

  constructor() {

    // ==========================
    // Router
    // ==========================
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const url: string = event.urlAfterRedirects;

        this.showFooter = this.whiteListUrls.some(path =>
          url.startsWith(path)
        );

        console.log('[Router]', url, 'showFooter:', this.showFooter);
      });

    // ==========================
    // PWA Updates
    // ==========================
    this.initPwaUpdates();
  }

  private initPwaUpdates(): void {

    if (!this.swUpdate.isEnabled) {
      console.log('Service Worker deshabilitado');
      return;
    }

    // Primera comprobación
    this.swUpdate.checkForUpdate();

    // Cada 30 segundos
    interval(30000).subscribe(() => {
      this.swUpdate.checkForUpdate();
    });

    // Cuando vuelve a primer plano
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('Comprobando actualizaciones...');
        this.swUpdate.checkForUpdate();
      }
    });

    // Cuando recupera conexión
    window.addEventListener('online', () => {
      console.log('Conexión recuperada. Comprobando actualización...');
      this.swUpdate.checkForUpdate();
    });

    // Nueva versión disponible
    this.swUpdate.versionUpdates
      .pipe(
        filter(
          (event): event is VersionReadyEvent =>
            event.type === 'VERSION_READY'
        )
      )
      .subscribe(async () => {

        console.log('Nueva versión encontrada. Actualizando...');

        await this.swUpdate.activateUpdate();

        this.reloadPage();

      });
  }

  /**
   * Método separado para facilitar los tests
   */
  protected reloadPage(): void {
    location.reload();
  }

}