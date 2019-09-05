import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { PromoCommLibComponent, PromoCommLibModule } from "projects/promo-comm-lib/src/public-api";
import { PromoCommElement } from "./app.component";

@NgModule({
  declarations: [PromoCommElement],
  imports: [BrowserModule, PromoCommLibModule],
  providers: [],
  entryComponents: [PromoCommLibComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const promoCommElement = createCustomElement(PromoCommLibComponent, {
      injector: this.injector
    });
    // Register the custom element with the browser.
    customElements.define("promo-comm-element", promoCommElement);
  }
}
