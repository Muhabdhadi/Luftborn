import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CardComponent} from "./card/card.component";
import {MainCardComponent} from "./main-card/main-card.component";
import {CommonModule} from "@angular/common";
import {BookMarkDirective} from "../shared/directives/book-mark.directive";

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        MainCardComponent,
        BookMarkDirective
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule {}
