import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration-service';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, FormGroup  } from '@angular/forms';
@Component({
  selector: 'app-registration',
 
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class Registration {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private registrationService: RegistrationService) {}

  /*register() {

    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.registrationService.register(user).subscribe({
      next: () => alert('Registrazione completata'),
      error: (err) => alert('Errore: ' + err.message)
    });

  } */
 async register() {
  
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
  try {
    await firstValueFrom(this.registrationService.register(user));
    alert('Registrazione completata');
  } catch (err: any) {
    alert('Errore: ' + err.message);
  }
}
}


