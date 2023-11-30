import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  constructor(private rou:Router){}


  get()
  {
this.rou.navigateByUrl('/we')
  }
}
