import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-left-nav',
  imports: [RouterModule, RippleModule, ButtonModule, CommonModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.css'
})
export class LeftNavComponent implements OnInit {
  
  @Input()
  visible: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    const isSmall = window.matchMedia('(max-width: 1023px)').matches;
    this.visible = isSmall;
  }

}
