import { NgModule } from "@angular/core";
import { MyLibComponent } from "./my-lib.component";
import { CommonModule } from "@angular/common";

@NgModule({
 
  imports:[CommonModule,MyLibComponent],
  exports:[MyLibComponent]
})

export class MyLibModule {}