import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestResponseComponent } from './best-response.component';

describe('BestResponseComponent', () => {
  let component: BestResponseComponent;
  let fixture: ComponentFixture<BestResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestResponseComponent]
    });
    fixture = TestBed.createComponent(BestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
