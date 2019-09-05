import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, DoBootstrap } from "@angular/core";
import { MyLibModule } from "my-lib";
import { AppComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibModule],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const promoCommElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    // Register the custom element with the browser.
    customElements.define("promo-comm-element", promoCommElement);
  }
}
