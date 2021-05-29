import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search : Subject<String> = new Subject();
  // data : Subject<any[]> = new Subject();
  constructor(private http : HttpClient) { }



public getData() : Observable<any>{
return this.http.get<any>("http://localhost:8080/listItems");
}

public publishSearch(str){
this.search.next(str);
}

public subscribeSearch() {
  return this.search.asObservable();
}



}
