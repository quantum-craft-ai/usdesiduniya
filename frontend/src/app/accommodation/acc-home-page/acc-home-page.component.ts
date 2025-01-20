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
import { AddPostService } from '../../service/add-post.service';
import { HttpClientModule } from '@angular/common/http';
import { UDDPost } from '../../model/UDDPost';
import { AccFormsComponent } from "../acc-forms/acc-forms.component";

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
    CardModule, 
    SearchBarComponent, 
    LeftNavComponent,
    HttpClientModule,
    AccFormsComponent,
  ],
  templateUrl: './acc-home-page.component.html',
  styleUrl: './acc-home-page.component.css',
  providers: [AddPostService]
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
addPostsData: any;
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

constructor(private addPostService : AddPostService){

}

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
    // let result = this.addPostService.getPosts().subscribe({
    //   next: (data: any) => {
    //     console.log('Received data:', data);
    //     this.addPostsData = data;
    //   },
    //   error: err => {
    //     console.error('getPosts error: ', err)
    //   }
    // });
  } 

  createPost() {
    debugger;
      const accommodationSample: UDDPost = {
        section_PK: "accommodation9",
        city_subsection_SK: "livonia-MI#2BH#",
        city: "Farmington Hills - MI",
        common_fields: {
            actual_price: 3000,
            description: "2 BH apartment available for shared.2",
            offer_price: 1900,
            title: "text description"
        },
        created_at: "2024-07-13T15:07:22",
        item_id: "RAJEEVBANNU_787T44",
        section_fields: {
            accommodation_type: "shared"
        },
        sub_section: "shared",
        type: "add_post",
        updated_at: "",  
        user_name: "RAJEEVBANNU"
    };
    console.log('******ts*****', accommodationSample);
    this.addPostService.createAddPost(accommodationSample).subscribe({
      next: data => {
        console.log('created: ', data)
        this.addPostsData = data;
      },
      error: err => {
        console.error('got error: ', err)
      }
    })
  }
}
