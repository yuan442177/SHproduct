import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { JcComponent } from './jcfx/jc.component';
import { NlphComponent } from './nlph/nlph.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { XtyhComponent } from './xtyh/xtyh.component'
import { TjbbComponent } from './tjbb/tjbb.component'


const routerCongig: Routes = [
  {path:'',component:MainComponent},
  {path:'jcfx',component:JcComponent},
  {path:'xtyh',component:XtyhComponent},
  {path:'nlph',component:NlphComponent},
  {path:'tjbb',component:TjbbComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    MainComponent,
    FooterComponent,
    JcComponent,
    NlphComponent,
    TabNavComponent,
    XtyhComponent,
    TjbbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerCongig)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
