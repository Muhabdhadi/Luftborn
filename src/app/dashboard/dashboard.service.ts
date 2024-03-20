import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {ProductInterface} from "./product.interface";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    products = environment.fakeStoreBaseUrl + 'products';
    constructor(private http: HttpClient) {}

    getProducts(limit: string): Observable<ProductInterface[]> {
        return this.http.get<ProductInterface[]>(`${this.products}`, {
            params: new HttpParams()
                .set('limit', limit)
        });
    }
}
