import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollTo(targetId: string) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yOffset = -100; // Adjust this value to fine-tune the scrolling position
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}
