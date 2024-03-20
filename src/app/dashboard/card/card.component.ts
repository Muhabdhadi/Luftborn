import {Component, Input} from '@angular/core';
import {ProductInterface} from "../product.interface";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() product: ProductInterface | null = null;
    colors = [
        '#FF8B64',
        '#55C2E6',
        '#FF5E7D',
        '#F1C75B',
        '#7335D2',
        '#F1C75B',
        '#4BCF82',
        '#7335D2'
    ]
}
