import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xtyh',
  templateUrl: './xtyh.component.html',
  styleUrls: ['./xtyh.component.css']
})
export class XtyhComponent implements OnInit {

  private title:string

  constructor() { }

  ngOnInit() {
    this.title = "系统优化"
  }

}
