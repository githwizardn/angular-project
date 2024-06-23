import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'; // Import the delay operator

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {

  constructor() {}

  submitForm(formData: any) {
    // Simulate a successful response after a brief delay
    return of({ success: true }).pipe(delay(1000));
  }
}
