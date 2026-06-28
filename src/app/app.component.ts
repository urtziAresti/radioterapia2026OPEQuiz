import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,FooterComponent,CommonModule],
})
export class AppComponent {
  private router = inject(Router);

  showFooter(): boolean {
    const url = this.router.url;
    return url.includes('/login') || url.includes('/welcome');
  }
}