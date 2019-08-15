import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // the most preferrable style for using selector prperty in components
  // selector: '[app-servers]', 
  // selector: '.app-servers',
  //template: `<app-server></app-server>
  //<hr>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
