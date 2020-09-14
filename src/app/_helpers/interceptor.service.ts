import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const APP_ID = "5f5e5c989df0a19e64c13ef3";

    let request = req;

    request = req.clone({
      headers: request.headers.set("app-id", APP_ID),
    });

    return next.handle(request);
  }
}
