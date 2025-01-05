import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, StyleClassModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'frontend';
}
