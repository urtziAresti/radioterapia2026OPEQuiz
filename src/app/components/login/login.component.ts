import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
import usersData from '../../../assets/users.json';
import { addIcons } from 'ionicons';
import {
  lockClosedOutline,
  logInOutline
} from 'ionicons/icons';

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
  usuariosPermitidos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.usuariosPermitidos = usersData;
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
  
    const usuarioValido = this.usuariosPermitidos.find(
      user =>
        user.username.toLowerCase() === username.trim().toLowerCase() &&
        user.code === code.trim()
    );
  
    if (!usuarioValido) {
      await this.presentErrorToast();
      return;
    }
  
    const deviceId = this.getDeviceId();
  
    // 🔐 CONTROL GLOBAL DE USUARIOS
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '{}');
  
    const existingDevice = activeUsers[usuarioValido.username];
  
    // 🚫 SI YA ESTÁ EN OTRO DISPOSITIVO → BLOQUEAR
    if (existingDevice && existingDevice !== deviceId) {
      await this.presentErrorToast('Este usuario ya está activo en otro dispositivo');
      return;
    }
  
    // ✔ registrar sesión global
    activeUsers[usuarioValido.username] = deviceId;
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
  
    // ✔ guardar sesión local
    localStorage.setItem('userSession', JSON.stringify({
      username: usuarioValido.username,
      deviceId
    }));
  
    this.router.navigate(['/welcome']);
  }

  async presentErrorToast(message? :string) {
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