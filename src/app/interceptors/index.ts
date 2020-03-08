import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./interceptor";

export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
];
