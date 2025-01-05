import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-left-nav',
  imports: [RouterModule, RippleModule, ButtonModule, CommonModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.css'
})
export class LeftNavComponent {
  
  @Input()
  visible: boolean = false;
}
