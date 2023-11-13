import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';

import { RecentOrderComponent } from './recent-order/recent-order.component';
import { NewuserRegistrationComponent } from './newuser-registration/newuser-registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ProductTopComponent } from './product-top/product-top.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { chart, charts } from 'highcharts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TopWidgetsComponent,
    SideNavComponent,
    SalesStatisticsComponent,
    RecentOrderComponent,
    NewuserRegistrationComponent,
    ProductTopComponent,
    BalanceOverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
