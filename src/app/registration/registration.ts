import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration-service';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  imports:[FormsModule],
  standalone: true,
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class Registration {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private registrationService: RegistrationService) {}

  register(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
   };

    this.registrationService.register(user).subscribe({
      next: () => {
        console.log("Registrazione completata");
        alert("Utente registrato!");
      },
      error: (err) => {
        console.error(err);
        alert("Errore nella registrazione");
      }
    });
  }
}


