import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-finance-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './finance-home.component.html',
  styleUrl: './finance-home.component.css'
})
export class FinanceHomeComponent {

}
