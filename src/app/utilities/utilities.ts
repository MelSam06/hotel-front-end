import {Component, signal, WritableSignal} from '@angular/core';
import {UtilityRequest, UtilityService} from '../services/utilities/utility-service';

@Component({
  selector: 'app-utilities',
  imports: [],
  templateUrl: './utilities.html',
  styleUrl: './utilities.css',
})
export class Utilities {
  list:  WritableSignal<UtilityRequest[]> = signal([]);

  constructor(private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.getUtilities();
  }

  getUtilities() {
    this.utilityService.findAll().subscribe({
      next: (data: UtilityRequest[]) => {
        this.list.set(data);
      },
      error: (err) => console.error("Errore nel caricamento", err)
    });
  }
}
