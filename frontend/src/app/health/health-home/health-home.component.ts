import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-health-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './health-home.component.html',
  styleUrl: './health-home.component.css'
})
export class HealthHomeComponent {

}
