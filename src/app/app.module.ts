import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { TabsComponent } from '@src/app/tabs/tabs.component';
import { ResourcesComponent } from '@src/app/resources/resources.component';
import { OrdersComponent } from '@src/app/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ResourcesComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
