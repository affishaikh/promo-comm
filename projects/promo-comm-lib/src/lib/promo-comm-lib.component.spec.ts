import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCommLibComponent } from './promo-comm-lib.component';

describe('PromoCommLibComponent', () => {
  let component: PromoCommLibComponent;
  let fixture: ComponentFixture<PromoCommLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoCommLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCommLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
