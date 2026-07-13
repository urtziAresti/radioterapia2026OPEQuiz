import { Component, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { addIcons } from 'ionicons';
import { lockClosedOutline, logInOutline, personAddOutline } from 'ionicons/icons';
import { LogService } from '../../services/log.service';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular/standalone';
import { MailService } from '../../services/mail-service';
import { I18nService } from '../../../assets/i18n/i18n.service';

addIcons({
  'lock-closed-outline': lockClosedOutline,
  'log-in-outline': logInOutline,
  'person-add-outline': personAddOutline
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class LoginComponent {
  private readonly i18n = inject(I18nService);
  texts = this.i18n.texts;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  private ngZone = inject(NgZone);
  private toastController = inject(ToastController);
  private logService = inject(LogService);
  private mailService = inject(MailService);


  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    code: ['', [Validators.required]]
  });

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
        this.http.post('/api/login', {
          username: username!.trim(),
          code: code!.trim(),
          deviceId
        })
      );

      if (respuesta && respuesta.ok) {
        localStorage.setItem(
          'userSession',
          JSON.stringify({
            username,
            deviceId,
            timestamp: new Date().toISOString(),
            version: 2
          })
        );

        this.ngZone.run(() => {
          this.router.navigate(['/welcome']);
        });

        this.logService.log('LOGIN_SUCCESS', {
          username: respuesta.username
        }).catch(console.error);

      } else {
        await this.presentErrorToast();
      }

    } catch (error: any) {
      const mensajeError =
        error.error?.error || 'Usuario o código incorrectos.';

      await this.presentErrorToast(mensajeError);

      this.logService.log('LOGIN_FAILED', {
        username,
        error: mensajeError
      }).catch(console.error);
    }
  }

  async presentErrorToast(message?: string) {
    const toast = await this.toastController.create({
      message: message || 'Usuario o código incorrectos. Inténtalo de nuevo.',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      buttons: [{ text: 'Cerrar', role: 'cancel' }]
    });

    await toast.present();
  }

  register(){
    this.mailService.sendRegisterMail();
  }
}