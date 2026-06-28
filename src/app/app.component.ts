import { Component, inject, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

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

  ngOnInit() {
    this.validateSession();
  }

  validateSession() {
    const session = JSON.parse(localStorage.getItem('userSession') || '{}');
    const deviceId = localStorage.getItem('deviceId');
  
    if (!session.username) return;
  
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '{}');
  
    const serverDevice = activeUsers[session.username];
  
    if (serverDevice && serverDevice !== deviceId) {
      alert('Tu sesión ha sido cerrada desde otro dispositivo');
  
      this.logout();
    }
  }

  logout() {
    const session = JSON.parse(localStorage.getItem('userSession') || '{}');
  
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '{}');
  
    delete activeUsers[session.username];
  
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
  
    localStorage.removeItem('userSession');
  
    this.router.navigate(['/login']);
  }
}