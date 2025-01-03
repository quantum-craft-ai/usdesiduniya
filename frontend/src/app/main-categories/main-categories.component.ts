import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { ProductService } from '../service/product-service.service';

@Component({
  selector: 'app-main-categories',
  imports: [CarouselModule, ButtonModule, Tag],
  templateUrl: './main-categories.component.html',
  styleUrl: './main-categories.component.css'
})
export class MainCategoriesComponent {
  products!: any[];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().subscribe((products: any) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 5,
              numScroll: 4
          },
          {
              breakpoint: '1199px',
              numVisible: 4,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 2,
              numScroll: 1
          }
      ]
  }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warn';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }
}
