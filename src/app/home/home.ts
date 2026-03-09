import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css', })
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;
  autoPlayInterval: any;

  ngAfterViewInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }

  scrollLeft() {
    const element = this.carousel.nativeElement;
    // Se siamo all'inizio, va all'ultima card
    if (element.scrollLeft <= 0) {
      element.scrollTo({ left: element.scrollWidth, behavior: 'smooth' });
    } else {
      element.scrollBy({ left: -element.offsetWidth, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const element = this.carousel.nativeElement;
    // Se siamo alla fine, torna alla prima
    if (element.scrollLeft + element.offsetWidth >= element.scrollWidth - 10) {
      element.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      element.scrollBy({ left: element.offsetWidth, behavior: 'smooth' });
    }
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.scrollRight();
    }, 8000); // 8 secondi
  }

  // // Opzionale: ferma l'autoplay se l'utente clicca
  // stopAutoPlay() {
  //   clearInterval(this.autoPlayInterval);
  // }
}
