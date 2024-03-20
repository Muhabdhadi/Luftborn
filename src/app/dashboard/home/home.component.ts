import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {ProductInterface} from "../product.interface";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    limit = 10;
    products: ProductInterface[] = [];
    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.getAllProducts();
    }

    getAllProducts() {
        this.dashboardService.getProducts(this.limit.toString()).subscribe({
            next: (products) => {
                console.log(products);
                this.products = products
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
}
