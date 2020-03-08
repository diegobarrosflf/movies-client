import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { apiKey } from "src/environments/environment";

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = apiKey;
        
        if(req.url.indexOf("?") > -1)
            req = req.clone({ url: `${req.url}&api_key=${token}` }); 
        else
            req = req.clone({ url: `${req.url}?api_key=${token}` }); 

        return next.handle(req);
    }
}
