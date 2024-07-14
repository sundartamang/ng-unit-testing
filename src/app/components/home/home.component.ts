import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', 
        [Validators.required, Validators.minLength(7), 
          Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)]
        ]
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully');
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }

}
