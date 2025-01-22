import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccHomePageComponent } from './accommodation/acc-home-page/acc-home-page.component';
import { SocialHomeComponent } from './social/social-home/social-home.component';
import { RealestateHomeComponent } from './realestate/realestate-home/realestate-home.component';
import { FoodHomeComponent } from './food/food-home/food-home.component';
import { FinanceHomeComponent } from './finance/finance-home/finance-home.component';
import { LearnHomeComponent } from './learn/learn-home/learn-home.component';
import { HealthHomeComponent } from './health/health-home/health-home.component';
import { TravelHomeComponent } from './travel/travel-home/travel-home.component';
import { FashionHomeComponent } from './fashion/fashion-home/fashion-home.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'social', component: SocialHomeComponent},
    { path: 'accommodation', component: AccHomePageComponent},
    { path: 'realestate', component: RealestateHomeComponent},
    { path: 'food', component: FoodHomeComponent},
    { path: 'finance', component: FinanceHomeComponent},
    { path: 'learn', component: LearnHomeComponent},
    { path: 'health', component: HealthHomeComponent},
    { path: 'travel', component: TravelHomeComponent},
    { path: 'fashion', component: FashionHomeComponent},
    { path: 'ad-post', component: FormComponent},
];
