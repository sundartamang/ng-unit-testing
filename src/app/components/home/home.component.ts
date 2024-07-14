import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  marks: any = [30, 50, 70, 95]

  constructor() { }

  ngOnInit(): void {
  }

}
