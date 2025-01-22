import { Component, Input, Output, output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-form-input',
  imports: [InputTextModule,
        FormsModule,
        FloatLabel,
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  floatLableInputText = output();
  @Input()
  autoComplete: string = "off";
  @Input()
  labelText: any;

  // onInput(event: Event): void {
  //   const inputValue = (event.target as HTMLInputElement).value;
  //   this.floatLableInputText.emit(inputValue);
  // }
}
