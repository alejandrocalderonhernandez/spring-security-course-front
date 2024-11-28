import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { MyType } from './type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private clientService:ClientService){}
 
  response!: string;

  ngOnInit() {
    this.clientService.callRequest().subscribe(r => this.response = r.msj)

  }
}
