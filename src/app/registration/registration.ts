import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration-service';

import { FormsModule } from '@angular/forms';
import {CustomerService} from '../services/customer/customer-service';
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
  dateOfBirthForm: string = '';
  phone: string = '';
  city: string = '';
  email: string = '';
  password: string = '';

  constructor(private registrationService: RegistrationService, private customerService: CustomerService) {}

  register(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    const customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: new Date(this.dateOfBirthForm).toISOString().slice(0, 10),
      email: this.email,
      phone: this.phone,
      city: this.city
    }

    this.registrationService.register(user).subscribe(() => {
      this.customerService.register(customer).subscribe({
        next: () => {
          alert("Utente registrato!");
        },
        error: (err) => {
          console.error(err);
          alert("Errore nella registrazione dell'utente");
        }
      })
    });

  }
}


