import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  scroll(el) {
    el.scrollIntoView();
}

  constructor() { }

  ngOnInit() {
  }

}
