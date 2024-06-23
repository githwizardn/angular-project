// src/app/booking-form/booking-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DummyApiService } from '../services/dummy-api.service'; // Import the DummyApiService

@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['../app.component.css', './booking-form.component.css'],
})
export class BookingFormComponent {
  reservationForm: FormGroup;
  displayResultMessage: boolean = false;
  resultMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private dummyApiService: DummyApiService, // Inject the DummyApiService
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      date: ["", Validators.required],
      time: ["", Validators.required],
    });

    this.reservationForm.valueChanges.subscribe(() => {
      if (this.reservationForm.valid) {
        this.resultMessage = "";
        this.displayResultMessage = false;
      }
    });
  }

  submitForm() {
    if (!this.reservationForm.valid) {
      this.resultMessage = "გთხოვთ შეავსოთ ყველა ველი.";
      this.displayResultMessage = true;
    } else {
      this.dummyApiService.submitForm(this.reservationForm.value)
        .subscribe(
          response => {
            this.resultMessage = "მადლობა დაჯავშნისთვის. ჩვენ მალე დაგიკავშირდებით.";
            this.displayResultMessage = true;
            this.reservationForm.reset();

            setTimeout(() => {
              this.resultMessage = "";
              this.displayResultMessage = false;
            }, 5000);
          },
          error => {
            this.resultMessage = "დაფიქსირდა შეცდომა. გთხოვთ, სცადოთ ხელახლა.";
            this.displayResultMessage = true;
          }
        );
    }
  }
}
