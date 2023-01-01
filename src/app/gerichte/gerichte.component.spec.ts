import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerichteComponent } from './gerichte.component';

describe('GerichteComponent', () => {
  let component: GerichteComponent;
  let fixture: ComponentFixture<GerichteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerichteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
