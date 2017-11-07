import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';


const routerCongig: Routes = [
  {path:'',component:HomeComponent},
  {path:'tabs',component:TabsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    ContentComponent,
    HomeComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerCongig)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
