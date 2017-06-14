import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {ServiceErrorHandler} from './service-error-handler';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class LoginService {


  constructor(private http: Http) {
  }

  save(user: User): Observable<User> {

    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log('user-------------------' + body);
    return this.http.post('/demo/saveUser', body, options)
      .map((response: Response) => {
        return this.extractMeasure(response);
      }).catch(ServiceErrorHandler.createErrorHandler('WorkshopPotentialService'));

  }

  authenticateUser(userName: string, password: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      if (userName === 'test' && password === 'test') {
        observer.next(true);
        observer.complete();
      }
    });
  }

  private extractMeasure(response: Response): User {

    const jsonObject: any = this.extractBodyJson(response);

    return User.createWithJson(jsonObject);
  }

  private extractBodyJson(response: Response): any {
    return response.json() || {};
  }

}
