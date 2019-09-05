import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, DoBootstrap } from "@angular/core";
import { MyLibModule } from "my-lib";
import { PromoCommComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [PromoCommComponent],
  imports: [BrowserModule, MyLibModule],
  providers: [],
  entryComponents: [PromoCommComponent]
})
export class PromoCommModule {
  constructor(private injector: Injector) {}

  // ngDoBootstrap() {
  //   const promoCommElement = createCustomElement(PromoCommComponent, {
  //     injector: this.injector
  //   });
  //   // Register the custom element with the browser.
  //   customElements.define("promo-comm-element", promoCommElement);
  // }
}
