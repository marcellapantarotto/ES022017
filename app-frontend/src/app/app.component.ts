import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HeadShot';
  content = 'Hello World'

  constructor(){ }

    ngOnInit(){
    }

}
