import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MailService {
  private readonly email = "urtzi.aresti+OPEAPP@gmail.com";

  sendRegisterMail(): void {
    const subject = encodeURIComponent("Registro App - Test Radioterapia");

    const body = encodeURIComponent(
      `Hola,

El siguiente formulario es para registrarte:

- Nombre y apellidos:
- Usuario:
- Contraseña:

`
    );

    window.open(
      `mailto:${this.email}?subject=${subject}&body=${body}`,
      "_self"
    );
  }

  sendSuggestionsMail() {
    const email = "urtzi.aresti+OPEAPP@gmail.com";
    const subject = encodeURIComponent("Sugerencias OPE - Test Radioterapia");
    const body = encodeURIComponent(
      `Hola,\n\nQuería enviar las siguientes sugerencias:\n\n`
    );

    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self");
  }
}
