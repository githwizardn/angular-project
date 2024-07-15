import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DummyApiService } from '../services/dummy-api.service';

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
    private dummyApiService: DummyApiService,
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2), this.georgianAndEnglishPatternValidator()]],
      lastname: ["", [Validators.required, Validators.minLength(2), this.georgianAndEnglishPatternValidator()]],
      phone: ["", [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ["", [Validators.required, Validators.email]],
      date: ["", [Validators.required, this.validateDate.bind(this)]],
      time: ["", [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]],
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
      this.resultMessage = "გთხოვთ შეავსოთ ყველა ველი სწორად.";
      this.displayResultMessage = true;
    } else {
      this.dummyApiService.submitForm('auth/RESOURCE', this.reservationForm.value)
        .subscribe(
          response => {
            this.resultMessage = "მადლობა თქვენი შეკვეთისთვის, ჩვენ მალე დაგიკავშრდებით.";
            this.displayResultMessage = true;
            this.reservationForm.reset();

            setTimeout(() => {
              this.resultMessage = "";
              this.displayResultMessage = false;
            }, 5000);
          },
          error => {
            this.resultMessage = "დაფიქსირდა შეცდომა, გთხოვთ სცადეთ მოგვიანებით.";
            this.displayResultMessage = true;
          }
        );
    }
  }

  validateDate(control: AbstractControl): { [key: string]: any } | null {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate <= currentDate) {
      return { 'invalidDate': true };
    }
    return null;
  }

  georgianAndEnglishPatternValidator(): any {
    return Validators.pattern('^[a-zA-Zა-ჰ ]+$');
  }
}
