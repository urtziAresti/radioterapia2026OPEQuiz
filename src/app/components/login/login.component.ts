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
    let deviceId = localStorage.getItem('deviceId');

    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem('deviceId', deviceId);
    }

    return deviceId;
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

    // 🔐 SESIÓN PROTEGIDA
    const session = {
      username: usuarioValido.username,
      deviceId,
      loginTime: Date.now()
    };

    localStorage.setItem('userSession', JSON.stringify(session));

    this.router.navigate(['/welcome']);
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o código incorrectos. Inténtalo de nuevo.',
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