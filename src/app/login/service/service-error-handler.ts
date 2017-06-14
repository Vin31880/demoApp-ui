import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import {ErrorObservable} from 'rxjs/observable/ErrorObservable';



export class ServiceErrorHandler {
  static createErrorHandler(serviceName: string): (error: any) => ErrorObservable {
    return (error: any) => {
      return ServiceErrorHandler.handleError(serviceName, error);
    };
  }

  private static handleError(serviceName: string, error: any): ErrorObservable {
    let displayMessage = '';

    const status = error.status;
    let message = error['headers'] ? (<Headers>error['headers']).get('ErrorMessage') : null;

    if (!message) {
      message = error['headers'] ? (<Headers>error['headers']).get('Error-Message') : null;
    }

    if (!message) {
      message = error.statusText;
    }

    if (!message) {
      message = 'Server error';
    }

    if (status) {
      displayMessage += status + ' - ';
    }

    displayMessage += message;

    const errorMessage = serviceName + ': ' + displayMessage;

    return Observable.throw(errorMessage);
  }
}

