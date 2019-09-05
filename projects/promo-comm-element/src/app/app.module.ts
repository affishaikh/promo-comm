import { BrowserModule } from "@angular/platform-browser";
import { NgModule, DoBootstrap, Injector } from "@angular/core";

import { PromoCommElement } from "./app.component";
import { createCustomElement } from "@angular/elements";
import { PromoCommModule } from "src/app/app.module";
import { PromoCommComponent } from "src/app/app.component";

@NgModule({
  declarations: [PromoCommElement],
  imports: [BrowserModule, PromoCommModule],
  providers: [],
  entryComponents: [PromoCommComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const promoCommElement = createCustomElement(PromoCommComponent, {
      injector: this.injector
    });
    // Register the custom element with the browser.
    customElements.define("promo-comm-element", promoCommElement);
  }
}
