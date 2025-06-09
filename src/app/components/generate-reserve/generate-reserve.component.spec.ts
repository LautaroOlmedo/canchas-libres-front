import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReserveComponent } from './generate-reserve.component';

describe('GenerateReserveComponent', () => {
  let component: GenerateReserveComponent;
  let fixture: ComponentFixture<GenerateReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateReserveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
