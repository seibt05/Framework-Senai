// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrija esta linha para styleUrls
})

export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/home']);
  }
  

  validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  validarCPF(cpf: string): boolean {
    const regexCPF = /^\d{11}$/;
    return regexCPF.test(cpf.replace(/[^\d]/g, ''));
  }

  onSubmit(): void {
    const emailOuCpf = this.username;

    if (this.validarEmail(emailOuCpf) || this.validarCPF(emailOuCpf)) {
      const loginValido = true;

      if (loginValido) {
        // Navegar para a página home
        this.router.navigate(['/home']);
      }
    } else {
      alert("E-mail ou CPF inválidos.");
    }
  }
}


/*import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}*/