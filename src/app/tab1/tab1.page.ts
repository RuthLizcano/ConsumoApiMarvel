import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  newsList=[];

  constructor(private myService: ClienteApiService) {}

  ngOnInit(){
    this.myService.getCategoria('characters').subscribe(response=>
      {
        console.log(response.data.results);
        this.newsList=response.data.results;
      });
  }



}
