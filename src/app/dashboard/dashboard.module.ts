import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CardComponent} from "./card/card.component";
import {MainCardComponent} from "./main-card/main-card.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        MainCardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule {}
