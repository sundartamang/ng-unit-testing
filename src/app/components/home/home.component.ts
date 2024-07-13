import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  btnText: string = "Subscribe";
  isSubscribe: boolean = false;


  subscribe(){
    setTimeout(()=>{
      this.btnText = "Subscribed";
      this.isSubscribe = true;
    }, 3000)
  }

}