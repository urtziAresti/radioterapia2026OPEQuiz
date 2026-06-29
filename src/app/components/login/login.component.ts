import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // 👈 Añadido para conectar con Vercel
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
  // 💡 Ya no necesitamos la variable usuariosPermitidos aquí localmente

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient, // 👈 Inyectamos HttpClient
    private toastController: ToastController,
    private logService: LogService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Limpio el OnInit ya que no cargamos datos locales
  }

  // 🔐 DEVICE ID
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
  
    try {
      // 🚀 Hacemos la validación segura en el Backend de Vercel
      const respuesta: any = await firstValueFrom(
        this.http.post('/api/login', { 
          username: username.trim(), 
          code: code.trim() 
        })
      );
  
      if (respuesta && respuesta.ok) {
        // Login correcto: Guardamos la sesión (sin contraseñas) devuelta por la API
        localStorage.setItem('userSession', JSON.stringify({
          username: respuesta.username,
          deviceId: this.getDeviceId()
        }));
        
        // Registramos el log de éxito de forma segura
        await this.logService.log('LOGIN_SUCCESS', {
          username: respuesta.username
        });

        // Navegamos a welcome
        this.router.navigate(['/welcome']);
      } else {
        await this.presentErrorToast();
      }

    } catch (error: any) {
      // Si la API devuelve un 401 (Credenciales inválidas) o falla el servidor
      await this.presentErrorToast(error.error?.error || 'Error al iniciar sesión. Inténtalo de nuevo.');
      
      // Dejamos registro del fallo en el LogService
      await this.logService.log('LOGIN_FAILED', {
        username: username,
        error: error.message
      });
    }
  }

  async presentErrorToast(message?: string) {
    const toast = await this.toastController.create({
      message: message ? message : 'Usuario o código incorrectos. Inténtalo de nuevo.',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    await toast.present();
  }
}