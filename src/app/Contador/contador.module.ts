import { ContadorComponent } from './Contador/Contador.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent

    ]
})

export class ContadorModule{}