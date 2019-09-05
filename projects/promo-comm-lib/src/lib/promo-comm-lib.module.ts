import { NgModule } from "@angular/core";
import { PromoCommLibComponent } from "./promo-comm-lib.component";
import { MyLibModule } from "my-lib";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [PromoCommLibComponent],
  imports: [BrowserModule, MyLibModule],
  exports: [PromoCommLibComponent],
  entryComponents: [PromoCommLibComponent]
})
export class PromoCommLibModule {}
