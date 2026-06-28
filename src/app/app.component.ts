import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent, CommonModule],
})
export class AppComponent {

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  showFooter = false;

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.showFooter = route.snapshot.data['showFooter'] ?? false;
      });
  }
}