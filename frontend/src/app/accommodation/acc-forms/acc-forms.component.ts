import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-acc-forms',
  imports: [DropdownModule, ToggleSwitchModule, FileUploadModule, ButtonModule],
  templateUrl: './acc-forms.component.html',
  styleUrl: './acc-forms.component.css'
})
export class AccFormsComponent {

}
