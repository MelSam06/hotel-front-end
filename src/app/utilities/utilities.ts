import { Component } from '@angular/core';
import {UtilityService} from '../services/utilities/utility-service';

@Component({
  selector: 'app-utilities',
  imports: [],
  templateUrl: './utilities.html',
  styleUrl: './utilities.css',
})
export class Utilities {
  list: any;
  id: number = 0;
  name: string = '';
  price: number = 0;
  constructor(private utilityService: UtilityService){}
  ngOnInit() {
    this.getUtilities();
  }
  getUtilities(){
    this.utilityService.findAll().subscribe({
      next: (data) => {
        this.list = data;
      },
      error: (err) => console.error("Errore nel caricamento",err)
    });


}

}
