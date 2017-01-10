import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';


import { router } from './app-routing.module';


import { AppComponent }  from './app.component';
import { homeComponent }  from './home/home.component';
import { aboutComponent }  from './about/about.component';


@NgModule({
  imports:      [BrowserModule,router,HttpModule],
  declarations: [AppComponent,homeComponent,aboutComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
