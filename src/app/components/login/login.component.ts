import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
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
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuariosPermitidos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    // Inicializamos el formulario reactivo
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Cargamos el JSON estático en el array
    this.usuariosPermitidos = usersData;
  }

  async onLogin() {
    if (this.loginForm.invalid) return;

    const { username, code } = this.loginForm.value;

    // Buscamos si existe el usuario con ese código (pasamos todo a minúsculas para evitar fallos de mayúsculas)
    const usuarioValido = this.usuariosPermitidos.find(
      user => user.username.toLowerCase() === username.trim().toLowerCase() && user.code === code.trim()
    );

    if (usuarioValido) {
      // Login correcto: Guardamos sesión en LocalStorage por si quieres proteger rutas después
      localStorage.setItem('userSession', JSON.stringify(usuarioValido));
      
      // Navegamos a la pantalla de bienvenida
      this.router.navigate(['/welcome']);
    } else {
      // Login incorrecto: Mostramos error con un Toast nativo de Ionic
      await this.presentErrorToast();
    }
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o código incorrectos. Inténtalo de nuevo.',
      duration: 3000,
      position: 'bottom',
      color: 'danger', // Rojo de Ionic para errores
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