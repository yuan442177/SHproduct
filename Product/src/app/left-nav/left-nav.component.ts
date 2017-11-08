import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  private lastTab:string[]

  constructor() { }

  ngOnInit() {
  //   this.lastTab = [];
  //   for(let i = 0;i<=30;i++){
  //     this.lastTab.push("第"+i+"个三级菜单")
  //     console.log(this.lastTab)
  // }
  }
}
