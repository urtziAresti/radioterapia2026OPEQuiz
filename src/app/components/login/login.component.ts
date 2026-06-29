import { Component, OnInit, NgZone } from '@angular/core'; // 👈 Añadimos NgZone
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, logInOutline } from 'ionicons/icons';
import { LogService } from '../../../services/log.service';

addIcons({
  'lock-closed-outline': lockClosedOutline,
  'log-in-outline': logInOutline
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private ngZone: NgZone, // 👈 Inyectamos ngZone
    private toastController: ToastController,
    private logService: LogService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  getDeviceId(): string {
    let id = localStorage.getItem('deviceId');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('deviceId', id);
    }
    return id;
  }

  async onLogin() {
    if (this.loginForm.invalid) return;
  
    const { username, code } = this.loginForm.value;
    const deviceId = this.getDeviceId();
  
    try {
      const respuesta: any = await firstValueFrom(
        this.http.post('http://localhost:3000/api/login', { 
          username: username.trim(), 
          code: code.trim(),
          deviceId: deviceId 
        })
      );
  
      if (respuesta && respuesta.ok) {
        // 1. Guardamos los datos de sesión primero
        localStorage.setItem('userSession', JSON.stringify({
          username: respuesta.username,
          deviceId: deviceId
        }));
        
        // 2. 🚀 FORZAMOS la navegación dentro de la Zona de Angular
        this.ngZone.run(() => {
          this.router.navigate(['/welcome']);
        });

        // 3. El log se ejecuta de fondo sin retrasar la app
        this.logService.log('LOGIN_SUCCESS', {
          username: respuesta.username
        }).catch(e => console.error(e));

      } else {
        await this.presentErrorToast();
      }

    } catch (error: any) {
      const mensajeError = error.error?.error || 'Usuario o código incorrectos.';
      await this.presentErrorToast(mensajeError);
      
      this.logService.log('LOGIN_FAILED', {
        username: username,
        error: mensajeError
      }).catch(e => console.error(e));
    }
  }

  async presentErrorToast(message?: string) {
    const toast = await this.toastController.create({
      message: message ? message : 'Usuario o código incorrectos. Inténtalo de nuevo.',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      buttons: [{ text: 'Cerrar', role: 'cancel' }]
    });
    await toast.present();
  }
}