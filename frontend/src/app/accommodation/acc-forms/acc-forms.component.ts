import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-acc-forms',
  imports: [DropdownModule, 
    ToggleSwitchModule, 
    FileUploadModule, 
    ButtonModule, 
    StyleClassModule, 
    InputTextModule,
    TextareaModule,

  ],
  templateUrl: './acc-forms.component.html',
  styleUrl: './acc-forms.component.css',
})
export class AccFormsComponent {

}
