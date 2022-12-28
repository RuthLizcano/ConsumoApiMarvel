import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  newsList=[];

  constructor(private myService: ClienteApiService) {}

  ngOnInit(){
    this.myService.getCategoria('comics').subscribe(response=>
      {
        console.log(response.data.results);
        this.newsList=response.data.results;
      });
  }


}
