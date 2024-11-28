import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyType } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(protected client: HttpClient) { }

  public callRequest(): Observable<MyType> {
    return this.client.get<MyType>("http://localhost:8080/welcome")
  }
}
