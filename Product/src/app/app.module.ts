import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { Error404Component } from './error404/error404.component';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';
import { SystemLogComponent } from './system-log/system-log.component';
import { FunNavComponent } from './fun-nav/fun-nav.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MonitoringaaaComponent } from './monitoringaaa/monitoringaaa.component';


const routerCongig: Routes = [
  {path:'',component:HomeComponent},
  // children:[
  //   {path:'monitoring',component:MonitoringComponent},
  //   {path:'monitoringaaa',component:MonitoringaaaComponent}
  // ]},//url方式传参},
  {path:'content',component:ContentComponent,
   children:[
    {path:'',component:MonitoringComponent}
  ]},//url方式传参},
  {path:'tabs',component:TabsComponent},
  {path:'help',component:HelpComponent},
  {path:'user',component:UserComponent},
  {path:'systemlog',component:SystemLogComponent},
  {path:'**',component:Error404Component}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    ContentComponent,
    HomeComponent,
    TabsComponent,
    Error404Component,
    HelpComponent,
    UserComponent,
    SystemLogComponent,
    FunNavComponent,
    MonitoringComponent,
    MonitoringaaaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerCongig)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
