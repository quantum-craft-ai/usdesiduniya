import { Component } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { MultiSelectModule } from 'primeng/multiselect';
import { StyleClassModule } from 'primeng/styleclass';
import { MegaMenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuModule } from 'primeng/megamenu';
import { CommonModule, NgClass } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-acc-home-page',
  imports: [RatingModule,
    FormsModule,
    ButtonModule,
    BadgeModule,
    MenuModule,
    DividerModule,
    MultiSelectModule,
    StyleClassModule,
    AvatarModule,
    MegaMenuModule,
    NgClass,
    CommonModule,
    TabMenuModule,
    CheckboxModule,
    CardModule, SearchBarComponent, LeftNavComponent],
  templateUrl: './acc-home-page.component.html',
  styleUrl: './acc-home-page.component.css'
})
export class AccHomePageComponent {
val1: any;
color4: any;
color3: any;
color8: any;
color7: any;
prices: any[]|undefined;
checked1: any;
checked2: any;
selectedPrice: any;
brands: any[]|undefined;
colors: any[]|undefined;
selectedBrands: any;
selectedColors: any;
items: MegaMenuItem[] | undefined;
value: any;
anyitems: any;
selectedCategories: any[] = [];
visible: boolean = true;
categories: any[] = [
  { name: 'Accounting', key: 'A' },
  { name: 'Marketing', key: 'M' },
  { name: 'Production', key: 'P' },
  { name: 'Research', key: 'R' },
  { name: 'Accounting', key: 'A' },
  { name: 'Marketing', key: 'M' },
  { name: 'Production', key: 'P' },
  { name: 'Research', key: 'R' },
];

  ngOnInit() {
    this.selectedCategories = [this.categories[1]];
    this.items = [
        {
            label: 'Company',
            root: true
        },
        {
            label: 'Resources',
            root: true
        },
        {
            label: 'Contact',
            root: true
        }
    ];
  } 
}
