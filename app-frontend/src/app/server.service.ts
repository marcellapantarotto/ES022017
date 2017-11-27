import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export  class ServerService{
  constructor(private http: Http) {}
  storeServers(servers: any[])  {
    const headers = new Headers({'Content-Type': 'application/json'});
    //return this.http.post('https://projangular.firebaseio.com/data.json', servers);
    return this.http.put('https://projangular.firebaseio.com/data.json', servers);
  }
  getServers(){
    return this.http.get('https://projangular.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'ID' + server.id;
          }
          return data;
        }
      );
  }
}
