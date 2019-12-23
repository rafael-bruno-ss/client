import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ResourcesComponent } from './resources/resources.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'resources',
        component: ResourcesComponent,
        outlet: 'resources'
      },
      {
        path: 'orders',
        component: OrdersComponent,
        outlet: 'orders'
      }
    ]
  }
];
