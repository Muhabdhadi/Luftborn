import {Component, Input} from '@angular/core';
import {ProductInterface} from "../interfaces/product.interface";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() product: ProductInterface | null = null;
}
