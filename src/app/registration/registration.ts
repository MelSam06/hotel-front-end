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
  console.log(this.firstName, this.lastName, this.email, this.password);

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
 /*register(){
    console.log(this.firstName, this.lastName, this.email, this.password);
   const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    this.registrationService.register(user);
  }*/

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
 /*async register() {
  
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
}*/
  
}


