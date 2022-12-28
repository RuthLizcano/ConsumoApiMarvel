import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  newsList=[];

  constructor(private myService: ClienteApiService) {}

  ngOnInit(){
    this.myService.getCategoria('events').subscribe(response=>
      {
        console.log(response.data.results);
        this.newsList=response.data.results;
      });
  }

}
