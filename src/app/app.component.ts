import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'osm-dashboard';
  ngOnInit(){
    $('button').click(function(){
      alert('Wass up!');
     });
  }
}
