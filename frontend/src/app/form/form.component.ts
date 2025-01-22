import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormInputComponent } from '../util-components/form-input/form-input.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {StyleClassModule} from 'primeng/styleclass';

@Component({
  selector: 'app-form',
  imports: [FormInputComponent,
    ButtonModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ToggleSwitchModule,
    FileUploadModule,
    DropdownModule,
    HttpClientModule,
    StyleClassModule,
    
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;
  floatLableInputText!: string;
  countries: any[]|undefined = ['a','b','c'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      adTitle: [''],
      adDescription: ['']
    })

    console.log(this.floatLableInputText);
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  logValue($event: void) {
    console.log('*****', this.floatLableInputText);
  }
}
