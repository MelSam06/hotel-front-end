import { Component } from '@angular/core';
import {RegistrationService} from '../services/registration/registration-service';
@Component({
  selector: 'app-registration',
  imports: [],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
   constructor (private registrationService: RegistrationService) {}
   register(){
    this.registrationService.register()
   }
}
