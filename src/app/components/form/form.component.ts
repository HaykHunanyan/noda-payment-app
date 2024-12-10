import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      businessType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      hasNodaAccount: [false]
    });
  }

  submitForm() {
    if (this.form.invalid) {
      this.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  markAllAsTouched() {
    Object.values(this.form.controls).forEach((control) => control.markAsTouched());
  }
}
