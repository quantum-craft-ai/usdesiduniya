import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DrawerModule } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-left-nav',
  imports: [RouterModule, 
    RippleModule, 
    ButtonModule, 
    CommonModule,
    DrawerModule,
    Ripple,
    AvatarModule,
    StyleClass,
    Drawer,
  ],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.css'
})
export class LeftNavComponent implements OnInit {
  
  floatNav: boolean = false;
  @ViewChild('drawerRef') 
  drawerRef!: Drawer;
  fixedNav: boolean = false;
  visible: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
    console.log(this.fixedNav);
    console.log(this.floatNav);
  }

  checkScreenSize() {
    const isBigScreen = window.matchMedia('(min-width: 992px)').matches;
    this.floatNav = !isBigScreen;
    this.fixedNav = isBigScreen;
  }

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

}
